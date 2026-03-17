const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'ruyb1c3n',
  dataset: 'production',
  token: 'skx5gNtTOsd0nBsyqscUJhFbanpJW0Gwak6CI3nObxsVIRM7OFZe4LotMaLeZeot0bz7Wd1XyuFKDEkWH1v7kKfG8xAsm36sRUX6yLuicLmzUP1Pr4WeikxJw36Lwr7XFUBG5ExGrXzzCX7Hrc4as6L4pMWzuBHuN5M3EDpzm5BouGD3ZwVo', // ضع التوكن هنا
  useCdn: false,
  apiVersion: '2024-01-01'
})

async function linkImagesByName() {
  try {
    // 1. جلب جميع الصور المرفوعة
    const assets = await client.fetch(`*[_type == "sanity.imageAsset"]{
      _id,
      originalFilename
    }`)
    
    console.log(`📸 Found ${assets.length} images in Sanity`)

    // 2. إنشاء خريطة للصور حسب اسم الملف
    const imageMap = {}
    assets.forEach(asset => {
      // استخراج الرقم من اسم الملف (مثل "1.webp")
      const match = asset.originalFilename.match(/^(\d+)\./)
      if (match) {
        imageMap[parseInt(match[1])] = asset._id
        console.log(`📸 Image number ${match[1]}: ${asset._id}`)
      }
    })

    console.log(`\n📸 Found ${Object.keys(imageMap).length} numbered images`)
    console.log('Sample image numbers:', Object.keys(imageMap).slice(0, 10).join(', '))

    // 3. جلب جميع المنتجات من JSON المحلي لمعرفة أرقام الصور
    const fs = require('fs')
    const path = require('path')
    const productsFile = path.join(__dirname, 'products.json')
    const localProducts = JSON.parse(fs.readFileSync(productsFile, 'utf8'))
    
    console.log(`\n📦 Found ${localProducts.length} products in local JSON`)

    // 4. إنشاء خريطة للمنتجات حسب الاسم
    const productNameMap = {}
    localProducts.forEach(p => {
      if (p.name_en && p.main_image) {
        const imageNum = parseInt(p.main_image)
        if (!isNaN(imageNum)) {
          productNameMap[p.name_en] = imageNum
        }
      }
    })

    // 5. جلب جميع منتجات Sanity
    const sanityProducts = await client.fetch(`*[_type == "product"]{
      _id,
      name_en,
      image
    }`)

    console.log(`\n📦 Found ${sanityProducts.length} products in Sanity`)

    let updated = 0
    let notFound = 0

    // 6. تحديث كل منتج في Sanity
    for (const sp of sanityProducts) {
      if (!sp.name_en) {
        console.log(`⚠️ Product without name: ${sp._id}`)
        notFound++
        continue
      }

      // البحث عن رقم الصورة لهذا المنتج
      const imageNum = productNameMap[sp.name_en]
      
      if (imageNum && imageMap[imageNum]) {
        const imageId = imageMap[imageNum]
        
        // تحديث المنتج
        await client
          .patch(sp._id)
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
        console.log(`✅ Updated: ${sp.name_en} with image ${imageNum}`)
        updated++
      } else {
        console.log(`❌ No image for: ${sp.name_en} (imageNum: ${imageNum})`)
        notFound++
      }
    }

    console.log('\n📊 FINAL REPORT:')
    console.log(`✅ Updated: ${updated} products`)
    console.log(`❌ Not found: ${notFound} products`)
    console.log('🎉 All done!')
    
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

linkImagesByName()