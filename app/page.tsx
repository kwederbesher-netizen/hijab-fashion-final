'use client'

import { client } from '@/lib/sanity'
import { useState, useEffect } from 'react'

export default function Home() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await client.fetch(`*[_type == "product"] | order(orderIndex asc){
          _id,
          "name": name_en,
          "price": price_usd,
          "color": color_en,
          "category": category_main_en
        }`)
        setProducts(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div style={{ padding: '20px' }}>
      <h1>Hijab Fashion Mall</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {products.map((product, index) => {
          // استخدام index كرقم للصورة (1,2,3...)
          const imageNumber = (index % 287) + 1
          return (
            <div key={product._id}>
              <img 
                src={`/images/${imageNumber}.webp`}
                alt={product.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <h3>{product.name}</h3>
              <p>{product.color}</p>
              <p>${product.price}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}