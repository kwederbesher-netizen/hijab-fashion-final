// app/it/terms-conditions/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function TermsConditionsPageIt() {
  return (
    <>
      <Head>
        <title>Termini e Condizioni - Hijab Fashion Mall | Grossista Abbigliamento Modesto Turco</title>
        <meta name="description" content="Leggi i nostri termini e condizioni all'ingrosso per ordinare abbigliamento modesto turco. Scopri prezzi, spedizione, metodi di pagamento e politiche all'ingrosso internazionali." />
        <meta name="keywords" content="termini e condizioni, termini all'ingrosso, termini hijab all'ingrosso, abbigliamento modesto, Turchia all'ingrosso" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/it/terms-conditions" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/terms-conditions" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/terms-conditions" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/terms-conditions" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/terms-conditions" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/terms-conditions" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/terms-conditions" />
        <meta property="og:title" content="Termini e Condizioni - Hijab Fashion Mall" />
        <meta property="og:description" content="Leggi i nostri termini e condizioni all'ingrosso per ordinare abbigliamento modesto turco." />
        <meta property="og:url" content="https://hijabfashionmall.com/it/terms-conditions" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hijabfashionmall.com/images/og-terms.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Termini e Condizioni - Hijab Fashion Mall" />
        <meta name="twitter:description" content="Leggi i nostri termini e condizioni all'ingrosso per ordinare abbigliamento modesto turco." />
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

        .info-box a {
          color: var(--primary);
          text-decoration: none;
        }

        .info-box a:hover {
          text-decoration: underline;
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

        .inline-link {
          color: var(--primary);
          text-decoration: none;
        }

        .inline-link:hover {
          text-decoration: underline;
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
      <div className="breadcrumb-bar">
        <div className="container">
          <ul className="breadcrumb-list">
            <li className="breadcrumb-item">
              <Link href="/it">Home</Link>
            </li>
            <li className="breadcrumb-item">/</li>
            <li className="breadcrumb-item active">Termini e Condizioni</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Termini e Condizioni</h1>
          <p>Termini commerciali all'ingrosso per i nostri partner internazionali</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content">
        <div className="container">
          <div className="terms-wrapper">
            
            <div className="terms-section">
              <h2>1. Informazioni Generali</h2>
              <p>Benvenuti su Hijab Fashion Mall. Questi Termini e Condizioni regolano l'uso del nostro sito Web e dei servizi di acquisto all'ingrosso. Effettuando un ordine con noi, accetti di essere vincolato da questi termini. Ti preghiamo di leggerli attentamente prima di procedere con qualsiasi acquisto.</p>
              <p>Hijab Fashion Mall è un fornitore all'ingrosso specializzato in abbigliamento modesto turco, che serve rivenditori e boutique in tutto il mondo. La nostra piattaforma collega acquirenti internazionali con produttori turchi di alta qualità.</p>
            </div>

            <div className="terms-section">
              <h2>2. Ordini all'Ingrosso</h2>
              <p>Tutti gli ordini effettuati attraverso il nostro sito Web sono considerati richieste di informazioni all'ingrosso. I nostri prodotti sono destinati alla rivendita al dettaglio, salvo diversa indicazione. Come fornitore all'ingrosso, non offriamo prezzi al dettaglio o prezzi per singolo pezzo per articoli non RSS.</p>
              <ul>
                <li><strong>Articoli RSS :</strong> I prodotti contrassegnati come "RSS" possono essere ordinati come singoli pezzi</li>
                <li><strong>Articoli in Cartone :</strong> Prodotti venduti in cartoni con dimensioni di confezione specificate</li>
                <li><strong>Ordini Misti :</strong> Puoi combinare diversi prodotti in un unico ordine senza requisiti di quantità minima</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>3. Prezzi e Pagamenti</h2>
              <p>Tutti i prezzi visualizzati sul nostro sito Web sono in USD (dollari statunitensi) e rappresentano i prezzi all'ingrosso. Ci riserviamo il diritto di modificare i prezzi senza preavviso in base alle condizioni di mercato, ai tassi di cambio e ai prezzi dei produttori.</p>
              <ul>
                <li><strong>Metodi di Pagamento Accettati :</strong> Bonifico bancario, Western Union e principali carte di credito</li>
                <li><strong>Termini di Pagamento :</strong> Gli ordini vengono elaborati dopo la conferma del pagamento</li>
                <li><strong>Conversione di Valuta :</strong> Gli addebiti finali possono variare in base ai tassi di cambio della tua banca</li>
                <li><strong>Fatture :</strong> Fatture pro-forma fornite prima del pagamento, fattura finale al momento della spedizione</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>4. Spedizione e Consegna</h2>
              <p>Offriamo spedizioni in tutto il mondo in oltre 50 paesi attraverso i nostri partner di trasporto fidati. I costi di spedizione e i tempi di consegna variano a seconda della destinazione.</p>
              <ul>
                <li><strong>Tempo di Elaborazione :</strong> 1-3 giorni lavorativi dopo la conferma del pagamento</li>
                <li><strong>Tempo di Consegna :</strong> 3-7 giorni lavorativi per la maggior parte delle destinazioni internazionali</li>
                <li><strong>Tracciamento :</strong> Numero di tracciamento fornito per tutte le spedizioni</li>
                <li><strong>Dogana e Dazi :</strong> I dazi all'importazione e le tasse sono a carico dell'acquirente</li>
              </ul>
              <div className="info-box">
                <p><strong>📦 Nota Importante sulla Spedizione :</strong> I tempi di consegna sono stime e possono variare a causa dello sdoganamento, delle festività locali o di circostanze impreviste. Non siamo responsabili per ritardi causati da vettori o autorità doganali.</p>
              </div>
            </div>

            <div className="terms-section">
              <h2>5. Informazioni sui Prodotti</h2>
              <p>Ci sforziamo di fornire descrizioni accurate dei prodotti, immagini e specifiche. Tuttavia, si prega di notare:</p>
              <ul>
                <li>I colori possono apparire leggermente diversi a causa delle impostazioni del monitor</li>
                <li>Le taglie si basano sugli standard di produzione turchi; si prega di rivedere le guide alle taglie prima di ordinare</li>
                <li>Le composizioni dei tessuti sono fornite nelle descrizioni dei prodotti</li>
                <li>La disponibilità delle scorte è soggetta a modifiche senza preavviso</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>6. Resi e Danni</h2>
              <p>Come fornitore all'ingrosso, non accettiamo resi per cambiamento di opinione o preferenza. Tuttavia, garantiamo pienamente la qualità dei nostri prodotti:</p>
              <ul>
                <li>I difetti di fabbricazione sono coperti con pieno risarcimento</li>
                <li>I danni da trasporto sono coperti con documentazione adeguata</li>
                <li>I reclami devono essere presentati entro 7 giorni dalla consegna con foto chiare</li>
                <li>Il risarcimento viene fornito come credito, sostituzione o rimborso in base alla revisione del caso</li>
              </ul>
              <p>Per informazioni dettagliate, consultare la nostra <Link href="/it/refund-policy" className="inline-link">Politica di Rimborso e Reso</Link>.</p>
            </div>

            <div className="terms-section">
              <h2>7. Proprietà Intellettuale</h2>
              <p>Tutti i contenuti di questo sito Web, inclusi immagini, testi, loghi e design, sono di proprietà di Hijab Fashion Mall e protetti dalle leggi sul copyright. Qualsiasi uso, riproduzione o distribuzione non autorizzata è vietata senza il nostro consenso scritto.</p>
            </div>

            <div className="terms-section">
              <h2>8. Informativa sulla Privacy</h2>
              <p>Rispettiamo la tua privacy e ci impegniamo a proteggere le tue informazioni personali. I tuoi dati vengono utilizzati esclusivamente per l'elaborazione degli ordini, la comunicazione e il miglioramento dei nostri servizi. Non condividiamo le tue informazioni con terze parti se non quando necessario per la spedizione e l'elaborazione dei pagamenti.</p>
              <p>Per maggiori dettagli, consultare la nostra <Link href="/it/privacy-policy" className="inline-link">Informativa sulla Privacy</Link>.</p>
            </div>

            <div className="terms-section">
              <h2>9. Limitazione di Responsabilità</h2>
              <p>Hijab Fashion Mall non sarà responsabile per eventuali danni indiretti, incidentali o consequenziali derivanti dall'uso dei nostri prodotti o servizi. La nostra responsabilità è limitata al prezzo di acquisto dei prodotti in questione.</p>
            </div>

            <div className="terms-section">
              <h2>10. Legge Applicabile</h2>
              <p>Questi Termini e Condizioni sono regolati dalle leggi della Repubblica di Turchia. Qualsiasi controversia derivante da questi termini sarà risolta attraverso i tribunali turchi.</p>
            </div>

            <div className="terms-section">
              <h2>11. Modifiche ai Termini</h2>
              <p>Ci riserviamo il diritto di aggiornare o modificare questi Termini e Condizioni in qualsiasi momento senza preavviso. Le modifiche entreranno in vigore immediatamente dopo la pubblicazione su questa pagina. Il tuo continuo utilizzo dei nostri servizi costituisce accettazione di eventuali modifiche.</p>
            </div>

            <div className="terms-section">
              <h2>12. Contattaci</h2>
              <p>Se hai domande su questi Termini e Condizioni, contattaci:</p>
              <ul>
                <li><strong>WhatsApp :</strong> +90 551 952 24 48 (Supporto 24/7)</li>
                <li><strong>Modulo di contatto :</strong> Disponibile sul nostro sito web</li>
              </ul>
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