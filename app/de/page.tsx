// app/de/page.tsx
'use client'

import Link from 'next/link'
import Head from 'next/head'

export default function ComingSoonPageDe() {
  return (
    <>
      <Head>
        <title>Demnächst verfügbar - Hijab Fashion Mall | Türkische Modest Mode Großhandel</title>
        <meta name="description" content="Unsere deutsche Website wird bald eröffnet. Wir bereiten etwas Besonderes für Sie vor. Bleiben Sie dran für exklusive Angebote und Neuheiten." />
        <meta name="keywords" content="coming soon, demnächst verfügbar, türkische modest mode, hijab großhandel" />
        <link rel="canonical" href="https://hijabfashionmall.com/de" />
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

        .section-title {
          text-align: center;
          font-size: 42px;
          color: var(--black);
          margin-bottom: 15px;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .section-subtitle {
          text-align: center;
          color: var(--medium-gray);
          margin-bottom: 40px;
          font-size: 20px;
          font-weight: 400;
        }

        .coming-soon {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #fff5f0 0%, #ffffff 100%);
          position: relative;
          overflow: hidden;
        }

        .coming-soon::before {
          content: '✦';
          position: absolute;
          top: 10%;
          left: 5%;
          font-size: 120px;
          color: rgba(255, 90, 0, 0.03);
          font-family: monospace;
          pointer-events: none;
        }

        .coming-soon::after {
          content: '✦';
          position: absolute;
          bottom: 10%;
          right: 5%;
          font-size: 180px;
          color: rgba(255, 90, 0, 0.03);
          font-family: monospace;
          pointer-events: none;
        }

        .coming-content {
          text-align: center;
          max-width: 800px;
          padding: 40px;
          z-index: 2;
          animation: fadeInUp 0.8s ease;
        }

        .logo {
          margin-bottom: 40px;
        }

        .logo h1 {
          font-size: 48px;
          color: var(--black);
          font-weight: 800;
          letter-spacing: -1px;
        }

        .logo span {
          color: var(--primary);
          font-size: 24px;
          font-weight: 500;
        }

        .coming-icon {
          width: 120px;
          height: 120px;
          background: rgba(255, 90, 0, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px;
          font-size: 50px;
          color: var(--primary);
          animation: pulse 2s infinite;
        }

        h2 {
          font-size: 56px;
          color: var(--black);
          margin-bottom: 20px;
          font-weight: 800;
        }

        .coming-description {
          font-size: 20px;
          color: var(--medium-gray);
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .coming-features {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          margin: 40px 0;
        }

        .feature-item {
          text-align: center;
          padding: 20px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          min-width: 160px;
          transition: transform 0.3s;
        }

        .feature-item:hover {
          transform: translateY(-5px);
        }

        .feature-icon {
          font-size: 32px;
          color: var(--primary);
          margin-bottom: 10px;
        }

        .feature-item p {
          font-size: 14px;
          color: var(--medium-gray);
          font-weight: 500;
        }

        /* Channels Section */
        .channels-section {
          padding: 60px 0 40px;
          background: linear-gradient(135deg, var(--light-gray) 0%, #ffffff 100%);
        }

        .channels-grid {
          display: grid;
          grid-template-columns: repeat(2, 320px);
          gap: 30px;
          justify-content: center;
          margin: 0 auto;
        }

        .channel-card {
          background: var(--white);
          border-radius: 20px;
          padding: 30px 25px;
          text-align: center;
          transition: transform 0.3s;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }

        .channel-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .channel-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 40px;
        }

        .whatsapp-card .channel-icon {
          background: rgba(37, 211, 102, 0.1);
          color: var(--whatsapp);
        }

        .telegram-card .channel-icon {
          background: rgba(0, 136, 204, 0.1);
          color: var(--telegram);
        }

        .channel-card h3 {
          font-size: 24px;
          margin-bottom: 12px;
          color: var(--black);
          font-weight: 700;
        }

        .channel-card p {
          color: var(--medium-gray);
          margin-bottom: 20px;
          font-size: 15px;
          line-height: 1.6;
        }

        .channel-stats {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 25px;
        }

        .channel-stats span {
          font-size: 14px;
          color: var(--medium-gray);
        }

        .channel-stats i {
          margin-right: 5px;
          color: var(--primary);
        }

        .channel-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 25px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 15px;
          transition: all 0.3s;
          width: 100%;
          max-width: 250px;
          margin: 0 auto;
          color: var(--white);
        }

        .whatsapp-btn {
          background: var(--whatsapp);
        }

        .whatsapp-btn:hover {
          background: var(--whatsapp-dark);
        }

        .telegram-btn {
          background: var(--telegram);
        }

        .telegram-btn:hover {
          background: var(--telegram-dark);
        }

        .contact-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--primary);
          color: var(--white);
          padding: 16px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(255, 90, 0, 0.2);
        }

        .btn-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 90, 0, 0.3);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
          padding: 14px 38px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
        }

        .btn-outline:hover {
          background: var(--primary);
          color: var(--white);
          transform: translateY(-2px);
        }

        .language-links {
          margin-top: 50px;
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .language-links a {
          color: var(--medium-gray);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s;
          padding: 5px 10px;
          border-radius: 20px;
        }

        .language-links a:hover {
          color: var(--primary);
          background: rgba(255, 90, 0, 0.05);
        }

        .language-links span {
          color: var(--primary);
          font-weight: 600;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 36px;
          }
          
          .coming-description {
            font-size: 16px;
          }
          
          .logo h1 {
            font-size: 32px;
          }
          
          .coming-icon {
            width: 90px;
            height: 90px;
            font-size: 40px;
          }
          
          .contact-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .btn-primary, .btn-outline {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
          
          .section-title {
            font-size: 32px;
          }
          
          .section-subtitle {
            font-size: 18px;
          }
          
          .channels-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .channel-card {
            max-width: 320px;
            margin: 0 auto;
            width: 100%;
          }
        }
      `}</style>

      <div className="coming-soon">
        <div className="container">
          <div className="coming-content">
            <div className="logo">
              <h1>Hijab Fashion Mall</h1>
              <span>Wholesale</span>
            </div>
            
            <div className="coming-icon">
              <i className="fas fa-construction"></i>
            </div>
            
            <h2>Bald verfügbar</h2>
            <p className="coming-description">
              Wir arbeiten daran, Ihnen die beste Auswahl an türkischer Modest-Mode zu bieten. 
              Unsere deutsche Website wird in Kürze eröffnet. Bleiben Sie dran für exklusive Angebote!
            </p>
            
            <div className="coming-features">
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-tshirt"></i></div>
                <p>Premium Abayas & Kleider</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-shipping-fast"></i></div>
                <p>Weltweiter Versand</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-tags"></i></div>
                <p>Großhandelspreise</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Channels Section */}
      <section className="channels-section">
        <div className="container">
          <h2 className="section-title">Treten Sie unseren Kanälen bei</h2>
          <p className="section-subtitle">Folgen Sie uns auf WhatsApp und Telegram für die neuesten Updates und exklusive Angebote</p>
          <div className="channels-grid">
            <div className="channel-card whatsapp-card">
              <div className="channel-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <h3>WhatsApp Kanal</h3>
              <p>Treten Sie unserem WhatsApp-Kanal bei für tägliche Neuheiten, Sonderrabatte und frühzeitigen Zugang zu Kollektionen.</p>
              <div className="channel-stats">
                <span><i className="fas fa-users"></i> 1.500+ Mitglieder</span>
                <span><i className="fas fa-image"></i> Tägliche Updates</span>
              </div>
              <a href="https://whatsapp.com/channel/0029VatIrfWId7nGgsYAFQ1G" className="channel-btn whatsapp-btn" target="_blank" rel="noopener noreferrer">WhatsApp-Kanal beitreten</a>
            </div>
            <div className="channel-card telegram-card">
              <div className="channel-icon">
                <i className="fab fa-telegram-plane"></i>
              </div>
              <h3>Telegram Kanal</h3>
              <p>Treten Sie unserem Telegram-Kanal bei für exklusive Inhalte, Styling-Tipps und Sonderangebote.</p>
              <div className="channel-stats">
                <span><i className="fas fa-users"></i> 11.000+ Mitglieder</span>
                <span><i className="fas fa-video"></i> Video-Tutorials</span>
              </div>
              <a href="https://t.me/hijabfashionmall" className="channel-btn telegram-btn" target="_blank" rel="noopener noreferrer">Telegram-Kanal beitreten</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Centered with All Languages */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px 60px 20px',
        textAlign: 'center',
        width: '100%'
      }}>
        <div className="contact-buttons">
          <a href="https://wa.me/905519522448?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zu%20Ihren%20Produkten" 
             className="btn-primary" 
             target="_blank" 
             rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i> Kontaktieren Sie uns
          </a>
          <Link href="/en" className="btn-outline">
            <i className="fas fa-globe"></i> English Version
          </Link>
        </div>
        
        <div className="language-links">
          <Link href="/en">English</Link>
          <Link href="/ar">العربية</Link>
          <Link href="/fr">Français</Link>
          <span style={{ color: '#ff5a00', fontWeight: 600 }}>Deutsch</span>
          <Link href="/es">Español</Link>
          <Link href="/it">Italiano</Link>
          <Link href="/tr">Türkçe</Link>
        </div>
      </div>
    </>
  )
}