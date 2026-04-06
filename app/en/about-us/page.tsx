'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { 
  FaStore, FaGlobe, FaTshirt, FaCalendarAlt, 
  FaBoxes, FaBan, FaCertificate, FaHeadset, FaTag, FaShippingFast,
  FaQuoteRight
} from 'react-icons/fa'

export default function AboutPageEn() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).updateCartCount) {
      (window as any).updateCartCount()
    }
  }, [])

  return (
    <>
      <Head>
        <title>About Us - Hijab Fashion Mall | Wholesale Turkish Fashion</title>
        <meta name="description" content="Since 2019, Hijab Fashion Mall connects retailers worldwide with authentic Turkish hijab wear. No minimum order, worldwide shipping, 5000+ products." />
        <meta name="keywords" content="wholesale turkish hijab, turkish fashion, istanbul hijab supplier" />
        <link rel="canonical" href="https://hijabfashionmall.com/en/about-us" />
      </Head>

      <div dir="ltr">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <div className="container">
            <ul>
              <li><Link href="/en">Home</Link></li>
              <li className="active">About Us</li>
            </ul>
          </div>
        </div>

        {/* Page Header */}
        <section className="page-header">
          <div className="container">
            <h1>About Hijab Fashion Mall</h1>
            <p>Your trusted partner for premium Turkish hijab wear since 2019. We connect retailers worldwide with authentic Turkish fashion.</p>
          </div>
        </section>

        {/* About Section - No Image */}
        <section className="about-section">
          <div className="container">
            <div className="about-content-full">
              <h2>Who We Are</h2>
              <p>Hijab Fashion Mall is a Turkish wholesale company based in Istanbul, specializing in premium hijab wear and Turkish fashion. Since our establishment in 2019, we have been committed to helping retailers and stores worldwide source authentic Turkish products from the best manufacturers.</p>
              
              <p>We work with the best Turkish manufacturers to bring you high-quality products at competitive prices, focusing on customer convenience and ensuring you get the best value for your money.</p>
              
              <div className="about-highlight">
                <p><FaQuoteRight /> "We don't just sell products; we build long-term partnerships with our customers. Your success is our success."</p>
              </div>
              
              <p>With over 5,000 products across 9 categories, we offer everything from elegant abayas to modern sportswear, all made in Turkey with the finest materials and craftsmanship.</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon"><FaStore /></div>
                <div className="stat-number">250+</div>
                <div className="stat-label">Brands</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaGlobe /></div>
                <div className="stat-number">50+</div>
                <div className="stat-label">Countries</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaTshirt /></div>
                <div className="stat-number">5000+</div>
                <div className="stat-label">Products</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaCalendarAlt /></div>
                <div className="stat-number">2019</div>
                <div className="stat-label">Founded</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">Services designed to help your business grow</p>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon"><FaBoxes /></div>
                <h3>Mix Your Order</h3>
                <p>Combine different products in one shipment. Order exactly what you need across multiple categories.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaBan /></div>
                <h3>No Minimum Order</h3>
                <p>Start with any quantity. Perfect for small boutiques and large retailers alike.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaCertificate /></div>
                <h3>100% Original Made in Turkey</h3>
                <p>Authentic products directly from Turkish manufacturers. No copies or imitations.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaHeadset /></div>
                <h3>24/7 Customer Support</h3>
                <p>We're always here to help with orders, inquiries, and personal assistance.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaTag /></div>
                <h3>Private Label Service</h3>
                <p>Build your own brand with custom packaging and exclusive designs for regular orders.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaShippingFast /></div>
                <h3>Worldwide Shipping</h3>
                <p>Fast delivery to 50+ countries via reliable carriers with tracking available.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="container">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>To make premium Turkish fashion accessible to retailers worldwide, without the complexities of international sourcing. We are here to be your trusted partner, ensuring quality, reliability, and success for your business.</p>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        /* Breadcrumb */
        .breadcrumb { padding: 20px 0; background: #f5f5f5; border-bottom: 1px solid #eee; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .breadcrumb ul { list-style: none; display: flex; flex-wrap: wrap; gap: 10px; }
        .breadcrumb li { font-size: 14px; color: #555; }
        .breadcrumb li:not(:last-child):after { content: "›"; margin-left: 10px; color: #555; }
        .breadcrumb a { color: #555; text-decoration: none; transition: color 0.3s; }
        .breadcrumb a:hover { color: #ff5a00; }
        .breadcrumb .active { color: #222; font-weight: 600; }

        /* Page Header */
        .page-header { background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%); padding: 60px 0; text-align: center; border-bottom: 1px solid #eee; }
        .page-header h1 { font-size: 48px; color: #222; margin-bottom: 20px; font-weight: 700; }
        .page-header p { font-size: 18px; color: #555; max-width: 800px; margin: 0 auto; }

        /* About Section - No Image */
        .about-section { padding: 80px 0; }
        .about-content-full { max-width: 900px; margin: 0 auto; text-align: center; }
        .about-content-full h2 { font-size: 36px; color: #222; margin-bottom: 30px; font-weight: 700; }
        .about-content-full p { font-size: 16px; color: #555; line-height: 1.8; margin-bottom: 20px; text-align: justify; }
        .about-highlight { background: #f5f5f5; padding: 30px; border-radius: 15px; margin: 30px 0; border-left: 4px solid #ff5a00; text-align: center; }
        .about-highlight p { margin-bottom: 0; font-size: 18px; font-weight: 500; color: #222; display: flex; align-items: center; justify-content: center; gap: 10px; text-align: center; }
        .about-highlight svg { color: #ff5a00; font-size: 24px; flex-shrink: 0; }

        /* Stats Section */
        .stats-section { padding: 60px 0; background: #f5f5f5; }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; text-align: center; }
        .stat-card { background: #fff; padding: 40px 20px; border-radius: 15px; transition: transform 0.3s; }
        .stat-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(255, 90, 0, 0.1); }
        .stat-icon { width: 80px; height: 80px; margin: 0 auto 20px; background: rgba(255, 90, 0, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; color: #ff5a00; }
        .stat-number { font-size: 36px; font-weight: 700; color: #222; margin-bottom: 10px; }
        .stat-label { font-size: 16px; color: #555; }

        /* Services Section */
        .services-section { padding: 80px 0; }
        .section-title { text-align: center; font-size: 36px; color: #222; margin-bottom: 15px; font-weight: 700; }
        .section-subtitle { text-align: center; color: #555; margin-bottom: 40px; font-size: 18px; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 40px; }
        .service-card { background: #fff; padding: 40px 30px; border-radius: 15px; text-align: center; transition: transform 0.3s; border: 1px solid rgba(0,0,0,0.02); }
        .service-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(255, 90, 0, 0.1); }
        .service-icon { width: 80px; height: 80px; margin: 0 auto 20px; background: rgba(255, 90, 0, 0.05); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; color: #ff5a00; transition: all 0.3s; }
        .service-card:hover .service-icon { background: #ff5a00; color: #fff; }
        .service-card h3 { font-size: 20px; font-weight: 700; color: #222; margin-bottom: 15px; }
        .service-card p { font-size: 14px; color: #555; line-height: 1.6; }

        /* Mission Section */
        .mission-section { padding: 60px 0; background: linear-gradient(135deg, #ff5a00 0%, #e04e00 100%); color: white; }
        .mission-content { text-align: center; max-width: 800px; margin: 0 auto; }
        .mission-content h2 { font-size: 36px; margin-bottom: 20px; color: white; }
        .mission-content p { font-size: 18px; line-height: 1.8; margin-bottom: 30px; opacity: 0.9; }

        /* Responsive */
        @media (max-width: 992px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .about-content-full { padding: 0 20px; }
        }

        @media (max-width: 768px) {
          .page-header h1 { font-size: 32px; }
          .stats-grid { grid-template-columns: 1fr; }
          .services-grid { grid-template-columns: 1fr; }
          .about-content-full h2 { font-size: 28px; }
          .about-highlight p { font-size: 16px; flex-direction: column; }
        }
      `}</style>
    </>
  )
}