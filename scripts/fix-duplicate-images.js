const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'ruyb1c3n',
  dataset: 'production',
  token: 'skx5gNtTOsd0nBsyqscUJhFbanpJW0Gwak6CI3nObxsVIRM7OFZe4LotMaLeZeot0bz7Wd1XyuFKDEkWH1v7kKfG8xAsm36sRUX6yLuicLmzUP1Pr4WeikxJw36Lwr7XFUBG5ExGrXzzCX7Hrc4as6L4pMWzuBHuN5M3EDpzm5BouGD3ZwVo', // ضع التوكن الخاص بك
  useCdn: false,
  apiVersion: '2024-01-01'
})

async function fixDuplicateImages() {
  try {
    // 1. جلب جميع الصور المرفوعة
    const assets = await client.fetch(`*[_type == "sanity.imageAsset"]{
      _id,
      originalFilename
    }`)
    
    console.log(`📸 Found ${assets.length} images in Sanity`)

    // 2. إنشاء خريطة للصور (رقم الصورة -> asset _id)
    const imageMap = {}
    assets.forEach(asset => {
      const match = asset.originalFilename.match(/^(\d+)\./)
      if (match) {
        imageMap[match[1]] = asset._id
        console.log(`📸 Image number ${match[1]}: ${asset._id}`)
      }
    })

    // 3. جلب جميع المنتجات مع main_image
    const products = await client.fetch(`*[_type == "product"]{
      _id,
      name_en,
      product_code,
      main_image,
      image
    }`)

    console.log(`\n📦 Found ${products.length} products`)

    let updated = 0
    let skipped = 0
    let noImage = 0

    // 4. تحديث كل منتج
    for (const product of products) {
      // إذا كان main_image موجوداً (ككائن وليس رقماً)
      if (product.main_image && typeof product.main_image === 'object') {
        console.log(`\n🔍 Product: ${product.name_en} (${product.product_code})`)
        console.log(`   Current main_image:`, product.main_image)
        
        // محاولة استخراج رقم الصورة من main_image
        let imageNumber = null
        if (product.main_image._ref) {
          const match = product.main_image._ref.match(/\d+/)
          if (match) imageNumber = match[0]
        }
        
        if (imageNumber && imageMap[imageNumber]) {
          // تحديث المنتج بالصورة الصحيحة
          await client
            .patch(product._id)
            .set({ 
              image: {
                _type: 'image',
                asset: {
                  _type: 'reference',
                  _ref: imageMap[imageNumber]
                }
              }
            })
            .commit()
          console.log(`✅ Updated with image ${imageNumber}`)
          updated++
        } else {
          console.log(`❌ No image found for number ${imageNumber}`)
          noImage++
        }
      } 
      // إذا كان main_image رقماً
      else if (product.main_image && typeof product.main_image === 'string') {
        const imageNumber = product.main_image
        if (imageMap[imageNumber]) {
          await client
            .patch(product._id)
            .set({ 
              image: {
                _type: 'image',
                asset: {
                  _type: 'reference',
                  _ref: imageMap[imageNumber]
                }
              }
            })
            .commit()
          console.log(`✅ Updated ${product.name_en} with image ${imageNumber}`)
          updated++
        } else {
          console.log(`❌ No image found for number ${imageNumber}`)
          noImage++
        }
      } else {
        console.log(`⚠️ No main_image for ${product.name_en}`)
        skipped++
      }
    }

    console.log('\n📊 FINAL REPORT:')
    console.log(`✅ Updated: ${updated} products`)
    console.log(`⏭️ Skipped: ${skipped} products (no main_image)`)
    console.log(`❌ No image found: ${noImage} products`)
    
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

fixDuplicateImages()