const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'ruyb1c3n',
  dataset: 'production',
  token: 'skx5gNtTOsd0nBsyqscUJhFbanpJW0Gwak6CI3nObxsVIRM7OFZe4LotMaLeZeot0bz7Wd1XyuFKDEkWH1v7kKfG8xAsm36sRUX6yLuicLmzUP1Pr4WeikxJw36Lwr7XFUBG5ExGrXzzCX7Hrc4as6L4pMWzuBHuN5M3EDpzm5BouGD3ZwVo', // ضع التوكن
  useCdn: false,
  apiVersion: '2024-01-01'
})

async function fixMainImage() {
  try {
    // 1. جلب جميع المنتجات
    const products = await client.fetch(`*[_type == "product"]{
      _id,
      name_en,
      main_image
    }`)
    
    console.log(`📦 Found ${products.length} products`)
    
    let updated = 0
    let noImage = 0

    // 2. فحص كل منتج
    for (const product of products) {
      let imageNumber = null
      
      // استخراج الرقم من main_image الحالي
      if (product.main_image && typeof product.main_image === 'object' && product.main_image._ref) {
        const match = product.main_image._ref.match(/\d+/)
        if (match) imageNumber = match[0]
      }
      
      if (imageNumber) {
        // تحديث main_image ليكون نصاً (رقم الصورة)
        await client
          .patch(product._id)
          .set({ main_image: imageNumber })
          .commit()
        console.log(`✅ Updated ${product.name_en} with main_image: ${imageNumber}`)
        updated++
      } else {
        console.log(`⚠️ No image number for ${product.name_en}`)
        noImage++
      }
    }
    
    console.log('\n📊 FINAL REPORT:')
    console.log(`✅ Updated: ${updated} products`)
    console.log(`⚠️ No image: ${noImage} products`)
    
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

fixMainImage()