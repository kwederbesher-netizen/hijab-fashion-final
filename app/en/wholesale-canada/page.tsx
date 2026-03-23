// app/en/wholesale-canada/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function WholesaleCanadaPage() {
  const [cart, setCart] = useState<any[]>([])
  const cartInitialized = useRef(false)
  const processingEvent = useRef(false)
  const cartStringRef = useRef('')

  // Load cart from localStorage - once only
  useEffect(() => {
    if (!cartInitialized.current) {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart)
          setCart(parsedCart)
          cartStringRef.current = JSON.stringify(parsedCart)
        } catch (e) {
          console.error('Error parsing cart:', e)
        }
      }
      cartInitialized.current = true
    }
  }, [])

  // Handle cart updates from events
  useEffect(() => {
    const handleCartUpdate = () => {
      // Prevent multiple simultaneous updates
      if (processingEvent.current) return
      
      processingEvent.current = true
      
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart)
          const newCartString = JSON.stringify(parsedCart)
          
          // Only update if cart actually changed
          if (newCartString !== cartStringRef.current) {
            setCart(parsedCart)
            cartStringRef.current = newCartString
          }
        } catch (e) {
          console.error('Error parsing cart:', e)
        }
      }
      
      // Reset after a short delay
      setTimeout(() => {
        processingEvent.current = false
      }, 100)
    }

    window.addEventListener('cartUpdated', handleCartUpdate)
    
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate)
    }
  }, [])

  // Save cart to localStorage
  useEffect(() => {
    if (cartInitialized.current) {
      const newCartString = JSON.stringify(cart)
      
      // Only save and dispatch if cart actually changed
      if (newCartString !== cartStringRef.current) {
        localStorage.setItem('cart', newCartString)
        cartStringRef.current = newCartString
        
        // Update cart count in header using event
        const event = new CustomEvent('cartUpdated', { detail: cart.length })
        window.dispatchEvent(event)
      }
    }
  }, [cart])

  return (
    <>
      <style>{`
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
            --canada-red: #d80621;
            --canada-red-light: #ff6b7c;
            --canada-red-soft: #ffe6e9;
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
            background: linear-gradient(135deg, var(--canada-red-soft) 0%, #ffffff 100%);
            padding: 60px 0 40px;
            text-align: center;
            border-bottom: 1px solid #eee;
            position: relative;
            overflow: hidden;
        }

        .page-header::before {
            content: '🍁';
            position: absolute;
            top: 50%;
            right: 5%;
            font-size: 200px;
            font-weight: 800;
            color: rgba(216, 6, 33, 0.03);
            z-index: 0;
            line-height: 1;
            opacity: 0.3;
            transform: rotate(-10deg);
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

        .page-header .meta-info {
            display: flex;
            justify-content: center;
            gap: 30px;
            color: var(--medium-gray);
            font-size: 15px;
            margin-top: 20px;
        }

        .page-header .meta-info i {
            color: var(--primary);
            margin-right: 5px;
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

        /* ===== Article Content ===== */
        .article-content {
            padding: 60px 0;
            background: var(--white);
        }

        .article-wrapper {
            max-width: 800px;
            margin: 0 auto;
        }

        .featured-image {
            width: 100%;
            border-radius: 20px;
            overflow: hidden;
            margin-bottom: 40px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .featured-image img {
            width: 100%;
            height: auto;
            display: block;
        }

        .article-content h2 {
            font-size: 32px;
            color: var(--black);
            margin: 50px 0 20px;
            font-weight: 700;
        }

        .article-content h2:first-of-type {
            margin-top: 0;
        }

        .article-content h3 {
            font-size: 24px;
            color: var(--black);
            margin: 30px 0 15px;
            font-weight: 600;
        }

        .article-content h4 {
            font-size: 18px;
            color: var(--primary);
            margin: 25px 0 10px;
            font-weight: 600;
        }

        .article-content p {
            color: var(--medium-gray);
            margin-bottom: 20px;
            font-size: 16px;
            line-height: 1.8;
        }

        .article-content p.lead {
            font-size: 18px;
            font-weight: 500;
            color: var(--dark-gray);
        }

        .article-content ul, .article-content ol {
            margin: 20px 0 30px;
            padding-left: 20px;
        }

        .article-content li {
            color: var(--medium-gray);
            margin-bottom: 10px;
            font-size: 16px;
            line-height: 1.7;
        }

        .article-content li strong {
            color: var(--primary);
        }

        .article-content blockquote {
            background: var(--primary-soft);
            padding: 30px;
            border-radius: 15px;
            margin: 40px 0;
            border-left: 4px solid var(--primary);
            font-style: italic;
            font-size: 18px;
            color: var(--dark-gray);
        }

        .article-content .highlight-box {
            background: linear-gradient(135deg, var(--primary-soft) 0%, #ffffff 100%);
            padding: 30px;
            border-radius: 15px;
            margin: 40px 0;
            border: 1px solid rgba(255,90,0,0.2);
        }

        .article-content .highlight-box h4 {
            color: var(--primary);
            margin-bottom: 15px;
            font-size: 20px;
        }

        .article-content .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin: 40px 0;
        }

        .article-content .stat-item {
            text-align: center;
            padding: 20px;
            background: var(--white);
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
            border: 1px solid #eee;
        }

        .article-content .stat-number {
            font-size: 36px;
            font-weight: 800;
            color: var(--primary);
            margin-bottom: 5px;
        }

        .article-content .stat-label {
            color: var(--medium-gray);
            font-size: 14px;
        }

        .article-content .checklist {
            list-style: none;
            padding: 0;
        }

        .article-content .checklist li {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            margin-bottom: 15px;
        }

        .article-content .checklist li i {
            color: var(--primary);
            font-size: 20px;
            margin-top: 2px;
        }

        .article-content .tip-box {
            background: #e8f5e9;
            padding: 25px;
            border-radius: 15px;
            margin: 30px 0;
            border-left: 4px solid #4caf50;
        }

        .article-content .warning-box {
            background: #fff3e0;
            padding: 25px;
            border-radius: 15px;
            margin: 30px 0;
            border-left: 4px solid #ff9800;
        }

        .article-content .shipping-card {
            background: linear-gradient(135deg, var(--canada-red-soft) 0%, #ffffff 100%);
            border-radius: 15px;
            padding: 30px;
            margin: 30px 0;
            border: 2px dashed var(--canada-red);
            text-align: center;
        }

        .article-content .shipping-card h3 {
            color: var(--canada-red);
            margin-bottom: 15px;
        }

        .article-content .shipping-price {
            font-size: 48px;
            font-weight: 800;
            color: var(--black);
            margin: 20px 0;
        }

        .article-content .shipping-price small {
            font-size: 18px;
            color: var(--medium-gray);
            font-weight: 400;
        }

        .article-content .courier-logos {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin: 20px 0;
            font-size: 32px;
            color: var(--dark-gray);
        }

        .article-content .courier-logos i {
            transition: transform 0.3s;
        }

        .article-content .courier-logos i:hover {
            transform: translateY(-5px);
            color: var(--primary);
        }

        .article-content .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 20px 0;
        }

        .article-content .tag {
            background: var(--light-gray);
            padding: 8px 16px;
            border-radius: 50px;
            font-size: 14px;
            color: var(--medium-gray);
            border: 1px solid #eee;
        }

        .article-content .tag i {
            color: var(--primary);
            margin-right: 5px;
        }

        .article-content .canada-provinces {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin: 20px 0;
            justify-content: center;
        }

        .article-content .canada-province {
            background: linear-gradient(135deg, #d8062110 0%, #ff6b7c10 100%);
            padding: 8px 16px;
            border-radius: 50px;
            font-size: 14px;
            color: var(--dark-gray);
            border: 1px solid #d8062120;
        }

        .share-section {
            margin: 50px 0;
            padding: 30px 0;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
        }

        .share-section h4 {
            margin-bottom: 20px;
            color: var(--black);
        }

        .share-buttons {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
        }

        .share-btn {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            text-decoration: none;
            transition: transform 0.3s;
        }

        .share-btn:hover {
            transform: translateY(-3px);
        }

        .share-btn.facebook {
            background: #1877f2;
        }

        .share-btn.twitter {
            background: #1da1f2;
        }

        .share-btn.linkedin {
            background: #0077b5;
        }

        .share-btn.whatsapp {
            background: var(--whatsapp);
        }

        .share-btn.pinterest {
            background: #bd081c;
        }

        /* ===== Table of Contents ===== */
        .toc {
            background: var(--light-gray);
            padding: 30px;
            border-radius: 15px;
            margin: 30px 0 50px;
        }

        .toc h3 {
            margin-bottom: 20px;
            color: var(--black);
        }

        .toc ul {
            list-style: none;
            padding: 0;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }

        .toc li a {
            color: var(--medium-gray);
            text-decoration: none;
            display: block;
            padding: 8px 0;
            transition: color 0.3s;
        }

        .toc li a:hover {
            color: var(--primary);
        }

        .toc li a i {
            color: var(--primary);
            margin-right: 8px;
            font-size: 12px;
        }

        /* ===== CTA Box ===== */
        .cta-box {
            background: var(--black);
            color: var(--white);
            padding: 40px;
            border-radius: 20px;
            text-align: center;
            margin: 50px 0;
        }

        .cta-box h3 {
            color: white;
            font-size: 28px;
            margin-bottom: 15px;
        }

        .cta-box p {
            color: rgba(255,255,255,0.8);
            margin-bottom: 25px;
        }

        .cta-box .btn-whatsapp {
            background: var(--whatsapp);
            color: white;
            padding: 15px 35px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }

        .cta-box .btn-primary {
            background: var(--primary);
            color: white;
            padding: 15px 35px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
        }

        .cta-box .btn-primary:hover {
            background: var(--primary-dark);
        }

        .cta-box .btn-whatsapp:hover {
            background: var(--whatsapp-dark);
        }

        /* Responsive */
        @media (max-width: 992px) {
            .toc ul {
                grid-template-columns: 1fr;
            }
            
            .article-content .stats-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .page-header h1 {
                font-size: 36px;
            }
            
            .page-header .meta-info {
                flex-direction: column;
                gap: 10px;
            }
            
            .article-content h2 {
                font-size: 28px;
            }
            
            .article-content h3 {
                font-size: 22px;
            }
            
            .article-content .stats-grid {
                grid-template-columns: 1fr;
            }
            
            .share-buttons {
                flex-wrap: wrap;
            }
            
            .cta-box .btn-whatsapp,
            .cta-box .btn-primary {
                width: 100%;
            }
            
            .courier-logos {
                flex-wrap: wrap;
            }
        }
      `}</style>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/en">Home</Link> <span>&gt;</span> <span>Canada Hijab Wholesale Guide 2026</span>
          </div>
          <h1>Canada <span>Hijab Wholesale</span> Guide 2026</h1>
          <p>Complete guide for Canadian retailers: Import premium Turkish hijab wear with daily shipping, competitive rates, and private label services</p>
          <div className="meta-info">
            <span><i className="fas fa-maple-leaf"></i> Canada Market</span>
            <span><i className="far fa-calendar-alt"></i> March 14, 2026</span>
            <span><i className="far fa-clock"></i> 12 min read</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="article-content">
        <div className="container">
          <div className="article-wrapper">
            <div className="featured-image">
              <Image 
                src="/images/canada-wholesale-guide.webp" 
                alt="Canada Hijab Wholesale Guide 2026 - Import Turkish Hijab Wear to Canada" 
                width={800} 
                height={450} 
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/default.webp'
                }}
              />
            </div>

            <p className="lead">Canada's modest fashion market is experiencing remarkable growth, driven by a diverse and vibrant Muslim community spanning from Toronto to Vancouver. With increasing demand for high-quality Turkish hijab wear, Canadian retailers have a unique opportunity to serve this expanding market.</p>

            {/* Table of Contents */}
            <div className="toc">
              <h3>📋 Table of Contents</h3>
              <ul>
                <li><a href="#introduction"><i className="fas fa-chevron-right"></i> Introduction</a></li>
                <li><a href="#canada-market"><i className="fas fa-chevron-right"></i> The Canadian Modest Fashion Market</a></li>
                <li><a href="#why-turkish"><i className="fas fa-chevron-right"></i> Why Turkish Hijab Wear?</a></li>
                <li><a href="#shipping"><i className="fas fa-chevron-right"></i> Shipping to Canada: Rates & Times</a></li>
                <li><a href="#couriers"><i className="fas fa-chevron-right"></i> UPS, FedEx, DHL: Daily Shipping</a></li>
                <li><a href="#customs"><i className="fas fa-chevron-right"></i> Canada Customs & Import Procedures</a></li>
                <li><a href="#costs"><i className="fas fa-chevron-right"></i> Complete Cost Breakdown</a></li>
                <li><a href="#private-label"><i className="fas fa-chevron-right"></i> Private Label for Canadian Brands</a></li>
                <li><a href="#ordering"><i className="fas fa-chevron-right"></i> How to Order from Hijab Fashion Mall</a></li>
                <li><a href="#faq"><i className="fas fa-chevron-right"></i> Frequently Asked Questions</a></li>
                <li><a href="#success"><i className="fas fa-chevron-right"></i> Your Success Partner</a></li>
              </ul>
            </div>

            <h2 id="introduction">Introduction: The Canadian Modest Fashion Opportunity</h2>
            <p>Canada is home to a growing and diverse Muslim population, with vibrant communities in major cities across the country. Canadian consumers value quality, authenticity, and unique designs—exactly what Turkish hijab wear offers. The Canadian modest fashion market is projected to grow significantly through 2026 and beyond.</p>

            <p>Importing directly from Turkey eliminates middlemen, gives you access to the latest designs, and allows you to build a distinctive brand identity. With daily shipping to Canada and competitive rates, there's never been a better time to source your hijab collection from Turkey.</p>

            <h2 id="canada-market">The Canadian Modest Fashion Market in 2026</h2>
            <p>The Canadian modest fashion market has evolved significantly. Here's what retailers need to know:</p>

            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">1.8M+</div>
                <div className="stat-label">Muslims in Canada</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">$4.5B+</div>
                <div className="stat-label">Modest fashion spending</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">25%</div>
                <div className="stat-label">Annual market growth</div>
              </div>
            </div>

            <h3>Key Markets in Canada:</h3>
            <div className="canada-provinces">
              <span className="canada-province">Ontario (GTA)</span>
              <span className="canada-province">Quebec (Montreal)</span>
              <span className="canada-province">British Columbia (Vancouver)</span>
              <span className="canada-province">Alberta (Calgary/Edmonton)</span>
              <span className="canada-province">Manitoba (Winnipeg)</span>
              <span className="canada-province">Saskatchewan (Regina)</span>
              <span className="canada-province">Nova Scotia (Halifax)</span>
            </div>

            <p>Major metropolitan areas like the Greater Toronto Area (GTA), Montreal, Vancouver, and Calgary have particularly strong demand for modest fashion, with established Muslim communities and fashion-conscious consumers.</p>

            <h2 id="why-turkish">Why Turkish Hijab Wear?</h2>
            <p>Turkish hijab wear has earned a global reputation for excellence. Here's why Canadian retailers prefer Turkish products:</p>

            <ul className="checklist">
              <li><i className="fas fa-check-circle"></i> <strong>Superior Quality:</strong> Turkish textiles are renowned for their high quality, from luxurious chiffon to soft jersey and elegant silk.</li>
              <li><i className="fas fa-check-circle"></i> <strong>Unique Designs:</strong> Turkish designers blend traditional elegance with contemporary fashion, creating distinctive pieces.</li>
              <li><i className="fas fa-check-circle"></i> <strong>Excellent Value:</strong> Direct sourcing from Turkey offers exceptional quality at competitive wholesale prices.</li>
              <li><i className="fas fa-check-circle"></i> <strong>Variety:</strong> From everyday hijabs to special occasion abayas, Turkish manufacturers offer comprehensive collections.</li>
            </ul>

            <h2 id="shipping">Shipping to Canada: Rates & Delivery Times</h2>
            <p>At Hijab Fashion Mall, we ship to Canada daily. Our streamlined logistics ensure your orders arrive quickly and reliably.</p>

            <div className="shipping-card">
              <h3>🚚 Standard Shipping to Canada</h3>
              <div className="shipping-price">
                $220 <small>per box</small>
              </div>
              <p><strong>Box Capacity:</strong> 30 kg (approximately 150-200 hijabs or 50-80 abayas)</p>
              <p><strong>Delivery Time:</strong> 5-7 business days</p>
              <p><strong>Shipping Frequency:</strong> Daily shipping from Turkey</p>
              <p><strong>Tracking:</strong> Full tracking for every shipment</p>
            </div>

            <h2 id="private-label">Private Label: Build Your Canadian Brand</h2>
            <p>One of the most powerful advantages of working with Hijab Fashion Mall is our comprehensive <strong>Private Label service</strong>. Instead of selling generic products, you can build your distinctive Canadian brand.</p>

            <h3>Private Label Services We Offer:</h3>
            <ul className="checklist">
              <li><i className="fas fa-check-circle"></i> <strong>Custom Woven Labels:</strong> Your brand name woven into every piece</li>
              <li><i className="fas fa-check-circle"></i> <strong>Custom Hang Tags:</strong> Professional tags with your branding, pricing, and care instructions</li>
              <li><i className="fas fa-check-circle"></i> <strong>Custom Packaging:</strong> Branded bags, boxes, and tissue paper for a complete unboxing experience</li>
              <li><i className="fas fa-check-circle"></i> <strong>Exclusive Designs:</strong> Build a unique collection that sets you apart from competitors</li>
            </ul>

            <h2 id="faq">Frequently Asked Questions</h2>

            <h4>How often do you ship to Canada?</h4>
            <p>We ship to Canada daily. Once your order is ready, it goes out on the next available shipment.</p>

            <h4>What is the maximum weight per box?</h4>
            <p>Our standard boxes hold up to 30 kg for the best shipping rates. For larger orders, we can split across multiple boxes.</p>

            <h4>Do you ship to PO Boxes?</h4>
            <p>We recommend providing a physical delivery address as couriers like UPS, FedEx, and DHL require a physical address. For PO boxes, we can ship via Canada Post upon request.</p>

            <h4>How are customs duties calculated?</h4>
            <p>Canada Border Services Agency (CBSA) assesses duties based on declared value and HTS classification. We provide accurate commercial invoices to facilitate clearance.</p>

            <h4>Can I track my shipment?</h4>
            <p>Yes, every shipment includes full tracking information so you can monitor your package from Turkey to your door.</p>

            <h4>What payment methods do you accept?</h4>
            <p>We accept bank transfers, wire transfers, and other secure payment methods suitable for international transactions.</p>

            <h2 id="success">Your Success Partner in the Canadian Market</h2>
            <p>At <strong>Hijab Fashion Mall</strong>, we're more than just a supplier—we're your partner in building a successful hijab business in Canada. With years of experience serving Canadian retailers, we understand the unique opportunities and challenges of the Canadian market.</p>

            <p>Our commitment to quality, reliable shipping, and comprehensive private label services means you can focus on what really matters: growing your brand, serving your customers, and building a business that lasts.</p>

            <div className="highlight-box">
              <h4>🍁 Why Canadian Retailers Choose Us:</h4>
              <ul>
                <li><strong>Daily shipping to Canada</strong> - No delays, no waiting</li>
                <li><strong>Competitive rates</strong> - $220 for 30 kg via UPS/FedEx/DHL</li>
                <li><strong>Fast delivery</strong> - 5-7 business days to your door</li>
                <li><strong>Premium Turkish quality</strong> - Products your customers will love</li>
                <li><strong>Private label services</strong> - Build your Canadian brand</li>
                <li><strong>No minimum orders</strong> - Start small and grow at your pace</li>
                <li><strong>Dedicated support</strong> - We're here to help you succeed</li>
              </ul>
            </div>

            {/* CTA Section within article */}
            <div className="cta-box">
              <h3>Ready to Start Importing to Canada?</h3>
              <p>Contact us today to discuss your wholesale needs, private label options, and shipping to your Canadian address.</p>
              <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://wa.me/905519522448" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-whatsapp"></i> Chat on WhatsApp
                </a>
                <Link href="/en/contact" className="btn-primary">
                  Contact Us
                </Link>
              </div>
              <p style={{ marginTop: '20px', fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>We're here to answer all your questions about importing Turkish hijab wear to Canada.</p>
            </div>

            <div className="share-section">
              <h4>Share This Guide</h4>
              <div className="share-buttons">
                <a href="#" className="share-btn facebook" onClick={(e) => {
                  e.preventDefault()
                  window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(window.location.href), '_blank')
                }}><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="share-btn twitter" onClick={(e) => {
                  e.preventDefault()
                  window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent('Canada Hijab Wholesale Guide 2026')+'&url='+encodeURIComponent(window.location.href), '_blank')
                }}><i className="fab fa-twitter"></i></a>
                <a href="#" className="share-btn linkedin" onClick={(e) => {
                  e.preventDefault()
                  window.open('https://www.linkedin.com/sharing/share-offsite/?url='+encodeURIComponent(window.location.href), '_blank')
                }}><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="share-btn whatsapp" onClick={(e) => {
                  e.preventDefault()
                  window.open('https://wa.me/?text='+encodeURIComponent('Canada Hijab Wholesale Guide 2026: '+window.location.href), '_blank')
                }}><i className="fab fa-whatsapp"></i></a>
                <a href="#" className="share-btn pinterest" onClick={(e) => {
                  e.preventDefault()
                  window.open('https://pinterest.com/pin/create/button/?url='+encodeURIComponent(window.location.href)+'&media='+encodeURIComponent('/images/canada-wholesale-guide.webp')+'&description='+encodeURIComponent('Canada Hijab Wholesale Guide 2026'), '_blank')
                }}><i className="fab fa-pinterest-p"></i></a>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}