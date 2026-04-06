// app/it/privacy-policy/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function PrivacyPolicyPageIt() {
  return (
    <>
      <Head>
        <title>Informativa sulla Privacy - Hijab Fashion Mall | Grossista Abbigliamento Modesto Turco</title>
        <meta name="description" content="Scopri come Hijab Fashion Mall raccoglie, utilizza e protegge le tue informazioni personali. La nostra informativa sulla privacy per clienti all'ingrosso e visitatori del sito." />
        <meta name="keywords" content="informativa sulla privacy, protezione dei dati, informazioni personali, privacy all'ingrosso, privacy moda hijab" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/it/privacy-policy" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/privacy-policy" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/privacy-policy" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/privacy-policy" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/privacy-policy" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/privacy-policy" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/privacy-policy" />
        <meta property="og:title" content="Informativa sulla Privacy - Hijab Fashion Mall" />
        <meta property="og:description" content="Scopri come Hijab Fashion Mall protegge le tue informazioni personali." />
        <meta property="og:url" content="https://hijabfashionmall.com/it/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Informativa sulla Privacy - Hijab Fashion Mall" />
        <meta name="twitter:description" content="Scopri come Hijab Fashion Mall protegge le tue informazioni personali." />
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
          border-radius: 15px;
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

      <div className="breadcrumb-bar">
        <div className="container">
          <ul className="breadcrumb-list">
            <li className="breadcrumb-item">
              <Link href="/it">Home</Link>
            </li>
            <li className="breadcrumb-item">/</li>
            <li className="breadcrumb-item active">Informativa sulla Privacy</li>
          </ul>
        </div>
      </div>

      <section className="page-header">
        <div className="container">
          <h1>Informativa sulla Privacy</h1>
          <p>Come proteggiamo e gestiamo le tue informazioni</p>
        </div>
      </section>

      <section className="privacy-content">
        <div className="container">
          <div className="privacy-wrapper">
            
            <div className="privacy-section">
              <h2>1. Introduzione</h2>
              <p>Presso Hijab Fashion Mall, apprezziamo la tua privacy e ci impegniamo a proteggere le tue informazioni personali. Questa Informativa sulla Privacy spiega come raccogliamo, utilizziamo e proteggiamo i tuoi dati quando visiti il nostro sito web o effettui ordini all'ingrosso con noi. Utilizzando i nostri servizi, accetti le pratiche descritte in questa informativa.</p>
              <p>Operiamo come fornitore all'ingrosso di abbigliamento modesto turco, servendo rivenditori e boutique in tutto il mondo. Il nostro impegno per la protezione dei dati garantisce che le tue informazioni rimangano sicure mentre fai affari con noi.</p>
            </div>

            <div className="privacy-section">
              <h2>2. Informazioni Che Raccogliamo</h2>
              <p>Raccogliamo informazioni che ci aiutano a elaborare i tuoi ordini e migliorare i nostri servizi. I tipi di informazioni che possiamo raccogliere includono:</p>
              <ul>
                <li><strong>Informazioni Aziendali:</strong> Nome dell'azienda, indirizzo commerciale, numero di identificazione fiscale (dove applicabile)</li>
                <li><strong>Dettagli di Contatto:</strong> Nome, indirizzo email, numero di telefono, contatto WhatsApp</li>
                <li><strong>Informazioni sull'Ordine:</strong> Selezioni di prodotti, quantità, indirizzo di spedizione, cronologia degli ordini</li>
                <li><strong>Dati di Comunicazione:</strong> Messaggi e richieste inviati tramite il nostro sito web o WhatsApp</li>
                <li><strong>Dati Tecnici:</strong> Indirizzo IP, tipo di browser, informazioni sul dispositivo e modelli di utilizzo del sito</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>3. Come Utilizziamo le Tue Informazioni</h2>
              <p>Le tue informazioni sono utilizzate esclusivamente per scopi commerciali legittimi relativi alle nostre operazioni all'ingrosso:</p>
              <ul>
                <li>Elaborazione e evasione dei tuoi ordini all'ingrosso</li>
                <li>Comunicazione con te riguardo ai tuoi ordini e richieste</li>
                <li>Fornitura di supporto e assistenza ai clienti</li>
                <li>Gestione delle disposizioni di spedizione e consegna</li>
                <li>Invio di aggiornamenti importanti sul tuo account o ordini</li>
                <li>Miglioramento del nostro sito web e dei servizi</li>
                <li>Conformità ai requisiti legali e normativi</li>
              </ul>
              <div className="info-box">
                <p><strong>🔒 Nota:</strong> Non vendiamo, affittiamo né condividiamo le tue informazioni personali con terze parti per scopi di marketing. I tuoi dati sono utilizzati esclusivamente per soddisfare le tue esigenze all'ingrosso.</p>
              </div>
            </div>

            <div className="privacy-section">
              <h2>4. Condivisione delle Tue Informazioni</h2>
              <p>Possiamo condividere le tue informazioni con terze parti fidate solo quando necessario per evadere i tuoi ordini:</p>
              <ul>
                <li><strong>Partner di Spedizione:</strong> Per consegnare i tuoi ordini al tuo indirizzo specificato</li>
                <li><strong>Processori di Pagamento:</strong> Per elaborare i tuoi pagamenti in modo sicuro</li>
                <li><strong>Autorità Legali:</strong> Quando richiesto dalla legge o per proteggere i nostri diritti</li>
              </ul>
              <p>Tutti i fornitori di servizi terzi sono contrattualmente obbligati a proteggere le tue informazioni e utilizzarle solo per gli scopi specificati.</p>
            </div>

            <div className="privacy-section">
              <h2>5. Sicurezza dei Dati</h2>
              <p>Implementiamo misure tecniche e organizzative appropriate per proteggere le tue informazioni personali da accesso non autorizzato, alterazione, divulgazione o distruzione. Queste misure includono:</p>
              <ul>
                <li>Crittografia SSL per la trasmissione dei dati</li>
                <li>Valutazioni e aggiornamenti di sicurezza regolari</li>
                <li>Accesso limitato alle informazioni personali</li>
                <li>Sistemi di archiviazione sicuri e protocolli di protezione dei dati</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>6. Cookie e Tecnologie di Tracciamento</h2>
              <p>Il nostro sito web utilizza cookie e tecnologie di tracciamento simili per migliorare la tua esperienza di navigazione. I cookie ci aiutano a capire come i visitatori interagiscono con il nostro sito, permettendoci di migliorare funzionalità ed esperienza utente. Puoi regolare le impostazioni del tuo browser per rifiutare i cookie, anche se questo potrebbe influenzare alcune funzionalità del sito.</p>
              <p>Utilizziamo i cookie per funzioni essenziali come:</p>
              <ul>
                <li>Memorizzare le selezioni del tuo carrello</li>
                <li>Mantenere la tua sessione durante la navigazione</li>
                <li>Analizzare il traffico del sito web e le prestazioni</li>
                <li>Memorizzare le preferenze di lingua e valuta</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>7. Conservazione dei Dati</h2>
              <p>Conserviamo le tue informazioni personali per tutto il tempo necessario a soddisfare gli scopi delineati in questa Informativa sulla Privacy, a meno che non sia richiesto o permesso un periodo di conservazione più lungo dalla legge. Le informazioni sugli ordini sono generalmente conservate per la tenuta dei registri aziendali e per affrontare eventuali problemi con i tuoi ordini.</p>
            </div>

            <div className="privacy-section">
              <h2>8. I Tuoi Diritti</h2>
              <p>Come cliente prezioso, hai determinati diritti riguardo alle tue informazioni personali:</p>
              <ul>
                <li><strong>Accesso:</strong> Richiedere una copia delle informazioni che abbiamo su di te</li>
                <li><strong>Correzione:</strong> Chiederci di correggere informazioni inaccurate o incomplete</li>
                <li><strong>Cancellazione:</strong> Richiedere la cancellazione delle tue informazioni personali, fatte salve le obbligazioni legali</li>
                <li><strong>Opposizione:</strong> Opporti a determinate attività di trattamento</li>
                <li><strong>Portabilità:</strong> Richiedere il trasferimento dei tuoi dati a un altro fornitore di servizi</li>
              </ul>
              <p>Per esercitare uno qualsiasi di questi diritti, contattaci tramite il nostro modulo di contatto sul sito web.</p>
            </div>

            <div className="privacy-section">
              <h2>9. Trasferimenti Internazionali di Dati</h2>
              <p>Come fornitore all'ingrosso internazionale, le tue informazioni potrebbero essere trasferite e elaborate in paesi al di fuori della tua residenza. Garantiamo che siano in atto adeguate garanzie per proteggere i tuoi dati in conformità con le leggi sulla privacy applicabili.</p>
            </div>

            <div className="privacy-section">
              <h2>10. Privacy dei Minori</h2>
              <p>I nostri servizi sono destinati a clienti aziendali e non sono diretti a individui di età inferiore ai 18 anni. Non raccogliamo consapevolmente informazioni personali da minori. Se ritieni che un minore ci abbia fornito informazioni personali, contattaci immediatamente.</p>
            </div>

            <div className="privacy-section">
              <h2>11. Modifiche a Questa Informativa</h2>
              <p>Potremmo aggiornare questa Informativa sulla Privacy di volta in volta per riflettere cambiamenti nelle nostre pratiche o requisiti legali. Qualsiasi modifica sarà pubblicata su questa pagina con una data di entrata in vigore aggiornata. Ti incoraggiamo a rivedere periodicamente questa informativa.</p>
            </div>

            <div className="privacy-section">
              <h2>12. Informazioni di Contatto</h2>
              <p>Se hai domande su questa Informativa sulla Privacy o su come gestiamo le tue informazioni personali, contattaci:</p>
              <ul>
                <li><strong>WhatsApp:</strong> +90 551 952 24 48</li>
                <li><strong>Modulo di Contatto:</strong> Disponibile sul nostro sito web</li>
              </ul>
              <p>Il nostro team è disponibile per assisterti con qualsiasi dubbio relativo alla privacy.</p>
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