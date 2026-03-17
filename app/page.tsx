'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadProducts() {
      try {
        // استخدام رابط Sanity المباشر الذي أثبتنا أنه يعمل
        const apiUrl = 'https://ruyb1c3n.apicdn.sanity.io/v2024-01-01/data/query/production?query=*%5B_type+%3D%3D+%22product%22%5D+%7C+order%28orderIndex+asc%29%7B_id%2C+name_en%2C+price_usd%2C+%22imageUrl%22%3A+image.asset-%3Eurl%2C+color_en%2C+category_main_en%7D'
        
        const response = await fetch(apiUrl)
        const data = await response.json()
        
        if (data.result) {
          setProducts(data.result)
          console.log('✅ Products loaded:', data.result.length)
        } else {
          setError('No products found in the response')
        }
      } catch (err: any) {
        setError(err.message)
        console.error('❌ Fetch error:', err)
      } finally {
        setLoading(false)
      }
    }
    
    loadProducts()
  }, [])

  if (loading) return <div style={{ padding: '20px', textAlign: 'center' }}>Loading products...</div>
  if (error) return <div style={{ padding: '20px', color: 'red', textAlign: 'center' }}>Error: {error}</div>

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>Hijab Fashion Mall</h1>
      <p style={{ marginBottom: '30px', color: '#666' }}>Premium Modest Fashion | Turkish Craftsmanship | Wholesale Prices</p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '20px' 
      }}>
        {products.map((product: any) => (
          <div key={product._id} style={{ 
            border: '1px solid #ddd', 
            borderRadius: '8px',
            padding: '15px',
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            {product.imageUrl ? (
              <img 
                src={product.imageUrl} 
                alt={product.name_en}
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  borderRadius: '4px',
                  marginBottom: '10px'
                }}
                onError={(e) => {
                  e.currentTarget.src = 'https://placehold.co/400x400/ff5a00/white?text=No+Image'
                }}
              />
            ) : (
              <div style={{ 
                width: '100%', 
                height: '200px', 
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '4px',
                marginBottom: '10px',
                color: '#999'
              }}>
                No Image
              </div>
            )}
            <h3 style={{ fontSize: '18px', margin: '10px 0 5px' }}>{product.name_en}</h3>
            {product.color_en && <p style={{ margin: '5px 0', color: '#666' }}>Color: {product.color_en}</p>}
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#ff5a00', margin: '10px 0 0' }}>
              ${product.price_usd}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}