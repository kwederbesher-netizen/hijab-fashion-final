'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [cart, setCart] = useState<any[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const openCart = () => setIsCartOpen(true)
  const closeCart = () => setIsCartOpen(false)
  const openMobileNav = () => setIsMobileNavOpen(true)
  const closeMobileNav = () => setIsMobileNavOpen(false)

  const addToCart = (product: any) => {
    setCart(prev => [...prev, product])
    openCart()
  }

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index))
  }

  const sendToWhatsApp = () => {
    if (cart.length === 0) {
      alert('Your cart is empty')
      return
    }
    let message = "Hello, I would like to inquire about the following items:\n\n"
    cart.forEach((item, index) => {
      const name = item.name_en || item.name || 'Product'
      let price = item.price_usd || item.price || 0
      if (typeof price === 'string') price = parseFloat(price.replace(',', '.'))
      message += `${index + 1}. ${name} - $${price.toFixed(2)}\n`
    })
    message += `\nTotal items: ${cart.length}`
    window.open(`https://wa.me/905519522448?text=${encodeURIComponent(message)}`, '_blank')
  }

  const downloadPDF = () => {
    if (cart.length === 0) {
      alert('Your cart is empty')
      return
    }
    let content = "Hijab Fashion Mall - Inquiry Cart\n\n"
    cart.forEach((item, index) => {
      const name = item.name_en || item.name || 'Product'
      let price = item.price_usd || item.price || 0
      if (typeof price === 'string') price = parseFloat(price.replace(',', '.'))
      content += `${index + 1}. ${name} - $${price.toFixed(2)}\n`
    })
    content += `\nTotal items: ${cart.length}\n\nThank you for your interest!`
    
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'hijab-inquiry.txt'
    a.click()
  }

  return (
    <>
      {/* Overlay for cart */}
      <div 
        className={`overlay ${isCartOpen ? 'active' : ''}`} 
        onClick={closeCart}
      ></div>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Your Inquiry Cart</h3>
          <span className="close-cart" onClick={closeCart}>&times;</span>
        </div>
        <div className="cart-items" id="cartItems">
          {cart.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--medium-gray)' }}>Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <div className="cart-item-image">
                  <img 
                    src={item.imageUrl || item.image || '/images/default.webp'} 
                    alt={item.name_en || item.name || 'Product'} 
                    width={80} 
                    height={80} 
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/default.webp'
                    }}
                  />
                </div>
                <div className="cart-item-details">
                  <div className="cart-item-title">{item.name_en || item.name || 'Product'}</div>
                  <div className="cart-item-price" data-usd-price={item.price_usd || item.price || 0}>
                    ${(item.price_usd || item.price || 0).toFixed(2)}
                  </div>
                  <div className="cart-item-remove" onClick={() => removeFromCart(index)}>Remove</div>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <div className="cart-total">
            <span>Total Items:</span>
            <span>{cart.length}</span>
          </div>
          <div className="cart-actions">
            <a 
              href="#" 
              className="cart-whatsapp" 
              onClick={(e) => {
                e.preventDefault()
                sendToWhatsApp()
              }} 
              aria-label="Send inquiry via WhatsApp"
            >
              <i className="fab fa-whatsapp"></i> Send via WhatsApp
            </a>
            <button className="cart-pdf" onClick={downloadPDF}>
              <i className="fas fa-file-pdf"></i> PDF
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`mobile-nav-overlay ${isMobileNavOpen ? 'active' : ''}`} 
        onClick={closeMobileNav}
      ></div>
      <div className={`mobile-nav ${isMobileNavOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <h3>Menu</h3>
          <span className="close-mobile-nav" onClick={closeMobileNav}>&times;</span>
        </div>
        <div className="mobile-nav-links">
          <Link href="/" onClick={closeMobileNav}>Home</Link>
          <Link href="/catalog" onClick={closeMobileNav}>Catalog</Link>
          
          <Link href="#" className="mobile-nav-category" onClick={(e) => e.preventDefault()}>Categories</Link>
          <Link href="/abayas" className="mobile-nav-sub" onClick={closeMobileNav}>Abayas</Link>
          <Link href="/modest-dresses" className="mobile-nav-sub" onClick={closeMobileNav}>Modest Dresses</Link>
          <Link href="/modest-skirt-sets" className="mobile-nav-sub" onClick={closeMobileNav}>Modest Skirt Sets</Link>
          <Link href="/modest-evening-dresses" className="mobile-nav-sub" onClick={closeMobileNav}>Modest Evening Dresses</Link>
          <Link href="/modest-pants-sets" className="mobile-nav-sub" onClick={closeMobileNav}>Modest Pants Sets</Link>
          <Link href="/hijab" className="mobile-nav-sub" onClick={closeMobileNav}>Hijab</Link>
          <Link href="/prayer-clothes" className="mobile-nav-sub" onClick={closeMobileNav}>Prayer Clothes</Link>
          <Link href="/modest-sportswear" className="mobile-nav-sub" onClick={closeMobileNav}>Modest Sportswear</Link>
          <Link href="/burkini" className="mobile-nav-sub" onClick={closeMobileNav}>Burkini</Link>
          
          <Link href="/about" onClick={closeMobileNav}>About Us</Link>
          <Link href="/blog" onClick={closeMobileNav}>Blog</Link>
          <Link href="/contact" onClick={closeMobileNav}>Contact</Link>
        </div>
      </div>

      {/* Top Header */}
      <div className="top-header">
        <div className="container">
          <p><span>Wholesale Premium Turkish Hijab Wear</span> & Worldwide Shipping. Elegance Delivered to Your Door</p>
        </div>
      </div>

      {/* Main Header */}
      <header className="main-header">
        <div className="container">
          <div className="logo">
            <Link href="/">
              <h1>Hijab Fashion Mall</h1>
              <span>Wholesale</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link href="/">Home</Link>
            <Link href="/catalog">Catalog</Link>
            
            <div className="dropdown">
              <button className="dropdown-btn">
                Categories <i className="fas fa-chevron-down"></i>
              </button>
              <div className="dropdown-content">
                <Link href="/abayas">Abayas</Link>
                <Link href="/modest-dresses">Modest Dresses</Link>
                <Link href="/modest-skirt-sets">Modest Skirt Sets</Link>
                <Link href="/modest-evening-dresses">Modest Evening Dresses</Link>
                <Link href="/modest-pants-sets">Modest Pants Sets</Link>
                <Link href="/hijab">Hijab</Link>
                <Link href="/prayer-clothes">Prayer Clothes</Link>
                <Link href="/modest-sportswear">Modest Sportswear</Link>
                <Link href="/burkini">Burkini</Link>
              </div>
            </div>
            
            <Link href="/about">About Us</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={openMobileNav}>
            <i className="fas fa-bars"></i>
          </button>
          
          <div className="top-actions">
            <div className="lang-currency">
              <select id="languageSelect" defaultValue="en">
                <option value="en">🇬🇧 English</option>
                <option value="ar">🇸🇦 العربية</option>
                <option value="fr">🇫🇷 Français</option>
                <option value="de">🇩🇪 Deutsch</option>
                <option value="tr">🇹🇷 Türkçe</option>
                <option value="es">🇪🇸 Español</option>
                <option value="it">🇮🇹 Italiano</option>
              </select>
              <select id="currencySelect" defaultValue="USD">
                <option value="USD">🇺🇸 USD</option>
                <option value="EUR">🇪🇺 EUR</option>
                <option value="TRY">🇹🇷 TRY</option>
                <option value="SAR">🇸🇦 SAR</option>
                <option value="GBP">🇬🇧 GBP</option>
                <option value="AED">🇦🇪 AED</option>
              </select>
            </div>
            <div className="cart-icon" onClick={openCart}>
              <i className="fas fa-shopping-cart"></i>
              <span className="cart-count">{cart.length}</span>
            </div>
          </div>
        </div>
      </header>

      {children}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-logo">
              <h2>Hijab Fashion Mall</h2>
              <p>Your Trusted Wholesale Source for Premium Turkish Hijab Wear</p>
            </div>
            <div className="footer-stats">
              <div className="stat-item">
                <span className="stat-number">250+</span>
                <span className="stat-label">Fashion Brands</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Countries</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5000+</span>
                <span className="stat-label">Products</span>
              </div>
            </div>
          </div>

          <div className="footer-trust">
            <div className="trust-badges">
              <span><i className="fas fa-truck"></i> Fast Shipping</span>
              <span><i className="fas fa-lock"></i> Secure Payment</span>
              <span><i className="fas fa-check-circle"></i> 100% Original</span>
            </div>
            <div className="footer-social">
              <a href="https://facebook.com/hijabfashionmall" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="https://instagram.com/hijabfashionmall" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://youtube.com/@hijabfashionmall" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-country-guides">
            <div className="country-section">
              <h4><i className="fas fa-globe-americas"></i> Americas & Oceania</h4>
              <div className="country-list">
                <Link href="/wholesale-usa">USA</Link>
                <Link href="/wholesale-canada">Canada</Link>
                <Link href="/wholesale-australia">Australia</Link>
                <Link href="/wholesale-brazil">Brazil</Link>
                <Link href="/wholesale-mexico">Mexico</Link>
                <Link href="#" className="more-link" onClick={(e) => e.preventDefault()}>+5 more</Link>
              </div>
            </div>
            
            <div className="country-section">
              <h4><i className="fas fa-globe-europe"></i> Europe</h4>
              <div className="country-list">
                <Link href="/wholesale-uk">UK</Link>
                <Link href="/wholesale-germany">Germany</Link>
                <Link href="/wholesale-france">France</Link>
                <Link href="/wholesale-italy">Italy</Link>
                <Link href="/wholesale-spain">Spain</Link>
                <Link href="#" className="more-link" onClick={(e) => e.preventDefault()}>+15 more</Link>
              </div>
            </div>
            
            <div className="country-section">
              <h4><i className="fas fa-globe-asia"></i> Middle East & Africa</h4>
              <div className="country-list">
                <Link href="/wholesale-saudiarabia">Saudi Arabia</Link>
                <Link href="/wholesale-uae">UAE</Link>
                <Link href="/wholesale-kuwait">Kuwait</Link>
                <Link href="/wholesale-qatar">Qatar</Link>
                <Link href="/wholesale-bahrain">Bahrain</Link>
                <Link href="#" className="more-link" onClick={(e) => e.preventDefault()}>+7 more</Link>
              </div>
            </div>
            
            <div className="country-section map-section">
              <h4><i className="fas fa-map-marked-alt"></i> Worldwide Shipping</h4>
              <p>We ship to 50+ countries worldwide. Fast & reliable delivery.</p>
              <div className="shipping-badges">
                <span><i className="fas fa-plane"></i> Express</span>
                <span><i className="fas fa-box"></i> Door-to-door</span>
                <span><i className="fas fa-clock"></i> 3-7 days</span>
              </div>
            </div>
          </div>

          <div className="footer-channels-simple">
            <div className="container">
              <div className="simple-channels">
                <a href="https://whatsapp.com/channel/example" className="simple-channel whatsapp-simple" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i>
                  <span>Join WhatsApp Channel</span>
                  <small>1,500+ members</small>
                </a>
                <a href="https://t.me/hijabfashionmall" className="simple-channel telegram-simple" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-telegram-plane"></i>
                  <span>Join Telegram Channel</span>
                  <small>11,000+ members</small>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-policies">
            <Link href="/refund-policy">Refund Policy</Link>
            <span> | </span>
            <Link href="/terms-conditions">Terms & Conditions</Link>
            <span> | </span>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span> | </span>
            <Link href="/shipping-policy">Shipping Policy</Link>
          </div>

          <div className="footer-copyright">
            <p>© 2026 Hijab Fashion Mall. All rights reserved. Designed for global modest fashion retailers.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a href="https://wa.me/905519522448?text=Hello%2C%20I%20have%20a%20question%20about%20your%20products" 
         className="whatsapp-float" 
         target="_blank" 
         rel="noopener noreferrer"
         aria-label="Chat with us on WhatsApp">
        <i className="fab fa-whatsapp"></i>
      </a>

      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        id="backToTop" 
        className="back-to-top" 
        title="Back to Top" 
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  )
}