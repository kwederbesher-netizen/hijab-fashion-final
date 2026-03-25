// app/en/privacy-policy/page.tsx
'use client'

import Link from 'next/link'
import Head from 'next/head'

export default function PrivacyPolicyPageEn() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Hijab Fashion Mall | Wholesale Turkish Modest Wear</title>
        <meta name="description" content="Learn how Hijab Fashion Mall collects, uses, and protects your personal information. Our privacy policy for wholesale customers and website visitors." />
        <meta name="keywords" content="privacy policy, data protection, personal information, wholesale privacy, hijab fashion privacy" />
        <link rel="canonical" href="https://hijabfashionmall.com/en/privacy-policy" />
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

        .privacy-content {
          padding: 60px 0;
          background: var(--white);
        }

        .privacy-wrapper {
          max-width: 900px;
          margin: 0 auto;
          background: var(--white);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid #f0f0f0;
        }

        .privacy-section {
          margin-bottom: 35px;
        }

        .privacy-section h2 {
          font-size: 24px;
          color: var(--black);
          margin-bottom: 20px;
          font-weight: 700;
          border-left: 3px solid var(--primary);
          padding-left: 15px;
        }

        .privacy-section h3 {
          font-size: 20px;
          color: var(--dark-gray);
          margin: 25px 0 15px;
          font-weight: 600;
        }

        .privacy-section p {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .privacy-section ul {
          list-style: none;
          padding: 0;
          margin: 15px 0;
        }

        .privacy-section ul li {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 12px;
          padding-left: 25px;
          position: relative;
        }

        .privacy-section ul li:before {
          content: '✓';
          color: var(--primary);
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .info-box {
          background: var(--light-gray);
          padding: 25px;
          borderRadius: 15px;
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
          
          .privacy-wrapper {
            padding: 25px;
          }
          
          .privacy-section h2 {
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
            <li style={{ fontSize: '14px', color: '#000', fontWeight: 600 }}>Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>How we protect and handle your information</p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content">
        <div className="container">
          <div className="privacy-wrapper">
            
            <div className="privacy-section">
              <h2>1. Introduction</h2>
              <p>At Hijab Fashion Mall, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or place wholesale orders with us. By using our services, you agree to the practices described in this policy.</p>
              <p>We operate as a wholesale supplier of Turkish modest wear, serving retailers and boutiques worldwide. Our commitment to data protection ensures that your information remains secure while you conduct business with us.</p>
            </div>

            <div className="privacy-section">
              <h2>2. Information We Collect</h2>
              <p>We collect information that helps us process your orders and improve our services. The types of information we may collect include:</p>
              <ul>
                <li><strong>Business Information:</strong> Company name, business address, tax identification number (where applicable)</li>
                <li><strong>Contact Details:</strong> Name, email address, phone number, WhatsApp contact</li>
                <li><strong>Order Information:</strong> Product selections, quantities, shipping address, order history</li>
                <li><strong>Communication Data:</strong> Messages and inquiries sent through our website or WhatsApp</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and website usage patterns</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>3. How We Use Your Information</h2>
              <p>Your information is used solely for legitimate business purposes related to our wholesale operations:</p>
              <ul>
                <li>Processing and fulfilling your wholesale orders</li>
                <li>Communicating with you about your orders and inquiries</li>
                <li>Providing customer support and assistance</li>
                <li>Managing shipping and delivery arrangements</li>
                <li>Sending important updates about your account or orders</li>
                <li>Improving our website and services</li>
                <li>Complying with legal and regulatory requirements</li>
              </ul>
              <div className="info-box">
                <p><strong>🔒 Note:</strong> We do not sell, rent, or share your personal information with third parties for marketing purposes. Your data is used exclusively to serve your wholesale needs.</p>
              </div>
            </div>

            <div className="privacy-section">
              <h2>4. Sharing Your Information</h2>
              <p>We may share your information with trusted third parties only when necessary to fulfill your orders:</p>
              <ul>
                <li><strong>Shipping Partners:</strong> To deliver your orders to your specified address</li>
                <li><strong>Payment Processors:</strong> To securely process your payments</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
              </ul>
              <p>All third-party service providers are contractually obligated to protect your information and use it only for the purposes specified.</p>
            </div>

            <div className="privacy-section">
              <h2>5. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
              <ul>
                <li>Secure socket layer (SSL) encryption for data transmission</li>
                <li>Regular security assessments and updates</li>
                <li>Restricted access to personal information</li>
                <li>Secure storage systems and data protection protocols</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>6. Cookies and Tracking Technologies</h2>
              <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies help us understand how visitors interact with our site, allowing us to improve functionality and user experience. You may adjust your browser settings to refuse cookies, though this may affect certain website features.</p>
              <p>We use cookies for essential functions such as:</p>
              <ul>
                <li>Remembering your cart selections</li>
                <li>Maintaining your session during browsing</li>
                <li>Analyzing website traffic and performance</li>
                <li>Storing language and currency preferences</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>7. Data Retention</h2>
              <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Order information is typically retained for business record-keeping and to address any potential issues with your orders.</p>
            </div>

            <div className="privacy-section">
              <h2>8. Your Rights</h2>
              <p>As a valued customer, you have certain rights regarding your personal information:</p>
              <ul>
                <li><strong>Access:</strong> Request a copy of the information we hold about you</li>
                <li><strong>Correction:</strong> Ask us to correct any inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal obligations</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
              </ul>
              <p>To exercise any of these rights, please contact us through our website contact form.</p>
            </div>

            <div className="privacy-section">
              <h2>9. International Data Transfers</h2>
              <p>As an international wholesale supplier, your information may be transferred to and processed in countries outside your residence. We ensure appropriate safeguards are in place to protect your data in accordance with applicable privacy laws.</p>
            </div>

            <div className="privacy-section">
              <h2>10. Children's Privacy</h2>
              <p>Our services are intended for business customers and are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.</p>
            </div>

            <div className="privacy-section">
              <h2>11. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any modifications will be posted on this page with an updated effective date. We encourage you to review this policy periodically.</p>
            </div>

            <div className="privacy-section">
              <h2>12. Contact Information</h2>
              <p>If you have any questions about this Privacy Policy or how we handle your personal information, please reach out to us:</p>
              <ul>
                <li><strong>WhatsApp:</strong> +90 551 952 24 48</li>
                <li><strong>Contact Form:</strong> Available on our website</li>
              </ul>
              <p>Our team is available to assist you with any privacy-related concerns.</p>
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