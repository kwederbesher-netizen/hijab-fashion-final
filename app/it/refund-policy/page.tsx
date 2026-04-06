// app/it/refund-policy/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function RefundPolicyPageIt() {
  return (
    <>
      <Head>
        <title>Politica di Rimborso e Reso - Hijab Fashion Mall | Grossista Abbigliamento Modesto Turco</title>
        <meta name="description" content="La nostra politica di reso all'ingrosso copre difetti di fabbricazione e danni da spedizione. Scopri il nostro processo di garanzia della qualità per gli ordini all'ingrosso internazionali." />
        <meta name="keywords" content="politica di rimborso, politica di reso, resi all'ingrosso, articoli danneggiati, garanzia della qualità, hijab grossista turchia" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/it/refund-policy" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/refund-policy" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/refund-policy" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/refund-policy" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/refund-policy" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/refund-policy" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/refund-policy" />
        <meta property="og:title" content="Politica di Rimborso e Reso - Hijab Fashion Mall" />
        <meta property="og:description" content="La nostra politica di reso all'ingrosso copre difetti di fabbricazione e danni da spedizione." />
        <meta property="og:url" content="https://hijabfashionmall.com/it/refund-policy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Politica di Rimborso e Reso - Hijab Fashion Mall" />
        <meta name="twitter:description" content="La nostra politica di reso all'ingrosso copre difetti di fabbricazione e danni da spedizione." />
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
              <Link href="/it">Home</Link>
            </li>
            <li className="breadcrumb-item">/</li>
            <li className="breadcrumb-item active">Politica di Rimborso e Reso</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Politica di Rimborso e Reso</h1>
          <p>Garanzia di qualità per i tuoi ordini all'ingrosso</p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="policy-content">
        <div className="container">
          <div className="policy-wrapper">
            
            <div className="policy-section">
              <h2>1. Garanzia di Qualità</h2>
              <p>Presso Hijab Fashion Mall, siamo orgogliosi di fornire abbigliamento modesto turco premium ai nostri partner all'ingrosso in tutto il mondo. Ogni prodotto viene sottoposto a un rigoroso controllo di qualità prima della spedizione per garantire che riceviate articoli che soddisfano i nostri elevati standard di artigianalità e autenticità.</p>
              <p>Come fornitore all'ingrosso che serve rivenditori in oltre 50 paesi, comprendiamo l'importanza di una qualità affidabile per la tua attività. Il nostro impegno è fornire prodotti turchi originali e coerenti che i tuoi clienti ameranno.</p>
            </div>

            <div className="policy-section">
              <h2>2. Articoli Danneggiati o Difettosi</h2>
              <p>Sosteniamo la qualità dei nostri prodotti. Nell'improbabile evenienza che riceviate un articolo con un difetto di fabbricazione o danni verificatisi durante il trasporto, vi risarciremo completamente per gli articoli interessati.</p>
              
              <div className="info-box">
                <p><strong>📦 Cosa fare se ricevi articoli danneggiati:</strong></p>
                <ul style={{ marginTop: '10px' }}>
                  <li>Contatta il nostro servizio clienti entro 7 giorni dalla ricezione dell'ordine</li>
                  <li>Fornisci foto chiare che mostrano il danno o il difetto</li>
                  <li>Includi il numero dell'ordine e i codici prodotto</li>
                  <li>Il nostro team esaminerà e elaborerà il risarcimento entro 2-3 giorni lavorativi</li>
                </ul>
              </div>
            </div>

            <div className="policy-section">
              <h2>3. Considerazioni sul Commercio All'Ingrosso Internazionale</h2>
              <p>Come grossista internazionale che spedisce in tutto il mondo, operiamo secondo gli standard del commercio all'ingrosso. Data la natura degli ordini all'ingrosso e della logistica internazionale, non accettiamo resi per motivi quali:</p>
              <ul>
                <li>Cambiamento di opinione o preferenza</li>
                <li>Variazioni di colore dovute alle impostazioni del monitor</li>
                <li>Selezione della taglia (si prega di verificare le taglie prima di ordinare)</li>
                <li>Piccole differenze rispetto alle immagini del prodotto</li>
              </ul>
              <p>Incoraggiamo i nostri partner all'ingrosso a rivedere attentamente i dettagli del prodotto prima di effettuare gli ordini. Il nostro catalogo fornisce descrizioni dettagliate, informazioni sui tessuti e guide alle taglie per aiutarvi a prendere decisioni di acquisto informate.</p>
            </div>

            <div className="policy-section">
              <h2>4. Processo di Controllo Qualità</h2>
              <p>Per ridurre al minimo eventuali problemi con i tuoi ordini, implementiamo un processo di controllo qualità approfondito:</p>
              <ul>
                <li>Ogni articolo viene ispezionato prima del confezionamento</li>
                <li>Imballaggio professionale per il trasporto internazionale</li>
                <li>Informazioni di tracciabilità fornite per tutte le spedizioni</li>
                <li>Collaborazione con vettori affidabili per la consegna globale</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>5. Come Segnalare un Problema</h2>
              <p>Se ricevi articoli con difetti di fabbricazione o danni da trasporto, contattaci immediatamente:</p>
              <ul>
                <li><strong>WhatsApp:</strong> +90 551 952 24 48</li>
                <li><strong>Modulo di contatto:</strong> Disponibile sul nostro sito web</li>
              </ul>
              <p>Il nostro team di assistenza clienti è disponibile 24/7 per assisterti con qualsiasi dubbio riguardante i tuoi ordini all'ingrosso.</p>
            </div>

            <div className="policy-section">
              <h2>6. Processo di Risarcimento</h2>
              <p>Dopo la verifica degli articoli danneggiati o difettosi, forniremo un risarcimento completo attraverso:</p>
              <ul>
                <li>Credito per il tuo prossimo ordine</li>
                <li>Sostituzione degli articoli interessati (soggetto a disponibilità)</li>
                <li>Rimborso tramite il metodo di pagamento originale</li>
              </ul>
              <p>Il risarcimento viene elaborato entro 2-5 giorni lavorativi dopo la conferma del problema.</p>
            </div>

            <div className="policy-section">
              <h2>7. Contattaci</h2>
              <p>Per qualsiasi domanda sulla nostra politica di reso o per segnalare un problema con il tuo ordine, non esitare a contattare il nostro team. Siamo qui per garantire che la tua esperienza all'ingrosso sia fluida e di successo.</p>
              <p><strong>Assistenza Clienti (WhatsApp):</strong> +90 551 952 24 48</p>
            </div>

            <Link href="/it" className="btn-back">
              <FaArrowLeft size={14} /> Torna alla Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}