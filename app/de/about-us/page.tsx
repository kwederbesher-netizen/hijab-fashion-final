'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { 
  FaStore, FaGlobe, FaTshirt, FaCalendarAlt, 
  FaBoxes, FaBan, FaCertificate, FaHeadset, FaTag, FaShippingFast,
  FaQuoteRight
} from 'react-icons/fa'

export default function AboutPageDe() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).updateCartCount) {
      (window as any).updateCartCount()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Über uns - Hijab Fashion Mall | Großhandel Türkische Mode</title>
        <meta name="description" content="Seit 2019 verbindet Hijab Fashion Mall Einzelhändler weltweit mit authentischer türkischer Hijab-Kleidung. Keine Mindestbestellmenge, weltweiter Versand, 5000+ Produkte." />
        <meta name="keywords" content="Großhandel türkische Hijab, türkische Mode, Istanbul Hijab Lieferant" />
        <link rel="canonical" href="https://hijabfashionmall.com/de/about-us" />
      </Head>

      <div dir="ltr">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <div className="container">
            <ul>
              <li><Link href="/de">Startseite</Link></li>
              <li className="active">Über uns</li>
            </ul>
          </div>
        </div>

        {/* Page Header */}
        <section className="page-header">
          <div className="container">
            <h1>Über Hijab Fashion Mall</h1>
            <p>Ihr vertrauenswürdiger Partner für Premium-türkische Hijab-Kleidung seit 2019. Wir verbinden Einzelhändler weltweit mit authentischer türkischer Mode.</p>
          </div>
        </section>

        {/* About Section - No Image */}
        <section className="about-section">
          <div className="container">
            <div className="about-content-full">
              <h2>Wer wir sind</h2>
              <p>Hijab Fashion Mall ist ein türkisches Großhandelsunternehmen mit Sitz in Istanbul, das sich auf Premium-Hijab-Kleidung und türkische Mode spezialisiert hat. Seit unserer Gründung im Jahr 2019 setzen wir uns dafür ein, Einzelhändlern und Geschäften weltweit den Zugang zu authentischen türkischen Produkten von den besten Herstellern zu ermöglichen.</p>
              
              <p>Wir arbeiten mit den besten türkischen Herstellern zusammen, um Ihnen hochwertige Produkte zu wettbewerbsfähigen Preisen anzubieten, wobei wir den Komfort unserer Kunden in den Vordergrund stellen und Ihnen den besten Gegenwert für Ihr Geld garantieren.</p>
              
              <div className="about-highlight">
                <p><FaQuoteRight /> "Wir verkaufen nicht nur Produkte; wir bauen langfristige Partnerschaften mit unseren Kunden auf. Ihr Erfolg ist unser Erfolg."</p>
              </div>
              
              <p>Mit über 5000 Produkten in 9 Kategorien bieten wir alles von eleganten Abayas bis hin zu moderner Sportbekleidung, alle hergestellt in der Türkei mit den besten Materialien und Handwerkskunst.</p>
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
                <div className="stat-label">Marken</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaGlobe /></div>
                <div className="stat-number">50+</div>
                <div className="stat-label">Länder</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaTshirt /></div>
                <div className="stat-number">5000+</div>
                <div className="stat-label">Produkte</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaCalendarAlt /></div>
                <div className="stat-number">2019</div>
                <div className="stat-label">Gegründet</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <h2 className="section-title">Was wir bieten</h2>
            <p className="section-subtitle">Dienstleistungen, die Ihr Geschäft wachsen lassen</p>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon"><FaBoxes /></div>
                <h3>Mischen Sie Ihre Bestellung</h3>
                <p>Kombinieren Sie verschiedene Produkte in einer Sendung. Bestellen Sie genau das, was Sie aus mehreren Kategorien benötigen.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaBan /></div>
                <h3>Keine Mindestbestellung</h3>
                <p>Beginnen Sie mit jeder Menge. Perfekt für kleine Boutiquen und große Einzelhändler gleichermaßen.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaCertificate /></div>
                <h3>100% Original Hergestellt in der Türkei</h3>
                <p>Authentische Produkte direkt von türkischen Herstellern. Keine Kopien oder Imitationen.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaHeadset /></div>
                <h3>24/7 Kundensupport</h3>
                <p>Wir sind immer da, um bei Bestellungen, Anfragen und persönlicher Unterstützung zu helfen.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaTag /></div>
                <h3>Private Label Service</h3>
                <p>Bauen Sie Ihre eigene Marke mit individueller Verpackung und exklusiven Designs für regelmäßige Bestellungen auf.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaShippingFast /></div>
                <h3>Weltweiter Versand</h3>
                <p>Schnelle Lieferung in über 50 Länder mit zuverlässigen Spediteuren und Sendungsverfolgung.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="container">
            <div className="mission-content">
              <h2>Unsere Mission</h2>
              <p>Premium-türkische Mode für Einzelhändler weltweit zugänglich zu machen, ohne die Komplexität der internationalen Beschaffung. Wir sind Ihr vertrauenswürdiger Partner für Qualität, Zuverlässigkeit und Erfolg Ihres Unternehmens.</p>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        .breadcrumb { padding: 20px 0; background: #f5f5f5; border-bottom: 1px solid #eee; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .breadcrumb ul { list-style: none; display: flex; flex-wrap: wrap; gap: 10px; }
        .breadcrumb li { font-size: 14px; color: #555; }
        .breadcrumb li:not(:last-child):after { content: "›"; margin-left: 10px; color: #555; }
        .breadcrumb a { color: #555; text-decoration: none; transition: color 0.3s; }
        .breadcrumb a:hover { color: #ff5a00; }
        .breadcrumb .active { color: #222; font-weight: 600; }

        .page-header { background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%); padding: 60px 0; text-align: center; border-bottom: 1px solid #eee; }
        .page-header h1 { font-size: 48px; color: #222; margin-bottom: 20px; font-weight: 700; }
        .page-header p { font-size: 18px; color: #555; max-width: 800px; margin: 0 auto; }

        .about-section { padding: 80px 0; }
        .about-content-full { max-width: 900px; margin: 0 auto; text-align: center; }
        .about-content-full h2 { font-size: 36px; color: #222; margin-bottom: 30px; font-weight: 700; }
        .about-content-full p { font-size: 16px; color: #555; line-height: 1.8; margin-bottom: 20px; text-align: justify; }
        .about-highlight { background: #f5f5f5; padding: 30px; border-radius: 15px; margin: 30px 0; border-left: 4px solid #ff5a00; text-align: center; }
        .about-highlight p { margin-bottom: 0; font-size: 18px; font-weight: 500; color: #222; display: flex; align-items: center; justify-content: center; gap: 10px; text-align: center; }
        .about-highlight svg { color: #ff5a00; font-size: 24px; flex-shrink: 0; }

        .stats-section { padding: 60px 0; background: #f5f5f5; }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; text-align: center; }
        .stat-card { background: #fff; padding: 40px 20px; border-radius: 15px; transition: transform 0.3s; }
        .stat-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(255, 90, 0, 0.1); }
        .stat-icon { width: 80px; height: 80px; margin: 0 auto 20px; background: rgba(255, 90, 0, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; color: #ff5a00; }
        .stat-number { font-size: 36px; font-weight: 700; color: #222; margin-bottom: 10px; }
        .stat-label { font-size: 16px; color: #555; }

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

        .mission-section { padding: 60px 0; background: linear-gradient(135deg, #ff5a00 0%, #e04e00 100%); color: white; }
        .mission-content { text-align: center; max-width: 800px; margin: 0 auto; }
        .mission-content h2 { font-size: 36px; margin-bottom: 20px; color: white; }
        .mission-content p { font-size: 18px; line-height: 1.8; margin-bottom: 30px; opacity: 0.9; }

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