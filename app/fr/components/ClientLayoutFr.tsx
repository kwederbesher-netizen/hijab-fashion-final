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
      window.location.href = `/fr/catalog?search=${encodeURIComponent(searchQuery.trim())}`
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
        console.error('Erreur lors de l\'analyse du panier:', e)
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
          console.error('Erreur lors de l\'analyse du panier:', e)
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
      alert('⚠️ Le panier est vide - Ajoutez des produits d\'abord')
      return
    }
    
    let message = "*Hijab Fashion Mall - Demande de devis*\n\n"
    message += "*Détails de la commande:*\n"
    message += "━━━━━━━━━━━━━━━━━━━━\n\n"
    
    cart.forEach((item, index) => {
      const name = item.name_fr || item.name_en || item.name || 'Produit'
      const code = item.product_code || item._id?.slice(-8) || 'N/A'
      const quantity = item.quantity || 1
      
      message += `*${index + 1}. ${name}*\n`
      message += `📦 Code: \`${code}\`\n`
      message += `🔢 Quantité: ${quantity} ${quantity > 1 ? 'pièces' : 'pièce'}\n\n`
    })
    
    const totalPieces = getTotalPieces()
    
    message += "━━━━━━━━━━━━━━━━━━━━\n"
    message += `*📊 Résumé:*\n`
    message += `• Total d'articles: ${cart.length}\n`
    message += `• Total de pièces: ${totalPieces}\n\n`
    message += `Merci de votre intérêt! Veuillez confirmer la disponibilité.`
    
    window.open(`https://wa.me/905519522448?text=${encodeURIComponent(message)}`, '_blank')
  }

  const downloadPDF = () => {
    if (cart.length === 0) {
      alert('⚠️ Le panier est vide - Ajoutez des produits d\'abord')
      return
    }
    
    let content = "═══════════════════════════════════\n"
    content += "      HIJAB FASHION MALL\n"
    content += "         PANIER DE DEMANDE\n"
    content += "═══════════════════════════════════\n\n"
    
    cart.forEach((item, index) => {
      const name = item.name_fr || item.name_en || item.name || 'Produit'
      const code = item.product_code || item._id?.slice(-8) || 'N/A'
      const quantity = item.quantity || 1
      
      content += `${index + 1}. ${name}\n`
      content += `   Code: ${code}\n`
      content += `   Quantité: ${quantity} ${quantity > 1 ? 'pièces' : 'pièce'}\n\n`
    })
    
    const totalPieces = getTotalPieces()
    
    content += "───────────────────────────────────\n"
    content += `RÉSUMÉ:\n`
    content += `• Total d'articles: ${cart.length}\n`
    content += `• Total de pièces: ${totalPieces}\n\n`
    content += "Merci de votre intérêt!\n"
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
        aria-label="Panier d'achat"
        aria-modal="true"
      >
        <div className="cart-header" style={{
          padding: '25px',
          borderBottom: '1px solid #eee',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h3 style={{ fontSize: '20px', color: '#000' }}>Panier de demande</h3>
          <button 
            onClick={() => setIsCartOpen(false)}
            style={{ fontSize: '24px', cursor: 'pointer', color: '#555', background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Fermer le panier"
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
              Votre panier est vide
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
                      alt={item.name_fr || 'Produit'}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/default.webp'
                      }}
                    />
                  </div>
                  <div className="cart-item-details" style={{ flex: 1 }}>
                    <div className="cart-item-title" style={{ fontWeight: 600, marginBottom: '5px' }}>
                      {item.name_fr || item.name_en || item.name || 'Produit'}
                    </div>
                    <div className="cart-item-code" style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>
                      Code: {productCode}
                    </div>
                    <div className="cart-item-quantity" style={{ fontSize: '13px', color: '#666', marginBottom: '5px' }}>
                      Quantité: {itemQuantity} {!isRSS && packetSize > 1 ? `(Carton - ${packetSize} pièces)` : 'pièce'}
                    </div>
                    <button 
                      onClick={() => removeFromCart(index)}
                      style={{ color: '#dc2626', cursor: 'pointer', fontSize: '14px', marginTop: '5px', background: 'none', border: 'none' }}
                      aria-label={`Retirer ${item.name_fr || item.name_en || 'Produit'} du panier`}
                    >
                      Retirer
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
            <span>Total d'articles:</span>
            <span style={{ fontWeight: 600 }}>{cart.length}</span>
          </div>
          <div className="cart-total-pieces" style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '20px',
            fontSize: '14px',
            color: '#666'
          }}>
            <span>Total de pièces:</span>
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
              aria-label="Envoyer la demande via WhatsApp"
            >
              <FaWhatsapp size={18} /> Envoyer via WhatsApp
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
              aria-label="Exporter le panier en fichier texte"
            >
              <FaFileAlt size={18} /> Exporter
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
        aria-label="Menu de navigation mobile"
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
            aria-label="Fermer le menu"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div className="mobile-nav-links" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <Link href="/fr" style={{ color: '#000', textDecoration: 'none', fontSize: '16px', fontWeight: 500, padding: '12px 0', borderBottom: '1px solid #eee' }}>
            Accueil
          </Link>
          <Link href="/fr/catalog" style={{ color: '#000', textDecoration: 'none', fontSize: '16px', fontWeight: 500, padding: '12px 0', borderBottom: '1px solid #eee' }}>
            Catalogue
          </Link>
          
          <div style={{ fontWeight: 700, color: '#ff5a00', marginTop: '10px', padding: '12px 0' }}>
            Catégories
          </div>
          <Link href="/fr/category/abayas" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Abayas
          </Link>
          <Link href="/fr/category/hijabs" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Hijabs
          </Link>
          <Link href="/fr/category/modest-skirt-sets" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Ensembles Jupes
          </Link>
          <Link href="/fr/category/modest-dresses" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Robes Pudeur
          </Link>
          <Link href="/fr/category/burkini" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Burkini & Swimwear
          </Link>
          <Link href="/fr/category/modest-sportswear" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Tenues Sportives
          </Link>
          <Link href="/fr/category/modest-evening-dresses" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Robes de Soirée
          </Link>
          <Link href="/fr/category/modest-pants-sets" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Ensembles Pantalons
          </Link>
          <Link href="/fr/category/prayer-clothes" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Tenues de Prière
          </Link>
          
          <Link href="/fr/about-us" style={{ color: '#000', textDecoration: 'none', fontSize: '16px', fontWeight: 500, padding: '12px 0', borderBottom: '1px solid #eee' }}>
            À propos
          </Link>
          <Link href="/fr/contact" style={{ color: '#000', textDecoration: 'none', fontSize: '16px', fontWeight: 500, padding: '12px 0', borderBottom: '1px solid #eee' }}>
            Contact
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
          <p><span style={{ color: '#ff5a00', fontWeight: 600 }}>Vêtements Hijab Turcs Premium en Gros</span> & Expédition Mondiale. Élégance Livrée à Votre Porte</p>
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
            aria-label="Ouvrir le menu"
          >
            <FaBars size={24} />
          </button>

          {/* Logo */}
          <div className="logo" style={{ flexShrink: 0 }}>
            <Link href="/fr" style={{ textDecoration: 'none', color: 'inherit' }} aria-label="Hijab Fashion Mall - Accueil">
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
                }}>Gros</span>
              </h1>
            </Link>
          </div>

          {/* Search Bar - shows on desktop only (in top row) */}
          <div className="search-bar" style={{
            flex: 1,
            maxWidth: '500px',
            margin: '0 20px'
          }}>
            <form onSubmit={handleSearch} style={{ position: 'relative', width: '100%' }} role="search" aria-label="Recherche sur le site">
              <input
                id="searchInput"
                ref={searchInputRef}
                type="text"
                placeholder="Rechercher des produits... (nom, code, couleur)"
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
                aria-label="Rechercher"
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
                Sélectionner la langue
              </label>
              <select 
                id="languageSelect"
                defaultValue="fr"
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
                  const pathWithoutLang = currentPath.replace(/^\/fr/, '') || '/'
                  
                  if (lang === 'en') {
                    window.location.href = `/en${pathWithoutLang}`
                  } else if (lang === 'ar') {
                    window.location.href = `/ar${pathWithoutLang}`
                  } else if (lang === 'de') {
                    window.location.href = `/de${pathWithoutLang}`
                  } else if (lang === 'tr') {
                    window.location.href = `/tr${pathWithoutLang}`
                  } else if (lang === 'it') {
                    window.location.href = `/it${pathWithoutLang}`
                  } else if (lang === 'es') {
                    window.location.href = `/es${pathWithoutLang}`
                  }
                }}
                aria-label="Sélectionner la langue"
              >
                <option value="fr">🇫🇷 Français</option>
                <option value="en">🇬🇧 English</option>
                <option value="ar">🇸🇦 العربية</option>
                <option value="de">🇩🇪 Deutsch</option>
                <option value="tr">🇹🇷 Türkçe</option>
                <option value="it">🇮🇹 Italiano</option>
                <option value="es">🇪🇸 Español</option>
              </select>
              <label htmlFor="currencySelect" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
                Sélectionner la devise
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
                aria-label="Sélectionner la devise"
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
              aria-label={`Panier d'achat avec ${cartCount} articles`}
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
            <form onSubmit={handleSearch} style={{ position: 'relative', width: '100%' }} role="search" aria-label="Recherche sur le site">
              <input
                type="text"
                placeholder="Rechercher des produits... (nom, code, couleur)"
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
                aria-label="Rechercher"
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
            aria-label={`Panier d'achat avec ${cartCount} articles`}
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
            }} aria-label="Navigation principale">
              <Link href="/fr" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Accueil
              </Link>
              <Link href="/fr/catalog" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Catalogue
              </Link>
              <Link href="/fr/category/abayas" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Abayas
              </Link>
              <Link href="/fr/category/hijabs" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Hijabs
              </Link>
              <Link href="/fr/category/modest-skirt-sets" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Jupes
              </Link>
              <Link href="/fr/category/modest-dresses" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Robes
              </Link>
              <Link href="/fr/category/burkini" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Burkini
              </Link>
              <Link href="/fr/category/modest-sportswear" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Sport
              </Link>
              <Link href="/fr/category/modest-evening-dresses" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Soirée
              </Link>
              <Link href="/fr/category/modest-pants-sets" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Pantalons
              </Link>
              <Link href="/fr/category/prayer-clothes" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Prière
              </Link>
              <Link href="/fr/about-us" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                À propos
              </Link>
              <Link href="/fr/contact" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '14px', whiteSpace: 'nowrap' }}>
                Contact
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
                Votre Source de Gros Fiable pour les Vêtements Hijab Turcs Premium
              </p>
            </div>
            <div className="footer-stats" style={{ display: 'flex', gap: '30px' }}>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <span className="stat-number" style={{ display: 'block', fontSize: '28px', fontWeight: 700, color: '#ff5a00' }}>250+</span>
                <span className="stat-label" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Marques</span>
              </div>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <span className="stat-number" style={{ display: 'block', fontSize: '28px', fontWeight: 700, color: '#ff5a00' }}>50+</span>
                <span className="stat-label" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Pays</span>
              </div>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <span className="stat-number" style={{ display: 'block', fontSize: '28px', fontWeight: 700, color: '#ff5a00' }}>5000+</span>
                <span className="stat-label" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Produits</span>
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
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaTruck style={{ color: '#ff5a00' }} /> Livraison Rapide</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaLock style={{ color: '#ff5a00' }} /> Paiement Sécurisé</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaCheckCircle style={{ color: '#ff5a00' }} /> 100% Authentique</span>
            </div>
            <div className="footer-social" style={{ display: 'flex', gap: '15px' }}>
              <a href="https://facebook.com/hijabfashionmall" target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur Facebook (ouvre un nouvel onglet)"><FaFacebookF /></a>
              <a href="https://instagram.com/hijabfashionmall" target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur Instagram (ouvre un nouvel onglet)"><FaInstagram /></a>
              <a href="https://youtube.com/@hijabfashionmall" target="_blank" rel="noopener noreferrer" aria-label="Abonnez-vous à notre chaîne YouTube (ouvre un nouvel onglet)"><FaYoutube /></a>
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
                }} aria-label="Rejoignez notre chaîne WhatsApp (ouvre un nouvel onglet)">
                  <FaWhatsapp size={20} />
                  <span>Rejoindre la chaîne WhatsApp</span>
                  <small style={{ fontSize: '12px', opacity: 0.8, marginLeft: 'auto' }}>1 500+ membres</small>
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
                }} aria-label="Rejoignez notre chaîne Telegram (ouvre un nouvel onglet)">
                  <FaTelegramPlane size={20} />
                  <span>Rejoindre la chaîne Telegram</span>
                  <small style={{ fontSize: '12px', opacity: 0.8, marginLeft: 'auto' }}>11 000+ membres</small>
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
            <a href="/fr/refund-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', margin: '0 5px' }}>Politique de remboursement</a>
            <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 2px' }}> | </span>
            <a href="/fr/terms-conditions" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', margin: '0 5px' }}>Conditions générales</a>
            <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 2px' }}> | </span>
            <a href="/fr/privacy-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', margin: '0 5px' }}>Politique de confidentialité</a>
            <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 2px' }}> | </span>
            <a href="/fr/shipping-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', margin: '0 5px' }}>Politique d'expédition</a>
          </div>

          <div className="footer-copyright" style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '12px',
            marginTop: '10px',
            paddingBottom: '10px'
          }}>
            <p>© 2026 Hijab Fashion Mall. Tous droits réservés. Conçu pour les détaillants de mode modeste du monde entier.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/905519522448?text=Bonjour%2C%20j%27ai%20une%20question%20sur%20vos%20produits" 
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
        aria-label="Contactez-nous sur WhatsApp (ouvre un nouvel onglet)"
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
        aria-label="Retour en haut"
      >
        <FaArrowUp size={24} />
      </button>
    </>
  )
}