const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'ruyb1c3n',
  dataset: 'production',
  token: 'skx5gNtTOsd0nBsyqscUJhFbanpJW0Gwak6CI3nObxsVIRM7OFZe4LotMaLeZeot0bz7Wd1XyuFKDEkWH1v7kKfG8xAsm36sRUX6yLuicLmzUP1Pr4WeikxJw36Lwr7XFUBG5ExGrXzzCX7Hrc4as6L4pMWzuBHuN5M3EDpzm5BouGD3ZwVo',
  useCdn: false,
  apiVersion: '2024-01-01'
})

async function linkAllImages() {
  try {
    // 1. جلب جميع الصور المرفوعة
    const assets = await client.fetch(`*[_type == "sanity.imageAsset"]{
      _id,
      originalFilename
    }`)
    
    console.log(`📸 Found ${assets.length} images in Sanity`)

    // 2. إنشاء خريطة للصور (originalFilename -> asset _id)
    const imageMap = {}
    assets.forEach(asset => {
      const match = asset.originalFilename.match(/^(\d+)\./)
      if (match) {
        imageMap[match[1]] = asset._id
      }
    })

    console.log(`📸 Found ${Object.keys(imageMap).length} numbered images`)

    // 3. جلب جميع المنتجات
    const products = await client.fetch(`*[_type == "product"]{
      _id,
      name_en,
      main_image,
      image
    }`)

    console.log(`📦 Found ${products.length} products`)

    let updated = 0
    let skipped = 0

    // 4. تحديث كل منتج
    for (const product of products) {
      // البحث عن الصورة المناسبة باستخدام main_image (الرقم)
      if (product.main_image && imageMap[product.main_image]) {
        const imageId = imageMap[product.main_image]
        
        // تحديث المنتج إذا لم تكن الصورة مرتبطة بالفعل
        if (!product.image || product.image.asset._ref !== imageId) {
          await client
            .patch(product._id)
            .set({ 
              image: {
                _type: 'image',
                asset: {
                  _type: 'reference',
                  _ref: imageId
                }
              }
            })
            .commit()
          console.log(`✅ Updated: ${product.name_en || product._id} with image ${product.main_image}`)
          updated++
        } else {
          skipped++
        }
      } else {
        console.log(`⚠️ No image found for product ${product.name_en || product._id} (main_image: ${product.main_image})`)
      }
    }

    console.log('\n📊 FINAL REPORT:')
    console.log(`✅ Updated: ${updated} products`)
    console.log(`⏭️ Skipped (already linked): ${skipped} products`)
    console.log('🎉 All done!')
    
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

linkAllImages()