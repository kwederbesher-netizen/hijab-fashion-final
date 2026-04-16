// ============================================================
// سكريبت الاستيراد النهائي - متوافق مع Schema الجديد
// ============================================================

const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const pLimit = require('p-limit');
const { randomUUID, createHash } = require('crypto');
require('dotenv').config({ path: '../.env.local' });

// ============================================================
// الإعدادات
// ============================================================
const MY_SANITY_TOKEN = 'skgZVxVuNpT0AcbyWh1dhKPWmK9bxvFN54C4OkoxTLgu9Rfw3KNjMiwc0Az88lXjgM0jQdXE9BwLejl9eYc3aeqajpEEIxf2EShlJspQ3FtlIcOspl9IyUhacfn5S0vdsJb91lx0pdCHQi1UjGkN3Ulq7uDTruekjdZYirbLdizGSWkfjGnk';
const IMAGES_FOLDER = 'D:/final2/';
const IMAGE_EXTENSION = '.webp';
const CONCURRENCY_LIMIT = 10;
const TEST_MODE = false;       // ⚠️ اجعلها false للرفع الكامل
// const TEST_LIMIT = 5;       // ⚠️ علق هذا السطر للرفع الكامل

// ملفات السجل والتقدم
const LOG_FILE = 'import-success.log';
const ERROR_FILE = 'import-errors.log';
const PROGRESS_FILE = 'import-progress.json';

