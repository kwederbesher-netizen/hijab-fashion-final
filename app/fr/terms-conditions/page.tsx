// app/fr/terms-conditions/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function TermsConditionsPageFr() {
  return (
    <>
      <Head>
        <title>Conditions Générales - Hijab Fashion Mall | Grossiste Mode Modeste Turque</title>
        <meta name="description" content="Lisez nos conditions générales de vente en gros pour commander de la mode modeste turque. Découvrez les tarifs, l'expédition, les modes de paiement et les politiques de vente en gros internationales." />
        <meta name="keywords" content="conditions générales, conditions de vente en gros, conditions hijab en gros, mode modeste, turquie en gros" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/fr/terms-conditions" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/terms-conditions" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/terms-conditions" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/terms-conditions" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/terms-conditions" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/terms-conditions" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/terms-conditions" />
        <meta property="og:title" content="Conditions Générales - Hijab Fashion Mall" />
        <meta property="og:description" content="Lisez nos conditions générales de vente en gros pour commander de la mode modeste turque." />
        <meta property="og:url" content="https://hijabfashionmall.com/fr/terms-conditions" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hijabfashionmall.com/images/og-terms.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Conditions Générales - Hijab Fashion Mall" />
        <meta name="twitter:description" content="Lisez nos conditions générales de vente en gros pour commander de la mode modeste turque." />
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
              <Link href="/fr">Accueil</Link>
            </li>
            <li className="breadcrumb-item">/</li>
            <li className="breadcrumb-item active">Conditions Générales</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Conditions Générales</h1>
          <p>Conditions de vente en gros pour nos partenaires internationaux</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content">
        <div className="container">
          <div className="terms-wrapper">
            
            <div className="terms-section">
              <h2>1. Informations Générales</h2>
              <p>Bienvenue chez Hijab Fashion Mall. Ces conditions générales régissent votre utilisation de notre site Web et de nos services d'achat en gros. En passant une commande avec nous, vous acceptez d'être lié par ces conditions. Veuillez les lire attentivement avant de procéder à tout achat.</p>
              <p>Hijab Fashion Mall est un fournisseur en gros spécialisé dans la mode modeste turque, servant les détaillants et les boutiques du monde entier. Notre plateforme met en relation les acheteurs internationaux avec des fabricants turcs de qualité supérieure.</p>
            </div>

            <div className="terms-section">
              <h2>2. Commandes en Gros</h2>
              <p>Toutes les commandes passées via notre site Web sont considérées comme des demandes de renseignements sur les ventes en gros. Nos produits sont destinés à la revente au détail, sauf indication contraire. En tant que fournisseur en gros, nous n'offrons pas de prix de détail ni de prix à l'unité pour les articles non RSS.</p>
              <ul>
                <li><strong>Articles RSS :</strong> Les produits marqués "RSS" peuvent être commandés à l'unité</li>
                <li><strong>Articles en Carton :</strong> Produits vendus en cartons avec des tailles de conditionnement spécifiées</li>
                <li><strong>Commandes Mixtes :</strong> Vous pouvez combiner différents produits dans une seule commande sans quantité minimale requise</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>3. Tarifs et Paiements</h2>
              <p>Tous les prix affichés sur notre site Web sont en USD (dollars américains) et représentent les prix de gros. Nous nous réservons le droit d'ajuster les prix sans préavis en fonction des conditions du marché, des taux de change et des prix des fabricants.</p>
              <ul>
                <li><strong>Modes de Paiement Acceptés :</strong> Virement bancaire, Western Union et principales cartes de crédit</li>
                <li><strong>Conditions de Paiement :</strong> Les commandes sont traitées après confirmation du paiement</li>
                <li><strong>Conversion de Devise :</strong> Les frais finaux peuvent varier en fonction des taux de change de votre banque</li>
                <li><strong>Factures :</strong> Factures pro forma fournies avant paiement, facture finale à l'expédition</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>4. Expédition et Livraison</h2>
              <p>Nous offrons une expédition mondiale vers plus de 50 pays grâce à nos partenaires de transport de confiance. Les coûts d'expédition et les délais de livraison varient selon la destination.</p>
              <ul>
                <li><strong>Délai de Traitement :</strong> 1-3 jours ouvrables après confirmation du paiement</li>
                <li><strong>Délai de Livraison :</strong> 3-7 jours ouvrables pour la plupart des destinations internationales</li>
                <li><strong>Suivi :</strong> Numéro de suivi fourni pour tous les envois</li>
                <li><strong>Douanes et Droits :</strong> Les droits d'importation et les taxes sont à la charge de l'acheteur</li>
              </ul>
              <div className="info-box">
                <p><strong>📦 Note Importante sur l'Expédition :</strong> Les délais de livraison sont des estimations et peuvent varier en raison du dédouanement, des jours fériés locaux ou de circonstances imprévues. Nous ne sommes pas responsables des retards causés par les transporteurs ou les autorités douanières.</p>
              </div>
            </div>

            <div className="terms-section">
              <h2>5. Informations sur les Produits</h2>
              <p>Nous nous efforçons de fournir des descriptions, images et spécifications précises des produits. Cependant, veuillez noter :</p>
              <ul>
                <li>Les couleurs peuvent apparaître légèrement différentes en raison des paramètres de l'écran</li>
                <li>Les tailles sont basées sur les normes de fabrication turques ; veuillez consulter les guides des tailles avant de commander</li>
                <li>Les compositions des tissus sont fournies dans les descriptions de produits</li>
                <li>La disponibilité des stocks est sujette à modification sans préavis</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>6. Retours et Dommages</h2>
              <p>En tant que fournisseur en gros, nous n'acceptons pas les retours pour changement d'avis ou de préférence. Cependant, nous garantissons pleinement la qualité de nos produits :</p>
              <ul>
                <li>Les défauts de fabrication sont couverts avec une compensation complète</li>
                <li>Les dommages de transit sont couverts avec une documentation appropriée</li>
                <li>Les réclamations doivent être soumises dans les 7 jours suivant la livraison avec des photos claires</li>
                <li>La compensation est fournie sous forme de crédit, remplacement ou remboursement selon l'examen du cas</li>
              </ul>
              <p>Veuillez consulter notre <Link href="/fr/refund-policy" className="inline-link">Politique de Remboursement et de Retour</Link> pour plus de détails.</p>
            </div>

            <div className="terms-section">
              <h2>7. Propriété Intellectuelle</h2>
              <p>Tout le contenu de ce site Web, y compris les images, textes, logos et designs, est la propriété de Hijab Fashion Mall et protégé par les lois sur les droits d'auteur. Toute utilisation, reproduction ou distribution non autorisée est interdite sans notre consentement écrit.</p>
            </div>

            <div className="terms-section">
              <h2>8. Politique de Confidentialité</h2>
              <p>Nous respectons votre vie privée et nous engageons à protéger vos informations personnelles. Vos données sont utilisées uniquement pour le traitement des commandes, la communication et l'amélioration de nos services. Nous ne partageons pas vos informations avec des tiers sauf lorsque cela est nécessaire pour l'expédition et le traitement des paiements.</p>
              <p>Pour plus de détails, veuillez consulter notre <Link href="/fr/privacy-policy" className="inline-link">Politique de Confidentialité</Link>.</p>
            </div>

            <div className="terms-section">
              <h2>9. Limitation de Responsabilité</h2>
              <p>Hijab Fashion Mall ne peut être tenu responsable des dommages indirects, accessoires ou consécutifs découlant de l'utilisation de nos produits ou services. Notre responsabilité est limitée au prix d'achat des produits en question.</p>
            </div>

            <div className="terms-section">
              <h2>10. Droit Applicable</h2>
              <p>Les présentes conditions générales sont régies par les lois de la République de Turquie. Tout litige découlant de ces conditions sera résolu par les tribunaux turcs.</p>
            </div>

            <div className="terms-section">
              <h2>11. Modifications des Conditions</h2>
              <p>Nous nous réservons le droit de mettre à jour ou de modifier ces conditions générales à tout moment sans préavis. Les modifications entreront en vigueur immédiatement après leur publication sur cette page. Votre utilisation continue de nos services constitue une acceptation de toute modification.</p>
            </div>

            <div className="terms-section">
              <h2>12. Contactez-nous</h2>
              <p>Si vous avez des questions concernant ces conditions générales, veuillez nous contacter :</p>
              <ul>
                <li><strong>WhatsApp :</strong> +90 551 952 24 48 (Support 24/7)</li>
                <li><strong>Formulaire de contact :</strong> Disponible sur notre site Web</li>
              </ul>
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