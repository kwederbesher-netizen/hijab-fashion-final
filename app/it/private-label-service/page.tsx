'use client'

// app/it/private-label-service/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { 
  FaCrown, FaChartLine, FaStar, FaTag, FaTags, FaBox, FaPalette, 
  FaQuestionCircle, FaCheck, FaWhatsapp, FaArrowRight
} from 'react-icons/fa'

export default function PrivateLabelServiceItalianPage() {
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
        <title>Servizio Private Label 2026 | Crea Il Tuo Marchio | Hijab Fashion Mall</title>
        <meta name="description" content="Crea il tuo marchio di moda modesta con il nostro servizio Private Label completo. Etichette personalizzate, cartellini, packaging premium e altro ancora." />
        <meta name="keywords" content="private label hijab, etichette personalizzate, cartellini, packaging personalizzato, grossista turco, marchio moda modesta" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hijabfashionmall.com/it/private-label-service" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/private-label-service" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/private-label-service" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/private-label-service" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/private-label-service" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/private-label-service" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/private-label-service" />
        <link rel="alternate" hrefLang="x-default" href="https://hijabfashionmall.com/en/private-label-service" />
        <meta property="og:title" content="Servizio Private Label 2026 | Crea Il Tuo Marchio" />
        <meta property="og:description" content="Crea il tuo marchio di moda modesta con il nostro servizio Private Label completo." />
        <meta property="og:image" content="https://hijabfashionmall.com/images/private-label-intro.webp" />
        <meta property="og:url" content="https://hijabfashionmall.com/it/private-label-service" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="it_IT" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --primary: #ff5a00; --primary-dark: #e04e00; --primary-soft: #fff0e6;
            --black: #000; --dark-gray: #1a1a1a; --medium-gray: #555;
            --light-gray: #f8f9fa; --border-gray: #e9ecef; --white: #fff;
            --whatsapp: #25d366;
            --shadow-md: 0 5px 20px rgba(0,0,0,0.08); --radius-md: 12px; --radius-lg: 20px;
        }
        body { font-family: 'Poppins', system-ui, sans-serif; color: var(--dark-gray); line-height: 1.6; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .btn-primary, .btn-whatsapp { display: inline-flex; align-items: center; gap: 10px; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-weight: 600; transition: all 0.3s; }
        .btn-primary { background: var(--primary); color: white; }
        .btn-whatsapp { background: var(--whatsapp); color: white; }
        .section-title { text-align: center; font-size: 42px; margin-bottom: 16px; font-weight: 800; }
        .section-title span { color: var(--primary); }
        .section-subtitle { text-align: center; color: var(--medium-gray); font-size: 18px; max-width: 700px; margin: 0 auto 50px; }
        .page-header { background: linear-gradient(135deg, var(--primary-soft) 0%, var(--white) 100%); padding: 80px 0 60px; text-align: center; }
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
        .why-card:hover { transform: translateY(-10px); }
        .why-icon { width: 80px; height: 80px; background: var(--primary-soft); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; }
        .why-icon svg { font-size: 36px; color: var(--primary); }
        .services-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; margin-top: 50px; }
        .service-item { display: flex; gap: 25px; padding: 32px; background: white; border-radius: var(--radius-md); box-shadow: var(--shadow-md); transition: all 0.3s; }
        .service-item:hover { transform: translateY(-5px); }
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
          <div className="breadcrumb"><Link href="/it">?? Home</Link> <span>&gt;</span> <span>? Servizio Private Label 2026</span></div>
          <h1><span>Servizio Private Label</span> 2026</h1>
          <p>Crea il tuo marchio di moda modesta con le nostre soluzioni complete.</p>
        </div>
      </section>

      <section className="service-intro">
        <div className="container">
          <div className="intro-wrapper">
            <div className="intro-content">
              <span className="badge-2026">? Edizione 2026 | Qualit  Turca</span>
              <h2>Crea <span>La Tua Identit  di Marchio Distintiva</span> nel Mercato della Moda Modesta</h2>
              <p className="lead">Nel competitivo mercato della moda di oggi, avere un'identit  di marchio distintiva non   pi  opzionale -   essenziale per il successo e la longevit .</p>
              <p>Il nostro servizio Private Label completo ti permette di costruire ed espandere il tuo marchio nel mercato dell'hijab senza le complessit  della produzione. Forniamo prodotti turchi premium come tela bianca per la tua visione del marchio.</p>
              <p>Che tu stia lanciando una nuova boutique, espandendo un'attivit  esistente o creando una collezione esclusiva, la nostra soluzione Private Label ti d  la flessibilit  e la qualit  di cui hai bisogno per distinguerti.</p>
            </div>
            <div className="intro-image">
              <Image src="/images/private-label-intro.webp" alt="Servizio Private Label" width={500} height={400} priority onError={(e) => { const target = e.target as HTMLImageElement; target.src = '/images/fallback-private-label.webp'; }} />
            </div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <h2 className="section-title">Perch  <span>Private Label</span> nel 2026?</h2>
          <div className="why-grid">
            <div className="why-card"><div className="why-icon"><FaCrown size={32} /></div><h3>Propriet  del Marchio</h3><p>Costruisci un marchio che possiedi completamente.</p></div>
            <div className="why-card"><div className="why-icon"><FaChartLine size={32} /></div><h3>Crescita a Lungo Termine</h3><p>Crea fedelt  al marchio e clienti abituali.</p></div>
            <div className="why-card"><div className="why-icon"><FaStar size={32} /></div><h3>Posizionamento Premium</h3><p>Posiziona i tuoi prodotti a un livello premium.</p></div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2 className="section-title">I Nostri <span>Servizi Private Label</span> Completi</h2>
          <div className="services-grid">
            <div className="service-item"><div className="service-icon"><FaTag size={36} /></div><div className="service-content"><h3>Etichette Tessute Personalizzate</h3><p>Etichette tessute di alta qualit  con il nome del tuo marchio.</p><ul className="service-features"><li><FaCheck size={14} /> Satin tessuto premium</li><li><FaCheck size={14} /> Pi  opzioni di colore</li><li><FaCheck size={14} /> Dimensioni personalizzate</li></ul></div></div>
            <div className="service-item"><div className="service-icon"><FaTags size={36} /></div><div className="service-content"><h3>Cartellini Personalizzati</h3><p>Cartellini professionali che comunicano la storia del tuo marchio.</p><ul className="service-features"><li><FaCheck size={14} /> Carta premium</li><li><FaCheck size={14} /> Goffratura</li><li><FaCheck size={14} /> Forme personalizzate</li></ul></div></div>
            <div className="service-item"><div className="service-icon"><FaBox size={36} /></div><div className="service-content"><h3>Packaging Personalizzato</h3><p>Crea un'esperienza di unboxing completa.</p><ul className="service-features"><li><FaCheck size={14} /> Sacchetti stampati</li><li><FaCheck size={14} /> Scatole personalizzate</li><li><FaCheck size={14} /> Opzioni ecologiche</li></ul></div></div>
            <div className="service-item"><div className="service-icon"><FaPalette size={36} /></div><div className="service-content"><h3>Pacchetto Branding Completo</h3><p>La soluzione definitiva per costruttori di marchi seri.</p><ul className="service-features"><li><FaCheck size={14} /> Design coordinato</li><li><FaCheck size={14} /> Prezzi vantaggiosi</li><li><FaCheck size={14} /> Qualit  costante</li></ul></div></div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Processo <span>Semplice in 4 Fasi</span></h2>
          <div className="process-steps">
            <div className="process-step"><div className="step-number">1</div><h3>Condividi la Tua Visione</h3><p>Contattaci con il tuo concept di marchio.</p></div>
            <div className="process-step"><div className="step-number">2</div><h3>Seleziona i Prodotti</h3><p>Scegli tra 5000+ articoli turchi premium.</p></div>
            <div className="process-step"><div className="step-number">3</div><h3>Design & Approvazione</h3><p>Creiamo mockup digitali.</p></div>
            <div className="process-step"><div className="step-number">4</div><h3>Produzione & Spedizione</h3><p>Spedizione in tutto il mondo con tracciamento.</p></div>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="container">
          <h2>Costruisci un Marchio <span>Che Dura</span></h2>
          <div className="brand-stats">
            <div className="brand-stat"><div className="number">78%</div><div className="label">preferiscono prodotti di marca</div></div>
            <div className="brand-stat"><div className="number">3.5x</div><div className="label">pi  fidelizzazione clienti</div></div>
            <div className="brand-stat"><div className="number">40%+</div><div className="label">margini di profitto pi  alti</div></div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Domande <span>Frequenti</span></h2>
          <div className="faq-grid">
            <div className="faq-item"><div className="faq-question" onClick={() => toggleFaq(0)}><div className="faq-question-left"><FaQuestionCircle size={22} /><h3>Quantit  minima d'ordine?</h3></div><span className={`faq-icon ${openFaq === 0 ? 'open' : ''}`}>?</span></div><div className={`faq-answer ${openFaq === 0 ? 'open' : ''}`}>Offriamo opzioni flessibili per aziende di tutte le dimensioni.</div></div>
            <div className="faq-item"><div className="faq-question" onClick={() => toggleFaq(1)}><div className="faq-question-left"><FaQuestionCircle size={22} /><h3>Posso mescolare prodotti?</h3></div><span className={`faq-icon ${openFaq === 1 ? 'open' : ''}`}>?</span></div><div className={`faq-answer ${openFaq === 1 ? 'open' : ''}`}>Assolutamente! Qualsiasi combinazione dal nostro catalogo.</div></div>
            <div className="faq-item"><div className="faq-question" onClick={() => toggleFaq(2)}><div className="faq-question-left"><FaQuestionCircle size={22} /><h3>Tempi del processo?</h3></div><span className={`faq-icon ${openFaq === 2 ? 'open' : ''}`}>?</span></div><div className={`faq-answer ${openFaq === 2 ? 'open' : ''}`}>Produzione 2-3 settimane, consegna 3-7 giorni.</div></div>
            <div className="faq-item"><div className="faq-question" onClick={() => toggleFaq(3)}><div className="faq-question-left"><FaQuestionCircle size={22} /><h3>Aiuto con il design?</h3></div><span className={`faq-icon ${openFaq === 3 ? 'open' : ''}`}>?</span></div><div className={`faq-answer ${openFaq === 3 ? 'open' : ''}`}>S?! Il nostro team fornisce consulenza sul design.</div></div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Pronto a Costruire il Tuo Marchio?</h2>
          <p>Contattaci oggi per discutere la tua visione.</p>
          <div className="cta-buttons">
            <a href="https://wa.me/905519522448" className="btn-whatsapp" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={20} /> WhatsApp</a>
            <Link href="/it/contact" className="cta-btn-primary">Contattaci <FaArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
