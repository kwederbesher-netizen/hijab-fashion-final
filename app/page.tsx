'use client'

import { client } from '@/lib/sanity'
import { useState, useEffect } from 'react'

export default function Home() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProducts() {
      try {
        // جلب بيانات المنتج من Sanity (بدون الصور)
        const data = await client.fetch(`*[_type == "product"] | order(orderIndex asc){
          _id,
          "name": name_en,
          "price": price_usd,
          "color": color_en,
          "category": category_main_en
        }`)
        setProducts(data)
        console.log('✅ Products:', data.length)
      } catch (error) {
        console.error('❌ Error:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '32px' }}>Hijab Fashion Mall</h1>
      <p style={{ marginBottom: '30px' }}>Premium Modest Fashion | Turkish Craftsmanship | Wholesale Prices</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {products.map((product, index) => {
          // استخدام index لربط كل منتج بصورة مختلفة (دورية)
          // هذا حل تجميل مؤقت حتى نجد طريقة لربط الصورة الصحيحة
          const imageNumber = (index % 287) + 1
          const imageUrl = `/images/${imageNumber}.webp`

          return (
            <div key={product._id} style={{ border: '1px solid #ddd', padding: '15px' }}>
              <img
                src={imageUrl}
                alt={product.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                onError={(e) => {
                  console.log('❌ Failed to load:', imageUrl)
                  e.currentTarget.style.display = 'none'
                }}
              />
              <h3>{product.name}</h3>
              <p>{product.color}</p>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#ff5a00' }}>${product.price}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}