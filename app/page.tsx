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

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ 
            width: '50px', 
            height: '50px', 
            border: '5px solid #f3f3f3', 
            borderTop: '5px solid #ff5a00', 
            borderRadius: '50%', 
            animation: 'spin 1s linear infinite',
            margin: '0 auto 20px'
          }} />
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
          <p>Loading products...</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9f9f9' }}>
      {/* Header */}
      <header style={{ 
        backgroundColor: 'white', 
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        padding: '20px 0'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ 
            fontSize: '32px', 
            fontWeight: 'bold', 
            color: '#333',
            margin: '0 0 10px 0'
          }}>
            Hijab Fashion Mall
          </h1>
          <p style={{ color: '#666', margin: 0 }}>
            Premium Modest Fashion | Turkish Craftsmanship | Wholesale Prices
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <section>
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: '600', 
            marginBottom: '30px',
            color: '#333'
          }}>
            Featured Products ({products.length})
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
            gap: '25px'
          }}>
            {products.map(product => (
              <div key={product._id} style={{ 
                backgroundColor: 'white',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Product Image */}
                <div style={{ 
                  width: '100%', 
                  height: '300px', 
                  backgroundColor: '#f5f5f5',
                  overflow: 'hidden'
                }}>
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        transition: 'transform 0.3s'
                      }}
                    />
                  ) : (
                    <div style={{ 
                      width: '100%', 
                      height: '100%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      color: '#999',
                      fontSize: '14px'
                    }}>
                      No Image
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div style={{ padding: '20px' }}>
                  <div style={{ 
                    fontSize: '12px', 
                    color: '#ff5a00', 
                    fontWeight: '600',
                    marginBottom: '5px',
                    textTransform: 'uppercase'
                  }}>
                    {product.category || 'Category'}
                  </div>
                  
                  <h3 style={{ 
                    fontSize: '16px', 
                    fontWeight: '600', 
                    margin: '0 0 10px 0',
                    color: '#333'
                  }}>
                    {product.name}
                  </h3>
                  
                  {product.color && (
                    <div style={{ 
                      fontSize: '14px', 
                      color: '#666',
                      marginBottom: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span>Color:</span>
                      <span style={{ 
                        display: 'inline-block',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: product.color.toLowerCase() === 'black' ? '#000' :
                                      product.color.toLowerCase() === 'white' ? '#fff' :
                                      product.color.toLowerCase() === 'navy' ? '#000080' :
                                      product.color.toLowerCase() === 'burgundy' ? '#800020' :
                                      product.color.toLowerCase() === 'beige' ? '#f5f5dc' :
                                      product.color.toLowerCase() === 'olive' ? '#808000' :
                                      product.color.toLowerCase() === 'brown' ? '#8b4513' :
                                      product.color.toLowerCase() === 'gray' ? '#808080' :
                                      product.color.toLowerCase() === 'purple' ? '#800080' :
                                      product.color.toLowerCase() === 'pink' ? '#ff69b4' :
                                      product.color.toLowerCase() === 'red' ? '#ff0000' :
                                      product.color.toLowerCase() === 'blue' ? '#0000ff' :
                                      product.color.toLowerCase() === 'green' ? '#008000' :
                                      product.color.toLowerCase() === 'yellow' ? '#ffd700' :
                                      product.color.toLowerCase() === 'orange' ? '#ffa500' :
                                      '#ccc',
                        border: '2px solid white',
                        boxShadow: '0 0 0 1px #ddd'
                      }} />
                      <span style={{ color: '#666' }}>{product.color}</span>
                    </div>
                  )}
                  
                  <div style={{ 
                    fontSize: '20px', 
                    fontWeight: 'bold', 
                    color: '#ff5a00',
                    marginTop: '10px'
                  }}>
                    ${typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ 
          marginTop: '60px', 
          backgroundColor: 'white', 
          borderRadius: '8px',
          padding: '30px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '20px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#22c55e' }}>{products.length}+</div>
              <div style={{ color: '#666', marginTop: '5px' }}>Products</div>
            </div>
            <div>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#22c55e' }}>50+</div>
              <div style={{ color: '#666', marginTop: '5px' }}>Colors</div>
            </div>
            <div>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#22c55e' }}>10</div>
              <div style={{ color: '#666', marginTop: '5px' }}>Categories</div>
            </div>
            <div>
              <div style={{ fontSize: '36px', fontWeight: 'bold', color: '#22c55e' }}>100%</div>
              <div style={{ color: '#666', marginTop: '5px' }}>Turkish Quality</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: 'white', 
        borderTop: '1px solid #eee',
        padding: '30px 0',
        marginTop: '40px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <p style={{ color: '#666' }}>
            © 2024 Hijab Fashion Mall. All rights reserved. | Premium Turkish Modest Fashion Wholesale
          </p>
        </div>
      </footer>
    </div>
  )
}