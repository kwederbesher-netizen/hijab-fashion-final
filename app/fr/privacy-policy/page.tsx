// app/fr/privacy-policy/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function PrivacyPolicyPageFr() {
  return (
    <>
      <Head>
        <title>Politique de Confidentialité - Hijab Fashion Mall | Grossiste Mode Modeste Turque</title>
        <meta name="description" content="Découvrez comment Hijab Fashion Mall collecte, utilise et protège vos informations personnelles. Notre politique de confidentialité pour les clients grossistes et les visiteurs du site." />
        <meta name="keywords" content="politique de confidentialité, protection des données, informations personnelles, confidentialité grossiste, confidentialité mode hijab" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/fr/privacy-policy" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/privacy-policy" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/privacy-policy" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/privacy-policy" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/privacy-policy" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/privacy-policy" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/privacy-policy" />
        <meta property="og:title" content="Politique de Confidentialité - Hijab Fashion Mall" />
        <meta property="og:description" content="Découvrez comment Hijab Fashion Mall protège vos informations personnelles." />
        <meta property="og:url" content="https://hijabfashionmall.com/fr/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Politique de Confidentialité - Hijab Fashion Mall" />
        <meta name="twitter:description" content="Découvrez comment Hijab Fashion Mall protège vos informations personnelles." />
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
              <Link href="/fr">Accueil</Link>
            </li>
            <li className="breadcrumb-item">/</li>
            <li className="breadcrumb-item active">Politique de Confidentialité</li>
          </ul>
        </div>
      </div>

      <section className="page-header">
        <div className="container">
          <h1>Politique de Confidentialité</h1>
          <p>Comment nous protégeons et traitons vos informations</p>
        </div>
      </section>

      <section className="privacy-content">
        <div className="container">
          <div className="privacy-wrapper">
            
            <div className="privacy-section">
              <h2>1. Introduction</h2>
              <p>Chez Hijab Fashion Mall, nous valorisons votre vie privée et nous nous engageons à protéger vos informations personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données lorsque vous visitez notre site Web ou passez des commandes de gros avec nous. En utilisant nos services, vous acceptez les pratiques décrites dans cette politique.</p>
              <p>Nous opérons en tant que fournisseur en gros de mode modeste turque, servant les détaillants et les boutiques du monde entier. Notre engagement en matière de protection des données garantit que vos informations restent sécurisées pendant que vous faites affaire avec nous.</p>
            </div>

            <div className="privacy-section">
              <h2>2. Informations que Nous Collectons</h2>
              <p>Nous collectons des informations qui nous aident à traiter vos commandes et à améliorer nos services. Les types d'informations que nous pouvons collecter comprennent :</p>
              <ul>
                <li><strong>Informations professionnelles :</strong> Nom de l'entreprise, adresse professionnelle, numéro d'identification fiscale (le cas échéant)</li>
                <li><strong>Coordonnées :</strong> Nom, adresse e-mail, numéro de téléphone, contact WhatsApp</li>
                <li><strong>Informations de commande :</strong> Sélections de produits, quantités, adresse de livraison, historique des commandes</li>
                <li><strong>Données de communication :</strong> Messages et demandes envoyés via notre site Web ou WhatsApp</li>
                <li><strong>Données techniques :</strong> Adresse IP, type de navigateur, informations sur l'appareil et modèles d'utilisation du site</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>3. Comment Nous Utilisons Vos Informations</h2>
              <p>Vos informations sont utilisées uniquement à des fins commerciales légitimes liées à nos opérations de gros :</p>
              <ul>
                <li>Traitement et exécution de vos commandes de gros</li>
                <li>Communication avec vous concernant vos commandes et demandes</li>
                <li>Fourniture de support client et d'assistance</li>
                <li>Gestion des arrangements d'expédition et de livraison</li>
                <li>Envoi de mises à jour importantes concernant votre compte ou vos commandes</li>
                <li>Amélioration de notre site Web et de nos services</li>
                <li>Conformité aux exigences légales et réglementaires</li>
              </ul>
              <div className="info-box">
                <p><strong>🔒 Remarque :</strong> Nous ne vendons, ne louons ni ne partageons vos informations personnelles avec des tiers à des fins de marketing. Vos données sont utilisées exclusivement pour répondre à vos besoins de gros.</p>
              </div>
            </div>

            <div className="privacy-section">
              <h2>4. Partage de Vos Informations</h2>
              <p>Nous pouvons partager vos informations avec des tiers de confiance uniquement lorsque cela est nécessaire pour exécuter vos commandes :</p>
              <ul>
                <li><strong>Partenaires d'expédition :</strong> Pour livrer vos commandes à votre adresse spécifiée</li>
                <li><strong>Processeurs de paiement :</strong> Pour traiter vos paiements en toute sécurité</li>
                <li><strong>Autorités légales :</strong> Lorsque la loi l'exige ou pour protéger nos droits</li>
              </ul>
              <p>Tous les fournisseurs de services tiers sont contractuellement obligés de protéger vos informations et de les utiliser uniquement aux fins spécifiées.</p>
            </div>

            <div className="privacy-section">
              <h2>5. Sécurité des Données</h2>
              <p>Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations personnelles contre tout accès non autorisé, modification, divulgation ou destruction. Ces mesures comprennent :</p>
              <ul>
                <li>Chiffrement SSL pour la transmission des données</li>
                <li>Évaluations et mises à jour de sécurité régulières</li>
                <li>Accès restreint aux informations personnelles</li>
                <li>Systèmes de stockage sécurisés et protocoles de protection des données</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>6. Cookies et Technologies de Suivi</h2>
              <p>Notre site Web utilise des cookies et des technologies de suivi similaires pour améliorer votre expérience de navigation. Les cookies nous aident à comprendre comment les visiteurs interagissent avec notre site, ce qui nous permet d'améliorer les fonctionnalités et l'expérience utilisateur. Vous pouvez ajuster les paramètres de votre navigateur pour refuser les cookies, bien que cela puisse affecter certaines fonctionnalités du site.</p>
              <p>Nous utilisons des cookies pour des fonctions essentielles telles que :</p>
              <ul>
                <li>Mémoriser vos sélections de panier</li>
                <li>Maintenir votre session pendant la navigation</li>
                <li>Analyser le trafic et les performances du site Web</li>
                <li>Stocker les préférences de langue et de devise</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>7. Conservation des Données</h2>
              <p>Nous conservons vos informations personnelles aussi longtemps que nécessaire pour atteindre les objectifs décrits dans cette politique de confidentialité, à moins qu'une période de conservation plus longue ne soit requise ou permise par la loi. Les informations de commande sont généralement conservées pour la tenue des dossiers commerciaux et pour résoudre tout problème potentiel avec vos commandes.</p>
            </div>

            <div className="privacy-section">
              <h2>8. Vos Droits</h2>
              <p>En tant que client précieux, vous avez certains droits concernant vos informations personnelles :</p>
              <ul>
                <li><strong>Accès :</strong> Demander une copie des informations que nous détenons sur vous</li>
                <li><strong>Correction :</strong> Nous demander de corriger toute information inexacte ou incomplète</li>
                <li><strong>Suppression :</strong> Demander la suppression de vos informations personnelles, sous réserve des obligations légales</li>
                <li><strong>Opposition :</strong> Vous opposer à certaines activités de traitement</li>
                <li><strong>Portabilité :</strong> Demander le transfert de vos données vers un autre fournisseur de services</li>
              </ul>
              <p>Pour exercer l'un de ces droits, veuillez nous contacter via notre formulaire de contact sur le site Web.</p>
            </div>

            <div className="privacy-section">
              <h2>9. Transferts Internationaux de Données</h2>
              <p>En tant que fournisseur en gros international, vos informations peuvent être transférées et traitées dans des pays autres que votre lieu de résidence. Nous veillons à ce que des garanties appropriées soient en place pour protéger vos données conformément aux lois applicables en matière de confidentialité.</p>
            </div>

            <div className="privacy-section">
              <h2>10. Confidentialité des Enfants</h2>
              <p>Nos services sont destinés aux clients professionnels et ne s'adressent pas aux personnes de moins de 18 ans. Nous ne collectons pas sciemment d'informations personnelles auprès d'enfants. Si vous pensez qu'un enfant nous a fourni des informations personnelles, veuillez nous contacter immédiatement.</p>
            </div>

            <div className="privacy-section">
              <h2>11. Modifications de Cette Politique</h2>
              <p>Nous pouvons mettre à jour cette politique de confidentialité de temps à autre pour refléter des changements dans nos pratiques ou des exigences légales. Toute modification sera publiée sur cette page avec une date d'entrée en vigueur mise à jour. Nous vous encourageons à consulter cette politique périodiquement.</p>
            </div>

            <div className="privacy-section">
              <h2>12. Coordonnées</h2>
              <p>Si vous avez des questions concernant cette politique de confidentialité ou la façon dont nous traitons vos informations personnelles, veuillez nous contacter :</p>
              <ul>
                <li><strong>WhatsApp :</strong> +90 551 952 24 48</li>
                <li><strong>Formulaire de contact :</strong> Disponible sur notre site Web</li>
              </ul>
              <p>Notre équipe est disponible pour vous aider avec toute préoccupation liée à la confidentialité.</p>
            </div>

            <Link href="/fr" className="btn-back">
              <FaArrowLeft size={14} /> Retour à l'Accueil
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}