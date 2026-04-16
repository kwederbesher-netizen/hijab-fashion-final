import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/lib/sanity'

// ✅ قوائم التصنيفات لكل لغة (مطابقة تماماً لما في CSV)
const categoriesByLang: Record<string, string[]> = {
  en: [
    'Abayas', 'Hijabs', 'Modest Dresses', 'Modest Skirt Sets',
    'Modest Evening Dresses', 'Modest Pants Sets', 'Modest Sportswear',
    'Prayer Clothes', 'Burkini', 'Tunics',
    'Modest Jackets', 'Modest Coats', 'Trenchcoats', 'Modest Wool', 'Kaftan'
  ],
  ar: [
    'عبايات', 'حجاب', 'فساتين محجبات', 'طقم تنورة محجبات',
    'فساتين سهرة محجبات', 'طقم بنطلون محجبات', 'ملابس رياضية محجبات',
    'ملابس صلاة', 'بوركيني', 'تونيك',
    'سترات محجبات', 'معاطف محجبات', 'معاطف طويلة', 'ملابس صوف محجبات', 'قفطان'
  ],
  de: [
    'Abayas', 'Hijabs', 'Bescheidene Kleider', 'Bescheidene Rock-Sets',
    'Bescheidene Abendkleider', 'Bescheidene Hosen-Sets', 'Bescheidene Sportbekleidung',
    'Gebetskleidung', 'Burkini', 'Tuniken',
    'Bescheidene Jacken', 'Bescheidene Mäntel', 'Trenchcoats', 'Bescheidene Wolle', 'Kaftan'
  ],
  fr: [
    'Abayas', 'Hijabs', 'Robes Pudeur', 'Ensembles Jupe Pudeur',
    'Robes de Soirée Pudeur', 'Ensembles Pantalon Pudeur', 'Vêtements de Sport Pudeur',
    'Vêtements de Prière', 'Burkini', 'Tuniques',
    'Vestes Pudeur', 'Manteaux Pudeur', 'Trenchcoats', 'Laine Pudeur', 'Caftan'
  ],
  it: [
    'Abaya', 'Hijab', 'Abiti Modesti', 'Set Gonna Modesti',
    'Abiti da Sera Modesti', 'Set Pantalone Modesti', 'Abbigliamento Sportivo Modesto',
    'Abiti da Preghiera', 'Burkini', 'Tuniche',
    'Giacca Modesta', 'Cappotti Modesti', 'Trench', 'Lana Modesta', 'Caftano'
  ],
  es: [
    'Abayas', 'Hiyabs', 'Vestidos Modestos', 'Conjuntos de Falda Modestos',
    'Vestidos de Noche Modestos', 'Conjuntos de Pantalón Modestos', 'Ropa Deportiva Modesta',
    'Ropa de Oración', 'Burkin', 'Túnicas',
    'Chaquetas Modestas', 'Abrigos Modestos', 'Gabardinas', 'Lana Modesta', 'Caftán'
  ]
}

// مجموعات التصنيفات (للتجميع - تستخدم الأسماء الإنجليزية دائماً)
const categoryGroups: { [key: string]: string[] } = {
  'Modest Pants Sets': ['Modest Pants Sets', 'Modest Sets', 'Modest Set'],
  'Prayer Clothes': ['Prayer Clothes', 'Prayer Outfits', 'Pray Clothes', 'Pray clothes', 'pray clothes', 'Jilbab', 'Islamic Prayer Wear', 'Prayer Dress']
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const lang = searchParams.get('lang') || 'en' // ✅ جلب اللغة

    // ✅ استخدام قائمة التصنيفات الصحيحة حسب اللغة
    const categories = categoriesByLang[lang] || categoriesByLang['en']
    
    // ✅ اسم حقل التصنيف حسب اللغة
    const categoryField = `category_main_${lang}`

    const categoryCounts: Record<string, number> = {}

    // ✅ جلب الأعداد لكل تصنيف باستخدام الاسم الصحيح للغة
    for (const cat of categories) {
      const query = `count(*[_type == "product" && ${categoryField} == "${cat}"])`
      categoryCounts[cat] = await client.fetch(query)
    }

    // ✅ معالجة المجموعات الخاصة (تبقى بالإنجليزية لأنها مجموعات محددة مسبقاً)
    // نضيفها فقط للغة الإنجليزية، أو نضيفها لجميع اللغات مع الترجمة المناسبة
    if (lang === 'en') {
      for (const [groupName, terms] of Object.entries(categoryGroups)) {
        const orConditions = terms.map(term => `category_main_en == "${term}"`).join(' || ')
        const query = `count(*[_type == "product" && (${orConditions})])`
        categoryCounts[groupName] = await client.fetch(query)
      }
    }
    
    // ✅ معالجة خاصة للغة العربية للمجموعات
    if (lang === 'ar') {
      // طقم بنطلون محجبات
      const pantsQuery = `count(*[_type == "product" && (category_main_ar == "طقم بنطلون محجبات" || category_main_ar == "طقم قطعتين" || category_main_ar == "طقم")])`
      categoryCounts['طقم بنطلون محجبات'] = await client.fetch(pantsQuery)
      
      // ملابس صلاة
      const prayerQuery = `count(*[_type == "product" && (category_main_ar == "ملابس صلاة" || category_main_ar == "عباية صلاة" || category_main_ar == "طقم صلاة" || category_main_ar == "فستان صلاة")])`
      categoryCounts['ملابس صلاة'] = await client.fetch(prayerQuery)
    }

    // ✅ جلب أعداد RSS (لا تعتمد على اللغة)
    let rssCount = 0
    try {
      const rssQuery = `count(*[_type == "product" && (rss == "single" || rss_not_rss_message_en match "*single piece*" || rss_not_rss_message_ar match "*قطعة واحدة*")])`
      rssCount = await client.fetch(rssQuery)
      console.log(`📊 RSS count: ${rssCount}`)
    } catch (error) {
      console.log('خطأ في جلب أعداد RSS:', error)
    }

    // ✅ جلب أعداد Plus Sizes
    let plusSizesCount = 0
    try {
      const plusQuery = `count(*[_type == "product" && (plus_sizes == "Yes" || plus_sizes == "YES" || plus_sizes == "yes" || has_plus_sizes == true)])`
      plusSizesCount = await client.fetch(plusQuery)
      console.log(`📊 Plus Sizes count: ${plusSizesCount}`)
    } catch (error) {
      console.log('خطأ في جلب أعداد Plus Sizes:', error)
    }

    // العدد الكلي
    const totalQuery = `count(*[_type == "product"])`
    const total = await client.fetch(totalQuery)
    console.log(`📊 Total products: ${total}`)
    console.log(`📊 Category counts for ${lang}:`, categoryCounts)

    return NextResponse.json({
      categories: categoryCounts,
      rss: rssCount,
      plusSizes: plusSizesCount,
      total: total
    })

  } catch (error) {
    console.error('خطأ في جلب أعداد الفلاتر:', error)
    return NextResponse.json(
      {
        error: 'فشل في جلب البيانات',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}