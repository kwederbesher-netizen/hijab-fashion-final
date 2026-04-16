// lib/sanity.ts
import { createClient } from 'next-sanity'
import { createImageUrlBuilder } from '@sanity/image-url'  // ✅ تغيير هنا

export const client = createClient({
  projectId: '3k0vx7ep',
  dataset: 'production-final',
  apiVersion: '2024-01-01',
  useCdn: true, // استخدام CDN للحصول على أداء أفضل
  withCredentials: false, // تعطيل إرسال بيانات الاعتماد لتجنب مشاكل CORS
  token: '', // لا نحتاج توكن للقراءة فقط
})

const builder = createImageUrlBuilder(client)  // ✅ تغيير هنا

export function urlFor(source: any) {
  return builder.image(source)
}

export async function getProducts() {
  return await client.fetch(`*[_type == "product"] | order(orderIndex asc){
    _id,
    "productCode": product_code,
    "name": name_en,
    "nameAr": name_ar,
    "price": price_usd,
    "image": image,
    "category": category_main_en,
    "categoryAr": category_main_ar,
    "color": color_en,
    "colorAr": color_ar,
    "sizes": sizes,
    "description": description_en,
    "descriptionAr": description_ar,
    "packSize": pcs_per_packet,
    "isNew": is_new,
    "isBestseller": is_bestseller,
    "viewsCount": views_count,
    "slug": slug,
    "slugAr": slug_ar,
    "outOfStock": Out_of_stock,
    "altText": Alt_Text_En,
    "altTextAr": Alt_Text_Ar,
    "plusSizes": plus_sizes,
    "rssMessage": rss_not_rss_message_en
  }`)
}

// ✅ دالة لجلب المنتجات مع Pagination والفلاتر
export async function getProductsPaginated({
  page = 1,
  limit = 24,
  category,
  search,
  sort = 'default',
  minPrice,
  maxPrice,
  rss,
  plusSizes,
  slug,
  id
}: {
  page?: number
  limit?: number
  category?: string
  search?: string
  sort?: string
  minPrice?: number
  maxPrice?: number
  rss?: boolean
  plusSizes?: boolean
  slug?: string
  id?: string
}) {
  const offset = (page - 1) * limit
  
  // بناء شروط البحث
  let filters: string[] = ['_type == "product"']
  
  if (category) {
    filters.push(`category_main_en == "${category}"`)
  }
  
  if (search) {
    filters.push(`(name_ar match "${search}*" || name_en match "${search}*" || product_code match "${search}*")`)
  }
  
  if (minPrice !== undefined) {
    filters.push(`price_usd >= ${minPrice}`)
  }
  
  if (maxPrice !== undefined) {
    filters.push(`price_usd <= ${maxPrice}`)
  }
  
  if (rss) {
    filters.push(`is_rss == true`)
  }
  
  if (plusSizes) {
    filters.push(`has_plus_sizes == true`)
  }
  
  if (slug) {
    filters.push(`(slug_ar.current == "${slug}" || slug_en.current == "${slug}" || _id == "${slug}")`)
  }
  
  if (id) {
    filters.push(`_id == "${id}"`)
  }
  
  const filterString = filters.join(' && ')
  
  // بناء الترتيب
  let orderBy = ''
  switch (sort) {
    case 'price-asc':
      orderBy = '| order(price_usd asc)'
      break
    case 'price-desc':
      orderBy = '| order(price_usd desc)'
      break
    case 'name-asc':
      orderBy = '| order(name_ar asc)'
      break
    case 'name-desc':
      orderBy = '| order(name_ar desc)'
      break
    case 'newest':
      orderBy = '| order(_createdAt desc)'
      break
    default:
      orderBy = ''
  }
  
  // استعلام لجلب المنتجات
  const query = `*[${filterString}] ${orderBy} [${offset}...${offset + limit}] {
    _id,
    _createdAt,
    "product_code": product_code,
    "name_ar": name_ar,
    "name_en": name_en,
    "price_usd": price_usd,
    "category_main_en": category_main_en,
    "sizes": sizes,
    "description_ar": description_ar,
    "description_en": description_en,
    "image": image,
    "slug_ar": slug_ar.current,
    "slug_en": slug_en.current,
    "color_en": color_en,
    "is_new": is_new,
    "is_bestseller": is_bestseller,
    "is_rss": is_rss,
    "has_plus_sizes": has_plus_sizes,
    "rss/not rss message_ar": rss_not_rss_message_ar,
    "rss/not rss message_en": rss_not_rss_message_en,
    "plus sizes": plus_sizes
  }`
  
  // استعلام لجلب العدد الكلي
  const countQuery = `count(*[${filterString}])`
  
  const [result, total] = await Promise.all([
    client.fetch(query),
    client.fetch(countQuery)
  ])
  
  // معالجة الصور
  const productsWithImages = result.map((product: any) => ({
    ...product,
    imageUrl: product.image ? urlFor(product.image).width(400).height(400).url() : '/images/default.webp'
  }))
  
  return {
    result: productsWithImages,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit)
  }
}

// ✅ دالة لجلب أعداد الفلاتر
export async function getFilterCounts() {
  try {
    // جلب أعداد التصنيفات
    const categoryQuery = `
      {
        "Abayas": count(*[_type == "product" && category_main_en == "Abayas"]),
        "Hijabs": count(*[_type == "product" && category_main_en == "Hijabs"]),
        "Modest Dresses": count(*[_type == "product" && category_main_en == "Modest Dresses"]),
        "Modest Evening Dresses": count(*[_type == "product" && category_main_en == "Modest Evening Dresses"]),
        "Modest Pants Sets": count(*[_type == "product" && category_main_en == "Modest Pants Sets"]),
        "Modest Skirt Sets": count(*[_type == "product" && category_main_en == "Modest Skirt Sets"]),
        "Modest Sportswear": count(*[_type == "product" && category_main_en == "Modest Sportswear"]),
        "Prayer Clothes": count(*[_type == "product" && category_main_en == "Prayer Clothes"]),
        "Burkini Modest Swimwear": count(*[_type == "product" && category_main_en == "Burkini Modest Swimwear"])
      }
    `
    
    const categoryCounts = await client.fetch(categoryQuery)
    
    // جلب أعداد RSS
    let rssCount = 0
    try {
      const rssQuery = `count(*[_type == "product" && is_rss == true])`
      rssCount = await client.fetch(rssQuery)
    } catch (error) {
      console.log('حقل is_rss غير موجود بعد')
    }
    
    // جلب أعداد Plus Sizes
    let plusSizesCount = 0
    try {
      const plusQuery = `count(*[_type == "product" && has_plus_sizes == true])`
      plusSizesCount = await client.fetch(plusQuery)
    } catch (error) {
      console.log('حقل has_plus_sizes غير موجود بعد')
    }
    
    // العدد الكلي
    const totalQuery = `count(*[_type == "product"])`
    const total = await client.fetch(totalQuery)
    
    return {
      categories: categoryCounts,
      rss: rssCount,
      plusSizes: plusSizesCount,
      total
    }
  } catch (error) {
    console.error('خطأ في جلب أعداد الفلاتر:', error)
    return {
      categories: {},
      rss: 0,
      plusSizes: 0,
      total: 0
    }
  }
}