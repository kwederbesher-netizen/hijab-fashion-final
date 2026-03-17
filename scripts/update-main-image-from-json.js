const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')

const client = createClient({
  projectId: 'ruyb1c3n',
  dataset: 'production',
  token: 'skx5gNtTOsd0nBsyqscUJhFbanpJW0Gwak6CI3nObxsVIRM7OFZe4LotMaLeZeot0bz7Wd1XyuFKDEkWH1v7kKfG8xAsm36sRUX6yLuicLmzUP1Pr4WeikxJw36Lwr7XFUBG5ExGrXzzCX7Hrc4as6L4pMWzuBHuN5M3EDpzm5BouGD3ZwVo', // ضع التوكن الجديد
  useCdn: false,
  apiVersion: '2024-01-01'
})

const productsFile = path.join(__dirname, 'products.json')

async function updateMainImage() {
  try {
    // 1. قراءة ملف JSON المحلي
    console.log('📖 Reading products.json...')
    const localProducts = JSON.parse(fs.readFileSync(productsFile, 'utf8'))
    console.log(`📦 Found ${localProducts.length} products in JSON`)

    // 2. جلب جميع المنتجات من Sanity
    console.log('\n🔍 Fetching products from Sanity...')
    const sanityProducts = await client.fetch(`*[_type == "product"]{
      _id,
      name_en,
      product_code
    }`)
    console.log(`📦 Found ${sanityProducts.length} products in Sanity`)

    // 3. إنشاء خريطة للمنتجات المحلية باستخدام product_code والاسم
    const localMap = {}
    localProducts.forEach(lp => {
      // استخدام مفتاح مركب (product_code + name) للتمييز
      const key = `${lp.product_code}_${lp.name_en}`
      localMap[key] = lp.main_image
    })

    let updated = 0
    let notFound = 0

    // 4. تحديث كل منتج في Sanity
    for (const sp of sanityProducts) {
      // البحث عن المنتج المطابق في JSON
      const localMatch = localProducts.find(lp => 
        lp.name_en === sp.name_en || 
        (lp.product_code === sp.product_code)
      )

      if (localMatch && localMatch.main_image) {
        await client
          .patch(sp._id)
          .set({ main_image: localMatch.main_image })
          .commit()
        console.log(`✅ Updated ${sp.name_en} with main_image: ${localMatch.main_image}`)
        updated++
      } else {
        console.log(`⚠️ No match for ${sp.name_en}`)
        notFound++
      }

      // تأخير بسيط لتجنب ضغط API
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    console.log('\n📊 FINAL REPORT:')
    console.log(`✅ Updated: ${updated} products`)
    console.log(`⚠️ Not found: ${notFound} products`)
    
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

updateMainImage()