// ============================================================
// إعداد Sanity Client
// ============================================================
const client = createClient({
  projectId: '3k0vx7ep',
  dataset: 'production-final',
  token: MY_SANITY_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

// Cache & Locks
const imageCache = new Map();
const imagePromises = new Map();
let successStream, errorStream;
let existingProductsSet = new Set();

// متغيرات التقدم
let progressData = { success: 0, fail: 0, skipped: 0, completed: 0, total: 0 };

// ============================================================
// دوال مساعدة
// ============================================================
function cleanSku(sku) {
  if (!sku) return '';
  return sku.toString()
    .replace(/"/g, '')           // حذف علامات التنصيص
    .replace(/'/g, '')           // حذف علامات التنصيص المفردة
    .replace(/\s+/g, '-')        // استبدال المسافات بـ -
    .replace(/[^\w\-]/g, '')     // حذف أي رموز أخرى
    .replace(/\-\-+/g, '-')      // دمج الشرطات المتكررة
    .replace(/^-+/, '')          // حذف الشرطة من البداية
    .replace(/-+$/, '');         // حذف الشرطة من النهاية
}

function cleanSlug(text) {
  if (!text) return '';
  return text.toString().toLowerCase().trim()
    .replace(/[\s_]+/g, '-')
    .replace(/[^\w\-]/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

function normalizePrice(p) {
  if (!p && p !== 0) return 0;
  if (typeof p === 'number') return p;
  const cleaned = p.toString().replace(/[^0-9.,]/g, '').replace(',', '.');
  const price = parseFloat(cleaned);
  return isNaN(price) ? 0 : price;
}

async function withRetry(fn, retries = 3, delay = 1000) {
  try {
    return await fn();
  } catch (e) {
    if (retries <= 0) throw e;
    console.log(`   ⚠️ إعادة المحاولة بعد ${delay/1000} ثانية...`);
    await new Promise(r => setTimeout(r, delay));
    return withRetry(fn, retries - 1, delay);
  }
}

function saveProgress() {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify({
    ...progressData,
    lastUpdated: new Date().toISOString()
  }, null, 2));
}

// ============================================================
// دالة رفع الصورة
// ============================================================
async function uploadImage(imageName) {
  if (imageCache.has(imageName)) {
    return imageCache.get(imageName);
  }

  if (imagePromises.has(imageName)) {
    return imagePromises.get(imageName);
  }

  const promise = (async () => {
    const fileNameWithExt = imageName + IMAGE_EXTENSION;
    const filePath = path.join(IMAGES_FOLDER, fileNameWithExt);

    if (!fs.existsSync(filePath)) {
      console.log(`   ⚠️ صورة غير موجودة محلياً: ${imageName}`);
      return null;
    }

    try {
      const fileBuffer = fs.readFileSync(filePath);
      const fileHash = createHash('md5').update(fileBuffer).digest('hex');

      // 1. تحقق من وجود الصورة عن طريق Hash
      const existingByHash = await client.fetch(
        `*[_type == "sanity.imageAsset" && assetMetaData.hash == $hash][0]{_id, url}`,
        { hash: fileHash }
      );

      if (existingByHash) {
        console.log(`   ♻️ صورة موجودة (Hash): ${imageName}`);
        const data = { url: existingByHash.url, assetId: existingByHash._id };
        imageCache.set(imageName, data);
        return data;
      }

      // 2. تحقق عن طريق اسم الملف
      const existingByFilename = await client.fetch(
        `*[_type == "sanity.imageAsset" && originalFilename == $filename][0]{_id, url}`,
        { filename: fileNameWithExt }
      );

      if (existingByFilename) {
        console.log(`   ♻️ صورة موجودة (Filename): ${imageName}`);
        const data = { url: existingByFilename.url, assetId: existingByFilename._id };
        imageCache.set(imageName, data);
        return data;
      }

      // 3. رفع الصورة الجديدة
      const asset = await withRetry(() => 
        client.assets.upload('image', fs.createReadStream(filePath), {
          filename: fileNameWithExt,
        })
      );

      console.log(`   📸 تم الرفع: ${imageName} -> ${asset._id}`);
      
      const data = { url: asset.url, assetId: asset._id };
      imageCache.set(imageName, data);
      return data;
      
    } catch (e) {
      console.log(`   ❌ فشل رفع ${imageName}: ${e.message}`);
      errorStream.write(`${new Date().toISOString()} - فشل رفع صورة ${imageName}: ${e.message}\n`);
      return null;
    }
  })();

  imagePromises.set(imageName, promise);
  const result = await promise;
  imagePromises.delete(imageName);
  return result;
}

// ============================================================
// دالة معالجة الصور
// ============================================================
async function processImages(row, cleanSkuValue) {
  const imageField = row.image;
  if (!imageField) {
    console.log(`   ⚠️ لا توجد صور في CSV للمنتج ${cleanSkuValue}`);
    return null;
  }

  const imageNames = imageField.split(',').map(n => n.trim()).filter(n => n);
  if (imageNames.length === 0) {
    console.log(`   ⚠️ قائمة الصور فارغة للمنتج ${cleanSkuValue}`);
    return null;
  }

  console.log(`   🖼️ جاري معالجة ${imageNames.length} صورة...`);

  const gallery = [];
  let mainUrl = null;

  for (let i = 0; i < imageNames.length; i++) {
    const imageName = imageNames[i];
    console.log(`   📸 معالجة الصورة ${i + 1}/${imageNames.length}: ${imageName}`);
    
    const imgData = await uploadImage(imageName);
    
    if (!imgData || !imgData.url || !imgData.assetId) {
      console.log(`   ❌ فشل رفع/معالجة الصورة: ${imageName}`);
      continue;
    }
    
    let assetId = imgData.assetId;
    if (!assetId.startsWith('image-')) {
      assetId = 'image-' + assetId;
    }
    
    if (mainUrl === null) {
      mainUrl = imgData.url;
    }
    
    gallery.push({
      _type: 'image',
      _key: `${cleanSkuValue}-${i}-${randomUUID()}`,
      asset: {
        _type: 'reference',
        _ref: assetId
      }
    });
  }

  if (gallery.length === 0) {
    console.log(`   ❌ لم يتم رفع أي صورة بنجاح للمنتج ${cleanSkuValue}`);
    return null;
  }

  console.log(`   ✅ اكتملت معالجة الصور: ${gallery.length} صورة في المعرض`);
  return { main: mainUrl, gallery };
}

// ============================================================
// دالة إنشاء المنتج
// ============================================================
function createProduct(row, images, sku) {
  // ✅ تنظيف SKU
  const cleanSkuValue = cleanSku(sku);
  
  // ============================================
  // 1. استخراج البيانات الأساسية
  // ============================================
  const nameEn = row.name_en || '';
  const nameAr = row.name_ar || nameEn;
  const nameDe = row.name_de || nameEn;
  const nameFr = row.name_fr || nameEn;
  const nameIt = row.name_it || nameEn;
  const nameEs = row.name_es || nameEn;

  const catEn = row.category_en || '';
  const catAr = row.category_ar || catEn;
  const catDe = row.category_de || catEn;
  const catFr = row.category_fr || catEn;
  const catIt = row.category_it || catEn;
  const catEs = row.category_es || catEn;

  const colorEn = row.color_en || '';
  const colorAr = row.color_ar || colorEn;
  const colorDe = row.color_de || colorEn;
  const colorFr = row.color_fr || colorEn;
  const colorIt = row.color_it || colorEn;
  const colorEs = row.color_es || colorEn;

  const shortDescEn = row.short_description_en || '';
  const shortDescAr = row.short_description_ar || shortDescEn;
  const shortDescDe = row.short_description_de || shortDescEn;
  const shortDescFr = row.short_description_fr || shortDescEn;
  const shortDescIt = row.short_description_it || shortDescEn;
  const shortDescEs = row.short_description_es || shortDescEn;

  const descEn = row.description_en || '';
  const descAr = row.description_ar || descEn;
  const descDe = row.description_de || descEn;
  const descFr = row.description_fr || descEn;
  const descIt = row.description_it || descEn;
  const descEs = row.description_es || descEn;

  const fabricEn = row.fabric_en || '';
  const fabricAr = row.fabric_ar || fabricEn;
  const fabricDe = row.fabric_de || fabricEn;
  const fabricFr = row.fabric_fr || fabricEn;
  const fabricIt = row.fabric_it || fabricEn;
  const fabricEs = row.fabric_es || fabricEn;

  // ============================================
  // 2. توليد Slug موحد (SKU + لون بالإنجليزية)
  // ============================================
  const cleanColor = cleanSlug(colorEn);
  const unifiedSlug = `${cleanSkuValue}-${cleanColor}`.toLowerCase();
  
  // ============================================
  // 3. توليد Meta Titles و Descriptions
  // ============================================
  const metaTitleEn = `${nameEn} - ${catEn} - ${colorEn} - Hijab Fashion Mall`;
  const metaTitleAr = `${nameAr} - ${catAr} - ${colorAr} - حجاب فاشون مول`;
  const metaTitleDe = `${nameDe} - ${catDe} - ${colorDe} - Hijab Fashion Mall`;
  const metaTitleFr = `${nameFr} - ${catFr} - ${colorFr} - Hijab Fashion Mall`;
  const metaTitleIt = `${nameIt} - ${catIt} - ${colorIt} - Hijab Fashion Mall`;
  const metaTitleEs = `${nameEs} - ${catEs} - ${colorEs} - Hijab Fashion Mall`;

  const metaDescEn = shortDescEn || `Shop ${nameEn} in ${colorEn} at Hijab Fashion Mall. Premium Turkish quality.`;
  const metaDescAr = shortDescAr || `تسوق ${nameAr} باللون ${colorAr} من حجاب فاشون مول. جودة تركية فاخرة.`;
  const metaDescDe = shortDescDe || `Kaufen Sie ${nameDe} in ${colorDe} im Hijab Fashion Mall.`;
  const metaDescFr = shortDescFr || `Achetez ${nameFr} en ${colorFr} chez Hijab Fashion Mall.`;
  const metaDescIt = shortDescIt || `Acquista ${nameIt} in ${colorIt} da Hijab Fashion Mall.`;
  const metaDescEs = shortDescEs || `Compra ${nameEs} en ${colorEs} en Hijab Fashion Mall.`;

  // ============================================
  // 4. توليد Alt Text للصور
  // ============================================
  const altText = `${nameEn} - ${catEn} - ${colorEn} - Hijab Fashion Mall`;

  // ============================================
  // 5. بناء mainImage مع alt text
  // ============================================
  const ref = images?.gallery?.[0]?.asset?._ref;
  const mainImage = ref
    ? {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: ref
        },
        alt: altText
      }
    : null;

  // ============================================
  // 6. إضافة alt text لجميع صور المعرض
  // ============================================
  if (images?.gallery) {
    images.gallery.forEach((img, i) => {
      img.alt = `${altText} - Image ${i + 1}`;
    });
  }

  // ============================================
  // 7. تحديد RSS و Plus Sizes
  // ============================================
  const rssValue = row.rss === 'single' ? 'single' : 'packet';
  const plusSizesValue = row.plus_sizes === 'Yes' ? 'Yes' : 'No';
  const isNewValue = row.is_new === 'Yes' ? 'Yes' : 'No';
  const isBestsellerValue = row.is_bestseller === 'Yes' ? 'Yes' : 'No';

  // ============================================
  // 8. بناء كائن المنتج النهائي
  // ============================================
  return {
    _id: unifiedSlug,  // ✅ ID فريد = SKU-لون (نظيف)
    _type: 'product',
    
    // معلومات أساسية
    product_code: sku,  // ✅ SKU الأصلي للعرض
    price_usd: normalizePrice(row.price),
    pcs_per_packet: parseInt(row.packet) || 1,
    sizes: row.sizes || '',
    
    // ✅ الصور
    mainImage: mainImage,
    images: images?.gallery || [],
    alt_text: altText,
    
    // ✅ Slugs (متطابقة لجميع اللغات)
    slug_en: unifiedSlug,
    slug_ar: unifiedSlug,
    slug_de: unifiedSlug,
    slug_fr: unifiedSlug,
    slug_it: unifiedSlug,
    slug_es: unifiedSlug,
    
    // الأسماء (6 لغات)
    name_en: nameEn,
    name_ar: nameAr,
    name_de: nameDe,
    name_fr: nameFr,
    name_it: nameIt,
    name_es: nameEs,
    
    // التصنيفات (6 لغات)
    category_main_en: catEn,
    category_main_ar: catAr,
    category_main_de: catDe,
    category_main_fr: catFr,
    category_main_it: catIt,
    category_main_es: catEs,
    
    // الألوان (6 لغات)
    color_en: colorEn,
    color_ar: colorAr,
    color_de: colorDe,
    color_fr: colorFr,
    color_it: colorIt,
    color_es: colorEs,
    
    // الأقمشة (6 لغات)
    fabric_en: fabricEn,
    fabric_ar: fabricAr,
    fabric_de: fabricDe,
    fabric_fr: fabricFr,
    fabric_it: fabricIt,
    fabric_es: fabricEs,
    
    // الوصف القصير (6 لغات)
    short_description_en: shortDescEn,
    short_description_ar: shortDescAr,
    short_description_de: shortDescDe,
    short_description_fr: shortDescFr,
    short_description_it: shortDescIt,
    short_description_es: shortDescEs,
    
    // الوصف الطويل (6 لغات)
    description_en: descEn,
    description_ar: descAr,
    description_de: descDe,
    description_fr: descFr,
    description_it: descIt,
    description_es: descEs,
    
    // Meta Titles (6 لغات)
    meta_title_en: metaTitleEn,
    meta_title_ar: metaTitleAr,
    meta_title_de: metaTitleDe,
    meta_title_fr: metaTitleFr,
    meta_title_it: metaTitleIt,
    meta_title_es: metaTitleEs,
    
    // Meta Descriptions (6 لغات)
    meta_description_en: metaDescEn,
    meta_description_ar: metaDescAr,
    meta_description_de: metaDescDe,
    meta_description_fr: metaDescFr,
    meta_description_it: metaDescIt,
    meta_description_es: metaDescEs,
    
    // حالات المنتج
    rss: rssValue,
    plus_sizes: plusSizesValue,
    is_new: isNewValue,
    is_bestseller: isBestsellerValue,
    stock_status: 'in_stock',
    collection: row.collection || '',
  };
}

// ============================================================
// الدالة الرئيسية
// ============================================================
async function importProducts() {
  console.log('\n🚀 بدء الاستيراد الاحترافي (متوافق مع Schema الجديد)\n');

  if (fs.existsSync(LOG_FILE)) fs.unlinkSync(LOG_FILE);
  if (fs.existsSync(ERROR_FILE)) fs.unlinkSync(ERROR_FILE);
  successStream = fs.createWriteStream(LOG_FILE, { flags: 'a' });
  errorStream = fs.createWriteStream(ERROR_FILE, { flags: 'a' });

  console.log('📋 جاري تحميل المنتجات الموجودة...');
  const existingProducts = await client.fetch(`*[_type=="product"]._id`);
  existingProductsSet = new Set(existingProducts);
  console.log(`ℹ️ تم العثور على ${existingProductsSet.size} منتج موجود مسبقاً.\n`);

  const rows = [];
  await new Promise(r => fs.createReadStream('products.csv').pipe(csv()).on('data', d => rows.push(d)).on('end', r));

  let productsToProcess = rows;
  if (TEST_MODE) {
    const limit = typeof TEST_LIMIT !== 'undefined' ? TEST_LIMIT : 5;
    productsToProcess = rows.slice(0, limit);
    console.log(`🧪 وضع الاختبار: معالجة ${limit} منتج فقط.\n`);
  } else {
    console.log(`📊 ${rows.length} منتج للإستيراد.\n`);
  }

  progressData.total = productsToProcess.length;

  const limit = pLimit(CONCURRENCY_LIMIT);
  let success = 0, fail = 0, skipped = 0, completed = 0;
  const total = productsToProcess.length;

  const tasks = productsToProcess.map((row, index) => limit(async () => {
    const sku = row.SKU;
    if (!sku) return;

    // ✅ استخدام SKU النظيف للتحقق من الوجود
    const cleanSkuValue = cleanSku(sku);
    const colorEn = row.color_en || '';
    const cleanColor = cleanSlug(colorEn);
    const productId = `${cleanSkuValue}-${cleanColor}`.toLowerCase();

    if (existingProductsSet.has(productId)) {
      console.log(`⏭️ [${index + 1}/${total}] تخطي (موجود): ${sku} - ${colorEn}`);
      skipped++;
      completed++;
      progressData.skipped = skipped;
      progressData.completed = completed;
      saveProgress();
      return;
    }

    console.log(`\n🔄 [${index + 1}/${total}] معالجة: ${sku} - ${colorEn}`);
    
    try {
      const images = await processImages(row, cleanSkuValue);
      const product = createProduct(row, images, sku);
      
      await withRetry(() => client.createOrReplace(product));
      
      console.log(`   ✅ تم: ${product.slug_en}`);
      successStream.write(`${new Date().toISOString()} - SUCCESS: ${sku} - ${product.slug_en}\n`);
      success++;
      
    } catch (e) {
      console.log(`   ❌ فشل: ${e.message}`);
      errorStream.write(`${new Date().toISOString()} - FAIL: ${sku} - ${e.message}\n`);
      fail++;
    } finally {
      completed++;
      console.log(`📈 التقدم: ${completed}/${total} (✅ ${success} | ❌ ${fail} | ⏭️ ${skipped})`);
      
      progressData = { success, fail, skipped, completed, total };
      saveProgress();
    }
  }));

  await Promise.all(tasks);

  successStream.end();
  errorStream.end();

  console.log('\n' + '='.repeat(70));
  console.log('📊 تقرير الاستيراد النهائي:');
  console.log('='.repeat(70));
  console.log(`✅ تم رفع بنجاح: ${success} منتج`);
  console.log(`❌ فشل الرفع: ${fail} منتج`);
  console.log(`⏭️ تم تخطي: ${skipped} منتج`);
  console.log(`💾 الصور في Cache: ${imageCache.size}`);
  console.log(`📄 سجل النجاح: ${LOG_FILE}`);
  console.log(`📄 سجل الأخطاء: ${ERROR_FILE}`);
  console.log(`📊 سجل التقدم: ${PROGRESS_FILE}`);
  console.log('='.repeat(70));
}

// ============================================================
// تشغيل السكريبت
// ============================================================
importProducts().catch(console.error);