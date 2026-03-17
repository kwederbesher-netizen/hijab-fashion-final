import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const apiUrl = 'https://ruyb1c3n.apicdn.sanity.io/v2024-01-01/data/query/production?query=*%5B_type+%3D%3D+%22product%22%5D+%7C+order%28orderIndex+asc%29%7B_id%2C+name_en%2C+price_usd%2C+%22imageUrl%22%3A+image.asset-%3Eurl%2C+color_en%2C+category_main_en%7D'
    
    const response = await fetch(apiUrl)
    const data = await response.json()
    
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
}