// app/fr/category/modest-evening-dresses/page.tsx
'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Head from 'next/head'
import { useCurrency } from '@/app/contexts/CurrencyContext'

export default function ModestEveningDressesCategoryPageFr() {
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

  // Filter state (simplified: only sort)
  const [sortBy, setSortBy] = useState('default')

  // Search input ref for debounce
  const searchTimeout = useRef<NodeJS.Timeout | null>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [searchTerm, setSearchTerm] = useState(initialSearch)

  // Set search input value if search exists in URL
  useEffect(() => {
    if (initialSearch && searchInputRef.current) {
      searchInputRef.current.value = initialSearch
    }
    if (initialSearch) {
      console.log('🔍 Recherche de:', initialSearch)
    }
  }, [initialSearch])

  // Fetch products from API for Modest Evening Dresses category
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true)
      
      const params = new URLSearchParams()
      params.append('page', currentPage.toString())
      params.append('limit', productsPerPage.toString())
      params.append('category', 'Modest Evening Dresses')
      
      if (searchTerm) {
        params.append('search', searchTerm)
      }
      
      if (sortBy !== 'default') {
        params.append('sort', sortBy)
      }
      
      const res = await fetch(`/api/products?${params.toString()}`)
      const data = await res.json()
      
      if (data.result) {
        setProducts(data.result)
        setTotalPages(data.totalPages)
        setTotalProducts(data.total)
      }
    } catch (error) {
      console.error('Erreur lors du chargement des produits:', error)
    } finally {
      setLoading(false)
    }
  }, [currentPage, searchTerm, sortBy])

  // Load products when page, search or sort changes
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

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
          console.error('Erreur lors du chargement du panier:', e)
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
          console.error('Erreur lors du chargement du panier:', e)
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
    const value = e.target.value
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current)
    }
    searchTimeout.current = setTimeout(() => {
      setSearchTerm(value)
      setCurrentPage(1)
    }, 300)
  }, [])

  const getColorCode = useCallback((color: string) => {
    const colors: any = {
      'Black': '#1a1a1a', 'White': '#FFFFFF', 'Navy': '#0a192f',
      'Gray': '#6b6b6b', 'Burgundy': '#6e2c2c', 'Red': '#b91c1c',
      'Green': '#2d6a4f', 'Blue': '#1e40af', 'Brown': '#7b4a2e',
      'Beige': '#d4b896', 'Olive': '#5a6b3a', 'Purple': '#5a2d6e',
      'Pink': '#d47a8a', 'Orange': '#e86a2c', 'Light Grey': '#cbd5e1',
      'Dark Brown': '#4a2c1a', 'Mint Green': '#6fbf8f', 'Cream': '#fdf6e3',
      'Petrol Blue': '#2c5f6e', 'Mauve': '#c4a5b0', 'Taupe': '#8b7355',
      'Olive Green': '#6b7b3a', 'Charcoal': '#36454F', 'Dusty Rose': '#c9a0a8',
      'Sky Blue': '#7bc5e8', 'Light Brown': '#b8855a', 'Yellow': '#eab308',
      'Dark Beige': '#b5956e', 'Rose': '#e88c9a', 'Lavender': '#b8a9c9',
      'Coral': '#e87a5e', 'Teal': '#2c6e6e', 'Gold': '#d4a83a', 'Silver': '#c0c0c0'
    }
    return colors[color] || '#CCCCCC'
  }, [])

  const getProductUrl = useCallback((product: any) => {
    if (product.slug_fr) {
      return `/fr/product/${product.slug_fr}`
    } else if (product.slug_en) {
      return `/fr/product/${product.slug_en}`
    } else {
      return `/fr/product/${product._id || 'product'}`
    }
  }, [])

  // Loading Skeleton Component
  const LoadingSkeleton = () => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '25px',
      marginBottom: '50px'
    }}>
      {Array(8).fill(0).map((_, i) => (
        <div key={i} style={{
          background: 'white',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
          border: '1px solid #f0e6dc'
        }}>
          <div style={{
            height: '280px',
            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
            backgroundSize: '200% 100%',
            animation: 'pulse 1.5s infinite'
          }} />
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
        @keyframes pulse {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
      <p style={{ marginTop: '20px', color: '#5a4a3a', fontSize: '16px' }}>Chargement des robes de soirée modestes...</p>
    </div>
  )

  const startIndex = (currentPage - 1) * productsPerPage + 1
  const endIndex = Math.min(currentPage * productsPerPage, totalProducts)

  return (
    <>
      <Head>
        <title>Robes de Soirée Modestes Turques en Gros | Robes de Cérémonie | Hijab Fashion Mall</title>
        <meta name="description" content={`Découvrez ${totalProducts}+ robes de soirée modestes turques en gros. Robes de cérémonie, mariage, réception. Tissus luxueux, broderies, dentelle. Livraison mondiale.`} />
        <meta name="keywords" content="robes de soirée modestes en gros, grossiste robe cérémonie, robe de mariage modeste, robe de réception hijab, robe soirée longue, robe dentelle modeste, robe brodée, robe pailletée, robe soirée ramadan, robe aïd, tenue cérémonie modeste, robe invité mariage, robe mère mariée, robe soirée luxe, robe soirée turque" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hijabfashionmall.com/fr/category/modest-evening-dresses" />
        <link rel="alternate" href="https://hijabfashionmall.com/ar/category/modest-evening-dresses" hrefLang="ar" />
        <link rel="alternate" href="https://hijabfashionmall.com/en/category/modest-evening-dresses" hrefLang="en" />
        <link rel="alternate" href="https://hijabfashionmall.com/fr/category/modest-evening-dresses" hrefLang="fr" />
        
        <meta property="og:title" content="Robes de Soirée Modestes Turques en Gros - Robes de Cérémonie" />
        <meta property="og:description" content={`${totalProducts}+ robes de soirée premium. Pour mariages, réceptions et occasions spéciales.`} />
        <meta property="og:url" content="https://hijabfashionmall.com/fr/category/modest-evening-dresses" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hijabfashionmall.com/images/og-evening-dresses-fr.jpg" />
        <meta property="og:locale" content="fr_FR" />
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
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
      </button>

      {/* Category Header */}
      <section style={{
        background: 'linear-gradient(135deg, #fdf8f2 0%, #ffffff 100%)',
        padding: '60px 0 40px',
        textAlign: 'center',
        borderBottom: '1px solid #f0e6dc',
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
          pointerEvents: 'none',
          fontFamily: 'Playfair Display, serif'
        }}>
          SOIRÉE
        </div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '14px', color: '#7a6a5a', marginBottom: '20px' }}>
            <Link href="/fr" style={{ color: '#ff5a00', textDecoration: 'none' }}>Accueil</Link>
            <span style={{ color: '#7a6a5a', margin: '0 8px' }}>/</span>
            <Link href="/fr/catalog" style={{ color: '#ff5a00', textDecoration: 'none' }}>Catalogue</Link>
            <span style={{ color: '#7a6a5a', margin: '0 8px' }}>/</span>
            <span style={{ color: '#7a6a5a' }}>Robes de Soirée Modestes</span>
          </div>
          <h1 style={{ 
            fontSize: '48px', 
            color: '#2c2418', 
            marginBottom: '15px', 
            fontWeight: 800,
            lineHeight: '1.2',
            fontFamily: 'Playfair Display, serif'
          }}>
            Robes de Soirée <span style={{ color: '#ff5a00' }}>Modestes</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#5a4a3a', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Découvrez notre collection de robes de soirée modestes turques en gros. Robes de cérémonie, 
            mariage, réception. Tissus luxueux, broderies raffinées et dentelle élégante.
          </p>
          
          {/* Features with icons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            marginTop: '40px',
            flexWrap: 'wrap'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255,90,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="1.8">
                  <path d="M3 6h18v12H3z" stroke="currentColor" fill="none"/>
                  <path d="M8 10h8" stroke="currentColor"/>
                </svg>
              </div>
              <span style={{ color: '#4a3a2a', fontSize: '15px' }}>Mariage & Réception</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255,90,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="1.8">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" fill="none"/>
                  <path d="M2 17l10 5 10-5" stroke="currentColor" fill="none"/>
                </svg>
              </div>
              <span style={{ color: '#4a3a2a', fontSize: '15px' }}>Tissus Luxueux</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255,90,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="1.8">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83" stroke="currentColor"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" fill="none"/>
                </svg>
              </div>
              <span style={{ color: '#4a3a2a', fontSize: '15px' }}>Broderies & Dentelle</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255,90,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="1.8">
                  <rect x="4" y="8" width="16" height="12" rx="1" stroke="currentColor" fill="none"/>
                  <path d="M8 6V4h8v2" stroke="currentColor"/>
                </svg>
              </div>
              <span style={{ color: '#4a3a2a', fontSize: '15px' }}>Tailles jusqu'au 4XL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Layout */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '30px'
        }}>
          {/* Main Content */}
          <main>
            {/* Toolbar with search and sort */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '30px',
              flexWrap: 'wrap',
              gap: '15px',
              background: 'white',
              padding: '15px 25px',
              borderRadius: '20px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
              border: '1px solid #f0e6dc'
            }}>
              <div style={{ color: '#5a4a3a', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" fill="none"/>
                  <path d="M3 9h18" stroke="currentColor"/>
                  <path d="M9 21V9" stroke="currentColor"/>
                </svg>
                <span><span style={{ fontWeight: 600, color: '#ff5a00' }}>{totalProducts}</span> robes de soirée référencées</span>
                {totalProducts > 0 && (
                  <span style={{ marginLeft: '10px', color: '#a08c7a', fontSize: '13px' }}>
                    ({startIndex}-{endIndex})
                  </span>
                )}
              </div>
              
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
                {/* Search bar */}
                <div style={{ position: 'relative' }}>
                  <input 
                    ref={searchInputRef}
                    type="text" 
                    placeholder="Rechercher par nom, code, tissu..."
                    defaultValue={initialSearch}
                    onChange={handleSearchChange}
                    style={{
                      padding: '12px 18px 12px 42px',
                      border: '2px solid #f0e6dc',
                      borderRadius: '40px',
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '14px',
                      transition: 'all 0.3s',
                      outline: 'none',
                      width: '260px',
                      background: 'white'
                    }}
                    onFocus={(e) => e.currentTarget.style.borderColor = '#ff5a00'}
                    onBlur={(e) => e.currentTarget.style.borderColor = '#f0e6dc'}
                  />
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a08c7a" strokeWidth="2" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }}>
                    <circle cx="11" cy="11" r="8" stroke="currentColor" fill="none"/>
                    <path d="M21 21l-4.35-4.35" stroke="currentColor"/>
                  </svg>
                </div>
                
                {/* Sort dropdown */}
                <select 
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value)
                    setCurrentPage(1)
                  }}
                  style={{
                    padding: '12px 20px',
                    border: '2px solid #f0e6dc',
                    borderRadius: '40px',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '14px',
                    cursor: 'pointer',
                    outline: 'none',
                    background: 'white',
                    minWidth: '200px',
                    color: '#2c2418'
                  }}
                >
                  <option value="default">Trier par : Pertinence</option>
                  <option value="price-asc">Prix : Croissant</option>
                  <option value="price-desc">Prix : Décroissant</option>
                  <option value="name-asc">Nom : A à Z</option>
                  <option value="name-desc">Nom : Z à A</option>
                  <option value="newest">Nouveautés</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            {products.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '80px 20px',
                background: 'white',
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                border: '1px solid #f0e6dc'
              }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#c0b0a0" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" fill="none"/>
                  <path d="M21 21l-4.35-4.35" stroke="currentColor"/>
                </svg>
                <h3 style={{ fontSize: '24px', color: '#2c2418', marginBottom: '10px', fontWeight: 600 }}>Aucune robe de soirée trouvée</h3>
                <p style={{ color: '#7a6a5a', marginBottom: '25px', fontSize: '16px' }}>Essayez de modifier votre recherche ou consultez notre catalogue complet.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('')
                    setSortBy('default')
                    if (searchInputRef.current) searchInputRef.current.value = ''
                    setCurrentPage(1)
                  }}
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
                  Réinitialiser la recherche
                </button>
              </div>
            ) : (
              <>
                {loading && products.length > 0 ? (
                  <LoadingSkeleton />
                ) : (
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
                          background: '#2d6a4f',
                          color: 'white',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '11px',
                          fontWeight: 600,
                          letterSpacing: '0.5px'
                        }}>NOUVEAU</span>
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
                        }}>TREND</span>
                      )
                      if (hasPlus) badges.push(
                        <span key="plus" style={{
                          background: '#e86a2c',
                          color: 'white',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '11px',
                          fontWeight: 600,
                          letterSpacing: '0.5px'
                        }}>GRANDES TAILLES</span>
                      )

                      // Determine dress type for badge
                      const dressName = (p.name_en || '').toLowerCase()
                      let dressBadge = null
                      if (dressName.includes('wedding') || dressName.includes('mariage')) {
                        dressBadge = <span style={{
                          background: '#b87c4f',
                          color: 'white',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '11px',
                          fontWeight: 600,
                          letterSpacing: '0.5px'
                        }}>MARIAGE</span>
                      } else if (dressName.includes('engagement') || dressName.includes('fiançailles')) {
                        dressBadge = <span style={{
                          background: '#d48c54',
                          color: 'white',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '11px',
                          fontWeight: 600,
                          letterSpacing: '0.5px'
                        }}>FIANÇAILLES</span>
                      } else if (dressName.includes('party') || dressName.includes('soirée')) {
                        dressBadge = <span style={{
                          background: '#c98a60',
                          color: 'white',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '11px',
                          fontWeight: 600,
                          letterSpacing: '0.5px'
                        }}>SOIRÉE</span>
                      } else if (dressName.includes('lace') || dressName.includes('dentelle')) {
                        dressBadge = <span style={{
                          background: '#b07d4a',
                          color: 'white',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '11px',
                          fontWeight: 600,
                          letterSpacing: '0.5px'
                        }}>DENTELLE</span>
                      } else if (dressName.includes('embroidered') || dressName.includes('brodé')) {
                        dressBadge = <span style={{
                          background: '#c47a5a',
                          color: 'white',
                          padding: '4px 12px',
                          borderRadius: '20px',
                          fontSize: '11px',
                          fontWeight: 600,
                          letterSpacing: '0.5px'
                        }}>BRODERIE</span>
                      }

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
                            border: '1px solid #f0e6dc',
                            display: 'block'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)'
                            e.currentTarget.style.boxShadow = '0 15px 30px rgba(255,90,0,0.12)'
                            e.currentTarget.style.borderColor = '#ff5a00'
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)'
                            e.currentTarget.style.borderColor = '#f0e6dc'
                          }}
                        >
                          <div style={{
                            position: 'relative',
                            height: '280px',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'linear-gradient(135deg, #fef9f2 0%, #faf5ed 100%)'
                          }}>
                            <img 
                              src={p.imageUrl || '/images/default.webp'} 
                              alt={p.name_fr || p.name_en || p.name_ar || 'Robe de soirée modeste turque'}
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
                            {dressBadge && (
                              <div style={{
                                position: 'absolute',
                                bottom: '15px',
                                left: '15px'
                              }}>
                                {dressBadge}
                              </div>
                            )}
                          </div>
                          <div style={{ padding: '20px', textAlign: 'center' }}>
                            <div style={{ 
                              fontSize: '11px', 
                              color: '#ff5a00', 
                              marginBottom: '8px',
                              fontWeight: 500,
                              textTransform: 'uppercase',
                              letterSpacing: '1px'
                            }}>
                              Robe de Soirée
                            </div>
                            <h3 style={{ 
                              fontSize: '15px', 
                              fontWeight: 600, 
                              color: '#2c2418', 
                              marginBottom: '8px',
                              lineHeight: '1.4'
                            }}>
                              {p.name_fr || p.name_en || p.name_ar || ''}
                            </h3>
                            <div style={{ 
                              fontSize: '11px', 
                              color: '#a08c7a', 
                              marginBottom: '12px',
                              fontFamily: 'monospace'
                            }}>
                              {p.product_code || ''}
                            </div>
                            
                            {p.color_fr || p.color_en ? (
                              <div style={{ marginBottom: '12px' }}>
                                <div style={{ 
                                  width: '24px', 
                                  height: '24px', 
                                  borderRadius: '50%', 
                                  background: getColorCode(p.color_en || p.color_fr || ''),
                                  margin: '0 auto',
                                  border: '2px solid #fff',
                                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                                }} title={p.color_fr || p.color_en} />
                              </div>
                            ) : null}
                            
                            <div style={{
                              fontSize: '12px',
                              color: isRSS ? '#2d6a4f' : '#e86a2c',
                              marginBottom: '15px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '5px',
                              padding: '5px 12px',
                              background: isRSS ? 'rgba(45,106,79,0.1)' : 'rgba(232,106,44,0.1)',
                              borderRadius: '30px',
                              width: 'fit-content',
                              margin: '0 auto 15px'
                            }}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                {isRSS ? (
                                  <path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/>
                                ) : (
                                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" fill="none"/>
                                )}
                              </svg>
                              <span>{isRSS ? 'Pièce à l\'unité' : 'Conditionnement'}</span>
                            </div>
                            
                            <div style={{
                              fontSize: '20px',
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
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="9" cy="21" r="1" stroke="currentColor"/>
                                <circle cx="20" cy="21" r="1" stroke="currentColor"/>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" fill="none"/>
                              </svg>
                              Demander un devis
                            </button>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                )}

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
                        border: currentPage === 1 ? '1px solid #f0e6dc' : 'none',
                        background: currentPage === 1 ? '#f5efe8' : '#ff5a00',
                        borderRadius: '12px',
                        cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                        color: currentPage === 1 ? '#c0b0a0' : 'white',
                        fontSize: '16px',
                        fontWeight: 600,
                        transition: 'all 0.3s'
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" stroke="currentColor"/>
                      </svg>
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter(p => p === 1 || p === totalPages || (p >= currentPage - 2 && p <= currentPage + 2))
                      .map((p, i, arr) => {
                        if (i > 0 && p - arr[i-1] > 1) {
                          return <span key={`dots-${p}`} style={{ color: '#c0b0a0', fontSize: '18px' }}>...</span>
                        }
                        return (
                          <button
                            key={p}
                            onClick={() => setCurrentPage(p)}
                            style={{
                              width: '45px',
                              height: '45px',
                              border: 'none',
                              background: p === currentPage ? '#ff5a00' : '#f5efe8',
                              borderRadius: '12px',
                              cursor: 'pointer',
                              color: p === currentPage ? 'white' : '#4a3a2a',
                              fontWeight: p === currentPage ? 700 : 500,
                              fontSize: '16px',
                              transition: 'all 0.3s'
                            }}
                            onMouseEnter={(e) => {
                              if (p !== currentPage) {
                                e.currentTarget.style.background = '#e8dcd0'
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (p !== currentPage) {
                                e.currentTarget.style.background = '#f5efe8'
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
                        border: currentPage === totalPages ? '1px solid #f0e6dc' : 'none',
                        background: currentPage === totalPages ? '#f5efe8' : '#ff5a00',
                        borderRadius: '12px',
                        cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                        color: currentPage === totalPages ? '#c0b0a0' : 'white',
                        fontSize: '16px',
                        fontWeight: 600,
                        transition: 'all 0.3s'
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" stroke="currentColor"/>
                      </svg>
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>

      {/* Size Chart Section for Evening Dresses */}
      <section style={{
        background: '#fef9f2',
        padding: '60px 0',
        borderTop: '1px solid #f0e6dc'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '32px',
              color: '#2c2418',
              marginBottom: '20px',
              fontWeight: 700,
              textAlign: 'center',
              fontFamily: 'Playfair Display, serif'
            }}>
              Guide des Tailles - Robes de Soirée Turques
            </h2>
            <p style={{ textAlign: 'center', color: '#5a4a3a', marginBottom: '30px' }}>
              Les tailles suivantes correspondent aux standards turcs. Prenez vos mensurations pour choisir la taille adaptée.
              Les robes de soirée sont conçues pour offrir une coupe élégante et confortable.
            </p>
            
            <div style={{ overflowX: 'auto' }}>
              <table style={{ 
                width: '100%', 
                borderCollapse: 'collapse', 
                background: 'white', 
                borderRadius: '20px', 
                overflow: 'hidden', 
                boxShadow: '0 5px 20px rgba(0,0,0,0.05)'
              }}>
                <thead>
                  <tr style={{ background: '#ff5a00', color: 'white' }}>
                    <th style={{ padding: '15px', textAlign: 'center' }}>Taille</th>
                    <th style={{ padding: '15px', textAlign: 'center' }}>Tour de Poitrine (cm)</th>
                    <th style={{ padding: '15px', textAlign: 'center' }}>Tour de Taille (cm)</th>
                    <th style={{ padding: '15px', textAlign: 'center' }}>Tour de Hanches (cm)</th>
                    <th style={{ padding: '15px', textAlign: 'center' }}>Longueur (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['S', '84-88', '66-70', '90-94', '140-150'],
                    ['M', '88-92', '70-74', '94-98', '142-152'],
                    ['L', '92-96', '74-78', '98-102', '144-154'],
                    ['XL', '96-100', '78-82', '102-106', '146-156'],
                    ['2XL', '100-104', '82-86', '106-110', '148-158'],
                    ['3XL', '104-108', '86-90', '110-114', '150-160'],
                    ['4XL', '108-112', '90-94', '114-118', '152-162']
                  ].map((row, idx) => (
                    <tr 
                      key={idx} 
                      style={{ 
                        borderBottom: '1px solid #f0e6dc', 
                        background: idx % 2 === 0 ? 'white' : '#fef9f2'
                      }}
                    >
                      <td style={{ padding: '12px', textAlign: 'center', fontWeight: 600, color: '#ff5a00' }}>
                        {row[0]}
                      </td>
                      <td style={{ padding: '12px', textAlign: 'center', color: '#4a3a2a' }}>
                        {row[1]}
                      </td>
                      <td style={{ padding: '12px', textAlign: 'center', color: '#4a3a2a' }}>
                        {row[2]}
                      </td>
                      <td style={{ padding: '12px', textAlign: 'center', color: '#4a3a2a' }}>
                        {row[3]}
                      </td>
                      <td style={{ padding: '12px', textAlign: 'center', color: '#4a3a2a' }}>
                        {row[4]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div style={{ 
              marginTop: '25px', 
              padding: '20px', 
              background: 'rgba(255,90,0,0.05)', 
              borderRadius: '16px',
              border: '1px solid rgba(255,90,0,0.1)'
            }}>
              <p style={{ fontSize: '14px', color: '#5a4a3a', marginBottom: '10px', fontWeight: 600 }}>
                📏 Conseils pour bien choisir votre taille :
              </p>
              <ul style={{ fontSize: '13px', color: '#7a6a5a', paddingLeft: '20px', margin: 0 }}>
                <li>Prenez vos mensurations avec un mètre ruban souple</li>
                <li>Tour de poitrine : mesurez au point le plus fort de la poitrine</li>
                <li>Tour de taille : mesurez à l'endroit le plus étroit (creux de la taille)</li>
                <li>Tour de hanches : mesurez au point le plus fort des hanches</li>
                <li>Les robes de soirée peuvent avoir des longueurs variables selon les modèles</li>
              </ul>
            </div>
            
            <p style={{ fontSize: '13px', color: '#a08c7a', textAlign: 'center', marginTop: '20px' }}>
              * Les mensurations peuvent varier légèrement selon les modèles. Consultez la fiche produit pour plus de précisions.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content Section - Rich keywords for evening dresses */}
      <section style={{
        background: '#fef9f2',
        padding: '60px 0',
        borderTop: '1px solid #f0e6dc'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '32px',
              color: '#2c2418',
              marginBottom: '20px',
              fontWeight: 700,
              textAlign: 'center',
              fontFamily: 'Playfair Display, serif'
            }}>
              Collection Robes de Soirée Modestes Turques en Gros
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#5a4a3a',
              lineHeight: '1.8',
              marginBottom: '25px',
              textAlign: 'justify'
            }}>
              Bienvenue sur Hijab Fashion Mall, votre <strong>grossiste de confiance pour les robes de soirée modestes turques</strong>. 
              Notre collection en gros propose plus de <strong>{totalProducts} modèles de robes de cérémonie</strong> adaptés aux 
              occasions spéciales : mariages, réceptions, fiançailles, Aïd, Ramadan et soirées habillées. 
              Chaque robe est confectionnée avec des <strong>tissus luxueux : satin, dentelle, crêpe georgette, velours et soie</strong>.
            </p>
            
            <h3 style={{
              fontSize: '24px',
              color: '#2c2418',
              margin: '35px 0 20px',
              fontWeight: 600
            }}>
              Types de Robes de Soirée Disponibles à l'Achat en Gros
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '15px',
              marginBottom: '35px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', border: '1px solid #f0e6dc' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/>
                </svg>
                <span style={{ color: '#4a3a2a' }}><strong>Robe de Mariage Modeste</strong> – Pour la mariée ou les invitées, blanc, ivoire, champagne</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', border: '1px solid #f0e6dc' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/>
                </svg>
                <span style={{ color: '#4a3a2a' }}><strong>Robe de Réception</strong> – Pour les soirées habillées et événements formels</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', border: '1px solid #f0e6dc' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/>
                </svg>
                <span style={{ color: '#4a3a2a' }}><strong>Robe de Fiançailles</strong> – Romantique et élégante pour les fiançailles</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', border: '1px solid #f0e6dc' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/>
                </svg>
                <span style={{ color: '#4a3a2a' }}><strong>Robe de Soirée Dentelle</strong> – Détails raffinés, look sophistiqué</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', border: '1px solid #f0e6dc' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/>
                </svg>
                <span style={{ color: '#4a3a2a' }}><strong>Robe de Soirée Brodée</strong> – Broderies sequins, perles, motifs orientaux</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', border: '1px solid #f0e6dc' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/>
                </svg>
                <span style={{ color: '#4a3a2a' }}><strong>Robe de Soirée Velours</strong> – Pour l'hiver, aspect luxueux et chaud</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', border: '1px solid #f0e6dc' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/>
                </svg>
                <span style={{ color: '#4a3a2a' }}><strong>Robe de Soirée Satin</strong> – Brillance élégante, tombé parfait</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', border: '1px solid #f0e6dc' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/>
                </svg>
                <span style={{ color: '#4a3a2a' }}><strong>Robe de Soirée Grande Taille</strong> – Tailles jusqu'au 4XL</span>
              </div>
            </div>
            
            <h3 style={{
              fontSize: '24px',
              color: '#2c2418',
              margin: '35px 0 20px',
              fontWeight: 600
            }}>
              Caractéristiques Techniques des Robes de Soirée Modestes Turques
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '15px',
              marginBottom: '35px'
            }}>
              <div style={{ padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}>
                <span style={{ fontWeight: 700, color: '#ff5a00' }}>Longueurs disponibles :</span>
                <p style={{ color: '#4a3a2a', marginTop: '5px', fontSize: '14px' }}>Maxi (145-160 cm), Longue (135-145 cm)</p>
              </div>
              <div style={{ padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}>
                <span style={{ fontWeight: 700, color: '#ff5a00' }}>Composition tissus :</span>
                <p style={{ color: '#4a3a2a', marginTop: '5px', fontSize: '14px' }}>Satin, dentelle, crêpe georgette, velours, soie, polyester luxe</p>
              </div>
              <div style={{ padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}>
                <span style={{ fontWeight: 700, color: '#ff5a00' }}>Tailles disponibles :</span>
                <p style={{ color: '#4a3a2a', marginTop: '5px', fontSize: '14px' }}>S, M, L, XL, 2XL, 3XL, 4XL (selon modèles)</p>
              </div>
              <div style={{ padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}>
                <span style={{ fontWeight: 700, color: '#ff5a00' }}>Couleurs :</span>
                <p style={{ color: '#4a3a2a', marginTop: '5px', fontSize: '14px' }}>Noir, blanc, champagne, bordeaux, marine, vert émeraude, bleu royal, or, rose poudré</p>
              </div>
              <div style={{ padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}>
                <span style={{ fontWeight: 700, color: '#ff5a00' }}>Entretien :</span>
                <p style={{ color: '#4a3a2a', marginTop: '5px', fontSize: '14px' }}>Nettoyage à sec recommandé pour les tissus délicats</p>
              </div>
              <div style={{ padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}>
                <span style={{ fontWeight: 700, color: '#ff5a00' }}>Conditionnement :</span>
                <p style={{ color: '#4a3a2a', marginTop: '5px', fontSize: '14px' }}>Pièce à l'unité (RSS) ou carton de 6 pièces selon modèles</p>
              </div>
            </div>
            
            <h3 style={{
              fontSize: '24px',
              color: '#2c2418',
              margin: '35px 0 20px',
              fontWeight: 600
            }}>
              Avantages des Robes de Soirée Modestes Turques pour les Professionnels
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '15px',
              marginBottom: '35px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/>
                </svg>
                <span style={{ color: '#4a3a2a' }}>Designs exclusifs et tendances actuelles</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/>
                </svg>
                <span style={{ color: '#4a3a2a' }}>Tissus de haute qualité, confortables</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/>
                </svg>
                <span style={{ color: '#4a3a2a' }}>Prix compétitifs pour les revendeurs</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/>
                </svg>
                <span style={{ color: '#4a3a2a' }}>Parfaites pour les occasions spéciales</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/>
                </svg>
                <span style={{ color: '#4a3a2a' }}>Possibilité de personnalisation</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/>
                </svg>
                <span style={{ color: '#4a3a2a' }}>Expédition rapide vers plus de 50 pays</span>
              </div>
            </div>
            
            <p style={{
              fontSize: '16px',
              color: '#5a4a3a',
              lineHeight: '1.8',
              textAlign: 'justify',
              marginTop: '20px'
            }}>
              Les <strong>robes de soirée modestes turques</strong> sont la solution idéale pour les femmes recherchant 
              élégance et couverture lors des occasions spéciales. Que vous soyez un détaillant de mode modeste, 
              une boutique de mariage ou un professionnel cherchant à élargir votre offre, notre collection en gros 
              vous propose des modèles uniques allant des robes de mariée aux tenues de réception. Parcourez notre 
              sélection et enrichissez votre catalogue avec des robes de soirée d'exception. Pour toute commande 
              en gros ou demande de renseignements, contactez notre équipe via WhatsApp ou Telegram. 
              Livraison mondiale assurée avec suivi de colis.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          div[style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          
          div[style*="grid-template-columns: repeat(2, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          
          input[type="text"][placeholder*="Rechercher"] {
            width: 200px !important;
          }
        }
        
        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          
          .toolbar {
            flex-direction: column;
            align-items: stretch !important;
          }
          
          input[type="text"][placeholder*="Rechercher"] {
            width: 100% !important;
          }
          
          select {
            width: 100% !important;
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