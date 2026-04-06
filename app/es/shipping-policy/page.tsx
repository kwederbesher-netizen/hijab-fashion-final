// app/es/shipping-policy/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function ShippingPolicyPageEs() {
  return (
    <>
      <Head>
        <title>Política de Envío - Hijab Fashion Mall | Envío Mundial desde Turquía</title>
        <meta name="description" content="Conozca nuestra política de envío mundial para pedidos al por mayor. Entrega rápida y confiable a más de 50 países con transportistas de confianza." />
        <meta name="keywords" content="política de envío, envío mundial, envío al por mayor, tiempos de entrega, seguimiento de pedidos, hijab mayorista turquía" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/es/shipping-policy" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/shipping-policy" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/shipping-policy" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/shipping-policy" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/shipping-policy" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/shipping-policy" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/shipping-policy" />
        <meta property="og:title" content="Política de Envío - Hijab Fashion Mall" />
        <meta property="og:description" content="Envío mundial para pedidos al por mayor. Entrega rápida y confiable a más de 50 países desde Turquía." />
        <meta property="og:url" content="https://hijabfashionmall.com/es/shipping-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hijabfashionmall.com/images/og-shipping.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Política de Envío - Hijab Fashion Mall" />
        <meta name="twitter:description" content="Envío mundial para pedidos al por mayor. Entrega rápida y confiable desde Turquía." />
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
              <Link href="/es">Inicio</Link>
            </li>
            <li className="breadcrumb-item">/</li>
            <li className="breadcrumb-item active">Política de Envío</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Política de Envío</h1>
          <p>Entrega rápida y confiable en todo el mundo desde Turquía</p>
        </div>
      </section>

      {/* Shipping Content */}
      <section className="shipping-content">
        <div className="container">
          <div className="shipping-wrapper">
            
            <div className="shipping-section">
              <h2>1. Envío Mundial</h2>
              <p>En Hijab Fashion Mall, nos enorgullecemos de servir a nuestros socios mayoristas en todo el mundo. Ofrecemos envíos mundiales confiables a más de 50 países a través de nuestros socios de transporte de confianza. Nuestra red de envíos garantiza que sus pedidos lleguen de manera segura y eficiente, dondequiera que se encuentre.</p>
              <p>Como proveedor mayorista internacional con sede en Turquía, entendemos la importancia de una entrega oportuna y segura para su negocio. Trabajamos exclusivamente con transportistas internacionales establecidos para brindarle la mejor experiencia de envío posible.</p>
            </div>

            <div className="shipping-section">
              <h2>2. Arreglos de Envío</h2>
              <p>Los arreglos de envío se hacen caso por caso, teniendo en cuenta su ubicación, el tamaño del pedido y los requisitos de entrega específicos. Nos coordinamos con nuestros socios de transporte para encontrar la solución de envío más adecuada para cada pedido al por mayor.</p>
              <ul>
                <li>Trabajamos con múltiples transportistas internacionales (DHL, FedEx, UPS y otros)</li>
                <li>Los métodos de envío se seleccionan según el destino y las especificaciones del pedido</li>
                <li>Comunicamos todos los detalles de envío directamente con nuestros socios mayoristas</li>
                <li>Los arreglos de envío se confirman después de la finalización del pedido</li>
              </ul>
              <div className="info-box">
                <p><strong>📦 Envío Flexible:</strong> Entendemos que cada pedido al por mayor tiene requisitos únicos. Nuestro equipo trabaja estrechamente con usted para organizar el envío que cumpla con sus plazos y preferencias de presupuesto.</p>
              </div>
            </div>

            <div className="shipping-section">
              <h2>3. Costos de Envío</h2>
              <p>Los costos de envío varían según varios factores:</p>
              <ul>
                <li><strong>País de Destino:</strong> Distancia y zona de envío</li>
                <li><strong>Peso y Volumen del Pedido:</strong> Dimensiones del paquete y peso total</li>
                <li><strong>Método de Envío:</strong> Opciones estándar, exprés o económicas disponibles</li>
                <li><strong>Aduanas y Aranceles:</strong> Impuestos de importación y tarifas aplicables a su país</li>
              </ul>
              <p>Los costos de envío se calculan individualmente para cada pedido. Nuestro equipo le proporcionará un presupuesto de envío detallado antes de finalizar su pedido, garantizando total transparencia y sin sorpresas.</p>
            </div>

            <div className="shipping-section">
              <h2>4. Tiempo de Procesamiento</h2>
              <p>Nos esforzamos por preparar y enviar sus pedidos lo más rápido posible:</p>
              <ul>
                <li><strong>Procesamiento del Pedido:</strong> 1-3 días hábiles después de la confirmación del pago</li>
                <li><strong>Control de Calidad:</strong> Cada artículo es inspeccionado antes del empaque</li>
                <li><strong>Empaque:</strong> Empaque profesional para garantizar la seguridad del producto durante el tránsito</li>
                <li><strong>Documentación:</strong> Se preparan todos los documentos de envío necesarios</li>
              </ul>
            </div>

            <div className="shipping-section">
              <h2>5. Tiempos de Entrega</h2>
              <p>Los tiempos de entrega estimados varían según el destino:</p>
              <ul>
                <li><strong>Oriente Medio y Países del Golfo:</strong> 3-5 días hábiles</li>
                <li><strong>Países Europeos:</strong> 3-7 días hábiles</li>
                <li><strong>América del Norte:</strong> 5-7 días hábiles</li>
                <li><strong>Australia y Nueva Zelanda:</strong> 5-8 días hábiles</li>
                <li><strong>Otros Destinos Internacionales:</strong> 7-10 días hábiles</li>
              </ul>
              <p><strong>Nota:</strong> Estos son tiempos de entrega estimados. La entrega real puede variar debido al despacho de aduanas, días festivos locales o circunstancias imprevistas.</p>
            </div>

            <div className="shipping-section">
              <h2>6. Seguimiento de Pedidos</h2>
              <p>Una vez que su pedido sea enviado, le proporcionamos un número de seguimiento que le permite monitorear su envío en tiempo real. Recibirá:</p>
              <ul>
                <li>Nombre del transportista y tipo de servicio</li>
                <li>Número de seguimiento único</li>
                <li>Enlace de seguimiento para actualizaciones en tiempo real</li>
                <li>Ventana de entrega estimada</li>
              </ul>
              <p>Recomendamos monitorear su envío y estar disponible para recibir su paquete cuando llegue.</p>
            </div>

            <div className="shipping-section">
              <h2>7. Aduanas y Aranceles de Importación</h2>
              <p>Como mayorista internacional que envía a todo el mundo, tenga en cuenta que:</p>
              <ul>
                <li>Los aranceles de importación, impuestos y tarifas aduaneras son responsabilidad del comprador</li>
                <li>Los tiempos de despacho de aduanas varían según el país y pueden afectar el tiempo de entrega</li>
                <li>Proporcionamos toda la documentación necesaria para facilitar un despacho de aduanas sin problemas</li>
                <li>Consulte con su oficina de aduanas local las tarifas aplicables</li>
              </ul>
              <div className="info-box">
                <p><strong>🌍 Nota sobre Envíos Internacionales:</strong> Las políticas aduaneras varían significativamente entre países. Recomendamos consultar con su autoridad aduanera local para comprender las posibles tarifas o requisitos antes de realizar su pedido.</p>
              </div>
            </div>

            <div className="shipping-section">
              <h2>8. Envíos Dañados o Perdidos</h2>
              <p>En el raro caso de que su envío resulte dañado durante el tránsito o se pierda, trabajaremos con el transportista para resolver el problema. Tenga en cuenta:</p>
              <ul>
                <li>Inspeccione su paquete inmediatamente después de la entrega</li>
                <li>Documente cualquier daño visible con fotos</li>
                <li>Reporte cualquier problema dentro de los 7 días posteriores a la entrega</li>
                <li>Le ayudaremos con el proceso de reclamo</li>
              </ul>
              <p>Consulte nuestra <Link href="/es/refund-policy" className="inline-link">Política de Reembolso y Devolución</Link> para más detalles sobre artículos dañados.</p>
            </div>

            <div className="shipping-section">
              <h2>9. Envío a Áreas Remotas</h2>
              <p>Para envíos a áreas remotas o menos accesibles, puede ser necesario un tiempo de entrega adicional. Nuestros transportistas pueden utilizar socios locales para la entrega final en algunas regiones. Le informaremos si se necesitan arreglos especiales para su ubicación.</p>
            </div>

            <div className="shipping-section">
              <h2>10. Contacto para Consultas de Envío</h2>
              <p>Para cualquier pregunta sobre el envío o para discutir sus requisitos de entrega específicos, comuníquese con nosotros:</p>
              <ul>
                <li><strong>WhatsApp:</strong> +90 551 952 24 48</li>
                <li><strong>Formulario de Contacto:</strong> Disponible en nuestro sitio web</li>
              </ul>
              <p>Nuestro equipo está listo para ayudarle con arreglos de envío personalizados para sus pedidos al por mayor.</p>
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