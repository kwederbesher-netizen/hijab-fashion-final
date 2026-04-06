// app/fr/refund-policy/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function RefundPolicyPageFr() {
  return (
    <>
      <Head>
        <title>Politique de Remboursement et de Retour - Hijab Fashion Mall | Grossiste Mode Modeste Turque</title>
        <meta name="description" content="Notre politique de retour en gros couvre les défauts de fabrication et les dommages d'expédition. Découvrez notre processus d'assurance qualité pour les commandes internationales en gros." />
        <meta name="keywords" content="politique de remboursement, politique de retour, retours en gros, articles endommagés, assurance qualité, hijab grossiste turquie" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/fr/refund-policy" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/refund-policy" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/refund-policy" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/refund-policy" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/refund-policy" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/refund-policy" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/refund-policy" />
        <meta property="og:title" content="Politique de Remboursement et de Retour - Hijab Fashion Mall" />
        <meta property="og:description" content="Notre politique de retour en gros couvre les défauts de fabrication et les dommages d'expédition." />
        <meta property="og:url" content="https://hijabfashionmall.com/fr/refund-policy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Politique de Remboursement et de Retour - Hijab Fashion Mall" />
        <meta name="twitter:description" content="Notre politique de retour en gros couvre les défauts de fabrication et les dommages d'expédition." />
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
              <Link href="/fr">Accueil</Link>
            </li>
            <li className="breadcrumb-item">/</li>
            <li className="breadcrumb-item active">Politique de Remboursement et de Retour</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Politique de Remboursement et de Retour</h1>
          <p>Assurance qualité pour vos commandes en gros</p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="policy-content">
        <div className="container">
          <div className="policy-wrapper">
            
            <div className="policy-section">
              <h2>1. Assurance Qualité</h2>
              <p>Chez Hijab Fashion Mall, nous sommes fiers de fournir une mode modeste turque premium à nos partenaires grossistes du monde entier. Chaque produit subit un contrôle de qualité rigoureux avant expédition pour vous garantir des articles qui répondent à nos normes élevées de savoir-faire et d'authenticité.</p>
              <p>En tant que fournisseur en gros servant des détaillants dans plus de 50 pays, nous comprenons l'importance d'une qualité fiable pour votre entreprise. Notre engagement est de fournir des produits turcs originaux et cohérents que vos clients adoreront.</p>
            </div>

            <div className="policy-section">
              <h2>2. Articles Endommagés ou Défectueux</h2>
              <p>Nous soutenons la qualité de nos produits. Dans l'éventualité peu probable où vous recevriez un article présentant un défaut de fabrication ou des dommages survenus pendant le transport, nous vous dédommagerons entièrement pour les articles concernés.</p>
              
              <div className="info-box">
                <p><strong>📦 Que faire si vous recevez des articles endommagés :</strong></p>
                <ul style={{ marginTop: '10px' }}>
                  <li>Contactez notre service client dans les 7 jours suivant la réception de votre commande</li>
                  <li>Fournissez des photos claires montrant les dommages ou défauts</li>
                  <li>Incluez votre numéro de commande et les codes produits</li>
                  <li>Notre équipe examinera et traitera la compensation sous 2-3 jours ouvrables</li>
                </ul>
              </div>
            </div>

            <div className="policy-section">
              <h2>3. Considérations pour le Commerce de Gros International</h2>
              <p>En tant que grossiste international expédiant dans le monde entier, nous opérons selon les normes du commerce de gros. Compte tenu de la nature des commandes en gros et de la logistique internationale, nous n'acceptons pas les retours pour des raisons telles que :</p>
              <ul>
                <li>Changement d'avis ou de préférence</li>
                <li>Variations de couleur dues aux paramètres de l'écran</li>
                <li>Choix de taille (veuillez vérifier les tailles avant de commander)</li>
                <li>Différences mineures par rapport aux images des produits</li>
              </ul>
              <p>Nous encourageons nos partenaires grossistes à examiner attentivement les détails des produits avant de passer commande. Notre catalogue fournit des descriptions détaillées, des informations sur les tissus et des guides de tailles pour vous aider à prendre des décisions d'achat éclairées.</p>
            </div>

            <div className="policy-section">
              <h2>4. Processus de Contrôle Qualité</h2>
              <p>Pour minimiser tout problème avec vos commandes, nous mettons en œuvre un processus de contrôle qualité approfondi :</p>
              <ul>
                <li>Chaque article est inspecté avant emballage</li>
                <li>Emballage professionnel pour le transit international</li>
                <li>Informations de suivi fournies pour tous les envois</li>
                <li>Partenariat avec des transporteurs fiables pour la livraison mondiale</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>5. Comment Signaler un Problème</h2>
              <p>Si vous recevez des articles présentant des défauts de fabrication ou des dommages de transit, veuillez nous contacter immédiatement :</p>
              <ul>
                <li><strong>WhatsApp :</strong> +90 551 952 24 48</li>
                <li><strong>Formulaire de contact :</strong> Disponible sur notre site Web</li>
              </ul>
              <p>Notre équipe de service client est disponible 24h/24 et 7j/7 pour vous aider avec toute préoccupation concernant vos commandes en gros.</p>
            </div>

            <div className="policy-section">
              <h2>6. Processus de Compensation</h2>
              <p>Après vérification des articles endommagés ou défectueux, nous fournirons une compensation complète par :</p>
              <ul>
                <li>Crédit pour votre prochaine commande</li>
                <li>Remplacement des articles concernés (sous réserve de disponibilité)</li>
                <li>Remboursement via le mode de paiement d'origine</li>
              </ul>
              <p>La compensation est traitée dans un délai de 2 à 5 jours ouvrables après confirmation du problème.</p>
            </div>

            <div className="policy-section">
              <h2>7. Contactez-nous</h2>
              <p>Pour toute question concernant notre politique de retour ou pour signaler un problème avec votre commande, n'hésitez pas à contacter notre équipe. Nous sommes là pour garantir que votre expérience de gros soit fluide et réussie.</p>
              <p><strong>Support Client (WhatsApp) :</strong> +90 551 952 24 48</p>
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