'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { 
  FaStore, FaGlobe, FaTshirt, FaCalendarAlt, 
  FaBoxes, FaBan, FaCertificate, FaHeadset, FaTag, FaShippingFast,
  FaQuoteRight
} from 'react-icons/fa'

export default function AboutPageIt() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).updateCartCount) {
      (window as any).updateCartCount()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Chi siamo - Hijab Fashion Mall | Ingrosso Moda Turca</title>
        <meta name="description" content="Dal 2019, Hijab Fashion Mall collega i rivenditori di tutto il mondo con abbigliamento hijab turco autentico. Nessun ordine minimo, spedizione mondiale, 5000+ prodotti." />
        <meta name="keywords" content="ingrosso hijab turco, moda turca, fornitore hijab istanbul" />
        <link rel="canonical" href="https://hijabfashionmall.com/it/about-us" />
      </Head>

      <div dir="ltr">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <div className="container">
            <ul>
              <li><Link href="/it">Home</Link></li>
              <li className="active">Chi siamo</li>
            </ul>
          </div>
        </div>

        {/* Page Header */}
        <section className="page-header">
          <div className="container">
            <h1>Chi è Hijab Fashion Mall</h1>
            <p>Il tuo partner fidato per abbigliamento hijab turco premium dal 2019. Colleghiamo i rivenditori di tutto il mondo con la moda turca autentica.</p>
          </div>
        </section>

        {/* About Section - No Image */}
        <section className="about-section">
          <div className="container">
            <div className="about-content-full">
              <h2>Chi siamo</h2>
              <p>Hijab Fashion Mall è un'azienda all'ingrosso turca con sede a Istanbul, specializzata in abbigliamento hijab premium e moda turca. Dalla nostra fondazione nel 2019, ci impegniamo ad aiutare i rivenditori e i negozi di tutto il mondo a procurarsi prodotti turchi autentici dai migliori produttori.</p>
              
              <p>Lavoriamo con i migliori produttori turchi per offrirti prodotti di alta qualità a prezzi competitivi, concentrandoci sul comfort dei nostri clienti e garantendoti il miglior rapporto qualità-prezzo.</p>
              
              <div className="about-highlight">
                <p><FaQuoteRight /> "Non vendiamo solo prodotti; costruiamo partnership a lungo termine con i nostri clienti. Il vostro successo è il nostro successo."</p>
              </div>
              
              <p>Con oltre 5000 prodotti in 9 categorie, offriamo tutto, dalle eleganti abaya all'abbigliamento sportivo moderno, il tutto realizzato in Turchia con i migliori materiali e artigianato.</p>
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
                <div className="stat-label">Marchi</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaGlobe /></div>
                <div className="stat-number">50+</div>
                <div className="stat-label">Paesi</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaTshirt /></div>
                <div className="stat-number">5000+</div>
                <div className="stat-label">Prodotti</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaCalendarAlt /></div>
                <div className="stat-number">2019</div>
                <div className="stat-label">Fondata</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <h2 className="section-title">Cosa offriamo</h2>
            <p className="section-subtitle">Servizi progettati per aiutare la tua attività a crescere</p>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon"><FaBoxes /></div>
                <h3>Mescola il tuo ordine</h3>
                <p>Combina diversi prodotti in una sola spedizione. Ordina esattamente ciò di cui hai bisogno in più categorie.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaBan /></div>
                <h3>Nessun ordine minimo</h3>
                <p>Inizia con qualsiasi quantità. Perfetto sia per piccole boutique che per grandi rivenditori.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaCertificate /></div>
                <h3>100% Originale Prodotto in Turchia</h3>
                <p>Prodotti autentici direttamente dai produttori turchi. Nessuna copia o imitazione.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaHeadset /></div>
                <h3>Assistenza clienti 24/7</h3>
                <p>Siamo sempre qui per aiutarti con ordini, richieste e assistenza personale.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaTag /></div>
                <h3>Servizio di marca privata</h3>
                <p>Costruisci il tuo marchio con imballaggi personalizzati e design esclusivi per ordini regolari.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaShippingFast /></div>
                <h3>Spedizione mondiale</h3>
                <p>Consegna rapida in oltre 50 paesi tramite vettori affidabili con tracciabilità disponibile.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="container">
            <div className="mission-content">
              <h2>La nostra missione</h2>
              <p>Rendere la moda turca premium accessibile ai rivenditori di tutto il mondo, senza le complessità dell'approvvigionamento internazionale. Siamo qui per essere il tuo partner fidato, garantendo qualità, affidabilità e successo per la tua attività.</p>
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