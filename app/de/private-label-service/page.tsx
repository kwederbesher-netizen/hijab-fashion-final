// app/de/private-label-service/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { 
  FaCrown, FaChartLine, FaStar, FaTag, FaTags, FaBox, FaPalette, 
  FaQuestionCircle, FaCheck, FaWhatsapp, FaArrowRight
} from 'react-icons/fa'

export default function PrivateLabelServiceGermanPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(anchor.hash)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Private Label Service 2026 | Bauen Sie Ihre Eigene Marke | Hijab Fashion Mall</title>
        <meta name="description" content="Bauen Sie Ihre eigene Marke für bescheidene Mode mit unserem umfassenden Private Label Service. Kundenspezifische Etiketten, Preisschilder, Premium-Verpackungen und mehr." />
        <meta name="keywords" content="Private Label Hijab, kundenspezifische Etiketten, Preisschilder, individuelle Verpackung, türkischer Großhandel, bescheidene Modemarke" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hijabfashionmall.com/de/private-label-service" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/private-label-service" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/private-label-service" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/private-label-service" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/private-label-service" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/private-label-service" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/private-label-service" />
        <link rel="alternate" hrefLang="x-default" href="https://hijabfashionmall.com/en/private-label-service" />
        <meta property="og:title" content="Private Label Service 2026 | Bauen Sie Ihre Eigene Marke" />
        <meta property="og:description" content="Bauen Sie Ihre eigene Marke für bescheidene Mode mit unserem umfassenden Private Label Service." />
        <meta property="og:image" content="https://hijabfashionmall.com/images/private-label-intro.webp" />
        <meta property="og:url" content="https://hijabfashionmall.com/de/private-label-service" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="de_DE" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <style>{`
        /* Same styles as French version */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --primary: #ff5a00; --primary-dark: #e04e00; --primary-soft: #fff0e6;
            --black: #000; --dark-gray: #1a1a1a; --medium-gray: #555;
            --light-gray: #f8f9fa; --border-gray: #e9ecef; --white: #fff;
            --whatsapp: #25d366; --success: #28a745;
            --shadow-md: 0 5px 20px rgba(0,0,0,0.08); --shadow-lg: 0 20px 40px rgba(0,0,0,0.1);
            --radius-md: 12px; --radius-lg: 20px;
        }
        body { font-family: 'Poppins', system-ui, sans-serif; color: var(--dark-gray); line-height: 1.6; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .btn-primary, .btn-whatsapp { display: inline-flex; align-items: center; gap: 10px; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-weight: 600; transition: all 0.3s; }
        .btn-primary { background: var(--primary); color: white; }
        .btn-whatsapp { background: var(--whatsapp); color: white; }
        .section-title { text-align: center; font-size: 42px; margin-bottom: 16px; font-weight: 800; }
        .section-title span { color: var(--primary); }
        .section-subtitle { text-align: center; color: var(--medium-gray); font-size: 18px; max-width: 700px; margin: 0 auto 50px; }
        .page-header { background: linear-gradient(135deg, var(--primary-soft) 0%, var(--white) 100%); padding: 80px 0 60px; text-align: center; position: relative; overflow: hidden; }
        .page-header::before { content: 'PRIVATE LABEL 2026'; position: absolute; top: 15%; right: 3%; font-size: 50px; font-weight: 800; color: rgba(255,90,0,0.03); white-space: nowrap; }
        .page-header h1 { font-size: 56px; color: var(--black); }
        .page-header h1 span { color: var(--primary); }
        .badge-2026 { display: inline-block; background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); color: white; padding: 6px 18px; border-radius: 50px; font-size: 14px; margin-bottom: 20px; }
        .intro-wrapper { display: flex; align-items: center; gap: 60px; }
        .intro-content { flex: 1; }
        .intro-content h2 { font-size: 40px; margin-bottom: 20px; }
        .intro-image { flex: 1; }
        .intro-image img { width: 100%; border-radius: var(--radius-lg); }
        .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 50px; }
        .why-card { background: white; padding: 40px 30px; border-radius: var(--radius-lg); text-align: center; box-shadow: var(--shadow-md); transition: all 0.3s; }
        .why-card:hover { transform: translateY(-10px); border-color: var(--primary); }
        .why-icon { width: 80px; height: 80px; background: var(--primary-soft); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; }
        .why-icon svg { font-size: 36px; color: var(--primary); }
        .services-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; margin-top: 50px; }
        .service-item { display: flex; gap: 25px; padding: 32px; background: white; border-radius: var(--radius-md); box-shadow: var(--shadow-md); transition: all 0.3s; }
        .service-item:hover { transform: translateY(-5px); border-color: var(--primary); }
        .service-icon { width: 80px; height: 80px; background: var(--primary-soft); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .service-icon svg { font-size: 36px; color: var(--primary); }
        .service-features { list-style: none; margin-top: 15px; }
        .service-features li { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; font-size: 14px; }
        .service-features li svg { color: var(--primary); }
        .process-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; margin-top: 50px; }
        .step-number { width: 80px; height: 80px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; font-size: 32px; font-weight: 800; color: var(--primary); border: 2px solid var(--primary); }
        .brand-section { background: linear-gradient(135deg, var(--black) 0%, #1a1a1a 100%); color: white; padding: 80px 0; text-align: center; }
        .brand-stats { display: flex; justify-content: center; gap: 60px; margin-top: 50px; flex-wrap: wrap; }
        .brand-stat .number { font-size: 48px; font-weight: 800; color: var(--primary); }
        .faq-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 50px; }
        .faq-item { background: white; border-radius: var(--radius-md); box-shadow: var(--shadow-md); overflow: hidden; }
        .faq-question { display: flex; justify-content: space-between; padding: 24px 28px; cursor: pointer; }
        .faq-question-left { display: flex; align-items: center; gap: 15px; }
        .faq-question-left svg { color: var(--primary); }
        .faq-answer { padding: 0 28px 24px; color: var(--medium-gray); display: none; border-top: 1px solid var(--border-gray); }
        .faq-answer.open { display: block; }
        .cta-section { background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); color: white; padding: 80px 0; text-align: center; }
        .cta-buttons { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-top: 32px; }
        .cta-btn-primary { background: white; color: var(--primary); padding: 16px 40px; border-radius: 50px; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 10px; }
        @media (max-width: 992px) {
            .intro-wrapper { flex-direction: column; text-align: center; }
            .why-grid { grid-template-columns: repeat(2, 1fr); }
            .services-grid { grid-template-columns: 1fr; }
            .process-steps { grid-template-columns: repeat(2, 1fr); }
            .faq-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
            .page-header h1 { font-size: 32px; }
            .section-title { font-size: 28px; }
            .why-grid { grid-template-columns: 1fr; }
            .process-steps { grid-template-columns: 1fr; }
            .brand-stats { flex-direction: column; gap: 30px; }
            .service-item { flex-direction: column; text-align: center; align-items: center; }
        }
      `}</style>

      <section className="page-header">
        <div className="container">
          <div className="breadcrumb"><Link href="/de">🏠 Startseite</Link> <span>&gt;</span> <span>✨ Private Label Service 2026</span></div>
          <h1><span>Private Label Service</span> 2026</h1>
          <p>Bauen Sie Ihre eigene Marke für bescheidene Mode mit unseren umfassenden Lösungen auf.</p>
        </div>
      </section>

      <section className="service-intro">
        <div className="container">
          <div className="intro-wrapper">
            <div className="intro-content">
              <span className="badge-2026">✨ 2026 Edition | Türkische Qualität</span>
              <h2>Bauen Sie <span>Ihre Unverwechselbare Markenidentität</span> auf dem Markt für Bescheidene Mode auf</h2>
              <p className="lead">Auf dem heutigen wettbewerbsintensiven Modemarkt ist eine unverwechselbare Markenidentität keine Option mehr - sie ist entscheidend für Erfolg und Langlebigkeit.</p>
              <p>Unser umfassender Private-Label-Service ermöglicht es Ihnen, Ihre Marke auf dem Hijab-Markt aufzubauen und zu erweitern, ohne die Komplexität der Herstellung. Wir bieten Premium-Produkte aus der Türkei als leere Leinwand für Ihre Markenvision.</p>
              <p>Egal, ob Sie eine neue Boutique eröffnen, ein bestehendes Geschäft erweitern oder eine exklusive Kollektion erstellen - unsere Private-Label-Lösung bietet Ihnen die Flexibilität und Qualität, die Sie benötigen, um sich auf dem Markt für bescheidene Mode abzuheben.</p>
            </div>
            <div className="intro-image">
              <Image src="/images/private-label-intro.webp" alt="Private Label Service" width={500} height={400} priority onError={(e) => { const target = e.target as HTMLImageElement; target.src = '/images/fallback-private-label.webp'; }} />
            </div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <h2 className="section-title">Warum <span>Private Label</span> im Jahr 2026?</h2>
          <p className="section-subtitle">Der Schlüssel zum Aufbau einer nachhaltigen, anerkannten Modemarke</p>
          <div className="why-grid">
            <div className="why-card"><div className="why-icon"><FaCrown size={32} /></div><h3>Markeninhaberschaft</h3><p>Bauen Sie eine Marke auf, die Ihnen vollständig gehört.</p></div>
            <div className="why-card"><div className="why-icon"><FaChartLine size={32} /></div><h3>Langfristiges Wachstum</h3><p>Schaffen Sie Markentreue und Wiederholungskäufer.</p></div>
            <div className="why-card"><div className="why-icon"><FaStar size={32} /></div><h3>Premium-Positionierung</h3><p>Positionieren Sie Ihre Produkte auf einem Premium-Niveau.</p></div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Unsere Umfassenden <span>Private Label Services</span></h2>
          <p className="section-subtitle">Wählen Sie genau das, was Sie brauchen, um Ihre Markenvision zu verwirklichen</p>
          <div className="services-grid">
            <div className="service-item"><div className="service-icon"><FaTag size={36} /></div><div className="service-content"><h3>Kundenspezifische Webetiketten</h3><p>Hochwertige Webetiketten mit Ihrem Markennamen und Logo.</p><ul className="service-features"><li><FaCheck size={14} /> Premium-Gewebe</li><li><FaCheck size={14} /> Mehrere Farboptionen</li><li><FaCheck size={14} /> Kundenspezifische Größen</li></ul></div></div>
            <div className="service-item"><div className="service-icon"><FaTags size={36} /></div><div className="service-content"><h3>Kundenspezifische Preisschilder</h3><p>Professionelle Preisschilder, die Ihre Markengeschichte kommunizieren.</p><ul className="service-features"><li><FaCheck size={14} /> Premium-Papier</li><li><FaCheck size={14} /> Prägungen</li><li><FaCheck size={14} /> Kundenspezifische Formen</li></ul></div></div>
            <div className="service-item"><div className="service-icon"><FaBox size={36} /></div><div className="service-content"><h3>Kundenspezifische Verpackung</h3><p>Schaffen Sie ein komplettes Auspackerlebnis.</p><ul className="service-features"><li><FaCheck size={14} /> Bedruckte Beutel</li><li><FaCheck size={14} /> Markenboxen</li><li><FaCheck size={14} /> Umweltfreundliche Optionen</li></ul></div></div>
            <div className="service-item"><div className="service-icon"><FaPalette size={36} /></div><div className="service-content"><h3>Komplettes Branding-Paket</h3><p>Die ultimative Lösung für ernsthafte Markenaufbauer.</p><ul className="service-features"><li><FaCheck size={14} /> Koordiniertes Design</li><li><FaCheck size={14} /> Volumenpreise</li><li><FaCheck size={14} /> Konstante Qualität</li></ul></div></div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Einfacher <span>4-Schritt-Prozess</span></h2>
          <div className="process-steps">
            <div className="process-step"><div className="step-number">1</div><h3>Teilen Sie Ihre Vision</h3><p>Kontaktieren Sie uns mit Ihrem Markenkonzept.</p></div>
            <div className="process-step"><div className="step-number">2</div><h3>Wählen Sie Produkte</h3><p>Wählen Sie aus 5000+ türkischen Premium-Artikeln.</p></div>
            <div className="process-step"><div className="step-number">3</div><h3>Design & Genehmigung</h3><p>Wir erstellen digitale Mockups.</p></div>
            <div className="process-step"><div className="step-number">4</div><h3>Produktion & Versand</h3><p>Weltweiter Versand mit Sendungsverfolgung.</p></div>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="container">
          <h2>Bauen Sie eine Marke <span>Die Bleibt</span></h2>
          <div className="brand-stats">
            <div className="brand-stat"><div className="number">78%</div><div className="label">bevorzugen Markenprodukte</div></div>
            <div className="brand-stat"><div className="number">3.5x</div><div className="label">höhere Kundenbindung</div></div>
            <div className="brand-stat"><div className="number">40%+</div><div className="label">höhere Gewinnmargen</div></div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Häufig <span>Gestellte Fragen</span></h2>
          <div className="faq-grid">
            <div className="faq-item"><div className="faq-question" onClick={() => toggleFaq(0)}><div className="faq-question-left"><FaQuestionCircle size={22} /><h3>Mindestbestellmenge?</h3></div><span className={`faq-icon ${openFaq === 0 ? 'open' : ''}`}>▼</span></div><div className={`faq-answer ${openFaq === 0 ? 'open' : ''}`}>Wir bieten flexible Optionen für Unternehmen jeder Größe.</div></div>
            <div className="faq-item"><div className="faq-question" onClick={() => toggleFaq(1)}><div className="faq-question-left"><FaQuestionCircle size={22} /><h3>Produkte mischen?</h3></div><span className={`faq-icon ${openFaq === 1 ? 'open' : ''}`}>▼</span></div><div className={`faq-answer ${openFaq === 1 ? 'open' : ''}`}>Absolut! Jede Kombination aus unserem Katalog ist möglich.</div></div>
            <div className="faq-item"><div className="faq-question" onClick={() => toggleFaq(2)}><div className="faq-question-left"><FaQuestionCircle size={22} /><h3>Dauer des Prozesses?</h3></div><span className={`faq-icon ${openFaq === 2 ? 'open' : ''}`}>▼</span></div><div className={`faq-answer ${openFaq === 2 ? 'open' : ''}`}>Produktion 2-3 Wochen, Lieferung 3-7 Tage.</div></div>
            <div className="faq-item"><div className="faq-question" onClick={() => toggleFaq(3)}><div className="faq-question-left"><FaQuestionCircle size={22} /><h3>Design-Hilfe?</h3></div><span className={`faq-icon ${openFaq === 3 ? 'open' : ''}`}>▼</span></div><div className={`faq-answer ${openFaq === 3 ? 'open' : ''}`}>Ja! Unser Team bietet Designberatung.</div></div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Bereit für Ihre Marke?</h2>
          <p>Kontaktieren Sie uns noch heute, um Ihre Vision zu besprechen.</p>
          <div className="cta-buttons">
            <a href="https://wa.me/905519522448" className="btn-whatsapp" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={20} /> WhatsApp</a>
            <Link href="/de/contact" className="cta-btn-primary">Kontakt <FaArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}