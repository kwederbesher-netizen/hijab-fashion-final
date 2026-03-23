// app/ar/product/[slug]/page.tsx
'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Head from 'next/head'
import { useCurrency } from '@/app/contexts/CurrencyContext'

export default function ProductPageAr() {
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

  // دالة ترجمة التصنيفات
  const translateCategory = useCallback((categoryEn: string) => {
    const categories: { [key: string]: string } = {
      'Abayas': 'عبايات',
      'Hijabs': 'حجاب',
      'Modest Dresses': 'فساتين محجبات',
      'Modest Evening Dresses': 'فساتين سهرة محجبات',
      'Modest Pants Sets': 'طقم بنطلون محجبات',
      'Modest Skirt Sets': 'طقم تنورة محجبات',
      'Modest Sportswear': 'ملابس رياضية محجبات',
      'Prayer Clothes': 'ملابس صلاة',
      'Prayer Outfits': 'ملابس صلاة',
      'Pray Clothes': 'ملابس صلاة',
      'Pray clothes': 'ملابس صلاة',
      'pray clothes': 'ملابس صلاة',
      'Jilbab': 'ملابس صلاة',
      'Islamic Prayer Wear': 'ملابس صلاة',
      'Prayer Dress': 'ملابس صلاة',
      'Modest Sets': 'طقم بنطلون محجبات',
      'Modest Set': 'طقم بنطلون محجبات',
      'Burkini Modest Swimwear': 'بوركيني ملابس سباحة محجبات',
      'Tunics': 'تونيك',
      'Modest Coats': 'سترات محجبات',
      'Modest Jackets': 'معاطف محجبات',
      'Trenchcoats': 'معاطف طويلة',
      'Modest Wool': 'ملابس صوف محجبات',
      'Kaftan': 'قفطان'
    }
    return categories[categoryEn] || categoryEn
  }, [])

  // تحميل المنتج
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

  // ✅ دالة إضافة إلى السلة - معدلة لحساب الكمية بشكل صحيح
  const addToCart = useCallback((product: any, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]')
    
    const isRSS = product.product_code?.toLowerCase().includes('rss') || 
                  product['rss/not rss message_en']?.includes('✅')
    const packetSize = product.pcs_per_packet ? parseInt(product.pcs_per_packet) : 1
    const requestedQuantity = quantity
    
    const productToAdd = {
      _id: product._id || '',
      name_ar: product.name_ar || '',
      name_en: product.name_en || '',
      price_usd: product.price_usd || 0,
      product_code: product.product_code || '',
      imageUrl: product.imageUrl || '/images/default.webp',
      slug_ar: typeof product.slug_ar === 'string' ? product.slug_ar : '',
      slug_en: typeof product.slug_en === 'string' ? product.slug_en : '',
      category_main_en: product.category_main_en || '',
      quantity: requestedQuantity,
      packetSize: packetSize,
      isRSS: isRSS,
      unitPrice: product.price_usd || 0
    }
    
    const existingIndex = currentCart.findIndex((item: any) => item._id === product._id)
    
    if (existingIndex !== -1) {
      currentCart[existingIndex].quantity += requestedQuantity
    } else {
      currentCart.push(productToAdd)
    }
    
    localStorage.setItem('cart', JSON.stringify(currentCart))
    
    // ✅ حساب العدد الإجمالي للقطع
    const totalItems = currentCart.reduce((sum, item) => sum + (item.quantity || 1), 0)
    
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

  // تعيين الكمية الافتراضية
  useEffect(() => {
    if (product) {
      const isRSSProduct = product.product_code?.toLowerCase().includes('rss') || 
                           product['rss/not rss message_en']?.includes('✅')
      const packetSize = product.pcs_per_packet ? parseInt(product.pcs_per_packet) : 1
      const defaultQuantity = isRSSProduct ? 1 : packetSize
      setQuantity(defaultQuantity)
    }
  }, [product])

  // دوال التحكم في الكمية
  const step = product ? (product.product_code?.toLowerCase().includes('rss') || product['rss/not rss message_en']?.includes('✅') ? 1 : (parseInt(product.pcs_per_packet) || 1)) : 1
  const minQuantity = product ? (product.product_code?.toLowerCase().includes('rss') || product['rss/not rss message_en']?.includes('✅') ? 1 : (parseInt(product.pcs_per_packet) || 1)) : 1

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
      justifyContent: 'center',
      direction: 'rtl'
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        border: '3px solid #f3f3f3',
        borderTop: '3px solid #ff5a00',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite',
        marginBottom: '20px'
      }} />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <p style={{ 
        color: '#555', 
        fontSize: '18px',
        fontFamily: 'Tajawal, sans-serif'
      }}>
        جاري تحميل المنتج...
      </p>
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
      justifyContent: 'center',
      direction: 'rtl'
    }}>
      <i className="fas fa-exclamation-circle" style={{ fontSize: '70px', color: '#ff5a00', marginBottom: '20px' }}></i>
      <h1 style={{ 
        fontSize: '36px', 
        marginBottom: '15px',
        fontFamily: 'Tajawal, sans-serif',
        fontWeight: 700
      }}>
        المنتج غير موجود
      </h1>
      <p style={{ 
        marginBottom: '30px', 
        color: '#555',
        fontSize: '18px'
      }}>
        يرجى اختيار منتج من الكتالوج الخاص بنا.
      </p>
      <Link 
        href="/ar/catalog" 
        style={{ 
          display: 'inline-block',
          padding: '14px 40px',
          background: '#ff5a00',
          color: 'white',
          borderRadius: '50px',
          textDecoration: 'none',
          fontWeight: '600',
          fontSize: '16px',
          transition: 'all 0.3s',
          boxShadow: '0 4px 15px rgba(255, 90, 0, 0.2)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#e04e00'
          e.currentTarget.style.transform = 'translateY(-2px)'
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 90, 0, 0.3)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#ff5a00'
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 90, 0, 0.2)'
        }}
      >
        العودة إلى الكتالوج
      </Link>
    </div>
  )

  const productName = product.name_ar || product.name_en || ''
  const productCategory = product.category_main_en || ''
  const productCategoryAr = translateCategory(productCategory)
  const productPrice = product.price_usd || 0
  const sizes = product.sizes ? parseSizes(product.sizes) : []
  const isRSS = product.product_code?.toLowerCase().includes('rss') || 
                product['rss/not rss message_en']?.includes('✅')
  const hasPlus = product['plus sizes'] === 'Yes'
  const packetSize = product.pcs_per_packet ? parseInt(product.pcs_per_packet) : 1

  return (
    <>
      <Head>
        <title>{productName} - حجاب فاشون مول | جملة ملابس محجبات تركية</title>
        <meta name="description" content={product.description_ar || product.description_en || `تشكيلة ${productName} الفاخرة من ملابس المحجبات التركية. جملة حجاب تركي مع شحن عالمي.`} />
        <meta name="keywords" content={`${productName}, جملة حجاب تركي, ${productCategoryAr}, ملابس محجبات تركية, عبايات, فساتين محجبات, حجاب تركي بالجملة`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://hijabfashionmall.com/ar/product/${product.slug_ar || product.slug_en || product._id}`} />
        <link rel="alternate" href={`https://hijabfashionmall.com/en/product/${product.slug_en || product._id}`} hrefLang="en" />
        <link rel="alternate" href={`https://hijabfashionmall.com/ar/product/${product.slug_ar || product.slug_en || product._id}`} hrefLang="ar" />
        
        <meta property="og:title" content={`${productName} - حجاب فاشون مول`} />
        <meta property="og:description" content={product.description_ar || product.description_en || `تشكيلة ${productName} الفاخرة`} />
        <meta property="og:url" content={`https://hijabfashionmall.com/ar/product/${product.slug_ar || product.slug_en || product._id}`} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={product.imageUrl || product.mainImage || '/images/default.webp'} />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": productName,
              "description": product.description_ar || product.description_en,
              "image": product.imageUrl || product.mainImage,
              "sku": product.product_code,
              "brand": { "@type": "Brand", "name": "حجاب فاشون مول" },
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
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)'
          e.currentTarget.style.background = '#e04e00'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.background = '#ff5a00'
        }}
        aria-label="العودة إلى الأعلى"
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      {/* Breadcrumb */}
      <div style={{
        padding: '20px 0',
        background: '#f5f5f5',
        borderBottom: '1px solid #eee'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            fontSize: '14px',
            color: '#555'
          }}>
            <Link href="/ar" style={{ color: '#555', textDecoration: 'none', transition: 'color 0.3s' }}>
              الرئيسية
            </Link>
            <span style={{ color: '#999' }}>›</span>
            <Link href="/ar/catalog" style={{ color: '#555', textDecoration: 'none', transition: 'color 0.3s' }}>
              الكتالوج
            </Link>
            <span style={{ color: '#999' }}>›</span>
            <Link href={`/ar/category/${product.category_main_en?.toLowerCase() || ''}`} style={{ color: '#555', textDecoration: 'none', transition: 'color 0.3s' }}>
              {productCategoryAr}
            </Link>
            <span style={{ color: '#999' }}>›</span>
            <span style={{ color: '#000', fontWeight: '600' }}>{productName}</span>
          </div>
        </div>
      </div>

      {/* Product Section */}
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
                justifyContent: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s'
              }}>
                <img 
                  src={selectedImage || product.imageUrl || product.mainImage || '/images/default.webp'} 
                  alt={productName}
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    objectFit: 'contain',
                    padding: '20px',
                    transition: 'transform 0.5s'
                  }}
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
                {productCategoryAr}
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
                  {formatPrice(productPrice)}
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {isRSS && (
                    <span style={{
                      padding: '6px 15px',
                      borderRadius: '30px',
                      fontSize: '13px',
                      fontWeight: '600',
                      background: '#10b981',
                      color: 'white'
                    }}>
                      قطعة فردية
                    </span>
                  )}
                  {hasPlus && (
                    <span style={{
                      padding: '6px 15px',
                      borderRadius: '30px',
                      fontSize: '13px',
                      fontWeight: '600',
                      background: '#000',
                      color: 'white'
                    }}>
                      مقاسات كبيرة
                    </span>
                  )}
                </div>
              </div>

              {/* RSS/Packet Message */}
              {(product['rss/not rss message_ar'] || product['rss/not rss message_en'] || product.pcs_per_packet) && (
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
                    {(() => {
                      if (product['rss/not rss message_ar'] && product['rss/not rss message_ar'] !== 'null' && product['rss/not rss message_ar'] !== '') {
                        return product['rss/not rss message_ar']
                      }
                      if (product.pcs_per_packet && product.pcs_per_packet !== '') {
                        return `📦 يباع في حزمة من ${product.pcs_per_packet} قطع`
                      }
                      return product['rss/not rss message_en'] || '📦 معلومات الحزمة غير متوفرة'
                    })()}
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
                  وصف المنتج
                </h3>
                <p style={{ color: '#555', lineHeight: '1.8' }}>
                  {product.description_ar || product.description_en || 'منتج تركي فاخر عالي الجودة.'}
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
                  المقاسات المتوفرة
                </h3>
                <div style={{ fontSize: '14px', color: '#555', marginBottom: '10px' }}>
                  {sizes.length > 0 ? sizes.join(' - ') : 'مقاس قياسي'}
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
                      مقاس قياسي
                    </span>
                  )}
                </div>
              </div>

              {/* Quantity */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                marginBottom: '15px'
              }}>
                <label style={{ fontWeight: '600', color: '#000' }}>الكمية:</label>
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
                      color: '#555',
                      transition: 'background 0.3s'
                    }}
                    onClick={decrementQuantity}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
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
                      fontSize: '16px',
                      fontFamily: 'Tajawal, sans-serif'
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
                      color: '#555',
                      transition: 'background 0.3s'
                    }}
                    onClick={incrementQuantity}
                    onMouseEnter={(e) => e.currentTarget.style.background = '#f5f5f5'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
                  >+</button>
                </div>
              </div>

              {/* عرض معلومات الحد الأدنى */}
              {!isRSS && packetSize > 1 && (
                <div style={{
                  fontSize: '12px',
                  color: '#666',
                  marginBottom: '25px',
                  textAlign: 'right'
                }}>
                  <i className="fas fa-info-circle"></i> الحد الأدنى: {packetSize} قطع (حزمة كاملة)
                </div>
              )}

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '15px',
                marginBottom: '30px',
                flexWrap: 'wrap'
              }}>
                <button 
                  style={{
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
                    minWidth: '200px',
                    transition: 'all 0.3s'
                  }}
                  onClick={(e) => addToCart(product, e)}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#e04e00'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#ff5a00'}
                >
                  <i className="fas fa-shopping-cart"></i> أضف للاستفسار
                </button>
                <a 
                  href={`https://wa.me/905519522448?text=${encodeURIComponent(
                    `مرحباً، أود الاستفسار عن طلب:\n\n*${productName}*\nالسعر: ${formatPrice(productPrice)}\nالرمز: ${product.product_code || 'غير متوفر'}\nالكمية: ${quantity}\n\nيرجى تزويدي بمزيد من المعلومات.`
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
                    textDecoration: 'none',
                    transition: 'all 0.3s'
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={(e) => e.currentTarget.style.background = '#128C7E'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#25d366'}
                >
                  <i className="fab fa-whatsapp"></i> طلب عبر واتساب
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
                  <span><strong>الرمز:</strong> {product.product_code || 'غير متوفر'}</span>
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
                    <span><strong>الحزمة:</strong> {product.pcs_per_packet} قطع</span>
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
                  <span><strong>التوفر:</strong> متوفر في المخزون</span>
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
                  <span><strong>الشحن:</strong> عالمي (3-7 أيام عمل)</span>
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
            <h2 style={{
              textAlign: 'center',
              fontSize: '36px',
              color: '#000',
              marginBottom: '15px',
              fontWeight: '700'
            }}>
              قد يعجبك أيضاً
            </h2>
            <p style={{
              textAlign: 'center',
              color: '#555',
              marginBottom: '40px',
              fontSize: '18px'
            }}>
              منتجات مشابهة قد تهمك
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '25px',
              marginTop: '40px'
            }}>
              {relatedProducts.map((p: any) => (
                <Link 
                  href={`/ar/product/${p.slug_ar || p.slug_en || p._id}`} 
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 15px 30px rgba(255,90,0,0.15)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.03)'
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
                      src={p.imageUrl || p.mainImage || '/images/default.webp'} 
                      alt={p.name_ar || p.name_en || ''}
                      style={{ 
                        maxWidth: '100%', 
                        maxHeight: '100%', 
                        objectFit: 'contain',
                        transition: 'transform 0.5s'
                      }}
                      loading="lazy"
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
                      {p.name_ar || p.name_en || ''}
                    </h4>
                    <div style={{
                      color: '#ff5a00',
                      fontWeight: '700',
                      fontSize: '16px'
                    }}>
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
          div[style*="grid-template-columns: repeat(4, 1fr)"] {
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