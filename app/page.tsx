'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)

  // Load products from Sanity API
  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch('/api/products')
        const data = await response.json()
        
        if (data.result) {
          setProducts(data.result)
          console.log('✅ Products loaded:', data.result.length)
        } else {
          console.log('No products found')
        }
      } catch (error) {
        console.error('Error loading products:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  // Hero Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      const backToTop = document.getElementById('backToTop')
      if (backToTop) {
        if (window.scrollY > 300) {
          backToTop.classList.add('show')
        } else {
          backToTop.classList.remove('show')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Hero Slider */}
      <section className="hero-slider">
        <div className="slider-container">
          {/* Slide 1 */}
          <div 
            className={`slide ${currentSlide === 0 ? 'active' : ''}`} 
            style={{ backgroundImage: 'url(/images/imageshero-slider-1.webp)' }}
          >
            <div className="slide-content">
              <h1>Premium Turkish Hijab Wear</h1>
              <p>Discover our exclusive collection of abayas, dresses, and modest fashion</p>
              <Link href="/catalog" className="btn">Shop Now</Link>
            </div>
          </div>
          {/* Slide 2 */}
          <div 
            className={`slide ${currentSlide === 1 ? 'active' : ''}`} 
            style={{ backgroundImage: 'url(/images/imageshero-slider-2.webp)' }}
          >
            <div className="slide-content">
              <h2>Wholesale Prices</h2>
              <p>Best prices for retailers and boutiques worldwide</p>
              <Link href="/catalog" className="btn">View Catalog</Link>
            </div>
          </div>
          {/* Slide 3 */}
          <div 
            className={`slide ${currentSlide === 2 ? 'active' : ''}`} 
            style={{ backgroundImage: 'url(/images/imageshero-slider-3.webp)' }}
          >
            <div className="slide-content">
              <h2>Fast Worldwide Shipping</h2>
              <p>Delivery to over 30 countries with reliable carriers</p>
              <Link href="/catalog" className="btn">Learn More</Link>
            </div>
          </div>
        </div>
        <div className="slider-dots">
          <span 
            className={`dot ${currentSlide === 0 ? 'active' : ''}`} 
            onClick={() => setCurrentSlide(0)}
          ></span>
          <span 
            className={`dot ${currentSlide === 1 ? 'active' : ''}`} 
            onClick={() => setCurrentSlide(1)}
          ></span>
          <span 
            className={`dot ${currentSlide === 2 ? 'active' : ''}`} 
            onClick={() => setCurrentSlide(2)}
          ></span>
        </div>
      </section>

      {/* Ranked Section */}
      <section className="ranked-section">
        <div className="container">
          <span className="badge">🏆 GLOBAL LEADER</span>
          <h3>We're Ranked #1 on Google for:</h3>
          <div className="ranked-horizontal">
            <div className="ranked-h-item">
              <span className="simple-icon" style={{ color: '#ff5a00' }}>👗</span>
              <span><strong>Hijab Clothes Wholesale</strong> #1</span>
            </div>
            <div className="ranked-h-item">
              <span className="simple-icon" style={{ color: '#4facfe' }}>🧕</span>
              <span><strong>Hijab Fashion Wholesale</strong> #1</span>
            </div>
            <div className="ranked-h-item">
              <span className="simple-icon" style={{ color: '#f093fb' }}>👚</span>
              <span><strong>Hijab Outfit Wholesale</strong> #1</span>
            </div>
          </div>
          <Link href="/why-were-number-one" className="ranked-btn">See Why We're #1 →</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">Your satisfaction is our priority</p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Image src="/images/mix-icon.webp" alt="Wholesale hijab clothing - mix different Turkish products in one order for boutique owners" width={100} height={100} loading="lazy" />
              </div>
              <h3>Mix Your Order</h3>
              <p>All your collections in one. You can enjoy ordering your desired quantity and costs.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Image src="/images/no-minimum-icon.webp" alt="No minimum order quantity for Turkish hijab wholesale - order any amount" width={100} height={100} loading="lazy" />
              </div>
              <h3>No Minimum Order</h3>
              <p>No minimum order, thanks to our consolidation service. Order what you need.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Image src="/images/original-icon.webp" alt="100% original Turkish made hijab and modest fashion products" width={100} height={100} loading="lazy" />
              </div>
              <h3>100% Original Turkish Made</h3>
              <p>We are not selling copy or imitation products. Only authentic Turkish quality.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Image src="/images/service-icon.webp" alt="24/7 customer service for hijab wholesale buyers worldwide" width={100} height={100} loading="lazy" />
              </div>
              <h3>24/7 Customer Service</h3>
              <p>Customer service at your disposal with order placing and personalized support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Private Label Section */}
      <section className="privatelabel-section">
        <div className="container">
          <div className="privatelabel-wrapper">
            <div className="privatelabel-image">
              <Image src="/images/private-label.webp" alt="Private Label Service for hijab brands - custom packaging with your logo for bulk orders from Turkey" width={800} height={800} loading="lazy" />
            </div>
            <div className="privatelabel-content">
              <span className="privatelabel-badge">Premium Service</span>
              <h2 className="privatelabel-title">Your Brand,<br />Your Identity</h2>
              <p className="privatelabel-description">
                Offer your customers exclusive designs with our <strong>Private Label</strong> service. 
                We customize products with your logo, packaging, and specifications for regular bulk orders. 
                Build your own brand with Turkish quality and global reach.
              </p>
              <ul className="privatelabel-features">
                <li><i className="fas fa-check-circle"></i> Custom packaging with your logo</li>
                <li><i className="fas fa-check-circle"></i> Exclusive designs for your brand</li>
                <li><i className="fas fa-check-circle"></i> Flexible MOQ for regular orders</li>
                <li><i className="fas fa-check-circle"></i> Quality control & fast shipping</li>
              </ul>
              
              <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <Link href="/private-label-service" className="privatelabel-btn" style={{ background: 'transparent', color: 'var(--primary)', border: '2px solid var(--primary)', boxShadow: 'none' }}>
                  <i className="fas fa-newspaper"></i> Read Full Guide
                </Link>
                
                <a href="https://wa.me/905519522448?text=I'm%20interested%20in%20your%20Private%20Label%20service%20for%20regular%20orders.%20Please%20provide%20more%20information." 
                   className="privatelabel-btn" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i> Inquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Explore Our Collections</h2>
          <p className="section-subtitle">Find the perfect style for every occasion</p>
          <div className="categories-grid">
            <Link href="/abayas" className="category-card">
              <Image src="/images/category-abayas.webp" alt="Wholesale Turkish abayas" width={600} height={800} loading="lazy" />
              <div className="category-info">
                <h3>Abayas</h3>
                <p>Medine silk, krep & more</p>
              </div>
            </Link>
            
            <Link href="/modest-dresses" className="category-card">
              <Image src="/images/category-dresses.webp" alt="Wholesale modest dresses" width={600} height={800} loading="lazy" />
              <div className="category-info">
                <h3>Modest Dresses</h3>
                <p>Casual & formal styles</p>
              </div>
            </Link>
            
            <Link href="/modest-skirt-sets" className="category-card">
              <Image src="/images/category-skirt-sets.webp" alt="Wholesale modest skirt sets" width={600} height={800} loading="lazy" />
              <div className="category-info">
                <h3>Skirt Sets</h3>
                <p>2-piece skirt outfits</p>
              </div>
            </Link>
            
            <Link href="/modest-evening-dresses" className="category-card">
              <Image src="/images/category-evening-dresses.webp" alt="Wholesale modest evening dresses" width={600} height={800} loading="lazy" />
              <div className="category-info">
                <h3>Evening Dresses</h3>
                <p>Special occasion wear</p>
              </div>
            </Link>
            
            <Link href="/modest-pants-sets" className="category-card">
              <Image src="/images/178.webp" alt="Wholesale modest pants sets" width={600} height={800} loading="lazy" />
              <div className="category-info">
                <h3>Pants Sets</h3>
                <p>2-piece pants outfits</p>
              </div>
            </Link>
            
            <Link href="/hijab" className="category-card">
              <Image src="/images/category-hijabs.webp" alt="Wholesale Turkish hijabs" width={600} height={800} loading="lazy" />
              <div className="category-info">
                <h3>Hijab</h3>
                <p>Silk, chiffon, cotton</p>
              </div>
            </Link>
            
            <Link href="/prayer-clothes" className="category-card">
              <Image src="/images/53.webp" alt="Wholesale prayer clothes" width={600} height={800} loading="lazy" />
              <div className="category-info">
                <h3>Prayer Clothes</h3>
                <p>Salah outfits & dresses</p>
              </div>
            </Link>
            
            <Link href="/modest-sportswear" className="category-card">
              <Image src="/images/category-sportswear.webp" alt="Wholesale modest sportswear" width={600} height={800} loading="lazy" />
              <div className="category-info">
                <h3>Sportswear</h3>
                <p>Activewear & sports</p>
              </div>
            </Link>
            
            <Link href="/burkini" className="category-card">
              <Image src="/images/category-swimwear.webp" alt="Wholesale burkini" width={600} height={800} loading="lazy" />
              <div className="category-info">
                <h3>Burkini</h3>
                <p>Modest swim collection</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Latest Products</h2>
          <p className="section-subtitle">Check out our newest arrivals</p>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>Loading products...</div>
          ) : products.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px' }}>No products found</div>
          ) : (
            <>
              <div className="products-grid">
                {products.slice(0, 8).map((product: any) => (
                  <Link 
                    href={`/product/${product._id}`} 
                    key={product._id} 
                    className="product-card"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <div className="product-image">
                      <img 
                        src={product.imageUrl || '/images/default.webp'} 
                        alt={product.name_en || 'Product'} 
                        width={400} 
                        height={400} 
                        loading="lazy"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/images/default.webp'
                        }}
                      />
                    </div>
                    <div className="product-info">
                      <h3>{product.name_en || 'Product'}</h3>
                      <div className="product-price">
                        ${product.price_usd ? product.price_usd.toFixed(2) : '0.00'}
                      </div>
                      <button 
                        className="add-to-cart" 
                        onClick={(e) => {
                          e.preventDefault()
                          const event = new CustomEvent('addToCart', { detail: product })
                          window.dispatchEvent(event)
                        }}
                      >
                        Add to Inquiry
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="view-all-container">
                <Link href="/catalog" className="btn-view-all">View All Products</Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Channels Section */}
      <section className="channels-section">
        <div className="container">
          <h2 className="section-title">Join Our Communities</h2>
          <p className="section-subtitle">Follow us on WhatsApp and Telegram for latest updates and exclusive offers</p>
          <div className="channels-grid">
            <div className="channel-card whatsapp-card">
              <div className="channel-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <h3>WhatsApp Channel</h3>
              <p>Join our WhatsApp channel for daily new arrivals, special discounts, and early access to collections.</p>
              <div className="channel-stats">
                <span><i className="fas fa-users"></i> 1,500+ members</span>
                <span><i className="fas fa-image"></i> Daily updates</span>
              </div>
              <a href="https://whatsapp.com/channel/example" className="channel-btn whatsapp-btn" target="_blank" rel="noopener noreferrer">Join WhatsApp Channel</a>
            </div>
            <div className="channel-card telegram-card">
              <div className="channel-icon">
                <i className="fab fa-telegram-plane"></i>
              </div>
              <h3>Telegram Channel</h3>
              <p>Join our Telegram channel for exclusive content, styling tips, and special promotions.</p>
              <div className="channel-stats">
                <span><i className="fas fa-users"></i> 11,000+ members</span>
                <span><i className="fas fa-video"></i> Video tutorials</span>
              </div>
              <a href="https://t.me/hijabfashionmall" className="channel-btn telegram-btn" target="_blank" rel="noopener noreferrer">Join Telegram Channel</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Find answers to common questions about our services</p>
          <div className="faq-grid-cards">
            <div className="faq-card">
              <div className="faq-card-icon">
                <i className="fas fa-store"></i>
              </div>
              <h3>Who are we?</h3>
              <p>Hijab Fashion Mall is the leading Turkish marketplace for fashion retailers and boutiques worldwide, connecting wholesalers with hijab fashion retailers globally.</p>
            </div>
            <div className="faq-card">
              <div className="faq-card-icon">
                <i className="fas fa-shopping-cart"></i>
              </div>
              <h3>How to place an order?</h3>
              <p>Browse our catalog, select your items, add to inquiry cart, and send via WhatsApp. Our team will confirm your order within 24 hours.</p>
            </div>
            <div className="faq-card">
              <div className="faq-card-icon">
                <i className="fas fa-globe"></i>
              </div>
              <h3>Do you ship worldwide?</h3>
              <p>Yes! We ship to 50+ countries with reliable carriers. Fast door-to-door delivery with tracking number provided.</p>
            </div>
            <div className="faq-card">
              <div className="faq-card-icon">
                <i className="fas fa-credit-card"></i>
              </div>
              <h3>Payment methods?</h3>
              <p>We accept bank transfer, Western Union, and major credit cards. Secure payment processing for your convenience.</p>
            </div>
            <div className="faq-card">
              <div className="faq-card-icon">
                <i className="fas fa-boxes"></i>
              </div>
              <h3>Minimum order?</h3>
              <p>No minimum quantity! Order what you need - perfect for small boutiques and large retailers alike.</p>
            </div>
            <div className="faq-card">
              <div className="faq-card-icon">
                <i className="fas fa-truck"></i>
              </div>
              <h3>Order tracking?</h3>
              <p>Once shipped, you'll receive carrier name and tracking number to follow your package in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Trusted by retailers worldwide</p>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-image">
                <Image src="/images/testimonial-1.webp" alt="Sarah Ahmed - hijab boutique owner from London" width={150} height={150} loading="lazy" />
              </div>
              <h4>Sarah Ahmed</h4>
              <div className="location">London, UK</div>
              <p className="testimonial-text">"The quality of the hijabs is exceptional. My customers love the Turkish fabrics."</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-image">
                <Image src="/images/testimonial-2.webp" alt="Fatima Khan - boutique owner from New York" width={150} height={150} loading="lazy" />
              </div>
              <h4>Fatima Khan</h4>
              <div className="location">New York, USA</div>
              <p className="testimonial-text">"Reliable supplier with consistent quality. Fast shipping and helpful service."</p>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-image">
                <Image src="/images/testimonial-3.webp" alt="Mariam Al-Mansoori - retailer from Dubai" width={150} height={150} loading="lazy" />
              </div>
              <h4>Mariam Al-Mansoori</h4>
              <div className="location">Dubai, UAE</div>
              <p className="testimonial-text">"The variety of products is impressive. I always find something new for my boutique."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="blogs-section">
        <div className="container">
          <h2 className="section-title">Useful Blogs</h2>
          <p className="section-subtitle">Practical guides to help you make informed decisions for your business.</p>
          <div className="blogs-grid">
            <div className="blog-card">
              <div className="blog-image">
                <Image src="/images/blog-1.webp" alt="Guide to starting online hijab store" width={400} height={225} loading="lazy" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Buying Guide</span>
                <h3>Online Store</h3>
                <p>How to create a successful online store selling hijab women's clothing: the complete 2026 guide.</p>
                <Link href="/online-store-guide" className="blog-link">Read More <i className="fas fa-arrow-left"></i></Link>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <Image src="/images/blog-2.webp" alt="How to start a boutique selling hijab clothing" width={400} height={225} loading="lazy" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Buying Guide</span>
                <h3>Physical Store</h3>
                <p>How to start a boutique selling hijab women's clothing in 2026: importing from Türkiye.</p>
                <Link href="/physical-store-guide" className="blog-link">Read More <i className="fas fa-arrow-left"></i></Link>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image">
                <Image src="/images/blog-3.webp" alt="The rise of modest fashion" width={400} height={225} loading="lazy" />
              </div>
              <div className="blog-content">
                <span className="blog-category">Market Guide</span>
                <h3>The Rise of Modest Fashion</h3>
                <p>Embracing hijab styles in Europe: trends and opportunities for retailers.</p>
                <Link href="/modest-fashion-trends" className="blog-link">Read More <i className="fas fa-arrow-left"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}