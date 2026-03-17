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
          "imageRef": image.asset->_ref,
          "color": color_en,
          "category": category_main_en
        }`)
        setProducts(data)
        console.log('Products:', data.length)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  // بناء رابط الصورة بنفس نمط Sanity
  const getImageUrl = (ref: string) => {
    if (!ref) return null
    // مثال: image-e9bdd4330b811495319e85ce05629c118ccfe925-600x786-webp
    const parts = ref.split('-')
    if (parts.length >= 2) {
      return `https://cdn.sanity.io/images/ruyb1c3n/production/${parts[1]}-${parts[2]}-${parts[3]}.webp`
    }
    return null
  }

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h1>Hijab Fashion Mall</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {products.map(product => {
          const imageUrl = getImageUrl(product.imageRef)
          return (
            <div key={product._id}>
              {imageUrl ? (
                <img 
                  src={imageUrl} 
                  alt={product.name}
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                  onError={(e) => {
                    console.log('Failed:', product.imageRef)
                    e.currentTarget.style.display = 'none'
                  }}
                />
              ) : (
                <div style={{ width: '100%', height: '200px', background: '#eee' }} />
              )}
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