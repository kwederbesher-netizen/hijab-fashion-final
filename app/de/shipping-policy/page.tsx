// app/it/shipping-policy/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function ShippingPolicyPageIt() {
  return (
    <>
      <Head>
        <title>Politica di Spedizione - Hijab Fashion Mall | Spedizione Mondiale dalla Turchia</title>
        <meta name="description" content="Scopri la nostra politica di spedizione mondiale per gli ordini all'ingrosso. Consegna rapida e affidabile in oltre 50 paesi con vettori affidabili." />
        <meta name="keywords" content="politica di spedizione, spedizione mondiale, spedizione all'ingrosso, tempi di consegna, tracciamento ordini, hijab grossista turchia" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/it/shipping-policy" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/shipping-policy" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/shipping-policy" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/shipping-policy" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/shipping-policy" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/shipping-policy" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/shipping-policy" />
        <meta property="og:title" content="Politica di Spedizione - Hijab Fashion Mall" />
        <meta property="og:description" content="Spedizione mondiale per ordini all'ingrosso. Consegna rapida e affidabile in oltre 50 paesi dalla Turchia." />
        <meta property="og:url" content="https://hijabfashionmall.com/it/shipping-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hijabfashionmall.com/images/og-shipping.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Politica di Spedizione - Hijab Fashion Mall" />
        <meta name="twitter:description" content="Spedizione mondiale per ordini all'ingrosso. Consegna rapida e affidabile dalla Turchia." />
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

        .shipping-content {
          padding: 60px 0;
          background: var(--white);
        }

        .shipping-wrapper {
          max-width: 900px;
          margin: 0 auto;
          background: var(--white);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid #f0f0f0;
        }

        .shipping-section {
          margin-bottom: 35px;
        }

        .shipping-section h2 {
          font-size: 24px;
          color: var(--black);
          margin-bottom: 20px;
          font-weight: 700;
          border-left: 3px solid var(--primary);
          padding-left: 15px;
        }

        .shipping-section h3 {
          font-size: 20px;
          color: var(--dark-gray);
          margin: 25px 0 15px;
          font-weight: 600;
        }

        .shipping-section p {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .shipping-section ul {
          list-style: none;
          padding: 0;
          margin: 15px 0;
        }

        .shipping-section ul li {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 12px;
          padding-left: 25px;
          position: relative;
        }

        .shipping-section ul li:before {
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
          
          .shipping-wrapper {
            padding: 25px;
          }
          
          .shipping-section h2 {
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
            <li className="breadcrumb-item active">Politica di Spedizione</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Politica di Spedizione</h1>
          <p>Consegna rapida e affidabile in tutto il mondo dalla Turchia</p>
        </div>
      </section>

      {/* Shipping Content */}
      <section className="shipping-content">
        <div className="container">
          <div className="shipping-wrapper">
            
            <div className="shipping-section">
              <h2>1. Spedizione Mondiale</h2>
              <p>Presso Hijab Fashion Mall, siamo orgogliosi di servire i nostri partner all'ingrosso in tutto il mondo. Offriamo spedizioni mondiali affidabili in oltre 50 paesi attraverso i nostri partner di trasporto fidati. La nostra rete di spedizione garantisce che i vostri ordini vi arrivino in modo sicuro ed efficiente, ovunque vi troviate.</p>
              <p>Come fornitore all'ingrosso internazionale con sede in Turchia, comprendiamo l'importanza di una consegna tempestiva e sicura per la vostra attività. Lavoriamo esclusivamente con vettori internazionali affermati per offrirvi la migliore esperienza di spedizione possibile.</p>
            </div>

            <div className="shipping-section">
              <h2>2. Accordi di Spedizione</h2>
              <p>Gli accordi di spedizione sono presi caso per caso, tenendo conto della vostra posizione, delle dimensioni dell'ordine e dei requisiti di consegna specifici. Ci coordiniamo con i nostri partner di trasporto per trovare la soluzione di spedizione più adatta per ogni ordine all'ingrosso.</p>
              <ul>
                <li>Lavoriamo con molteplici vettori internazionali (DHL, FedEx, UPS e altri)</li>
                <li>I metodi di spedizione sono selezionati in base alla destinazione e alle specifiche dell'ordine</li>
                <li>Comunichiamo tutti i dettagli di spedizione direttamente con i nostri partner all'ingrosso</li>
                <li>Gli accordi di spedizione sono confermati dopo la finalizzazione dell'ordine</li>
              </ul>
              <div className="info-box">
                <p><strong>📦 Spedizione Flessibile:</strong> Comprendiamo che ogni ordine all'ingrosso ha requisiti unici. Il nostro team lavora a stretto contatto con voi per organizzare una spedizione che soddisfi i vostri tempi e le vostre preferenze di budget.</p>
              </div>
            </div>

            <div className="shipping-section">
              <h2>3. Costi di Spedizione</h2>
              <p>I costi di spedizione variano a seconda di diversi fattori:</p>
              <ul>
                <li><strong>Paese di Destinazione:</strong> Distanza e zona di spedizione</li>
                <li><strong>Peso e Volume dell'Ordine:</strong> Dimensioni del pacco e peso totale</li>
                <li><strong>Metodo di Spedizione:</strong> Opzioni standard, espresso o economiche disponibili</li>
                <li><strong>Dogana e Dazi:</strong> Tasse all'importazione e commissioni applicabili al vostro paese</li>
              </ul>
              <p>I costi di spedizione sono calcolati individualmente per ogni ordine. Il nostro team vi fornirà un preventivo di spedizione dettagliato prima di finalizzare il vostro ordine, garantendo piena trasparenza e nessuna sorpresa.</p>
            </div>

            <div className="shipping-section">
              <h2>4. Tempi di Elaborazione</h2>
              <p>Ci sforziamo di preparare e spedire i vostri ordini il più rapidamente possibile:</p>
              <ul>
                <li><strong>Elaborazione dell'Ordine:</strong> 1-3 giorni lavorativi dopo la conferma del pagamento</li>
                <li><strong>Controllo Qualità:</strong> Ogni articolo viene ispezionato prima dell'imballaggio</li>
                <li><strong>Imballaggio:</strong> Imballaggio professionale per garantire la sicurezza del prodotto durante il trasporto</li>
                <li><strong>Documentazione:</strong> Tutti i documenti di spedizione necessari sono preparati</li>
              </ul>
            </div>

            <div className="shipping-section">
              <h2>5. Tempi di Consegna</h2>
              <p>I tempi di consegna stimati variano a seconda della destinazione:</p>
              <ul>
                <li><strong>Medio Oriente e Paesi del Golfo:</strong> 3-5 giorni lavorativi</li>
                <li><strong>Paesi Europei:</strong> 3-7 giorni lavorativi</li>
                <li><strong>America del Nord:</strong> 5-7 giorni lavorativi</li>
                <li><strong>Australia e Nuova Zelanda:</strong> 5-8 giorni lavorativi</li>
                <li><strong>Altre Destinazioni Internazionali:</strong> 7-10 giorni lavorativi</li>
              </ul>
              <p><strong>Nota:</strong> Questi sono tempi di consegna stimati. La consegna effettiva può variare a causa dello sdoganamento, delle festività locali o di circostanze impreviste.</p>
            </div>

            <div className="shipping-section">
              <h2>6. Tracciamento dell'Ordine</h2>
              <p>Una volta spedito il vostro ordine, vi forniamo un numero di tracciamento che vi permette di monitorare la vostra spedizione in tempo reale. Riceverete:</p>
              <ul>
                <li>Nome del vettore e tipo di servizio</li>
                <li>Numero di tracciamento unico</li>
                <li>Link di tracciamento per aggiornamenti in tempo reale</li>
                <li>Finestra di consegna stimata</li>
              </ul>
              <p>Consigliamo di monitorare la vostra spedizione e di essere disponibili a ricevere il vostro pacco quando arriva.</p>
            </div>

            <div className="shipping-section">
              <h2>7. Dogana e Dazi all'Importazione</h2>
              <p>Come grossista internazionale che spedisce in tutto il mondo, si prega di notare che:</p>
              <ul>
                <li>I dazi all'importazione, le tasse e le spese doganali sono a carico dell'acquirente</li>
                <li>I tempi di sdoganamento variano da paese a paese e possono influenzare i tempi di consegna</li>
                <li>Forniamo tutta la documentazione necessaria per facilitare uno sdoganamento agevole</li>
                <li>Si prega di verificare con il proprio ufficio doganale locale le tariffe applicabili</li>
              </ul>
              <div className="info-box">
                <p><strong>🌍 Nota sulla Spedizione Internazionale:</strong> Le politiche doganali variano significativamente tra i paesi. Raccomandiamo di consultare l'autorità doganale locale per comprendere eventuali costi o requisiti prima di effettuare l'ordine.</p>
              </div>
            </div>

            <div className="shipping-section">
              <h2>8. Spedizioni Danneggiate o Perse</h2>
              <p>Nel raro caso in cui la vostra spedizione venga danneggiata durante il trasporto o persa, lavoreremo con il vettore per risolvere il problema. Si prega di notare:</p>
              <ul>
                <li>Ispezionate il vostro pacco immediatamente dopo la consegna</li>
                <li>Documentate eventuali danni visibili con foto</li>
                <li>Segnalate eventuali problemi entro 7 giorni dalla consegna</li>
                <li>Vi assisteremo nel processo di reclamo</li>
              </ul>
              <p>Per maggiori dettagli sugli articoli danneggiati, consultate la nostra <Link href="/it/refund-policy" className="inline-link">Politica di Rimborso e Reso</Link>.</p>
            </div>

            <div className="shipping-section">
              <h2>9. Spedizione in Aree Remote</h2>
              <p>Per le spedizioni in aree remote o meno accessibili, potrebbero essere necessari tempi di consegna aggiuntivi. I nostri vettori potrebbero utilizzare partner locali per la consegna finale in alcune regioni. Vi informeremo se sono necessari accordi speciali per la vostra posizione.</p>
            </div>

            <div className="shipping-section">
              <h2>10. Contatto per Richieste di Spedizione</h2>
              <p>Per qualsiasi domanda riguardante la spedizione o per discutere le vostre esigenze di consegna specifiche, contattateci:</p>
              <ul>
                <li><strong>WhatsApp:</strong> +90 551 952 24 48</li>
                <li><strong>Modulo di contatto:</strong> Disponibile sul nostro sito web</li>
              </ul>
              <p>Il nostro team è pronto ad assistervi con accordi di spedizione personalizzati per i vostri ordini all'ingrosso.</p>
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