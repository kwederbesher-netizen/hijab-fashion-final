// app/es/terms-conditions/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function TermsConditionsPageEs() {
  return (
    <>
      <Head>
        <title>Términos y Condiciones - Hijab Fashion Mall | Mayorista Moda Modesta Turca</title>
        <meta name="description" content="Lea nuestros términos y condiciones al por mayor para pedir moda modesta turca. Conozca los precios, envíos, métodos de pago y políticas mayoristas internacionales." />
        <meta name="keywords" content="términos y condiciones, términos mayoristas, términos hijab mayorista, moda modesta, Turquía mayorista" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/es/terms-conditions" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/terms-conditions" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/terms-conditions" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/terms-conditions" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/terms-conditions" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/terms-conditions" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/terms-conditions" />
        <meta property="og:title" content="Términos y Condiciones - Hijab Fashion Mall" />
        <meta property="og:description" content="Lea nuestros términos y condiciones al por mayor para pedir moda modesta turca." />
        <meta property="og:url" content="https://hijabfashionmall.com/es/terms-conditions" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hijabfashionmall.com/images/og-terms.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Términos y Condiciones - Hijab Fashion Mall" />
        <meta name="twitter:description" content="Lea nuestros términos y condiciones al por mayor para pedir moda modesta turca." />
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
              <Link href="/es">Inicio</Link>
            </li>
            <li className="breadcrumb-item">/</li>
            <li className="breadcrumb-item active">Términos y Condiciones</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Términos y Condiciones</h1>
          <p>Términos comerciales al por mayor para nuestros socios internacionales</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content">
        <div className="container">
          <div className="terms-wrapper">
            
            <div className="terms-section">
              <h2>1. Información General</h2>
              <p>Bienvenido a Hijab Fashion Mall. Estos Términos y Condiciones rigen el uso de nuestro sitio web y los servicios de compra al por mayor. Al realizar un pedido con nosotros, acepta quedar vinculado por estos términos. Léalos detenidamente antes de proceder con cualquier compra.</p>
              <p>Hijab Fashion Mall es un proveedor mayorista especializado en moda modesta turca, que sirve a minoristas y boutiques en todo el mundo. Nuestra plataforma conecta a compradores internacionales con fabricantes turcos de primera calidad.</p>
            </div>

            <div className="terms-section">
              <h2>2. Pedidos al por Mayor</h2>
              <p>Todos los pedidos realizados a través de nuestro sitio web se consideran consultas al por mayor. Nuestros productos están destinados a la reventa al por menor, a menos que se indique lo contrario. Como proveedor mayorista, no ofrecemos precios minoristas ni precios por pieza individual para artículos que no son RSS.</p>
              <ul>
                <li><strong>Artículos RSS :</strong> Los productos marcados como "RSS" se pueden pedir como piezas individuales</li>
                <li><strong>Artículos en Cartón :</strong> Productos vendidos en cajas con tamaños de paquete especificados</li>
                <li><strong>Pedidos Mixtos :</strong> Puede combinar diferentes productos en un solo pedido sin requisito de cantidad mínima</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>3. Precios y Pagos</h2>
              <p>Todos los precios mostrados en nuestro sitio web están en USD (dólares estadounidenses) y representan precios al por mayor. Nos reservamos el derecho de ajustar los precios sin previo aviso según las condiciones del mercado, los tipos de cambio y los precios de los fabricantes.</p>
              <ul>
                <li><strong>Métodos de Pago Aceptados :</strong> Transferencia bancaria, Western Union y principales tarjetas de crédito</li>
                <li><strong>Condiciones de Pago :</strong> Los pedidos se procesan después de la confirmación del pago</li>
                <li><strong>Conversión de Moneda :</strong> Los cargos finales pueden variar según los tipos de cambio de su banco</li>
                <li><strong>Facturas :</strong> Facturas proforma proporcionadas antes del pago, factura final al enviar</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>4. Envío y Entrega</h2>
              <p>Ofrecemos envíos a todo el mundo a más de 50 países a través de nuestros socios de transporte de confianza. Los costos de envío y los tiempos de entrega varían según el destino.</p>
              <ul>
                <li><strong>Tiempo de Procesamiento :</strong> 1-3 días hábiles después de la confirmación del pago</li>
                <li><strong>Tiempo de Entrega :</strong> 3-7 días hábiles para la mayoría de los destinos internacionales</li>
                <li><strong>Seguimiento :</strong> Número de seguimiento proporcionado para todos los envíos</li>
                <li><strong>Aduanas y Aranceles :</strong> Los aranceles de importación y los impuestos son responsabilidad del comprador</li>
              </ul>
              <div className="info-box">
                <p><strong>📦 Nota Importante sobre Envíos :</strong> Los tiempos de entrega son estimados y pueden variar debido al despacho de aduanas, días festivos locales o circunstancias imprevistas. No somos responsables por demoras causadas por transportistas o autoridades aduaneras.</p>
              </div>
            </div>

            <div className="terms-section">
              <h2>5. Información del Producto</h2>
              <p>Nos esforzamos por proporcionar descripciones, imágenes y especificaciones precisas de los productos. Sin embargo, tenga en cuenta:</p>
              <ul>
                <li>Los colores pueden aparecer ligeramente diferentes debido a la configuración del monitor</li>
                <li>Las tallas se basan en los estándares de fabricación turcos; consulte las guías de tallas antes de pedir</li>
                <li>Las composiciones de las telas se proporcionan en las descripciones de los productos</li>
                <li>La disponibilidad de stock está sujeta a cambios sin previo aviso</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>6. Devoluciones y Daños</h2>
              <p>Como proveedor mayorista, no aceptamos devoluciones por cambio de opinión o preferencia. Sin embargo, garantizamos completamente la calidad de nuestros productos:</p>
              <ul>
                <li>Los defectos de fabricación están cubiertos con una compensación completa</li>
                <li>Los daños en tránsito están cubiertos con la documentación adecuada</li>
                <li>Los reclamos deben presentarse dentro de los 7 días posteriores a la entrega con fotos claras</li>
                <li>La compensación se proporciona como crédito, reemplazo o reembolso según la revisión del caso</li>
              </ul>
              <p>Consulte nuestra <Link href="/es/refund-policy" className="inline-link">Política de Reembolso y Devolución</Link> para obtener información detallada.</p>
            </div>

            <div className="terms-section">
              <h2>7. Propiedad Intelectual</h2>
              <p>Todo el contenido de este sitio web, incluidas imágenes, textos, logotipos y diseños, es propiedad de Hijab Fashion Mall y está protegido por las leyes de derechos de autor. Cualquier uso, reproducción o distribución no autorizada está prohibida sin nuestro consentimiento por escrito.</p>
            </div>

            <div className="terms-section">
              <h2>8. Política de Privacidad</h2>
              <p>Respetamos su privacidad y nos comprometemos a proteger su información personal. Sus datos se utilizan únicamente para el procesamiento de pedidos, la comunicación y la mejora de nuestros servicios. No compartimos su información con terceros excepto cuando sea necesario para el envío y el procesamiento de pagos.</p>
              <p>Para más detalles, consulte nuestra <Link href="/es/privacy-policy" className="inline-link">Política de Privacidad</Link>.</p>
            </div>

            <div className="terms-section">
              <h2>9. Limitación de Responsabilidad</h2>
              <p>Hijab Fashion Mall no será responsable por ningún daño indirecto, incidental o consecuente que surja del uso de nuestros productos o servicios. Nuestra responsabilidad se limita al precio de compra de los productos en cuestión.</p>
            </div>

            <div className="terms-section">
              <h2>10. Ley Aplicable</h2>
              <p>Estos Términos y Condiciones se rigen por las leyes de la República de Turquía. Cualquier disputa que surja de estos términos se resolverá a través de los tribunales turcos.</p>
            </div>

            <div className="terms-section">
              <h2>11. Modificaciones de los Términos</h2>
              <p>Nos reservamos el derecho de actualizar o modificar estos Términos y Condiciones en cualquier momento sin previo aviso. Los cambios entrarán en vigencia inmediatamente después de su publicación en esta página. Su uso continuo de nuestros servicios constituye la aceptación de cualquier modificación.</p>
            </div>

            <div className="terms-section">
              <h2>12. Contáctenos</h2>
              <p>Si tiene alguna pregunta sobre estos Términos y Condiciones, contáctenos:</p>
              <ul>
                <li><strong>WhatsApp :</strong> +90 551 952 24 48 (Soporte 24/7)</li>
                <li><strong>Formulario de Contacto :</strong> Disponible en nuestro sitio web</li>
              </ul>
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