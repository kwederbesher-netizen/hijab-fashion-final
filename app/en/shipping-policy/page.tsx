// app/en/shipping-policy/page.tsx
'use client'

import Link from 'next/link'
import Head from 'next/head'

export default function ShippingPolicyPageEn() {
  return (
    <>
      <Head>
        <title>Shipping Policy - Hijab Fashion Mall | Worldwide Shipping from Turkey</title>
        <meta name="description" content="Learn about our worldwide shipping policy for wholesale orders. Fast and reliable delivery to over 50 countries with trusted carriers." />
        <meta name="keywords" content="shipping policy, worldwide shipping, wholesale shipping, delivery times, tracking orders" />
        <link rel="canonical" href="https://hijabfashionmall.com/en/shipping-policy" />
      </Head>

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
          --black: #000000;
          --dark-gray: #222;
          --medium-gray: #555;
          --light-gray: #f5f5f5;
          --white: #fff;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .page-header {
          background: linear-gradient(135deg, var(--light-gray) 0%, #ffffff 100%);
          padding: 60px 0;
          text-align: center;
          border-bottom: 1px solid #eee;
        }

        .page-header h1 {
          font-size: 48px;
          color: var(--black);
          margin-bottom: 20px;
          font-weight: 700;
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

        .page-header .breadcrumb span {
          color: var(--medium-gray);
          margin: 0 5px;
        }

        .shipping-content {
          padding: 60px 0;
          background: var(--white);
        }

        .shipping-wrapper {
          max-width: 900px;
          margin: 0 auto;
          background: var(--white);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid #f0f0f0;
        }

        .shipping-section {
          margin-bottom: 35px;
        }

        .shipping-section h2 {
          font-size: 24px;
          color: var(--black);
          margin-bottom: 20px;
          font-weight: 700;
          border-left: 3px solid var(--primary);
          padding-left: 15px;
        }

        .shipping-section h3 {
          font-size: 20px;
          color: var(--dark-gray);
          margin: 25px 0 15px;
          font-weight: 600;
        }

        .shipping-section p {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .shipping-section ul {
          list-style: none;
          padding: 0;
          margin: 15px 0;
        }

        .shipping-section ul li {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 12px;
          padding-left: 25px;
          position: relative;
        }

        .shipping-section ul li:before {
          content: '✓';
          color: var(--primary);
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .info-box {
          background: var(--light-gray);
          padding: 25px;
          border-radius: 15px;
          margin: 25px 0;
          border-left: 4px solid var(--primary);
        }

        .btn-back {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--primary);
          color: var(--white);
          padding: 14px 35px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
          margin-top: 30px;
        }

        .btn-back:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 32px;
          }
          
          .shipping-wrapper {
            padding: 25px;
          }
          
          .shipping-section h2 {
            font-size: 20px;
          }
        }
      `}</style>

      {/* Breadcrumb */}
      <div style={{
        padding: '20px 0',
        background: '#f5f5f5',
        borderBottom: '1px solid #eee'
      }}>
        <div className="container">
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
            <li style={{ fontSize: '14px', color: '#000', fontWeight: 600 }}>Shipping Policy</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Shipping Policy</h1>
          <p>Fast and reliable worldwide delivery from Turkey</p>
        </div>
      </section>

      {/* Shipping Content */}
      <section className="shipping-content">
        <div className="container">
          <div className="shipping-wrapper">
            
            <div className="shipping-section">
              <h2>1. Worldwide Shipping</h2>
              <p>At Hijab Fashion Mall, we take pride in serving our wholesale partners across the globe. We offer reliable worldwide shipping to over 50 countries through our trusted carrier partners. Our shipping network ensures that your orders reach you safely and efficiently, wherever you are located.</p>
              <p>As an international wholesale supplier based in Turkey, we understand the importance of timely and secure delivery for your business. We work exclusively with established international carriers to provide you with the best possible shipping experience.</p>
            </div>

            <div className="shipping-section">
              <h2>2. Shipping Arrangements</h2>
              <p>Shipping arrangements are made on a case-by-case basis, taking into consideration your location, order size, and specific delivery requirements. We coordinate with our carrier partners to find the most suitable shipping solution for each wholesale order.</p>
              <ul>
                <li>We work with multiple international carriers (DHL, FedEx, UPS, and others)</li>
                <li>Shipping methods are selected based on destination and order specifications</li>
                <li>We communicate all shipping details directly with our wholesale partners</li>
                <li>Shipping arrangements are confirmed after order finalization</li>
              </ul>
              <div className="info-box">
                <p><strong>📦 Flexible Shipping:</strong> We understand that each wholesale order has unique requirements. Our team works closely with you to arrange shipping that meets your timeline and budget preferences.</p>
              </div>
            </div>

            <div className="shipping-section">
              <h2>3. Shipping Costs</h2>
              <p>Shipping costs vary depending on several factors:</p>
              <ul>
                <li><strong>Destination Country:</strong> Distance and shipping zone</li>
                <li><strong>Order Weight & Volume:</strong> Package dimensions and total weight</li>
                <li><strong>Shipping Method:</strong> Standard, express, or economy options available</li>
                <li><strong>Customs & Duties:</strong> Import taxes and fees applicable to your country</li>
              </ul>
              <p>Shipping costs are calculated individually for each order. Our team will provide you with a detailed shipping quote before finalizing your order, ensuring full transparency and no surprises.</p>
            </div>

            <div className="shipping-section">
              <h2>4. Processing Time</h2>
              <p>We strive to prepare and ship your orders as quickly as possible:</p>
              <ul>
                <li><strong>Order Processing:</strong> 1-3 business days after payment confirmation</li>
                <li><strong>Quality Check:</strong> Each item is inspected before packaging</li>
                <li><strong>Packaging:</strong> Professional packaging to ensure product safety during transit</li>
                <li><strong>Documentation:</strong> All necessary shipping documents are prepared</li>
              </ul>
            </div>

            <div className="shipping-section">
              <h2>5. Delivery Times</h2>
              <p>Estimated delivery times vary by destination:</p>
              <ul>
                <li><strong>Middle East & Gulf Countries:</strong> 3-5 business days</li>
                <li><strong>European Countries:</strong> 3-7 business days</li>
                <li><strong>North America:</strong> 5-7 business days</li>
                <li><strong>Australia & New Zealand:</strong> 5-8 business days</li>
                <li><strong>Other International Destinations:</strong> 7-10 business days</li>
              </ul>
              <p><strong>Note:</strong> These are estimated delivery times. Actual delivery may vary due to customs clearance, local holidays, or unforeseen circumstances.</p>
            </div>

            <div className="shipping-section">
              <h2>6. Order Tracking</h2>
              <p>Once your order is shipped, we provide you with a tracking number that allows you to monitor your shipment in real-time. You will receive:</p>
              <ul>
                <li>Carrier name and service type</li>
                <li>Unique tracking number</li>
                <li>Tracking link for real-time updates</li>
                <li>Estimated delivery window</li>
              </ul>
              <p>We recommend monitoring your shipment and being available to receive your package when it arrives.</p>
            </div>

            <div className="shipping-section">
              <h2>7. Customs & Import Duties</h2>
              <p>As an international wholesaler shipping worldwide, please be aware that:</p>
              <ul>
                <li>Import duties, taxes, and customs fees are the responsibility of the buyer</li>
                <li>Customs clearance times vary by country and may affect delivery time</li>
                <li>We provide all necessary documentation to facilitate smooth customs clearance</li>
                <li>Please check with your local customs office for applicable fees</li>
              </ul>
              <div className="info-box">
                <p><strong>🌍 International Shipping Note:</strong> Customs policies vary significantly between countries. We recommend consulting with your local customs authority to understand any potential fees or requirements before placing your order.</p>
              </div>
            </div>

            <div className="shipping-section">
              <h2>8. Damaged or Lost Shipments</h2>
              <p>In the rare event that your shipment is damaged during transit or lost, we will work with the carrier to resolve the issue. Please note:</p>
              <ul>
                <li>Inspect your package immediately upon delivery</li>
                <li>Document any visible damage with photos</li>
                <li>Report any issues within 7 days of delivery</li>
                <li>We will assist you with the claims process</li>
              </ul>
              <p>Please refer to our <Link href="/en/refund-policy" style={{ color: 'var(--primary)' }}>Refund & Return Policy</Link> for more details on damaged items.</p>
            </div>

            <div className="shipping-section">
              <h2>9. Shipping to Remote Areas</h2>
              <p>For shipments to remote or less accessible areas, additional delivery time may be required. Our carriers may use local partners for final delivery in some regions. We will inform you if any special arrangements are needed for your location.</p>
            </div>

            <div className="shipping-section">
              <h2>10. Contact for Shipping Inquiries</h2>
              <p>For any questions regarding shipping or to discuss your specific delivery requirements, please reach out to us:</p>
              <ul>
                <li><strong>WhatsApp:</strong> +90 551 952 24 48</li>
                <li><strong>Contact Form:</strong> Available on our website</li>
              </ul>
              <p>Our team is ready to assist you with personalized shipping arrangements for your wholesale orders.</p>
            </div>

            <Link href="/en" className="btn-back">
              <i className="fas fa-arrow-left"></i> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}