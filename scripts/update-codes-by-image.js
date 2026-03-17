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

async function updateCodes() {
  try {
    // 1. قراءة JSON المحلي
    const localProducts = JSON.parse(fs.readFileSync(productsFile, 'utf8'))
    console.log(`📦 Local products: ${localProducts.length}`)

    // 2. إنشاء خريطة بالصور
    const imageMap = {}
    localProducts.forEach(p => {
      if (p.main_image) {
        imageMap[p.main_image] = p
      }
    })

    // 3. جلب جميع منتجات Sanity
    const sanityProducts = await client.fetch(`*[_type == "product"]{
      _id,
      name,
      name_en,
      product_code
    }`)

    console.log(`📦 Sanity products: ${sanityProducts.length}`)

    let updated = 0
    let notFound = 0

    // 4. تحديث كل منتج في Sanity
    for (let i = 0; i < sanityProducts.length; i++) {
      const sp = sanityProducts[i]
      
      // البحث في JSON عن منتج بنفس الاسم والترتيب
      // هذا حل مؤقت، الحل الأمثل هو استخدام حقل فريد
      const localMatch = localProducts.find(lp => 
        lp.name_en === sp.name || 
        lp.name_en === sp.name_en
      )

      if (localMatch) {
        console.log(`\n🔄 [${i + 1}/${sanityProducts.length}] Updating: ${sp.name}`)
        console.log(`   Setting code: ${localMatch.product_code}`)
        
        await client
          .patch(sp._id)
          .set({ product_code: localMatch.product_code })
          .commit()
        
        updated++
        
        // إزالة المنتج من القائمة المحلية لمنع تكرار الاستخدام
        const index = localProducts.findIndex(lp => lp.name_en === localMatch.name_en)
        if (index !== -1) localProducts.splice(index, 1)
        
      } else {
        console.log(`❌ No match for: ${sp.name}`)
        notFound++
      }

      await new Promise(resolve => setTimeout(resolve, 100))
    }

    console.log('\n📊 FINAL REPORT:')
    console.log(`✅ Updated: ${updated} products`)
    console.log(`❌ Not found: ${notFound} products`)
    console.log(`📦 Remaining local products: ${localProducts.length}`)

  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

updateCodes()