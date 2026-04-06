// app/es/why-were-number-one/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { 
  FaCalendarAlt, FaClock, FaTag, FaGlobe,
  FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp, FaTelegramPlane, FaPinterestP
} from 'react-icons/fa'

export default function WhyWereNumberOnePageEs() {
  return (
    <>
      <Head>
        <title>Nuestra posición en mayoreo de hiyab turco | Hijab Fashion Mall</title>
        <meta name="description" content="Hijab Fashion Mall es un proveedor confiable en mayoreo de hiyab turco. Productos de calidad, servicio al cliente y años de experiencia." />
        <meta name="keywords" content="mayoreo de hiyab turco, proveedor confiable, Hijab Fashion Mall, ropa para hijabis turca" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/es/why-were-number-one" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/why-were-number-one" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/why-were-number-one" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/why-were-number-one" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/why-were-number-one" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/why-were-number-one" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/why-were-number-one" />
        <meta property="og:title" content="Nuestra posición en mayoreo de hiyab turco | Hijab Fashion Mall" />
        <meta property="og:description" content="Hijab Fashion Mall es un proveedor confiable en mayoreo de hiyab turco." />
        <meta property="og:image" content="https://hijabfashionmall.com/images/celebration-global-rank.webp" />
        <meta property="og:url" content="https://hijabfashionmall.com/es/why-were-number-one" />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nuestra posición en mayoreo de hiyab turco" />
        <meta name="twitter:description" content="Hijab Fashion Mall es un proveedor confiable en mayoreo de hiyab turco." />
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
          content: 'CONFIANZA';
          position: absolute;
          top: 20%;
          right: 5%;
          font-size: 160px;
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
            <Link href="/es">Inicio</Link> <span>&gt;</span> <span>Por qué elegirnos</span>
          </div>
          <h1>Hijab Fashion Mall: Un <span>nombre de confianza</span> en mayoreo de hiyab turco</h1>
          <p className="lead">Cómo nos convertimos en un proveedor confiable para minoristas de todo el mundo</p>
          <div className="meta-info">
            <span><FaCalendarAlt size={14} /> 13 de marzo de 2026</span>
            <span><FaClock size={14} /> 6 min de lectura</span>
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
                alt="Hijab Fashion Mall - Proveedor de hiyab turco confiable" 
                width={800} 
                height={450} 
                priority
              />
            </div>

            <p className="lead">Con el paso de los años, <strong>Hijab Fashion Mall</strong> se ha convertido en un nombre reconocido en el mayoreo de hiyab turco. A través de una calidad constante y un servicio confiable, hemos ganado la confianza de minoristas en muchos países.</p>

            <div className="highlight-box">
              <h4>🏆 Palabras clave en las que estamos bien posicionados:</h4>
              <div className="country-list">
                <span className="country-tag"><FaTag size={12} /> Mayoreo de hiyab turco</span>
                <span className="country-tag"><FaTag size={12} /> Ropa para hijabis turca</span>
                <span className="country-tag"><FaTag size={12} /> Ropa hijabis al por mayor</span>
                <span className="country-tag"><FaTag size={12} /> Abayas turcas al por mayor</span>
                <span className="country-tag"><FaTag size={12} /> Vestidos para hijabis Turquía</span>
                <span className="country-tag"><FaTag size={12} /> Proveedor de hiyab turco</span>
              </div>
            </div>

            <h2>Gracias a nuestros clientes</h2>
            <p>Queremos expresar nuestro sincero agradecimiento a nuestros clientes de todo el mundo. Su confianza y su continuo apoyo nos han ayudado a crecer y mejorar nuestros servicios. No pretendemos ser perfectos, pero hacemos nuestro mejor esfuerzo cada día.</p>

            <div className="stats-grid">
              <div className="stat-item"><div className="stat-number">4.8/5</div><div className="stat-label">Opiniones de clientes</div></div>
              <div className="stat-item"><div className="stat-number">3000+</div><div className="stat-label">Productos</div></div>
              <div className="stat-item"><div className="stat-number">40+</div><div className="stat-label">Países atendidos</div></div>
            </div>

            <h2>Nuestros enfoques</h2>
            <p>Hemos trabajado duro para construir un negocio en el que los minoristas puedan confiar. Estas son nuestras prioridades:</p>

            <h3>1. Calidad del producto</h3>
            <p>Obtenemos nuestros productos de fabricantes turcos confiables que comparten nuestro compromiso con la calidad. Cada artículo pasa por controles de calidad básicos antes del envío.</p>

            <h3>2. Servicio al cliente</h3>
            <p>Nuestro equipo de soporte está disponible a través de WhatsApp para responder preguntas, ayudar con pedidos y brindar asistencia cuando sea necesario. Creemos en la comunicación clara.</p>

            <h3>3. Prácticas comerciales honestas</h3>
            <p>Somos transparentes sobre nuestros precios, tiempos de envío y políticas. Nuestra política de "sin pedido mínimo" permite que las pequeñas boutiques accedan a productos turcos sin presión.</p>

            <h3>4. Sitio web fácil de usar</h3>
            <p>Hemos construido un sitio web fácil de navegar, que funciona bien en dispositivos móviles y admite múltiples idiomas. Seguimos mejorando según los comentarios de los clientes.</p>

            <blockquote>
              "He trabajado con Hijab Fashion Mall durante dos años. La calidad es constante y su equipo responde cuando tengo preguntas. Un socio confiable para mi boutique." — Sarah, propietaria de boutique
            </blockquote>

            <h2>Dónde enviamos</h2>
            <p>Actualmente enviamos a muchos países, incluyendo <strong>Estados Unidos, Canadá, Reino Unido, Europa y Australia</strong>.</p>

            <div className="country-list">
              <span className="country-tag"><FaGlobe size={14} /> Estados Unidos</span>
              <span className="country-tag"><FaGlobe size={14} /> Canadá</span>
              <span className="country-tag"><FaGlobe size={14} /> Reino Unido</span>
              <span className="country-tag"><FaGlobe size={14} /> Alemania</span>
              <span className="country-tag"><FaGlobe size={14} /> Francia</span>
              <span className="country-tag"><FaGlobe size={14} /> Italia</span>
              <span className="country-tag"><FaGlobe size={14} /> Bélgica</span>
              <span className="country-tag"><FaGlobe size={14} /> Suecia</span>
              <span className="country-tag"><FaGlobe size={14} /> Austria</span>
              <span className="country-tag"><FaGlobe size={14} /> España</span>
              <span className="country-tag"><FaGlobe size={14} /> Portugal</span>
              <span className="country-tag"><FaGlobe size={14} /> Suiza</span>
              <span className="country-tag"><FaGlobe size={14} /> Australia</span>
              <span className="country-tag"><FaGlobe size={14} /> Arabia Saudita</span>
              <span className="country-tag"><FaGlobe size={14} /> Emiratos Árabes Unidos</span>
              <span className="country-tag"><FaGlobe size={14} /> Kuwait</span>
              <span className="country-tag"><FaGlobe size={14} /> Qatar</span>
            </div>

            <div className="cta-box">
              <h3>¿Interesada en nuestros productos?</h3>
              <p>Explore nuestro catálogo de ropa hijab turca y vea si somos el socio adecuado para su boutique.</p>
              <Link href="/es/catalog" className="btn">Explorar catálogo</Link>
            </div>

            <div className="share-section">
              <h4>Compartir este artículo</h4>
              <div className="share-buttons">
                <a href="#" className="share-btn facebook" onClick={(e) => { e.preventDefault(); window.open('https://www.facebook.com/sharer/sarer.php?u='+encodeURIComponent(window.location.href), '_blank'); }}><FaFacebookF size={18} /></a>
                <a href="#" className="share-btn twitter" onClick={(e) => { e.preventDefault(); window.open('https://twitter.com/intent/tweet?text=Hijab%20Fashion%20Mall%20-%20Proveedor%20confiable&url='+encodeURIComponent(window.location.href), '_blank'); }}><FaTwitter size={18} /></a>
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
          <h3 className="related-title">También te puede gustar</h3>
          <div className="related-grid">
            <div className="related-card">
              <div className="related-image">
                <Image src="/images/complete-guide-thumb.webp" alt="Guía de abayas turcas" width={300} height={150} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = '/images/default.webp' }} />
              </div>
              <div className="related-content">
                <h4><Link href="/es/complete-guide-turkish-abayas">Guía de abayas turcas: tipos y telas</Link></h4>
                <div className="related-meta">5 de marzo de 2026</div>
              </div>
            </div>
            <div className="related-card">
              <div className="related-image">
                <Image src="/images/wholesale-tips-thumb.webp" alt="Consejos de compra al por mayor" width={300} height={150} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = '/images/default.webp' }} />
              </div>
              <div className="related-content">
                <h4><Link href="/es/wholesale-buying-tips-boutique-owners">Consejos de compra al por mayor para boutiques</Link></h4>
                <div className="related-meta">28 de febrero de 2026</div>
              </div>
            </div>
            <div className="related-card">
              <div className="related-image">
                <Image src="/images/chiffon-hijab-guide-thumb.webp" alt="Guía del hiyab de gasa" width={300} height={150} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = '/images/default.webp' }} />
              </div>
              <div className="related-content">
                <h4><Link href="/es/chiffon-hijab-ultimate-guide">Guía del hiyab de gasa: tipos y cuidado</Link></h4>
                <div className="related-meta">20 de febrero de 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}