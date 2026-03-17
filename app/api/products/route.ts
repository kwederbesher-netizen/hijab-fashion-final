import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // جلب كل الحقول المهمة للكتالوج
    const apiUrl = 'https://ruyb1c3n.api.sanity.io/v2026-03-17/data/query/production?query=*%5B_type+%3D%3D+%22product%22%5D+%7C+order%28orderIndex+asc%29%7B%0A++_id%2C%0A++name_en%2C%0A++name_ar%2C%0A++price_usd%2C%0A++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++color_en%2C%0A++color_ar%2C%0A++category_main_en%2C%0A++category_main_ar%2C%0A++%22product_code%22%3A+product_code%2C%0A++%22plus+sizes%22%3A+plus_sizes%2C%0A++%22rss%2Fnot+rss+message_en%22%3A+rss_not_rss_message_en%2C%0A++sizes%2C%0A++description_en%2C%0A++description_ar%2C%0A++pcs_per_packet%2C%0A++is_new%2C%0A++is_bestseller%2C%0A++views_count%2C%0A++slug_en%2C%0A++slug_ar%2C%0A++%22Out+of+stock%22%3A+Out_of_stock%2C%0A++Alt_Text_En%2C%0A++Alt_Text_Ar%0A%7D&perspective=drafts'
    
    const response = await fetch(apiUrl)
    const data = await response.json()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}