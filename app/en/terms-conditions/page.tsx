// app/en/terms-conditions/page.tsx
'use client'

import Link from 'next/link'
import Head from 'next/head'

export default function TermsConditionsPageEn() {
  return (
    <>
      <Head>
        <title>Terms & Conditions - Hijab Fashion Mall | Wholesale Turkish Modest Wear</title>
        <meta name="description" content="Read our wholesale terms and conditions for ordering Turkish modest wear. Learn about pricing, shipping, payment methods, and international wholesale policies." />
        <meta name="keywords" content="terms and conditions, wholesale terms, hijab wholesale terms, modest wear terms, turkey wholesale" />
        <link rel="canonical" href="https://hijabfashionmall.com/en/terms-conditions" />
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

        .terms-content {
          padding: 60px 0;
          background: var(--white);
        }

        .terms-wrapper {
          max-width: 900px;
          margin: 0 auto;
          background: var(--white);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid #f0f0f0;
        }

        .terms-section {
          margin-bottom: 35px;
        }

        .terms-section h2 {
          font-size: 24px;
          color: var(--black);
          margin-bottom: 20px;
          font-weight: 700;
          border-left: 3px solid var(--primary);
          padding-left: 15px;
        }

        .terms-section h3 {
          font-size: 20px;
          color: var(--dark-gray);
          margin: 25px 0 15px;
          font-weight: 600;
        }

        .terms-section p {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .terms-section ul {
          list-style: none;
          padding: 0;
          margin: 15px 0;
        }

        .terms-section ul li {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 12px;
          padding-left: 25px;
          position: relative;
        }

        .terms-section ul li:before {
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
          
          .terms-wrapper {
            padding: 25px;
          }
          
          .terms-section h2 {
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
            <li style={{ fontSize: '14px', color: '#000', fontWeight: 600 }}>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Terms & Conditions</h1>
          <p>Wholesale trading terms for our international partners</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content">
        <div className="container">
          <div className="terms-wrapper">
            
            <div className="terms-section">
              <h2>1. General Information</h2>
              <p>Welcome to Hijab Fashion Mall. These Terms and Conditions govern your use of our website and wholesale purchasing services. By placing an order with us, you agree to be bound by these terms. Please read them carefully before proceeding with any purchase.</p>
              <p>Hijab Fashion Mall is a wholesale supplier specializing in Turkish modest wear, serving retailers and boutiques worldwide. Our platform connects international buyers with premium Turkish manufacturers.</p>
            </div>

            <div className="terms-section">
              <h2>2. Wholesale Orders</h2>
              <p>All orders placed through our website are considered wholesale inquiries. Our products are intended for retail resale unless otherwise specified. As a wholesale supplier, we do not offer retail pricing or individual piece pricing for non-RSS items.</p>
              <ul>
                <li><strong>RSS Items:</strong> Products marked as "RSS" can be ordered as single pieces</li>
                <li><strong>Carton Items:</strong> Products sold in cartons with specified pack sizes</li>
                <li><strong>Mix Orders:</strong> You may combine different products in one order with no minimum quantity requirement</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>3. Pricing & Payments</h2>
              <p>All prices displayed on our website are in USD (United States Dollars) and represent wholesale pricing. We reserve the right to adjust prices without prior notice based on market conditions, exchange rates, and manufacturer pricing.</p>
              <ul>
                <li><strong>Accepted Payment Methods:</strong> Bank transfer, Western Union, and major credit cards</li>
                <li><strong>Payment Terms:</strong> Orders are processed after payment confirmation</li>
                <li><strong>Currency Conversion:</strong> Final charges may vary based on your bank's exchange rates</li>
                <li><strong>Invoices:</strong> Pro-forma invoices provided before payment, final invoice upon shipping</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>4. Shipping & Delivery</h2>
              <p>We offer worldwide shipping to over 50 countries through our trusted carrier partners. Shipping costs and delivery times vary by destination.</p>
              <ul>
                <li><strong>Processing Time:</strong> 1-3 business days after payment confirmation</li>
                <li><strong>Delivery Time:</strong> 3-7 business days for most international destinations</li>
                <li><strong>Tracking:</strong> Tracking number provided for all shipments</li>
                <li><strong>Customs & Duties:</strong> Import duties and taxes are the responsibility of the buyer</li>
              </ul>
              <div className="info-box">
                <p><strong>📦 Important Shipping Note:</strong> Delivery times are estimates and may vary due to customs clearance, local holidays, or unforeseen circumstances. We are not responsible for delays caused by carriers or customs authorities.</p>
              </div>
            </div>

            <div className="terms-section">
              <h2>5. Product Information</h2>
              <p>We strive to provide accurate product descriptions, images, and specifications. However, please note:</p>
              <ul>
                <li>Colors may appear slightly different due to monitor settings</li>
                <li>Sizes are based on Turkish manufacturing standards; please review size guides before ordering</li>
                <li>Fabric compositions are provided in product descriptions</li>
                <li>Stock availability is subject to change without notice</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>6. Returns & Damages</h2>
              <p>As a wholesale supplier, we do not accept returns for change of mind or preference. However, we fully guarantee the quality of our products:</p>
              <ul>
                <li>Manufacturing defects are covered with full compensation</li>
                <li>Transit damage is covered with proper documentation</li>
                <li>Claims must be submitted within 7 days of delivery with clear photos</li>
                <li>Compensation provided as credit, replacement, or refund based on case review</li>
              </ul>
              <p>Please refer to our <Link href="/en/refund-policy" style={{ color: 'var(--primary)' }}>Refund & Return Policy</Link> for detailed information.</p>
            </div>

            <div className="terms-section">
              <h2>7. Intellectual Property</h2>
              <p>All content on this website, including images, text, logos, and designs, is the property of Hijab Fashion Mall and protected by copyright laws. Unauthorized use, reproduction, or distribution is prohibited without our written consent.</p>
            </div>

            <div className="terms-section">
              <h2>8. Privacy Policy</h2>
              <p>We respect your privacy and are committed to protecting your personal information. Your data is used solely for order processing, communication, and improving our services. We do not share your information with third parties except as necessary for shipping and payment processing.</p>
              <p>For more details, please review our <Link href="/en/privacy-policy" style={{ color: 'var(--primary)' }}>Privacy Policy</Link>.</p>
            </div>

            <div className="terms-section">
              <h2>9. Limitation of Liability</h2>
              <p>Hijab Fashion Mall shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services. Our liability is limited to the purchase price of the products in question.</p>
            </div>

            <div className="terms-section">
              <h2>10. Governing Law</h2>
              <p>These Terms and Conditions are governed by the laws of the Republic of Turkey. Any disputes arising from these terms shall be resolved through the Turkish courts.</p>
            </div>

            <div className="terms-section">
              <h2>11. Modifications to Terms</h2>
              <p>We reserve the right to update or modify these Terms and Conditions at any time without prior notice. Changes will be effective immediately upon posting on this page. Your continued use of our services constitutes acceptance of any modifications.</p>
            </div>

            <div className="terms-section">
              <h2>12. Contact Us</h2>
              <p>If you have any questions about these Terms and Conditions, please contact us:</p>
              <ul>
                <li><strong>WhatsApp:</strong> +90 551 952 24 48 (24/7 Support)</li>
                <li><strong>Email:</strong> support@hijabfashionmall.com</li>
                <li><strong>Contact Form:</strong> Available on our website</li>
              </ul>
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