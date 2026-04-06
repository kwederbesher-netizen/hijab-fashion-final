// app/fr/shipping-policy/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function ShippingPolicyPageFr() {
  return (
    <>
      <Head>
        <title>Politique d'Expédition - Hijab Fashion Mall | Expédition Mondiale depuis la Turquie</title>
        <meta name="description" content="Découvrez notre politique d'expédition mondiale pour les commandes en gros. Livraison rapide et fiable dans plus de 50 pays avec des transporteurs de confiance." />
        <meta name="keywords" content="politique d'expédition, expédition mondiale, expédition en gros, délais de livraison, suivi des commandes, hijab grossiste turquie" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/fr/shipping-policy" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/shipping-policy" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/shipping-policy" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/shipping-policy" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/shipping-policy" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/shipping-policy" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/shipping-policy" />
        <meta property="og:title" content="Politique d'Expédition - Hijab Fashion Mall" />
        <meta property="og:description" content="Expédition mondiale pour les commandes en gros. Livraison rapide et fiable dans plus de 50 pays depuis la Turquie." />
        <meta property="og:url" content="https://hijabfashionmall.com/fr/shipping-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hijabfashionmall.com/images/og-shipping.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Politique d'Expédition - Hijab Fashion Mall" />
        <meta name="twitter:description" content="Expédition mondiale pour les commandes en gros. Livraison rapide et fiable depuis la Turquie." />
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
              <Link href="/fr">Accueil</Link>
            </li>
            <li className="breadcrumb-item">/</li>
            <li className="breadcrumb-item active">Politique d'Expédition</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Politique d'Expédition</h1>
          <p>Livraison rapide et fiable dans le monde entier depuis la Turquie</p>
        </div>
      </section>

      {/* Shipping Content */}
      <section className="shipping-content">
        <div className="container">
          <div className="shipping-wrapper">
            
            <div className="shipping-section">
              <h2>1. Expédition Mondiale</h2>
              <p>Chez Hijab Fashion Mall, nous sommes fiers de servir nos partenaires grossistes à travers le monde. Nous offrons une expédition mondiale fiable vers plus de 50 pays grâce à nos partenaires transporteurs de confiance. Notre réseau d'expédition garantit que vos commandes vous parviennent en toute sécurité et efficacement, où que vous soyez.</p>
              <p>En tant que fournisseur en gros international basé en Turquie, nous comprenons l'importance d'une livraison rapide et sécurisée pour votre entreprise. Nous travaillons exclusivement avec des transporteurs internationaux établis pour vous offrir la meilleure expérience d'expédition possible.</p>
            </div>

            <div className="shipping-section">
              <h2>2. Arrangements d'Expédition</h2>
              <p>Les arrangements d'expédition sont faits au cas par cas, en tenant compte de votre emplacement, de la taille de la commande et des exigences de livraison spécifiques. Nous coordonnons avec nos partenaires transporteurs pour trouver la solution d'expédition la plus adaptée pour chaque commande en gros.</p>
              <ul>
                <li>Nous travaillons avec plusieurs transporteurs internationaux (DHL, FedEx, UPS, et autres)</li>
                <li>Les méthodes d'expédition sont choisies en fonction de la destination et des spécifications de la commande</li>
                <li>Nous communiquons tous les détails d'expédition directement avec nos partenaires grossistes</li>
                <li>Les arrangements d'expédition sont confirmés après la finalisation de la commande</li>
              </ul>
              <div className="info-box">
                <p><strong>📦 Expédition Flexible :</strong> Nous comprenons que chaque commande en gros a des exigences uniques. Notre équipe travaille en étroite collaboration avec vous pour organiser une expédition qui répond à vos délais et préférences budgétaires.</p>
              </div>
            </div>

            <div className="shipping-section">
              <h2>3. Coûts d'Expédition</h2>
              <p>Les coûts d'expédition varient en fonction de plusieurs facteurs :</p>
              <ul>
                <li><strong>Pays de Destination :</strong> Distance et zone d'expédition</li>
                <li><strong>Poids et Volume de la Commande :</strong> Dimensions du colis et poids total</li>
                <li><strong>Méthode d'Expédition :</strong> Options standard, express ou économique disponibles</li>
                <li><strong>Douanes et Droits :</strong> Taxes d'importation et frais applicables à votre pays</li>
              </ul>
              <p>Les coûts d'expédition sont calculés individuellement pour chaque commande. Notre équipe vous fournira un devis d'expédition détaillé avant de finaliser votre commande, garantissant une transparence totale et aucune surprise.</p>
            </div>

            <div className="shipping-section">
              <h2>4. Délai de Traitement</h2>
              <p>Nous nous efforçons de préparer et d'expédier vos commandes le plus rapidement possible :</p>
              <ul>
                <li><strong>Traitement de la Commande :</strong> 1-3 jours ouvrables après confirmation du paiement</li>
                <li><strong>Contrôle Qualité :</strong> Chaque article est inspecté avant emballage</li>
                <li><strong>Emballage :</strong> Emballage professionnel pour garantir la sécurité du produit pendant le transport</li>
                <li><strong>Documentation :</strong> Tous les documents d'expédition nécessaires sont préparés</li>
              </ul>
            </div>

            <div className="shipping-section">
              <h2>5. Délais de Livraison</h2>
              <p>Les délais de livraison estimés varient selon la destination :</p>
              <ul>
                <li><strong>Moyen-Orient et Pays du Golfe :</strong> 3-5 jours ouvrables</li>
                <li><strong>Pays Européens :</strong> 3-7 jours ouvrables</li>
                <li><strong>Amérique du Nord :</strong> 5-7 jours ouvrables</li>
                <li><strong>Australie et Nouvelle-Zélande :</strong> 5-8 jours ouvrables</li>
                <li><strong>Autres Destinations Internationales :</strong> 7-10 jours ouvrables</li>
              </ul>
              <p><strong>Remarque :</strong> Ce sont des délais de livraison estimés. La livraison réelle peut varier en raison du dédouanement, des jours fériés locaux ou de circonstances imprévues.</p>
            </div>

            <div className="shipping-section">
              <h2>6. Suivi des Commandes</h2>
              <p>Une fois votre commande expédiée, nous vous fournissons un numéro de suivi qui vous permet de suivre votre envoi en temps réel. Vous recevrez :</p>
              <ul>
                <li>Nom du transporteur et type de service</li>
                <li>Numéro de suivi unique</li>
                <li>Lien de suivi pour des mises à jour en temps réel</li>
                <li>Fenêtre de livraison estimée</li>
              </ul>
              <p>Nous vous recommandons de surveiller votre envoi et d'être disponible pour recevoir votre colis à son arrivée.</p>
            </div>

            <div className="shipping-section">
              <h2>7. Douanes et Droits d'Importation</h2>
              <p>En tant que grossiste international expédiant dans le monde entier, veuillez noter que :</p>
              <ul>
                <li>Les droits d'importation, taxes et frais de douane sont à la charge de l'acheteur</li>
                <li>Les délais de dédouanement varient selon les pays et peuvent affecter le délai de livraison</li>
                <li>Nous fournissons toute la documentation nécessaire pour faciliter un dédouanement fluide</li>
                <li>Veuillez vérifier auprès de votre bureau de douane local les frais applicables</li>
              </ul>
              <div className="info-box">
                <p><strong>🌍 Remarque sur l'Expédition Internationale :</strong> Les politiques douanières varient considérablement d'un pays à l'autre. Nous vous recommandons de consulter votre autorité douanière locale pour comprendre les frais ou exigences potentiels avant de passer votre commande.</p>
              </div>
            </div>

            <div className="shipping-section">
              <h2>8. Envois Endommagés ou Perdus</h2>
              <p>Dans le rare cas où votre envoi serait endommagé pendant le transport ou perdu, nous travaillerons avec le transporteur pour résoudre le problème. Veuillez noter :</p>
              <ul>
                <li>Inspectez votre colis immédiatement après la livraison</li>
                <li>Documentez tout dommage visible avec des photos</li>
                <li>Signalez tout problème dans les 7 jours suivant la livraison</li>
                <li>Nous vous assisterons dans le processus de réclamation</li>
              </ul>
              <p>Veuillez vous référer à notre <Link href="/fr/refund-policy" className="inline-link">Politique de Remboursement et de Retour</Link> pour plus de détails sur les articles endommagés.</p>
            </div>

            <div className="shipping-section">
              <h2>9. Expédition vers les Zones Reculées</h2>
              <p>Pour les envois vers des zones reculées ou moins accessibles, un délai de livraison supplémentaire peut être nécessaire. Nos transporteurs peuvent utiliser des partenaires locaux pour la livraison finale dans certaines régions. Nous vous informerons si des arrangements particuliers sont nécessaires pour votre emplacement.</p>
            </div>

            <div className="shipping-section">
              <h2>10. Contact pour les Demandes d'Expédition</h2>
              <p>Pour toute question concernant l'expédition ou pour discuter de vos besoins de livraison spécifiques, veuillez nous contacter :</p>
              <ul>
                <li><strong>WhatsApp :</strong> +90 551 952 24 48</li>
                <li><strong>Formulaire de contact :</strong> Disponible sur notre site Web</li>
              </ul>
              <p>Notre équipe est prête à vous aider avec des arrangements d'expédition personnalisés pour vos commandes en gros.</p>
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