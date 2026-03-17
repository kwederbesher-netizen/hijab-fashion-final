const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'ruyb1c3n',
  dataset: 'production',
  token: 'skx5gNtTOsd0nBsyqscUJhFbanpJW0Gwak6CI3nObxsVIRM7OFZe4LotMaLeZeot0bz7Wd1XyuFKDEkWH1v7kKfG8xAsm36sRUX6yLuicLmzUP1Pr4WeikxJw36Lwr7XFUBG5ExGrXzzCX7Hrc4as6L4pMWzuBHuN5M3EDpzm5BouGD3ZwVo',
  useCdn: false,
  apiVersion: '2024-01-01'
})

async function fixMainImageField() {
  try {
    // 1. جلب جميع المنتجات
    const products = await client.fetch(`*[_type == "product"]{
      _id,
      main_image
    }`)

    console.log(`📦 Found ${products.length} products`)
    
    let fixed = 0

    // 2. فحص كل منتج
    for (const product of products) {
      // إذا كان main_image كائناً وليس نصاً
      if (product.main_image && typeof product.main_image === 'object') {
        console.log(`\n🔍 Fixing product: ${product._id}`)
        console.log(`   Current main_image:`, product.main_image)
        
        // محاولة استخراج الرقم من الكائن
        let imageNumber = null
        
        if (product.main_image._ref) {
          // استخراج الرقم من _ref (مثل "image-123-456")
          const match = product.main_image._ref.match(/\d+/)
          if (match) imageNumber = match[0]
        }
        
        if (imageNumber) {
          await client
            .patch(product._id)
            .set({ main_image: imageNumber })
            .commit()
          console.log(`✅ Fixed: main_image -> ${imageNumber}`)
          fixed++
        } else {
          console.log(`❌ Could not extract number from:`, product.main_image)
        }
      }
    }

    console.log('\n📊 FINAL REPORT:')
    console.log(`✅ Fixed: ${fixed} products`)
    
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

fixMainImageField()