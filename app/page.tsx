'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadProducts() {
      try {
        // استخدام API Route المحلي
        const response = await fetch('/api/products')
        const data = await response.json()
        
        if (data.result) {
          setProducts(data.result)
          console.log('✅ Products loaded:', data.result.length)
        } else {
          setError('No products found')
        }
      } catch (err: any) {
        setError(err.message)
        console.error('❌ Error:', err)
      } finally {
        setLoading(false)
      }
    }
    
    loadProducts()
  }, [])

  if (loading) return <div>Loading products...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h1>Hijab Fashion Mall</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {products.map((product: any) => (
          <div key={product._id}>
            <img 
              src={product.imageUrl} 
              alt={product.name_en}
              style={{ width: '100%', height: '200px', objectFit: 'cover' }}
            />
            <h3>{product.name_en}</h3>
            <p>Color: {product.color_en}</p>
            <p>Price: ${product.price_usd}</p>
          </div>
        ))}
      </div>
    </div>
  )
}