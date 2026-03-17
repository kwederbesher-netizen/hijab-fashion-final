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

async function findMissingProducts() {
  try {
    // 1. قراءة ملف JSON المحلي
    const localProducts = JSON.parse(fs.readFileSync(productsFile, 'utf8'))
    console.log(`📦 Local products: ${localProducts.length}`)

    // 2. جلب جميع منتجات Sanity
    const sanityProducts = await client.fetch(`*[_type == "product"]{
      _id,
      name_en,
      product_code,
      color_en,
      main_image
    }`)
    console.log(`📦 Sanity products: ${sanityProducts.length}`)

    // 3. إنشاء مجموعة من المنتجات التي تم تحديثها
    const updatedProducts = new Set()
    sanityProducts.forEach(sp => {
      if (sp.main_image) {
        updatedProducts.add(sp._id)
      }
    })

    console.log(`\n✅ Products with images: ${updatedProducts.size}`)
    console.log(`❌ Products without images: ${sanityProducts.length - updatedProducts.size}`)

    // 4. عرض المنتجات التي لا توجد لها صور
    console.log('\n🔍 Products missing images:')
    sanityProducts.forEach(sp => {
      if (!sp.main_image) {
        console.log(`- ${sp.name_en} (${sp.color_en}) [${sp.product_code}]`)
      }
    })

    // 5. البحث في JSON المحلي عن هذه المنتجات
    console.log('\n🔍 Looking in local JSON for missing products:')
    sanityProducts.forEach(sp => {
      if (!sp.main_image) {
        const match = localProducts.find(lp => 
          lp.name_en === sp.name_en && 
          lp.color_en === sp.color_en
        )
        if (match) {
          console.log(`✅ Found in JSON: ${sp.name_en} (${sp.color_en}) -> image ${match.main_image}`)
        } else {
          console.log(`❌ No match in JSON for: ${sp.name_en} (${sp.color_en})`)
        }
      }
    })

  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

findMissingProducts()