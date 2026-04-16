'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { useCurrency } from '@/app/contexts/CurrencyContext'
import { getProductImage } from '@/lib/product-image'; 

export default function ModestSkirtSetsClient({ searchParams }: { searchParams?: { search?: string; page?: string; sort?: string } }) {
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

  useEffect(() => {
    setCurrentPage(Number(searchParams?.page) || 1)
  }, [searchParams?.page])

  useEffect(() => {
    setSearchTerm(searchParams?.search || '')
    if (searchInputRef.current) {
      searchInputRef.current.value = searchParams?.search || ''
    }
  }, [searchParams?.search])

  useEffect(() => {
    setSortBy(searchParams?.sort || 'default')
  }, [searchParams?.sort])

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
      params.append('category', 'Modest Skirt Sets')
      
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
      console.error('Error al cargar los productos:', error)
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
          const parsedCart = JSON.parse(savedCart)
          setCart(parsedCart)
          cartStringRef.current = JSON.stringify(parsedCart)
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
    const isRSS = product['rss/not rss message_en']?.includes('single piece') || 
                  product['rss/not rss message_ar']?.includes('قطعة واحدة')
    const packetSize = product.pcs_per_packet ? parseInt(product.pcs_per_packet) : 1
    
    const productToAdd = {
      _id: product._id,
      name_ar: product.name_ar,
      name_en: product.name_en,
      price_usd: product.price_usd,
      product_code: product.product_code,
        imageUrl: product.imageUrl,      // ⬅️ للتوافق القديم
  mainImage: product.mainImage,    // ✅ أضف هذا
  images: product.images,          // ✅ أضف هذا
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
      'Pink': '#d47a8a', 'Orange': '#e86a2c', 'Cream': '#fdf6e3', 'Taupe': '#8b7355'
    }
    return colors[color] || '#CCCCCC'
  }, [])

  const getProductUrl = useCallback((product: any) => {
    if (product.slug_es) return `/es/product/${product.slug_es}`
    if (product.slug_en) return `/es/product/${product.slug_en}`
    return `/es/product/${product._id || 'product'}`
  }, [])

  const LoadingSkeleton = () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px', marginBottom: '50px' }}>
      {Array(8).fill(0).map((_, i) => (
        <div key={i} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', border: '1px solid #f0e6dc' }}>
          <div style={{ height: '280px', background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)', backgroundSize: '200% 100%', animation: 'pulse 1.5s infinite' }} />
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ height: '12px', background: '#f0f0f0', marginBottom: '8px', borderRadius: '6px', width: '60%', margin: '0 auto 8px' }} />
            <div style={{ height: '16px', background: '#f0f0f0', marginBottom: '8px', borderRadius: '6px', width: '80%', margin: '0 auto 8px' }} />
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
      <p style={{ marginTop: '20px', color: '#555', fontSize: '16px' }}>Cargando conjuntos de falda modestos...</p>
    </div>
  )

  const startIndex = (currentPage - 1) * productsPerPage + 1
  const endIndex = Math.min(currentPage * productsPerPage, totalProducts)

  const sizeChartData = {
    title: 'Guía de Tallas - Conjuntos de Falda Turcos',
    columns: ['Talla', 'Cintura (cm)', 'Cadera (cm)', 'Largo falda (cm)', 'Largo túnica (cm)'],
    rows: [
      { size: 'S', waist: '66-70', hip: '90-94', skirtLength: '85-90', tunicLength: '75-80' },
      { size: 'M', waist: '70-74', hip: '94-98', skirtLength: '87-92', tunicLength: '77-82' },
      { size: 'L', waist: '74-78', hip: '98-102', skirtLength: '89-94', tunicLength: '79-84' },
      { size: 'XL', waist: '78-82', hip: '102-106', skirtLength: '91-96', tunicLength: '81-86' },
      { size: '2XL', waist: '82-86', hip: '106-110', skirtLength: '93-98', tunicLength: '83-88' },
      { size: '3XL', waist: '86-90', hip: '110-114', skirtLength: '95-100', tunicLength: '85-90' },
      { size: '4XL', waist: '90-94', hip: '114-118', skirtLength: '97-102', tunicLength: '87-92' }
    ]
  }

  return (
    <>
      <button onClick={scrollToTop} style={{ position: 'fixed', bottom: '30px', right: '30px', width: '50px', height: '50px', borderRadius: '50%', background: '#ff5a00', color: 'white', border: 'none', cursor: 'pointer', display: showBackToTop ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(255,90,0,0.3)', zIndex: 999 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
      </button>

      <section style={{ background: 'linear-gradient(135deg, #fdf8f2 0%, #ffffff 100%)', padding: '60px 0 40px', textAlign: 'center', borderBottom: '1px solid #f0e6dc', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '180px', fontWeight: 800, color: 'rgba(255,90,0,0.03)', whiteSpace: 'nowrap', fontFamily: 'Playfair Display, serif' }}>SKIRTS</div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '14px', color: '#7a6a5a', marginBottom: '20px' }}>
            <Link href="/es" style={{ color: '#ff5a00' }}>Inicio</Link> <span>/</span>
            <Link href="/es/catalog" style={{ color: '#ff5a00' }}>Catálogo</Link> <span>/</span>
            <span>Conjuntos de Falda</span>
          </div>
          <h1 style={{ fontSize: '48px', color: '#2c2418', marginBottom: '15px', fontWeight: 800, fontFamily: 'Playfair Display, serif' }}>Conjuntos de <span style={{ color: '#ff5a00' }}>Falda Modestos</span></h1>
          <p style={{ fontSize: '18px', color: '#5a4a3a', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>Conjuntos de dos piezas: falda larga + túnica o blusa. Perfectos para el día a día con estilo recatado y elegancia turca.</p>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '40px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5a00"><rect x="4" y="8" width="16" height="12" rx="1" stroke="currentColor"/></svg></div><span>Faldas largas</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5a00"><path d="M3 6h18v12H3z" stroke="currentColor"/></svg></div><span>Túnicas largas</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5a00"><path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor"/></svg></div><span>Telas fluidas</span></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}><div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,90,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff5a00"><rect x="4" y="8" width="16" height="12" rx="1" stroke="currentColor"/><path d="M12 12v4" stroke="currentColor"/></svg></div><span>Tallas hasta 4XL</span></div>
          </div>

          <button onClick={() => setShowSizeChart(true)} style={{ marginTop: '30px', background: 'transparent', border: '2px solid #ff5a00', color: '#ff5a00', padding: '10px 25px', borderRadius: '40px', fontSize: '14px', fontWeight: 500, cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#ff5a00'; e.currentTarget.style.color = 'white'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#ff5a00'; }}>📏 Guía de Tallas</button>
        </div>
      </section>

      {showSizeChart && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }} onClick={() => setShowSizeChart(false)}>
          <div style={{ background: 'white', borderRadius: '24px', maxWidth: '700px', width: '100%', padding: '30px' }} onClick={(e) => e.stopPropagation()}>
            <h3 style={{ fontSize: '24px', color: '#2c2418', marginBottom: '20px', textAlign: 'center' }}>{sizeChartData.title}</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead><tr style={{ background: '#f5efe8' }}><th style={{ padding: '10px' }}>Talla</th><th style={{ padding: '10px' }}>Cintura (cm)</th><th style={{ padding: '10px' }}>Cadera (cm)</th><th style={{ padding: '10px' }}>Largo falda (cm)</th><th style={{ padding: '10px' }}>Largo túnica (cm)</th></tr></thead>
              <tbody>
                {sizeChartData.rows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fef9f2' : 'white' }}>
                    <td style={{ padding: '8px', textAlign: 'center', fontWeight: 600, color: '#ff5a00' }}>{row.size}</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>{row.waist}</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>{row.hip}</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>{row.skirtLength}</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>{row.tunicLength}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px', background: 'white', padding: '15px 25px', borderRadius: '20px', border: '1px solid #f0e6dc' }}>
          <div><span style={{ fontWeight: 600, color: '#ff5a00' }}>{totalProducts}</span> conjuntos de falda</div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <input ref={searchInputRef} type="text" placeholder="Buscar..." onChange={handleSearchChange} style={{ padding: '10px 18px', border: '2px solid #f0e6dc', borderRadius: '40px', outline: 'none' }} />
            <select value={sortBy} onChange={(e) => { setSortBy(e.target.value); setCurrentPage(1); }} style={{ padding: '10px 20px', border: '2px solid #f0e6dc', borderRadius: '40px', background: 'white' }}>
              <option value="default">Ordenar por</option><option value="price-asc">Precio: menor a mayor</option><option value="price-desc">Precio: mayor a menor</option><option value="newest">Novedades</option>
            </select>
          </div>
        </div>

        {products.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 20px', background: 'white', borderRadius: '20px' }}>
            <h3>No se encontraron conjuntos</h3>
            <button onClick={() => { setSearchTerm(''); setSortBy('default'); setCurrentPage(1); if(searchInputRef.current) searchInputRef.current.value = ''; }} style={{ background: '#ff5a00', color: 'white', padding: '12px 30px', borderRadius: '50px', border: 'none', cursor: 'pointer' }}>Restablecer</button>
          </div>
        ) : (
          <>
            {loading && products.length > 0 ? <LoadingSkeleton /> : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px', marginBottom: '50px' }}>
                {products.map((p: any) => {
                  const isRSS = p['rss/not rss message_en']?.includes('single piece')
                  const hasPlus = String(p['plus sizes'] || '').toLowerCase() === 'yes'
                  const badges = []
                  if (p.is_new === 'Yes') badges.push(<span key="new" style={{ background: '#2d6a4f', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '11px' }}>NUEVO</span>)
                  if (hasPlus) badges.push(<span key="plus" style={{ background: '#e86a2c', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '11px' }}>TALLAS GRANDES</span>)

                  return (
                    <Link href={getProductUrl(p)} key={p._id} style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', color: 'inherit', border: '1px solid #f0e6dc', transition: '0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = '#ff5a00'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#f0e6dc'; }}>
                      <div style={{ position: 'relative', height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fef9f2' }}>
                        <img src={getProductImage(p.mainImage, p.imageUrl, { width: 400 }, p.images)} alt={p.name_es || p.name_en} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} loading="lazy" />
                        {badges.length > 0 && <div style={{ position: 'absolute', top: '15px', right: '15px' }}>{badges}</div>}
                      </div>
                      <div style={{ padding: '20px', textAlign: 'center' }}>
                        <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '8px' }}>{p.name_es || p.name_en}</h3>
                        <div style={{ fontSize: '20px', fontWeight: 700, color: '#ff5a00', marginBottom: '15px' }}>{formatPrice(p.price_usd)}</div>
                        <button onClick={(e) => addToCart(p, e)} style={{ width: '100%', background: '#ff5a00', color: 'white', border: 'none', padding: '12px', borderRadius: '50px', cursor: 'pointer', fontWeight: 600 }} onMouseEnter={(e) => e.currentTarget.style.background = '#e04e00'}>Solicitar cotización</button>
                      </div>
                    </Link>
                  )
                })}
              </div>
            )}
            {totalPages > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '30px' }}>
                <button onClick={() => setCurrentPage(p => Math.max(1, p-1))} disabled={currentPage === 1} style={{ padding: '10px 15px', borderRadius: '8px', border: 'none', background: currentPage === 1 ? '#f0e6dc' : '#ff5a00', color: currentPage === 1 ? '#a08c7a' : 'white' }}>‹</button>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + Math.max(1, Math.min(currentPage - 2, totalPages - 4))).map(p => (
                  <button key={p} onClick={() => setCurrentPage(p)} style={{ padding: '10px 15px', borderRadius: '8px', border: 'none', background: p === currentPage ? '#ff5a00' : '#f5efe8', color: p === currentPage ? 'white' : '#4a3a2a', fontWeight: p === currentPage ? 700 : 400 }}>{p}</button>
                ))}
                <button onClick={() => setCurrentPage(p => Math.min(totalPages, p+1))} disabled={currentPage === totalPages} style={{ padding: '10px 15px', borderRadius: '8px', border: 'none', background: currentPage === totalPages ? '#f0e6dc' : '#ff5a00', color: currentPage === totalPages ? '#a08c7a' : 'white' }}>›</button>
              </div>
            )}
          </>
        )}
      </div>

      <section style={{ background: '#fef9f2', padding: '60px 0', marginTop: '40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', color: '#2c2418', marginBottom: '20px' }}>Conjuntos de Falda Turcos al por Mayor</h2>
          <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', color: '#5a4a3a' }}>Los conjuntos de falda y túnica son una opción versátil y elegante para la moda modesta. Ofrecemos combinaciones coordinadas en una amplia gama de colores y telas. Perfectos para tiendas que buscan productos de alta rotación.</p>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) { div[style*="grid-template-columns: repeat(4, 1fr)"] { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 768px) { div[style*="grid-template-columns: repeat(4, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </>
  )
}