// app/ar/catalog/page.tsx
'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Head from 'next/head'
import { useCurrency } from '@/app/contexts/CurrencyContext'

export default function CatalogPageAr() {
  const searchParams = useSearchParams()
  const initialSearch = searchParams.get('search') || ''
  
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalProducts, setTotalProducts] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const productsPerPage = 60

  // Cart state
  const [cart, setCart] = useState<any[]>([])
  const cartInitialized = useRef(false)
  const processingEvent = useRef(false)
  const cartStringRef = useRef('')
  
  // Currency hook
  const { formatPrice } = useCurrency()

  // Filter state
  const [activeFilters, setActiveFilters] = useState({
    search: initialSearch,
    categories: [] as string[],
    rssFilter: false,
    plusSizes: false,
    sort: 'default',
    minPrice: 0,
    maxPrice: 10000
  })

  // حالة لأعداد الفلاتر
  const [filterCounts, setFilterCounts] = useState({
    categories: {} as Record<string, number>,
    rss: 0,
    plusSizes: 0,
    total: 0
  })

  // Search input ref for debounce
  const searchTimeout = useRef<NodeJS.Timeout>()
  const searchInputRef = useRef<HTMLInputElement>(null)

  // تعيين قيمة البحث في حقل الإدخال إذا كانت موجودة في URL
  useEffect(() => {
    if (initialSearch && searchInputRef.current) {
      searchInputRef.current.value = initialSearch
    }
    // إذا كان هناك بحث في URL، قم بتحديث الصفحة
    if (initialSearch) {
      console.log('🔍 البحث عن:', initialSearch)
    }
  }, [initialSearch])

  // دالة ترجمة التصنيفات (من إنجليزي إلى عربي)
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

  // دالة عكسية للحصول على الاسم الإنجليزي للتصنيف
  const getCategoryEn = useCallback((categoryAr: string): string => {
    const categories: { [key: string]: string[] } = {
      'عبايات': ['Abayas'],
      'حجاب': ['Hijabs'],
      'فساتين محجبات': ['Modest Dresses'],
      'فساتين سهرة محجبات': ['Modest Evening Dresses'],
      'طقم بنطلون محجبات': ['Modest Pants Sets', 'Modest Sets', 'Modest Set'],
      'طقم تنورة محجبات': ['Modest Skirt Sets'],
      'ملابس رياضية محجبات': ['Modest Sportswear'],
      'ملابس صلاة': ['Prayer Clothes', 'Prayer Outfits', 'Jilbab', 'Islamic Prayer Wear', 'Prayer Dress', 'Pray Clothes', 'Pray clothes', 'pray clothes'],
      'بوركيني ملابس سباحة محجبات': ['Burkini Modest Swimwear'],
      'تونيك': ['Tunics'],
      'سترات محجبات': ['Modest Coats'],
      'معاطف محجبات': ['Modest Jackets'],
      'معاطف طويلة': ['Trenchcoats'],
      'ملابس صوف محجبات': ['Modest Wool'],
      'قفطان': ['Kaftan']
    }
    return categories[categoryAr]?.[0] || categoryAr
  }, [])

  // جلب أعداد الفلاتر من API
  const fetchFilterCounts = useCallback(async () => {
    try {
      const res = await fetch('/api/products/counts')
      const data = await res.json()
      if (data) {
        setFilterCounts({
          categories: data.categories || {},
          rss: data.rss || 0,
          plusSizes: data.plusSizes || 0,
          total: data.total || 0
        })
      }
    } catch (error) {
      console.error('خطأ في جلب أعداد الفلاتر:', error)
    }
  }, [])

  // جلب المنتجات من API الجديد
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true)
      
      const params = new URLSearchParams()
      params.append('page', currentPage.toString())
      params.append('limit', productsPerPage.toString())
      
      if (activeFilters.search) {
        params.append('search', activeFilters.search)
        console.log('🔍 جاري البحث عن:', activeFilters.search)
      }
      
      if (activeFilters.categories.length > 0) {
        const categoryAr = activeFilters.categories[0]
        const categoryEn = getCategoryEn(categoryAr)
        params.append('category', categoryEn)
      }
      
      if (activeFilters.rssFilter) {
        params.append('rss', 'true')
      }
      
      if (activeFilters.plusSizes) {
        params.append('plusSizes', 'true')
      }
      
      if (activeFilters.sort !== 'default') {
        params.append('sort', activeFilters.sort)
      }
      
      if (activeFilters.minPrice > 0) {
        params.append('minPrice', activeFilters.minPrice.toString())
      }
      
      if (activeFilters.maxPrice < 10000) {
        params.append('maxPrice', activeFilters.maxPrice.toString())
      }
      
      const res = await fetch(`/api/products?${params.toString()}`)
      const data = await res.json()
      
      if (data.result) {
        setProducts(data.result)
        setTotalPages(data.totalPages)
        setTotalProducts(data.total)
        console.log('✅ تم تحميل المنتجات:', data.result.length, 'من', data.total)
      }
    } catch (error) {
      console.error('خطأ في تحميل المنتجات:', error)
    } finally {
      setLoading(false)
    }
  }, [currentPage, activeFilters, getCategoryEn])

  // تحميل المنتجات عند تغيير الصفحة أو الفلاتر
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  // تحميل أعداد الفلاتر عند التحميل الأول
  useEffect(() => {
    fetchFilterCounts()
  }, [fetchFilterCounts])

  // Load cart from localStorage
  useEffect(() => {
    if (!cartInitialized.current) {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart)
          setCart(parsedCart)
          cartStringRef.current = JSON.stringify(parsedCart)
        } catch (e) {
          console.error('خطأ في تحميل السلة:', e)
        }
      }
      cartInitialized.current = true
    }
  }, [])

  // Handle cart updates from events
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
        } catch (e) {
          console.error('خطأ في تحميل السلة:', e)
        }
      }
      
      setTimeout(() => {
        processingEvent.current = false
      }, 100)
    }

    window.addEventListener('cartUpdated', handleCartUpdate)
    
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate)
    }
  }, [])

  // Save cart to localStorage
  useEffect(() => {
    if (cartInitialized.current) {
      const newCartString = JSON.stringify(cart)
      
      if (newCartString !== cartStringRef.current) {
        localStorage.setItem('cart', newCartString)
        cartStringRef.current = newCartString
        
        const cartCountElement = document.getElementById('cartCount')
        if (cartCountElement) {
          cartCountElement.textContent = cart.length.toString()
        }
      }
    }
  }, [cart])

  // ===== حساب التصنيفات للعرض =====
  const categories = useMemo(() => {
    return [
      'عبايات',
      'حجاب',
      'طقم تنورة محجبات',
      'فساتين محجبات',
      'بوركيني ملابس سباحة محجبات',
      'ملابس رياضية محجبات',
      'فساتين سهرة محجبات',
      'طقم بنطلون محجبات',
      'تونيك',
      'سترات محجبات',
      'معاطف محجبات',
      'معاطف طويلة',
      'ملابس صوف محجبات',
      'قفطان',
      'ملابس صلاة'
    ]
  }, [])

  // دالة جلب عدد المنتجات لكل تصنيف
  const getCategoryCount = useCallback((categoryAr: string): number => {
    if (categoryAr === 'ملابس صلاة') {
      const prayerTerms = ['Prayer Clothes', 'Prayer Outfits', 'Jilbab', 'Islamic Prayer Wear', 'Prayer Dress', 'Pray Clothes', 'Pray clothes', 'pray clothes']
      let total = 0
      for (const term of prayerTerms) {
        total += filterCounts.categories[term] || 0
      }
      return total
    }
    if (categoryAr === 'طقم بنطلون محجبات') {
      const pantsTerms = ['Modest Pants Sets', 'Modest Sets', 'Modest Set']
      let total = 0
      for (const term of pantsTerms) {
        total += filterCounts.categories[term] || 0
      }
      return total
    }
    const newCategoriesMap: { [key: string]: string } = {
      'تونيك': 'Tunics',
      'سترات محجبات': 'Modest Coats',
      'معاطف محجبات': 'Modest Jackets',
      'معاطف طويلة': 'Trenchcoats',
      'ملابس صوف محجبات': 'Modest Wool',
      'قفطان': 'Kaftan'
    }
    
    if (newCategoriesMap[categoryAr]) {
      return filterCounts.categories[newCategoriesMap[categoryAr]] || 0
    }
    
    const categoryEn = getCategoryEn(categoryAr)
    return filterCounts.categories[categoryEn] || 0
  }, [filterCounts.categories, getCategoryEn])

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const addToCart = useCallback((product: any, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]')
    const isRSS = product.product_code?.toLowerCase().includes('rss') || 
                  product['rss/not rss message_en']?.includes('✅')
    const packetSize = product.pcs_per_packet ? parseInt(product.pcs_per_packet) : 1
    const requestedQuantity = 1
    
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
    
    const totalItems = currentCart.reduce((sum, item) => sum + (item.quantity || 1), 0)
    
    const cartCountElement = document.getElementById('cartCount')
    if (cartCountElement) {
      cartCountElement.textContent = totalItems.toString()
    }
    
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: totalItems }))
    
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('openCart'))
    }, 50)
  }, [])

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current)
    }
    searchTimeout.current = setTimeout(() => {
      setActiveFilters(prev => ({ ...prev, search: e.target.value }))
      setCurrentPage(1)
    }, 300)
  }, [])

  const applyFilters = useCallback(() => {
    setCurrentPage(1)
    fetchProducts()
  }, [fetchProducts])

  const resetFilters = useCallback(() => {
    setActiveFilters({
      search: '',
      categories: [],
      rssFilter: false,
      plusSizes: false,
      sort: 'default',
      minPrice: 0,
      maxPrice: 10000
    })
    setCurrentPage(1)
    if (searchInputRef.current) {
      searchInputRef.current.value = ''
    }
    setTimeout(() => fetchProducts(), 100)
  }, [fetchProducts])

  const getColorCode = useCallback((color: string) => {
    const colors: any = {
      'Black': '#000000', 'White': '#FFFFFF', 'Navy': '#000080',
      'Gray': '#808080', 'Burgundy': '#800020', 'Red': '#FF0000',
      'Green': '#008000', 'Blue': '#0000FF', 'Brown': '#8B4513',
      'Beige': '#F5F5DC', 'Olive': '#808000', 'Purple': '#800080',
      'Pink': '#FFC0CB', 'Orange': '#FFA500', 'Light Grey': '#D3D3D3',
      'Dark Brown': '#5D3A1A', 'Mint Green': '#98FB98', 'Cream': '#FFFDD0',
      'Petrol Blue': '#1F4F5F', 'Mauve': '#E0B0FF', 'Taupe': '#483C32',
      'Olive Green': '#708238', 'Charcoal': '#36454F', 'Dusty Rose': '#DCAE96',
      'Sky Blue': '#87CEEB', 'Light Brown': '#C4A484', 'Yellow': '#FFFF00',
      'Dark Beige': '#C9A87C', 'Rose': '#FF007F'
    }
    return colors[color] || '#CCCCCC'
  }, [])

  const getProductUrl = useCallback((product: any) => {
    if (product.slug_ar) {
      return `/ar/product/${product.slug_ar}`
    } else if (product.slug_en) {
      return `/ar/product/${product.slug_en}`
    } else {
      return `/ar/product/${product._id || 'product'}`
    }
  }, [])

  if (loading && products.length === 0) return (
    <div style={{ 
      padding: '100px 20px', 
      textAlign: 'center',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '60px',
        height: '60px',
        border: '3px solid #f3f3f3',
        borderTop: '3px solid #ff5a00',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      <p style={{ marginTop: '20px', color: '#555', fontSize: '16px' }}>جاري تحميل المنتجات...</p>
    </div>
  )

  const startIndex = (currentPage - 1) * productsPerPage + 1
  const endIndex = Math.min(currentPage * productsPerPage, totalProducts)

  return (
    <>
      <Head>
        <title>الكتالوج - أكثر من {totalProducts}+ منتج من ملابس المحجبات التركية | حجاب فاشون مول</title>
        <meta name="description" content={`تصفح أكبر كتالوج لملابس المحجبات التركية بالجملة. عبايات، فساتين محجبات، حجاب، أطقم، ملابس صلاة، بوركيني. أكثر من ${totalProducts}+ منتج بأسعار الجملة مع شحن عالمي سريع.`} />
        <meta name="keywords" content="كتالوج حجاب تركي, جملة ملابس محجبات, عبايات تركية, فساتين محجبات, حجاب تركي بالجملة, أطقم محجبات, ملابس صلاة تركية, بوركيني, ملابس رياضية محجبات" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hijabfashionmall.com/ar/catalog" />
        <link rel="alternate" href="https://hijabfashionmall.com/en/catalog" hrefLang="en" />
        <link rel="alternate" href="https://hijabfashionmall.com/ar/catalog" hrefLang="ar" />
        
        <meta property="og:title" content="الكتالوج - ملابس محجبات تركية بالجملة | حجاب فاشون مول" />
        <meta property="og:description" content={`أكثر من ${totalProducts}+ منتج من ملابس المحجبات التركية الفاخرة. عبايات، فساتين، حجاب، أطقم، ملابس صلاة، بوركيني.`} />
        <meta property="og:url" content="https://hijabfashionmall.com/ar/catalog" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hijabfashionmall.com/images/og-catalog.jpg" />
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
          transition: 'all 0.3s',
          animation: showBackToTop ? 'fadeIn 0.3s' : 'none'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      {/* Catalog Header */}
      <section style={{
        background: 'linear-gradient(135deg, #fff0e6 0%, #ffffff 100%)',
        padding: '60px 0 40px',
        textAlign: 'center',
        borderBottom: '1px solid #eee',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '200px',
          fontWeight: 800,
          color: 'rgba(255,90,0,0.03)',
          whiteSpace: 'nowrap',
          zIndex: 0,
          pointerEvents: 'none'
        }}>
          كتالوج
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '14px', color: '#555', marginBottom: '20px' }}>
            <Link href="/ar" style={{ color: '#ff5a00', textDecoration: 'none' }}>الرئيسية</Link>
            <span style={{ color: '#555', margin: '0 8px' }}>/</span>
            <span style={{ color: '#555' }}>الكتالوج</span>
          </div>
          <h1 style={{ 
            fontSize: '48px', 
            color: '#000', 
            marginBottom: '15px', 
            fontWeight: 800,
            lineHeight: '1.2'
          }}>
            كتالوج <span style={{ color: '#ff5a00' }}>ملابس المحجبات</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '0 auto' }}>
            اكتشف مجموعتنا الواسعة من <strong>أكثر من {totalProducts || '5000+'} منتج</strong> من أفخر الملابس التركية للمحجبات. 
            عبايات، فساتين، أطقم، حجاب، ملابس صلاة، بوركيني والمزيد بأسعار الجملة.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            marginTop: '30px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fas fa-check-circle" style={{ color: '#ff5a00', fontSize: '20px' }}></i>
              <span style={{ color: '#555' }}>شحن عالمي سريع</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fas fa-check-circle" style={{ color: '#ff5a00', fontSize: '20px' }}></i>
              <span style={{ color: '#555' }}>بدون حد أدنى للطلب</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fas fa-check-circle" style={{ color: '#ff5a00', fontSize: '20px' }}></i>
              <span style={{ color: '#555' }}>صناعة تركية 100%</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Layout */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gap: '30px'
        }}>
          {/* Sidebar Filters */}
          <aside style={{
            background: 'white',
            borderRadius: '20px',
            padding: '25px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            border: '1px solid #f0f0f0',
            height: 'fit-content',
            position: 'sticky',
            top: '100px'
          }}>
            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: 700, 
                color: '#000', 
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <i className="fas fa-search" style={{ color: '#ff5a00' }}></i>
                بحث
              </h3>
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="ابحث عن منتجات..."
                defaultValue={initialSearch}
                onChange={handleSearchChange}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #f0f0f0',
                  borderRadius: '12px',
                  fontFamily: 'Tajawal, sans-serif',
                  fontSize: '15px',
                  transition: 'all 0.3s',
                  outline: 'none'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#ff5a00'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#f0f0f0'}
              />
            </div>
            
            {/* Special Filters */}
            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: 700, 
                color: '#000', 
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <i className="fas fa-star" style={{ color: '#ff5a00' }}></i>
                فلاتر خاصة
              </h3>
              <div 
                onClick={() => {
                  setActiveFilters(prev => ({ ...prev, rssFilter: !prev.rssFilter }))
                  setCurrentPage(1)
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '15px',
                  border: `2px solid ${activeFilters.rssFilter ? '#ff5a00' : '#f0f0f0'}`,
                  borderRadius: '12px',
                  marginBottom: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  backgroundColor: activeFilters.rssFilter ? '#fff8f0' : 'white'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: activeFilters.rssFilter ? '#ff5a00' : '#4caf50',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#000' }}>قطع فردية (RSS)</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>يمكن شراؤها كقطعة واحدة</div>
                  </div>
                </div>
                <span style={{
                  background: activeFilters.rssFilter ? '#ff5a00' : '#f5f5f5',
                  color: activeFilters.rssFilter ? 'white' : '#555',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: 600
                }}>{filterCounts.rss}</span>
              </div>
              <div 
                onClick={() => {
                  setActiveFilters(prev => ({ ...prev, plusSizes: !prev.plusSizes }))
                  setCurrentPage(1)
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '15px',
                  border: `2px solid ${activeFilters.plusSizes ? '#ff5a00' : '#f0f0f0'}`,
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  backgroundColor: activeFilters.plusSizes ? '#fff8f0' : 'white'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: activeFilters.plusSizes ? '#ff5a00' : '#2196f3',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <i className="fas fa-arrow-up"></i>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: '#000' }}>مقاسات كبيرة</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>مقاسات (XL - 4XL)</div>
                  </div>
                </div>
                <span style={{
                  background: activeFilters.plusSizes ? '#ff5a00' : '#f5f5f5',
                  color: activeFilters.plusSizes ? 'white' : '#555',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: 600
                }}>{filterCounts.plusSizes}</span>
              </div>
            </div>
            
            {/* Categories */}
            <div style={{ marginBottom: '25px' }}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: 700, 
                color: '#000', 
                marginBottom: '15px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <i className="fas fa-tags" style={{ color: '#ff5a00' }}></i>
                التصنيفات
              </h3>
              <div style={{ maxHeight: '350px', overflowY: 'auto', paddingLeft: '5px' }}>
                {categories.map(cat => {
                  const count = getCategoryCount(cat)
                  return (
                    <label key={cat} style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 0',
                      cursor: 'pointer',
                      borderBottom: '1px solid #f5f5f5'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <input 
                          type="checkbox"
                          checked={activeFilters.categories.includes(cat)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setActiveFilters(prev => ({ 
                                ...prev, 
                                categories: [...prev.categories, cat] 
                              }))
                            } else {
                              setActiveFilters(prev => ({ 
                                ...prev, 
                                categories: prev.categories.filter(c => c !== cat) 
                              }))
                            }
                            setCurrentPage(1)
                          }}
                          style={{ 
                            width: '18px', 
                            height: '18px', 
                            cursor: 'pointer',
                            accentColor: '#ff5a00'
                          }}
                        />
                        <span style={{ fontSize: '15px', color: '#555' }}>{cat}</span>
                      </div>
                      <span style={{
                        background: '#f5f5f5',
                        color: '#555',
                        padding: '3px 10px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 500
                      }}>{count}</span>
                    </label>
                  )
                })}
              </div>
            </div>

            {/* Filter Actions */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '25px' }}>
              <button 
                onClick={applyFilters}
                style={{
                  flex: 1,
                  background: '#ff5a00',
                  color: 'white',
                  border: 'none',
                  padding: '14px',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#e04e00'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#ff5a00'}
              >
                تطبيق الفلاتر
              </button>
              <button 
                onClick={resetFilters}
                style={{
                  flex: 1,
                  background: 'white',
                  color: '#555',
                  border: '2px solid #f0f0f0',
                  padding: '14px',
                  borderRadius: '12px',
                  fontWeight: 600,
                  fontSize: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#f5f5f5'
                  e.currentTarget.style.borderColor = '#ddd'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white'
                  e.currentTarget.style.borderColor = '#f0f0f0'
                }}
              >
                إعادة ضبط
              </button>
            </div>
          </aside>

          {/* Main Content - 4 أعمدة */}
          <main>
            {/* Toolbar */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px',
              flexWrap: 'wrap',
              gap: '15px',
              background: 'white',
              padding: '15px 20px',
              borderRadius: '15px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
              border: '1px solid #f0f0f0'
            }}>
              <div style={{ color: '#555', fontSize: '15px' }}>
                <span style={{ fontWeight: 600, color: '#ff5a00' }}>{totalProducts}</span> منتج متاح
                {totalProducts > 0 && (
                  <span style={{ marginRight: '10px', color: '#999' }}>
                    (عرض {startIndex}-{endIndex})
                  </span>
                )}
              </div>
              <select 
                value={activeFilters.sort}
                onChange={(e) => {
                  setActiveFilters(prev => ({ ...prev, sort: e.target.value }))
                  setCurrentPage(1)
                }}
                style={{
                  padding: '12px 20px',
                  border: '2px solid #f0f0f0',
                  borderRadius: '12px',
                  fontFamily: 'Tajawal, sans-serif',
                  fontSize: '15px',
                  cursor: 'pointer',
                  outline: 'none',
                  background: 'white',
                  minWidth: '200px'
                }}
              >
                <option value="default">ترتيب حسب: الافتراضي</option>
                <option value="price-asc">السعر: من الأقل للأعلى</option>
                <option value="price-desc">السعر: من الأعلى للأقل</option>
                <option value="name-asc">الاسم: أ إلى ي</option>
                <option value="name-desc">الاسم: ي إلى أ</option>
                <option value="newest">الأحدث</option>
              </select>
            </div>

            {/* Products Grid - 4 أعمدة */}
            {products.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '80px 20px',
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid #f0f0f0'
              }}>
                <i className="fas fa-search" style={{ fontSize: '60px', color: '#ddd', marginBottom: '20px' }}></i>
                <h3 style={{ fontSize: '24px', color: '#000', marginBottom: '10px', fontWeight: 600 }}>لا توجد منتجات</h3>
                <p style={{ color: '#666', marginBottom: '25px', fontSize: '16px' }}>لم نتمكن من العثور على منتجات تطابق معايير البحث.</p>
                <button 
                  onClick={resetFilters}
                  style={{
                    background: '#ff5a00',
                    color: 'white',
                    border: 'none',
                    padding: '15px 45px',
                    borderRadius: '50px',
                    fontWeight: 600,
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#e04e00'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#ff5a00'}
                >
                  مسح جميع الفلاتر
                </button>
              </div>
            ) : (
              <>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '25px',
                  marginBottom: '50px'
                }}>
                  {products.map((p: any) => {
                    const message = p['rss/not rss message_en'] || p['rss/not rss message_ar'] || ''
                    const code = p.product_code || ''
                    const hasRSSInCode = code.toLowerCase().includes('rss')
                    const isRSS = message.includes('✅') || hasRSSInCode
                    
                    const plusSizes = p['plus sizes'] || p.plus_sizes || p.plusSizes || ''
                    const hasPlus = 
                      plusSizes === 'Yes' || 
                      plusSizes === 'YES' || 
                      plusSizes === 'yes' || 
                      plusSizes === 'true' || 
                      plusSizes === '1' ||
                      String(plusSizes).toLowerCase() === 'yes'

                    const badges = []
                    if (p.is_new === 'Yes') badges.push(
                      <span key="new" style={{
                        background: '#4caf50',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.5px'
                      }}>جديد</span>
                    )
                    if (p.is_bestseller === 'Yes') badges.push(
                      <span key="bestseller" style={{
                        background: '#ff5a00',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.5px'
                      }}>الأكثر مبيعاً</span>
                    )
                    if (hasPlus) badges.push(
                      <span key="plus" style={{
                        background: '#2196f3',
                        color: 'white',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '11px',
                        fontWeight: 600,
                        letterSpacing: '0.5px'
                      }}>مقاسات كبيرة</span>
                    )

                    return (
                      <Link 
                        href={getProductUrl(p)} 
                        key={p._id}
                        style={{
                          background: 'white',
                          borderRadius: '16px',
                          overflow: 'hidden',
                          boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                          transition: 'all 0.3s',
                          textDecoration: 'none',
                          color: 'inherit',
                          border: '1px solid #f0f0f0',
                          display: 'block'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-8px)'
                          e.currentTarget.style.boxShadow = '0 15px 30px rgba(255,90,0,0.15)'
                          e.currentTarget.style.borderColor = '#ff5a00'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)'
                          e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)'
                          e.currentTarget.style.borderColor = '#f0f0f0'
                        }}
                      >
                        <div style={{
                          position: 'relative',
                          height: '280px',
                          overflow: 'hidden',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: 'linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%)'
                        }}>
                          <img 
                            src={p.imageUrl || '/images/default.webp'} 
                            alt={p.name_ar || p.name_en || ''}
                            style={{ 
                              maxWidth: '90%', 
                              maxHeight: '90%', 
                              objectFit: 'contain', 
                              transition: 'transform 0.5s'
                            }}
                            loading="lazy"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/images/default.webp'
                            }}
                          />
                          {badges.length > 0 && (
                            <div style={{
                              position: 'absolute',
                              top: '15px',
                              right: '15px',
                              display: 'flex',
                              gap: '6px',
                              flexDirection: 'column'
                            }}>{badges}</div>
                          )}
                        </div>
                        <div style={{ padding: '20px', textAlign: 'center' }}>
                          <div style={{ 
                            fontSize: '12px', 
                            color: '#ff5a00', 
                            marginBottom: '8px',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                          }}>
                            {translateCategory(p.category_main_en || '')}
                          </div>
                          <h3 style={{ 
                            fontSize: '15px', 
                            fontWeight: 600, 
                            color: '#000', 
                            marginBottom: '8px',
                            lineHeight: '1.4'
                          }}>
                            {p.name_ar || p.name_en || ''}
                          </h3>
                          <div style={{ 
                            fontSize: '12px', 
                            color: '#999', 
                            marginBottom: '12px',
                            fontFamily: 'monospace'
                          }}>
                            {p.product_code || ''}
                          </div>
                          
                          {p.color_en && (
                            <div style={{ marginBottom: '12px' }}>
                              <div style={{ 
                                width: '24px', 
                                height: '24px', 
                                borderRadius: '50%', 
                                background: getColorCode(p.color_en),
                                margin: '0 auto',
                                border: '2px solid #fff',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                              }} title={p.color_en} />
                            </div>
                          )}
                          
                          <div style={{
                            fontSize: '12px',
                            color: isRSS ? '#4caf50' : '#2196f3',
                            marginBottom: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '5px',
                            padding: '5px 10px',
                            background: isRSS ? 'rgba(76,175,80,0.1)' : 'rgba(33,150,243,0.1)',
                            borderRadius: '30px',
                            width: 'fit-content',
                            margin: '0 auto 15px'
                          }}>
                            <i className={`fas ${isRSS ? 'fa-check-circle' : 'fa-box'}`}></i>
                            <span>{p['rss/not rss message_ar'] || (isRSS ? 'قطعة فردية' : 'كرتون')}</span>
                          </div>
                          
                          <div style={{
                            fontSize: '22px',
                            fontWeight: 700,
                            color: '#ff5a00',
                            marginBottom: '15px'
                          }}>
                            {formatPrice(p.price_usd)}
                          </div>
                          
                          <button 
                            onClick={(e) => addToCart(p, e)}
                            style={{
                              width: '100%',
                              background: '#ff5a00',
                              color: 'white',
                              border: 'none',
                              padding: '12px',
                              borderRadius: '50px',
                              cursor: 'pointer',
                              fontSize: '14px',
                              fontWeight: 600,
                              transition: 'all 0.3s',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '8px'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#e04e00'}
                            onMouseLeave={(e) => e.currentTarget.style.background = '#ff5a00'}
                          >
                            <i className="fas fa-shopping-cart"></i>
                            أضف للاستفسار
                          </button>
                        </div>
                      </Link>
                    )
                  })}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '8px',
                    marginTop: '50px',
                    flexWrap: 'wrap'
                  }}>
                    <button 
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      style={{
                        width: '45px',
                        height: '45px',
                        border: currentPage === 1 ? '1px solid #ddd' : 'none',
                        background: currentPage === 1 ? '#f5f5f5' : '#ff5a00',
                        borderRadius: '12px',
                        cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                        color: currentPage === 1 ? '#999' : 'white',
                        fontSize: '16px',
                        fontWeight: 600,
                        transition: 'all 0.3s'
                      }}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter(p => p === 1 || p === totalPages || (p >= currentPage - 2 && p <= currentPage + 2))
                      .map((p, i, arr) => {
                        if (i > 0 && p - arr[i-1] > 1) {
                          return <span key={`dots-${p}`} style={{ color: '#999', fontSize: '18px' }}>...</span>
                        }
                        return (
                          <button
                            key={p}
                            onClick={() => setCurrentPage(p)}
                            style={{
                              width: '45px',
                              height: '45px',
                              border: 'none',
                              background: p === currentPage ? '#ff5a00' : '#f5f5f5',
                              borderRadius: '12px',
                              cursor: 'pointer',
                              color: p === currentPage ? 'white' : '#333',
                              fontWeight: p === currentPage ? 700 : 500,
                              fontSize: '16px',
                              transition: 'all 0.3s'
                            }}
                            onMouseEnter={(e) => {
                              if (p !== currentPage) {
                                e.currentTarget.style.background = '#e0e0e0'
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (p !== currentPage) {
                                e.currentTarget.style.background = '#f5f5f5'
                              }
                            }}
                          >
                            {p}
                          </button>
                        )
                      })}
                    
                    <button 
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      style={{
                        width: '45px',
                        height: '45px',
                        border: currentPage === totalPages ? '1px solid #ddd' : 'none',
                        background: currentPage === totalPages ? '#f5f5f5' : '#ff5a00',
                        borderRadius: '12px',
                        cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                        color: currentPage === totalPages ? '#999' : 'white',
                        fontSize: '16px',
                        fontWeight: 600,
                        transition: 'all 0.3s'
                      }}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>

      {/* SEO Content Section */}
      <section style={{
        background: '#f9f9f9',
        padding: '60px 0',
        borderTop: '1px solid #eee',
        marginTop: '40px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '32px',
              color: '#000',
              marginBottom: '20px',
              fontWeight: 700,
              textAlign: 'center'
            }}>
              كتالوج ملابس المحجبات التركية بالجملة
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#555',
              lineHeight: '1.8',
              marginBottom: '25px',
              textAlign: 'justify'
            }}>
              مرحباً بك في كتالوج <strong>حجاب فاشون مول</strong>، وجهتك الأولى لشراء <strong>ملابس المحجبات التركية</strong> بالجملة. 
              نقدم لك تشكيلة واسعة تضم أكثر من <strong>{totalProducts || '5000+'} منتج</strong> من أفخر وأجود أنواع <strong>العبايات التركية</strong>، 
              <strong>فساتين محجبات</strong> عصرية، <strong>أطقم تنانير محجبات</strong>، <strong>أطقم بناطيل محجبات</strong>، 
              <strong>حجاب تركي</strong> فاخر بمختلف الأقمشة (شيفون، حرير، قطن)، <strong>ملابس صلاة</strong> مريحة، 
              <strong>بوركيني وملابس سباحة محجبات</strong> عصرية، و<strong>ملابس رياضية محجبات</strong> عالية الجودة.
            </p>
            
            <h3 style={{
              fontSize: '24px',
              color: '#000',
              margin: '30px 0 15px',
              fontWeight: 600
            }}>
              مميزات التسوق من كتالوجنا
            </h3>
            
            <ul style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '15px',
              marginBottom: '25px',
              listStyle: 'none',
              padding: 0
            }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'white', borderRadius: '10px' }}>
                <i className="fas fa-check-circle" style={{ color: '#ff5a00', fontSize: '18px' }}></i>
                <span style={{ color: '#555' }}>صناعة تركية أصلية 100%</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'white', borderRadius: '10px' }}>
                <i className="fas fa-check-circle" style={{ color: '#ff5a00', fontSize: '18px' }}></i>
                <span style={{ color: '#555' }}>أسعار جملة تنافسية</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'white', borderRadius: '10px' }}>
                <i className="fas fa-check-circle" style={{ color: '#ff5a00', fontSize: '18px' }}></i>
                <span style={{ color: '#555' }}>شحن عالمي سريع (3-7 أيام)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'white', borderRadius: '10px' }}>
                <i className="fas fa-check-circle" style={{ color: '#ff5a00', fontSize: '18px' }}></i>
                <span style={{ color: '#555' }}>بدون حد أدنى للطلب</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'white', borderRadius: '10px' }}>
                <i className="fas fa-check-circle" style={{ color: '#ff5a00', fontSize: '18px' }}></i>
                <span style={{ color: '#555' }}>تحديث يومي للمنتجات</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'white', borderRadius: '10px' }}>
                <i className="fas fa-check-circle" style={{ color: '#ff5a00', fontSize: '18px' }}></i>
                <span style={{ color: '#555' }}>خدمة عملاء على مدار الساعة</span>
              </li>
            </ul>
            
            <p style={{
              fontSize: '16px',
              color: '#555',
              lineHeight: '1.8',
              textAlign: 'justify'
            }}>
              سواء كنت تبحث عن <strong>عبايات تركية فاخرة</strong> للمناسبات الخاصة، <strong>فساتين محجبات</strong> للعمل أو الخروجات اليومية، 
              <strong>أطقم تنانير محجبات</strong> عصرية، أو <strong>حجاب تركي</strong> بأجود الأقمشة، فإن كتالوجنا يلبي جميع احتياجاتك. 
              نحن نخدم آلاف تجار التجزئة حول العالم في <strong>أمريكا، كندا، بريطانيا، أوروبا، الخليج، وأستراليا</strong>. 
              استعرض مجموعتنا الآن وابدأ رحلة نجاحك في عالم الأزياء المحتشمة.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          div[style*="grid-template-columns: 300px 1fr"] {
            grid-template-columns: 1fr !important;
          }
          
          aside {
            position: static !important;
            margin-bottom: 20px;
          }
          
          div[style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          
          ul[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (max-width: 576px) {
          div[style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}