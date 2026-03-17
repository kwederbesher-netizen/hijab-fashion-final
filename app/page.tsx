'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadProducts() {
      try {
        // استخدام الرابط الذي يعمل مباشرة
        const url = 'https://ruyb1c3n.api.sanity.io/v2024-01-01/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%5D%7B_id%2C%20name_en%2C%20price_usd%2C%20%22imageUrl%22%3A%20image.asset-%3Eurl%2C%20color_en%2C%20category_main_en%7D'
        
        const response = await fetch(url)
        const data = await response.json()
        
        if (data.result) {
          setProducts(data.result)
        } else {
          setError('No products found')
        }
      } catch (err: any) {
        setError(err.message)
        console.error(err)
      } finally {
        setLoading(false)
      }
    }
    
    loadProducts()
  }, [])

  if (loading) return <div style={{ padding: '20px' }}>Loading products...</div>
  if (error) return <div style={{ padding: '20px', color: 'red' }}>Error: {error}</div>

  return (
    <div style={{ padding: '20px' }}>
      <h1>Hijab Fashion Mall</h1>
      <p>Premium Modest Fashion | Turkish Craftsmanship | Wholesale Prices</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginTop: '20px' }}>
        {products.map((product: any) => (
          <div key={product._id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            {product.imageUrl && (
              <img 
                src={product.imageUrl} 
                alt={product.name_en}
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/400x400/ff5a00/white?text=No+Image'
                }}
              />
            )}
            <h3>{product.name_en}</h3>
            {product.color_en && <p>Color: {product.color_en}</p>}
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#ff5a00' }}>${product.price_usd}</p>
          </div>
        ))}
      </div>
    </div>
  )
}