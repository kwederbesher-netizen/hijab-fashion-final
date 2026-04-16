'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useCurrency } from '@/app/contexts/CurrencyContext'
import { getProductImage } from '@/lib/product-image';
import { 
  FaWhatsapp, 
  FaTelegramPlane, 
  FaShoppingCart, 
  FaSearch, 
  FaBars, 
  FaTimes, 
  FaArrowUp,
  FaUsers,
  FaImage,
  FaVideo,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaGlobeAmericas,
  FaGlobeEurope,
  FaGlobeAsia,
  FaMapMarkedAlt,
  FaPlane,
  FaBox,
  FaClock,
  FaCheckCircle,
  FaLock,
  FaTruck,
  FaFileAlt,
  FaStore,
  FaCreditCard,
  FaBoxes,
  FaNewspaper
} from 'react-icons/fa'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState(0)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [cart, setCart] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  
  const { currency, setCurrency, loading: currencyLoading } = useCurrency()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/it/catalog?search=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        setCart(parsedCart)
        const totalItems = parsedCart.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0)
        setCartCount(totalItems)
      } catch (e) {
        console.error('Errore nell\'analisi del carrello:', e)
      }
    }

    const handleCartUpdate = (event: CustomEvent) => {
      setCartCount(event.detail)
    }
    window.addEventListener('cartUpdated', handleCartUpdate as EventListener)
    
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate as EventListener)
    }
  }, [])

  useEffect(() => {
    const handleOpenCart = () => {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart)
          setCart(parsedCart)
          const totalItems = parsedCart.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0)
          setCartCount(totalItems)
        } catch (e) {
          console.error('Errore nell\'analisi del carrello:', e)
        }
      }
      setIsCartOpen(true)
    }

    window.addEventListener('openCart', handleOpenCart)
    
    return () => {
      window.removeEventListener('openCart', handleOpenCart)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const backToTopBtn = document.getElementById('backToTop')
      if (backToTopBtn) {
        if (window.scrollY > 500) {
          backToTopBtn.classList.add('show')
        } else {
          backToTopBtn.classList.remove('show')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getTotalPieces = () => {
    return cart.reduce((total, item) => {
      return total + (item.quantity || 1)
    }, 0)
  }

  const removeFromCart = (index: number) => {
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
    
    const totalItems = newCart.reduce((sum, item) => sum + (item.quantity || 1), 0)
    setCartCount(totalItems)
    
    const event = new CustomEvent('cartUpdated', { detail: totalItems })
    window.dispatchEvent(event)
  }

  const sendToWhatsApp = () => {
    if (cart.length === 0) {
      alert('⚠️ Il carrello è vuoto - Aggiungi prima i prodotti')
      return
    }
    
    let message = "*Hijab Fashion Mall - Richiesta di preventivo*\n\n"
    message += "*Dettagli dell'ordine:*\n"
    message += "━━━━━━━━━━━━━━━━━━━━\n\n"
    
    cart.forEach((item, index) => {
      const name = item.name_it || item.name_en || item.name || 'Prodotto'
      const code = item.product_code || item._id?.slice(-8) || 'N/A'
      const quantity = item.quantity || 1
      
      message += `*${index + 1}. ${name}*\n`
      message += `📦 Codice: \`${code}\`\n`
      message += `🔢 Quantità: ${quantity} ${quantity > 1 ? 'pezzi' : 'pezzo'}\n\n`
    })
    
    const totalPieces = getTotalPieces()
    
    message += "━━━━━━━━━━━━━━━━━━━━\n"
    message += `*📊 Riepilogo:*\n`
    message += `• Totale articoli: ${cart.length}\n`
    message += `• Totale pezzi: ${totalPieces}\n\n`
    message += `Grazie per il tuo interesse! Conferma la disponibilità.`
    
    window.open(`https://wa.me/905519522448?text=${encodeURIComponent(message)}`, '_blank')
  }

  const downloadPDF = () => {
    if (cart.length === 0) {
      alert('⚠️ Il carrello è vuoto - Aggiungi prima i prodotti')
      return
    }
    
    let content = "═══════════════════════════════════\n"
    content += "      HIJAB FASHION MALL\n"
    content += "         CARRELLO RICHIESTA\n"
    content += "═══════════════════════════════════\n\n"
    
    cart.forEach((item, index) => {
      const name = item.name_it || item.name_en || item.name || 'Prodotto'
      const code = item.product_code || item._id?.slice(-8) || 'N/A'
      const quantity = item.quantity || 1
      
      content += `${index + 1}. ${name}\n`
      content += `   Codice: ${code}\n`
      content += `   Quantità: ${quantity} ${quantity > 1 ? 'pezzi' : 'pezzo'}\n\n`
    })
    
    const totalPieces = getTotalPieces()
    
    content += "───────────────────────────────────\n"
    content += `RIEPILOGO:\n`
    content += `• Totale articoli: ${cart.length}\n`
    content += `• Totale pezzi: ${totalPieces}\n\n`
    content += "Grazie per il tuo interesse!\n"
    content += "═══════════════════════════════════\n"
    
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `hijab-inquiry-${new Date().toISOString().slice(0, 19)}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <>
      <style>{`
        /* Reset and base styles */
        html, body {
          overflow-x: hidden !important;
          width: 100% !important;
          position: relative !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        
        body {
          overflow-x: hidden !important;
        }
        
        * {
          max-width: 100vw !important;
          box-sizing: border-box !important;
        }
        
        .container,
        [class*="container"],
        [style*="max-width"] {
          overflow-x: hidden !important;
        }
        
        img, video, iframe, svg {
          max-width: 100% !important;
          height: auto !important;
        }
        
        .desktop-nav {
          scrollbar-width: none !important;
          -ms-overflow-style: none !important;
          overflow-x: auto !important;
        }
        
        .desktop-nav::-webkit-scrollbar {
          display: none !important;
        }
        
        #backToTop.show {
          opacity: 1;
          visibility: visible;
        }
        
        .simple-channel:hover {
          transform: translateY(-3px);
        }
        
        .footer-social a {
          color: white;
          background: rgba(255,255,255,0.1);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
          text-decoration: none;
        }
        
        .footer-social a:hover {
          background: #ff5a00;
          transform: translateY(-3px);
        }
        
        .footer-policies a:hover {
          color: #ff5a00 !important;
        }

        /* ========== Hide hamburger button on desktop ========== */
        @media (min-width: 769px) {
          .main-header .mobile-menu-btn {
            display: none !important;
          }
        }

        /* ========== DESKTOP STYLES ========== */
        .main-header .search-row {
          display: none !important;
        }
        
        .main-header .header-row-top .search-bar {
          display: block !important;
        }

        /* ========== MOBILE STYLES ========== */
        @media (max-width: 768px) {
          /* Hide search bar from top row on mobile */
          .main-header .header-row-top .search-bar {
            display: none !important;
          }
          
          /* Hide cart icon from top row on mobile */
          .main-header .header-row-top .cart-icon-desktop {
            display: none !important;
          }
          
          /* Show separate search row */
          .main-header .search-row {
            display: flex !important;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            padding: 10px 20px 15px 20px;
            width: 100%;
          }
          
          .main-header .search-row .search-bar {
            display: block !important;
            flex: 1;
            margin: 0 !important;
          }
          
          /* Cart icon in search row (far right) - only shows on mobile */
          .main-header .search-row .mobile-cart-icon {
            display: flex !important;
            position: relative;
            flex-shrink: 0;
          }
          
          /* Top row layout */
          .main-header .header-row-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            gap: 10px;
          }
          
          /* Hamburger button */
          .main-header .mobile-menu-btn {
            display: block !important;
            flex-shrink: 0;
          }
          
          /* Logo - larger on mobile */
          .main-header .logo {
            flex-shrink: 1;
            margin-right: auto;
            margin-left: 5px;
          }
          
          .main-header .logo h1 {
            font-size: 24px !important;
          }
          
          .main-header .logo h1 span {
            font-size: 16px !important;
          }
          
          /* Currency and language buttons - on the right */
          .main-header .top-actions {
            display: flex;
            gap: 6px;
            align-items: center;
            flex-shrink: 0;
          }
          
          /* Make currency buttons smaller */
          .main-header .lang-currency {
            padding: 3px 6px;
          }
          
          .main-header .lang-currency select {
            font-size: 9px;
            width: auto;
            min-width: 45px;
          }
          
          /* Hide main navigation on mobile */
          .main-header .desktop-nav {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .main-header .logo h1 {
            font-size: 22px !important;
          }
          
          .main-header .logo h1 span {
            font-size: 14px !important;
          }
          
          .main-header .lang-currency select {
            font-size: 8px;
            min-width: 40px;
          }
          
          .main-header .top-actions {
            gap: 4px;
          }
        }
      `}</style>

      {/* Overlay for cart */}
      <div 
        className={`overlay ${isCartOpen ? 'active' : ''}`} 
        onClick={() => setIsCartOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.5)',
          zIndex: 1999,
          display: isCartOpen ? 'block' : 'none'
        }}
        aria-hidden="true"
      />

      {/* Cart Sidebar */}
      <div 
        className={`cart-sidebar ${isCartOpen ? 'open' : ''}`} 
        style={{
          position: 'fixed',
          top: 0,
          right: isCartOpen ? '0' : '-400px',
          width: '380px',
          height: '100vh',
          background: 'white',
          boxShadow: '-5px 0 30px rgba(0,0,0,0.1)',
          zIndex: 2000,
          transition: 'right 0.3s ease',
          display: 'flex',
          flexDirection: 'column'
        }}
        role="dialog"
        aria-label="Carrello della spesa"
        aria-modal="true"
      >
        <div className="cart-header" style={{
          padding: '25px',
          borderBottom: '1px solid #eee',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h3 style={{ fontSize: '20px', color: '#000' }}>Carrello Richiesta</h3>
          <button 
            onClick={() => setIsCartOpen(false)}
            style={{ fontSize: '24px', cursor: 'pointer', color: '#555', background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Chiudi carrello"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div className="cart-items" style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px'
        }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: '#666' }}>
              Il tuo carrello è vuoto
            </div>
          ) : (
            cart.map((item, index) => {
              const itemQuantity = item.quantity || 1
              const packetSize = item.packetSize || item.pcs_per_packet || 1
              const isRSS = item.isRSS || false
              const productCode = item.product_code || item._id?.slice(-8) || 'N/A'
              
              return (
                <div key={index} className="cart-item" style={{
                  display: 'flex',
                  gap: '15px',
                  marginBottom: '20px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid #eee'
                }}>
                  <div className="cart-item-image" style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    background: '#f5f5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img 
                      src={getProductImage(item.mainImage, item.imageUrl, { width: 80 }, item.images)} 
                      alt={item.name_it || 'Prodotto'}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/default.webp'
                      }}
                    />
                  </div>
                  <div className="cart-item-details" style={{ flex: 1 }}>
                    <div className="cart-item-title" style={{ fontWeight: 600, marginBottom: '5px' }}>
                      {item.name_it || item.name_en || item.name || 'Prodotto'}
                    </div>
                    <div className="cart-item-code" style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>
                      Codice: {productCode}
                    </div>
                    <div className="cart-item-quantity" style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>
                      Quantità: {itemQuantity} {!isRSS && packetSize > 1 ? `(Cartone - ${packetSize} pezzi)` : 'pezzo'}
                    </div>
                    <button 
                      onClick={() => removeFromCart(index)}
                      style={{ color: '#dc2626', cursor: 'pointer', fontSize: '14px', marginTop: '5px', background: 'none', border: 'none' }}
                      aria-label={`Rimuovi ${item.name_it || item.name_en || 'Prodotto'} dal carrello`}
                    >
                      Rimuovi
                    </button>
                  </div>
                </div>
              )
            })
          )}
        </div>
        <div className="cart-footer" style={{
          padding: '25px',
          borderTop: '1px solid #eee'
        }}>
          <div className="cart-total" style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px'
          }}>
            <span>Totale articoli:</span>
            <span style={{ fontWeight: 600 }}>{cart.length}</span>
          </div>
          <div className="cart-total-pieces" style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px',
            fontSize: '14px',
            color: '#666'
          }}>
            <span>Totale pezzi:</span>
            <span style={{ fontWeight: 600, color: '#ff5a00' }}>{getTotalPieces()}</span>
          </div>
          <div className="cart-actions" style={{ display: 'flex', gap: '10px' }}>
            <button 
              className="cart-whatsapp" 
              onClick={sendToWhatsApp}
              style={{
                flex: 1,
                padding: '12px',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: 'pointer',
                background: '#25d366',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              aria-label="Invia richiesta via WhatsApp"
            >
              <FaWhatsapp size={18} /> Invia via WhatsApp
            </button>
            <button 
              className="cart-pdf" 
              onClick={downloadPDF}
              style={{
                flex: 1,
                padding: '12px',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 600,
                cursor: 'pointer',
                background: '#ff5a00',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
              aria-label="Esporta carrello come file di testo"
            >
              <FaFileAlt size={18} /> Esporta
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`mobile-nav-overlay ${isMobileNavOpen ? 'active' : ''}`} 
        onClick={() => setIsMobileNavOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.5)',
          zIndex: 1999,
          display: isMobileNavOpen ? 'block' : 'none'
        }}
        aria-hidden="true"
      />

      {/* Mobile Navigation */}
      <div 
        className={`mobile-nav ${isMobileNavOpen ? 'open' : ''}`} 
        style={{
          position: 'fixed',
          top: 0,
          left: isMobileNavOpen ? '0' : '-280px',
          width: '280px',
          height: '100vh',
          background: 'white',
          boxShadow: '2px 0 20px rgba(0,0,0,0.1)',
          zIndex: 2000,
          transition: 'left 0.3s ease',
          padding: '30px 20px',
          overflowY: 'auto'
        }}
        role="dialog"
        aria-label="Menu di navigazione mobile"
        aria-modal="true"
      >
        <div className="mobile-nav-header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          paddingBottom: '20px',
          borderBottom: '1px solid #eee'
        }}>
          <h3 style={{ fontSize: '20px', color: '#000' }}>Menu</h3>
          <button 
            onClick={() => setIsMobileNavOpen(false)}
            style={{ fontSize: '24px', cursor: 'pointer', color: '#555', background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Chiudi menu"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div className="mobile-nav-links" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <Link href="/it" style={{ color: '#000', textDecoration: 'none', fontSize: '16px', fontWeight: 500, padding: '12px 0', borderBottom: '1px solid #eee' }}>
            Home
          </Link>
          <Link href="/it/catalog" style={{ color: '#000', textDecoration: 'none', fontSize: '16px', fontWeight: 500, padding: '12px 0', borderBottom: '1px solid #eee' }}>
            Catalogo
          </Link>
          
          <div style={{ fontWeight: 700, color: '#ff5a00', marginTop: '10px', padding: '12px 0' }}>
            Categorie
          </div>
          <Link href="/it/category/abayas" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Abaya
          </Link>
          <Link href="/it/category/hijabs" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Hijab
          </Link>
          <Link href="/it/category/modest-skirt-sets" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Set Gonna Modesto
          </Link>
          <Link href="/it/category/modest-dresses" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Abiti Modesti
          </Link>
          <Link href="/it/category/burkini" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Burkini & Costumi
          </Link>
          <Link href="/it/category/modest-sportswear" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Abbigliamento Sportivo
          </Link>
          <Link href="/it/category/modest-evening-dresses" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Abiti da Sera
          </Link>
          <Link href="/it/category/modest-pants-sets" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Set Pantaloni Modesti
          </Link>
          <Link href="/it/category/prayer-clothes" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Abiti da Preghiera
          </Link>
          
          <Link href="/it/about-us" style={{ color: '#000', textDecoration: 'none', fontSize: '16px', fontWeight: 500, padding: '12px 0', borderBottom: '1px solid #eee' }}>
            Chi Siamo
          </Link>
          <Link href="/it/contact" style={{ color: '#000', textDecoration: 'none', fontSize: '16px', fontWeight: 500, padding: '12px 0', borderBottom: '1px solid #eee' }}>
            Contatti
          </Link>
        </div>
      </div>

      {/* Top Header */}
      <div className="top-header" style={{
        background: '#000',
        color: 'white',
        padding: '12px 0',
        textAlign: 'center',
        fontSize: '15px',
        borderBottom: '1px solid #333'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <p><span style={{ color: '#ff5a00', fontWeight: 600 }}>Abbigliamento Hijab Turco Premium all'Ingrosso</span> & Spedizione Mondiale. Eleganza Consegnata a Casa Tua</p>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header" style={{
        background: 'white',
        boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        {/* Top row: Hamburger + Logo + Currency + Cart (Cart hidden on mobile via CSS) */}
        <div className="header-row-top" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '15px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px'
        }}>
          {/* Hamburger Menu Button - shows on mobile only */}
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileNavOpen(true)}
            style={{
              fontSize: '24px',
              cursor: 'pointer',
              color: '#000',
              background: 'none',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Apri menu"
          >
            <FaBars size={24} />
          </button>

          {/* Logo */}
          <div className="logo" style={{ flexShrink: 0 }}>
            <Link href="/it" style={{ textDecoration: 'none', color: 'inherit' }} aria-label="Hijab Fashion Mall - Home">
              <h1 style={{ 
                fontSize: '28px', 
                color: '#000', 
                fontWeight: 800, 
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                margin: 0,
                flexWrap: 'wrap'
              }}>
                <span style={{ fontSize: '28px', color: '#000', fontWeight: 800 }}>Hijab Fashion Mall</span>
                <span style={{ 
                  fontSize: '20px', 
                  color: '#ff5a00', 
                  fontWeight: 500,
                  background: 'transparent', 
                  padding: 0
                }}>Ingrosso</span>
              </h1>
            </Link>
          </div>

          {/* Search Bar - shows on desktop only (in top row) */}
          <div className="search-bar" style={{
            flex: 1,
            maxWidth: '500px',
            margin: '0 20px'
          }}>
            <form onSubmit={handleSearch} style={{ position: 'relative', width: '100%' }} role="search" aria-label="Cerca nel sito">
              <input
                id="searchInput"
                ref={searchInputRef}
                type="text"
                placeholder="Cerca prodotti... (nome, codice, colore)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                style={{
                  width: '100%',
                  padding: '14px 55px 14px 20px',
                  border: isSearchFocused ? '2px solid #ff5a00' : '2px solid #eaeaea',
                  borderRadius: '50px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'all 0.3s',
                  background: '#fafafa'
                }}
              />
              <button
                type="submit"
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: '#ff5a00',
                  color: 'white',
                  border: 'none',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#e04e00'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#ff5a00'}
                aria-label="Cerca"
              >
                <FaSearch size={18} />
              </button>
            </form>
          </div>

          {/* Top Actions (Language + Currency + Cart Icon - Cart hidden on mobile via CSS) */}
          <div className="top-actions" style={{ display: 'flex', gap: '12px', alignItems: 'center', flexShrink: 0 }}>
            <div className="lang-currency" style={{
              display: 'flex',
              gap: '5px',
              background: '#f5f5f5',
              padding: '6px 10px',
              borderRadius: '40px'
            }}>
              <label htmlFor="languageSelect" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
                Seleziona lingua
              </label>
              <select 
                id="languageSelect"
                defaultValue="it"
                style={{
                  border: 'none',
                  background: 'transparent',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  fontSize: '12px',
                  cursor: 'pointer',
                  outline: 'none',
                  color: '#222',
                  width: '85px'
                }}
                onChange={(e) => {
                  const lang = e.target.value
                  const currentPath = window.location.pathname
                  const pathWithoutLang = currentPath.replace(/^\/it/, '') || '/'
                  
                  if (lang === 'en') {
                    window.location.href = `/en${pathWithoutLang}`
                  } else if (lang === 'ar') {
                    window.location.href = `/ar${pathWithoutLang}`
                  } else if (lang === 'fr') {
                    window.location.href = `/fr${pathWithoutLang}`
                  } else if (lang === 'de') {
                    window.location.href = `/de${pathWithoutLang}`
                  } else if (lang === 'tr') {
                    window.location.href = `/tr${pathWithoutLang}`
                  } else if (lang === 'es') {
                    window.location.href = `/es${pathWithoutLang}`
                  }
                }}
                aria-label="Seleziona lingua"
              >
                <option value="it">🇮🇹 Italiano</option>
                <option value="en">🇬🇧 English</option>
                <option value="ar">🇸🇦 العربية</option>
                <option value="fr">🇫🇷 Français</option>
                <option value="de">🇩🇪 Deutsch</option>
                <option value="tr">🇹🇷 Türkçe</option>
                <option value="es">🇪🇸 Español</option>
              </select>
              <label htmlFor="currencySelect" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
                Seleziona valuta
              </label>
              <select 
                id="currencySelect"
                value={currency}
                onChange={(e) => setCurrency(e.target.value as any)}
                disabled={currencyLoading}
                style={{
                  border: 'none',
                  background: 'transparent',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: 500,
                  fontSize: '12px',
                  cursor: currencyLoading ? 'wait' : 'pointer',
                  outline: 'none',
                  color: '#222',
                  width: '65px',
                  opacity: currencyLoading ? 0.7 : 1
                }}
                aria-label="Seleziona valuta"
              >
                <option value="USD">🇺🇸 USD</option>
                <option value="EUR">🇪🇺 EUR</option>
                <option value="TRY">🇹🇷 TRY</option>
                <option value="GBP">🇬🇧 GBP</option>
                <option value="SAR">🇸🇦 SAR</option>
                <option value="AED">🇦🇪 AED</option>
                <option value="CAD">🇨🇦 CAD</option>
                <option value="AUD">🇦🇺 AUD</option>
                <option value="OMR">🇴🇲 OMR</option>
                <option value="BHD">🇧🇭 BHD</option>
                <option value="KWD">🇰🇼 KWD</option>
                <option value="LYD">🇱🇾 LYD</option>
                <option value="DZD">🇩🇿 DZD</option>
              </select>
            </div>
            
            {/* Cart Icon for Desktop/Tablet - hidden on mobile via CSS */}
            <button 
              className="cart-icon-desktop" 
              onClick={() => setIsCartOpen(true)}
              style={{
                position: 'relative',
                cursor: 'pointer',
                fontSize: '22px',
                color: '#000',
                background: 'none',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
              aria-label={`Carrello della spesa con ${cartCount} articoli`}
            >
              <FaShoppingCart size={22} />
              <span 
                className="cart-count"
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '-10px',
                  background: '#ff5a00',
                  color: 'white',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  fontSize: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600
                }}
              >{cartCount}</span>
            </button>
          </div>
        </div>

        {/* Second row: Search bar + Cart icon (shows on mobile only) */}
        <div className="search-row" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px 15px 20px',
          display: 'none'
        }}>
          <div className="search-bar" style={{
            width: '100%'
          }}>
            <form onSubmit={handleSearch} style={{ position: 'relative', width: '100%' }} role="search" aria-label="Cerca nel sito">
              <input
                type="text"
                placeholder="Cerca prodotti... (nome, codice, colore)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                style={{
                  width: '100%',
                  padding: '14px 55px 14px 20px',
                  border: isSearchFocused ? '2px solid #ff5a00' : '2px solid #eaeaea',
                  borderRadius: '50px',
                  fontFamily: 'Poppins, sans-serif',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'all 0.3s',
                  background: '#fafafa'
                }}
              />
              <button
                type="submit"
                style={{
                  position: 'absolute',
                  right: '8px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: '#ff5a00',
                  color: 'white',
                  border: 'none',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#e04e00'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#ff5a00'}
                aria-label="Cerca"
              >
                <FaSearch size={18} />
              </button>
            </form>
          </div>
          
          {/* Cart icon in search row (shows on mobile only) */}
          <button 
            className="mobile-cart-icon" 
            onClick={() => setIsCartOpen(true)}
            style={{
              position: 'relative',
              cursor: 'pointer',
              fontSize: '22px',
              color: '#000',
              background: 'none',
              border: 'none',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginLeft: '10px'
            }}
            aria-label={`Carrello della spesa con ${cartCount} articoli`}
          >
            <FaShoppingCart size={22} />
            <span 
              className="cart-count"
              style={{
                position: 'absolute',
                top: '-8px',
                right: '-10px',
                background: '#ff5a00',
                color: 'white',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                fontSize: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 600
              }}
            >{cartCount}</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div style={{
          background: '#f8f8f8',
          borderTop: '1px solid #eee',
          borderBottom: '1px solid #eee'
        }}>
          <div className="container" style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px'
          }}>
            <nav className="desktop-nav" style={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              gap: '25px',
              padding: '12px 0',
              flexWrap: 'nowrap',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }} aria-label="Navigazione principale">
              <Link href="/it" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Home
              </Link>
              <Link href="/it/catalog" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Catalogo
              </Link>
              <Link href="/it/category/abayas" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Abaya
              </Link>
              <Link href="/it/category/hijabs" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Hijab
              </Link>
              <Link href="/it/category/modest-skirt-sets" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Gonne
              </Link>
              <Link href="/it/category/modest-dresses" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Abiti
              </Link>
              <Link href="/it/category/burkini" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Burkini
              </Link>
              <Link href="/it/category/modest-sportswear" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Sport
              </Link>
              <Link href="/it/category/modest-evening-dresses" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Sera
              </Link>
              <Link href="/it/category/modest-pants-sets" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Pantaloni
              </Link>
              <Link href="/it/category/prayer-clothes" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Preghiera
              </Link>
              <Link href="/it/about-us" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Chi Siamo
              </Link>
              <Link href="/it/contact" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Contatti
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      {children}

      {/* Footer */}
      <footer className="footer" style={{
        background: '#000',
        color: 'white',
        padding: '60px 0 20px',
        borderTop: '4px solid #ff5a00'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="footer-top" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '30px',
            marginBottom: '40px',
            paddingBottom: '30px',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>
            <div className="footer-logo">
              <h2 style={{ fontSize: '28px', color: 'white', marginBottom: '10px' }}>Hijab Fashion Mall</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', maxWidth: '300px' }}>
                La Tua Fonte All'Ingrosso Affidabile per Abbigliamento Hijab Turco Premium
              </p>
            </div>
            <div className="footer-stats" style={{ display: 'flex', gap: '30px' }}>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <span className="stat-number" style={{ display: 'block', fontSize: '28px', fontWeight: 700, color: '#ff5a00' }}>250+</span>
                <span className="stat-label" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Marche</span>
              </div>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <span className="stat-number" style={{ display: 'block', fontSize: '28px', fontWeight: 700, color: '#ff5a00' }}>50+</span>
                <span className="stat-label" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Paesi</span>
              </div>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <span className="stat-number" style={{ display: 'block', fontSize: '28px', fontWeight: 700, color: '#ff5a00' }}>5000+</span>
                <span className="stat-label" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Prodotti</span>
              </div>
            </div>
          </div>

          <div className="footer-trust" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '40px',
            padding: '20px',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '50px'
          }}>
            <div className="trust-badges" style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaTruck style={{ color: '#ff5a00' }} /> Spedizione Veloce</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaLock style={{ color: '#ff5a00' }} /> Pagamento Sicuro</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaCheckCircle style={{ color: '#ff5a00' }} /> 100% Originale</span>
            </div>
            <div className="footer-social" style={{ display: 'flex', gap: '15px' }}>
              <a href="https://facebook.com/hijabfashionmall" target="_blank" rel="noopener noreferrer" aria-label="Seguici su Facebook (si apre in una nuova scheda)"><FaFacebookF /></a>
              <a href="https://instagram.com/hijabfashionmall" target="_blank" rel="noopener noreferrer" aria-label="Seguici su Instagram (si apre in una nuova scheda)"><FaInstagram /></a>
              <a href="https://youtube.com/@hijabfashionmall" target="_blank" rel="noopener noreferrer" aria-label="Iscriviti al nostro canale YouTube (si apre in una nuova scheda)"><FaYoutube /></a>
            </div>
          </div>

          {/* Footer Channels */}
          <div className="footer-channels-simple" style={{ margin: '30px 0 20px', padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
              <div className="simple-channels" style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                <a href="https://whatsapp.com/channel/0029VatIrfWId7nGgsYAFQ1G" className="simple-channel whatsapp-simple" target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '12px 25px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'transform 0.3s',
                  minWidth: '280px',
                  background: '#25d366'
                }} aria-label="Unisciti al nostro canale WhatsApp (si apre in una nuova scheda)">
                  <FaWhatsapp size={20} />
                  <span>Unisciti al Canale WhatsApp</span>
                  <small style={{ fontSize: '12px', opacity: 0.8, marginLeft: 'auto' }}>1.500+ membri</small>
                </a>
                <a href="https://t.me/hijabfashionmall" className="simple-channel telegram-simple" target="_blank" rel="noopener noreferrer" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px',
                  padding: '12px 25px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'transform 0.3s',
                  minWidth: '280px',
                  background: '#0088cc'
                }} aria-label="Unisciti al nostro canale Telegram (si apre in una nuova scheda)">
                  <FaTelegramPlane size={20} />
                  <span>Unisciti al Canale Telegram</span>
                  <small style={{ fontSize: '12px', opacity: 0.8, marginLeft: 'auto' }}>11.000+ membri</small>
                </a>
              </div>
            </div>
          </div>

          {/* Policies */}
          <div className="footer-policies" style={{
            textAlign: 'center',
            marginBottom: '15px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            fontSize: '13px'
          }}>
            <a href="/it/refund-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', margin: '0 5px' }}>Politica di Rimborso</a>
            <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 2px' }}> | </span>
            <a href="/it/terms-conditions" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', margin: '0 5px' }}>Termini e Condizioni</a>
            <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 2px' }}> | </span>
            <a href="/it/privacy-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', margin: '0 5px' }}>Politica sulla Privacy</a>
            <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 2px' }}> | </span>
            <a href="/it/shipping-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', margin: '0 5px' }}>Politica di Spedizione</a>
          </div>

          <div className="footer-copyright" style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '12px',
            marginTop: '10px',
            paddingBottom: '10px'
          }}>
            <p>© 2026 Hijab Fashion Mall. Tutti i diritti riservati. Progettato per i rivenditori di moda modesta di tutto il mondo.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/905519522448?text=Ciao%2C%20ho%20una%20domanda%20sui%20vostri%20prodotti" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          background: '#25d366',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '30px',
          boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)',
          zIndex: 9999,
          transition: 'all 0.3s',
          textDecoration: 'none'
        }}
        aria-label="Contattaci su WhatsApp (si apre in una nuova scheda)"
      >
        <FaWhatsapp size={30} />
      </a>

      {/* Back to Top Button */}
      <button 
        id="backToTop" 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '30px',
          left: '30px',
          background: '#ff5a00',
          color: 'white',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '24px',
          boxShadow: '0 4px 20px rgba(255, 90, 0, 0.3)',
          zIndex: 9998,
          transition: 'all 0.3s',
          opacity: 0,
          visibility: 'hidden'
        }}
        aria-label="Torna all'inizio"
      >
        <FaArrowUp size={24} />
      </button>
    </>
  )
}