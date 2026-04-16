// ============================================================
// سكريبت تنظيف كامل للداتا سيت (منتجات + صور)
// ============================================================

const { createClient } = require('@sanity/client');
require('dotenv').config({ path: '../.env.local' });

// ⚠️ استخدم نفس التوكن
const MY_SANITY_TOKEN = 'skgZVxVuNpT0AcbyWh1dhKPWmK9bxvFN54C4OkoxTLgu9Rfw3KNjMiwc0Az88lXjgM0jQdXE9BwLejl9eYc3aeqajpEEIxf2EShlJspQ3FtlIcOspl9IyUhacfn5S0vdsJb91lx0pdCHQi1UjGkN3Ulq7uDTruekjdZYirbLdizGSWkfjGnk';

const client = createClient({
  projectId: '3k0vx7ep',
  dataset: 'production-final',
  token: MY_SANITY_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

async function cleanDataset() {
  console.log('\n🧹 جاري تنظيف الداتا سيت بالكامل...\n');
  
  try {
    // 1. حذف جميع المنتجات
    console.log('📦 جاري حذف المنتجات...');
    const products = await client.fetch(`*[_type == "product"]{_id, product_code}`);
    
    if (products.length > 0) {
      const productTransaction = client.transaction();
      products.forEach((product) => {
        productTransaction.delete(product._id);
        console.log(`   🗑️  حذف منتج: ${product.product_code || product._id}`);
      });
      await productTransaction.commit();
      console.log(`✅ تم حذف ${products.length} منتج.\n`);
    } else {
      console.log(`ℹ️ لا توجد منتجات للحذف.\n`);
    }

    // 2. حذف جميع الصور المرفوعة (assets)
    console.log('🖼️  جاري حذف الصور...');
    const images = await client.fetch(`*[_type == "sanity.imageAsset"]{_id, originalFilename}`);
    
    if (images.length > 0) {
      const imageTransaction = client.transaction();
      images.forEach((image) => {
        imageTransaction.delete(image._id);
        console.log(`   🗑️  حذف صورة: ${image.originalFilename || image._id}`);
      });
      await imageTransaction.commit();
      console.log(`✅ تم حذف ${images.length} صورة.\n`);
    } else {
      console.log(`ℹ️ لا توجد صور للحذف.\n`);
    }

    // 3. حذف أي مستندات أخرى قد تكون موجودة (اختياري - احتياط)
    console.log('🔍 جاري البحث عن مستندات أخرى...');
    const otherDocs = await client.fetch(`*[!(_type in ["product", "sanity.imageAsset"])]{_id, _type}`);
    
    if (otherDocs.length > 0) {
      console.log(`⚠️ تم العثور على ${otherDocs.length} مستند إضافي.`);
      const otherTransaction = client.transaction();
      otherDocs.forEach((doc) => {
        otherTransaction.delete(doc._id);
        console.log(`   🗑️  حذف: ${doc._type} - ${doc._id}`);
      });
      await otherTransaction.commit();
      console.log(`✅ تم حذف المستندات الإضافية.\n`);
    }

    console.log('🎉 تم تنظيف الداتا سيت بالكامل بنجاح!\n');
    console.log('ℹ️  الآن يمكنك الدخول إلى Sanity Studio وسيعمل بشكل طبيعي.');
    
  } catch (error) {
    console.error('❌ فشل في تنظيف الداتا سيت:', error.message);
  }
}

// تنفيذ التنظيف
cleanDataset();