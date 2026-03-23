'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function AboutPage() {
  useEffect(() => {
    // تحديث عدد السلة عند تحميل الصفحة
    if (typeof window !== 'undefined' && (window as any).updateCartCount) {
      (window as any).updateCartCount()
    }
  }, [])

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li className="active">About Us</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Hijab Fashion Mall</h1>
          <p>Your trusted partner for premium Turkish hijab wear since 2019. We connect retailers worldwide with authentic Turkish modest fashion.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img 
                src="/images/about-istanbul.webp" 
                alt="Hijab Fashion Mall - Istanbul, Turkey" 
                loading="lazy" 
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22400%22%20viewBox%3D%220%200%20600%20400%22%3E%3Crect%20width%3D%22600%22%20height%3D%22400%22%20fill%3D%22%23f5f5f5%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-family%3D%22Arial%22%20font-size%3D%2216%22%20fill%3D%22%23999%22%3EHijab%20Fashion%20Mall%3C%2Ftext%3E%3C%2Fsvg%3E'
                }}
              />
            </div>
            <div className="about-content">
              <h2>Who We Are</h2>
              <p>Hijab Fashion Mall is a Turkish wholesale company based in Istanbul, specializing in premium hijab wear and modest fashion. Since our founding in 2019, we've been dedicated to helping retailers and boutiques around the world source authentic Turkish products directly from manufacturers.</p>
              
              <p>Unlike traditional wholesalers who maintain their own inventory, we work as a curated sourcing platform. This means we partner with the best Turkish manufacturers to bring you the highest quality products at factory-direct prices, without the overhead of warehousing.</p>
              
              <div className="about-highlight">
                <p><i className="fas fa-quote-right"></i> "We don't just sell products; we build long-term partnerships with our clients. Your success is our success."</p>
              </div>
              
              <p>With over 1000+ products across 9 categories, we offer everything from elegant abayas to modern sportswear, all made in Turkey with the finest materials and craftsmanship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-store"></i>
              </div>
              <div className="stat-number">250+</div>
              <div className="stat-label">Fashion Brands</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-globe"></i>
              </div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-tshirt"></i>
              </div>
              <div className="stat-number">5000+</div>
              <div className="stat-label">Products</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
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
              <div className="service-icon">
                <i className="fas fa-boxes"></i>
              </div>
              <h3>Mix Your Order</h3>
              <p>Combine different products in one shipment. Order exactly what you need from various categories.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-ban"></i>
              </div>
              <h3>No Minimum Order</h3>
              <p>Start with any quantity. Perfect for small boutiques and large retailers alike.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>100% Original Turkish Made</h3>
              <p>Authentic products directly from Turkish manufacturers. No copies or imitations.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>24/7 Customer Service</h3>
              <p>We're always here to help with orders, inquiries, and personalized support.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-tag"></i>
              </div>
              <h3>Private Label Service</h3>
              <p>Build your brand with custom packaging and exclusive designs for regular orders.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-shipping-fast"></i>
              </div>
              <h3>Worldwide Shipping</h3>
              <p>Fast delivery to over 50 countries with reliable carriers and tracking provided.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>To make premium Turkish modest fashion accessible to retailers worldwide, without the complexity of international sourcing. We're here to be your trusted partner, ensuring quality, reliability, and success for your business.</p>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        /* Breadcrumb */
        .breadcrumb {
          padding: 20px 0;
          background: #f5f5f5;
          border-bottom: 1px solid #eee;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .breadcrumb ul {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .breadcrumb li {
          font-size: 14px;
          color: #555;
        }

        .breadcrumb li:not(:last-child):after {
          content: "›";
          margin-left: 10px;
          color: #555;
        }

        .breadcrumb a {
          color: #555;
          text-decoration: none;
          transition: color 0.3s;
        }

        .breadcrumb a:hover {
          color: #ff5a00;
        }

        .breadcrumb .active {
          color: #222;
          font-weight: 600;
        }

        /* Page Header */
        .page-header {
          background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
          padding: 60px 0;
          text-align: center;
          border-bottom: 1px solid #eee;
        }

        .page-header h1 {
          font-size: 48px;
          color: #222;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .page-header p {
          font-size: 18px;
          color: #555;
          max-width: 800px;
          margin: 0 auto;
        }

        /* About Section */
        .about-section {
          padding: 80px 0;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-image {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .about-image img {
          width: 100%;
          height: auto;
          display: block;
        }

        .about-content h2 {
          font-size: 36px;
          color: #222;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .about-content p {
          font-size: 16px;
          color: #555;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .about-highlight {
          background: #f5f5f5;
          padding: 30px;
          border-radius: 15px;
          margin: 30px 0;
          border-left: 4px solid #ff5a00;
        }

        .about-highlight p {
          margin-bottom: 0;
          font-size: 18px;
          font-weight: 500;
          color: #222;
        }

        .about-highlight i {
          color: #ff5a00;
          margin-right: 10px;
        }

        /* Stats Section */
        .stats-section {
          padding: 60px 0;
          background: #f5f5f5;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          text-align: center;
        }

        .stat-card {
          background: #fff;
          padding: 40px 20px;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.03);
          transition: transform 0.3s;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(255, 90, 0, 0.1);
        }

        .stat-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          background: rgba(255, 90, 0, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          color: #ff5a00;
        }

        .stat-number {
          font-size: 36px;
          font-weight: 700;
          color: #222;
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: 16px;
          color: #555;
        }

        /* Services Section */
        .services-section {
          padding: 80px 0;
        }

        .section-title {
          text-align: center;
          font-size: 36px;
          color: #222;
          margin-bottom: 15px;
          font-weight: 700;
        }

        .section-subtitle {
          text-align: center;
          color: #555;
          margin-bottom: 40px;
          font-size: 18px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .service-card {
          background: #fff;
          padding: 40px 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0,0,0,0.03);
          transition: transform 0.3s;
          border: 1px solid rgba(0,0,0,0.02);
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(255, 90, 0, 0.1);
        }

        .service-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          background: rgba(255, 90, 0, 0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          color: #ff5a00;
          transition: all 0.3s;
        }

        .service-card:hover .service-icon {
          background: #ff5a00;
          color: #fff;
        }

        .service-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #222;
          margin-bottom: 15px;
        }

        .service-card p {
          font-size: 14px;
          color: #555;
          line-height: 1.6;
        }

        /* Mission Section */
        .mission-section {
          padding: 60px 0;
          background: linear-gradient(135deg, #ff5a00 0%, #e04e00 100%);
          color: white;
        }

        .mission-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .mission-content h2 {
          font-size: 36px;
          margin-bottom: 20px;
          color: white;
        }

        .mission-content p {
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 30px;
          opacity: 0.9;
        }

        .mission-btn {
          background: white;
          color: #ff5a00;
          border: none;
          padding: 14px 40px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
          display: inline-block;
        }

        .mission-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        /* Team Section */
        .team-section {
          padding: 80px 0;
          background: #fff;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-top: 40px;
        }

        .team-card {
          text-align: center;
        }

        .team-image {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          margin: 0 auto 20px;
          overflow: hidden;
          border: 4px solid #f5f5f5;
          transition: all 0.3s;
        }

        .team-card:hover .team-image {
          border-color: #ff5a00;
        }

        .team-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .team-card h3 {
          font-size: 20px;
          font-weight: 700;
          color: #222;
          margin-bottom: 5px;
        }

        .team-card p {
          font-size: 14px;
          color: #555;
          margin-bottom: 15px;
        }

        .team-social {
          display: flex;
          gap: 10px;
          justify-content: center;
        }

        .team-social a {
          width: 36px;
          height: 36px;
          background: #f5f5f5;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #555;
          transition: all 0.3s;
        }

        .team-social a:hover {
          background: #ff5a00;
          color: white;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .services-grid,
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 32px;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .services-grid,
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}