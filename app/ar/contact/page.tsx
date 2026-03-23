// app/ar/contact/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function ContactPageAr() {
  const [cartCount, setCartCount] = useState(0)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cart, setCart] = useState<any[]>([])
  const [formStatus, setFormStatus] = useState<{type: 'success' | 'error' | null, message: string}>({ type: null, message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // Add ref for form
  const formRef = useRef<HTMLFormElement>(null)

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        setCart(parsedCart)
        setCartCount(parsedCart.length)
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
          setCartCount(parsedCart.length)
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

  // Remove from cart
  const removeFromCart = (index: number) => {
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
    localStorage.setItem('cart', JSON.stringify(newCart))
    setCartCount(newCart.length)
    
    const event = new CustomEvent('cartUpdated', { detail: newCart.length })
    window.dispatchEvent(event)
  }

  // Send to WhatsApp
  const sendToWhatsApp = () => {
    if (cart.length === 0) {
      alert('⚠️ سلة الاستفسار فارغة')
      return
    }
    
    let message = "مرحباً، أود الاستفسار عن المنتجات التالية:\n\n"
    cart.forEach((item, index) => {
      const name = item.name_ar || item.name_en || item.name || 'منتج'
      let price = item.price_usd || item.price || 0
      if (typeof price === 'string') {
        price = parseFloat(price.replace(',', '.'))
      }
      message += `${index + 1}. ${name} - $${price.toFixed(2)}\n`
    })
    message += `\nإجمالي القطع: ${cart.length}`
    
    window.open(`https://wa.me/905519522448?text=${encodeURIComponent(message)}`, '_blank')
  }

  // Download PDF
  const downloadPDF = () => {
    if (cart.length === 0) {
      alert('⚠️ سلة الاستفسار فارغة')
      return
    }
    
    let content = "حجاب فاشون مول - سلة الاستفسار\n\n"
    cart.forEach((item, index) => {
      const name = item.name_ar || item.name_en || item.name || 'منتج'
      let price = item.price_usd || item.price || 0
      if (typeof price === 'string') {
        price = parseFloat(price.replace(',', '.'))
      }
      content += `${index + 1}. ${name} - $${price.toFixed(2)}\n`
    })
    content += `\nإجمالي القطع: ${cart.length}\n\nشكراً لاهتمامك!`
    
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'استفسار-حجاب-فاشون.txt'
    a.click()
  }

  // Handle form submission - sends email via API
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      country: formData.get('country'),
      phone: formData.get('phone'),
      email: formData.get('email') || '',
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        setFormStatus({ 
          type: 'success', 
          message: '✅ شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.' 
        })
        
        // Reset form using ref instead of e.currentTarget
        if (formRef.current) {
          formRef.current.reset()
        }
        
        setTimeout(() => setFormStatus({ type: null, message: '' }), 5000)
      } else {
        throw new Error(result.message || 'حدث خطأ')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setFormStatus({ 
        type: 'error', 
        message: '❌ عذراً، حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى أو الاتصال بنا عبر واتساب.' 
      })
      setTimeout(() => setFormStatus({ type: null, message: '' }), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Head>
        <title>اتصل بنا - حجاب فاشون مول | جملة ملابس محجبات تركية</title>
        <meta name="description" content="تواصل مع حجاب فاشون مول للاستفسارات حول الجملة والطلبات بالجملة والشراكات. نحن هنا لمساعدتك في جميع احتياجات أزياء المحجبات." />
        <meta name="keywords" content="اتصل بحجاب فاشون مول, جملة حجاب تركي, مورد أزياء محجبات, استفسارات جملة" />
        <link rel="alternate" href="https://hijabfashionmall.com/ar/contact" hrefLang="ar" />
        <link rel="alternate" href="https://hijabfashionmall.com/en/contact" hrefLang="en" />
      </Head>

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
            cart.map((item, index) => (
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
                  <div className="cart-item-price" style={{ color: '#ff5a00', fontWeight: 600 }}>
                    ${item.price_usd?.toFixed(2) || '0.00'}
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
            ))
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
            <span>{cart.length}</span>
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

      {/* Breadcrumb */}
      <div style={{
        padding: '20px 0',
        background: '#f5f5f5',
        borderBottom: '1px solid #eee'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <li style={{ fontSize: '14px', color: '#555' }}>
              <Link href="/ar" style={{ color: '#555', textDecoration: 'none' }}>الرئيسية</Link>
            </li>
            <li style={{ fontSize: '14px', color: '#555' }}>‹</li>
            <li style={{ fontSize: '14px', color: '#000', fontWeight: 600 }}>اتصل بنا</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section style={{
        background: 'linear-gradient(135deg, rgba(255, 90, 0, 0.8) 0%, rgba(255, 140, 66, 0.8) 100%)',
        padding: '60px 0',
        textAlign: 'center',
        color: 'white'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: 700, marginBottom: '15px' }}>تواصل معنا</h1>
          <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
            نحن هنا للإجابة على جميع أسئلتك ومساعدتك في تنمية أعمالك مع ملابس المحجبات التركية الفاخرة.
          </p>
        </div>
      </section>

      {/* Form Status Message */}
      {formStatus.type && (
        <div style={{
          maxWidth: '1200px',
          margin: '20px auto 0',
          padding: '15px 20px',
          background: formStatus.type === 'success' ? '#d4edda' : '#f8d7da',
          color: formStatus.type === 'success' ? '#155724' : '#721c24',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          {formStatus.message}
        </div>
      )}

      {/* Contact Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '50px',
            alignItems: 'start'
          }}>
            {/* Left Side - Contact Info */}
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '25px',
                marginBottom: '30px'
              }}>
                {/* Phone Card */}
                <div style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '30px 20px',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s',
                  border: '1px solid rgba(0,0,0,0.02)'
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'rgba(255, 90, 0, 0.1)',
                    color: '#ff5a00',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '30px'
                  }}>
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#000', marginBottom: '10px' }}>اتصل بنا</h3>
                  <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>+90 551 952 24 48</p>
                  <a href="tel:+905519522448" style={{
                    color: '#ff5a00',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '14px',
                    display: 'inline-block',
                    marginTop: '10px'
                  }}>
                    اتصل الآن <i className="fas fa-arrow-left"></i>
                  </a>
                </div>

                {/* Hours Card */}
                <div style={{
                  background: 'white',
                  borderRadius: '15px',
                  padding: '30px 20px',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                  transition: 'transform 0.3s',
                  border: '1px solid rgba(0,0,0,0.02)'
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '50%',
                    background: 'rgba(255, 90, 0, 0.1)',
                    color: '#ff5a00',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: '30px'
                  }}>
                    <i className="fas fa-clock"></i>
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#000', marginBottom: '10px' }}>ساعات العمل</h3>
                  <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>الإثنين-الجمعة: 9ص - 8م</p>
                  <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>السبت: 10ص - 6م</p>
                  <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>الأحد: مغلق</p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div style={{
                background: 'linear-gradient(135deg, #25d366 0%, #128C7E 100%)',
                color: 'white',
                padding: '40px',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '30px'
              }}>
                <div style={{ flex: 1, minWidth: '250px' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '10px', color: 'white' }}>تحدث معنا على واتساب</h3>
                  <p style={{ opacity: 0.9, marginBottom: '20px' }}>
                    احصل على إجابات فورية لأسئلتك. فريقنا متاح 24/7 لمساعدتك في الطلبات والاستفسارات والدعم.
                  </p>
                  <a href="https://wa.me/905519522448?text=مرحباً%2C%20لدي%20سؤال%20عن%20منتجاتكم" 
                     style={{
                       display: 'inline-flex',
                       alignItems: 'center',
                       gap: '10px',
                       background: 'white',
                       color: '#25d366',
                       padding: '15px 35px',
                       borderRadius: '50px',
                       textDecoration: 'none',
                       fontWeight: 600,
                       transition: 'all 0.3s',
                       boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                     }}
                     target="_blank"
                     rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i> بدء محادثة واتساب
                  </a>
                </div>
                <div style={{ fontSize: '80px', opacity: 0.3, position: 'relative', left: '-20px' }}>
                  <i className="fab fa-whatsapp"></i>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div style={{
              background: 'white',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
            }}>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#000', marginBottom: '30px' }}>أرسل لنا رسالة</h2>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#555', marginBottom: '8px' }}>
                      الاسم الكامل *
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      required
                      style={{
                        width: '100%',
                        padding: '15px 18px',
                        border: '2px solid #eee',
                        borderRadius: '12px',
                        fontFamily: 'Tajawal, sans-serif',
                        fontSize: '15px',
                        transition: 'all 0.3s',
                        background: '#fafafa'
                      }}
                      placeholder="أدخل اسمك الكامل"
                      onFocus={(e) => e.target.style.borderColor = '#ff5a00'}
                      onBlur={(e) => e.target.style.borderColor = '#eee'}
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#555', marginBottom: '8px' }}>
                      الدولة *
                    </label>
                    <input 
                      type="text" 
                      name="country" 
                      required
                      style={{
                        width: '100%',
                        padding: '15px 18px',
                        border: '2px solid #eee',
                        borderRadius: '12px',
                        fontFamily: 'Tajawal, sans-serif',
                        fontSize: '15px',
                        transition: 'all 0.3s',
                        background: '#fafafa'
                      }}
                      placeholder="أدخل اسم دولتكم"
                      onFocus={(e) => e.target.style.borderColor = '#ff5a00'}
                      onBlur={(e) => e.target.style.borderColor = '#eee'}
                    />
                  </div>
                </div>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#555', marginBottom: '8px' }}>
                      رقم الهاتف *
                    </label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required
                      style={{
                        width: '100%',
                        padding: '15px 18px',
                        border: '2px solid #eee',
                        borderRadius: '12px',
                        fontFamily: 'Tajawal, sans-serif',
                        fontSize: '15px',
                        transition: 'all 0.3s',
                        background: '#fafafa'
                      }}
                      placeholder="أدخل رقم هاتفك"
                      onFocus={(e) => e.target.style.borderColor = '#ff5a00'}
                      onBlur={(e) => e.target.style.borderColor = '#eee'}
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#555', marginBottom: '8px' }}>
                      البريد الإلكتروني
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      style={{
                        width: '100%',
                        padding: '15px 18px',
                        border: '2px solid #eee',
                        borderRadius: '12px',
                        fontFamily: 'Tajawal, sans-serif',
                        fontSize: '15px',
                        transition: 'all 0.3s',
                        background: '#fafafa'
                      }}
                      placeholder="أدخل بريدك الإلكتروني (اختياري)"
                      onFocus={(e) => e.target.style.borderColor = '#ff5a00'}
                      onBlur={(e) => e.target.style.borderColor = '#eee'}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#555', marginBottom: '8px' }}>
                    رسالتك *
                  </label>
                  <textarea 
                    name="message" 
                    required
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '15px 18px',
                      border: '2px solid #eee',
                      borderRadius: '12px',
                      fontFamily: 'Tajawal, sans-serif',
                      fontSize: '15px',
                      transition: 'all 0.3s',
                      background: '#fafafa',
                      resize: 'vertical',
                      minHeight: '150px'
                    }}
                    placeholder="اكتب رسالتك هنا..."
                    onFocus={(e) => e.target.style.borderColor = '#ff5a00'}
                    onBlur={(e) => e.target.style.borderColor = '#eee'}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  style={{
                    background: '#ff5a00',
                    color: 'white',
                    border: 'none',
                    padding: '16px 40px',
                    borderRadius: '50px',
                    fontSize: '16px',
                    fontWeight: 600,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s',
                    width: '100%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    opacity: isSubmitting ? 0.7 : 1
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i> إرسال الرسالة
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '60px 0', background: '#f5f5f5' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '36px', color: '#000', marginBottom: '50px' }}>الأسئلة الشائعة</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '30px'
          }}>
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '30px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#ff5a00', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-question-circle"></i> كيف يمكنني تقديم طلب؟
              </h3>
              <p style={{ color: '#555', lineHeight: '1.7' }}>
                يمكنك تصفح الكتالوج الخاص بنا، واختيار المنتجات التي تهتم بها، وإرسال استفسارك عبر واتساب أو نموذج الاتصال. سنتواصل معك بخصوص الأسعار والتوفر.
              </p>
            </div>
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '30px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#ff5a00', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-truck"></i> هل تشحنون عالمياً؟
              </h3>
              <p style={{ color: '#555', lineHeight: '1.7' }}>
                نعم! نشحن إلى أكثر من 50 دولة حول العالم. تختلف تكاليف الشحن وأوقات التسليم حسب الموقع. اتصل بنا للحصول على أسعار محددة.
              </p>
            </div>
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '30px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#ff5a00', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-credit-card"></i> ما هي طرق الدفع المقبولة؟
              </h3>
              <p style={{ color: '#555', lineHeight: '1.7' }}>
                نقبل التحويلات البنكية، ويسترن يونيون، وللعملاء المنتظمين يمكننا ترتيب طرق دفع أخرى. اتصل بنا للتفاصيل.
              </p>
            </div>
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '30px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#ff5a00', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-box"></i> ما هو الحد الأدنى للطلب؟
              </h3>
              <p style={{ color: '#555', lineHeight: '1.7' }}>
                ليس لدينا حد أدنى صارم للطلب. يمكنك مزج منتجات مختلفة في طلبك. بعض المنتجات التي تحمل علامة "RSS" يمكن طلبها كقطع فردية.
              </p>
            </div>
          </div>
        </div>
      </section>

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
        #backToTop.show {
          opacity: 1;
          visibility: visible;
        }
        
        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(255,90,0,0.1);
        }
        
        .whatsapp-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.3);
        }
        
        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255,90,0,0.3);
        }
        
        input:focus, textarea:focus {
          outline: none;
          background: white;
        }
        
        @media (max-width: 768px) {
          .container {
            padding: 0 15px;
          }
          
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .info-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Back to Top Button Script */}
      <script dangerouslySetInnerHTML={{
        __html: `
          window.addEventListener('scroll', function() {
            const backToTop = document.getElementById('backToTop');
            if (window.scrollY > 300) {
              backToTop.classList.add('show');
            } else {
              backToTop.classList.remove('show');
            }
          });
        `
      }} />
    </>
  )
}