'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function ProductPage() {
  const params = useParams()
  const slug = params.slug as string

  const [product, setProduct] = useState<any>(null)
  const [allProducts, setAllProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState('')

  // Load products from Sanity
  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch('/api/products')
        const data = await res.json()
        if (data.result) {
          setAllProducts(data.result)
          
          // Find product by slug
          const found = data.result.find((p: any) => p.slug_en === slug)
          if (found) {
            setProduct(found)
            setSelectedImage(found.imageUrl || '/images/default.webp')
          }
        }
      } catch (error) {
        console.error('Error loading product:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [slug])

  // Parse sizes
  const parseSizes = (sizes: string) => {
    if (!sizes) return []
    return sizes.split(' ').filter(s => s.trim())
  }

  // Get related products
  const getRelatedProducts = () => {
    if (!product || allProducts.length === 0) return []
    
    const category = product.category_main_en || ''
    
    // Find products in same category (excluding current)
    let related = allProducts.filter(p => 
      p._id !== product._id && 
      (p.category_main_en === category)
    ).slice(0, 4)
    
    // If not enough, add random products
    if (related.length < 4) {
      const others = allProducts.filter(p => p._id !== product._id)
        .sort(() => 0.5 - Math.random())
      related = [...related, ...others].slice(0, 4)
    }
    
    return related
  }

  if (loading) return (
    <div style={{ 
      padding: '100px 20px', 
      textAlign: 'center',
      fontFamily: 'Poppins, sans-serif'
    }}>
      <i className="fas fa-spinner fa-spin" style={{ fontSize: '40px', color: '#ff5a00' }}></i>
      <p style={{ marginTop: '20px', color: '#555' }}>Loading product...</p>
    </div>
  )

  if (!product) return (
    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
      <h1>Product Not Found</h1>
      <p>Please select a product from our catalog.</p>
      <Link href="/catalog" style={{ 
        display: 'inline-block',
        marginTop: '20px',
        padding: '14px 40px',
        background: '#ff5a00',
        color: 'white',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: '600'
      }}>
        Back to Catalog
      </Link>
    </div>
  )

  const productName = product.name_en || ''
  const productCategory = product.category_main_en || ''
  const productPrice = product.price_usd || 0
  const sizes = product.sizes ? parseSizes(product.sizes) : []

  return (
    <>
      {/* Breadcrumb - مصحح */}
      <div style={{
        padding: '20px 0',
        background: '#f5f5f5',
        borderBottom: '1px solid #eee'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <li><Link href="/" style={{ color: '#555', textDecoration: 'none' }}>Home</Link></li>
            <li style={{ color: '#555' }}>›</li>
            <li><Link href="/catalog" style={{ color: '#555', textDecoration: 'none' }}>Catalog</Link></li>
            <li style={{ color: '#555' }}>›</li>
            <li><Link href={`/category/${productCategory.toLowerCase().replace(/\s+/g, '-')}`} style={{ color: '#555', textDecoration: 'none' }}>
              {productCategory}
            </Link></li>
            <li style={{ color: '#555' }}>›</li>
            <li style={{ color: '#000', fontWeight: '600' }}>{productName}</li>
          </ul>
        </div>
      </div>

      {/* Product Details Section */}
      <div style={{ padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '50px'
          }}>
            {/* Product Image */}
            <div>
              <div style={{
                width: '100%',
                height: '500px',
                borderRadius: '20px',
                overflow: 'hidden',
                background: '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src={selectedImage || product.imageUrl || '/images/default.webp'} 
                  alt={productName}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default.webp'
                  }}
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <span style={{
                display: 'inline-block',
                background: 'rgba(255, 90, 0, 0.1)',
                color: '#ff5a00',
                fontSize: '14px',
                fontWeight: '600',
                padding: '6px 15px',
                borderRadius: '30px',
                marginBottom: '15px'
              }}>
                {productCategory}
              </span>
              
              <h1 style={{
                fontSize: '36px',
                fontWeight: '700',
                color: '#000',
                marginBottom: '15px',
                lineHeight: '1.2'
              }}>
                {productName}
              </h1>
              
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '25px',
                paddingBottom: '25px',
                borderBottom: '1px solid #eee'
              }}>
                <div style={{
                  fontSize: '42px',
                  fontWeight: '700',
                  color: '#ff5a00'
                }}>
                  ${productPrice.toFixed(2)}
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {product.product_code?.toLowerCase().includes('rss') && (
                    <span style={{
                      padding: '6px 15px',
                      borderRadius: '30px',
                      fontSize: '13px',
                      fontWeight: '600',
                      background: '#10b981',
                      color: 'white'
                    }}>
                      Single Piece
                    </span>
                  )}
                  {product['plus sizes'] === 'Yes' && (
                    <span style={{
                      padding: '6px 15px',
                      borderRadius: '30px',
                      fontSize: '13px',
                      fontWeight: '600',
                      background: '#000',
                      color: 'white'
                    }}>
                      Plus Sizes
                    </span>
                  )}
                </div>
              </div>

              {/* RSS/Packet Message */}
              {(product['rss/not rss message_en'] || product.pcs_per_packet) && (
                <div style={{
                  marginBottom: '25px',
                  padding: '15px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: '#3b82f6'
                }}>
                  <i className="fas fa-box" style={{ fontSize: '20px' }}></i>
                  <span>
                    {product['rss/not rss message_en'] || 
                     `📦 Sold in packs of ${product.pcs_per_packet} pieces`}
                  </span>
                </div>
              )}

              <div style={{ marginBottom: '30px' }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#000',
                  marginBottom: '10px'
                }}>
                  Product Description
                </h3>
                <p style={{ color: '#555', lineHeight: '1.8' }}>
                  {product.description_en || 'Premium quality Turkish product.'}
                </p>
              </div>

              {/* Size Information */}
              <div style={{
                marginBottom: '30px',
                padding: '25px',
                background: '#f5f5f5',
                borderRadius: '15px'
              }}>
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#000',
                  marginBottom: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px'
                }}>
                  <i className="fas fa-ruler" style={{ color: '#ff5a00' }}></i>
                  Available Sizes
                </h3>
                <div style={{ fontSize: '14px', color: '#555', marginBottom: '10px' }}>
                  {sizes.length > 0 ? sizes.join(', ') : 'Standard size'}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {sizes.length > 0 ? (
                    sizes.map((size, i) => (
                      <span key={i} style={{
                        background: 'white',
                        padding: '8px 16px',
                        borderRadius: '30px',
                        fontSize: '14px',
                        fontWeight: '500',
                        border: '1px solid #ddd'
                      }}>
                        {size}
                      </span>
                    ))
                  ) : (
                    <span style={{
                      background: 'white',
                      padding: '8px 16px',
                      borderRadius: '30px',
                      fontSize: '14px',
                      fontWeight: '500',
                      border: '1px solid #ddd'
                    }}>
                      Standard
                    </span>
                  )}
                </div>
              </div>

              {/* Quantity */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '25px'
              }}>
                <label style={{ fontWeight: '600', color: '#000' }}>Quantity:</label>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  border: '2px solid #eee',
                  borderRadius: '50px',
                  overflow: 'hidden'
                }}>
                  <button 
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'none',
                      border: 'none',
                      fontSize: '18px',
                      cursor: 'pointer',
                      color: '#555'
                    }}
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >-</button>
                  <input 
                    type="text" 
                    value={quantity} 
                    readOnly 
                    style={{
                      width: '60px',
                      height: '40px',
                      border: 'none',
                      textAlign: 'center',
                      fontWeight: '600',
                      fontSize: '16px'
                    }}
                  />
                  <button 
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'none',
                      border: 'none',
                      fontSize: '18px',
                      cursor: 'pointer',
                      color: '#555'
                    }}
                    onClick={() => setQuantity(quantity + 1)}
                  >+</button>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '15px',
                marginBottom: '30px',
                flexWrap: 'wrap'
              }}>
                <button style={{
                  flex: '2',
                  background: '#ff5a00',
                  color: 'white',
                  border: 'none',
                  padding: '16px 30px',
                  borderRadius: '50px',
                  fontWeight: '600',
                  fontSize: '16px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  minWidth: '200px'
                }}>
                  <i className="fas fa-shopping-cart"></i> Add to Inquiry
                </button>
                <a 
                  href={`https://wa.me/905519522448?text=${encodeURIComponent(
                    `Hello, I'm interested in ordering:\n\n*${productName}*\nPrice: $${productPrice.toFixed(2)}\nCode: ${product.product_code || 'N/A'}\nQuantity: ${quantity}\n\nPlease provide more information.`
                  )}`}
                  style={{
                    flex: '1',
                    background: '#25d366',
                    color: 'white',
                    border: 'none',
                    padding: '16px 30px',
                    borderRadius: '50px',
                    fontWeight: '600',
                    fontSize: '16px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    textDecoration: 'none'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i> Order via WhatsApp
                </a>
              </div>

              {/* Product Meta */}
              <div style={{
                paddingTop: '20px',
                borderTop: '1px solid #eee'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px',
                  fontSize: '14px',
                  color: '#555'
                }}>
                  <i className="fas fa-barcode" style={{ width: '20px', color: '#ff5a00' }}></i>
                  <span><strong>Code:</strong> {product.product_code || 'N/A'}</span>
                </div>
                {product.pcs_per_packet && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '10px',
                    fontSize: '14px',
                    color: '#555'
                  }}>
                    <i className="fas fa-box" style={{ width: '20px', color: '#ff5a00' }}></i>
                    <span><strong>Packet:</strong> {product.pcs_per_packet} pieces</span>
                  </div>
                )}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px',
                  fontSize: '14px',
                  color: '#555'
                }}>
                  <i className="fas fa-check-circle" style={{ width: '20px', color: '#ff5a00' }}></i>
                  <span><strong>Availability:</strong> In Stock</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px',
                  fontSize: '14px',
                  color: '#555'
                }}>
                  <i className="fas fa-truck" style={{ width: '20px', color: '#ff5a00' }}></i>
                  <span><strong>Shipping:</strong> Worldwide (3-7 business days)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div style={{ padding: '60px 0', background: '#f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: '36px',
            color: '#000',
            marginBottom: '15px',
            fontWeight: '700'
          }}>
            You May Also Like
          </h2>
          <p style={{
            textAlign: 'center',
            color: '#555',
            marginBottom: '40px',
            fontSize: '18px'
          }}>
            Similar products you might be interested in
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '25px',
            marginTop: '40px'
          }}>
            {getRelatedProducts().map((p: any) => (
              <Link href={`/product/${p.slug_en || p._id}`} key={p._id} style={{
                background: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 5px 20px rgba(0,0,0,0.03)',
                transition: 'all 0.3s',
                textDecoration: 'none',
                color: 'inherit'
              }}>
                <div style={{
                  width: '100%',
                  height: '200px',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#f5f5f5'
                }}>
                  <img 
                    src={p.imageUrl || '/images/default.webp'} 
                    alt={p.name_en || ''}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/default.webp'
                    }}
                  />
                </div>
                <div style={{ padding: '15px', textAlign: 'center' }}>
                  <h4 style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#000',
                    marginBottom: '5px'
                  }}>
                    {p.name_en || ''}
                  </h4>
                  <div style={{
                    color: '#ff5a00',
                    fontWeight: '700',
                    fontSize: '16px'
                  }}>
                    ${(p.price_usd || 0).toFixed(2)}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}