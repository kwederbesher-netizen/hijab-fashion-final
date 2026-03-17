import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // نفس الرابط الذي أرسلته سابقاً
    const apiUrl = 'https://ruyb1c3n.api.sanity.io/v2026-03-17/data/query/production?query=*%5B_type+%3D%3D+%22product%22%5D+%7C+order%28orderIndex+asc%29%7B%0A++_id%2C%0A++name_en%2C%0A++price_usd%2C%0A++%22imageUrl%22%3A+image.asset-%3Eurl%2C%0A++color_en%2C%0A++category_main_en%0A%7D%0A&perspective=drafts'
    
    const response = await fetch(apiUrl)
    const data = await response.json()
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}