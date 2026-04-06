'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { 
  FaStore, FaGlobe, FaTshirt, FaCalendarAlt, 
  FaBoxes, FaBan, FaCertificate, FaHeadset, FaTag, FaShippingFast,
  FaQuoteRight
} from 'react-icons/fa'

export default function AboutPageFr() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).updateCartCount) {
      (window as any).updateCartCount()
    }
  }, [])

  return (
    <>
      <Head>
        <title>À propos - Hijab Fashion Mall | Grossiste Mode Turque</title>
        <meta name="description" content="Depuis 2019, Hijab Fashion Mall connecte les détaillants du monde entier avec des vêtements hijab turcs authentiques. Pas de minimum de commande, livraison mondiale, 5000+ produits." />
        <meta name="keywords" content="grossiste hijab turc, mode turque, fournisseur hijab istanbul" />
        <link rel="canonical" href="https://hijabfashionmall.com/fr/about-us" />
      </Head>

      <div dir="ltr">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <div className="container">
            <ul>
              <li><Link href="/fr">Accueil</Link></li>
              <li className="active">À propos</li>
            </ul>
          </div>
        </div>

        {/* Page Header */}
        <section className="page-header">
          <div className="container">
            <h1>À propos de Hijab Fashion Mall</h1>
            <p>Votre partenaire de confiance pour les vêtements hijab turcs premium depuis 2019. Nous connectons les détaillants du monde entier avec la mode turque authentique.</p>
          </div>
        </section>

        {/* About Section - No Image */}
        <section className="about-section">
          <div className="container">
            <div className="about-content-full">
              <h2>Qui sommes-nous</h2>
              <p>Hijab Fashion Mall est une entreprise de gros turque basée à Istanbul, spécialisée dans les vêtements hijab premium et la mode turque. Depuis notre création en 2019, nous nous engageons à aider les détaillants et les boutiques du monde entier à s'approvisionner en produits turcs authentiques auprès des meilleurs fabricants.</p>
              
              <p>Nous travaillons avec les meilleurs fabricants turcs pour vous offrir des produits de haute qualité à des prix compétitifs, en mettant l'accent sur le confort de nos clients et en vous garantissant la meilleure valeur pour votre argent.</p>
              
              <div className="about-highlight">
                <p><FaQuoteRight /> "Nous ne vendons pas seulement des produits ; nous construisons des partenariats à long terme avec nos clients. Votre succès est notre succès."</p>
              </div>
              
              <p>Avec plus de 5000 produits répartis en 9 catégories, nous offrons tout, des abayas élégantes aux vêtements de sport modernes, le tout fabriqué en Turquie avec les meilleurs matériaux et savoir-faire.</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon"><FaStore /></div>
                <div className="stat-number">250+</div>
                <div className="stat-label">Marques</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaGlobe /></div>
                <div className="stat-number">50+</div>
                <div className="stat-label">Pays</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaTshirt /></div>
                <div className="stat-number">5000+</div>
                <div className="stat-label">Produits</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaCalendarAlt /></div>
                <div className="stat-number">2019</div>
                <div className="stat-label">Fondée</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <h2 className="section-title">Ce que nous offrons</h2>
            <p className="section-subtitle">Des services conçus pour aider votre entreprise à se développer</p>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon"><FaBoxes /></div>
                <h3>Mélangez votre commande</h3>
                <p>Combinez différents produits dans un seul envoi. Commandez exactement ce dont vous avez besoin dans plusieurs catégories.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaBan /></div>
                <h3>Pas de commande minimum</h3>
                <p>Commencez avec n'importe quelle quantité. Parfait pour les petites boutiques comme pour les grands détaillants.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaCertificate /></div>
                <h3>100% Original Fabriqué en Turquie</h3>
                <p>Produits authentiques directement des fabricants turcs. Pas de copies ni d'imitations.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaHeadset /></div>
                <h3>Support client 24/7</h3>
                <p>Nous sommes toujours là pour vous aider avec vos commandes, demandes et assistance personnelle.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaTag /></div>
                <h3>Service de marque privée</h3>
                <p>Créez votre propre marque avec un emballage personnalisé et des designs exclusifs pour les commandes régulières.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaShippingFast /></div>
                <h3>Livraison mondiale</h3>
                <p>Livraison rapide dans plus de 50 pays via des transporteurs fiables avec suivi disponible.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="container">
            <div className="mission-content">
              <h2>Notre mission</h2>
              <p>Rendre la mode turque premium accessible aux détaillants du monde entier, sans les complexités de l'approvisionnement international. Nous sommes là pour être votre partenaire de confiance, garantissant qualité, fiabilité et succès pour votre entreprise.</p>
            </div>
          </div>
        </section>

      </div>

      <style>{`
        .breadcrumb { padding: 20px 0; background: #f5f5f5; border-bottom: 1px solid #eee; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .breadcrumb ul { list-style: none; display: flex; flex-wrap: wrap; gap: 10px; }
        .breadcrumb li { font-size: 14px; color: #555; }
        .breadcrumb li:not(:last-child):after { content: "›"; margin-left: 10px; color: #555; }
        .breadcrumb a { color: #555; text-decoration: none; transition: color 0.3s; }
        .breadcrumb a:hover { color: #ff5a00; }
        .breadcrumb .active { color: #222; font-weight: 600; }

        .page-header { background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%); padding: 60px 0; text-align: center; border-bottom: 1px solid #eee; }
        .page-header h1 { font-size: 48px; color: #222; margin-bottom: 20px; font-weight: 700; }
        .page-header p { font-size: 18px; color: #555; max-width: 800px; margin: 0 auto; }

        .about-section { padding: 80px 0; }
        .about-content-full { max-width: 900px; margin: 0 auto; text-align: center; }
        .about-content-full h2 { font-size: 36px; color: #222; margin-bottom: 30px; font-weight: 700; }
        .about-content-full p { font-size: 16px; color: #555; line-height: 1.8; margin-bottom: 20px; text-align: justify; }
        .about-highlight { background: #f5f5f5; padding: 30px; border-radius: 15px; margin: 30px 0; border-left: 4px solid #ff5a00; text-align: center; }
        .about-highlight p { margin-bottom: 0; font-size: 18px; font-weight: 500; color: #222; display: flex; align-items: center; justify-content: center; gap: 10px; text-align: center; }
        .about-highlight svg { color: #ff5a00; font-size: 24px; flex-shrink: 0; }

        .stats-section { padding: 60px 0; background: #f5f5f5; }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; text-align: center; }
        .stat-card { background: #fff; padding: 40px 20px; border-radius: 15px; transition: transform 0.3s; }
        .stat-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(255, 90, 0, 0.1); }
        .stat-icon { width: 80px; height: 80px; margin: 0 auto 20px; background: rgba(255, 90, 0, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; color: #ff5a00; }
        .stat-number { font-size: 36px; font-weight: 700; color: #222; margin-bottom: 10px; }
        .stat-label { font-size: 16px; color: #555; }

        .services-section { padding: 80px 0; }
        .section-title { text-align: center; font-size: 36px; color: #222; margin-bottom: 15px; font-weight: 700; }
        .section-subtitle { text-align: center; color: #555; margin-bottom: 40px; font-size: 18px; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 40px; }
        .service-card { background: #fff; padding: 40px 30px; border-radius: 15px; text-align: center; transition: transform 0.3s; border: 1px solid rgba(0,0,0,0.02); }
        .service-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(255, 90, 0, 0.1); }
        .service-icon { width: 80px; height: 80px; margin: 0 auto 20px; background: rgba(255, 90, 0, 0.05); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; color: #ff5a00; transition: all 0.3s; }
        .service-card:hover .service-icon { background: #ff5a00; color: #fff; }
        .service-card h3 { font-size: 20px; font-weight: 700; color: #222; margin-bottom: 15px; }
        .service-card p { font-size: 14px; color: #555; line-height: 1.6; }

        .mission-section { padding: 60px 0; background: linear-gradient(135deg, #ff5a00 0%, #e04e00 100%); color: white; }
        .mission-content { text-align: center; max-width: 800px; margin: 0 auto; }
        .mission-content h2 { font-size: 36px; margin-bottom: 20px; color: white; }
        .mission-content p { font-size: 18px; line-height: 1.8; margin-bottom: 30px; opacity: 0.9; }

        @media (max-width: 992px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .about-content-full { padding: 0 20px; }
        }

        @media (max-width: 768px) {
          .page-header h1 { font-size: 32px; }
          .stats-grid { grid-template-columns: 1fr; }
          .services-grid { grid-template-columns: 1fr; }
          .about-content-full h2 { font-size: 28px; }
          .about-highlight p { font-size: 16px; flex-direction: column; }
        }
      `}</style>
    </>
  )
}