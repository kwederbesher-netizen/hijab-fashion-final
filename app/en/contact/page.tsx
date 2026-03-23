// app/en/contact/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Head from 'next/head'

export default function ContactPageEn() {
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
      alert('⚠️ Inquiry cart is empty')
      return
    }
    
    let message = "Hello, I would like to inquire about the following products:\n\n"
    cart.forEach((item, index) => {
      const name = item.name_en || item.name_ar || item.name || 'Product'
      let price = item.price_usd || item.price || 0
      if (typeof price === 'string') {
        price = parseFloat(price.replace(',', '.'))
      }
      message += `${index + 1}. ${name} - $${price.toFixed(2)}\n`
    })
    message += `\nTotal Items: ${cart.length}`
    
    window.open(`https://wa.me/905519522448?text=${encodeURIComponent(message)}`, '_blank')
  }

  // Download PDF
  const downloadPDF = () => {
    if (cart.length === 0) {
      alert('⚠️ Inquiry cart is empty')
      return
    }
    
    let content = "Hijab Fashion Mall - Inquiry Cart\n\n"
    cart.forEach((item, index) => {
      const name = item.name_en || item.name_ar || item.name || 'Product'
      let price = item.price_usd || item.price || 0
      if (typeof price === 'string') {
        price = parseFloat(price.replace(',', '.'))
      }
      content += `${index + 1}. ${name} - $${price.toFixed(2)}\n`
    })
    content += `\nTotal Items: ${cart.length}\n\nThank you for your interest!`
    
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'inquiry-hijab-fashion.txt'
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
          message: '✅ Thank you! Your message has been sent successfully. We will get back to you soon.' 
        })
        
        // Reset form using ref
        if (formRef.current) {
          formRef.current.reset()
        }
        
        setTimeout(() => setFormStatus({ type: null, message: '' }), 5000)
      } else {
        throw new Error(result.message || 'An error occurred')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setFormStatus({ 
        type: 'error', 
        message: '❌ Sorry, an error occurred while sending your message. Please try again or contact us via WhatsApp.' 
      })
      setTimeout(() => setFormStatus({ type: null, message: '' }), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Head>
        <title>Contact Us - Hijab Fashion Mall | Turkish Modest Wear Wholesale</title>
        <meta name="description" content="Contact Hijab Fashion Mall for wholesale inquiries, bulk orders, and partnerships. We're here to help you with all your modest fashion needs." />
        <meta name="keywords" content="contact hijab fashion mall, turkish hijab wholesale, modest wear supplier, wholesale inquiries" />
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
      >
        <div className="cart-header" style={{
          padding: '25px',
          borderBottom: '1px solid #eee',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h3 style={{ fontSize: '20px', color: '#000' }}>Inquiry Cart</h3>
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
              Cart is empty
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
                    alt={item.name_en || 'Product'}
                    style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/default.webp'
                    }}
                  />
                </div>
                <div className="cart-item-details" style={{ flex: 1 }}>
                  <div className="cart-item-title" style={{ fontWeight: 600, marginBottom: '5px' }}>
                    {item.name_en || item.name_ar || 'Product'}
                  </div>
                  <div className="cart-item-price" style={{ color: '#ff5a00', fontWeight: 600 }}>
                    ${item.price_usd?.toFixed(2) || '0.00'}
                  </div>
                  <div 
                    className="cart-item-remove" 
                    onClick={() => removeFromCart(index)}
                    style={{ color: '#dc2626', cursor: 'pointer', fontSize: '14px' }}
                  >
                    Remove
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
            <span>Total Items:</span>
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
              <i className="fab fa-whatsapp"></i> Send via WhatsApp
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
              <i className="fas fa-file-pdf"></i> Download PDF
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
              <Link href="/en" style={{ color: '#555', textDecoration: 'none' }}>Home</Link>
            </li>
            <li style={{ fontSize: '14px', color: '#555' }}>/</li>
            <li style={{ fontSize: '14px', color: '#000', fontWeight: 600 }}>Contact Us</li>
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
          <h1 style={{ fontSize: '42px', fontWeight: 700, marginBottom: '15px' }}>Contact Us</h1>
          <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
            We're here to answer all your questions and help you grow your business with premium Turkish modest wear.
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
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#000', marginBottom: '10px' }}>Call Us</h3>
                  <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>+90 551 952 24 48</p>
                  <a href="tel:+905519522448" style={{
                    color: '#ff5a00',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '14px',
                    display: 'inline-block',
                    marginTop: '10px'
                  }}>
                    Call Now <i className="fas fa-arrow-right"></i>
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
                  <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#000', marginBottom: '10px' }}>Working Hours</h3>
                  <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>Monday-Friday: 9AM - 8PM</p>
                  <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>Saturday: 10AM - 6PM</p>
                  <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6' }}>Sunday: Closed</p>
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
                  <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '10px', color: 'white' }}>Chat with us on WhatsApp</h3>
                  <p style={{ opacity: 0.9, marginBottom: '20px' }}>
                    Get instant answers to your questions. Our team is available 24/7 to help with orders, inquiries, and support.
                  </p>
                  <a href="https://wa.me/905519522448?text=Hello%2C%20I%20have%20a%20question%20about%20your%20products" 
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
                    <i className="fab fa-whatsapp"></i> Start WhatsApp Chat
                  </a>
                </div>
                <div style={{ fontSize: '80px', opacity: 0.3, position: 'relative', right: '-20px' }}>
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
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#000', marginBottom: '30px' }}>Send us a message</h2>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '20px',
                  marginBottom: '20px'
                }}>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#555', marginBottom: '8px' }}>
                      Full Name *
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
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '15px',
                        transition: 'all 0.3s',
                        background: '#fafafa'
                      }}
                      placeholder="Enter your full name"
                      onFocus={(e) => e.target.style.borderColor = '#ff5a00'}
                      onBlur={(e) => e.target.style.borderColor = '#eee'}
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#555', marginBottom: '8px' }}>
                      Country *
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
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '15px',
                        transition: 'all 0.3s',
                        background: '#fafafa'
                      }}
                      placeholder="Enter your country"
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
                      Phone Number *
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
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '15px',
                        transition: 'all 0.3s',
                        background: '#fafafa'
                      }}
                      placeholder="Enter your phone number"
                      onFocus={(e) => e.target.style.borderColor = '#ff5a00'}
                      onBlur={(e) => e.target.style.borderColor = '#eee'}
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#555', marginBottom: '8px' }}>
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      style={{
                        width: '100%',
                        padding: '15px 18px',
                        border: '2px solid #eee',
                        borderRadius: '12px',
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '15px',
                        transition: 'all 0.3s',
                        background: '#fafafa'
                      }}
                      placeholder="Enter your email (optional)"
                      onFocus={(e) => e.target.style.borderColor = '#ff5a00'}
                      onBlur={(e) => e.target.style.borderColor = '#eee'}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#555', marginBottom: '8px' }}>
                    Your Message *
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
                      fontFamily: 'Poppins, sans-serif',
                      fontSize: '15px',
                      transition: 'all 0.3s',
                      background: '#fafafa',
                      resize: 'vertical',
                      minHeight: '150px'
                    }}
                    placeholder="Write your message here..."
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
                      <i className="fas fa-spinner fa-spin"></i> Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i> Send Message
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
          <h2 style={{ textAlign: 'center', fontSize: '36px', color: '#000', marginBottom: '50px' }}>Frequently Asked Questions</h2>
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
                <i className="fas fa-question-circle"></i> How can I place an order?
              </h3>
              <p style={{ color: '#555', lineHeight: '1.7' }}>
                You can browse our catalog, select the products you're interested in, and send your inquiry via WhatsApp or the contact form. We will get back to you regarding prices and availability.
              </p>
            </div>
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '30px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#ff5a00', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-truck"></i> Do you ship worldwide?
              </h3>
              <p style={{ color: '#555', lineHeight: '1.7' }}>
                Yes! We ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. Contact us for specific rates.
              </p>
            </div>
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '30px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#ff5a00', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-credit-card"></i> What payment methods do you accept?
              </h3>
              <p style={{ color: '#555', lineHeight: '1.7' }}>
                We accept bank transfers, Western Union, and for regular customers, we can arrange other payment methods. Contact us for details.
              </p>
            </div>
            <div style={{
              background: 'white',
              borderRadius: '15px',
              padding: '30px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#ff5a00', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className="fas fa-box"></i> What is the minimum order quantity?
              </h3>
              <p style={{ color: '#555', lineHeight: '1.7' }}>
                We don't have a strict minimum order. You can mix different products in your order. Some items marked as "RSS" can be ordered as single pieces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/905519522448?text=Hello%2C%20I%20have%20a%20question%20about%20your%20products" 
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