// app/en/catalog/page.tsx
'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Head from 'next/head'
import { useCurrency } from '@/app/contexts/CurrencyContext'

export default function CatalogPageEn() {
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

  // Filter counts state
  const [filterCounts, setFilterCounts] = useState({
    categories: {} as Record<string, number>,
    rss: 0,
    plusSizes: 0,
    total: 0
  })

  // Search input ref for debounce
  const searchTimeout = useRef<NodeJS.Timeout | null>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Set search input value if search exists in URL
  useEffect(() => {
    if (initialSearch && searchInputRef.current) {
      searchInputRef.current.value = initialSearch
    }
    if (initialSearch) {
      console.log('🔍 Searching for:', initialSearch)
    }
  }, [initialSearch])

  // Get category name for display
  const getCategoryDisplayName = useCallback((categoryEn: string): string => {
    return categoryEn
  }, [])

  // Get English category name from display name
  const getCategoryEn = useCallback((categoryDisplay: string): string => {
    return categoryDisplay
  }, [])

  // Fetch filter counts from API
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
      console.error('Error fetching filter counts:', error)
    }
  }, [])

  // Fetch products from API
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true)
      
      const params = new URLSearchParams()
      params.append('page', currentPage.toString())
      params.append('limit', productsPerPage.toString())
      
      if (activeFilters.search) {
        params.append('search', activeFilters.search)
        console.log('🔍 Searching for:', activeFilters.search)
      }
      
      if (activeFilters.categories.length > 0) {
        const categoryEn = getCategoryEn(activeFilters.categories[0])
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
        console.log('✅ Products loaded:', data.result.length, 'of', data.total)
      }
    } catch (error) {
      console.error('Error loading products:', error)
    } finally {
      setLoading(false)
    }
  }, [currentPage, activeFilters, getCategoryEn])

  // Load products when page or filters change
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  // Load filter counts on initial load
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
          console.error('Error loading cart:', e)
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
          console.error('Error loading cart:', e)
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

  // Categories list
  const categories = useMemo(() => {
    return [
      'Abayas',
      'Hijabs',
      'Modest Skirt Sets',
      'Modest Dresses',
      'Burkini Modest Swimwear',
      'Modest Sportswear',
      'Modest Evening Dresses',
      'Modest Pants Sets',
      'Tunics',
      'Modest Coats',
      'Modest Jackets',
      'Trenchcoats',
      'Modest Wool',
      'Kaftan',
      'Prayer Clothes'
    ]
  }, [])

  // Get category count
  const getCategoryCount = useCallback((categoryDisplay: string): number => {
    // Special handling for Prayer Clothes (multiple terms)
    if (categoryDisplay === 'Prayer Clothes') {
      const prayerTerms = ['Prayer Clothes', 'Prayer Outfits', 'Jilbab', 'Islamic Prayer Wear', 'Prayer Dress', 'Pray Clothes', 'Pray clothes', 'pray clothes']
      let total = 0
      for (const term of prayerTerms) {
        total += filterCounts.categories[term] || 0
      }
      return total
    }
    
    // Special handling for Modest Pants Sets (includes Modest Sets)
    if (categoryDisplay === 'Modest Pants Sets') {
      const pantsTerms = ['Modest Pants Sets', 'Modest Sets', 'Modest Set']
      let total = 0
      for (const term of pantsTerms) {
        total += filterCounts.categories[term] || 0
      }
      return total
    }
    
    // Direct match
    return filterCounts.categories[categoryDisplay] || 0
  }, [filterCounts.categories])

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

  // Add to cart function
  const addToCart = useCallback((product: any, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]')
    const isRSS = product['rss/not rss message_en']?.includes('single piece') || 
                  product['rss/not rss message_ar']?.includes('قطعة واحدة')
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
    
    const totalItems = currentCart.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0)
    
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
    if (product.slug_en) {
      return `/en/product/${product.slug_en}`
    } else if (product.slug_ar) {
      return `/en/product/${product.slug_ar}`
    } else {
      return `/en/product/${product._id || 'product'}`
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
      <p style={{ marginTop: '20px', color: '#555', fontSize: '16px' }}>Loading products...</p>
    </div>
  )

  const startIndex = (currentPage - 1) * productsPerPage + 1
  const endIndex = Math.min(currentPage * productsPerPage, totalProducts)

  return (
    <>
      <Head>
        <title>Catalog - {totalProducts}+ Turkish Modest Fashion Products | Hijab Fashion Mall</title>
        <meta name="description" content={`Browse our extensive catalog of ${totalProducts}+ Turkish modest fashion products wholesale. Abayas, Hijabs, Dresses, Sets, Prayer clothes, Burkini. Worldwide shipping.`} />
        <meta name="keywords" content="modest fashion catalog, turkish hijab wholesale, abaya catalog, modest dresses wholesale, hijab catalog, modest sportswear, prayer clothes wholesale" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hijabfashionmall.com/en/catalog" />
        <link rel="alternate" href="https://hijabfashionmall.com/ar/catalog" hrefLang="ar" />
        <link rel="alternate" href="https://hijabfashionmall.com/en/catalog" hrefLang="en" />
        
        <meta property="og:title" content="Catalog - Turkish Modest Fashion Wholesale | Hijab Fashion Mall" />
        <meta property="og:description" content={`${totalProducts}+ products of premium Turkish modest fashion. Abayas, Dresses, Hijabs, Sets, Prayer clothes, Burkini.`} />
        <meta property="og:url" content="https://hijabfashionmall.com/en/catalog" />
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
          CATALOG
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '14px', color: '#555', marginBottom: '20px' }}>
            <Link href="/en" style={{ color: '#ff5a00', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#555', margin: '0 8px' }}>/</span>
            <span style={{ color: '#555' }}>Catalog</span>
          </div>
          <h1 style={{ 
            fontSize: '48px', 
            color: '#000', 
            marginBottom: '15px', 
            fontWeight: 800,
            lineHeight: '1.2'
          }}>
            Modest Fashion <span style={{ color: '#ff5a00' }}>Catalog</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#555', maxWidth: '800px', margin: '0 auto' }}>
            Discover our extensive collection of <strong>{totalProducts || '5000+'} products</strong> of premium Turkish modest fashion.
            Abayas, Dresses, Sets, Hijabs, Prayer clothes, Burkini and more at wholesale prices.
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
              <span style={{ color: '#555' }}>Worldwide Fast Shipping</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fas fa-check-circle" style={{ color: '#ff5a00', fontSize: '20px' }}></i>
              <span style={{ color: '#555' }}>No Minimum Order</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="fas fa-check-circle" style={{ color: '#ff5a00', fontSize: '20px' }}></i>
              <span style={{ color: '#555' }}>100% Turkish Craftsmanship</span>
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
                Search
              </h3>
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="Search products..."
                defaultValue={initialSearch}
                onChange={handleSearchChange}
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  border: '2px solid #f0f0f0',
                  borderRadius: '12px',
                  fontFamily: 'Poppins, sans-serif',
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
                Special Filters
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
                    <div style={{ fontWeight: 600, color: '#000' }}>Single Piece (RSS)</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>Can be purchased as single piece</div>
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
                    <div style={{ fontWeight: 600, color: '#000' }}>Plus Sizes</div>
                    <div style={{ fontSize: '12px', color: '#666' }}>Sizes (XL - 4XL)</div>
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
                Categories
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
                Apply Filters
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
                Reset All
              </button>
            </div>
          </aside>

          {/* Main Content - 4 columns */}
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
                <span style={{ fontWeight: 600, color: '#ff5a00' }}>{totalProducts}</span> products available
                {totalProducts > 0 && (
                  <span style={{ marginLeft: '10px', color: '#999' }}>
                    (showing {startIndex}-{endIndex})
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
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '15px',
                  cursor: 'pointer',
                  outline: 'none',
                  background: 'white',
                  minWidth: '200px'
                }}
              >
                <option value="default">Sort by: Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            {/* Products Grid - 4 columns */}
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
                <h3 style={{ fontSize: '24px', color: '#000', marginBottom: '10px', fontWeight: 600 }}>No products found</h3>
                <p style={{ color: '#666', marginBottom: '25px', fontSize: '16px' }}>We couldn't find any products matching your search criteria.</p>
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
                  Clear All Filters
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
                    const isRSS = message.includes('single piece') || message.includes('✅') || hasRSSInCode
                    
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
                      }}>NEW</span>
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
                      }}>BESTSELLER</span>
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
                      }}>PLUS SIZES</span>
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
                            alt={p.name_en || p.name_ar || ''}
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
                            {p.category_main_en || ''}
                          </div>
                          <h3 style={{ 
                            fontSize: '15px', 
                            fontWeight: 600, 
                            color: '#000', 
                            marginBottom: '8px',
                            lineHeight: '1.4'
                          }}>
                            {p.name_en || p.name_ar || ''}
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
                            <span>{isRSS ? 'Single Piece' : 'Carton'}</span>
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
                            Add to Inquiry
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
                      <i className="fas fa-chevron-left"></i>
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
                      <i className="fas fa-chevron-right"></i>
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
              Turkish Modest Fashion Wholesale Catalog
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#555',
              lineHeight: '1.8',
              marginBottom: '25px',
              textAlign: 'justify'
            }}>
              Welcome to the <strong>Hijab Fashion Mall</strong> catalog, your premier destination for <strong>Turkish modest fashion wholesale</strong>. 
              We offer a wide selection of <strong>{totalProducts || '5000+'} products</strong> featuring the finest and highest quality <strong>Turkish abayas</strong>, 
              <strong>modest dresses</strong>, <strong>skirt sets</strong>, <strong>pants sets</strong>, 
              <strong>Turkish hijabs</strong> in premium fabrics (chiffon, silk, cotton), comfortable <strong>prayer clothes</strong>, 
              stylish <strong>burkini and modest swimwear</strong>, and high-quality <strong>modest sportswear</strong>.
            </p>
            
            <h3 style={{
              fontSize: '24px',
              color: '#000',
              margin: '30px 0 15px',
              fontWeight: 600
            }}>
              Why Shop From Our Catalog
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
                <span style={{ color: '#555' }}>100% Original Turkish Craftsmanship</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'white', borderRadius: '10px' }}>
                <i className="fas fa-check-circle" style={{ color: '#ff5a00', fontSize: '18px' }}></i>
                <span style={{ color: '#555' }}>Competitive Wholesale Prices</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'white', borderRadius: '10px' }}>
                <i className="fas fa-check-circle" style={{ color: '#ff5a00', fontSize: '18px' }}></i>
                <span style={{ color: '#555' }}>Fast Worldwide Shipping (3-7 days)</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'white', borderRadius: '10px' }}>
                <i className="fas fa-check-circle" style={{ color: '#ff5a00', fontSize: '18px' }}></i>
                <span style={{ color: '#555' }}>No Minimum Order Quantity</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'white', borderRadius: '10px' }}>
                <i className="fas fa-check-circle" style={{ color: '#ff5a00', fontSize: '18px' }}></i>
                <span style={{ color: '#555' }}>Daily Product Updates</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: 'white', borderRadius: '10px' }}>
                <i className="fas fa-check-circle" style={{ color: '#ff5a00', fontSize: '18px' }}></i>
                <span style={{ color: '#555' }}>24/7 Customer Support</span>
              </li>
            </ul>
            
            <p style={{
              fontSize: '16px',
              color: '#555',
              lineHeight: '1.8',
              textAlign: 'justify'
            }}>
              Whether you're looking for <strong>premium Turkish abayas</strong> for special occasions, <strong>modest dresses</strong> for work or daily wear, 
              stylish <strong>skirt sets</strong>, or <strong>Turkish hijabs</strong> in premium fabrics, our catalog meets all your needs. 
              We serve thousands of retailers worldwide in <strong>USA, Canada, UK, Europe, GCC, and Australia</strong>. 
              Browse our collection now and start your journey in the world of modest fashion.
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