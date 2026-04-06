// app/de/terms-conditions/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function TermsConditionsPageDe() {
  return (
    <>
      <Head>
        <title>Allgemeine Geschäftsbedingungen - Hijab Fashion Mall | Großhandel Türkische Modest Mode</title>
        <meta name="description" content="Lesen Sie unsere Großhandelsgeschäftsbedingungen für die Bestellung türkischer Modest-Mode. Erfahren Sie mehr über Preise, Versand, Zahlungsmethoden und internationale Großhandelsrichtlinien." />
        <meta name="keywords" content="Allgemeine Geschäftsbedingungen, Großhandelsbedingungen, Hijab Großhandelsbedingungen, Modest Mode, Türkei Großhandel" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/de/terms-conditions" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/terms-conditions" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/terms-conditions" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/terms-conditions" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/terms-conditions" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/terms-conditions" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/terms-conditions" />
        <meta property="og:title" content="Allgemeine Geschäftsbedingungen - Hijab Fashion Mall" />
        <meta property="og:description" content="Lesen Sie unsere Großhandelsgeschäftsbedingungen für die Bestellung türkischer Modest-Mode." />
        <meta property="og:url" content="https://hijabfashionmall.com/de/terms-conditions" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hijabfashionmall.com/images/og-terms.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Allgemeine Geschäftsbedingungen - Hijab Fashion Mall" />
        <meta name="twitter:description" content="Lesen Sie unsere Großhandelsgeschäftsbedingungen für die Bestellung türkischer Modest-Mode." />
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
              <Link href="/de">Startseite</Link>
            </li>
            <li className="breadcrumb-item">/</li>
            <li className="breadcrumb-item active">Allgemeine Geschäftsbedingungen</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Allgemeine Geschäftsbedingungen</h1>
          <p>Großhandelsbedingungen für unsere internationalen Partner</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content">
        <div className="container">
          <div className="terms-wrapper">
            
            <div className="terms-section">
              <h2>1. Allgemeine Informationen</h2>
              <p>Willkommen bei Hijab Fashion Mall. Diese Allgemeinen Geschäftsbedingungen regeln Ihre Nutzung unserer Website und unserer Großhandelsdienste. Mit der Bestellung bei uns erklären Sie sich mit diesen Bedingungen einverstanden. Bitte lesen Sie sie sorgfältig durch, bevor Sie einen Kauf tätigen.</p>
              <p>Hijab Fashion Mall ist ein Großhandelslieferant, der sich auf türkische Modest-Mode spezialisiert hat und Einzelhändler und Boutiquen weltweit beliefert. Unsere Plattform verbindet internationale Käufer mit hochwertigen türkischen Herstellern.</p>
            </div>

            <div className="terms-section">
              <h2>2. Großhandelsbestellungen</h2>
              <p>Alle über unsere Website aufgegebenen Bestellungen gelten als Großhandelsanfragen. Unsere Produkte sind, sofern nicht anders angegeben, für den Wiederverkauf bestimmt. Als Großhandelslieferant bieten wir keine Einzelhandelspreise oder Einzelstückpreise für Nicht-RSS-Artikel an.</p>
              <ul>
                <li><strong>RSS-Artikel :</strong> Als "RSS" gekennzeichnete Produkte können als Einzelstücke bestellt werden</li>
                <li><strong>Kartonartikel :</strong> Produkte, die in Kartons mit angegebenen Packungsgrößen verkauft werden</li>
                <li><strong>Gemischte Bestellungen :</strong> Sie können verschiedene Produkte in einer Bestellung ohne Mindestmengenanforderung kombinieren</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>3. Preise und Zahlungen</h2>
              <p>Alle auf unserer Website angezeigten Preise sind in USD (US-Dollar) und stellen Großhandelspreise dar. Wir behalten uns das Recht vor, die Preise ohne vorherige Ankündigung basierend auf Marktbedingungen, Wechselkursen und Herstellerpreisen anzupassen.</p>
              <ul>
                <li><strong>Akzeptierte Zahlungsmethoden :</strong> Banküberweisung, Western Union und gängige Kreditkarten</li>
                <li><strong>Zahlungsbedingungen :</strong> Bestellungen werden nach Zahlungsbestätigung bearbeitet</li>
                <li><strong>Währungsumrechnung :</strong> Endgültige Gebühren können basierend auf den Wechselkursen Ihrer Bank variieren</li>
                <li><strong>Rechnungen :</strong> Pro-forma-Rechnungen vor Zahlung, endgültige Rechnung bei Versand</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>4. Versand und Lieferung</h2>
              <p>Wir bieten weltweiten Versand in über 50 Länder über unsere vertrauenswürdigen Speditionspartner. Versandkosten und Lieferzeiten variieren je nach Zielort.</p>
              <ul>
                <li><strong>Bearbeitungszeit :</strong> 1-3 Werktage nach Zahlungsbestätigung</li>
                <li><strong>Lieferzeit :</strong> 3-7 Werktage für die meisten internationalen Ziele</li>
                <li><strong>Sendungsverfolgung :</strong> Sendungsverfolgungsnummer für alle Lieferungen</li>
                <li><strong>Zoll und Abgaben :</strong> Einfuhrzölle und Steuern gehen zu Lasten des Käufers</li>
              </ul>
              <div className="info-box">
                <p><strong>📦 Wichtiger Hinweis zum Versand :</strong> Die Lieferzeiten sind Schätzungen und können aufgrund von Zollabfertigung, örtlichen Feiertagen oder unvorhergesehenen Umständen variieren. Wir haften nicht für Verzögerungen, die durch Spediteure oder Zollbehörden verursacht werden.</p>
              </div>
            </div>

            <div className="terms-section">
              <h2>5. Produktinformationen</h2>
              <p>Wir bemühen uns, genaue Produktbeschreibungen, Bilder und Spezifikationen bereitzustellen. Bitte beachten Sie jedoch:</p>
              <ul>
                <li>Farben können aufgrund von Monitoreinstellungen leicht abweichen</li>
                <li>Größen basieren auf türkischen Herstellungsstandards; bitte überprüfen Sie die Größentabellen vor der Bestellung</li>
                <li>Stoffzusammensetzungen sind in den Produktbeschreibungen angegeben</li>
                <li>Die Lagerverfügbarkeit kann sich ohne Vorankündigung ändern</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>6. Retouren und Schäden</h2>
              <p>Als Großhandelslieferant akzeptieren wir keine Retouren wegen Meinungsänderung oder Präferenz. Wir garantieren jedoch vollständig die Qualität unserer Produkte:</p>
              <ul>
                <li>Herstellungsfehler werden mit voller Entschädigung abgedeckt</li>
                <li>Transportschäden werden mit entsprechender Dokumentation abgedeckt</li>
                <li>Ansprüche müssen innerhalb von 7 Tagen nach Lieferung mit klaren Fotos eingereicht werden</li>
                <li>Die Entschädigung erfolgt als Gutschrift, Ersatz oder Rückerstattung basierend auf der Fallprüfung</li>
              </ul>
              <p>Weitere Informationen finden Sie in unserer <Link href="/de/refund-policy" className="inline-link">Rückerstattungs- und Rückgaberichtlinie</Link>.</p>
            </div>

            <div className="terms-section">
              <h2>7. Geistiges Eigentum</h2>
              <p>Alle Inhalte dieser Website, einschließlich Bilder, Texte, Logos und Designs, sind Eigentum von Hijab Fashion Mall und durch Urheberrechtsgesetze geschützt. Jede unbefugte Nutzung, Vervielfältigung oder Verbreitung ist ohne unsere schriftliche Zustimmung verboten.</p>
            </div>

            <div className="terms-section">
              <h2>8. Datenschutzerklärung</h2>
              <p>Wir respektieren Ihre Privatsphäre und verpflichten uns, Ihre persönlichen Daten zu schützen. Ihre Daten werden ausschließlich für die Auftragsabwicklung, Kommunikation und Verbesserung unserer Dienstleistungen verwendet. Wir geben Ihre Informationen nicht an Dritte weiter, es sei denn, dies ist für den Versand und die Zahlungsabwicklung erforderlich.</p>
              <p>Weitere Informationen finden Sie in unserer <Link href="/de/privacy-policy" className="inline-link">Datenschutzerklärung</Link>.</p>
            </div>

            <div className="terms-section">
              <h2>9. Haftungsbeschränkung</h2>
              <p>Hijab Fashion Mall haftet nicht für indirekte, zufällige oder Folgeschäden, die aus der Nutzung unserer Produkte oder Dienstleistungen entstehen. Unsere Haftung ist auf den Kaufpreis der betreffenden Produkte beschränkt.</p>
            </div>

            <div className="terms-section">
              <h2>10. Geltendes Recht</h2>
              <p>Diese Allgemeinen Geschäftsbedingungen unterliegen den Gesetzen der Republik Türkei. Alle Streitigkeiten, die sich aus diesen Bedingungen ergeben, werden vor den türkischen Gerichten gelöst.</p>
            </div>

            <div className="terms-section">
              <h2>11. Änderungen der Bedingungen</h2>
              <p>Wir behalten uns das Recht vor, diese Allgemeinen Geschäftsbedingungen jederzeit ohne vorherige Ankündigung zu aktualisieren oder zu ändern. Änderungen treten sofort nach der Veröffentlichung auf dieser Seite in Kraft. Ihre fortgesetzte Nutzung unserer Dienste stellt die Zustimmung zu allen Änderungen dar.</p>
            </div>

            <div className="terms-section">
              <h2>12. Kontaktieren Sie Uns</h2>
              <p>Wenn Sie Fragen zu diesen Allgemeinen Geschäftsbedingungen haben, kontaktieren Sie uns bitte:</p>
              <ul>
                <li><strong>WhatsApp :</strong> +90 551 952 24 48 (24/7 Support)</li>
                <li><strong>Kontaktformular :</strong> Verfügbar auf unserer Website</li>
              </ul>
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