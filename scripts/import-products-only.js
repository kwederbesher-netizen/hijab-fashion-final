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

async function importProducts() {
  try {
    // قراءة ملف JSON
    console.log('📖 جاري قراءة products.json...')
    const products = JSON.parse(fs.readFileSync('./products.json', 'utf8'))
    console.log(`📦 تم العثور على ${products.length} منتج`)

    let imported = 0
    let errors = 0

    for (let i = 0; i < products.length; i++) {
      try {
        const p = products[i]
        
        // إنشاء كائن المنتج
        const product = {
          _type: 'product',
          product_code: p.product_code,
          name_en: p.name_en,
          name_ar: p.name_ar,
          price_usd: p.price_usd,
          main_image: p.main_image,
          category_main_en: p.category_main_en,
          category_main_ar: p.category_main_ar,
          color_en: p.color_en,
          color_ar: p.color_ar,
          sizes: p.sizes,
          description_en: p.description_en,
          description_ar: p.description_ar,
          pcs_per_packet: p['pcs per packet'],
          is_new: p.is_new,
          is_bestseller: p.is_bestseller,
          views_count: p.views_count,
          slug_en: p.slug_en,
          slug_ar: p.slug_ar,
          Alt_Text_En: p['Alt Text En'],
          Alt_Text_Ar: p['Alt Text Ar'],
          plus_sizes: p['plus sizes'],
          rss_not_rss_message_en: p['rss/not rss message_en']
        }

        // إضافة المنتج
        await client.create(product)
        console.log(`✅ [${i + 1}/${products.length}] تم إضافة: ${p.name_en}`)
        imported++
        
      } catch (err) {
        console.error(`❌ خطأ في المنتج ${i + 1}:`, err.message)
        errors++
      }
    }

    console.log('\n📊 التقرير النهائي:')
    console.log(`✅ تمت الإضافة: ${imported} منتج`)
    console.log(`❌ أخطاء: ${errors} منتج`)
    
  } catch (error) {
    console.error('❌ خطأ عام:', error.message)
  }
}

importProducts()