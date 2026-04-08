'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { useCurrency } from '@/app/contexts/CurrencyContext'

export default function ModestSportswearClient({ searchParams }: { searchParams?: { search?: string; page?: string; sort?: string } }) {
  const initialSearch = searchParams?.search || ''
  const [currentPage, setCurrentPage] = useState(Number(searchParams?.page) || 1)
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [totalPages, setTotalPages] = useState(1)
  const [totalProducts, setTotalProducts] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [showSizeChart, setShowSizeChart] = useState(false)
  const productsPerPage = 60

  const [cart, setCart] = useState<any[]>([])
  const cartInitialized = useRef(false)
  const processingEvent = useRef(false)
  const cartStringRef = useRef('')
  
  const { formatPrice } = useCurrency()

  const [sortBy, setSortBy] = useState(searchParams?.sort || 'default')
  const searchTimeout = useRef<NodeJS.Timeout | null>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [searchTerm, setSearchTerm] = useState(initialSearch)

  // Update currentPage when URL changes
  useEffect(() => {
    setCurrentPage(Number(searchParams?.page) || 1)
  }, [searchParams?.page])

  // Update searchTerm when URL changes
  useEffect(() => {
    setSearchTerm(searchParams?.search || '')
    if (searchInputRef.current) {
      searchInputRef.current.value = searchParams?.search || ''
    }
  }, [searchParams?.search])

  // Update sortBy when URL changes
  useEffect(() => {
    setSortBy(searchParams?.sort || 'default')
  }, [searchParams?.sort])

  // Set initial search input value
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
      params.append('category', 'Modest Sportswear')
      
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
      console.error('Errore durante il caricamento dei prodotti:', error)
    } finally {
      setLoading(false)
    }
  }, [currentPage, searchTerm, sortBy])

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
          console.error('Errore durante il caricamento del carrello:', e)
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
          console.error('Errore durante il caricamento del carrello:', e)
        }
      }
      setTimeout(() => { processingEvent.current = false }, 100)
    }

    window.addEventListener('cartUpdated', handleCartUpdate)
    return () => window.removeEventListener('cartUpdated', handleCartUpdate)
  }, [])

  // Save cart to localStorage
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

  // Back to top button visibility
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
    const isRSS = product['rss/not rss message_en']?.includes('single piece') || 
                  product['rss/not rss message_ar']?.includes('قطعة واحدة')
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
      packetSize: packetSize,
      isRSS: isRSS,
      unitPrice: product.price_usd
    }
    
    const existingIndex = currentCart.findIndex((item: any) => item._id === product._id)
    if (existingIndex !== -1) {
      currentCart[existingIndex].quantity += 1
    } else {
      currentCart.push(productToAdd)
    }
    
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
      'Sky Blue': '#7bc5e8', 'Light Brown': '#b8855a', 'Yellow': '#eab308', 'Dark Beige': '#b5956e',
      'Rose': '#e88c9a', 'Camel': '#c19a6b'
    }
    return colors[color] || '#CCCCCC'
  }, [])

  const getProductUrl = useCallback((product: any) => {
    if (product.slug_it) return `/it/product/${product.slug_it}`
    if (product.slug_en) return `/it/product/${product.slug_en}`
    return `/it/product/${product._id || 'product'}`
  }, [])

  // Size chart for Sportswear
  const SizeChart = () => {
    return (
      <div style={{
        marginTop: '40px',
        padding: '24px',
        background: 'white',
        borderRadius: '20px',
        border: '1px solid #f0e6dc',
        boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
        overflowX: 'auto'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
          <h4 style={{
            fontSize: '18px',
            color: '#2c2418',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'Playfair Display, serif',
            margin: 0
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2">
              <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" fill="none"/>
              <path d="M8 2v4M16 2v4M8 20v2M16 20v2" stroke="currentColor"/>
              <path d="M9 8h6" stroke="currentColor" strokeLinecap="round"/>
              <path d="M9 12h6" stroke="currentColor" strokeLinecap="round"/>
              <path d="M9 16h4" stroke="currentColor" strokeLinecap="round"/>
            </svg>
            Guida Taglie - Abbigliamento Sportivo
          </h4>
          <button
            onClick={() => setShowSizeChart(false)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: '#a08c7a'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor"/>
            </svg>
          </button>
        </div>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontSize: '13px',
          minWidth: '500px'
        }}>
          <thead>
            <tr style={{ background: '#fef9f2', borderBottom: '2px solid #f0e6dc' }}>
              <th style={{ padding: '12px', textAlign: 'center', color: '#ff5a00', fontWeight: 700 }}>Taglia</th>
              <th style={{ padding: '12px', textAlign: 'center', color: '#ff5a00', fontWeight: 700 }}>Busto (cm)</th>
              <th style={{ padding: '12px', textAlign: 'center', color: '#ff5a00', fontWeight: 700 }}>Vita (cm)</th>
              <th style={{ padding: '12px', textAlign: 'center', color: '#ff5a00', fontWeight: 700 }}>Fianchi (cm)</th>
              <th style={{ padding: '12px', textAlign: 'center', color: '#ff5a00', fontWeight: 700 }}>Lunghezza (cm)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { taglia: 'S', busto: '84-88', vita: '66-70', fianchi: '92-96', lunghezza: '70-75' },
              { taglia: 'M', busto: '88-92', vita: '70-74', fianchi: '96-100', lunghezza: '72-77' },
              { taglia: 'L', busto: '92-96', vita: '74-78', fianchi: '100-104', lunghezza: '74-79' },
              { taglia: 'XL', busto: '96-100', vita: '78-82', fianchi: '104-108', lunghezza: '76-81' },
              { taglia: '2XL', busto: '100-104', vita: '82-86', fianchi: '108-112', lunghezza: '78-83' },
              { taglia: '3XL', busto: '104-108', vita: '86-90', fianchi: '112-116', lunghezza: '80-85' },
            ].map((size, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #f0e6dc' }}>
                <td style={{ padding: '10px', textAlign: 'center', fontWeight: 600, color: '#2c2418' }}>{size.taglia}</td>
                <td style={{ padding: '10px', textAlign: 'center', color: '#5a4a3a' }}>{size.busto}</td>
                <td style={{ padding: '10px', textAlign: 'center', color: '#5a4a3a' }}>{size.vita}</td>
                <td style={{ padding: '10px', textAlign: 'center', color: '#5a4a3a' }}>{size.fianchi}</td>
                <td style={{ padding: '10px', textAlign: 'center', color: '#5a4a3a' }}>{size.lunghezza}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={{
          fontSize: '12px',
          color: '#a08c7a',
          marginTop: '16px',
          textAlign: 'center',
          lineHeight: '1.5'
        }}>
          ⚠️ Tessuti elasticizzati per massimo comfort durante l'attività sportiva.
        </p>
      </div>
    )
  }

  const LoadingSkeleton = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px', marginBottom: '50px' }}>
      {Array(8).fill(0).map((_, i) => (
        <div key={i} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', border: '1px solid #f0f0f0' }}>
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
      <p style={{ marginTop: '20px', color: '#555', fontSize: '16px' }}>Caricamento abbigliamento sportivo...</p>
    </div>
  )

  const startIndex = (currentPage - 1) * productsPerPage + 1
  const endIndex = Math.min(currentPage * productsPerPage, totalProducts)

  return (
    <>
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
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
      </button>

      {/* Size Chart Modal */}
      {showSizeChart && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }} onClick={() => setShowSizeChart(false)}>
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '90vh', overflow: 'auto' }}>
            <SizeChart />
          </div>
        </div>
      )}

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
          fontSize: '150px',
          fontWeight: 800,
          color: 'rgba(255,90,0,0.03)',
          whiteSpace: 'nowrap',
          zIndex: 0,
          pointerEvents: 'none',
          fontFamily: 'Playfair Display, serif'
        }}>SPORTSWEAR</div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '14px', color: '#7a6a5a', marginBottom: '20px' }}>
            <Link href="/it" style={{ color: '#ff5a00', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#7a6a5a', margin: '0 8px' }}>/</span>
            <Link href="/it/catalog" style={{ color: '#ff5a00', textDecoration: 'none' }}>Catalogo</Link>
            <span style={{ color: '#7a6a5a', margin: '0 8px' }}>/</span>
            <span style={{ color: '#7a6a5a' }}>Sportswear</span>
          </div>
          <h1 style={{ fontSize: '48px', color: '#2c2418', marginBottom: '15px', fontWeight: 800, lineHeight: '1.2', fontFamily: 'Playfair Display, serif' }}>
            Abbigliamento Sportivo <span style={{ color: '#ff5a00' }}>all'Ingrosso</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#5a4a3a', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Scopri la nostra collezione di abbigliamento sportivo modesto all'ingrosso. Tute, felpe, leggings e top 
            con tessuti tecnici traspiranti.
          </p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '40px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="1.8"><path d="M3 6h18v12H3z" stroke="currentColor" fill="none"/><path d="M8 10h8" stroke="currentColor"/><circle cx="8" cy="14" r="2" stroke="currentColor" fill="none"/><circle cx="16" cy="14" r="2" stroke="currentColor" fill="none"/></svg>
              </div>
              <span style={{ color: '#4a3a2a', fontSize: '15px' }}>Tute Sportive</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="1.8"><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" fill="none"/><path d="M2 17l10 5 10-5" stroke="currentColor" fill="none"/><path d="M2 12l10 5 10-5" stroke="currentColor" fill="none"/></svg>
              </div>
              <span style={{ color: '#4a3a2a', fontSize: '15px' }}>Tessuti Tecnici</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="1.8"><rect x="4" y="8" width="16" height="12" rx="1" stroke="currentColor" fill="none"/><path d="M8 6V4h8v2" stroke="currentColor"/><path d="M12 12v4" stroke="currentColor"/><path d="M10 14h4" stroke="currentColor"/></svg>
              </div>
              <span style={{ color: '#4a3a2a', fontSize: '15px' }}>Taglie S-3XL</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="1.8"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor"/><circle cx="12" cy="12" r="3" stroke="currentColor" fill="none"/></svg>
              </div>
              <span style={{ color: '#4a3a2a', fontSize: '15px' }}>Traspiranti</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Layout */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '30px' }}>
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
              padding: '15px 25px',
              borderRadius: '20px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
              border: '1px solid #f0e6dc'
            }}>
              <div style={{ color: '#5a4a3a', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" fill="none"/><path d="M3 9h18" stroke="currentColor"/><path d="M9 21V9" stroke="currentColor"/></svg>
                <span><span style={{ fontWeight: 600, color: '#ff5a00' }}>{totalProducts}</span> capi sportivi</span>
                {totalProducts > 0 && <span style={{ marginLeft: '10px', color: '#a08c7a', fontSize: '13px' }}>({startIndex}-{endIndex})</span>}
              </div>
              
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative' }}>
                  <input ref={searchInputRef} type="text" placeholder="Cerca per nome, codice, tessuto..." defaultValue={initialSearch} onChange={handleSearchChange} style={{ padding: '12px 18px 12px 42px', border: '2px solid #f0e6dc', borderRadius: '40px', fontFamily: 'Poppins, sans-serif', fontSize: '14px', transition: 'all 0.3s', outline: 'none', width: '260px', background: 'white' }} onFocus={(e) => e.currentTarget.style.borderColor = '#ff5a00'} onBlur={(e) => e.currentTarget.style.borderColor = '#f0e6dc'} />
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a08c7a" strokeWidth="2" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }}><circle cx="11" cy="11" r="8" stroke="currentColor" fill="none"/><path d="M21 21l-4.35-4.35" stroke="currentColor"/></svg>
                </div>
                
                <select value={sortBy} onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }} style={{ padding: '12px 20px', border: '2px solid #f0e6dc', borderRadius: '40px', fontFamily: 'Poppins, sans-serif', fontSize: '14px', cursor: 'pointer', outline: 'none', background: 'white', minWidth: '200px', color: '#2c2418' }}>
                  <option value="default">Ordina per: Rilevanza</option>
                  <option value="price-asc">Prezzo: Crescente</option>
                  <option value="price-desc">Prezzo: Decrescente</option>
                  <option value="name-asc">Nome: A alla Z</option>
                  <option value="name-desc">Nome: Z alla A</option>
                  <option value="newest">Novità</option>
                </select>

                <button
                  onClick={() => setShowSizeChart(true)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    background: 'white',
                    border: '2px solid #f0e6dc',
                    borderRadius: '40px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    color: '#2c2418',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#ff5a00'; e.currentTarget.style.color = '#ff5a00'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#f0e6dc'; e.currentTarget.style.color = '#2c2418'; }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" fill="none"/>
                    <path d="M8 2v4M16 2v4M8 20v2M16 20v2" stroke="currentColor"/>
                    <path d="M9 8h6" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M9 12h6" stroke="currentColor" strokeLinecap="round"/>
                    <path d="M9 16h4" stroke="currentColor" strokeLinecap="round"/>
                  </svg>
                  Guida Taglie
                </button>
              </div>
            </div>

            {/* Products Grid */}
            {products.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 20px', background: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f0e6dc' }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#c0b0a0" strokeWidth="1.5"><circle cx="11" cy="11" r="8" stroke="currentColor" fill="none"/><path d="M21 21l-4.35-4.35" stroke="currentColor"/></svg>
                <h3 style={{ fontSize: '24px', color: '#2c2418', marginBottom: '10px', fontWeight: 600 }}>Nessun capo sportivo trovato</h3>
                <p style={{ color: '#7a6a5a', marginBottom: '25px', fontSize: '16px' }}>Prova a modificare la ricerca o consulta il nostro catalogo completo.</p>
                <button onClick={() => { setSearchTerm(''); setSortBy('default'); if (searchInputRef.current) searchInputRef.current.value = ''; setCurrentPage(1); }} style={{ background: '#ff5a00', color: 'white', border: 'none', padding: '15px 45px', borderRadius: '50px', fontWeight: 600, fontSize: '16px', cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#e04e00'} onMouseLeave={(e) => e.currentTarget.style.background = '#ff5a00'}>Reimposta ricerca</button>
              </div>
            ) : (
              <>
                {loading && products.length > 0 ? <LoadingSkeleton /> : (
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px', marginBottom: '50px' }}>
                    {products.map((p: any) => {
                      const message = p['rss/not rss message_en'] || p['rss/not rss message_ar'] || ''
                      const code = p.product_code || ''
                      const hasRSSInCode = code.toLowerCase().includes('rss')
                      const isRSS = message.includes('single piece') || message.includes('✅') || hasRSSInCode
                      
                      const plusSizes = p['plus sizes'] || p.plus_sizes || p.plusSizes || ''
                      const hasPlus = plusSizes === 'Yes' || plusSizes === 'YES' || plusSizes === 'yes' || plusSizes === 'true' || plusSizes === '1' || String(plusSizes).toLowerCase() === 'yes'

                      const badges = []
                      if (p.is_new === 'Yes') badges.push(<span key="new" style={{ background: '#2d6a4f', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>NUOVO</span>)
                      if (p.is_bestseller === 'Yes') badges.push(<span key="bestseller" style={{ background: '#ff5a00', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>PIÙ VENDUTO</span>)
                      if (hasPlus) badges.push(<span key="plus" style={{ background: '#e86a2c', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>TAGLIE FORTI</span>)

                      const fabric = (p.name_en || '').toLowerCase()
                      let fabricBadge = null
                      if (fabric.includes('polyester') || fabric.includes('tecnico')) fabricBadge = <span style={{ background: '#b87c4f', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>TESSUTO TECNICO</span>
                      else if (fabric.includes('cotton')) fabricBadge = <span style={{ background: '#d48c54', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>COTONE</span>
                      else if (fabric.includes('jersey')) fabricBadge = <span style={{ background: '#a06e42', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 600 }}>JERSEY</span>

                      return (
                        <Link href={getProductUrl(p)} key={p._id} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', transition: 'all 0.3s', textDecoration: 'none', color: 'inherit', border: '1px solid #f0e6dc', display: 'block' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 15px 30px rgba(255,90,0,0.12)'; e.currentTarget.style.borderColor = '#ff5a00'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = '#f0e6dc'; }}>
                          <div style={{ position: 'relative', height: '280px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #fef9f2 0%, #faf5ed 100%)' }}>
                            <img src={p.imageUrl || '/images/default.webp'} alt={p.name_it || p.name_en || p.name_ar || 'Abbigliamento sportivo turco'} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', transition: 'transform 0.5s' }} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = '/images/default.webp' }} />
                            {badges.length > 0 && <div style={{ position: 'absolute', top: '15px', right: '15px', display: 'flex', gap: '6px', flexDirection: 'column' }}>{badges}</div>}
                            {fabricBadge && <div style={{ position: 'absolute', bottom: '15px', left: '15px' }}>{fabricBadge}</div>}
                          </div>
                          <div style={{ padding: '20px', textAlign: 'center' }}>
                            <div style={{ fontSize: '11px', color: '#ff5a00', marginBottom: '8px', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>Sportswear</div>
                            <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#2c2418', marginBottom: '8px', lineHeight: '1.4' }}>{p.name_it || p.name_en || p.name_ar || ''}</h3>
                            <div style={{ fontSize: '11px', color: '#a08c7a', marginBottom: '12px', fontFamily: 'monospace' }}>{p.product_code || ''}</div>
                            {p.color_it || p.color_en ? (
                              <div style={{ marginBottom: '12px' }}><div style={{ width: '24px', height: '24px', borderRadius: '50%', background: getColorCode(p.color_en || p.color_it || ''), margin: '0 auto', border: '2px solid #fff', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }} title={p.color_it || p.color_en} /></div>
                            ) : null}
                            <div style={{ fontSize: '12px', color: isRSS ? '#2d6a4f' : '#e86a2c', marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', padding: '5px 12px', background: isRSS ? 'rgba(45,106,79,0.1)' : 'rgba(232,106,44,0.1)', borderRadius: '30px', width: 'fit-content', margin: '0 auto 15px' }}>
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">{isRSS ? <path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/> : <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" fill="none"/>}</svg>
                              <span>{isRSS ? 'Pezzo singolo' : 'Confezione'}</span>
                            </div>
                            <div style={{ fontSize: '20px', fontWeight: 700, color: '#ff5a00', marginBottom: '15px' }}>{formatPrice(p.price_usd)}</div>
                            <button onClick={(e) => addToCart(p, e)} style={{ width: '100%', background: '#ff5a00', color: 'white', border: 'none', padding: '12px', borderRadius: '50px', cursor: 'pointer', fontSize: '14px', fontWeight: 600, transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }} onMouseEnter={(e) => e.currentTarget.style.background = '#e04e00'} onMouseLeave={(e) => e.currentTarget.style.background = '#ff5a00'}>
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1" stroke="currentColor"/><circle cx="20" cy="21" r="1" stroke="currentColor"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" stroke="currentColor" fill="none"/></svg>
                              Richiedi preventivo
                            </button>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '50px', flexWrap: 'wrap' }}>
                    <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} style={{ width: '45px', height: '45px', border: currentPage === 1 ? '1px solid #f0e6dc' : 'none', background: currentPage === 1 ? '#f5efe8' : '#ff5a00', borderRadius: '12px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer', color: currentPage === 1 ? '#c0b0a0' : 'white', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" stroke="currentColor"/></svg>
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).filter(p => p === 1 || p === totalPages || (p >= currentPage - 2 && p <= currentPage + 2)).map((p, i, arr) => {
                      if (i > 0 && p - arr[i-1] > 1) return <span key={`dots-${p}`} style={{ color: '#c0b0a0', fontSize: '18px' }}>...</span>
                      return <button key={p} onClick={() => setCurrentPage(p)} style={{ width: '45px', height: '45px', border: 'none', background: p === currentPage ? '#ff5a00' : '#f5efe8', borderRadius: '12px', cursor: 'pointer', color: p === currentPage ? 'white' : '#4a3a2a', fontWeight: p === currentPage ? 700 : 500, fontSize: '16px', transition: 'all 0.3s' }} onMouseEnter={(e) => { if (p !== currentPage) e.currentTarget.style.background = '#e8dcd0'; }} onMouseLeave={(e) => { if (p !== currentPage) e.currentTarget.style.background = '#f5efe8'; }}>{p}</button>
                    })}
                    <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} style={{ width: '45px', height: '45px', border: currentPage === totalPages ? '1px solid #f0e6dc' : 'none', background: currentPage === totalPages ? '#f5efe8' : '#ff5a00', borderRadius: '12px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer', color: currentPage === totalPages ? '#c0b0a0' : 'white', fontSize: '16px', fontWeight: 600, transition: 'all 0.3s' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6" stroke="currentColor"/></svg>
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>

      {/* SEO Content Section */}
      <section style={{ background: '#fef9f2', padding: '60px 0', borderTop: '1px solid #f0e6dc', marginTop: '40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '32px', color: '#2c2418', marginBottom: '20px', fontWeight: 700, textAlign: 'center', fontFamily: 'Playfair Display, serif' }}>Abbigliamento Sportivo Turco all'Ingrosso</h2>
            <p style={{ fontSize: '16px', color: '#5a4a3a', lineHeight: '1.8', marginBottom: '25px', textAlign: 'justify' }}>
              Hijab Fashion Mall offre una selezione di <strong>abbigliamento sportivo modesto all'ingrosso</strong> con oltre <strong>{totalProducts} modelli</strong> disponibili. 
              Tute, felpe, leggings e top in tessuti tecnici traspiranti per running, fitness e yoga.
            </p>
            
            <h3 style={{ fontSize: '24px', color: '#2c2418', margin: '35px 0 20px', fontWeight: 600 }}>Tipologie di Abbigliamento Sportivo Disponibili</h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', marginBottom: '35px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2"><path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/></svg>
                <span style={{ color: '#4a3a2a' }}><strong>Tuta Sportiva</strong> – Completo felpa + pantaloni</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2"><path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/></svg>
                <span style={{ color: '#4a3a2a' }}><strong>Felpa Sportiva</strong> – Top con cappuccio o girocollo</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2"><path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/></svg>
                <span style={{ color: '#4a3a2a' }}><strong>Leggings Lunghi</strong> – Copertura fino alla caviglia</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: 'white', borderRadius: '12px', border: '1px solid #f0e6dc' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5a00" strokeWidth="2"><path d="M20 6L9 17l-5-5" stroke="currentColor" fill="none"/></svg>
                <span style={{ color: '#4a3a2a' }}><strong>Top Maniche Lunghe</strong> – Per allenamento e running</span>
              </div>
            </div>
            
            <p style={{ fontSize: '16px', color: '#5a4a3a', lineHeight: '1.8', textAlign: 'justify', marginTop: '20px' }}>
              Per ordini all'ingrosso o informazioni, contatta il nostro team.
            </p>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        @keyframes pulse { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        @media (max-width: 992px) { div[style*="grid-template-columns: repeat(4, 1fr)"] { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 768px) { div[style*="grid-template-columns: repeat(4, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; } input[type="text"][placeholder*="Cerca"] { width: 100% !important; } select { width: 100% !important; } }
        @media (max-width: 576px) { div[style*="grid-template-columns: repeat(4, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </>
  )
}