// app/ar/components/ClientLayoutAr.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useCurrency } from '@/app/contexts/CurrencyContext'

export default function ClientLayoutAr({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState(0)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [cart, setCart] = useState<any[]>([])
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)
  
  // استخدام Hook العملات
  const { currency, setCurrency, loading: currencyLoading } = useCurrency()

  // دالة البحث
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/ar/catalog?search=${encodeURIComponent(searchQuery.trim())}`
    }
  }

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        setCart(parsedCart)
        // ✅ حساب العدد الإجمالي للقطع
        const totalItems = parsedCart.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0)
        setCartCount(totalItems)
      } catch (e) {
        console.error('Error parsing cart:', e)
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

  // Listen for openCart event
  useEffect(() => {
    const handleOpenCart = () => {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart)
          setCart(parsedCart)
          // ✅ حساب العدد الإجمالي للقطع
          const totalItems = parsedCart.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0)
          setCartCount(totalItems)
        } catch (e) {
          console.error('Error parsing cart:', e)
        }
      }
      setIsCartOpen(true)
    }

    window.addEventListener('openCart', handleOpenCart)
    
    return () => {
      window.removeEventListener('openCart', handleOpenCart)
    }
  }, [])

  // Back to top button
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

  // Remove from cart
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

  // Send to WhatsApp
  const sendToWhatsApp = () => {
    if (cart.length === 0) {
      alert('⚠️ السلة فارغة - أضف منتجات أولاً')
      return
    }
    
    let message = "مرحباً، أود الاستفسار عن المنتجات التالية:\n\n"
    cart.forEach((item, index) => {
      const name = item.name_ar || item.name_en || item.name || 'منتج'
      const code = item.product_code || 'غير متوفر'
      const price = item.price_usd || 0
      const quantity = item.quantity || 1
      const totalPrice = price * quantity
      
      message += `${index + 1}. ${name}\n`
      message += `   الكود: ${code}\n`
      message += `   الكمية: ${quantity} قطعة\n`
      message += `   السعر: $${price.toFixed(2)} × ${quantity} = $${totalPrice.toFixed(2)}\n\n`
    })
    
    const grandTotal = cart.reduce((sum, item) => sum + ((item.price_usd || 0) * (item.quantity || 1)), 0)
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
    
    message += `━━━━━━━━━━━━━━━━━━━━\n`
    message += `📦 إجمالي القطع: ${totalItems}\n`
    message += `💰 الإجمالي: $${grandTotal.toFixed(2)}\n`
    message += `━━━━━━━━━━━━━━━━━━━━\n\n`
    message += `يرجى تأكيد الطلب أو تزويدي بمزيد من المعلومات.`
    
    window.open(`https://wa.me/905519522448?text=${encodeURIComponent(message)}`, '_blank')
  }

  // Download PDF
  const downloadPDF = () => {
    if (cart.length === 0) {
      alert('⚠️ السلة فارغة - أضف منتجات أولاً')
      return
    }
    
    let content = "حجاب فاشون مول - سلة الاستفسار\n"
    content += "=".repeat(50) + "\n\n"
    
    cart.forEach((item, index) => {
      const name = item.name_ar || item.name_en || item.name || 'منتج'
      const code = item.product_code || 'غير متوفر'
      const price = item.price_usd || 0
      const quantity = item.quantity || 1
      const totalPrice = price * quantity
      
      content += `${index + 1}. ${name}\n`
      content += `   الكود: ${code}\n`
      content += `   الكمية: ${quantity} قطعة\n`
      content += `   السعر: $${price.toFixed(2)} × ${quantity} = $${totalPrice.toFixed(2)}\n\n`
    })
    
    const grandTotal = cart.reduce((sum, item) => sum + ((item.price_usd || 0) * (item.quantity || 1)), 0)
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
    
    content += "-".repeat(50) + "\n"
    content += `📦 إجمالي القطع: ${totalItems}\n`
    content += `💰 الإجمالي: $${grandTotal.toFixed(2)}\n`
    content += "-".repeat(50) + "\n\n"
    content += "شكراً لاهتمامك! 😊"
    
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `استفسار-حجاب-فاشون-${new Date().toISOString().slice(0, 10)}.txt`
    a.click()
  }

  return (
    <>
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
      ></div>

      {/* Cart Sidebar */}
      <div 
        className={`cart-sidebar ${isCartOpen ? 'open' : ''}`} 
        style={{
          position: 'fixed',
          top: 0,
          left: isCartOpen ? '0' : '-400px',
          width: '380px',
          height: '100vh',
          background: 'white',
          boxShadow: '5px 0 30px rgba(0,0,0,0.1)',
          zIndex: 2000,
          transition: 'left 0.3s ease',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <div className="cart-header" style={{
          padding: '25px',
          borderBottom: '1px solid #eee',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h3 style={{ fontSize: '20px', color: '#000' }}>سلة الاستفسار</h3>
          <span 
            className="close-cart" 
            onClick={() => setIsCartOpen(false)}
            style={{ fontSize: '24px', cursor: 'pointer', color: '#555' }}
          >&times;</span>
        </div>
        <div className="cart-items" style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px'
        }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 20px', color: '#666' }}>
              السلة فارغة
            </div>
          ) : (
            cart.map((item, index) => {
              const itemQuantity = item.quantity || 1
              const packetSize = item.packetSize || 1
              const isRSS = item.isRSS || false
              const itemTotal = (item.price_usd || 0) * itemQuantity
              const productCode = item.product_code || 'غير متوفر'
              
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
                      src={item.imageUrl || '/images/default.webp'} 
                      alt={item.name_ar || 'منتج'}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/default.webp'
                      }}
                    />
                  </div>
                  <div className="cart-item-details" style={{ flex: 1 }}>
                    <div className="cart-item-title" style={{ fontWeight: 600, marginBottom: '5px' }}>
                      {item.name_ar || item.name_en || 'منتج'}
                    </div>
                    <div className="cart-item-code" style={{ fontSize: '12px', color: '#888', marginBottom: '5px' }}>
                      الكود: {productCode}
                    </div>
                    <div className="cart-item-price" style={{ color: '#ff5a00', fontWeight: 600 }}>
                      ${item.price_usd?.toFixed(2) || '0.00'}
                    </div>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '5px' }}>
                      {!isRSS && packetSize > 1 && (
                        <span>حزمة {packetSize} قطع | </span>
                      )}
                      <span>الكمية: {itemQuantity}</span>
                    </div>
                    <div 
                      className="cart-item-remove" 
                      onClick={() => removeFromCart(index)}
                      style={{ color: '#dc2626', cursor: 'pointer', fontSize: '14px' }}
                    >
                      إزالة
                    </div>
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
            marginBottom: '20px',
            fontWeight: 600
          }}>
            <span>إجمالي القطع:</span>
            <span>{cartCount}</span>
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
                color: 'white'
              }}
            >
              <i className="fab fa-whatsapp"></i> إرسال عبر واتساب
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
                color: 'white'
              }}
            >
              <i className="fas fa-file-pdf"></i> PDF
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
      ></div>

      {/* Mobile Navigation */}
      <div 
        className={`mobile-nav ${isMobileNavOpen ? 'open' : ''}`} 
        style={{
          position: 'fixed',
          top: 0,
          right: isMobileNavOpen ? '0' : '-280px',
          width: '280px',
          height: '100vh',
          background: 'white',
          boxShadow: '-2px 0 20px rgba(0,0,0,0.1)',
          zIndex: 2000,
          transition: 'right 0.3s ease',
          padding: '30px 20px',
          overflowY: 'auto'
        }}
      >
        <div className="mobile-nav-header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '30px',
          paddingBottom: '20px',
          borderBottom: '1px solid #eee'
        }}>
          <h3 style={{ fontSize: '20px', color: '#000' }}>القائمة</h3>
          <span 
            className="close-mobile-nav" 
            onClick={() => setIsMobileNavOpen(false)}
            style={{ fontSize: '24px', cursor: 'pointer', color: '#555' }}
          >&times;</span>
        </div>
        <div className="mobile-nav-links" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <Link href="/ar" style={{ color: '#000', textDecoration: 'none', fontSize: '16px', fontWeight: 500, padding: '12px 0', borderBottom: '1px solid #eee' }}>
            الرئيسية
          </Link>
          <Link href="/ar/catalog" style={{ color: '#000', textDecoration: 'none', fontSize: '16px', fontWeight: 500, padding: '12px 0', borderBottom: '1px solid #eee' }}>
            الكتالوج
          </Link>
          
          <div style={{ fontWeight: 700, color: '#ff5a00', marginTop: '10px', padding: '12px 0' }}>
            التصنيفات
          </div>
          <Link href="/ar/category/abayas" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            عبايات
          </Link>
          <Link href="/ar/category/hijabs" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            حجاب
          </Link>
          <Link href="/ar/category/modest-skirt-sets" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            طقم تنورة محجبات
          </Link>
          <Link href="/ar/category/modest-dresses" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            فساتين محجبات
          </Link>
          <Link href="/ar/category/burkini" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            بوركيني ملابس سباحة محجبات
          </Link>
          <Link href="/ar/category/modest-sportswear" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            ملابس رياضية محجبات
          </Link>
          <Link href="/ar/category/modest-evening-dresses" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            فساتين سهرة محجبات
          </Link>
          <Link href="/ar/category/modest-pants-sets" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            طقم بنطلون محجبات
          </Link>
          <Link href="/ar/category/prayer-clothes" style={{ color: '#000', textDecoration: 'none', fontSize: '14px', fontWeight: 500, padding: '12px 20px', borderBottom: '1px dashed #eee' }}>
            ملابس صلاة
          </Link>
          
          <Link href="/ar/blogs" style={{ color: '#000', textDecoration: 'none', fontSize: '16px', fontWeight: 500, padding: '12px 0', borderBottom: '1px solid #eee' }}>
            المدونة
          </Link>
          <Link href="/ar/about-us" style={{ color: '#000', textDecoration: 'none', fontSize: '16px', fontWeight: 500, padding: '12px 0', borderBottom: '1px solid #eee' }}>
            من نحن
          </Link>
          <Link href="/ar/contact" style={{ color: '#000', textDecoration: 'none', fontSize: '16px', fontWeight: 500, padding: '12px 0', borderBottom: '1px solid #eee' }}>
            اتصل بنا
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
          <p><span style={{ color: '#ff5a00', fontWeight: 600 }}>جملة ملابس محجبات تركية</span> وشحن عالمي. أناقة تصل إلى عنوانك</p>
        </div>
      </div>

      {/* Main Header - صف علوي: Logo | Search Bar | Actions */}
      <header className="main-header" style={{
        background: 'white',
        boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        direction: 'rtl'
      }}>
        {/* الصف العلوي - Logo, Search Bar, Actions */}
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '15px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          {/* Logo */}
          <div className="logo" style={{ flexShrink: 0 }}>
            <Link href="/ar" style={{ textDecoration: 'none', color: 'inherit' }}>
              <h1 style={{ 
                fontSize: '28px', 
                color: '#000', 
                fontWeight: 800, 
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                margin: 0
              }}>
                <span style={{ fontSize: '28px', color: '#000', fontWeight: 800 }}>حجاب فاشون مول</span>
                <span style={{ 
                  fontSize: '20px', 
                  color: '#ff5a00', 
                  fontWeight: 500,
                  background: 'transparent', 
                  padding: 0
                }}>جملة</span>
              </h1>
            </Link>
          </div>
          
          {/* ✅ Search Bar - عريض في المنتصف */}
          <div style={{
            flex: 1,
            maxWidth: '500px',
            margin: '0 20px'
          }}>
            <form onSubmit={handleSearch} style={{ position: 'relative', width: '100%' }}>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="ابحث عن منتجات... (اسم، كود، لون)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                style={{
                  width: '100%',
                  padding: '14px 55px 14px 20px',
                  border: isSearchFocused ? '2px solid #ff5a00' : '2px solid #eaeaea',
                  borderRadius: '50px',
                  fontFamily: 'Tajawal, sans-serif',
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
                  left: '8px',
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
              >
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
          
          {/* Top Actions - العملات واللغة والسلة */}
          <div className="top-actions" style={{ display: 'flex', gap: '12px', alignItems: 'center', flexShrink: 0 }}>
            <div className="lang-currency" style={{
              display: 'flex',
              gap: '5px',
              background: '#f5f5f5',
              padding: '6px 10px',
              borderRadius: '40px'
            }}>
              <select 
                id="languageSelect"
                defaultValue="ar"
                style={{
                  border: 'none',
                  background: 'transparent',
                  fontFamily: 'Tajawal, sans-serif',
                  fontWeight: 500,
                  fontSize: '12px',
                  cursor: 'pointer',
                  outline: 'none',
                  color: '#222',
                  width: '65px'
                }}
                onChange={(e) => {
                  const lang = e.target.value
                  const currentPath = window.location.pathname
                  const pathWithoutLang = currentPath.replace(/^\/ar/, '') || '/'
                  
                  if (lang === 'en') {
                    window.location.href = `/en${pathWithoutLang}`
                  } else if (lang === 'fr') {
                    window.location.href = `/fr${pathWithoutLang}`
                  } else if (lang === 'de') {
                    window.location.href = `/de${pathWithoutLang}`
                  } else if (lang === 'tr') {
                    window.location.href = `/tr${pathWithoutLang}`
                  }
                }}
              >
                <option value="ar">🇸🇦 Ar</option>
                <option value="en">🇬🇧 En</option>
                <option value="fr">🇫🇷 Fr</option>
                <option value="de">🇩🇪 De</option>
                <option value="tr">🇹🇷 Tr</option>
              </select>
              <select 
                id="currencySelect"
                value={currency}
                onChange={(e) => setCurrency(e.target.value as any)}
                disabled={currencyLoading}
                style={{
                  border: 'none',
                  background: 'transparent',
                  fontFamily: 'Tajawal, sans-serif',
                  fontWeight: 500,
                  fontSize: '12px',
                  cursor: currencyLoading ? 'wait' : 'pointer',
                  outline: 'none',
                  color: '#222',
                  width: '65px',
                  opacity: currencyLoading ? 0.7 : 1
                }}
              >
                <option value="USD">🇺🇸 USD</option>
                <option value="EUR">🇪🇺 EUR</option>
                <option value="TRY">🇹🇷 TRY</option>
                <option value="GBP">🇬🇧 GBP</option>
                <option value="SAR">🇸🇦 SAR</option>
                <option value="AED">🇦🇪 AED</option>
              </select>
            </div>
            <div 
              className="cart-icon" 
              onClick={() => setIsCartOpen(true)}
              style={{ position: 'relative', cursor: 'pointer', fontSize: '22px', color: '#000' }}
            >
              <i className="fas fa-shopping-cart"></i>
              <span 
                className="cart-count" 
                id="cartCount"
                style={{
                  position: 'absolute',
                  top: '-8px',
                  left: '-8px',
                  background: '#ff5a00',
                  color: 'white',
                  borderRadius: '50%',
                  width: '18px',
                  height: '18px',
                  fontSize: '11px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 600
                }}
              >{cartCount}</span>
            </div>
          </div>
        </div>
        
        {/* ✅ الصف السفلي - القائمة الرئيسية (واسعة) */}
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
              gap: '35px',
              padding: '12px 0',
              flexWrap: 'wrap'
            }}>
              <Link href="/ar" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '15px', whiteSpace: 'nowrap' }}>
                الرئيسية
              </Link>
              <Link href="/ar/catalog" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '15px', whiteSpace: 'nowrap' }}>
                الكتالوج
              </Link>
              
              <div 
                className="dropdown" 
                style={{ position: 'relative', display: 'inline-block' }}
                onMouseEnter={() => setIsCategoryDropdownOpen(true)}
                onMouseLeave={() => setIsCategoryDropdownOpen(false)}
              >
                <button className="dropdown-btn" style={{
                  color: '#333',
                  background: 'none',
                  border: 'none',
                  fontWeight: 500,
                  fontSize: '15px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: 0
                }}>
                  التصنيفات <i className="fas fa-chevron-down" style={{ fontSize: '10px' }}></i>
                </button>
                <div 
                  className="dropdown-content" 
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: '50%',
                    transform: 'translateX(50%)',
                    minWidth: '200px',
                    background: 'white',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    borderRadius: '10px',
                    padding: '10px 0',
                    opacity: isCategoryDropdownOpen ? 1 : 0,
                    visibility: isCategoryDropdownOpen ? 'visible' : 'hidden',
                    transition: 'all 0.3s ease',
                    zIndex: 1000,
                    marginTop: '10px'
                  }}
                >
                  <Link href="/ar/category/abayas" style={{ display: 'block', padding: '10px 20px', color: '#333', textDecoration: 'none', fontSize: '14px' }}>عبايات</Link>
                  <Link href="/ar/category/hijabs" style={{ display: 'block', padding: '10px 20px', color: '#333', textDecoration: 'none', fontSize: '14px' }}>حجاب</Link>
                  <Link href="/ar/category/modest-skirt-sets" style={{ display: 'block', padding: '10px 20px', color: '#333', textDecoration: 'none', fontSize: '14px' }}>طقم تنورة محجبات</Link>
                  <Link href="/ar/category/modest-dresses" style={{ display: 'block', padding: '10px 20px', color: '#333', textDecoration: 'none', fontSize: '14px' }}>فساتين محجبات</Link>
                  <Link href="/ar/category/burkini" style={{ display: 'block', padding: '10px 20px', color: '#333', textDecoration: 'none', fontSize: '14px' }}>بوركيني ملابس سباحة محجبات</Link>
                  <Link href="/ar/category/modest-sportswear" style={{ display: 'block', padding: '10px 20px', color: '#333', textDecoration: 'none', fontSize: '14px' }}>ملابس رياضية محجبات</Link>
                  <Link href="/ar/category/modest-evening-dresses" style={{ display: 'block', padding: '10px 20px', color: '#333', textDecoration: 'none', fontSize: '14px' }}>فساتين سهرة محجبات</Link>
                  <Link href="/ar/category/modest-pants-sets" style={{ display: 'block', padding: '10px 20px', color: '#333', textDecoration: 'none', fontSize: '14px' }}>طقم بنطلون محجبات</Link>
                  <Link href="/ar/category/prayer-clothes" style={{ display: 'block', padding: '10px 20px', color: '#333', textDecoration: 'none', fontSize: '14px' }}>ملابس صلاة</Link>
                </div>
              </div>
              
              <Link href="/ar/blogs" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '15px', whiteSpace: 'nowrap' }}>
                المدونة
              </Link>
              <Link href="/ar/about-us" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '15px', whiteSpace: 'nowrap' }}>
                من نحن
              </Link>
              <Link href="/ar/contact" style={{ color: '#333', textDecoration: 'none', fontWeight: 500, fontSize: '15px', whiteSpace: 'nowrap' }}>
                اتصل بنا
              </Link>
            </nav>
          </div>
        </div>
        
        {/* Mobile Menu Button - يظهر فقط على الشاشات الصغيرة */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileNavOpen(true)}
          style={{
            display: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#000',
            background: 'none',
            border: 'none',
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 1001
          }}
        >
          <i className="fas fa-bars"></i>
        </button>
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
              <h2 style={{ fontSize: '28px', color: 'white', marginBottom: '10px' }}>حجاب فاشون مول</h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', maxWidth: '300px' }}>
                مصدر الجملة الموثوق لملابس المحجبات التركية
              </p>
            </div>
            <div className="footer-stats" style={{ display: 'flex', gap: '30px' }}>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <span className="stat-number" style={{ display: 'block', fontSize: '28px', fontWeight: 700, color: '#ff5a00' }}>250+</span>
                <span className="stat-label" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>علامة تجارية</span>
              </div>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <span className="stat-number" style={{ display: 'block', fontSize: '28px', fontWeight: 700, color: '#ff5a00' }}>50+</span>
                <span className="stat-label" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>دولة</span>
              </div>
              <div className="stat-item" style={{ textAlign: 'center' }}>
                <span className="stat-number" style={{ display: 'block', fontSize: '28px', fontWeight: 700, color: '#ff5a00' }}>5000+</span>
                <span className="stat-label" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>منتج</span>
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
              <span><i className="fas fa-truck" style={{ color: '#ff5a00' }}></i> شحن سريع</span>
              <span><i className="fas fa-lock" style={{ color: '#ff5a00' }}></i> دفع آمن</span>
              <span><i className="fas fa-check-circle" style={{ color: '#ff5a00' }}></i> أصلي 100%</span>
            </div>
            <div className="footer-social" style={{ display: 'flex', gap: '15px' }}>
              <a href="https://facebook.com/hijabfashionmall" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://instagram.com/hijabfashionmall" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://youtube.com/@hijabfashionmall" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          {/* Country Guides Section */}
          <div className="footer-country-guides" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '25px',
            marginBottom: '40px',
            paddingBottom: '30px',
            borderBottom: '1px solid rgba(255,255,255,0.1)'
          }}>
            {/* Americas & Oceania */}
            <div className="country-section">
              <h4><i className="fas fa-globe-americas"></i> أمريكا وأوقيانوسيا</h4>
              <div className="country-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <a href="/ar/wholesale-usa" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>الولايات المتحدة</a>
                <a href="/ar/wholesale-canada" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>كندا</a>
                <a href="/ar/wholesale-australia" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>أستراليا</a>
                <a href="/ar/wholesale-newzealand" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>نيوزيلندا</a>
                <a href="/ar/wholesale-brazil" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>البرازيل</a>
                <a href="/ar/wholesale-argentina" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>الأرجنتين</a>
                <a href="/ar/wholesale-mexico" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>المكسيك</a>
                <a href="/ar/wholesale-chile" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>تشيلي</a>
              </div>
            </div>
            
            {/* Europe */}
            <div className="country-section">
              <h4><i className="fas fa-globe-europe"></i> أوروبا</h4>
              <div className="country-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <a href="/ar/wholesale-uk" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>المملكة المتحدة</a>
                <a href="/ar/wholesale-germany" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>ألمانيا</a>
                <a href="/ar/wholesale-france" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>فرنسا</a>
                <a href="/ar/wholesale-italy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>إيطاليا</a>
                <a href="/ar/wholesale-spain" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>إسبانيا</a>
                <a href="/ar/wholesale-netherlands" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>هولندا</a>
                <a href="/ar/wholesale-belgium" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>بلجيكا</a>
                <a href="/ar/wholesale-sweden" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>السويد</a>
                <a href="/ar/wholesale-denmark" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>الدنمارك</a>
                <a href="/ar/wholesale-norway" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>النرويج</a>
                <a href="/ar/wholesale-finland" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>فنلندا</a>
                <a href="/ar/wholesale-switzerland" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>سويسرا</a>
                <a href="/ar/wholesale-austria" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>النمسا</a>
                <a href="/ar/wholesale-ireland" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>أيرلندا</a>
              </div>
            </div>
            
            {/* Middle East & Africa */}
            <div className="country-section">
              <h4><i className="fas fa-globe-asia"></i> الشرق الأوسط وأفريقيا</h4>
              <div className="country-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <a href="/ar/wholesale-saudiarabia" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>السعودية</a>
                <a href="/ar/wholesale-uae" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>الإمارات</a>
                <a href="/ar/wholesale-kuwait" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>الكويت</a>
                <a href="/ar/wholesale-qatar" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>قطر</a>
                <a href="/ar/wholesale-bahrain" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>البحرين</a>
                <a href="/ar/wholesale-oman" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>عمان</a>
                <a href="/ar/wholesale-lebanon" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>لبنان</a>
                <a href="/ar/wholesale-syria" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>سوريا</a>
                <a href="/ar/wholesale-iraq" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>العراق</a>
                <a href="/ar/wholesale-jordan" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>الأردن</a>
                <a href="/ar/wholesale-egypt" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>مصر</a>
                <a href="/ar/wholesale-algeria" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>الجزائر</a>
                <a href="/ar/wholesale-libya" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>ليبيا</a>
                <a href="/ar/wholesale-morocco" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>المغرب</a>
                <a href="/ar/wholesale-tunisia" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '13px', padding: '4px 10px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px' }}>تونس</a>
              </div>
            </div>
            
            {/* Map Section */}
            <div className="country-section map-section">
              <h4><i className="fas fa-map-marked-alt"></i> شحن عالمي</h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: '1.6', marginBottom: '15px' }}>
                نشحن إلى أكثر من 50 دولة حول العالم. توصيل سريع وموثوق.
              </p>
              <div className="shipping-badges" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <span style={{ background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.8)', padding: '5px 12px', borderRadius: '30px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <i className="fas fa-plane" style={{ color: '#ff5a00' }}></i> شحن سريع
                </span>
                <span style={{ background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.8)', padding: '5px 12px', borderRadius: '30px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <i className="fas fa-box" style={{ color: '#ff5a00' }}></i> من الباب للباب
                </span>
                <span style={{ background: 'rgba(255,255,255,0.03)', color: 'rgba(255,255,255,0.8)', padding: '5px 12px', borderRadius: '30px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <i className="fas fa-clock" style={{ color: '#ff5a00' }}></i> 3-7 أيام
                </span>
              </div>
            </div>
          </div>

          {/* Footer Channels */}
          <div className="footer-channels-simple" style={{ margin: '30px 0 20px', padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.1)', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
              <div className="simple-channels" style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
                <a href="https://whatsapp.com/channel/0029VaKJqF6A3kLkHxKJmKJ" className="simple-channel whatsapp-simple" target="_blank" rel="noopener noreferrer" style={{
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
                }}>
                  <i className="fab fa-whatsapp"></i>
                  <span>انضم لقناة واتساب</span>
                  <small style={{ fontSize: '12px', opacity: 0.8, marginRight: 'auto' }}>1,500+ عضو</small>
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
                }}>
                  <i className="fab fa-telegram-plane"></i>
                  <span>انضم لقناة تليجرام</span>
                  <small style={{ fontSize: '12px', opacity: 0.8, marginRight: 'auto' }}>11,000+ عضو</small>
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
            <a href="/ar/refund-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', margin: '0 5px' }}>سياسة الاسترجاع</a>
            <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 2px' }}> | </span>
            <a href="/ar/terms-conditions" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', margin: '0 5px' }}>الشروط والأحكام</a>
            <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 2px' }}> | </span>
            <a href="/ar/privacy-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', margin: '0 5px' }}>سياسة الخصوصية</a>
            <span style={{ color: 'rgba(255,255,255,0.3)', margin: '0 2px' }}> | </span>
            <a href="/ar/shipping-policy" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', margin: '0 5px' }}>سياسة الشحن</a>
          </div>

          <div className="footer-copyright" style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '12px',
            marginTop: '10px',
            paddingBottom: '10px'
          }}>
            <p>© 2026 حجاب فاشون مول. جميع الحقوق محفوظة. صمم لتجار تجزئة أزياء المحجبات حول العالم.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/905519522448?text=مرحباً%2C%20لدي%20سؤال%20عن%20منتجاتكم" 
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
      >
        <i className="fab fa-whatsapp"></i>
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
      >
        <i className="fas fa-arrow-up"></i>
      </button>

      <style>{`
        .dropdown:hover .dropdown-content {
          opacity: 1 !important;
          visibility: visible !important;
        }
        
        .dropdown-content {
          transition: all 0.3s ease;
        }
        
        .dropdown-content a:hover {
          background: rgba(255, 90, 0, 0.05);
          color: #ff5a00;
        }
        
        @media (max-width: 992px) {
          .desktop-nav {
            gap: 20px !important;
          }
          .desktop-nav a {
            font-size: 14px !important;
          }
        }
        
        @media (max-width: 768px) {
          .main-header .container {
            flex-wrap: wrap;
            justify-content: center !important;
          }
          .main-header .logo {
            order: 1;
            width: auto;
          }
          .main-header .search-bar {
            order: 3;
            max-width: 100%;
            margin: 10px 0 !important;
            width: 100%;
          }
          .main-header .top-actions {
            order: 2;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .desktop-nav {
            display: none !important;
          }
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
        
        .country-list a:hover {
          background: #ff5a00 !important;
          color: white !important;
          transform: translateY(-2px);
        }
        
        .footer-policies a:hover {
          color: #ff5a00 !important;
        }
      `}</style>
    </>
  )
}