'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function BlogsPage() {
  const [cartCount, setCartCount] = useState(0)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [cart, setCart] = useState<any[]>([])

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
      alert('⚠️ Cart is empty - Add products first')
      return
    }
    
    let message = "Hello, I would like to inquire about the following items:\n\n"
    cart.forEach((item, index) => {
      const name = item.name_en || item.name || 'Product'
      let price = item.price_usd || item.price || 0
      if (typeof price === 'string') {
        price = parseFloat(price.replace(',', '.'))
      }
      message += `${index + 1}. ${name} - $${price.toFixed(2)}\n`
    })
    message += `\nTotal items: ${cart.length}`
    
    window.open(`https://wa.me/905519522448?text=${encodeURIComponent(message)}`, '_blank')
  }

  // Download PDF
  const downloadPDF = () => {
    if (cart.length === 0) {
      alert('⚠️ Cart is empty - Add products first')
      return
    }
    
    let content = "Hijab Fashion Mall - Inquiry Cart\n\n"
    cart.forEach((item, index) => {
      const name = item.name_en || item.name || 'Product'
      let price = item.price_usd || item.price || 0
      if (typeof price === 'string') {
        price = parseFloat(price.replace(',', '.'))
      }
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
      <Head>
        <title>Blog | Modest Fashion Tips & Trends | Hijab Fashion Mall</title>
        <meta name="description" content="Discover the latest modest fashion trends, buying guides, styling tips, and industry insights. Your go-to resource for Turkish hijab fashion wholesale." />
        <meta name="keywords" content="modest fashion blog, hijab styling tips, turkish fashion trends, abaya buying guide, modest fashion news" />
        <link rel="alternate" href="https://hijabfashionmall.com/en/blogs" hrefLang="en" />
        <link rel="alternate" href="https://hijabfashionmall.com/ar/blogs" hrefLang="ar" />
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
              Your cart is empty
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
                    {item.name_en || 'Product'}
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
              <i className="fas fa-file-pdf"></i> PDF
            </button>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <section style={{
        background: 'linear-gradient(135deg, #fff0e6 0%, #ffffff 100%)',
        padding: '60px 0 40px',
        textAlign: 'center',
        borderBottom: '1px solid #eee'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ fontSize: '14px', color: '#555', marginBottom: '20px' }}>
            <Link href="/en" style={{ color: '#ff5a00', textDecoration: 'none' }}>Home</Link> <span style={{ color: '#555' }}>&gt;</span> <span style={{ color: '#555' }}>Blog</span>
          </div>
          <h1 style={{ fontSize: '48px', color: '#000', marginBottom: '15px', fontWeight: 800 }}>
            Our <span style={{ color: '#ff5a00' }}>Blog</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#555', maxWidth: '700px', margin: '0 auto 20px' }}>
            Insights, trends, and tips for the modest fashion industry
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            marginTop: '20px',
            color: '#555',
            fontSize: '14px'
          }}>
            <span><i className="fas fa-newspaper" style={{ color: '#ff5a00', marginRight: '5px' }}></i> 7+ Articles</span>
            <span><i className="fas fa-folder" style={{ color: '#ff5a00', marginRight: '5px' }}></i> 4 Categories</span>
            <span><i className="fas fa-clock" style={{ color: '#ff5a00', marginRight: '5px' }}></i> Weekly Updates</span>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section style={{ padding: '40px 0', background: 'white', borderBottom: '1px solid #eee' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <Link href="/en/blogs" className="category-chip active" style={{
              padding: '12px 30px',
              borderRadius: '50px',
              background: '#ff5a00',
              border: '1px solid #ff5a00',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <i className="fas fa-newspaper"></i> All Posts
            </Link>
            <Link href="/en/blogs/category/buying-guides" className="category-chip" style={{
              padding: '12px 30px',
              borderRadius: '50px',
              background: 'white',
              border: '1px solid #ddd',
              color: '#555',
              textDecoration: 'none',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <i className="fas fa-shopping-cart"></i> Buying Guides
            </Link>
            <Link href="/en/blogs/category/fashion-trends" className="category-chip" style={{
              padding: '12px 30px',
              borderRadius: '50px',
              background: 'white',
              border: '1px solid #ddd',
              color: '#555',
              textDecoration: 'none',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <i className="fas fa-tshirt"></i> Fashion Trends
            </Link>
            <Link href="/en/blogs/category/styling-tips" className="category-chip" style={{
              padding: '12px 30px',
              borderRadius: '50px',
              background: 'white',
              border: '1px solid #ddd',
              color: '#555',
              textDecoration: 'none',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <i className="fas fa-magic"></i> Styling Tips
            </Link>
            <Link href="/en/blogs/category/country-guides" className="category-chip" style={{
              padding: '12px 30px',
              borderRadius: '50px',
              background: 'white',
              border: '1px solid #ddd',
              color: '#555',
              textDecoration: 'none',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <i className="fas fa-globe"></i> Country Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section style={{ padding: '60px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'flex',
            background: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            border: '1px solid #eee'
          }}>
            <div style={{ flex: 1, position: 'relative', minHeight: '400px', background: '#f5f5f5' }}>
              <span style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                background: '#ff5a00',
                color: 'white',
                padding: '8px 20px',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: 600,
                zIndex: 1
              }}>🏆 Milestone</span>
              <Image 
                src="/images/celebration-global-rank.webp" 
                alt="Hijab Fashion Mall achieves #1 global rank in hijab wholesale"
                width={600}
                height={400}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/default.webp'
                }}
              />
            </div>
            <div style={{ flex: 1, padding: '50px' }}>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', color: '#555', fontSize: '14px' }}>
                <span><i className="far fa-calendar" style={{ color: '#ff5a00', marginRight: '5px' }}></i> March 13, 2026</span>
                <span><i className="far fa-folder" style={{ color: '#ff5a00', marginRight: '5px' }}></i> Success Story</span>
              </div>
              <h2 style={{ fontSize: '32px', color: '#000', marginBottom: '20px', fontWeight: 700, lineHeight: '1.3' }}>
                <Link href="/en/blogs/hijab-fashion-wholesale-global-rank" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Hijab Fashion Mall Achieves #1 Global Rank in Hijab Wholesale
                </Link>
              </h2>
              <p style={{ color: '#555', marginBottom: '30px', fontSize: '16px', lineHeight: '1.8' }}>
                We're thrilled to announce that Hijab Fashion Mall has officially achieved the #1 global ranking in Google search results for key keywords including hijab clothes wholesale, hijab wear wholesale, hijab outfit wholesale, and hijab fashion wholesale. This milestone represents years of dedication and your continued trust.
              </p>
              <Link href="/en/blogs/hijab-fashion-wholesale-global-rank" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#ff5a00',
                textDecoration: 'none',
                fontWeight: 600
              }}>
                Read Full Article <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ padding: '60px 0', background: '#f5f5f5' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '36px', color: '#000', marginBottom: '15px', fontWeight: 700 }}>
            Latest <span style={{ color: '#ff5a00' }}>Articles</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '40px', fontSize: '18px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            Explore our latest insights and guides
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            marginBottom: '40px'
          }}>
            {/* Private Label Service Article */}
            <article style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
              border: '1px solid #eee'
            }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: '#ff5a00',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 600,
                  zIndex: 1
                }}>Services</span>
                <Image 
                  src="/images/private-label-intro.webp" 
                  alt="Private Label Service for Hijab Wear"
                  width={400}
                  height={250}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default.webp'
                  }}
                />
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', color: '#555', fontSize: '13px' }}>
                  <span><i className="far fa-calendar" style={{ color: '#ff5a00', marginRight: '5px' }}></i> Mar 13, 2026</span>
                  <span><i className="far fa-clock" style={{ color: '#ff5a00', marginRight: '5px' }}></i> 10 min read</span>
                </div>
                <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '15px', fontWeight: 700, lineHeight: '1.4' }}>
                  <Link href="/en/blogs/private-label-service" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Private Label Service 2026: Build Your Own Hijab Brand
                  </Link>
                </h3>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
                  Create your own hijab brand with our comprehensive private label service. Custom labels, hang tags, and packaging to establish your unique identity in the modest fashion market.
                </p>
                <Link href="/en/blogs/private-label-service" style={{
                  color: '#ff5a00',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  Read More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </article>

            {/* Online Store Guide Article */}
            <article style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
              border: '1px solid #eee'
            }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: '#ff5a00',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 600,
                  zIndex: 1
                }}>Guide</span>
                <Image 
                  src="/images/online-clothing-store-guide.webp" 
                  alt="How to start an online clothing store in 2026"
                  width={400}
                  height={250}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default.webp'
                  }}
                />
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', color: '#555', fontSize: '13px' }}>
                  <span><i className="far fa-calendar" style={{ color: '#ff5a00', marginRight: '5px' }}></i> Mar 13, 2026</span>
                  <span><i className="far fa-clock" style={{ color: '#ff5a00', marginRight: '5px' }}></i> 15 min read</span>
                </div>
                <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '15px', fontWeight: 700, lineHeight: '1.4' }}>
                  <Link href="/en/blogs/how-to-start-online-clothing-store-2026" style={{ color: 'inherit', textDecoration: 'none' }}>
                    How to Start an Online Clothing Store in 2026: Complete Guide
                  </Link>
                </h3>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
                  A comprehensive step-by-step guide to launching a successful online clothing store in 2026, covering niche selection, branding with private label, e-commerce platforms, and marketing strategies.
                </p>
                <Link href="/en/blogs/how-to-start-online-clothing-store-2026" style={{
                  color: '#ff5a00',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  Read More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </article>

            {/* Physical Store Guide Article */}
            <article style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
              border: '1px solid #eee'
            }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: '#ff5a00',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 600,
                  zIndex: 1
                }}>Guide</span>
                <Image 
                  src="/images/physical-clothing-store-guide.webp" 
                  alt="How to open a physical clothing store in 2026"
                  width={400}
                  height={250}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default.webp'
                  }}
                />
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', color: '#555', fontSize: '13px' }}>
                  <span><i className="far fa-calendar" style={{ color: '#ff5a00', marginRight: '5px' }}></i> Mar 13, 2026</span>
                  <span><i className="far fa-clock" style={{ color: '#ff5a00', marginRight: '5px' }}></i> 16 min read</span>
                </div>
                <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '15px', fontWeight: 700, lineHeight: '1.4' }}>
                  <Link href="/en/blogs/how-to-open-physical-clothing-store-2026" style={{ color: 'inherit', textDecoration: 'none' }}>
                    How to Open a Physical Clothing Store in 2026: Complete Guide
                  </Link>
                </h3>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
                  A comprehensive guide to launching a successful brick-and-mortar clothing store, covering location selection, store design, inventory sourcing, and retail marketing strategies.
                </p>
                <Link href="/en/blogs/how-to-open-physical-clothing-store-2026" style={{
                  color: '#ff5a00',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  Read More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </article>

            {/* Rise of Modest Fashion Article */}
            <article style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
              border: '1px solid #eee'
            }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: '#ff5a00',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 600,
                  zIndex: 1
                }}>Trends</span>
                <Image 
                  src="/images/rise-modest-fashion.webp" 
                  alt="The Rise of Modest Fashion 2026"
                  width={400}
                  height={250}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default.webp'
                  }}
                />
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', color: '#555', fontSize: '13px' }}>
                  <span><i className="far fa-calendar" style={{ color: '#ff5a00', marginRight: '5px' }}></i> Mar 14, 2026</span>
                  <span><i className="far fa-clock" style={{ color: '#ff5a00', marginRight: '5px' }}></i> 14 min read</span>
                </div>
                <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '15px', fontWeight: 700, lineHeight: '1.4' }}>
                  <Link href="/en/blogs/the-rise-of-modest-fashion-2026" style={{ color: 'inherit', textDecoration: 'none' }}>
                    The Rise of Modest Fashion 2026: Global Trends & Market Insights
                  </Link>
                </h3>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
                  Explore the global rise of modest fashion in 2026. Market insights, consumer trends, sustainable modest wear, digital innovation, and opportunities for retailers in this booming $400B+ industry.
                </p>
                <Link href="/en/blogs/the-rise-of-modest-fashion-2026" style={{
                  color: '#ff5a00',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  Read More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </article>

            {/* USA Guide */}
            <article style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
              border: '1px solid #eee'
            }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: '#ff5a00',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 600,
                  zIndex: 1
                }}>Country Guide</span>
                <Image 
                  src="/images/usa-wholesale-guide.webp" 
                  alt="USA Hijab Wholesale Guide 2026"
                  width={400}
                  height={250}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default.webp'
                  }}
                />
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', color: '#555', fontSize: '13px' }}>
                  <span><i className="far fa-calendar" style={{ color: '#ff5a00', marginRight: '5px' }}></i> Mar 14, 2026</span>
                  <span><i className="far fa-clock" style={{ color: '#ff5a00', marginRight: '5px' }}></i> 12 min read</span>
                </div>
                <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '15px', fontWeight: 700, lineHeight: '1.4' }}>
                  <Link href="/en/blogs/usa-hijab-wholesale-guide-2026" style={{ color: 'inherit', textDecoration: 'none' }}>
                    USA Hijab Wholesale Guide 2026: Import from Turkey
                  </Link>
                </h3>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
                  Complete guide for importing Turkish hijab wear to the USA. Daily shipping, $180 for 30kg box via UPS/FedEx/DHL, 5-7 business days delivery. Learn about US customs, private label, and building your brand.
                </p>
                <Link href="/en/blogs/usa-hijab-wholesale-guide-2026" style={{
                  color: '#ff5a00',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  Read More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </article>

            {/* Canada Guide */}
            <article style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
              border: '1px solid #eee'
            }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: '#ff5a00',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 600,
                  zIndex: 1
                }}>Country Guide</span>
                <Image 
                  src="/images/canada-wholesale-guide.webp" 
                  alt="Canada Hijab Wholesale Guide 2026"
                  width={400}
                  height={250}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default.webp'
                  }}
                />
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', color: '#555', fontSize: '13px' }}>
                  <span><i className="far fa-calendar" style={{ color: '#ff5a00', marginRight: '5px' }}></i> Mar 14, 2026</span>
                  <span><i className="far fa-clock" style={{ color: '#ff5a00', marginRight: '5px' }}></i> 12 min read</span>
                </div>
                <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '15px', fontWeight: 700, lineHeight: '1.4' }}>
                  <Link href="/en/blogs/canada-hijab-wholesale-guide-2026" style={{ color: 'inherit', textDecoration: 'none' }}>
                    Canada Hijab Wholesale Guide 2026: Import from Turkey
                  </Link>
                </h3>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
                  Complete guide for Canadian retailers on importing Turkish hijab wear, including shipping costs, delivery times, customs procedures, and private label opportunities for building your brand.
                </p>
                <Link href="/en/blogs/canada-hijab-wholesale-guide-2026" style={{
                  color: '#ff5a00',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  Read More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </article>

            {/* UK Guide */}
            <article style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
              border: '1px solid #eee'
            }}>
              <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: '#ff5a00',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 600,
                  zIndex: 1
                }}>Country Guide</span>
                <Image 
                  src="/images/uk-wholesale-guide.webp" 
                  alt="UK Hijab Wholesale Guide 2026"
                  width={400}
                  height={250}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default.webp'
                  }}
                />
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', color: '#555', fontSize: '13px' }}>
                  <span><i className="far fa-calendar" style={{ color: '#ff5a00', marginRight: '5px' }}></i> Mar 14, 2026</span>
                  <span><i className="far fa-clock" style={{ color: '#ff5a00', marginRight: '5px' }}></i> 12 min read</span>
                </div>
                <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '15px', fontWeight: 700, lineHeight: '1.4' }}>
                  <Link href="/en/blogs/uk-hijab-wholesale-guide-2026" style={{ color: 'inherit', textDecoration: 'none' }}>
                    UK Hijab Wholesale Guide 2026: Import from Turkey
                  </Link>
                </h3>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
                  Complete guide for British retailers on importing Turkish hijab wear, including shipping costs (€165/30kg), delivery times (1-3 days), post-Brexit customs procedures, and private label opportunities.
                </p>
                <Link href="/en/blogs/uk-hijab-wholesale-guide-2026" style={{
                  color: '#ff5a00',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  Read More <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </article>
          </div>

          {/* More Articles Coming Soon */}
          <div style={{
            textAlign: 'center',
            marginTop: '40px',
            padding: '30px',
            background: '#fff0e6',
            borderRadius: '15px'
          }}>
            <h3 style={{ fontSize: '24px', color: '#000', marginBottom: '10px' }}>More Articles Coming Soon!</h3>
            <p style={{ color: '#555' }}>We're constantly adding new content. Check back regularly for the latest modest fashion insights, buying guides, and industry trends.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '15px' }}>
            Subscribe to Our <span style={{ color: '#ff5a00' }}>Blog</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '18px' }}>
            Get the latest modest fashion insights delivered to your inbox
          </p>
          <form style={{
            display: 'flex',
            maxWidth: '500px',
            margin: '0 auto',
            gap: '10px'
          }} onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }}>
            <input 
              type="email" 
              placeholder="Your email address" 
              required
              style={{
                flex: 1,
                padding: '15px 20px',
                border: 'none',
                borderRadius: '50px',
                fontFamily: 'Poppins, sans-serif',
                fontSize: '16px',
                outline: 'none'
              }}
            />
            <button type="submit" style={{
              background: '#ff5a00',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '50px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s',
              whiteSpace: 'nowrap'
            }}>
              Subscribe
            </button>
          </form>
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
        @media (max-width: 992px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
          
          .featured-card {
            flex-direction: column !important;
          }
          
          .featured-content {
            padding: 30px !important;
          }
        }
        
        #backToTop.show {
          opacity: 1;
          visibility: visible;
        }
        
        .category-chip:hover {
          background: #ff5a00 !important;
          color: white !important;
          border-color: #ff5a00 !important;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255,90,0,0.2);
        }
        
        .category-chip.active {
          background: #ff5a00 !important;
          color: white !important;
          border-color: #ff5a00 !important;
        }
        
        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(255,90,0,0.1);
        }
        
        .blog-card:hover img {
          transform: scale(1.05);
        }
        
        .blog-image img {
          transition: transform 0.5s;
        }
      `}</style>
    </>
  )
}