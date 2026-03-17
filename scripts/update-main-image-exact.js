const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')

const client = createClient({
  projectId: 'ruyb1c3n',
  dataset: 'production',
  token: 'skx5gNtTOsd0nBsyqscUJhFbanpJW0Gwak6CI3nObxsVIRM7OFZe4LotMaLeZeot0bz7Wd1XyuFKDEkWH1v7kKfG8xAsm36sRUX6yLuicLmzUP1Pr4WeikxJw36Lwr7XFUBG5ExGrXzzCX7Hrc4as6L4pMWzuBHuN5M3EDpzm5BouGD3ZwVo',
  useCdn: false,
  apiVersion: '2024-01-01'
})

const productsFile = path.join(__dirname, 'products.json')

async function updateMainImageExact() {
  try {
    // 1. قراءة ملف JSON المحلي
    console.log('📖 Reading products.json...')
    const localProducts = JSON.parse(fs.readFileSync(productsFile, 'utf8'))
    console.log(`📦 Found ${localProducts.length} products in JSON`)

    // 2. إنشاء خريطة دقيقة باستخدام product_code + color
    const exactMap = {}
    localProducts.forEach(lp => {
      // مفتاح فريد: product_code + color_en
      const key = `${lp.product_code}_${lp.color_en || ''}`
      exactMap[key] = lp.main_image
    })

    // 3. جلب جميع المنتجات من Sanity
    console.log('\n🔍 Fetching products from Sanity...')
    const sanityProducts = await client.fetch(`*[_type == "product"]{
      _id,
      name_en,
      product_code,
      color_en
    }`)
    console.log(`📦 Found ${sanityProducts.length} products in Sanity`)

    let updated = 0
    let notFound = 0

    // 4. تحديث كل منتج في Sanity
    for (const sp of sanityProducts) {
      // إنشاء مفتاح للمنتج الحالي
      const spKey = `${sp.product_code || ''}_${sp.color_en || ''}`
      
      // البحث في الخريطة
      const mainImage = exactMap[spKey]
      
      if (mainImage) {
        await client
          .patch(sp._id)
          .set({ main_image: mainImage })
          .commit()
        console.log(`✅ Updated ${sp.name_en} (${sp.color_en}) with main_image: ${mainImage}`)
        updated++
      } else {
        console.log(`⚠️ No match for ${sp.name_en} (${sp.color_en})`)
        notFound++
      }

      // تأخير بسيط
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    console.log('\n📊 FINAL REPORT:')
    console.log(`✅ Updated: ${updated} products`)
    console.log(`⚠️ Not found: ${notFound} products`)
    
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

updateMainImageExact()