'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Head from 'next/head'
import { useCurrency } from '@/app/contexts/CurrencyContext'
import { 
  FaBox, FaRuler, FaShoppingCart, FaBarcode, 
  FaCheckCircle, FaTruck, FaArrowUp, FaInfoCircle,
  FaSpinner
} from 'react-icons/fa'

export default function ProductPageEn() {
  const params = useParams()
  const slug = decodeURIComponent(params.slug as string)

  const [product, setProduct] = useState<any>(null)
  const [relatedProducts, setRelatedProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState('')
  const [showBackToTop, setShowBackToTop] = useState(false)
  const { formatPrice } = useCurrency()
  
  const isMounted = useRef(true)
  const abortController = useRef<AbortController | null>(null)

  const getCategoryDisplay = useCallback((categoryEn: string) => {
    return categoryEn
  }, [])

  // Load product
  useEffect(() => {
    isMounted.current = true
    setLoading(true)
    setError(false)
    
    abortController.current = new AbortController()
    
    async function loadProduct() {
      try {
        const res = await fetch(`/api/products?slug=${encodeURIComponent(slug)}&limit=1`, {
          signal: abortController.current?.signal
        })
        const data = await res.json()
        
        if (!isMounted.current) return
        
        if (data.result && data.result.length > 0) {
          const foundProduct = data.result[0]
          setProduct(foundProduct)
          setSelectedImage(foundProduct.imageUrl || foundProduct.mainImage || '/images/default.webp')
          
          if (foundProduct.category_main_en) {
            const relatedRes = await fetch(`/api/products?category=${foundProduct.category_main_en}&limit=4`, {
              signal: abortController.current?.signal
            })
            const relatedData = await relatedRes.json()
            setRelatedProducts(relatedData.result.filter((p: any) => p._id !== foundProduct._id))
          }
          setLoading(false)
        } else {
          setError(true)
          setLoading(false)
        }
      } catch (error: any) {
        if (error.name !== 'AbortError' && isMounted.current) {
          console.error('Error loading product:', error)
          setError(true)
          setLoading(false)
        }
      }
    }
    
    loadProduct()

    return () => {
      isMounted.current = false
      if (abortController.current) {
        abortController.current.abort()
      }
    }
  }, [slug])

  // Back to top
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Add to cart
  const addToCart = useCallback((product: any, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]')
    
    const isRSS = product['rss/not rss message_en']?.includes('single piece') || 
                  product['rss/not rss message_ar']?.includes('قطعة واحدة')
    const packetSize = product.pcs_per_packet ? parseInt(product.pcs_per_packet) : 1
    const requestedQuantity = quantity
    
    const productToAdd = {
      _id: product._id,
      name_ar: product.name_ar,
      name_en: product.name_en,
      price_usd: product.price_usd,
      product_code: product.product_code,
      imageUrl: product.imageUrl,
      slug_ar: product.slug_ar,
      slug_en: product.slug_en,
      category_main_en: product.category_main_en,
      quantity: requestedQuantity,
      packetSize: packetSize,
      isRSS: isRSS,
      unitPrice: product.price_usd
    }
    
    const existingIndex = currentCart.findIndex((item: any) => item._id === product._id)
    
    if (existingIndex !== -1) {
      currentCart[existingIndex].quantity += requestedQuantity
    } else {
      currentCart.push(productToAdd)
    }
    
    localStorage.setItem('cart', JSON.stringify(currentCart))
    
    const totalItems = currentCart.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0)
    
    const cartCountElement = document.getElementById('cartCount')
    if (cartCountElement) {
      cartCountElement.textContent = totalItems.toString()
    }
    
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: totalItems }))
    
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('openCart'))
    }, 50)
  }, [quantity])

  const parseSizes = useCallback((sizes: string) => {
    if (!sizes) return []
    return sizes.split(' ').filter(s => s.trim())
  }, [])

  // Set default quantity
  useEffect(() => {
    if (product) {
      const isRSSProduct = product['rss/not rss message_en']?.includes('single piece') || 
                           product['rss/not rss message_ar']?.includes('قطعة واحدة')
      const packetSize = product.pcs_per_packet ? parseInt(product.pcs_per_packet) : 1
      const defaultQuantity = isRSSProduct ? 1 : packetSize
      setQuantity(defaultQuantity)
    }
  }, [product])

  const step = product ? (product['rss/not rss message_en']?.includes('single piece') || product['rss/not rss message_ar']?.includes('قطعة واحدة') ? 1 : (parseInt(product.pcs_per_packet) || 1)) : 1
  const minQuantity = product ? (product['rss/not rss message_en']?.includes('single piece') || product['rss/not rss message_ar']?.includes('قطعة واحدة') ? 1 : (parseInt(product.pcs_per_packet) || 1)) : 1

  const incrementQuantity = useCallback(() => {
    setQuantity(prev => prev + step)
  }, [step])

  const decrementQuantity = useCallback(() => {
    setQuantity(prev => Math.max(minQuantity, prev - step))
  }, [minQuantity, step])

  if (loading) return (
    <div style={{ 
      padding: '100px 20px', 
      textAlign: 'center',
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <FaSpinner style={{ 
        width: '60px', 
        height: '60px', 
        color: '#ff5a00',
        animation: 'spin 1s linear infinite',
        marginBottom: '20px'
      }} />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <p style={{ color: '#555', fontSize: '18px' }}>Loading product...</p>
    </div>
  )

  if (error || !product) return (
    <div style={{ 
      padding: '100px 20px', 
      textAlign: 'center', 
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ fontSize: '70px', color: '#ff5a00', marginBottom: '20px' }}>⚠️</div>
      <h1 style={{ fontSize: '36px', marginBottom: '15px', fontWeight: 700 }}>Product Not Found</h1>
      <p style={{ marginBottom: '30px', color: '#555', fontSize: '18px' }}>Please select a product from our catalog.</p>
      <Link 
        href="/en/catalog" 
        style={{ 
          display: 'inline-block',
          padding: '14px 40px',
          background: '#ff5a00',
          color: 'white',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '16px',
          transition: 'all 0.3s'
        }}
      >
        Back to Catalog
      </Link>
    </div>
  )

  const productName = product.name_en || product.name_ar || ''
  const productCategory = product.category_main_en || ''
  const productCategoryDisplay = getCategoryDisplay(productCategory)
  const productPrice = product.price_usd || 0
  const sizes = product.sizes ? parseSizes(product.sizes) : []
  const isRSS = product['rss/not rss message_en']?.includes('single piece') || 
                product['rss/not rss message_ar']?.includes('قطعة واحدة')
  const hasPlus = product['plus sizes'] === 'Yes'
  const packetSize = product.pcs_per_packet ? parseInt(product.pcs_per_packet) : 1

  return (
    <>
      <Head>
        <title>{productName} - Hijab Fashion Mall | Wholesale Turkish Modest Fashion</title>
        <meta name="description" content={product.description_en || product.description_ar || `Premium ${productName} from Turkish modest fashion.`} />
        <meta name="keywords" content={`${productName}, wholesale hijab turkish, ${productCategory}, modest fashion wholesale`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://hijabfashionmall.com/en/product/${product.slug_en || product.slug_ar || product._id}`} />
        <meta property="og:title" content={`${productName} - Hijab Fashion Mall`} />
        <meta property="og:description" content={product.description_en || product.description_ar} />
        <meta property="og:url" content={`https://hijabfashionmall.com/en/product/${product.slug_en || product.slug_ar || product._id}`} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={product.imageUrl || '/images/default.webp'} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": productName,
              "description": product.description_en || product.description_ar,
              "image": product.imageUrl,
              "sku": product.product_code,
              "brand": { "@type": "Brand", "name": "Hijab Fashion Mall" },
              "offers": {
                "@type": "Offer",
                "price": productPrice,
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
      </Head>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: '#ff5a00',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          display: showBackToTop ? 'flex' : 'none',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          boxShadow: '0 4px 15px rgba(255, 90, 0, 0.3)',
          zIndex: 999,
          transition: 'all 0.3s'
        }}
      >
        <FaArrowUp />
      </button>

      {/* Breadcrumb */}
      <div style={{ padding: '20px 0', background: '#f5f5f5', borderBottom: '1px solid #eee' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '14px', color: '#555' }}>
            <Link href="/en" style={{ color: '#555', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#999' }}>/</span>
            <Link href="/en/catalog" style={{ color: '#555', textDecoration: 'none' }}>Catalog</Link>
            <span style={{ color: '#999' }}>/</span>
            <Link href={`/en/category/${product.category_main_en?.toLowerCase() || ''}`} style={{ color: '#555', textDecoration: 'none' }}>
              {productCategoryDisplay}
            </Link>
            <span style={{ color: '#999' }}>/</span>
            <span style={{ color: '#000', fontWeight: 600 }}>{productName}</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div style={{ padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
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
                justifyContent: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
              }}>
                <img 
                  src={selectedImage || product.imageUrl || '/images/default.webp'} 
                  alt={productName}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', padding: '20px' }}
                  onError={(e) => { (e.target as HTMLImageElement).src = '/images/default.webp' }}
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
                {productCategoryDisplay}
              </span>
              
              <h1 style={{ fontSize: '36px', fontWeight: '700', color: '#000', marginBottom: '15px', lineHeight: '1.2' }}>
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
                <div style={{ fontSize: '42px', fontWeight: '700', color: '#ff5a00' }}>
                  {formatPrice(productPrice)}
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {isRSS && (
                    <span style={{ padding: '6px 15px', borderRadius: '30px', fontSize: '13px', fontWeight: '600', background: '#10b981', color: 'white' }}>
                      Single Piece
                    </span>
                  )}
                  {hasPlus && (
                    <span style={{ padding: '6px 15px', borderRadius: '30px', fontSize: '13px', fontWeight: '600', background: '#000', color: 'white' }}>
                      Plus Sizes
                    </span>
                  )}
                </div>
              </div>

              {/* RSS/Packet Message */}
              {(product['rss/not rss message_en'] || product['rss/not rss message_ar'] || product.pcs_per_packet) && (
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
                  <FaBox />
                  <span>
                    {(() => {
                      if (product['rss/not rss message_en'] && product['rss/not rss message_en'] !== 'null') {
                        return product['rss/not rss message_en']
                      }
                      if (product.pcs_per_packet && product.pcs_per_packet !== '') {
                        return `Sold in packs of ${product.pcs_per_packet} pieces`
                      }
                      return product['rss/not rss message_ar'] || 'Packaging information not available'
                    })()}
                  </span>
                </div>
              )}

              {/* Description */}
              <div style={{ marginBottom: '30px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#000', marginBottom: '10px' }}>Product Description</h3>
                <p style={{ color: '#555', lineHeight: '1.8' }}>
                  {product.description_en || product.description_ar || 'Premium quality Turkish product.'}
                </p>
              </div>

              {/* Size Information */}
              <div style={{
                marginBottom: '30px',
                padding: '25px',
                background: '#f5f5f5',
                borderRadius: '15px'
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#000', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <FaRuler style={{ color: '#ff5a00' }} /> Available Sizes
                </h3>
                <div style={{ fontSize: '14px', color: '#555', marginBottom: '10px' }}>
                  {sizes.length > 0 ? sizes.join(' - ') : 'Standard size'}
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px' }}>
                <label style={{ fontWeight: '600', color: '#000' }}>Quantity:</label>
                <div style={{ display: 'flex', alignItems: 'center', border: '2px solid #eee', borderRadius: '50px', overflow: 'hidden' }}>
                  <button 
                    style={{ width: '40px', height: '40px', background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: '#555' }}
                    onClick={decrementQuantity}
                  >-</button>
                  <input 
                    type="text" 
                    value={quantity} 
                    readOnly 
                    style={{ width: '60px', height: '40px', border: 'none', textAlign: 'center', fontWeight: '600', fontSize: '16px' }}
                  />
                  <button 
                    style={{ width: '40px', height: '40px', background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer', color: '#555' }}
                    onClick={incrementQuantity}
                  >+</button>
                </div>
              </div>

              {/* Minimum order info */}
              {!isRSS && packetSize > 1 && (
                <div style={{ fontSize: '12px', color: '#666', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <FaInfoCircle /> Minimum order: {packetSize} pieces (full carton)
                </div>
              )}

              {/* Action Buttons - معدلة (أصغر وبدون أيقونة واتساب) */}
              <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', flexWrap: 'wrap' }}>
                <button 
                  style={{
                    flex: '1',
                    background: '#ff5a00',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '50px',
                    fontWeight: '600',
                    fontSize: '14px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    minWidth: '160px',
                    transition: 'all 0.3s'
                  }}
                  onClick={(e) => addToCart(product, e)}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#e04e00'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#ff5a00'}
                >
                  <FaShoppingCart size={14} /> Add to Inquiry
                </button>
                
                <a 
                  href={`https://wa.me/905519522448?text=${encodeURIComponent(
                    `Hello, I'm interested in ordering:\n\n*${productName}*\nPrice: ${formatPrice(productPrice)}\nCode: ${product.product_code || 'N/A'}\nQuantity: ${quantity}\n\nPlease provide more information.`
                  )}`}
                  style={{
                    flex: '1',
                    background: '#25d366',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '50px',
                    fontWeight: '600',
                    fontSize: '14px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    minWidth: '160px',
                    transition: 'all 0.3s'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) => e.currentTarget.style.background = '#128C7E'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#25d366'}
                >
                  Order via WhatsApp
                </a>
              </div>

              {/* Product Meta */}
              <div style={{ paddingTop: '20px', borderTop: '1px solid #eee' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '14px', color: '#555' }}>
                  <FaBarcode style={{ width: '20px', color: '#ff5a00' }} />
                  <span><strong>Code:</strong> {product.product_code || 'N/A'}</span>
                </div>
                {product.pcs_per_packet && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '14px', color: '#555' }}>
                    <FaBox style={{ width: '20px', color: '#ff5a00' }} />
                    <span><strong>Packet:</strong> {product.pcs_per_packet} pieces</span>
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '14px', color: '#555' }}>
                  <FaCheckCircle style={{ width: '20px', color: '#ff5a00' }} />
                  <span><strong>Availability:</strong> In Stock</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', fontSize: '14px', color: '#555' }}>
                  <FaTruck style={{ width: '20px', color: '#ff5a00' }} />
                  <span><strong>Shipping:</strong> Worldwide (3-7 business days)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div style={{ padding: '60px 0', background: '#f5f5f5' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <h2 style={{ textAlign: 'center', fontSize: '36px', color: '#000', marginBottom: '15px', fontWeight: '700' }}>
              You May Also Like
            </h2>
            <p style={{ textAlign: 'center', color: '#555', marginBottom: '40px', fontSize: '18px' }}>
              Similar products you might be interested in
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '25px',
              marginTop: '40px'
            }}>
              {relatedProducts.map((p: any) => (
                <Link 
                  href={`/en/product/${p.slug_en || p.slug_ar || p._id}`} 
                  key={p._id} 
                  style={{
                    background: 'white',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.03)',
                    transition: 'all 0.3s',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block'
                  }}
                >
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
                      alt={p.name_en || p.name_ar || ''}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      loading="lazy"
                      onError={(e) => { (e.target as HTMLImageElement).src = '/images/default.webp' }}
                    />
                  </div>
                  <div style={{ padding: '15px', textAlign: 'center' }}>
                    <h4 style={{ fontSize: '14px', fontWeight: '600', color: '#000', marginBottom: '5px' }}>
                      {p.name_en || p.name_ar || ''}
                    </h4>
                    <div style={{ color: '#ff5a00', fontWeight: '700', fontSize: '16px' }}>
                      {formatPrice(p.price_usd)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 992px) {
          div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          div[style*="height: 500px"] {
            height: 400px !important;
          }
        }
        
        @media (max-width: 576px) {
          div[style*="grid-template-columns: repeat(4, 2fr)"] {
            grid-template-columns: 1fr !important;
          }
          div[style*="height: 500px"] {
            height: 350px !important;
          }
        }
      `}</style>
    </>
  )
}