import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'ruyb1c3n',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // مهم: نستخدم false لتجنب مشاكل CDN
  apiHost: 'https://api.sanity.io', // مهم: نستخدم API الرئيسي بدلاً من CDN
})

const builder = imageUrlBuilder(client)

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