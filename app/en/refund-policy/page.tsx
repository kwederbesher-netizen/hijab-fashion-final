// app/en/refund-policy/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function RefundPolicyPageEn() {
  return (
    <>
      <Head>
        <title>Refund & Return Policy - Hijab Fashion Mall | Wholesale Turkish Modest Wear</title>
        <meta name="description" content="Our wholesale return policy covers manufacturing defects and shipping damages. Learn about our quality assurance process for international wholesale orders." />
        <meta name="keywords" content="refund policy, return policy, wholesale returns, damaged items, quality assurance, hijab wholesale turkey" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/en/refund-policy" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/refund-policy" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/refund-policy" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/refund-policy" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/refund-policy" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/refund-policy" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/refund-policy" />
        <meta property="og:title" content="Refund & Return Policy - Hijab Fashion Mall" />
        <meta property="og:description" content="Our wholesale return policy covers manufacturing defects and shipping damages." />
        <meta property="og:url" content="https://hijabfashionmall.com/en/refund-policy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Refund & Return Policy - Hijab Fashion Mall" />
        <meta name="twitter:description" content="Our wholesale return policy covers manufacturing defects and shipping damages." />
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

        .breadcrumb-bar {
          padding: 20px 0;
          background: #f5f5f5;
          border-bottom: 1px solid #eee;
        }

        .breadcrumb-list {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .breadcrumb-item a {
          color: #555;
          text-decoration: none;
          font-size: 14px;
        }

        .breadcrumb-item a:hover {
          color: var(--primary);
        }

        .breadcrumb-item.active {
          font-size: 14px;
          color: #000;
          font-weight: 600;
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

        .policy-content {
          padding: 60px 0;
          background: var(--white);
        }

        .policy-wrapper {
          max-width: 900px;
          margin: 0 auto;
          background: var(--white);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid #f0f0f0;
        }

        .policy-section {
          margin-bottom: 35px;
        }

        .policy-section h2 {
          font-size: 24px;
          color: var(--black);
          margin-bottom: 20px;
          font-weight: 700;
          border-left: 3px solid var(--primary);
          padding-left: 15px;
        }

        .policy-section h3 {
          font-size: 20px;
          color: var(--dark-gray);
          margin: 25px 0 15px;
          font-weight: 600;
        }

        .policy-section p {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .policy-section ul {
          list-style: none;
          padding: 0;
          margin: 15px 0;
        }

        .policy-section ul li {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 12px;
          padding-left: 25px;
          position: relative;
        }

        .policy-section ul li:before {
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

        .info-box p {
          margin-bottom: 0;
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
          
          .policy-wrapper {
            padding: 25px;
          }
          
          .policy-section h2 {
            font-size: 20px;
          }
        }
      `}</style>

      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <ul className="breadcrumb-list">
            <li className="breadcrumb-item">
              <Link href="/en">Home</Link>
            </li>
            <li className="breadcrumb-item">/</li>
            <li className="breadcrumb-item active">Refund & Return Policy</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Refund & Return Policy</h1>
          <p>Quality assurance for your wholesale orders</p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="policy-content">
        <div className="container">
          <div className="policy-wrapper">
            
            <div className="policy-section">
              <h2>1. Quality Assurance</h2>
              <p>At Hijab Fashion Mall, we take pride in delivering premium Turkish modest wear to our wholesale partners worldwide. Every product undergoes rigorous quality control before shipping to ensure you receive items that meet our high standards of craftsmanship and authenticity.</p>
              <p>As a wholesale supplier serving retailers across 50+ countries, we understand the importance of reliable quality for your business. Our commitment is to provide consistent, original Turkish-made products that your customers will love.</p>
            </div>

            <div className="policy-section">
              <h2>2. Damaged or Defective Items</h2>
              <p>We stand behind the quality of our products. In the unlikely event that you receive an item with a manufacturing defect or damage that occurred during transit, we will fully compensate you for the affected items.</p>
              
              <div className="info-box">
                <p><strong>📦 What to do if you receive damaged items:</strong></p>
                <ul style={{ marginTop: '10px' }}>
                  <li>Contact our customer service within 7 days of receiving your order</li>
                  <li>Provide clear photos showing the damage or defect</li>
                  <li>Include your order number and product codes</li>
                  <li>Our team will review and process compensation within 2-3 business days</li>
                </ul>
              </div>
            </div>

            <div className="policy-section">
              <h2>3. International Wholesale Considerations</h2>
              <p>As an international wholesaler shipping to retailers worldwide, we operate under wholesale trade standards. Given the nature of bulk orders and international logistics, we do not accept returns for reasons such as:</p>
              <ul>
                <li>Change of mind or preference</li>
                <li>Color variations due to monitor settings</li>
                <li>Size selection (please verify sizing before ordering)</li>
                <li>Minor differences from product images</li>
              </ul>
              <p>We encourage our wholesale partners to review product details carefully before placing orders. Our catalog provides detailed descriptions, fabric information, and size guides to help you make informed purchasing decisions.</p>
            </div>

            <div className="policy-section">
              <h2>4. Quality Control Process</h2>
              <p>To minimize any issues with your orders, we implement a thorough quality control process:</p>
              <ul>
                <li>Each item is inspected before packaging</li>
                <li>Professional packaging for international transit</li>
                <li>Tracking information provided for all shipments</li>
                <li>Partnering with reliable carriers for global delivery</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>5. How to Report an Issue</h2>
              <p>If you receive items with manufacturing defects or transit damage, please contact us immediately:</p>
              <ul>
                <li><strong>WhatsApp:</strong> +90 551 952 24 48</li>
                <li><strong>Contact Form:</strong> Available on our website</li>
              </ul>
              <p>Our customer service team is available 24/7 to assist you with any concerns regarding your wholesale orders.</p>
            </div>

            <div className="policy-section">
              <h2>6. Compensation Process</h2>
              <p>Upon verification of damaged or defective items, we will provide full compensation through:</p>
              <ul>
                <li>Credit toward your next order</li>
                <li>Replacement of affected items (subject to availability)</li>
                <li>Refund via original payment method</li>
              </ul>
              <p>Compensation is processed within 2-5 business days after issue confirmation.</p>
            </div>

            <div className="policy-section">
              <h2>7. Contact Us</h2>
              <p>For any questions about our return policy or to report an issue with your order, please don't hesitate to reach out to our team. We're here to ensure your wholesale experience is smooth and successful.</p>
              <p><strong>Customer Support (WhatsApp):</strong> +90 551 952 24 48</p>
            </div>

            <Link href="/en" className="btn-back">
              <FaArrowLeft size={14} /> Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}