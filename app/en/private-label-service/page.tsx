'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function PrivateLabelServicePage() {
  const [cart, setCart] = useState<any[]>([])

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (e) {
        console.error('Error parsing cart:', e)
      }
    }
  }, [])

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    // Update cart count in header
    const event = new CustomEvent('cartUpdated', { detail: cart.length })
    window.dispatchEvent(event)
    
    const cartCountElement = document.getElementById('cartCount')
    if (cartCountElement) {
      cartCountElement.textContent = cart.length.toString()
    }
  }, [cart])

  return (
    <>
      <style>{`
        /* جميع الأنماط - نفس التصميم الأصلي */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            color: #333;
            line-height: 1.6;
            background: #fff;
        }

        :root {
            --primary: #ff5a00;
            --primary-dark: #e04e00;
            --primary-light: #ff7b33;
            --primary-soft: #fff0e6;
            --black: #000000;
            --dark-gray: #222;
            --medium-gray: #555;
            --light-gray: #f5f5f5;
            --white: #fff;
            --whatsapp: #25d366;
            --whatsapp-dark: #128C7E;
            --telegram: #0088cc;
            --telegram-dark: #006699;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        /* ===== Buttons ===== */
        .btn, .btn-primary {
            display: inline-block;
            background: var(--primary);
            color: var(--white);
            padding: 14px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(255, 90, 0, 0.2);
        }

        .btn:hover, .btn-primary:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 90, 0, 0.3);
        }

        .btn-outline {
            display: inline-block;
            background: transparent;
            color: var(--primary);
            padding: 14px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            border: 2px solid var(--primary);
        }

        .btn-outline:hover {
            background: var(--primary);
            color: var(--white);
            transform: translateY(-2px);
        }

        .btn-whatsapp {
            background: var(--whatsapp);
            color: var(--white);
            padding: 14px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
        }

        .btn-whatsapp:hover {
            background: var(--whatsapp-dark);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }

        /* ===== Page Header ===== */
        .page-header {
            background: linear-gradient(135deg, var(--primary-soft) 0%, #ffffff 100%);
            padding: 60px 0 40px;
            text-align: center;
            border-bottom: 1px solid #eee;
            position: relative;
            overflow: hidden;
        }

        .page-header::before {
            content: 'PRIVATE LABEL';
            position: absolute;
            top: 20%;
            right: 5%;
            font-size: 120px;
            font-weight: 800;
            color: rgba(255, 90, 0, 0.03);
            z-index: 0;
            line-height: 1;
            white-space: nowrap;
        }

        .page-header .container {
            position: relative;
            z-index: 1;
        }

        .page-header h1 {
            font-size: 48px;
            color: var(--black);
            margin-bottom: 20px;
            font-weight: 800;
        }

        .page-header h1 span {
            color: var(--primary);
            position: relative;
            display: inline-block;
        }

        .page-header h1 span::after {
            content: '';
            position: absolute;
            bottom: 5px;
            left: 0;
            width: 100%;
            height: 8px;
            background: rgba(255, 90, 0, 0.2);
            z-index: -1;
        }

        .page-header p {
            font-size: 18px;
            color: var(--medium-gray);
            max-width: 800px;
            margin: 0 auto;
        }

        .page-header .breadcrumb {
            font-size: 14px;
            color: var(--medium-gray);
            margin-bottom: 20px;
        }

        .page-header .breadcrumb a {
            color: var(--primary);
            text-decoration: none;
        }

        .page-header .breadcrumb a:hover {
            text-decoration: underline;
        }

        /* ===== Service Intro ===== */
        .service-intro {
            padding: 80px 0;
            background: var(--white);
        }

        .intro-wrapper {
            display: flex;
            align-items: center;
            gap: 60px;
        }

        .intro-content {
            flex: 1;
        }

        .intro-content h2 {
            font-size: 36px;
            color: var(--black);
            margin-bottom: 20px;
            font-weight: 700;
        }

        .intro-content h2 span {
            color: var(--primary);
        }

        .intro-content p {
            color: var(--medium-gray);
            margin-bottom: 20px;
            font-size: 16px;
            line-height: 1.8;
        }

        .intro-content p.lead {
            font-size: 18px;
            font-weight: 500;
            color: var(--dark-gray);
        }

        .intro-image {
            flex: 1;
        }

        .intro-image img {
            width: 100%;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .badge-2026 {
            display: inline-block;
            background: var(--primary);
            color: var(--white);
            padding: 5px 15px;
            border-radius: 50px;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 20px;
        }

        /* ===== Why Private Label ===== */
        .why-section {
            padding: 80px 0;
            background: var(--light-gray);
        }

        .why-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-top: 50px;
        }

        .why-card {
            background: var(--white);
            padding: 40px 30px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            transition: transform 0.3s;
            border: 1px solid #eee;
        }

        .why-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(255,90,0,0.1);
        }

        .why-icon {
            width: 70px;
            height: 70px;
            background: var(--primary-soft);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 25px;
        }

        .why-icon i {
            font-size: 32px;
            color: var(--primary);
        }

        .why-card h3 {
            font-size: 22px;
            color: var(--black);
            margin-bottom: 15px;
            font-weight: 700;
        }

        .why-card p {
            color: var(--medium-gray);
            line-height: 1.7;
        }

        /* ===== Services Grid ===== */
        .services-section {
            padding: 80px 0;
            background: var(--white);
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
            margin-top: 50px;
        }

        .service-item {
            display: flex;
            gap: 25px;
            padding: 30px;
            background: var(--white);
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            transition: all 0.3s;
            border: 1px solid #eee;
        }

        .service-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(255,90,0,0.1);
            border-color: var(--primary);
        }

        .service-icon {
            width: 80px;
            height: 80px;
            background: var(--primary-soft);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .service-icon i {
            font-size: 36px;
            color: var(--primary);
        }

        .service-content h3 {
            font-size: 22px;
            color: var(--black);
            margin-bottom: 10px;
            font-weight: 700;
        }

        .service-content p {
            color: var(--medium-gray);
            line-height: 1.7;
        }

        .service-features {
            margin-top: 15px;
            list-style: none;
        }

        .service-features li {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
            color: var(--medium-gray);
            font-size: 14px;
        }

        .service-features li i {
            color: var(--primary);
            font-size: 14px;
        }

        /* ===== Process Steps ===== */
        .process-section {
            padding: 80px 0;
            background: var(--light-gray);
        }

        .process-steps {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            margin-top: 50px;
            position: relative;
        }

        .process-step {
            text-align: center;
            position: relative;
        }

        .process-step:not(:last-child)::after {
            content: '→';
            position: absolute;
            top: 40px;
            right: -20px;
            font-size: 30px;
            color: var(--primary);
            opacity: 0.5;
        }

        .step-number {
            width: 80px;
            height: 80px;
            background: var(--primary-soft);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
            font-size: 32px;
            font-weight: 800;
            color: var(--primary);
            border: 2px dashed var(--primary);
        }

        .process-step h3 {
            font-size: 20px;
            color: var(--black);
            margin-bottom: 10px;
            font-weight: 700;
        }

        .process-step p {
            color: var(--medium-gray);
            font-size: 15px;
        }

        /* ===== Brand Building Section ===== */
        .brand-section {
            padding: 80px 0;
            background: linear-gradient(135deg, var(--black) 0%, #1a1a1a 100%);
            color: var(--white);
        }

        .brand-content {
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }

        .brand-content h2 {
            font-size: 42px;
            margin-bottom: 20px;
            font-weight: 800;
        }

        .brand-content h2 span {
            color: var(--primary);
        }

        .brand-content p {
            color: rgba(255,255,255,0.8);
            margin-bottom: 30px;
            font-size: 18px;
            line-height: 1.8;
        }

        .brand-stats {
            display: flex;
            justify-content: center;
            gap: 50px;
            margin-top: 40px;
        }

        .brand-stat {
            text-align: center;
        }

        .brand-stat .number {
            font-size: 48px;
            font-weight: 800;
            color: var(--primary);
            line-height: 1.2;
        }

        .brand-stat .label {
            color: rgba(255,255,255,0.6);
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }

        /* ===== FAQ Section ===== */
        .faq-section {
            padding: 80px 0;
            background: var(--white);
        }

        .faq-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            margin-top: 50px;
        }

        .faq-item {
            padding: 30px;
            background: var(--white);
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            border: 1px solid #eee;
        }

        .faq-question {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 15px;
        }

        .faq-question i {
            font-size: 24px;
            color: var(--primary);
        }

        .faq-question h3 {
            font-size: 18px;
            color: var(--black);
            font-weight: 600;
        }

        .faq-answer {
            color: var(--medium-gray);
            line-height: 1.7;
            padding-left: 39px;
        }

        /* ===== CTA Section ===== */
        .cta-section {
            padding: 80px 0;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: var(--white);
            text-align: center;
        }

        .cta-content {
            max-width: 700px;
            margin: 0 auto;
        }

        .cta-content h2 {
            font-size: 42px;
            margin-bottom: 20px;
            font-weight: 800;
        }

        .cta-content p {
            font-size: 18px;
            margin-bottom: 30px;
            opacity: 0.9;
        }

        .cta-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .cta-btn-primary {
            background: var(--white);
            color: var(--primary);
            padding: 16px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 18px;
            transition: all 0.3s;
        }

        .cta-btn-primary:hover {
            background: var(--black);
            color: var(--white);
            transform: translateY(-2px);
        }

        .cta-btn-whatsapp {
            background: var(--whatsapp);
            color: var(--white);
            padding: 16px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 18px;
            transition: all 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }

        .cta-btn-whatsapp:hover {
            background: var(--whatsapp-dark);
            transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 992px) {
            .intro-wrapper {
                flex-direction: column;
            }
            
            .why-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .services-grid {
                grid-template-columns: 1fr;
            }
            
            .process-steps {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .process-step:not(:last-child)::after {
                display: none;
            }
            
            .faq-grid {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 768px) {
            .page-header h1 {
                font-size: 36px;
            }
            
            .intro-content h2 {
                font-size: 28px;
            }
            
            .why-grid {
                grid-template-columns: 1fr;
            }
            
            .process-steps {
                grid-template-columns: 1fr;
            }
            
            .brand-stats {
                flex-direction: column;
                gap: 30px;
            }
            
            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .cta-btn-primary, .cta-btn-whatsapp {
                width: 100%;
                text-align: center;
            }
        }
      `}</style>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link> <span>&gt;</span> <span>Private Label Service</span>
          </div>
          <h1>Private Label <span>Service 2026</span></h1>
          <p>Build your own hijab brand with our comprehensive private label solution. Complete customization from labels to packaging.</p>
        </div>
      </section>

      {/* Service Intro */}
      <section className="service-intro">
        <div className="container">
          <div className="intro-wrapper">
            <div className="intro-content">
              <span className="badge-2026">✨ 2026 Edition</span>
              <h2>Create Your <span>Own Brand Identity</span> in the Modest Fashion Market</h2>
              <p className="lead">In today's competitive fashion landscape, having a distinctive brand identity is no longer optional—it's essential for success and longevity.</p>
              <p>Our comprehensive private label service empowers you to build and scale your own hijab brand without the complexities of manufacturing. We provide premium Turkish hijab wear that becomes a blank canvas for your brand vision, allowing you to focus on what matters most: growing your business and connecting with your customers.</p>
              <p>Whether you're launching a new boutique, expanding an existing business, or creating an exclusive collection, our private label solution gives you the flexibility and quality you need to stand out in the modest fashion market.</p>
            </div>
            <div className="intro-image">
              <Image 
                src="/images/private-label-intro.webp" 
                alt="Private Label Service for Hijab Wear" 
                width={500} 
                height={400} 
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/default.webp'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Private Label Section */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">Why <span>Private Label</span> Matters in 2026</h2>
          <p className="section-subtitle">The key to building a sustainable and recognizable fashion brand</p>
          
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <i className="fas fa-crown"></i>
              </div>
              <h3>Brand Ownership</h3>
              <p>Build a brand that's truly yours. Private labeling allows you to create a unique identity that customers recognize and trust, setting you apart from competitors selling generic products.</p>
            </div>
            
            <div className="why-card">
              <div className="why-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Long-Term Growth</h3>
              <p>Establish brand loyalty and recurring customers. When you have your own label, customers return to your brand specifically, creating sustainable business growth and higher profit margins.</p>
            </div>
            
            <div className="why-card">
              <div className="why-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Premium Positioning</h3>
              <p>Position your products as premium offerings. Your own label conveys quality and exclusivity, allowing you to build a brand that commands respect and premium pricing in the market.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Grid */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Comprehensive <span>Private Label Services</span></h2>
          <p className="section-subtitle">Choose exactly what you need to bring your brand vision to life</p>
          
          <div className="services-grid">
            {/* Service 1: Custom Labels */}
            <div className="service-item">
              <div className="service-icon">
                <i className="fas fa-tag"></i>
              </div>
              <div className="service-content">
                <h3>Custom Woven Labels</h3>
                <p>Premium quality woven labels with your brand name, logo, and care instructions. Available in various sizes, colors, and finishes to match your brand aesthetic.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> High-quality woven satin</li>
                  <li><i className="fas fa-check"></i> Multiple color options</li>
                  <li><i className="fas fa-check"></i> Custom sizes and shapes</li>
                  <li><i className="fas fa-check"></i> Care label integration</li>
                </ul>
              </div>
            </div>
            
            {/* Service 2: Hang Tags */}
            <div className="service-item">
              <div className="service-icon">
                <i className="fas fa-tags"></i>
              </div>
              <div className="service-content">
                <h3>Custom Hang Tags</h3>
                <p>Professional hang tags that communicate your brand story and product information. Design your own or work with our team to create tags that impress.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Premium cardstock options</li>
                  <li><i className="fas fa-check"></i> Spot UV, foil stamping</li>
                  <li><i className="fas fa-check"></i> Custom shapes and sizes</li>
                  <li><i className="fas fa-check"></i> String, elastic, or ribbon attachments</li>
                </ul>
              </div>
            </div>
            
            {/* Service 3: Custom Packaging */}
            <div className="service-item">
              <div className="service-icon">
                <i className="fas fa-box"></i>
              </div>
              <div className="service-content">
                <h3>Custom Packaging</h3>
                <p>Create a complete unboxing experience with custom packaging that reflects your brand. From poly bags to boxes, we help you design packaging that delights customers.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Custom printed poly bags</li>
                  <li><i className="fas fa-check"></i> Branded boxes and mailers</li>
                  <li><i className="fas fa-check"></i> Tissue paper and stickers</li>
                  <li><i className="fas fa-check"></i> Eco-friendly options available</li>
                </ul>
              </div>
            </div>
            
            {/* Service 4: Complete Branding Package */}
            <div className="service-item">
              <div className="service-icon">
                <i className="fas fa-palette"></i>
              </div>
              <div className="service-content">
                <h3>Complete Branding Package</h3>
                <p>The ultimate solution for serious brand builders. We coordinate all elements—labels, tags, and packaging—to create a cohesive, professional brand identity across your entire product line.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Coordinated design across all elements</li>
                  <li><i className="fas fa-check"></i> Volume pricing advantage</li>
                  <li><i className="fas fa-check"></i> Dedicated brand consultation</li>
                  <li><i className="fas fa-check"></i> Consistent quality across all items</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Simple <span>4-Step</span> Process</h2>
          <p className="section-subtitle">Getting started with your private label brand is easy</p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Share Your Vision</h3>
              <p>Contact us with your brand concept, logo, and design preferences for labels, tags, and packaging.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Choose Your Products</h3>
              <p>Select from our extensive catalog of 5000+ premium Turkish hijab wear pieces to form your collection.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Design & Approve</h3>
              <p>We create digital proofs of your labels, tags, and packaging for your review and approval.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Production & Shipping</h3>
              <p>Your branded products are prepared and shipped to you with tracking, ready for your customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Building Section */}
      <section className="brand-section">
        <div className="container">
          <div className="brand-content">
            <h2>Build a Brand That <span>Lasts</span></h2>
            <p>In the fast-paced fashion industry, brands with strong identities and loyal followings are the ones that thrive. Our private label service gives you the foundation to build exactly that—a brand that customers recognize, trust, and return to season after season.</p>
            <p>With your own label, you're not just selling products; you're building equity. Every sale strengthens your brand recognition, and every satisfied customer becomes an ambassador for your unique identity in the modest fashion space.</p>
            
            <div className="brand-stats">
              <div className="brand-stat">
                <div className="number">78%</div>
                <div className="label">of consumers prefer branded products</div>
              </div>
              <div className="brand-stat">
                <div className="number">3.5x</div>
                <div className="label">higher customer retention with own brand</div>
              </div>
              <div className="brand-stat">
                <div className="number">40%</div>
                <div className="label">higher profit margins</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked <span>Questions</span></h2>
          <p className="section-subtitle">Everything you need to know about our private label service</p>
          
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question">
                <i className="fas fa-question-circle"></i>
                <h3>What is the minimum order quantity for private label?</h3>
              </div>
              <div className="faq-answer">
                We have flexible options to accommodate businesses of all sizes. Contact us to discuss your specific needs and we'll find a solution that works for you.
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <i className="fas fa-question-circle"></i>
                <h3>Can I mix different products in my private label order?</h3>
              </div>
              <div className="faq-answer">
                Absolutely! You can select any combination of products from our catalog—abayas, hijabs, dresses, prayer clothes, and more—all with your custom branding.
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <i className="fas fa-question-circle"></i>
                <h3>How long does the private label process take?</h3>
              </div>
              <div className="faq-answer">
                The timeline varies based on your specific requirements. Typically, label production takes 2-3 weeks, and shipping takes 3-7 business days worldwide.
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <i className="fas fa-question-circle"></i>
                <h3>Can you help with design if I don't have artwork?</h3>
              </div>
              <div className="faq-answer">
                Yes! Our team can assist with basic design guidance and specifications to ensure your labels and tags meet professional standards.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Your Brand?</h2>
            <p>Take the first step toward creating your own hijab brand. Contact us today to discuss your private label vision and get started.</p>
            <div className="cta-buttons">
              <a href="https://wa.me/905519522448" className="cta-btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i> Chat on WhatsApp
              </a>
              <Link href="/contact" className="cta-btn-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}