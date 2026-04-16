import { NextResponse } from 'next/server'
import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3k0vx7ep',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production-final',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

// تعريف مجموعات التصنيفات
const categoryGroups: { [key: string]: string[] } = {
  'Modest Pants Sets': ['Modest Pants Sets', 'Modest Sets', 'Modest Set'],
  'Prayer Clothes': ['Prayer Clothes', 'Prayer Outfits', 'Pray Clothes', 'Pray clothes', 'pray clothes', 'Jilbab', 'Islamic Prayer Wear', 'Prayer Dress']
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '60')
    const category = searchParams.get('category')
    const lang = searchParams.get('lang') || 'en' // ✅ جلب اللغة من الـ URL
    const search = searchParams.get('search')
    const slug = searchParams.get('slug')
    const id = searchParams.get('id')
    const rss = searchParams.get('rss')
    const plusSizes = searchParams.get('plusSizes')
    const sort = searchParams.get('sort') || 'default'
    const minPrice = parseFloat(searchParams.get('minPrice') || '0')
    const maxPrice = parseFloat(searchParams.get('maxPrice') || '10000')
    
    const skip = (page - 1) * limit
    
    // بناء شروط الاستعلام
    let conditions: string[] = []
    let params: any = {}
    
    conditions.push(`price_usd >= $minPrice && price_usd <= $maxPrice`)
    params.minPrice = minPrice
    params.maxPrice = maxPrice
    
    // ✅ تحديد اسم حقل التصنيف بناءً على اللغة
    const categoryField = `category_main_${lang}`;
    
    // معالجة التصنيف مع دعم المجموعات
    if (category && category !== 'all') {
      if (categoryGroups[category]) {
        const orConditions = categoryGroups[category].map(term => `category_main_en == "${term}"`).join(' || ')
        conditions.push(`(${orConditions})`)
      } else {
        // ✅ استخدام الحقل الديناميكي الصحيح حسب اللغة
        conditions.push(`${categoryField} == $category`)
        params.category = category
      }
    }
    
    if (rss === 'true') {
      conditions.push(`(rss == "single" || rss_not_rss_message_en match "*single piece*" || rss_not_rss_message_ar match "*قطعة واحدة*")`)
    }
        
    // ✅ فلتر Plus Sizes
    if (plusSizes === 'true') {
      conditions.push(`(plus_sizes == "Yes" || plus_sizes == "YES" || plus_sizes == "yes" || has_plus_sizes == true)`)
    }
    
    if (id && id.trim()) {
      conditions.push(`_id == $id`)
      params.id = id
    }
    
    if (slug && slug.trim()) {
      conditions.push(`(slug_ar.current == $slug || slug_en.current == $slug || _id == $slug || product_code == $slug)`)
      params.slug = slug
    }
    
    if (search && search.trim()) {
      conditions.push(`(name_en match $search || name_ar match $search || product_code match $search)`)
      params.search = `*${search}*`
    }
    
    let query = '*[_type == "product"'
    if (conditions.length > 0) {
      query += ` && ${conditions.join(' && ')}`
    }
    query += ']'
    
    const countQuery = query + `{ _id }`
    const totalCount = await client.fetch(countQuery, params)
    
    let orderBy = ''
    switch (sort) {
      case 'price-asc':
        orderBy = ' | order(price_usd asc)'
        break
      case 'price-desc':
        orderBy = ' | order(price_usd desc)'
        break
      case 'name-asc':
        orderBy = ' | order(name_en asc)'
        break
      case 'name-desc':
        orderBy = ' | order(name_en desc)'
        break
      case 'newest':
        orderBy = ' | order(_createdAt desc)'
        break
      default:
        orderBy = ''
    }
    
    query += orderBy + `[${skip}...${skip + limit}]`
    
    query += ` {
      _id,
      name_ar,
      name_en,
      "slug_ar": slug_ar.current,
      "slug_en": slug_en.current,
      price_usd,
      description_ar,
      description_en,
      mainImage,
      "imageUrl": imageUrl,
      images,
      category_main_en,
      category_main_ar,
      product_code,
      "rss/not rss message_en": rss_not_rss_message_en,
      "rss/not rss message_ar": rss_not_rss_message_ar,
      pcs_per_packet,
      "plus sizes": plus_sizes,
      is_rss,
      has_plus_sizes,
      is_new,
      is_bestseller,
      color_en,
      color_ar,
      sizes
    }`
    
    const products = await client.fetch(query, params)
    
    return NextResponse.json({
      result: products,
      total: totalCount.length,
      page,
      limit,
      totalPages: Math.ceil(totalCount.length / limit)
    })
    
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}