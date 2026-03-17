'use client'

import { client } from '@/lib/sanity'
import { useState, useEffect } from 'react'

// تعريف نوع المنتج
type Product = {
  _id: string
  name: string
  price: number
  main_image: string
  color: string
  category: string
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProducts() {
      try {
        // جلب المنتجات مع main_image (الرقم)
        const data = await client.fetch(`*[_type == "product"] | order(orderIndex asc){
          _id,
          "name": name_en,
          "price": price_usd,
          "main_image": main_image,
          "color": color_en,
          "category": category_main_en
        }`)
        setProducts(data)
        console.log('✅ Products:', data.length)
        console.log('✅ First product image number:', data[0]?.main_image)
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
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '32px', marginBottom: '10px' }}>Hijab Fashion Mall</h1>
      <p style={{ marginBottom: '30px' }}>Premium Modest Fashion | Turkish Craftsmanship | Wholesale Prices</p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
        gap: '20px' 
      }}>
        {products.map((product: Product) => {
          // بناء رابط الصورة مباشرة من main_image
          const imageUrl = product.main_image 
            ? `https://cdn.sanity.io/images/ruyb1c3n/production/${product.main_image}.webp`
            : null

          return (
            <div key={product._id} style={{ 
              border: '1px solid #ddd', 
              borderRadius: '8px',
              padding: '15px',
              backgroundColor: 'white'
            }}>
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={product.name}
                  style={{ 
                    width: '100%', 
                    height: '200px', 
                    objectFit: 'cover',
                    borderRadius: '4px'
                  }}
                  onError={(e) => {
                    console.log('Image failed:', product.main_image)
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
                  color: '#999'
                }}>
                  No Image
                </div>
              )}
              <h3 style={{ fontSize: '18px', margin: '10px 0' }}>{product.name}</h3>
              <p style={{ color: '#666' }}>Color: {product.color}</p>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#ff5a00' }}>
                ${product.price}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}