// app/de/refund-policy/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function RefundPolicyPageDe() {
  return (
    <>
      <Head>
        <title>Rückerstattungs- und Rückgaberichtlinie - Hijab Fashion Mall | Großhandel Türkische Modest Mode</title>
        <meta name="description" content="Unsere Großhandelsrückgaberichtlinie deckt Herstellungsfehler und Transportschäden ab. Erfahren Sie mehr über unseren Qualitätssicherungsprozess für internationale Großhandelsbestellungen." />
        <meta name="keywords" content="Rückerstattungsrichtlinie, Rückgaberichtlinie, Großhandelsrückgaben, beschädigte Artikel, Qualitätssicherung, Hijab Großhandel Türkei" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/de/refund-policy" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/refund-policy" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/refund-policy" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/refund-policy" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/refund-policy" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/refund-policy" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/refund-policy" />
        <meta property="og:title" content="Rückerstattungs- und Rückgaberichtlinie - Hijab Fashion Mall" />
        <meta property="og:description" content="Unsere Großhandelsrückgaberichtlinie deckt Herstellungsfehler und Transportschäden ab." />
        <meta property="og:url" content="https://hijabfashionmall.com/de/refund-policy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rückerstattungs- und Rückgaberichtlinie - Hijab Fashion Mall" />
        <meta name="twitter:description" content="Unsere Großhandelsrückgaberichtlinie deckt Herstellungsfehler und Transportschäden ab." />
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
              <Link href="/de">Startseite</Link>
            </li>
            <li className="breadcrumb-item">/</li>
            <li className="breadcrumb-item active">Rückerstattungs- und Rückgaberichtlinie</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Rückerstattungs- und Rückgaberichtlinie</h1>
          <p>Qualitätssicherung für Ihre Großhandelsbestellungen</p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="policy-content">
        <div className="container">
          <div className="policy-wrapper">
            
            <div className="policy-section">
              <h2>1. Qualitätssicherung</h2>
              <p>Bei Hijab Fashion Mall sind wir stolz darauf, unseren Großhandelspartnern weltweit erstklassige türkische Modest-Mode zu liefern. Jedes Produkt durchläuft vor dem Versand eine strenge Qualitätskontrolle, um sicherzustellen, dass Sie Artikel erhalten, die unseren hohen Standards an Handwerkskunst und Authentizität entsprechen.</p>
              <p>Als Großhandelslieferant, der Einzelhändler in über 50 Ländern beliefert, verstehen wir die Bedeutung zuverlässiger Qualität für Ihr Geschäft. Unser Engagement ist es, konsistente, originale, in der Türkei hergestellte Produkte zu liefern, die Ihre Kunden lieben werden.</p>
            </div>

            <div className="policy-section">
              <h2>2. Beschädigte oder Defekte Artikel</h2>
              <p>Wir stehen hinter der Qualität unserer Produkte. Sollten Sie wider Erwarten einen Artikel mit Herstellungsfehler oder Transportschaden erhalten, entschädigen wir Sie vollständig für die betroffenen Artikel.</p>
              
              <div className="info-box">
                <p><strong>📦 Was tun, wenn Sie beschädigte Artikel erhalten:</strong></p>
                <ul style={{ marginTop: '10px' }}>
                  <li>Kontaktieren Sie unseren Kundenservice innerhalb von 7 Tagen nach Erhalt Ihrer Bestellung</li>
                  <li>Liefern Sie klare Fotos, die den Schaden oder Defekt zeigen</li>
                  <li>Fügen Sie Ihre Bestellnummer und Produktcodes hinzu</li>
                  <li>Unser Team wird die Entschädigung innerhalb von 2-3 Werktagen prüfen und bearbeiten</li>
                </ul>
              </div>
            </div>

            <div className="policy-section">
              <h2>3. Internationale Großhandelsaspekte</h2>
              <p>Als internationaler Großhändler, der weltweit an Einzelhändler versendet, arbeiten wir nach Großhandelsstandards. Aufgrund der Art von Großbestellungen und internationaler Logistik akzeptieren wir keine Rückgaben aus Gründen wie:</p>
              <ul>
                <li>Meinungs- oder Präferenzänderung</li>
                <li>Farbabweichungen aufgrund von Monitoreinstellungen</li>
                <li>Größenauswahl (bitte überprüfen Sie die Größen vor der Bestellung)</li>
                <li>Geringfügige Unterschiede zu Produktbildern</li>
              </ul>
              <p>Wir ermutigen unsere Großhandelspartner, Produktdetails vor der Bestellung sorgfältig zu prüfen. Unser Katalog enthält detaillierte Beschreibungen, Stoffinformationen und Größentabellen, um Ihnen fundierte Kaufentscheidungen zu erleichtern.</p>
            </div>

            <div className="policy-section">
              <h2>4. Qualitätskontrollprozess</h2>
              <p>Um Probleme mit Ihren Bestellungen zu minimieren, implementieren wir einen gründlichen Qualitätskontrollprozess:</p>
              <ul>
                <li>Jeder Artikel wird vor der Verpackung inspiziert</li>
                <li>Professionelle Verpackung für den internationalen Transport</li>
                <li>Sendungsverfolgungsinformationen für alle Lieferungen</li>
                <li>Partnerschaft mit zuverlässigen Spediteuren für weltweite Lieferung</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>5. Wie Sie ein Problem Melden</h2>
              <p>Wenn Sie Artikel mit Herstellungsfehlern oder Transportschäden erhalten, kontaktieren Sie uns bitte sofort:</p>
              <ul>
                <li><strong>WhatsApp:</strong> +90 551 952 24 48</li>
                <li><strong>Kontaktformular:</strong> Verfügbar auf unserer Website</li>
              </ul>
              <p>Unser Kundenservice-Team ist 24/7 verfügbar, um Ihnen bei Fragen zu Ihren Großhandelsbestellungen zu helfen.</p>
            </div>

            <div className="policy-section">
              <h2>6. Entschädigungsprozess</h2>
              <p>Nach Überprüfung der beschädigten oder defekten Artikel bieten wir vollständige Entschädigung durch:</p>
              <ul>
                <li>Guthaben für Ihre nächste Bestellung</li>
                <li>Ersatz der betroffenen Artikel (vorbehaltlich der Verfügbarkeit)</li>
                <li>Rückerstattung über die ursprüngliche Zahlungsmethode</li>
              </ul>
              <p>Die Entschädigung wird innerhalb von 2-5 Werktagen nach Bestätigung des Problems bearbeitet.</p>
            </div>

            <div className="policy-section">
              <h2>7. Kontaktieren Sie Uns</h2>
              <p>Für Fragen zu unserer Rückgaberichtlinie oder zur Meldung eines Problems mit Ihrer Bestellung zögern Sie bitte nicht, unser Team zu kontaktieren. Wir sind hier, um sicherzustellen, dass Ihr Großhandelserlebnis reibungslos und erfolgreich verläuft.</p>
              <p><strong>Kundensupport (WhatsApp):</strong> +90 551 952 24 48</p>
            </div>

            <Link href="/de" className="btn-back">
              <FaArrowLeft size={14} /> Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}