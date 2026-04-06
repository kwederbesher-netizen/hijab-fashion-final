// app/fr/why-were-number-one/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { 
  FaCalendarAlt, FaClock, FaTag, FaGlobe,
  FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaTelegramPlane, FaPinterestP
} from 'react-icons/fa'

export default function WhyWereNumberOnePageFr() {
  return (
    <>
      <Head>
        <title>Notre position dans le hijab turc en gros | Hijab Fashion Mall</title>
        <meta name="description" content="Hijab Fashion Mall est un fournisseur reconnu dans le hijab turc en gros. Produits de qualité, service client et années d'expérience." />
        <meta name="keywords" content="hijab turc en gros, fournisseur de confiance, Hijab Fashion Mall, vêtements pour hijabis turcs" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/fr/why-were-number-one" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/why-were-number-one" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/why-were-number-one" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/why-were-number-one" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/why-were-number-one" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/why-were-number-one" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/why-were-number-one" />
        <meta property="og:title" content="Notre position dans le hijab turc en gros | Hijab Fashion Mall" />
        <meta property="og:description" content="Hijab Fashion Mall est un fournisseur reconnu dans le hijab turc en gros." />
        <meta property="og:image" content="https://hijabfashionmall.com/images/celebration-global-rank.webp" />
        <meta property="og:url" content="https://hijabfashionmall.com/fr/why-were-number-one" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Notre position dans le hijab turc en gros" />
        <meta name="twitter:description" content="Hijab Fashion Mall est un fournisseur reconnu dans le hijab turc en gros." />
        <meta name="twitter:image" content="https://hijabfashionmall.com/images/celebration-global-rank.webp" />
      </Head>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Poppins', sans-serif; color: #333; line-height: 1.6; background: #fff; }
        :root {
          --primary: #ff5a00;
          --primary-dark: #e04e00;
          --primary-light: #ff7b33;
          --primary-soft: #fff0e6;
          --black: #000000;
          --dark-gray: #222;
          --medium-gray: #555;
          --light-gray: #f5f5f5;
          --white: #fff;
          --whatsapp: #25d366;
          --telegram: #0088cc;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .btn {
          display: inline-block;
          background: var(--primary);
          color: var(--white);
          padding: 14px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(255, 90, 0, 0.2);
        }
        .btn:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 90, 0, 0.3);
        }
        .page-header {
          background: linear-gradient(135deg, var(--primary-soft) 0%, #ffffff 100%);
          padding: 60px 0 40px;
          text-align: center;
          border-bottom: 1px solid #eee;
          position: relative;
          overflow: hidden;
        }
        .page-header::before {
          content: 'CONFIANCE';
          position: absolute;
          top: 20%;
          right: 5%;
          font-size: 180px;
          font-weight: 800;
          color: rgba(255, 90, 0, 0.03);
          z-index: 0;
        }
        .page-header .container { position: relative; z-index: 1; }
        .page-header h1 { font-size: 48px; color: var(--black); margin-bottom: 20px; font-weight: 800; line-height: 1.3; }
        .page-header h1 span { color: var(--primary); position: relative; display: inline-block; }
        .page-header h1 span::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 8px;
          background: rgba(255, 90, 0, 0.2);
          z-index: -1;
        }
        .meta-info {
          display: flex;
          justify-content: center;
          gap: 30px;
          color: var(--medium-gray);
          font-size: 15px;
          margin-top: 20px;
          flex-wrap: wrap;
        }
        .meta-info svg { color: var(--primary); margin-right: 5px; vertical-align: middle; }
        .breadcrumb { font-size: 14px; color: var(--medium-gray); margin-bottom: 20px; }
        .breadcrumb a { color: var(--primary); text-decoration: none; margin: 0 5px; }
        .breadcrumb a:hover { text-decoration: underline; }
        .breadcrumb span { margin: 0 5px; }
        .article-content { padding: 60px 0; background: var(--white); }
        .article-wrapper { max-width: 800px; margin: 0 auto; }
        .featured-image { width: 100%; border-radius: 20px; overflow: hidden; margin-bottom: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .featured-image img { width: 100%; height: auto; display: block; }
        .article-content h2 { font-size: 32px; color: var(--black); margin: 40px 0 20px; font-weight: 700; }
        .article-content h2:first-of-type { margin-top: 0; }
        .article-content h3 { font-size: 24px; color: var(--black); margin: 30px 0 15px; font-weight: 600; }
        .article-content p { color: var(--medium-gray); margin-bottom: 20px; font-size: 16px; line-height: 1.8; }
        .article-content p.lead { font-size: 18px; font-weight: 500; color: var(--dark-gray); }
        .article-content ul, .article-content ol { margin: 20px 0 30px; padding-left: 20px; }
        .article-content li { color: var(--medium-gray); margin-bottom: 10px; font-size: 16px; line-height: 1.7; }
        .article-content li strong { color: var(--primary); }
        .article-content blockquote {
          background: var(--primary-soft);
          padding: 30px;
          border-radius: 15px;
          margin: 40px 0;
          border-left: 4px solid var(--primary);
          font-style: italic;
          font-size: 18px;
          color: var(--dark-gray);
        }
        .highlight-box {
          background: linear-gradient(135deg, var(--primary-soft) 0%, #ffffff 100%);
          padding: 30px;
          border-radius: 15px;
          margin: 40px 0;
          border: 1px solid rgba(255,90,0,0.2);
        }
        .highlight-box h4 { color: var(--primary); margin-bottom: 15px; font-size: 20px; }
        .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 40px 0; }
        .stat-item { text-align: center; padding: 20px; background: var(--white); border-radius: 10px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); border: 1px solid #eee; }
        .stat-number { font-size: 36px; font-weight: 800; color: var(--primary); margin-bottom: 5px; }
        .stat-label { color: var(--medium-gray); font-size: 14px; }
        .country-list { display: flex; flex-wrap: wrap; gap: 10px; margin: 20px 0; justify-content: center; }
        .country-tag { background: var(--light-gray); color: var(--medium-gray); padding: 8px 16px; border-radius: 50px; font-size: 14px; border: 1px solid #eee; display: inline-flex; align-items: center; gap: 8px; }
        .country-tag svg { color: var(--primary); font-size: 14px; }
        .cta-box {
          background: var(--black);
          color: var(--white);
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          margin: 50px 0;
        }
        .cta-box h3 { color: var(--white); margin-bottom: 15px; }
        .cta-box p { color: rgba(255,255,255,0.8); margin-bottom: 25px; }
        .share-section { margin: 50px 0; padding: 30px 0; border-top: 1px solid #eee; border-bottom: 1px solid #eee; }
        .share-section h4 { margin-bottom: 20px; color: var(--black); text-align: center; }
        .share-buttons { display: flex; gap: 15px; justify-content: center; flex-wrap: wrap; }
        .share-btn {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: transform 0.3s;
        }
        .share-btn:hover { transform: translateY(-3px); }
        .share-btn.facebook { background: #1877f2; }
        .share-btn.twitter { background: #1da1f2; }
        .share-btn.linkedin { background: #0077b5; }
        .share-btn.whatsapp { background: var(--whatsapp); }
        .share-btn.telegram { background: var(--telegram); }
        .share-btn.pinterest { background: #bd081c; }
        .related-posts { padding: 60px 0; background: var(--light-gray); }
        .related-title { text-align: center; font-size: 28px; margin-bottom: 40px; font-weight: 700; }
        .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .related-card { background: var(--white); border-radius: 10px; overflow: hidden; box-shadow: 0 5px 20px rgba(0,0,0,0.05); transition: transform 0.3s; }
        .related-card:hover { transform: translateY(-5px); }
        .related-image { height: 150px; overflow: hidden; }
        .related-image img { width: 100%; height: 100%; object-fit: cover; }
        .related-content { padding: 20px; }
        .related-content h4 { font-size: 16px; margin-bottom: 10px; }
        .related-content h4 a { color: var(--black); text-decoration: none; transition: color 0.3s; }
        .related-content h4 a:hover { color: var(--primary); }
        .related-meta { font-size: 13px; color: var(--medium-gray); }
        @media (max-width: 992px) {
          .related-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .page-header h1 { font-size: 36px; }
          .related-grid { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: 1fr; }
          .article-content h2 { font-size: 28px; }
          .article-content h3 { font-size: 22px; }
        }
      `}</style>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/fr">Accueil</Link> <span>&gt;</span> <span>Pourquoi nous choisir</span>
          </div>
          <h1>Hijab Fashion Mall: Un <span>nom de confiance</span> dans le hijab turc en gros</h1>
          <p className="lead">Comment nous sommes devenus un fournisseur fiable pour les détaillants du monde entier</p>
          <div className="meta-info">
            <span><FaCalendarAlt size={14} /> 13 mars 2026</span>
            <span><FaClock size={14} /> 6 min de lecture</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="article-content">
        <div className="container">
          <div className="article-wrapper">
            <div className="featured-image">
              <Image 
                src="/images/celebration-global-rank.webp" 
                alt="Hijab Fashion Mall - Fournisseur de hijab turc fiable" 
                width={800} 
                height={450} 
                priority
              />
            </div>

            <p className="lead">Au fil des années, <strong>Hijab Fashion Mall</strong> est devenu un nom reconnu dans le hijab turc en gros. Grâce à une qualité constante et un service fiable, nous avons gagné la confiance des détaillants dans de nombreux pays.</p>

            <div className="highlight-box">
              <h4>🏆 Mots-clés pour lesquels nous sommes bien positionnés :</h4>
              <div className="country-list">
                <span className="country-tag"><FaTag size={12} /> Hijab turc en gros</span>
                <span className="country-tag"><FaTag size={12} /> Vêtements pour hijabis turcs</span>
                <span className="country-tag"><FaTag size={12} /> Vêtements hijabis en gros</span>
                <span className="country-tag"><FaTag size={12} /> Abayas turques en gros</span>
                <span className="country-tag"><FaTag size={12} /> Robes pour hijabis Turquie</span>
                <span className="country-tag"><FaTag size={12} /> Fournisseur hijab turc</span>
              </div>
            </div>

            <h2>Merci à nos clients</h2>
            <p>Nous tenons à exprimer notre sincère gratitude à nos clients du monde entier. Votre confiance et votre fidélité nous ont aidés à grandir et à améliorer nos services. Nous ne prétendons pas être parfaits, mais nous faisons de notre mieux chaque jour.</p>

            <div className="stats-grid">
              <div className="stat-item"><div className="stat-number">4.8/5</div><div className="stat-label">Avis clients</div></div>
              <div className="stat-item"><div className="stat-number">3000+</div><div className="stat-label">Produits</div></div>
              <div className="stat-item"><div className="stat-number">40+</div><div className="stat-label">Pays desservis</div></div>
            </div>

            <h2>Ce sur quoi nous nous concentrons</h2>
            <p>Nous avons travaillé dur pour construire une entreprise sur laquelle les détaillants peuvent compter. Voici nos priorités :</p>

            <h3>1. Qualité des produits</h3>
            <p>Nous nous approvisionnons auprès de fabricants turcs de confiance qui partagent notre engagement envers la qualité. Chaque article passe par des contrôles de qualité de base avant expédition.</p>

            <h3>2. Service client</h3>
            <p>Notre équipe de support est disponible via WhatsApp pour répondre aux questions, aider avec les commandes et fournir une assistance en cas de besoin. Nous croyons en une communication claire.</p>

            <h3>3. Pratiques commerciales honnêtes</h3>
            <p>Nous sommes transparents sur nos prix, nos délais de livraison et nos politiques. Notre politique "sans minimum de commande" permet aux petites boutiques d'accéder aux produits turcs sans pression.</p>

            <h3>4. Site web convivial</h3>
            <p>Nous avons construit un site web facile à naviguer, qui fonctionne bien sur mobile et supporte plusieurs langues. Nous continuons à nous améliorer grâce aux retours de nos clients.</p>

            <blockquote>
              "Je travaille avec Hijab Fashion Mall depuis deux ans. La qualité est constante et leur équipe est réactive quand j'ai des questions. Un partenaire fiable pour ma boutique." — Sarah, propriétaire de boutique
            </blockquote>

            <h2>Où nous livrons</h2>
            <p>Nous livrons actuellement dans de nombreux pays, y compris <strong>les États-Unis, le Canada, le Royaume-Uni, l'Europe et l'Australie</strong>.</p>

            <div className="country-list">
              <span className="country-tag"><FaGlobe size={14} /> États-Unis</span>
              <span className="country-tag"><FaGlobe size={14} /> Canada</span>
              <span className="country-tag"><FaGlobe size={14} /> Royaume-Uni</span>
              <span className="country-tag"><FaGlobe size={14} /> Allemagne</span>
              <span className="country-tag"><FaGlobe size={14} /> France</span>
              <span className="country-tag"><FaGlobe size={14} /> Italie</span>
              <span className="country-tag"><FaGlobe size={14} /> Belgique</span>
              <span className="country-tag"><FaGlobe size={14} /> Suède</span>
              <span className="country-tag"><FaGlobe size={14} /> Autriche</span>
              <span className="country-tag"><FaGlobe size={14} /> Espagne</span>
              <span className="country-tag"><FaGlobe size={14} /> Portugal</span>
              <span className="country-tag"><FaGlobe size={14} /> Suisse</span>
              <span className="country-tag"><FaGlobe size={14} /> Australie</span>
              <span className="country-tag"><FaGlobe size={14} /> Arabie Saoudite</span>
              <span className="country-tag"><FaGlobe size={14} /> Émirats Arabes Unis</span>
              <span className="country-tag"><FaGlobe size={14} /> Koweït</span>
              <span className="country-tag"><FaGlobe size={14} /> Qatar</span>
            </div>

            <div className="cta-box">
              <h3>Intéressé par nos produits ?</h3>
              <p>Parcourez notre catalogue de hijab turc et voyez si nous sommes le bon partenaire pour votre boutique.</p>
              <Link href="/fr/catalog" className="btn">Parcourir le catalogue</Link>
            </div>

            <div className="share-section">
              <h4>Partager cet article</h4>
              <div className="share-buttons">
                <a href="#" className="share-btn facebook" onClick={(e) => { e.preventDefault(); window.open('https://www.facebook.com/sharer/sarer.php?u='+encodeURIComponent(window.location.href), '_blank'); }}><FaFacebookF size={18} /></a>
                <a href="#" className="share-btn twitter" onClick={(e) => { e.preventDefault(); window.open('https://twitter.com/intent/tweet?text=Hijab%20Fashion%20Mall%20-%20Fournisseur%20de%20confiance&url='+encodeURIComponent(window.location.href), '_blank'); }}><FaTwitter size={18} /></a>
                <a href="#" className="share-btn linkedin" onClick={(e) => { e.preventDefault(); window.open('https://www.linkedin.com/sharing/share-offsite/?url='+encodeURIComponent(window.location.href), '_blank'); }}><FaLinkedinIn size={18} /></a>
                <a href="#" className="share-btn whatsapp" onClick={(e) => { e.preventDefault(); window.open('https://wa.me/?text='+encodeURIComponent('Hijab Fashion Mall: '+window.location.href), '_blank'); }}><FaWhatsapp size={18} /></a>
                <a href="#" className="share-btn telegram" onClick={(e) => { e.preventDefault(); window.open('https://t.me/share/url?url='+encodeURIComponent(window.location.href)+'&text=Hijab%20Fashion%20Mall', '_blank'); }}><FaTelegramPlane size={18} /></a>
                <a href="#" className="share-btn pinterest" onClick={(e) => { e.preventDefault(); window.open('https://pinterest.com/pin/create/button/?url='+encodeURIComponent(window.location.href), '_blank'); }}><FaPinterestP size={18} /></a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="related-posts">
        <div className="container">
          <h3 className="related-title">Vous pourriez aussi aimer</h3>
          <div className="related-grid">
            <div className="related-card">
              <div className="related-image">
                <Image src="/images/complete-guide-thumb.webp" alt="Guide des abayas turques" width={300} height={150} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = '/images/default.webp' }} />
              </div>
              <div className="related-content">
                <h4><Link href="/fr/complete-guide-turkish-abayas">Guide des abayas turques : types et tissus</Link></h4>
                <div className="related-meta">5 mars 2026</div>
              </div>
            </div>
            <div className="related-card">
              <div className="related-image">
                <Image src="/images/wholesale-tips-thumb.webp" alt="Conseils d'achat en gros" width={300} height={150} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = '/images/default.webp' }} />
              </div>
              <div className="related-content">
                <h4><Link href="/fr/wholesale-buying-tips-boutique-owners">Conseils d'achat en gros pour boutiques</Link></h4>
                <div className="related-meta">28 février 2026</div>
              </div>
            </div>
            <div className="related-card">
              <div className="related-image">
                <Image src="/images/chiffon-hijab-guide-thumb.webp" alt="Guide du hijab en mousseline" width={300} height={150} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = '/images/default.webp' }} />
              </div>
              <div className="related-content">
                <h4><Link href="/fr/chiffon-hijab-ultimate-guide">Guide du hijab en mousseline : types et entretien</Link></h4>
                <div className="related-meta">20 février 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}