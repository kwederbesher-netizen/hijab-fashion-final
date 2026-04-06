// app/es/refund-policy/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function RefundPolicyPageEs() {
  return (
    <>
      <Head>
        <title>Política de Reembolso y Devolución - Hijab Fashion Mall | Mayorista Moda Modesta Turca</title>
        <meta name="description" content="Nuestra política de devolución al por mayor cubre defectos de fabricación y daños de envío. Conozca nuestro proceso de garantía de calidad para pedidos internacionales al por mayor." />
        <meta name="keywords" content="política de reembolso, política de devolución, devoluciones al por mayor, artículos dañados, garantía de calidad, hijab mayorista turquía" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/es/refund-policy" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/refund-policy" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/refund-policy" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/refund-policy" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/refund-policy" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/refund-policy" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/refund-policy" />
        <meta property="og:title" content="Política de Reembolso y Devolución - Hijab Fashion Mall" />
        <meta property="og:description" content="Nuestra política de devolución al por mayor cubre defectos de fabricación y daños de envío." />
        <meta property="og:url" content="https://hijabfashionmall.com/es/refund-policy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Política de Reembolso y Devolución - Hijab Fashion Mall" />
        <meta name="twitter:description" content="Nuestra política de devolución al por mayor cubre defectos de fabricación y daños de envío." />
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
              <Link href="/es">Inicio</Link>
            </li>
            <li className="breadcrumb-item">/</li>
            <li className="breadcrumb-item active">Política de Reembolso y Devolución</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Política de Reembolso y Devolución</h1>
          <p>Garantía de calidad para sus pedidos al por mayor</p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="policy-content">
        <div className="container">
          <div className="policy-wrapper">
            
            <div className="policy-section">
              <h2>1. Garantía de Calidad</h2>
              <p>En Hijab Fashion Mall, nos enorgullecemos de entregar moda modesta turca premium a nuestros socios mayoristas en todo el mundo. Cada producto se somete a un riguroso control de calidad antes del envío para garantizar que reciba artículos que cumplen con nuestros altos estándares de artesanía y autenticidad.</p>
              <p>Como proveedor mayorista que sirve a minoristas en más de 50 países, entendemos la importancia de una calidad confiable para su negocio. Nuestro compromiso es proporcionar productos turcos originales y consistentes que sus clientes amarán.</p>
            </div>

            <div className="policy-section">
              <h2>2. Artículos Dañados o Defectuosos</h2>
              <p>Respaldamos la calidad de nuestros productos. En el improbable caso de que reciba un artículo con un defecto de fabricación o daños ocurridos durante el tránsito, le compensaremos completamente por los artículos afectados.</p>
              
              <div className="info-box">
                <p><strong>📦 Qué hacer si recibe artículos dañados:</strong></p>
                <ul style={{ marginTop: '10px' }}>
                  <li>Comuníquese con nuestro servicio al cliente dentro de los 7 días posteriores a la recepción de su pedido</li>
                  <li>Proporcione fotos claras que muestren el daño o defecto</li>
                  <li>Incluya su número de pedido y códigos de producto</li>
                  <li>Nuestro equipo revisará y procesará la compensación en 2-3 días hábiles</li>
                </ul>
              </div>
            </div>

            <div className="policy-section">
              <h2>3. Consideraciones para Mayoristas Internacionales</h2>
              <p>Como mayorista internacional que envía a minoristas en todo el mundo, operamos bajo estándares de comercio mayorista. Dada la naturaleza de los pedidos al por mayor y la logística internacional, no aceptamos devoluciones por razones como:</p>
              <ul>
                <li>Cambio de opinión o preferencia</li>
                <li>Variaciones de color debido a la configuración del monitor</li>
                <li>Selección de talla (verifique las tallas antes de pedir)</li>
                <li>Diferencias menores con las imágenes del producto</li>
              </ul>
              <p>Alentamos a nuestros socios mayoristas a revisar cuidadosamente los detalles del producto antes de realizar pedidos. Nuestro catálogo proporciona descripciones detalladas, información sobre telas y guías de tallas para ayudarlo a tomar decisiones de compra informadas.</p>
            </div>

            <div className="policy-section">
              <h2>4. Proceso de Control de Calidad</h2>
              <p>Para minimizar cualquier problema con sus pedidos, implementamos un exhaustivo proceso de control de calidad:</p>
              <ul>
                <li>Cada artículo es inspeccionado antes del empaque</li>
                <li>Empaque profesional para tránsito internacional</li>
                <li>Información de seguimiento proporcionada para todos los envíos</li>
                <li>Asociación con transportistas confiables para entrega global</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>5. Cómo Reportar un Problema</h2>
              <p>Si recibe artículos con defectos de fabricación o daños de tránsito, contáctenos de inmediato:</p>
              <ul>
                <li><strong>WhatsApp:</strong> +90 551 952 24 48</li>
                <li><strong>Formulario de contacto:</strong> Disponible en nuestro sitio web</li>
              </ul>
              <p>Nuestro equipo de servicio al cliente está disponible 24/7 para ayudarlo con cualquier inquietud sobre sus pedidos al por mayor.</p>
            </div>

            <div className="policy-section">
              <h2>6. Proceso de Compensación</h2>
              <p>Tras la verificación de artículos dañados o defectuosos, proporcionaremos una compensación completa a través de:</p>
              <ul>
                <li>Crédito para su próximo pedido</li>
                <li>Reemplazo de los artículos afectados (sujeto a disponibilidad)</li>
                <li>Reembolso a través del método de pago original</li>
              </ul>
              <p>La compensación se procesa dentro de los 2-5 días hábiles posteriores a la confirmación del problema.</p>
            </div>

            <div className="policy-section">
              <h2>7. Contáctenos</h2>
              <p>Para cualquier pregunta sobre nuestra política de devolución o para reportar un problema con su pedido, no dude en comunicarse con nuestro equipo. Estamos aquí para garantizar que su experiencia mayorista sea fluida y exitosa.</p>
              <p><strong>Soporte al Cliente (WhatsApp):</strong> +90 551 952 24 48</p>
            </div>

            <Link href="/es" className="btn-back">
              <FaArrowLeft size={14} /> Volver al Inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}