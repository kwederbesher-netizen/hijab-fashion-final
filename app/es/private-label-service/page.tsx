'use client'

// app/es/private-label-service/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { 
  FaCrown, FaChartLine, FaStar, FaTag, FaTags, FaBox, FaPalette, 
  FaQuestionCircle, FaCheck, FaWhatsapp, FaArrowRight
} from 'react-icons/fa'

export default function PrivateLabelServiceSpanishPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Servicio Private Label 2026 | Crea Tu Propia Marca | Hijab Fashion Mall</title>
        <meta name="description" content="Crea tu propia marca de moda modesta con nuestro servicio Private Label completo. Etiquetas personalizadas, colgantes, packaging premium y m?s." />
        <meta name="keywords" content="private label hijab, etiquetas personalizadas, colgantes, packaging personalizado, mayorista turco, marca de moda modesta" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hijabfashionmall.com/es/private-label-service" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/private-label-service" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/private-label-service" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/private-label-service" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/private-label-service" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/private-label-service" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/private-label-service" />
        <link rel="alternate" hrefLang="x-default" href="https://hijabfashionmall.com/en/private-label-service" />
        <meta property="og:title" content="Servicio Private Label 2026 | Crea Tu Propia Marca" />
        <meta property="og:description" content="Crea tu propia marca de moda modesta con nuestro servicio Private Label completo." />
        <meta property="og:image" content="https://hijabfashionmall.com/images/private-label-intro.webp" />
        <meta property="og:url" content="https://hijabfashionmall.com/es/private-label-service" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --primary: #ff5a00; --primary-dark: #e04e00; --primary-soft: #fff0e6;
            --black: #000; --dark-gray: #1a1a1a; --medium-gray: #555;
            --light-gray: #f8f9fa; --border-gray: #e9ecef; --white: #fff;
            --whatsapp: #25d366;
            --shadow-md: 0 5px 20px rgba(0,0,0,0.08); --radius-md: 12px; --radius-lg: 20px;
        }
        body { font-family: 'Poppins', system-ui, sans-serif; color: var(--dark-gray); line-height: 1.6; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .btn-primary, .btn-whatsapp { display: inline-flex; align-items: center; gap: 10px; padding: 14px 32px; border-radius: 50px; text-decoration: none; font-weight: 600; transition: all 0.3s; }
        .btn-primary { background: var(--primary); color: white; }
        .btn-whatsapp { background: var(--whatsapp); color: white; }
        .section-title { text-align: center; font-size: 42px; margin-bottom: 16px; font-weight: 800; }
        .section-title span { color: var(--primary); }
        .section-subtitle { text-align: center; color: var(--medium-gray); font-size: 18px; max-width: 700px; margin: 0 auto 50px; }
        .page-header { background: linear-gradient(135deg, var(--primary-soft) 0%, var(--white) 100%); padding: 80px 0 60px; text-align: center; }
        .page-header h1 { font-size: 56px; color: var(--black); }
        .page-header h1 span { color: var(--primary); }
        .badge-2026 { display: inline-block; background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); color: white; padding: 6px 18px; border-radius: 50px; font-size: 14px; margin-bottom: 20px; }
        .intro-wrapper { display: flex; align-items: center; gap: 60px; }
        .intro-content { flex: 1; }
        .intro-content h2 { font-size: 40px; margin-bottom: 20px; }
        .intro-image { flex: 1; }
        .intro-image img { width: 100%; border-radius: var(--radius-lg); }
        .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 50px; }
        .why-card { background: white; padding: 40px 30px; border-radius: var(--radius-lg); text-align: center; box-shadow: var(--shadow-md); transition: all 0.3s; }
        .why-card:hover { transform: translateY(-10px); }
        .why-icon { width: 80px; height: 80px; background: var(--primary-soft); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; }
        .why-icon svg { font-size: 36px; color: var(--primary); }
        .services-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px; margin-top: 50px; }
        .service-item { display: flex; gap: 25px; padding: 32px; background: white; border-radius: var(--radius-md); box-shadow: var(--shadow-md); transition: all 0.3s; }
        .service-item:hover { transform: translateY(-5px); }
        .service-icon { width: 80px; height: 80px; background: var(--primary-soft); border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .service-icon svg { font-size: 36px; color: var(--primary); }
        .service-features { list-style: none; margin-top: 15px; }
        .service-features li { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; font-size: 14px; }
        .service-features li svg { color: var(--primary); }
        .process-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; margin-top: 50px; }
        .step-number { width: 80px; height: 80px; background: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 25px; font-size: 32px; font-weight: 800; color: var(--primary); border: 2px solid var(--primary); }
        .brand-section { background: linear-gradient(135deg, var(--black) 0%, #1a1a1a 100%); color: white; padding: 80px 0; text-align: center; }
        .brand-stats { display: flex; justify-content: center; gap: 60px; margin-top: 50px; flex-wrap: wrap; }
        .brand-stat .number { font-size: 48px; font-weight: 800; color: var(--primary); }
        .faq-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 50px; }
        .faq-item { background: white; border-radius: var(--radius-md); box-shadow: var(--shadow-md); overflow: hidden; }
        .faq-question { display: flex; justify-content: space-between; padding: 24px 28px; cursor: pointer; }
        .faq-question-left { display: flex; align-items: center; gap: 15px; }
        .faq-question-left svg { color: var(--primary); }
        .faq-answer { padding: 0 28px 24px; color: var(--medium-gray); display: none; border-top: 1px solid var(--border-gray); }
        .faq-answer.open { display: block; }
        .cta-section { background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); color: white; padding: 80px 0; text-align: center; }
        .cta-buttons { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-top: 32px; }
        .cta-btn-primary { background: white; color: var(--primary); padding: 16px 40px; border-radius: 50px; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 10px; }
        @media (max-width: 992px) {
            .intro-wrapper { flex-direction: column; text-align: center; }
            .why-grid { grid-template-columns: repeat(2, 1fr); }
            .services-grid { grid-template-columns: 1fr; }
            .process-steps { grid-template-columns: repeat(2, 1fr); }
            .faq-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
            .page-header h1 { font-size: 32px; }
            .section-title { font-size: 28px; }
            .why-grid { grid-template-columns: 1fr; }
            .process-steps { grid-template-columns: 1fr; }
            .brand-stats { flex-direction: column; gap: 30px; }
            .service-item { flex-direction: column; text-align: center; align-items: center; }
        }
      `}</style>

      <section className="page-header">
        <div className="container">
          <div className="breadcrumb"><Link href="/es">?? Inicio</Link> <span>&gt;</span> <span>? Servicio Private Label 2026</span></div>
          <h1><span>Servicio Private Label</span> 2026</h1>
          <p>Crea tu propia marca de moda modesta con nuestras soluciones completas.</p>
        </div>
      </section>

      <section className="service-intro">
        <div className="container">
          <div className="intro-wrapper">
            <div className="intro-content">
              <span className="badge-2026">? Edici?n 2026 | Calidad Turca</span>
              <h2>Crea <span>Tu Identidad de Marca Distintiva</span> en el Mercado de Moda Modesta</h2>
              <p className="lead">En el competitivo mercado de la moda actual, tener una identidad de marca distintiva ya no es opcional - es esencial para el  xito y la longevidad.</p>
              <p>Nuestro servicio Private Label completo te permite construir y expandir tu marca en el mercado del hijab sin las complejidades de la fabricaci?n. Proveemos productos turcos premium como lienzo en blanco para tu visi?n de marca.</p>
              <p>Ya sea que est s lanzando una nueva boutique, expandiendo un negocio existente o creando una colecci?n exclusiva, nuestra soluci?n Private Label te da la flexibilidad y calidad que necesitas para destacar.</p>
            </div>
            <div className="intro-image">
              <Image src="/images/private-label-intro.webp" alt="Servicio Private Label" width={500} height={400} priority onError={(e) => { const target = e.target as HTMLImageElement; target.src = '/images/fallback-private-label.webp'; }} />
            </div>
          </div>
        </div>
      </section>

      <section className="why-section">
        <div className="container">
          <h2 className="section-title">?Por Qu  <span>Private Label</span> en 2026?</h2>
          <div className="why-grid">
            <div className="why-card"><div className="why-icon"><FaCrown size={32} /></div><h3>Propiedad de Marca</h3><p>Construye una marca que poseas completamente.</p></div>
            <div className="why-card"><div className="why-icon"><FaChartLine size={32} /></div><h3>Crecimiento a Largo Plazo</h3><p>Crea lealtad de marca y clientes recurrentes.</p></div>
            <div className="why-card"><div className="why-icon"><FaStar size={32} /></div><h3>Posicionamiento Premium</h3><p>Posiciona tus productos a un nivel premium.</p></div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Nuestros <span>Servicios Private Label</span> Completos</h2>
          <div className="services-grid">
            <div className="service-item"><div className="service-icon"><FaTag size={36} /></div><div className="service-content"><h3>Etiquetas Tejidas Personalizadas</h3><p>Etiquetas tejidas de alta calidad con el nombre de tu marca.</p><ul className="service-features"><li><FaCheck size={14} /> Sat n tejido premium</li><li><FaCheck size={14} /> M?ltiples colores</li><li><FaCheck size={14} /> Tama?os personalizados</li></ul></div></div>
            <div className="service-item"><div className="service-icon"><FaTags size={36} /></div><div className="service-content"><h3>Colgantes Personalizados</h3><p>Colgantes profesionales que comunican la historia de tu marca.</p><ul className="service-features"><li><FaCheck size={14} /> Papel premium</li><li><FaCheck size={14} /> Grabado en relieve</li><li><FaCheck size={14} /> Formas personalizadas</li></ul></div></div>
            <div className="service-item"><div className="service-icon"><FaBox size={36} /></div><div className="service-content"><h3>Packaging Personalizado</h3><p>Crea una experiencia de unboxing completa.</p><ul className="service-features"><li><FaCheck size={14} /> Bolsas impresas</li><li><FaCheck size={14} /> Cajas personalizadas</li><li><FaCheck size={14} /> Opciones ecol?gicas</li></ul></div></div>
            <div className="service-item"><div className="service-icon"><FaPalette size={36} /></div><div className="service-content"><h3>Paquete de Branding Completo</h3><p>La soluci?n definitiva para constructores de marca serios.</p><ul className="service-features"><li><FaCheck size={14} /> Dise?o coordinado</li><li><FaCheck size={14} /> Precios por volumen</li><li><FaCheck size={14} /> Calidad constante</li></ul></div></div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Proceso <span>Simple de 4 Pasos</span></h2>
          <div className="process-steps">
            <div className="process-step"><div className="step-number">1</div><h3>Comparte Tu Visi?n</h3><p>Cont?ctanos con tu concepto de marca.</p></div>
            <div className="process-step"><div className="step-number">2</div><h3>Selecciona Productos</h3><p>Elige entre 5000+ art?culos turcos premium.</p></div>
            <div className="process-step"><div className="step-number">3</div><h3>Dise?o y Aprobaci?n</h3><p>Creamos maquetas digitales.</p></div>
            <div className="process-step"><div className="step-number">4</div><h3>Producci?n y Env?o</h3><p>Env?o mundial con seguimiento.</p></div>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="container">
          <h2>Construye una Marca <span>Que Perdura</span></h2>
          <div className="brand-stats">
            <div className="brand-stat"><div className="number">78%</div><div className="label">prefieren productos de marca</div></div>
            <div className="brand-stat"><div className="number">3.5x</div><div className="label">m?s retenci?n de clientes</div></div>
            <div className="brand-stat"><div className="number">40%+</div><div className="label">m?rgenes de beneficio m?s altos</div></div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Preguntas <span>Frecuentes</span></h2>
          <div className="faq-grid">
            <div className="faq-item"><div className="faq-question" onClick={() => toggleFaq(0)}><div className="faq-question-left"><FaQuestionCircle size={22} /><h3>?Cantidad m?nima de pedido?</h3></div><span className={`faq-icon ${openFaq === 0 ? 'open' : ''}`}>?</span></div><div className={`faq-answer ${openFaq === 0 ? 'open' : ''}`}>Ofrecemos opciones flexibles para negocios de todos los tama?os.</div></div>
            <div className="faq-item"><div className="faq-question" onClick={() => toggleFaq(1)}><div className="faq-question-left"><FaQuestionCircle size={22} /><h3>?Puedo mezclar productos?</h3></div><span className={`faq-icon ${openFaq === 1 ? 'open' : ''}`}>?</span></div><div className={`faq-answer ${openFaq === 1 ? 'open' : ''}`}>?Absolutamente! Cualquier combinaci?n de nuestro cat?logo.</div></div>
            <div className="faq-item"><div className="faq-question" onClick={() => toggleFaq(2)}><div className="faq-question-left"><FaQuestionCircle size={22} /><h3>?Duraci?n del proceso?</h3></div><span className={`faq-icon ${openFaq === 2 ? 'open' : ''}`}>?</span></div><div className={`faq-answer ${openFaq === 2 ? 'open' : ''}`}>Producci?n 2-3 semanas, entrega 3-7 d?as.</div></div>
            <div className="faq-item"><div className="faq-question" onClick={() => toggleFaq(3)}><div className="faq-question-left"><FaQuestionCircle size={22} /><h3>?Ayuda con dise?o?</h3></div><span className={`faq-icon ${openFaq === 3 ? 'open' : ''}`}>?</span></div><div className={`faq-answer ${openFaq === 3 ? 'open' : ''}`}>?S?! Nuestro equipo ofrece asesor?a de dise?o.</div></div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>?Listo para Construir Tu Marca?</h2>
          <p>Cont?ctanos hoy para discutir tu visi?n.</p>
          <div className="cta-buttons">
            <a href="https://wa.me/905519522448" className="btn-whatsapp" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={20} /> WhatsApp</a>
            <Link href="/es/contact" className="cta-btn-primary">Cont?ctanos <FaArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
