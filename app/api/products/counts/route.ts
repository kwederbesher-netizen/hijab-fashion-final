import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/lib/sanity'

export async function GET(request: NextRequest) {
  try {
    // تعريف مجموعات التصنيفات
    const categoryGroups: { [key: string]: string[] } = {
      'Modest Pants Sets': ['Modest Pants Sets', 'Modest Sets', 'Modest Set'],
      'Prayer Clothes': ['Prayer Clothes', 'Prayer Outfits', 'Pray Clothes', 'Pray clothes', 'pray clothes', 'Jilbab', 'Islamic Prayer Wear', 'Prayer Dress']
    }

    // جلب أعداد المنتجات لكل تصنيف فردي
    const individualCategories = [
      'Abayas', 'Hijabs', 'Modest Dresses', 'Modest Evening Dresses',
      'Modest Pants Sets', 'Modest Skirt Sets', 'Modest Sportswear',
      'Prayer Clothes', 'Burkini Modest Swimwear',
      'Tunics', 'Modest Coats', 'Modest Jackets', 'Trenchcoats', 'Modest Wool', 'Kaftan'
    ]
    
    const categoryCounts: Record<string, number> = {}
    
    for (const cat of individualCategories) {
      const query = `count(*[_type == "product" && category_main_en == "${cat}"])`
      categoryCounts[cat] = await client.fetch(query)
    }
    
    // جلب أعداد المجموعات
    for (const [groupName, terms] of Object.entries(categoryGroups)) {
      const orConditions = terms.map(term => `category_main_en == "${term}"`).join(' || ')
      const query = `count(*[_type == "product" && (${orConditions})])`
      categoryCounts[groupName] = await client.fetch(query)
    }
    
    // ✅ جلب أعداد RSS - يبحث في الرسائل التي تحتوي على "single piece" أو "قطعة واحدة"
    let rssCount = 0
    try {
      const rssQuery = `count(*[_type == "product" && (rss_not_rss_message_en match "*single piece*" || rss_not_rss_message_ar match "*قطعة واحدة*")])`
      rssCount = await client.fetch(rssQuery)
      console.log(`📊 RSS count: ${rssCount}`)
    } catch (error) {
      console.log('خطأ في جلب أعداد RSS')
    }
    
    // ✅ جلب أعداد Plus Sizes
    let plusSizesCount = 0
    try {
      const plusQuery = `count(*[_type == "product" && (plus_sizes == "Yes" || plus_sizes == "YES" || plus_sizes == "yes" || has_plus_sizes == true)])`
      plusSizesCount = await client.fetch(plusQuery)
      console.log(`📊 Plus Sizes count: ${plusSizesCount}`)
    } catch (error) {
      console.log('خطأ في جلب أعداد Plus Sizes')
    }
    
    // العدد الكلي
    const totalQuery = `count(*[_type == "product"])`
    const total = await client.fetch(totalQuery)
    console.log(`📊 Total products: ${total}`)
    
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