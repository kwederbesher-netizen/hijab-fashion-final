// app/es/category/modest-evening-dresses/page.tsx
'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Head from 'next/head'
import { useCurrency } from '@/app/contexts/CurrencyContext'

export default function ModestEveningDressesCategoryPageEs() {
  const searchParams = useSearchParams()
  const initialSearch = searchParams.get('search') || ''
  
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
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

  const [sortBy, setSortBy] = useState('default')
  const searchTimeout = useRef<NodeJS.Timeout | null>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [searchTerm, setSearchTerm] = useState(initialSearch)

  useEffect(() => {
    if (initialSearch && searchInputRef.current) searchInputRef.current.value = initialSearch
  }, [initialSearch])

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      params.append('page', currentPage.toString())
      params.append('limit', productsPerPage.toString())
      params.append('category', 'Modest Evening Dresses')
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
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }, [currentPage, searchTerm, sortBy])

  useEffect(() => { fetchProducts() }, [fetchProducts])

  useEffect(() => {
    if (!cartInitialized.current) {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        try { setCart(JSON.parse(savedCart)); cartStringRef.current = savedCart } catch(e) {}
      }
      cartInitialized.current = true
    }
  }, [])

  useEffect(() => {
    const handleCartUpdate = () => {
      if (processingEvent.current) return
      processingEvent.current = true
      const savedCart = localStorage.getItem('cart')
      if (savedCart && savedCart !== cartStringRef.current) {
        setCart(JSON.parse(savedCart))
        cartStringRef.current = savedCart
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
        const cartCount = document.getElementById('cartCount')
        if (cartCount) cartCount.textContent = cart.length.toString()
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
    const isRSS = product['rss/not rss message_en']?.includes('single piece')
    const packetSize = product.pcs_per_packet ? parseInt(product.pcs_per_packet) : 1
    const productToAdd = { ...product, quantity: 1, packetSize, isRSS, unitPrice: product.price_usd }
    const existingIndex = currentCart.findIndex((item: any) => item._id === product._id)
    if (existingIndex !== -1) currentCart[existingIndex].quantity += 1
    else currentCart.push(productToAdd)
    localStorage.setItem('cart', JSON.stringify(currentCart))
    const totalItems = currentCart.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0)
    const cartCount = document.getElementById('cartCount')
    if (cartCount) cartCount.textContent = totalItems.toString()
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: totalItems }))
    setTimeout(() => window.dispatchEvent(new CustomEvent('openCart')), 50)
  }, [])

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (searchTimeout.current) clearTimeout(searchTimeout.current)
    searchTimeout.current = setTimeout(() => { setSearchTerm(value); setCurrentPage(1) }, 300)
  }, [])

  const getColorCode = useCallback((color: string) => {
    const colors: any = { 'Black': '#1a1a1a', 'White': '#FFFFFF', 'Navy': '#0a192f', 'Burgundy': '#6e2c2c', 'Green': '#2d6a4f', 'Blue': '#1e40af', 'Beige': '#d4b896', 'Purple': '#5a2d6e', 'Pink': '#d47a8a', 'Gold': '#d4af37', 'Silver': '#c0c0c0', 'Rose': '#e88c9a' }
    return colors[color] || '#CCCCCC'
  }, [])

  const getProductUrl = useCallback((product: any) => {
    if (product.slug_es) return `/es/product/${product.slug_es}`
    if (product.slug_en) return `/es/product/${product.slug_en}`
    return `/es/product/${product._id || 'product'}`
  }, [])

  const LoadingSkeleton = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px' }}>
      {Array(8).fill(0).map((_, i) => (
        <div key={i} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden' }}>
          <div style={{ height: '280px', background: '#f0f0f0', animation: 'pulse 1.5s infinite' }} />
          <div style={{ padding: '20px' }}><div style={{ height: '16px', background: '#f0f0f0', marginBottom: '10px' }} /><div style={{ height: '20px', background: '#f0f0f0', width: '50%' }} /></div>
        </div>
      ))}
    </div>
  )

  if (loading && products.length === 0) return (
    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
      <div style={{ width: '50px', height: '50px', border: '3px solid #f3f3f3', borderTop: '3px solid #ff5a00', borderRadius: '50%', margin: '0 auto', animation: 'spin 1s linear infinite' }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } } @keyframes pulse { 0% { opacity: 0.6; } 50% { opacity: 1; } 100% { opacity: 0.6; } }`}</style>
      <p style={{ marginTop: '20px' }}>Cargando vestidos de noche modestos...</p>
    </div>
  )

  return (
    <>
      <Head>
        <title>Vestidos de Noche Modestos Turcos al por Mayor | Moda Formal Recatada | Hijab Fashion Mall</title>
        <meta name="description" content={`Descubre ${totalProducts}+ vestidos de noche modestos turcos al por mayor. Telas de lujo: seda, crepe, pedrería. Largos hasta el suelo, mangas largas.`} />
        <meta name="keywords" content="vestidos de noche modestos turcos, vestidos de gala recatados, vestidos de ceremonia musulmanes, vestidos de fiesta largos, moda formal modesta, vestidos de invitada recatados, vestidos de novia modestos, vestidos de graduación recatados" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hijabfashionmall.com/es/category/modest-evening-dresses" />
        <link rel="alternate" href="https://hijabfashionmall.com/ar/category/modest-evening-dresses" hrefLang="ar" />
        <link rel="alternate" href="https://hijabfashionmall.com/en/category/modest-evening-dresses" hrefLang="en" />
        <link rel="alternate" href="https://hijabfashionmall.com/es/category/modest-evening-dresses" hrefLang="es" />
        <meta property="og:title" content="Vestidos de Noche Modestos Turcos al por Mayor" />
        <meta property="og:locale" content="es_ES" />
      </Head>

      <button onClick={scrollToTop} style={{ position: 'fixed', bottom: '30px', right: '30px', width: '45px', height: '45px', borderRadius: '50%', background: '#ff5a00', color: 'white', border: 'none', cursor: 'pointer', display: showBackToTop ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', zIndex: 999 }}>↑</button>

      <section style={{ background: 'linear-gradient(135deg, #fdf8f2 0%, #ffffff 100%)', padding: '60px 0 40px', textAlign: 'center', borderBottom: '1px solid #f0e6dc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ fontSize: '14px', marginBottom: '20px' }}>
            <Link href="/es" style={{ color: '#ff5a00' }}>Inicio</Link> <span>/</span>
            <Link href="/es/catalog" style={{ color: '#ff5a00' }}>Catálogo</Link> <span>/</span>
            <span>Vestidos de Noche Modestos</span>
          </div>
          <h1 style={{ fontSize: '48px', color: '#2c2418', marginBottom: '15px', fontWeight: 800, fontFamily: 'Playfair Display, serif' }}>Vestidos de <span style={{ color: '#ff5a00' }}>Noche Modestos</span></h1>
          <p style={{ fontSize: '18px', color: '#5a4a3a', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>Elegancia y sofisticación para ocasiones especiales. Vestidos largos con mangas, telas de lujo y detalles de pedrería.</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginTop: '40px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✨</div><span>Pedrería y bordados</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>💎</div><span>Telas de lujo</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>👗</div><span>Largos hasta el suelo</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📏</div><span>Tallas S-4XL</span></div>
          </div>

          <button onClick={() => setShowSizeChart(!showSizeChart)} style={{ marginTop: '30px', background: '#ff5a00', color: 'white', border: 'none', padding: '10px 25px', borderRadius: '40px', cursor: 'pointer' }}>📏 Guía de Tallas</button>
        </div>
      </section>

      {showSizeChart && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setShowSizeChart(false)}>
          <div style={{ background: 'white', borderRadius: '20px', maxWidth: '600px', width: '90%', padding: '30px' }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Guía de Tallas - Vestidos de Noche</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead><tr style={{ background: '#f5efe8' }}><th style={{ padding: '10px' }}>Talla</th><th style={{ padding: '10px' }}>Busto (cm)</th><th style={{ padding: '10px' }}>Cintura (cm)</th><th style={{ padding: '10px' }}>Cadera (cm)</th><th style={{ padding: '10px' }}>Largo (cm)</th></tr></thead>
              <tbody>
                <tr><td style={{ padding: '8px', textAlign: 'center', fontWeight: 600, color: '#ff5a00' }}>S</td><td style={{ textAlign: 'center' }}>84-88</td><td style={{ textAlign: 'center' }}>66-70</td><td style={{ textAlign: 'center' }}>90-94</td><td style={{ textAlign: 'center' }}>145-150</td></tr>
                <tr style={{ background: '#fef9f2' }}><td style={{ padding: '8px', textAlign: 'center', fontWeight: 600, color: '#ff5a00' }}>M</td><td style={{ textAlign: 'center' }}>88-92</td><td style={{ textAlign: 'center' }}>70-74</td><td style={{ textAlign: 'center' }}>94-98</td><td style={{ textAlign: 'center' }}>147-152</td></tr>
                <tr><td style={{ padding: '8px', textAlign: 'center', fontWeight: 600, color: '#ff5a00' }}>L</td><td style={{ textAlign: 'center' }}>92-96</td><td style={{ textAlign: 'center' }}>74-78</td><td style={{ textAlign: 'center' }}>98-102</td><td style={{ textAlign: 'center' }}>149-154</td></tr>
                <tr style={{ background: '#fef9f2' }}><td style={{ padding: '8px', textAlign: 'center', fontWeight: 600, color: '#ff5a00' }}>XL</td><td style={{ textAlign: 'center' }}>96-100</td><td style={{ textAlign: 'center' }}>78-82</td><td style={{ textAlign: 'center' }}>102-106</td><td style={{ textAlign: 'center' }}>151-156</td></tr>
                <tr><td style={{ padding: '8px', textAlign: 'center', fontWeight: 600, color: '#ff5a00' }}>2XL</td><td style={{ textAlign: 'center' }}>100-104</td><td style={{ textAlign: 'center' }}>82-86</td><td style={{ textAlign: 'center' }}>106-110</td><td style={{ textAlign: 'center' }}>153-158</td></tr>
                <tr style={{ background: '#fef9f2' }}><td style={{ padding: '8px', textAlign: 'center', fontWeight: 600, color: '#ff5a00' }}>3XL</td><td style={{ textAlign: 'center' }}>104-108</td><td style={{ textAlign: 'center' }}>86-90</td><td style={{ textAlign: 'center' }}>110-114</td><td style={{ textAlign: 'center' }}>155-160</td></tr>
                <tr><td style={{ padding: '8px', textAlign: 'center', fontWeight: 600, color: '#ff5a00' }}>4XL</td><td style={{ textAlign: 'center' }}>108-112</td><td style={{ textAlign: 'center' }}>90-94</td><td style={{ textAlign: 'center' }}>114-118</td><td style={{ textAlign: 'center' }}>157-162</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px' }}>
          <div><span style={{ fontWeight: 600, color: '#ff5a00' }}>{totalProducts}</span> vestidos de noche modestos</div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <input ref={searchInputRef} type="text" placeholder="Buscar vestido..." onChange={handleSearchChange} style={{ padding: '10px 18px', border: '2px solid #f0e6dc', borderRadius: '40px' }} />
            <select value={sortBy} onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1) }} style={{ padding: '10px 20px', border: '2px solid #f0e6dc', borderRadius: '40px' }}>
              <option value="default">Relevancia</option><option value="price-asc">Precio: menor a mayor</option><option value="price-desc">Precio: mayor a menor</option><option value="newest">Novedades</option>
            </select>
          </div>
        </div>

        {products.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px' }}><p>No se encontraron vestidos de noche</p><button onClick={() => { setSearchTerm(''); setSortBy('default'); setCurrentPage(1); if(searchInputRef.current) searchInputRef.current.value = '' }} style={{ background: '#ff5a00', color: 'white', padding: '10px 25px', borderRadius: '40px', border: 'none' }}>Restablecer</button></div>
        ) : (
          <>
            {loading ? <LoadingSkeleton /> : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px', marginBottom: '50px' }}>
                {products.map((p: any) => (
                  <Link href={getProductUrl(p)} key={p._id} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', color: 'inherit', border: '1px solid #f0e6dc', transition: '0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#ff5a00' }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#f0e6dc' }}>
                    <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fef9f2' }}>
                      <img src={p.imageUrl || '/images/default.webp'} alt={p.name_es || p.name_en} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} loading="lazy" />
                    </div>
                    <div style={{ padding: '20px', textAlign: 'center' }}>
                      <div style={{ fontSize: '11px', color: '#ff5a00', marginBottom: '5px', letterSpacing: '1px' }}>EVENING</div>
                      <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>{p.name_es || p.name_en}</h3>
                      <div style={{ fontSize: '20px', fontWeight: 700, color: '#ff5a00', marginBottom: '15px' }}>{formatPrice(p.price_usd)}</div>
                      <button onClick={(e) => addToCart(p, e)} style={{ width: '100%', background: '#ff5a00', color: 'white', border: 'none', padding: '12px', borderRadius: '50px', cursor: 'pointer', fontWeight: 600 }}>Solicitar cotización</button>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {totalPages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                <button onClick={() => setCurrentPage(p => Math.max(1, p-1))} disabled={currentPage === 1} style={{ padding: '8px 12px', borderRadius: '8px', background: currentPage === 1 ? '#f0e6dc' : '#ff5a00', color: currentPage === 1 ? '#aaa' : 'white', border: 'none' }}>‹</button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).filter(p => p === 1 || p === totalPages || Math.abs(p - currentPage) <= 2).map(p => (
                  <button key={p} onClick={() => setCurrentPage(p)} style={{ padding: '8px 12px', borderRadius: '8px', border: 'none', background: p === currentPage ? '#ff5a00' : '#f5efe8', color: p === currentPage ? 'white' : '#4a3a2a', fontWeight: p === currentPage ? 700 : 400 }}>{p}</button>
                ))}
                <button onClick={() => setCurrentPage(p => Math.min(totalPages, p+1))} disabled={currentPage === totalPages} style={{ padding: '8px 12px', borderRadius: '8px', background: currentPage === totalPages ? '#f0e6dc' : '#ff5a00', color: currentPage === totalPages ? '#aaa' : 'white', border: 'none' }}>›</button>
              </div>
            )}
          </>
        )}
      </div>

      <section style={{ background: '#fef9f2', padding: '60px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '28px', marginBottom: '20px' }}>Vestidos de Noche Modestos Turcos al por Mayor</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', color: '#5a4a3a' }}>Perfectos para bodas, galas, graduaciones y eventos formales. Nuestros vestidos combinan elegancia con comodidad, utilizando telas de alta calidad como crepe de seda, mikado y gasa con pedrería. Diseños exclusivos de Turquía.</p>
        </div>
      </section>
    </>
  )
}