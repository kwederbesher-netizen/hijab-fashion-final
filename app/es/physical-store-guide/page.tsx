// app/es/physical-store-guide/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { 
  FaCalendarAlt, FaClock, FaChevronRight, FaWhatsapp, 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaTelegramPlane, FaPinterest,
  FaCheckCircle, FaCheck, FaStore, FaMapMarkerAlt, FaUsers,
  FaChartLine, FaTags, FaRegCreditCard, FaLightbulb, FaShoppingBag,
  FaBoxes, FaGavel, FaUserTie, FaMobileAlt, FaBullhorn, FaRibbon
} from 'react-icons/fa'

export default function PhysicalStoreGuideSpanishPage() {
  const [isTocOpen, setIsTocOpen] = useState(false)

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(anchor.hash)
        if (element) element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    document.addEventListener('click', handleAnchorClick)
    return () => document.removeEventListener('click', handleAnchorClick)
  }, [])

  return (
    <>
      <Head>
        <title>Cómo Abrir una Tienda de Ropa Física en 2026 | Guía Completa | Hijab Fashion Mall</title>
        <meta name="description" content="Una guía completa paso a paso para abrir y hacer crecer una boutique de moda exitosa en 2026." />
        <meta name="keywords" content="tienda de ropa física, abrir tienda minorista, boutique de moda, tienda física, guía tienda de ropa 2026" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/es/physical-store-guide" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/physical-store-guide" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/physical-store-guide" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/physical-store-guide" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/physical-store-guide" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/physical-store-guide" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/physical-store-guide" />
        <meta property="og:title" content="Cómo Abrir una Tienda de Ropa Física en 2026 | Guía Completa" />
        <meta property="og:description" content="Guía completa para abrir una boutique de moda exitosa." />
        <meta property="og:image" content="https://hijabfashionmall.com/images/physical-clothing-store-guide.webp" />
        <meta property="og:url" content="https://hijabfashionmall.com/es/physical-store-guide" />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="es_ES" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --primary: #ff5a00; --primary-dark: #e04e00; --primary-soft: #fff0e6;
            --black: #000; --dark-gray: #1a1a1a; --medium-gray: #555;
            --light-gray: #f8f9fa; --white: #fff; --whatsapp: #25d366;
            --shadow-md: 0 5px 20px rgba(0,0,0,0.08); --radius-md: 12px;
        }
        body { font-family: 'Poppins', system-ui, sans-serif; color: var(--dark-gray); line-height: 1.6; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .btn-primary { display: inline-flex; align-items: center; gap: 10px; background: var(--primary); color: white; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-weight: 600; }
        .btn-whatsapp { display: inline-flex; align-items: center; gap: 10px; background: var(--whatsapp); color: white; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-weight: 600; }
        .page-header { background: linear-gradient(135deg, var(--primary-soft) 0%, var(--white) 100%); padding: 80px 0 60px; text-align: center; }
        .page-header h1 { font-size: 52px; color: var(--black); }
        .page-header h1 span { color: var(--primary); }
        .meta-info { display: flex; justify-content: center; gap: 32px; margin-top: 24px; flex-wrap: wrap; }
        .article-content { padding: 60px 0 80px; }
        .article-wrapper { max-width: 860px; margin: 0 auto; }
        .featured-image { border-radius: 20px; overflow: hidden; margin-bottom: 48px; }
        .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin: 48px 0; }
        .stat-item { text-align: center; padding: 28px; background: white; border-radius: var(--radius-md); box-shadow: var(--shadow-md); }
        .stat-number { font-size: 42px; font-weight: 800; color: var(--primary); }
        .checklist { list-style: none; padding: 0; }
        .checklist li { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 16px; }
        .checklist svg { color: var(--primary); font-size: 20px; }
        .tip-box { background: #e8f5e9; padding: 28px; border-radius: var(--radius-md); margin: 32px 0; border-left: 5px solid #28a745; }
        .tags { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin: 24px 0; }
        .tag { background: var(--light-gray); padding: 8px 18px; border-radius: 50px; display: inline-flex; align-items: center; gap: 8px; }
        .toc { background: var(--light-gray); padding: 32px; border-radius: var(--radius-md); margin: 32px 0; }
        .toc ul { display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; list-style: none; }
        .cta-box { background: linear-gradient(135deg, var(--dark-gray) 0%, #2d2d2d 100%); color: white; padding: 48px; border-radius: 20px; text-align: center; margin: 56px 0; }
        .share-buttons { display: flex; gap: 16px; justify-content: center; }
        .share-btn { width: 48px; height: 48px; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; cursor: pointer; border: none; }
        .share-btn.facebook { background: #1877f2; }
        .share-btn.twitter { background: #1da1f2; }
        .share-btn.linkedin { background: #0077b5; }
        .share-btn.whatsapp { background: var(--whatsapp); }
        @media (max-width: 768px) {
            .page-header h1 { font-size: 32px; }
            .stats-grid { grid-template-columns: 1fr; }
            .toc ul { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/es">🏠 Inicio</Link> <span>&gt;</span> <Link href="/es/blogs">📝 Blog</Link> <span>&gt;</span> <span>🏬 Tienda Física 2026</span>
          </div>
          <h1>Cómo Abrir una <span>Tienda de Ropa</span> Física en 2026</h1>
          <p>Una guía completa paso a paso para abrir una boutique de moda exitosa</p>
          <div className="meta-info">
            <span><FaCalendarAlt size={14} /> 15 de Marzo de 2026</span>
            <span><FaClock size={14} /> 16 min de lectura</span>
          </div>
        </div>
      </section>

      <article className="article-content">
        <div className="container">
          <div className="article-wrapper">
            <div className="featured-image">
              <Image src="/images/physical-clothing-store-guide.webp" alt="Tienda de Ropa Física 2026" width={800} height={450} priority />
            </div>

            <p className="lead">A pesar del crecimiento del comercio electrónico, las tiendas físicas están lejos de estar muertas. El comercio minorista está experimentando un renacimiento a medida que los consumidores buscan experiencias de compra tangibles y servicio personalizado.</p>

            <div className="toc">
              <h3>📋 Tabla de Contenidos</h3>
              <ul>
                <li><a href="#introduction"><FaChevronRight size={10} /> Introducción</a></li>
                <li><a href="#retail-concept"><FaChevronRight size={10} /> 1. Desarrolle su Concepto</a></li>
                <li><a href="#business-plan"><FaChevronRight size={10} /> 2. Plan de Negocios</a></li>
                <li><a href="#location"><FaChevronRight size={10} /> 3. Elija la Ubicación</a></li>
                <li><a href="#sourcing"><FaChevronRight size={10} /> 4. Marca Privada</a></li>
                <li><a href="#conclusion"><FaChevronRight size={10} /> Conclusión</a></li>
              </ul>
            </div>

            <h2 id="introduction">El Panorama Minorista Físico en 2026</h2>
            <div className="stats-grid">
              <div className="stat-item"><div className="stat-number">72%</div><div className="stat-label">Prefieren Tiendas Físicas</div></div>
              <div className="stat-item"><div className="stat-number">85%</div><div className="stat-label">de las Ventas Minoristas</div></div>
              <div className="stat-item"><div className="stat-number">$5T+</div><div className="stat-label">Mercado Global</div></div>
            </div>

            <div className="tip-box">
              <strong>💡 Consejo Pro:</strong> Las boutiques más exitosas tienen un claro "por qué". No intentes ser todo para todos.
            </div>

            <h2 id="sourcing">4. La Ventaja de la Marca Privada</h2>
            <ul className="checklist">
              <li><FaCheckCircle size={18} /> <strong>Distinción de Marca:</strong> Productos exclusivos</li>
              <li><FaCheckCircle size={18} /> <strong>Mayores Márgenes:</strong> 50-60% de margen</li>
              <li><FaCheckCircle size={18} /> <strong>Lealtad del Cliente:</strong> Los clientes vuelven</li>
            </ul>

            <div className="cta-box">
              <h3>¿Listo para Abrir tu Tienda de Ensueño?</h3>
              <p>Contáctenos para más información sobre nuestros servicios de marca privada.</p>
              <div className="share-buttons">
                <a href="https://wa.me/905519522448" className="btn-whatsapp" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={18} /> WhatsApp</a>
                <Link href="/es/contact" className="btn-primary">Contáctenos</Link>
              </div>
            </div>

            <div className="share-section">
              <h4>Comparte esta Guía</h4>
              <div className="share-buttons">
                <button className="share-btn facebook" onClick={() => window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(window.location.href), '_blank')}><FaFacebookF size={18} /></button>
                <button className="share-btn twitter" onClick={() => window.open('https://twitter.com/intent/tweet?text='+encodeURIComponent('Tienda de Ropa Física 2026')+'&url='+encodeURIComponent(window.location.href), '_blank')}><FaTwitter size={18} /></button>
                <button className="share-btn linkedin" onClick={() => window.open('https://www.linkedin.com/sharing/share-offsite/?url='+encodeURIComponent(window.location.href), '_blank')}><FaLinkedinIn size={18} /></button>
                <button className="share-btn whatsapp" onClick={() => window.open('https://wa.me/?text='+encodeURIComponent('Tienda de Ropa Física 2026: '+window.location.href), '_blank')}><FaWhatsapp size={18} /></button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}