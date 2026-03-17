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

async function updateProductCodes() {
  try {
    // 1. قراءة ملف JSON المحلي
    console.log('📖 Reading local products.json...')
    const localProducts = JSON.parse(fs.readFileSync(productsFile, 'utf8'))
    console.log(`✅ Found ${localProducts.length} products in local JSON`)

    // 2. جلب جميع المنتجات من Sanity
    console.log('\n🔍 Fetching products from Sanity...')
    const sanityProducts = await client.fetch(`*[_type == "product"]{
      _id,
      name_en,
      name
    }`)
    console.log(`✅ Found ${sanityProducts.length} products in Sanity`)

    // 3. تحديث كل منتج
    let updated = 0
    let notFound = 0

    for (const localProduct of localProducts) {
      // البحث عن منتج مطابق في Sanity باستخدام الاسم
      const sanityMatch = sanityProducts.find(sp => 
        sp.name_en === localProduct.name_en || 
        sp.name === localProduct.name_en
      )

      if (sanityMatch) {
        console.log(`\n🔄 Updating: ${localProduct.name_en}`)
        console.log(`   Setting code: ${localProduct.product_code}`)
        
        await client
          .patch(sanityMatch._id)
          .set({ product_code: localProduct.product_code })
          .commit()
        
        updated++
      } else {
        console.log(`❌ No match for: ${localProduct.name_en}`)
        notFound++
      }

      // تأخير بسيط لتجنب ضغط API
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    console.log('\n📊 FINAL REPORT:')
    console.log(`✅ Updated: ${updated} products`)
    console.log(`❌ Not found: ${notFound} products`)
    
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

updateProductCodes()