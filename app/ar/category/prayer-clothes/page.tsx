// app/ar/category/prayer-clothes/page.tsx
'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Head from 'next/head'
import { useCurrency } from '@/app/contexts/CurrencyContext'

export default function PrayerClothesCategoryPageAr() {
  const searchParams = useSearchParams()
  const initialSearch = searchParams.get('search') || ''
  
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalProducts, setTotalProducts] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const productsPerPage = 60

  const [cart, setCart] = useState<any[]>([])
  const cartInitialized = useRef(false)
  const processingEvent = useRef(false)
  const cartStringRef = useRef('')
  
  const { formatPrice } = useCurrency()

  const [sortBy, setSortBy] = useState('default')

  const searchTimeout = useRef<NodeJS.Timeout | null>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [searchTerm, setSearchTerm] = useState(initialSearch)

  useEffect(() => {
    if (initialSearch && searchInputRef.current) {
      searchInputRef.current.value = initialSearch
    }
  }, [initialSearch])

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true)
      
      const params = new URLSearchParams()
      params.append('page', currentPage.toString())
      params.append('limit', productsPerPage.toString())
      params.append('category', 'Prayer Clothes')
      
      if (searchTerm) params.append('search', searchTerm)
      if (sortBy !== 'default') params.append('sort', sortBy)
      
      const res = await fetch(`/api/products?${params.toString()}`)
      const data = await res.json()
      
      if (data.result) {
        setProducts(data.result)
        setTotalPages(data.totalPages)
        setTotalProducts(data.total)
      }
    } catch (error) {
      console.error('خطأ في تحميل المنتجات:', error)
    } finally {
      setLoading(false)
    }
  }, [currentPage, searchTerm, sortBy])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  useEffect(() => {
    if (!cartInitialized.current) {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        try {
          setCart(JSON.parse(savedCart))
        } catch (e) {}
      }
      cartInitialized.current = true
    }
  }, [])

  useEffect(() => {
    const handleCartUpdate = () => {
      if (processingEvent.current) return
      processingEvent.current = true
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart)
          const newCartString = JSON.stringify(parsedCart)
          if (newCartString !== cartStringRef.current) {
            setCart(parsedCart)
            cartStringRef.current = newCartString
          }
        } catch (e) {}
      }
      setTimeout(() => { processingEvent.current = false }, 100)
    }
    window.addEventListener('cartUpdated', handleCartUpdate)
    return () => window.removeEventListener('cartUpdated', handleCartUpdate)
  }, [])

  useEffect(() => {
    if (cartInitialized.current) {
      const newCartString = JSON.stringify(cart)
      if (newCartString !== cartStringRef.current) {
        localStorage.setItem('cart', newCartString)
        cartStringRef.current = newCartString
        const cartCountElement = document.getElementById('cartCount')
        if (cartCountElement) cartCountElement.textContent = cart.length.toString()
      }
    }
  }, [cart])

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const addToCart = useCallback((product: any, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]')
    const isRSS = product['rss/not rss message_ar']?.includes('قطعة واحدة')
    const packetSize = product.pcs_per_packet ? parseInt(product.pcs_per_packet) : 1
    
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
      quantity: 1,
      packetSize,
      isRSS,
      unitPrice: product.price_usd
    }
    
    const existingIndex = currentCart.findIndex((item: any) => item._id === product._id)
    if (existingIndex !== -1) currentCart[existingIndex].quantity += 1
    else currentCart.push(productToAdd)
    
    localStorage.setItem('cart', JSON.stringify(currentCart))
    const totalItems = currentCart.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0)
    const cartCountElement = document.getElementById('cartCount')
    if (cartCountElement) cartCountElement.textContent = totalItems.toString()
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: totalItems }))
    setTimeout(() => window.dispatchEvent(new CustomEvent('openCart')), 50)
  }, [])

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (searchTimeout.current) clearTimeout(searchTimeout.current)
    searchTimeout.current = setTimeout(() => {
      setSearchTerm(value)
      setCurrentPage(1)
    }, 300)
  }, [])

  const getColorCode = useCallback((color: string) => {
    const colors: any = {
      'Black': '#1a1a1a', 'White': '#FFFFFF', 'Navy': '#0a192f', 'Gray': '#6b6b6b',
      'Burgundy': '#6e2c2c', 'Red': '#b91c1c', 'Green': '#2d6a4f', 'Blue': '#1e40af',
      'Brown': '#7b4a2e', 'Beige': '#d4b896', 'Olive': '#5a6b3a', 'Purple': '#5a2d6e',
      'Pink': '#d47a8a', 'Orange': '#e86a2c', 'Light Grey': '#cbd5e1', 'Dark Brown': '#4a2c1a',
      'Mint Green': '#6fbf8f', 'Cream': '#fdf6e3', 'Petrol Blue': '#2c5f6e', 'Mauve': '#c4a5b0',
      'Taupe': '#8b7355', 'Olive Green': '#6b7b3a', 'Charcoal': '#36454F', 'Dusty Rose': '#c9a0a8',
      'Sky Blue': '#7bc5e8', 'Light Brown': '#b8855a', 'Yellow': '#eab308', 'Dark Beige': '#b5956e'
    }
    return colors[color] || '#CCCCCC'
  }, [])

  const getProductUrl = useCallback((product: any) => {
    if (product.slug_ar) return `/ar/product/${product.slug_ar}`
    else if (product.slug_en) return `/ar/product/${product.slug_en}`
    else return `/ar/product/${product._id || 'product'}`
  }, [])

  const LoadingSkeleton = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px', marginBottom: '50px' }}>
      {Array(8).fill(0).map((_, i) => (
        <div key={i} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', border: '1px solid #f0e6dc' }}>
          <div style={{ height: '280px', background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)', backgroundSize: '200% 100%', animation: 'pulse 1.5s infinite' }} />
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ height: '12px', background: '#f0f0f0', marginBottom: '8px', borderRadius: '6px', width: '60%', margin: '0 auto 8px' }} />
            <div style={{ height: '16px', background: '#f0f0f0', marginBottom: '8px', borderRadius: '6px', width: '80%', margin: '0 auto 8px' }} />
            <div style={{ height: '12px', background: '#f0f0f0', marginBottom: '12px', borderRadius: '6px', width: '50%', margin: '0 auto 12px' }} />
            <div style={{ height: '20px', background: '#f0f0f0', marginBottom: '15px', borderRadius: '6px', width: '40%', margin: '0 auto 15px' }} />
            <div style={{ height: '44px', background: '#f0f0f0', borderRadius: '50px', width: '100%' }} />
          </div>
        </div>
      ))}
    </div>
  )

  if (loading && products.length === 0) return (
    <div style={{ padding: '100px 20px', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '60px', height: '60px', border: '3px solid #f3f3f3', borderTop: '3px solid #ff5a00', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
      <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } @keyframes pulse { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }`}</style>
      <p style={{ marginTop: '20px', color: '#555', fontSize: '16px' }}>جاري تحميل ملابس الصلاة...</p>
    </div>
  )

  const startIndex = (currentPage - 1) * productsPerPage + 1
  const endIndex = Math.min(currentPage * productsPerPage, totalProducts)

  return (
    <>
      <Head>
        <title>ملابس صلاة تركية بالجملة | جلابيات صلاة وعبايات | هجاب فاشن مول</title>
        <meta name="description" content={`تشكيلة ملابس صلاة تركية بالجملة. جلابيات صلاة بأقمشة قطنية ناعمة ومريحة. تصاميم عملية بألوان هادئة تناسب جميع الأوقات.`} />
        <meta name="keywords" content="ملابس صلاة بالجملة, جلابية صلاة تركية, عباية صلاة, طقم صلاة كامل, جلباب صلاة, ملابس صلاة قطن, جلابيات صلاة ناعمة, ملابس صلاة عملية" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hijabfashionmall.com/ar/category/prayer-clothes" />
        <link rel="alternate" href="https://hijabfashionmall.com/ar/category/prayer-clothes" hrefLang="ar" />
        <link rel="alternate" href="https://hijabfashionmall.com/en/category/prayer-clothes" hrefLang="en" />
        <link rel="alternate" href="https://hijabfashionmall.com/fr/category/prayer-clothes" hrefLang="fr" />
        <meta property="og:title" content="ملابس صلاة تركية بالجملة - عملية ومريحة" />
        <meta property="og:description" content={`${totalProducts}+ قطعة ملابس صلاة. تصاميم عملية بأقمشة ناعمة.`} />
        <meta property="og:url" content="https://hijabfashionmall.com/ar/category/prayer-clothes" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hijabfashionmall.com/images/og-prayer-clothes-ar.jpg" />
        <meta property="og:locale" content="ar_AR" />
      </Head>

      <button onClick={scrollToTop} style={{ position: 'fixed', bottom: '30px', right: '30px', width: '50px', height: '50px', borderRadius: '50%', background: '#ff5a00', color: 'white', border: 'none', cursor: 'pointer', display: showBackToTop ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', fontSize: '24px', boxShadow: '0 4px 15px rgba(255,90,0,0.3)', zIndex: 999, transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
      </button>

      <section style={{ background: 'linear-gradient(135deg, #fdf8f2 0%, #ffffff 100%)', padding: '60px 0 40px', textAlign: 'center', borderBottom: '1px solid #f0e6dc', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '160px', fontWeight: 800, color: 'rgba(255,90,0,0.03)', whiteSpace: 'nowrap', zIndex: 0, pointerEvents: 'none', fontFamily: 'Playfair Display, serif' }}>صلاة</div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '14px', color: '#7a6a5a', marginBottom: '20px' }}>
            <Link href="/ar" style={{ color: '#ff5a00', textDecoration: 'none' }}>الرئيسية</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <Link href="/ar/catalog" style={{ color: '#ff5a00', textDecoration: 'none' }}>الكتالوج</Link>
            <span style={{ margin: '0 8px' }}>/</span>
            <span>ملابس الصلاة</span>
          </div>
          <h1 style={{ fontSize: '48px', color: '#2c2418', marginBottom: '15px', fontWeight: 800, lineHeight: '1.2', fontFamily: 'Playfair Display, serif' }}>
            ملابس صلاة <span style={{ color: '#ff5a00' }}>تركية</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#5a4a3a', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            جلابيات صلاة بأقمشة قطنية ناعمة ومريحة. تصاميم عملية بألوان هادئة 
            تناسب جميع الأوقات مع تفاصيل أنيقة.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '40px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="1.8"><path d="M3 6h18v12H3z" stroke="currentColor" fill="none"/><path d="M8 10h8" stroke="currentColor"/></svg>
              </div>
              <span style={{ color: '#4a3a2a', fontSize: '15px' }}>جلابيات صلاة</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" fill="none"/><path d="M2 17l10 5 10-5" stroke="currentColor" fill="none"/></svg>
              </div>
              <span style={{ color: '#4a3a2a', fontSize: '15px' }}>أقمشة قطنية</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="1.8"><rect x="4" y="8" width="16" height="12" rx="1" stroke="currentColor" fill="none"/><path d="M8 6V4h8v2" stroke="currentColor"/></svg>
              </div>
              <span style={{ color: '#4a3a2a', fontSize: '15px' }}>مقاسات متنوعة</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="1.8"><path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor"/><circle cx="12" cy="12" r="3" stroke="currentColor" fill="none"/></svg>
              </div>
              <span style={{ color: '#4a3a2a', fontSize: '15px' }}>ألوان هادئة</span>
            </div>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
          <main>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px', background: 'white', padding: '15px 25px', borderRadius: '20px', boxShadow: '0 5px 15px rgba(0,0,0,0.03)', border: '1px solid #f0e6dc' }}>
              <div style={{ color: '#5a4a3a', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" fill="none"/><path d="M3 9h18" stroke="currentColor"/></svg>
                <span><span style={{ fontWeight: 600, color: '#ff5a00' }}>{totalProducts}</span> منتج ملابس صلاة</span>
                {totalProducts > 0 && <span style={{ marginRight: '10px', color: '#a08c7a', fontSize: '13px' }}>({startIndex}-{endIndex})</span>}
              </div>
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative' }}>
                  <input ref={searchInputRef} type="text" placeholder="ابحث بالاسم، الرمز، القماش..." defaultValue={initialSearch} onChange={handleSearchChange} style={{ padding: '12px 18px 12px 42px', border: '2px solid #f0e6dc', borderRadius: '40px', fontFamily: 'Poppins, sans-serif', fontSize: '14px', transition: 'all 0.3s', outline: 'none', width: '260px', background: 'white' }} onFocus={(e) => e.currentTarget.style.borderColor = '#ff5a00'} onBlur={(e) => e.currentTarget.style.borderColor = '#f0e6dc'} />
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a08c7a" strokeWidth="2" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }}><circle cx="11" cy="11" r="8" stroke="currentColor" fill="none"/><path d="M21 21l-4.35-4.35" stroke="currentColor"/></svg>
                </div>
                <select value={sortBy} onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }} style={{ padding: '12px 20px', border: '2px solid #f0e6dc', borderRadius: '40px', fontFamily: 'Poppins, sans-serif', fontSize: '14px', cursor: 'pointer', outline: 'none', background: 'white', minWidth: '200px', color: '#2c2418' }}>
                  <option value="default">ترتيب حسب: الأكثر صلة</option>
                  <option value="price-asc">السعر: تصاعدي</option>
                  <option value="price-desc">السعر: تنازلي</option>
                  <option value="name-asc">الاسم: أ إلى ي</option>
                  <option value="name-desc">الاسم: ي إلى أ</option>
                  <option value="newest">الأحدث</option>
                </select>
              </div>
            </div>

            {products.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 20px', background: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f0e6dc' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#c0b0a0" strokeWidth="1.5"><circle cx="11" cy="11" r="8" stroke="currentColor" fill="none"/><path d="M21 21l-4.35-4.35" stroke="currentColor"/></svg>
                <h3 style={{ fontSize: '24px', color: '#2c2418', marginBottom: '10px', fontWeight: 600 }}>لم يتم العثور على ملابس صلاة</h3>
                <p style={{ color: '#7a6a5a', marginBottom: '25px', fontSize: '16px' }}>حاول تعديل بحثك أو تصفح الكتالوج الكامل.</p>
                <button onClick={() => { setSearchTerm(''); setSortBy('default'); if (searchInputRef.current) searchInputRef.current.value = ''; setCurrentPage(1); }} style={{ background: '#ff5a00', color: 'white', border: 'none', padding: '15px 45px', borderRadius: '50px', fontWeight: 600, fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#e04e00'} onMouseLeave={(e) => e.currentTarget.style.background = '#ff5a00'}>إعادة تعيين البحث</button>
              </div>
            ) : (
              <>
                {loading && products.length > 0 ? <LoadingSkeleton /> : (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px', marginBottom: '50px' }}>
                    {products.map((p: any) => {
                      const plusSizes = p['plus sizes'] || p.plus_sizes || p.plusSizes || ''
                      const hasPlus = String(plusSizes).toLowerCase() === 'yes'
                      const isRSS = p['rss/not rss message_ar']?.includes('قطعة واحدة')
                      const badges = []
                      if (p.is_new === 'Yes') badges.push(<span key="new" style={{ background: '#2d6a4f', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>جديد</span>)
                      if (p.is_bestseller === 'Yes') badges.push(<span key="bestseller" style={{ background: '#ff5a00', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>الأكثر مبيعاً</span>)
                      if (hasPlus) badges.push(<span key="plus" style={{ background: '#e86a2c', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>مقاسات كبيرة</span>)

                      return (
                        <Link href={getProductUrl(p)} key={p._id} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', transition: 'all 0.3s', textDecoration: 'none', color: 'inherit', border: '1px solid #f0e6dc', display: 'block' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(255,90,0,0.12)'; e.currentTarget.style.borderColor = '#ff5a00'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = '#f0e6dc'; }}>
                          <div style={{ position: 'relative', height: '280px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #fef9f2 0%, #faf5ed 100%)' }}>
                            <img src={p.imageUrl || '/images/default.webp'} alt={p.name_ar || 'ملابس صلاة'} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', transition: 'transform 0.5s' }} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = '/images/default.webp' }} />
                            {badges.length > 0 && <div style={{ position: 'absolute', top: '15px', right: '15px', display: 'flex', gap: '6px', flexDirection: 'column' }}>{badges}</div>}
                          </div>
                          <div style={{ padding: '20px', textAlign: 'center' }}>
                            <div style={{ fontSize: '11px', color: '#ff5a00', marginBottom: '8px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>ملابس صلاة</div>
                            <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#2c2418', marginBottom: '8px', lineHeight: '1.4' }}>{p.name_ar || p.name_en || ''}</h3>
                            <div style={{ fontSize: '11px', color: '#a08c7a', marginBottom: '12px', fontFamily: 'monospace' }}>{p.product_code || ''}</div>
                            {p.color_ar || p.color_en ? <div style={{ marginBottom: '12px' }}><div style={{ width: '24px', height: '24px', borderRadius: '50%', background: getColorCode(p.color_en || p.color_ar || ''), margin: '0 auto', border: '2px solid #fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} title={p.color_ar || p.color_en} /></div> : null}
                            <div style={{ fontSize: '12px', color: isRSS ? '#2d6a4f' : '#e86a2c', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', padding: '5px 12px', background: isRSS ? 'rgba(45,106,79,0.1)' : 'rgba(232,106,44,0.1)', borderRadius: '30px', width: 'fit-content', margin: '0 auto 15px' }}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{isRSS ? <path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/> : <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" fill="none"/>}</svg>
                              <span>{isRSS ? 'قطعة واحدة' : 'حزمة كاملة'}</span>
                            </div>
                            <div style={{ fontSize: '20px', fontWeight: 700, color: '#ff5a00', marginBottom: '15px' }}>{formatPrice(p.price_usd)}</div>
                            <button onClick={(e) => addToCart(p, e)} style={{ width: '100%', background: '#ff5a00', color: 'white', border: 'none', padding: '12px', borderRadius: '50px', cursor: 'pointer', fontSize: '14px', fontWeight: 600, transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }} onMouseEnter={(e) => e.currentTarget.style.background = '#e04e00'} onMouseLeave={(e) => e.currentTarget.style.background = '#ff5a00'}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" fill="none"/></svg>
                              أضف للاستفسار
                            </button>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                )}
                {totalPages > 1 && (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '50px', flexWrap: 'wrap' }}>
                    <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} style={{ width: '45px', height: '45px', border: currentPage === 1 ? '1px solid #f0e6dc' : 'none', background: currentPage === 1 ? '#f5efe8' : '#ff5a00', borderRadius: '12px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', color: currentPage === 1 ? '#c0b0a0' : 'white', fontSize: '16px', fontWeight: 600 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg></button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).filter(p => p === 1 || p === totalPages || (p >= currentPage - 2 && p <= currentPage + 2)).map((p, i, arr) => {
                      if (i > 0 && p - arr[i-1] > 1) return <span key={`dots-${p}`} style={{ color: '#c0b0a0', fontSize: '18px' }}>...</span>
                      return <button key={p} onClick={() => setCurrentPage(p)} style={{ width: '45px', height: '45px', border: 'none', background: p === currentPage ? '#ff5a00' : '#f5efe8', borderRadius: '12px', cursor: 'pointer', color: p === currentPage ? 'white' : '#4a3a2a', fontWeight: p === currentPage ? 700 : 500, fontSize: '16px' }} onMouseEnter={(e) => { if (p !== currentPage) e.currentTarget.style.background = '#e8dcd0' }} onMouseLeave={(e) => { if (p !== currentPage) e.currentTarget.style.background = '#f5efe8' }}>{p}</button>
                    })}
                    <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} style={{ width: '45px', height: '45px', border: currentPage === totalPages ? '1px solid #f0e6dc' : 'none', background: currentPage === totalPages ? '#f5efe8' : '#ff5a00', borderRadius: '12px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', color: currentPage === totalPages ? '#c0b0a0' : 'white', fontSize: '16px', fontWeight: 600 }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg></button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>

      {/* Size Chart for Prayer Clothes */}
      <section style={{ background: 'white', padding: '60px 0', borderTop: '1px solid #f0e6dc', borderBottom: '1px solid #f0e6dc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', color: '#2c2418', marginBottom: '15px', fontWeight: 700, fontFamily: 'Playfair Display, serif' }}>دليل مقاسات جلابيات الصلاة التركية</h2>
            <p style={{ fontSize: '16px', color: '#5a4a3a', maxWidth: '700px', margin: '0 auto' }}>المقاسات القياسية المعتمدة لجلباب الصلاة التركي. يفضل اختيار مقاس مريح.</p>
          </div>
          <div style={{ overflowX: 'auto', borderRadius: '20px', border: '1px solid #f0e6dc', background: 'white' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', minWidth: '500px' }}>
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #ff5a00 0%, #e04e00 100%)', color: 'white' }}>
                  <th style={{ padding: '15px', fontSize: '16px', fontWeight: 600 }}>المقاس</th>
                  <th style={{ padding: '15px', fontSize: '16px', fontWeight: 600 }}>الصدر (سم)</th>
                  <th style={{ padding: '15px', fontSize: '16px', fontWeight: 600 }}>الطول (سم)</th>
                  <th style={{ padding: '15px', fontSize: '16px', fontWeight: 600 }}>عرض الكم (سم)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { size: 'S / 36', chest: '88-92', length: '135-140', sleeve: '55-60' },
                  { size: 'M / 38', chest: '92-96', length: '140-145', sleeve: '58-62' },
                  { size: 'L / 40', chest: '96-100', length: '145-150', sleeve: '60-65' },
                  { size: 'XL / 42', chest: '100-104', length: '150-155', sleeve: '62-67' },
                  { size: '2XL / 44', chest: '104-108', length: '155-160', sleeve: '65-70' },
                  { size: '3XL / 46', chest: '108-112', length: '160-165', sleeve: '68-73' },
                  { size: '4XL / 48', chest: '112-116', length: '165-170', sleeve: '70-75' },
                ].map((row, index) => (
                  <tr key={row.size} style={{ background: index % 2 === 0 ? '#fef9f2' : 'white', borderBottom: '1px solid #f0e6dc' }}>
                    <td style={{ padding: '12px 15px', fontWeight: 600, color: '#ff5a00' }}>{row.size}</td>
                    <td style={{ padding: '12px 15px', color: '#4a3a2a' }}>{row.chest}</td>
                    <td style={{ padding: '12px 15px', color: '#4a3a2a' }}>{row.length}</td>
                    <td style={{ padding: '12px 15px', color: '#4a3a2a' }}>{row.sleeve}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ marginTop: '30px', padding: '20px', background: '#fef9f2', borderRadius: '16px', border: '1px solid #f0e6dc' }}>
            <h3 style={{ fontSize: '18px', color: '#2c2418', marginBottom: '15px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01" strokeLinecap="round"/></svg>
              نصائح لاختيار ملابس الصلاة المناسبة
            </h3>
            <ul style={{ color: '#5a4a3a', lineHeight: '1.8', paddingRight: '20px' }}>
              <li>✓ اختر أقمشة قطنية ناعمة ومريحة تسمح بمرور الهواء.</li>
              <li>✓ يفضل اختيار مقاس واسع قليلاً لضمان الراحة أثناء الحركة.</li>
              <li>✓ جلابيات الصلاة متوفرة بأطوال مختلفة تناسب جميع الأطوال.</li>
              <li>✓ الألوان الفاتحة والهادئة هي الأكثر طلباً في ملابس الصلاة.</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ background: '#fef9f2', padding: '60px 0', borderTop: '1px solid #f0e6dc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '32px', color: '#2c2418', marginBottom: '20px', fontWeight: 700, textAlign: 'center', fontFamily: 'Playfair Display, serif' }}>ملابس صلاة تركية بالجملة</h2>
            <p style={{ fontSize: '16px', color: '#5a4a3a', lineHeight: '1.8', marginBottom: '25px', textAlign: 'justify' }}>
              هجاب فاشن مول يقدم <strong>ملابس صلاة تركية بالجملة</strong> بتصاميم عملية وأقمشة قطنية ناعمة. مجموعتنا تضم أكثر من <strong>{totalProducts} جلابية صلاة</strong> مناسبة للاستخدام اليومي. تتميز جلابيات الصلاة التركية بالخامات المريحة والتصاميم البسيطة الأنيقة.
            </p>
            <h3 style={{ fontSize: '24px', color: '#2c2418', margin: '35px 0 20px', fontWeight: 600 }}>أنواع ملابس الصلاة المتاحة</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginBottom: '35px' }}>
              <div style={{ padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}><span style={{ fontWeight: 700, color: '#ff5a00' }}>جلباب صلاة قطني:</span><p style={{ color: '#4a3a2a', marginTop: '5px', fontSize: '14px' }}>ناعم وقابل للتنفس، مناسب للاستخدام اليومي</p></div>
              <div style={{ padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}><span style={{ fontWeight: 700, color: '#ff5a00' }}>جلباب صلاة مع طاقية:</span><p style={{ color: '#4a3a2a', marginTop: '5px', fontSize: '14px' }}>مجموعة متكاملة تشمل الطاقية</p></div>
              <div style={{ padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}><span style={{ fontWeight: 700, color: '#ff5a00' }}>جلباب صلاة سادة:</span><p style={{ color: '#4a3a2a', marginTop: '5px', fontSize: '14px' }}>تصميم بسيط بألوان هادئة ومريحة</p></div>
              <div style={{ padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}><span style={{ fontWeight: 700, color: '#ff5a00' }}>جلباب صلاة مطرز:</span><p style={{ color: '#4a3a2a', marginTop: '5px', fontSize: '14px' }}>تفاصيل بسيطة وأنيقة على الياقات والأكمام</p></div>
            </div>
            <h3 style={{ fontSize: '24px', color: '#2c2418', margin: '35px 0 20px', fontWeight: 600 }}>مميزات ملابس الصلاة التركية</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginBottom: '35px' }}>
              <div style={{ padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}><span style={{ fontWeight: 700, color: '#ff5a00' }}>أقمشة قطنية:</span><p style={{ color: '#4a3a2a', marginTop: '5px', fontSize: '14px' }}>ناعمة على البشرة وقابلة للتنفس</p></div>
              <div style={{ padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}><span style={{ fontWeight: 700, color: '#ff5a00' }}>تصاميم عملية:</span><p style={{ color: '#4a3a2a', marginTop: '5px', fontSize: '14px' }}>تسهل الحركة وتوفر الراحة</p></div>
              <div style={{ padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}><span style={{ fontWeight: 700, color: '#ff5a00' }}>سهولة العناية:</span><p style={{ color: '#4a3a2a', marginTop: '5px', fontSize: '14px' }}>تتحمل الغسيل المتكرر وتحتفظ بشكلها</p></div>
              <div style={{ padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}><span style={{ fontWeight: 700, color: '#ff5a00' }}>مقاسات واسعة:</span><p style={{ color: '#4a3a2a', marginTop: '5px', fontSize: '14px' }}>مقاسات تناسب جميع الأجسام حتى 4XL</p></div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) { div[style*="grid-template-columns: repeat(4, 1fr)"] { grid-template-columns: repeat(3, 1fr) !important; } input[type="text"] { width: 200px !important; } }
        @media (max-width: 768px) { div[style*="grid-template-columns: repeat(4, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; } input[type="text"], select { width: 100% !important; } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  )
}