// app/de/privacy-policy/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function PrivacyPolicyPageDe() {
  return (
    <>
      <Head>
        <title>Datenschutzerklärung - Hijab Fashion Mall | Großhandel Türkische Modest Mode</title>
        <meta name="description" content="Erfahren Sie, wie Hijab Fashion Mall Ihre persönlichen Daten sammelt, verwendet und schützt. Unsere Datenschutzerklärung für Großhandelskunden und Website-Besucher." />
        <meta name="keywords" content="Datenschutzerklärung, Datenschutz, persönliche Informationen, Großhandel Datenschutz, Hijab Mode Datenschutz" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/de/privacy-policy" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/privacy-policy" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/privacy-policy" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/privacy-policy" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/privacy-policy" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/privacy-policy" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/privacy-policy" />
        <meta property="og:title" content="Datenschutzerklärung - Hijab Fashion Mall" />
        <meta property="og:description" content="Erfahren Sie, wie Hijab Fashion Mall Ihre persönlichen Daten schützt." />
        <meta property="og:url" content="https://hijabfashionmall.com/de/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Datenschutzerklärung - Hijab Fashion Mall" />
        <meta name="twitter:description" content="Erfahren Sie, wie Hijab Fashion Mall Ihre persönlichen Daten schützt." />
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
              <Link href="/de">Startseite</Link>
            </li>
            <li className="breadcrumb-item">/</li>
            <li className="breadcrumb-item active">Datenschutzerklärung</li>
          </ul>
        </div>
      </div>

      <section className="page-header">
        <div className="container">
          <h1>Datenschutzerklärung</h1>
          <p>Wie wir Ihre Informationen schützen und verarbeiten</p>
        </div>
      </section>

      <section className="privacy-content">
        <div className="container">
          <div className="privacy-wrapper">
            
            <div className="privacy-section">
              <h2>1. Einleitung</h2>
              <p>Bei Hijab Fashion Mall schätzen wir Ihre Privatsphäre und verpflichten uns, Ihre persönlichen Daten zu schützen. Diese Datenschutzerklärung erklärt, wie wir Ihre Daten sammeln, verwenden und schützen, wenn Sie unsere Website besuchen oder Großhandelsbestellungen bei uns aufgeben. Durch die Nutzung unserer Dienste stimmen Sie den in dieser Erklärung beschriebenen Praktiken zu.</p>
              <p>Wir sind als Großhandelslieferant für türkische Modest-Mode tätig und bedienen Einzelhändler und Boutiquen weltweit. Unser Engagement für den Datenschutz stellt sicher, dass Ihre Informationen sicher bleiben, während Sie mit uns Geschäfte machen.</p>
            </div>

            <div className="privacy-section">
              <h2>2. Informationen, Die Wir Sammeln</h2>
              <p>Wir sammeln Informationen, die uns helfen, Ihre Bestellungen zu bearbeiten und unsere Dienstleistungen zu verbessern. Zu den Arten von Informationen, die wir möglicherweise sammeln, gehören:</p>
              <ul>
                <li><strong>Geschäftsinformationen:</strong> Firmenname, Geschäftsadresse, Steueridentifikationsnummer (falls zutreffend)</li>
                <li><strong>Kontaktdaten:</strong> Name, E-Mail-Adresse, Telefonnummer, WhatsApp-Kontakt</li>
                <li><strong>Bestellinformationen:</strong> Produktauswahlen, Mengen, Lieferadresse, Bestellhistorie</li>
                <li><strong>Kommunikationsdaten:</strong> Nachrichten und Anfragen, die über unsere Website oder WhatsApp gesendet wurden</li>
                <li><strong>Technische Daten:</strong> IP-Adresse, Browsertyp, Geräteinformationen und Website-Nutzungsmuster</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>3. Wie Wir Ihre Informationen Verwenden</h2>
              <p>Ihre Informationen werden ausschließlich für legitime Geschäftszwecke im Zusammenhang mit unseren Großhandelsaktivitäten verwendet:</p>
              <ul>
                <li>Bearbeitung und Ausführung Ihrer Großhandelsbestellungen</li>
                <li>Kommunikation mit Ihnen über Ihre Bestellungen und Anfragen</li>
                <li>Bereitstellung von Kundensupport und Unterstützung</li>
                <li>Verwaltung von Versand- und Lieferarrangements</li>
                <li>Senden wichtiger Updates zu Ihrem Konto oder Ihren Bestellungen</li>
                <li>Verbesserung unserer Website und Dienstleistungen</li>
                <li>Einhaltung gesetzlicher und regulatorischer Anforderungen</li>
              </ul>
              <div className="info-box">
                <p><strong>🔒 Hinweis:</strong> Wir verkaufen, vermieten oder teilen Ihre persönlichen Daten nicht mit Dritten zu Marketingzwecken. Ihre Daten werden ausschließlich zur Erfüllung Ihrer Großhandelsbedürfnisse verwendet.</p>
              </div>
            </div>

            <div className="privacy-section">
              <h2>4. Weitergabe Ihrer Informationen</h2>
              <p>Wir können Ihre Informationen nur dann an vertrauenswürdige Dritte weitergeben, wenn dies zur Erfüllung Ihrer Bestellungen erforderlich ist:</p>
              <ul>
                <li><strong>Versandpartner:</strong> Zur Lieferung Ihrer Bestellungen an Ihre angegebene Adresse</li>
                <li><strong>Zahlungsabwickler:</strong> Zur sicheren Abwicklung Ihrer Zahlungen</li>
                <li><strong>Gesetzliche Behörden:</strong> Wenn gesetzlich vorgeschrieben oder zum Schutz unserer Rechte</li>
              </ul>
              <p>Alle Drittanbieter sind vertraglich verpflichtet, Ihre Informationen zu schützen und sie nur für die angegebenen Zwecke zu verwenden.</p>
            </div>

            <div className="privacy-section">
              <h2>5. Datensicherheit</h2>
              <p>Wir implementieren geeignete technische und organisatorische Maßnahmen, um Ihre persönlichen Daten vor unbefugtem Zugriff, Veränderung, Offenlegung oder Zerstörung zu schützen. Diese Maßnahmen umfassen:</p>
              <ul>
                <li>SSL-Verschlüsselung für die Datenübertragung</li>
                <li>Regelmäßige Sicherheitsbewertungen und -aktualisierungen</li>
                <li>Eingeschränkter Zugriff auf persönliche Informationen</li>
                <li>Sichere Speichersysteme und Datenschutzprotokolle</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>6. Cookies und Tracking-Technologien</h2>
              <p>Unsere Website verwendet Cookies und ähnliche Tracking-Technologien, um Ihr Browserlebnis zu verbessern. Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, sodass wir die Funktionalität und das Benutzererlebnis verbessern können. Sie können Ihre Browsereinstellungen anpassen, um Cookies abzulehnen, obwohl dies bestimmte Website-Funktionen beeinträchtigen kann.</p>
              <p>Wir verwenden Cookies für wesentliche Funktionen wie:</p>
              <ul>
                <li>Speichern Ihrer Warenkorbauswahlen</li>
                <li>Aufrechterhaltung Ihrer Sitzung während des Browsen</li>
                <li>Analyse des Website-Verkehrs und der Leistung</li>
                <li>Speicherung von Sprach- und Währungseinstellungen</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>7. Datenspeicherung</h2>
              <p>Wir speichern Ihre persönlichen Daten so lange, wie es zur Erfüllung der in dieser Datenschutzerklärung beschriebenen Zwecke erforderlich ist, es sei denn, eine längere Aufbewahrungsfrist ist gesetzlich vorgeschrieben oder erlaubt. Bestellinformationen werden in der Regel für die geschäftliche Aufzeichnung und zur Behebung möglicher Probleme mit Ihren Bestellungen aufbewahrt.</p>
            </div>

            <div className="privacy-section">
              <h2>8. Ihre Rechte</h2>
              <p>Als geschätzter Kunde haben Sie bestimmte Rechte in Bezug auf Ihre persönlichen Daten:</p>
              <ul>
                <li><strong>Zugriff:</strong> Anfrage einer Kopie der über Sie gespeicherten Informationen</li>
                <li><strong>Berichtigung:</strong> Bitte um Korrektur ungenauer oder unvollständiger Informationen</li>
                <li><strong>Löschung:</strong> Anfrage zur Löschung Ihrer persönlichen Daten, vorbehaltlich gesetzlicher Verpflichtungen</li>
                <li><strong>Widerspruch:</strong> Widerspruch gegen bestimmte Verarbeitungsaktivitäten</li>
                <li><strong>Übertragbarkeit:</strong> Anfrage zur Übertragung Ihrer Daten an einen anderen Dienstanbieter</li>
              </ul>
              <p>Um eines dieser Rechte auszuüben, kontaktieren Sie uns bitte über unser Kontaktformular auf der Website.</p>
            </div>

            <div className="privacy-section">
              <h2>9. Internationale Datenübermittlungen</h2>
              <p>Als internationaler Großhandelslieferant können Ihre Informationen in Länder außerhalb Ihres Wohnsitzes übermittelt und dort verarbeitet werden. Wir stellen sicher, dass geeignete Sicherheitsvorkehrungen getroffen werden, um Ihre Daten gemäß den geltenden Datenschutzgesetzen zu schützen.</p>
            </div>

            <div className="privacy-section">
              <h2>10. Datenschutz für Kinder</h2>
              <p>Unsere Dienste richten sich an Geschäftskunden und nicht an Personen unter 18 Jahren. Wir sammeln wissentlich keine persönlichen Daten von Kindern. Wenn Sie glauben, dass ein Kind uns persönliche Daten zur Verfügung gestellt hat, kontaktieren Sie uns bitte sofort.</p>
            </div>

            <div className="privacy-section">
              <h2>11. Änderungen Dieser Richtlinie</h2>
              <p>Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, um Änderungen in unseren Praktiken oder gesetzlichen Anforderungen Rechnung zu tragen. Alle Änderungen werden auf dieser Seite mit einem aktualisierten Datum des Inkrafttretens veröffentlicht. Wir empfehlen Ihnen, diese Richtlinie regelmäßig zu überprüfen.</p>
            </div>

            <div className="privacy-section">
              <h2>12. Kontaktinformationen</h2>
              <p>Wenn Sie Fragen zu dieser Datenschutzerklärung oder zum Umgang mit Ihren persönlichen Daten haben, kontaktieren Sie uns bitte:</p>
              <ul>
                <li><strong>WhatsApp:</strong> +90 551 952 24 48</li>
                <li><strong>Kontaktformular:</strong> Verfügbar auf unserer Website</li>
              </ul>
              <p>Unser Team steht Ihnen gerne bei Fragen zum Datenschutz zur Verfügung.</p>
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