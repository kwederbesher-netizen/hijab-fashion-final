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
const imagesFolder = path.join(__dirname, 'images')

// دالة لتوحيد الأسماء للبحث
function normalizeName(name) {
  if (!name) return ''
  return name.toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

async function uploadImages() {
  try {
    // 1. قراءة ملف JSON المحلي
    console.log('📖 Reading local products.json...')
    const localProducts = JSON.parse(fs.readFileSync(productsFile, 'utf8'))
    console.log(`📦 Found ${localProducts.length} products in local JSON`)

    // 2. إنشاء خريطة للصور
    const imageMap = {}
    localProducts.forEach(p => {
      if (p.main_image) {
        imageMap[p.main_image] = p
      }
    })
    console.log(`📸 Found ${Object.keys(imageMap).length} unique image numbers`)

    // 3. جلب جميع منتجات Sanity
    console.log('\n🔍 Fetching products from Sanity...')
    const sanityProducts = await client.fetch(`*[_type == "product"]{
      _id,
      name,
      name_en,
      nameAr,
      product_code
    }`)
    console.log(`📦 Found ${sanityProducts.length} products in Sanity`)

    // إنشاء خريطة للبحث بالاسم الطبيعي
    const sanityNameMap = {}
    sanityProducts.forEach(sp => {
      const names = [
        sp.name,
        sp.name_en,
        sp.nameAr
      ].filter(Boolean)
      
      names.forEach(name => {
        sanityNameMap[normalizeName(name)] = sp._id
      })
    })

    // 4. قراءة ملفات الصور
    const files = fs.readdirSync(imagesFolder)
    console.log(`🖼️ Found ${files.length} image files`)

    let uploaded = 0
    let skipped = 0
    let errors = 0

    // 5. رفع كل صورة
    for (const file of files) {
      const match = file.match(/^(\d+)\.webp$/)
      if (!match) {
        skipped++
        continue
      }

      const imageNumber = match[1]
      
      if (!imageMap[imageNumber]) {
        console.log(`⚠️ No product in JSON for image ${imageNumber}`)
        skipped++
        continue
      }

      const localProduct = imageMap[imageNumber]
      const imagePath = path.join(imagesFolder, file)
      
      try {
        console.log(`\n⬆️ [${uploaded + 1}] Uploading image ${imageNumber} for: ${localProduct.name_en}`)
        
        // رفع الصورة
        const imageBuffer = fs.readFileSync(imagePath)
        const asset = await client.assets.upload('image', imageBuffer, {
          filename: file
        })
        
        console.log(`✅ Uploaded: ${file}`)
        
        // البحث عن المنتج في Sanity
        const normalizedLocalName = normalizeName(localProduct.name_en)
        const sanityId = sanityNameMap[normalizedLocalName]
        
        if (sanityId) {
          await client
            .patch(sanityId)
            .set({ 
              image: {
                _type: 'image',
                asset: {
                  _type: 'reference',
                  _ref: asset._id
                }
              }
            })
            .commit()
          console.log(`✅ Updated product: ${localProduct.name_en}`)
          uploaded++
        } else {
          console.log(`❌ No match found for: ${localProduct.name_en}`)
          console.log('   Trying alternative search...')
          
          // بحث بديل: استخدم أول كلمتين من الاسم
          const nameParts = localProduct.name_en.split(' ').slice(0, 2).join(' ')
          const alternativeId = sanityProducts.find(sp => 
            (sp.name && sp.name.includes(nameParts)) ||
            (sp.name_en && sp.name_en.includes(nameParts))
          )?._id
          
          if (alternativeId) {
            await client
              .patch(alternativeId)
              .set({ 
                image: {
                  _type: 'image',
                  asset: {
                    _type: 'reference',
                    _ref: asset._id
                  }
                }
              })
              .commit()
            console.log(`✅ Updated product using alternative match: ${nameParts}`)
            uploaded++
          } else {
            console.log(`❌ No Sanity product found for: ${localProduct.name_en}`)
            errors++
          }
        }
        
      } catch (error) {
        console.error(`❌ Error:`, error.message)
        errors++
      }
    }
    
    console.log('\n📊 FINAL REPORT:')
    console.log(`✅ Uploaded and linked: ${uploaded} images`)
    console.log(`⏭️ Skipped: ${skipped} files`)
    console.log(`❌ Errors: ${errors}`)
    console.log('🎉 All done!')
    
  } catch (error) {
    console.error('❌ Fatal error:', error.message)
  }
}

uploadImages()