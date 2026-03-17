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

async function uploadImages() {
  try {
    // 1. قراءة ملف JSON
    console.log('📖 جاري قراءة products.json...')
    const products = JSON.parse(fs.readFileSync('./products.json', 'utf8'))
    
    // 2. إنشاء خريطة: main_image -> المنتجات
    const imageMap = {}
    products.forEach(p => {
      if (p.main_image) {
        if (!imageMap[p.main_image]) {
          imageMap[p.main_image] = []
        }
        imageMap[p.main_image].push({
          product_code: p.product_code,
          color: p.color_en,
          name: p.name_en
        })
      }
    })

    console.log(`📸 تم العثور على ${Object.keys(imageMap).length} رقم صورة فريد`)

    // 3. رفع الصور
    const imagesFolder = path.join(__dirname, 'images')
    const files = fs.readdirSync(imagesFolder)
    console.log(`🖼️ تم العثور على ${files.length} ملف صورة`)

    let uploaded = 0
    let linked = 0

    for (const file of files) {
      const match = file.match(/^(\d+)\.webp$/)
      if (!match) continue

      const imageNumber = match[1]
      
      // رفع الصورة
      const imagePath = path.join(imagesFolder, file)
      const imageBuffer = fs.readFileSync(imagePath)
      
      console.log(`⬆️ جاري رفع الصورة ${imageNumber}...`)
      const asset = await client.assets.upload('image', imageBuffer, {
        filename: file
      })
      
      console.log(`✅ تم رفع الصورة ${imageNumber}`)
      uploaded++

      // البحث عن المنتجات التي تستخدم هذه الصورة
      const productsToUpdate = imageMap[imageNumber]
      if (productsToUpdate) {
        for (const prod of productsToUpdate) {
          // البحث عن المنتج في Sanity
          const sanityProducts = await client.fetch(
            `*[_type == "product" && product_code == $code && color_en == $color]`,
            { code: prod.product_code, color: prod.color }
          )

          for (const sp of sanityProducts) {
            await client
              .patch(sp._id)
              .set({ 
                image: {
                  _type: 'image',
                  asset: { _type: 'reference', _ref: asset._id }
                }
              })
              .commit()
            console.log(`✅ تم ربط الصورة ${imageNumber} مع ${prod.name} (${prod.color})`)
            linked++
          }
        }
      }
    }

    console.log('\n📊 التقرير النهائي:')
    console.log(`✅ تم رفع: ${uploaded} صورة`)
    console.log(`✅ تم الربط: ${linked} منتج`)
    console.log('🎉 تم الانتهاء بنجاح!')
    
  } catch (error) {
    console.error('❌ خطأ:', error.message)
  }
}

uploadImages()