'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { 
  FaWhatsapp, 
  FaTelegramPlane, 
  FaBars, 
  FaTimes, 
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaCheckCircle,
  FaLock,
  FaTruck
} from 'react-icons/fa'

export default function ClientLayoutTr({ children }: { children: React.ReactNode }) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

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

        /* ========== Hide hamburger button on desktop ========== */
        @media (min-width: 769px) {
          .main-header .mobile-menu-btn {
            display: none !important;
          }
        }

        /* ========== MOBILE STYLES ========== */
        @media (max-width: 768px) {
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
        }

        @media (max-width: 480px) {
          .main-header .logo h1 {
            font-size: 22px !important;
          }
          
          .main-header .logo h1 span {
            font-size: 14px !important;
          }
        }
      `}</style>

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
        aria-label="Mobil navigasyon menüsü"
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
          <h3 style={{ fontSize: '20px', color: '#000' }}>Menü</h3>
          <button 
            onClick={() => setIsMobileNavOpen(false)}
            style={{ fontSize: '24px', cursor: 'pointer', color: '#555', background: 'none', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            aria-label="Menüyü kapat"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div className="mobile-nav-links" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <Link href="/tr" style={{ color: '#000', textDecoration: 'none', fontSize: '16px', fontWeight: 500, padding: '12px 0', borderBottom: '1px solid #eee' }}>
            Ana Sayfa
          </Link>
          <Link href="/tr/katalog" style={{ color: '#000', textDecoration: 'none', fontSize: '16px', fontWeight: 500, padding: '12px 0', borderBottom: '1px solid #eee' }}>
            Katalog
          </Link>
          
          <div style={{ fontWeight: 700, color: '#ff5a00', marginTop: '10px', padding: '12px 0' }}>
            Kategoriler
          </div>
          <Link href="/tr/kategori/abayas" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Abaya
          </Link>
          <Link href="/tr/kategori/hijabs" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Hijab
          </Link>
          <Link href="/tr/kategori/modest-skirt-sets" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Etek Takımları
          </Link>
          <Link href="/tr/kategori/modest-dresses" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Tesettür Elbiseler
          </Link>
          <Link href="/tr/kategori/burkini" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Burkini & Mayo
          </Link>
          <Link href="/tr/kategori/modest-sportswear" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Spor Giyim
          </Link>
          <Link href="/tr/kategori/modest-evening-dresses" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Abiye Elbiseler
          </Link>
          <Link href="/tr/kategori/modest-pants-sets" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Pantolon Takımları
          </Link>
          <Link href="/tr/kategori/prayer-clothes" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            Namaz Elbiseleri
          </Link>
          
          <Link href="/tr/hakkimizda" style={{ color: '#000', textDecoration: 'none', fontSize: '16px', fontWeight: 500, padding: '12px 0', borderBottom: '1px solid #eee' }}>
            Hakkımızda
          </Link>
          <Link href="/tr/iletisim" style={{ color: '#000', textDecoration: 'none', fontSize: '16px', fontWeight: 500, padding: '12px 0', borderBottom: '1px solid #eee' }}>
            İletişim
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
          <p><span style={{ color: '#ff5a00', fontWeight: 600 }}>Premium Toptan Türk Tesettür Giyim</span> & Dünya Çapında Kargo. Zarafet Kapınıza Teslim</p>
        </div>
      </div>

      {/* Main Header - فقط اللوجو ودالة اللغة */}
      <header className="main-header" style={{
        background: 'white',
        boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
      }}>
        {/* Top row: Hamburger + Logo + Language */}
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
            aria-label="Menüyü aç"
          >
            <FaBars size={24} />
          </button>

          {/* Logo */}
          <div className="logo" style={{ flexShrink: 0 }}>
            <Link href="/tr" style={{ textDecoration: 'none', color: 'inherit' }} aria-label="Hijab Fashion Mall - Ana Sayfa">
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
                }}>Toptan</span>
              </h1>
            </Link>
          </div>

          {/* Language Selector Only (no currency) */}
          <div className="top-actions" style={{ display: 'flex', gap: '12px', alignItems: 'center', flexShrink: 0 }}>
            <div className="lang-selector" style={{
              display: 'flex',
              gap: '5px',
              background: '#f5f5f5',
              padding: '6px 10px',
              borderRadius: '40px'
            }}>
              <label htmlFor="languageSelect" style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0,0,0,0)', border: 0 }}>
                Dil seçin
              </label>
              <select 
                id="languageSelect"
                defaultValue="tr"
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
                  const pathWithoutLang = currentPath.replace(/^\/tr/, '') || '/'
                  
                  if (lang === 'en') {
                    window.location.href = `/en${pathWithoutLang}`
                  } else if (lang === 'ar') {
                    window.location.href = `/ar${pathWithoutLang}`
                  } else if (lang === 'fr') {
                    window.location.href = `/fr${pathWithoutLang}`
                  } else if (lang === 'de') {
                    window.location.href = `/de${pathWithoutLang}`
                  } else if (lang === 'it') {
                    window.location.href = `/it${pathWithoutLang}`
                  } else if (lang === 'es') {
                    window.location.href = `/es${pathWithoutLang}`
                  }
                }}
                aria-label="Dil seçin"
              >
                <option value="tr">🇹🇷 Türkçe</option>
                <option value="en">🇬🇧 English</option>
                <option value="ar">🇸🇦 العربية</option>
                <option value="fr">🇫🇷 Français</option>
                <option value="de">🇩🇪 Deutsch</option>
                <option value="it">🇮🇹 Italiano</option>
                <option value="es">🇪🇸 Español</option>
              </select>
            </div>
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
                Premium Türk Tesettür Giyim İçin Güvenilir Toptan Kaynağınız
              </p>
            </div>
            <div className="footer-stats" style={{ display: 'flex', gap: '30px' }}>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <span className="stat-number" style={{ display: 'block', fontSize: '28px', fontWeight: 700, color: '#ff5a00' }}>250+</span>
                <span className="stat-label" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Marka</span>
              </div>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <span className="stat-number" style={{ display: 'block', fontSize: '28px', fontWeight: 700, color: '#ff5a00' }}>50+</span>
                <span className="stat-label" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Ülke</span>
              </div>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <span className="stat-number" style={{ display: 'block', fontSize: '28px', fontWeight: 700, color: '#ff5a00' }}>5000+</span>
                <span className="stat-label" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>Ürün</span>
              </div>
            </div>
          </div>

          <div className="footer-trust" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '40px',
            padding: '20px',
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '50px'
          }}>
            <div className="trust-badges" style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaTruck style={{ color: '#ff5a00' }} /> Hızlı Kargo</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaLock style={{ color: '#ff5a00' }} /> Güvenli Ödeme</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><FaCheckCircle style={{ color: '#ff5a00' }} /> %100 Orijinal</span>
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
                }} aria-label="WhatsApp kanalımıza katılın (yeni sekmede açılır)">
                  <FaWhatsapp size={20} />
                  <span>WhatsApp Kanalına Katıl</span>
                  <small style={{ fontSize: '12px', opacity: 0.8, marginLeft: 'auto' }}>1.500+ üye</small>
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
                }} aria-label="Telegram kanalımıza katılın (yeni sekmede açılır)">
                  <FaTelegramPlane size={20} />
                  <span>Telegram Kanalına Katıl</span>
                  <small style={{ fontSize: '12px', opacity: 0.8, marginLeft: 'auto' }}>11.000+ üye</small>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-copyright" style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '12px',
            marginTop: '20px',
            paddingBottom: '10px'
          }}>
            <p>© 2026 Hijab Fashion Mall. Tüm hakları saklıdır. Dünyanın dört bir yanındaki tesettür moda perakendecileri için tasarlanmıştır.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/905519522448?text=Merhaba%2C%20%C3%BCr%C3%BCnleriniz%20hakk%C4%B1nda%20bir%20soru%C5%9Fum%20var" 
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
        aria-label="WhatsApp üzerinden bize ulaşın (yeni sekmede açılır)"
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
        aria-label="Yukarı çık"
      >
        <FaArrowUp size={24} />
      </button>
    </>
  )
}