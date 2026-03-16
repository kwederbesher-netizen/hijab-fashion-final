'use client'

import { client } from '@/lib/sanity'
import { useState, useEffect } from 'react'

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await client.fetch(`*[_type == "product"] | order(orderIndex asc){
          _id,
          "name": name_en,
          "price": price_usd,
          "image": image.asset->url,
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

  if (loading) return <div>Loading products...</div>

  return (
    <div>
      <h1>Hijab Fashion Mall</h1>
      <p>Premium Modest Fashion | Turkish Craftsmanship | Wholesale Prices</p>
      
      <h2>Featured Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {products.map(product => (
          <div key={product._id} style={{ border: '1px solid #ccc', padding: '10px' }}>
            {product.image && (
              <img 
                src={product.image} 
                alt={product.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
            )}
            <h3>{product.name}</h3>
            <p>Color: {product.color}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}