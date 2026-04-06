// app/es/privacy-policy/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function PrivacyPolicyPageEs() {
  return (
    <>
      <Head>
        <title>Política de Privacidad - Hijab Fashion Mall | Mayorista Moda Modesta Turca</title>
        <meta name="description" content="Descubre cómo Hijab Fashion Mall recopila, utiliza y protege tu información personal. Nuestra política de privacidad para clientes mayoristas y visitantes del sitio web." />
        <meta name="keywords" content="política de privacidad, protección de datos, información personal, privacidad mayorista, privacidad moda hijab" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/es/privacy-policy" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/privacy-policy" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/privacy-policy" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/privacy-policy" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/privacy-policy" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/privacy-policy" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/privacy-policy" />
        <meta property="og:title" content="Política de Privacidad - Hijab Fashion Mall" />
        <meta property="og:description" content="Descubre cómo Hijab Fashion Mall protege tu información personal." />
        <meta property="og:url" content="https://hijabfashionmall.com/es/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Política de Privacidad - Hijab Fashion Mall" />
        <meta name="twitter:description" content="Descubre cómo Hijab Fashion Mall protege tu información personal." />
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

        .privacy-content {
          padding: 60px 0;
          background: var(--white);
        }

        .privacy-wrapper {
          max-width: 900px;
          margin: 0 auto;
          background: var(--white);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid #f0f0f0;
        }

        .privacy-section {
          margin-bottom: 35px;
        }

        .privacy-section h2 {
          font-size: 24px;
          color: var(--black);
          margin-bottom: 20px;
          font-weight: 700;
          border-left: 3px solid var(--primary);
          padding-left: 15px;
        }

        .privacy-section h3 {
          font-size: 20px;
          color: var(--dark-gray);
          margin: 25px 0 15px;
          font-weight: 600;
        }

        .privacy-section p {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .privacy-section ul {
          list-style: none;
          padding: 0;
          margin: 15px 0;
        }

        .privacy-section ul li {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 12px;
          padding-left: 25px;
          position: relative;
        }

        .privacy-section ul li:before {
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
          
          .privacy-wrapper {
            padding: 25px;
          }
          
          .privacy-section h2 {
            font-size: 20px;
          }
        }
      `}</style>

      <div className="breadcrumb-bar">
        <div className="container">
          <ul className="breadcrumb-list">
            <li className="breadcrumb-item">
              <Link href="/es">Inicio</Link>
            </li>
            <li className="breadcrumb-item">/</li>
            <li className="breadcrumb-item active">Política de Privacidad</li>
          </ul>
        </div>
      </div>

      <section className="page-header">
        <div className="container">
          <h1>Política de Privacidad</h1>
          <p>Cómo protegemos y manejamos tu información</p>
        </div>
      </section>

      <section className="privacy-content">
        <div className="container">
          <div className="privacy-wrapper">
            
            <div className="privacy-section">
              <h2>1. Introducción</h2>
              <p>En Hijab Fashion Mall, valoramos tu privacidad y nos comprometemos a proteger tu información personal. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos tus datos cuando visitas nuestro sitio web o realizas pedidos al por mayor con nosotros. Al utilizar nuestros servicios, aceptas las prácticas descritas en esta política.</p>
              <p>Operamos como proveedor mayorista de moda modesta turca, sirviendo a minoristas y boutiques en todo el mundo. Nuestro compromiso con la protección de datos garantiza que tu información permanezca segura mientras realizas negocios con nosotros.</p>
            </div>

            <div className="privacy-section">
              <h2>2. Información Que Recopilamos</h2>
              <p>Recopilamos información que nos ayuda a procesar tus pedidos y mejorar nuestros servicios. Los tipos de información que podemos recopilar incluyen:</p>
              <ul>
                <li><strong>Información Comercial:</strong> Nombre de la empresa, dirección comercial, número de identificación fiscal (cuando corresponda)</li>
                <li><strong>Detalles de Contacto:</strong> Nombre, correo electrónico, número de teléfono, contacto de WhatsApp</li>
                <li><strong>Información del Pedido:</strong> Selecciones de productos, cantidades, dirección de envío, historial de pedidos</li>
                <li><strong>Datos de Comunicación:</strong> Mensajes y consultas enviados a través de nuestro sitio web o WhatsApp</li>
                <li><strong>Datos Técnicos:</strong> Dirección IP, tipo de navegador, información del dispositivo y patrones de uso del sitio</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>3. Cómo Utilizamos Tu Información</h2>
              <p>Tu información se utiliza únicamente para fines comerciales legítimos relacionados con nuestras operaciones mayoristas:</p>
              <ul>
                <li>Procesar y cumplir con tus pedidos al por mayor</li>
                <li>Comunicarnos contigo sobre tus pedidos y consultas</li>
                <li>Proporcionar soporte y asistencia al cliente</li>
                <li>Gestionar los arreglos de envío y entrega</li>
                <li>Enviar actualizaciones importantes sobre tu cuenta o pedidos</li>
                <li>Mejorar nuestro sitio web y servicios</li>
                <li>Cumplir con los requisitos legales y regulatorios</li>
              </ul>
              <div className="info-box">
                <p><strong>🔒 Nota:</strong> No vendemos, alquilamos ni compartimos tu información personal con terceros con fines de marketing. Tus datos se utilizan exclusivamente para satisfacer tus necesidades mayoristas.</p>
              </div>
            </div>

            <div className="privacy-section">
              <h2>4. Compartir Tu Información</h2>
              <p>Podemos compartir tu información con terceros de confianza solo cuando sea necesario para cumplir con tus pedidos:</p>
              <ul>
                <li><strong>Socios de Envío:</strong> Para entregar tus pedidos a tu dirección especificada</li>
                <li><strong>Procesadores de Pago:</strong> Para procesar tus pagos de forma segura</li>
                <li><strong>Autoridades Legales:</strong> Cuando lo requiera la ley o para proteger nuestros derechos</li>
              </ul>
              <p>Todos los proveedores de servicios externos están obligados contractualmente a proteger tu información y utilizarla solo para los fines especificados.</p>
            </div>

            <div className="privacy-section">
              <h2>5. Seguridad de los Datos</h2>
              <p>Implementamos medidas técnicas y organizativas apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Estas medidas incluyen:</p>
              <ul>
                <li>Cifrado SSL para la transmisión de datos</li>
                <li>Evaluaciones y actualizaciones de seguridad periódicas</li>
                <li>Acceso restringido a información personal</li>
                <li>Sistemas de almacenamiento seguros y protocolos de protección de datos</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>6. Cookies y Tecnologías de Seguimiento</h2>
              <p>Nuestro sitio web utiliza cookies y tecnologías de seguimiento similares para mejorar tu experiencia de navegación. Las cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio, permitiéndonos mejorar la funcionalidad y la experiencia del usuario. Puedes ajustar la configuración de tu navegador para rechazar las cookies, aunque esto puede afectar ciertas características del sitio.</p>
              <p>Utilizamos cookies para funciones esenciales como:</p>
              <ul>
                <li>Recordar las selecciones de tu carrito</li>
                <li>Mantener tu sesión durante la navegación</li>
                <li>Analizar el tráfico y el rendimiento del sitio web</li>
                <li>Almacenar preferencias de idioma y moneda</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>7. Retención de Datos</h2>
              <p>Conservamos tu información personal durante el tiempo necesario para cumplir con los fines descritos en esta Política de Privacidad, a menos que la ley requiera o permita un período de retención más largo. La información del pedido se conserva típicamente para el mantenimiento de registros comerciales y para abordar cualquier problema potencial con tus pedidos.</p>
            </div>

            <div className="privacy-section">
              <h2>8. Tus Derechos</h2>
              <p>Como cliente valioso, tienes ciertos derechos con respecto a tu información personal:</p>
              <ul>
                <li><strong>Acceso:</strong> Solicitar una copia de la información que tenemos sobre ti</li>
                <li><strong>Corrección:</strong> Pedirnos que corrijamos cualquier información inexacta o incompleta</li>
                <li><strong>Eliminación:</strong> Solicitar la eliminación de tu información personal, sujeto a obligaciones legales</li>
                <li><strong>Oposición:</strong> Oponerte a ciertas actividades de procesamiento</li>
                <li><strong>Portabilidad:</strong> Solicitar la transferencia de tus datos a otro proveedor de servicios</li>
              </ul>
              <p>Para ejercer cualquiera de estos derechos, contáctanos a través de nuestro formulario de contacto en el sitio web.</p>
            </div>

            <div className="privacy-section">
              <h2>9. Transferencias Internacionales de Datos</h2>
              <p>Como proveedor mayorista internacional, tu información puede ser transferida y procesada en países fuera de tu residencia. Aseguramos que existan salvaguardas apropiadas para proteger tus datos de acuerdo con las leyes de privacidad aplicables.</p>
            </div>

            <div className="privacy-section">
              <h2>10. Privacidad de los Menores</h2>
              <p>Nuestros servicios están destinados a clientes comerciales y no están dirigidos a individuos menores de 18 años. No recopilamos conscientemente información personal de menores. Si crees que un menor nos ha proporcionado información personal, contáctanos de inmediato.</p>
            </div>

            <div className="privacy-section">
              <h2>11. Cambios a Esta Política</h2>
              <p>Podemos actualizar esta Política de Privacidad de vez en cuando para reflejar cambios en nuestras prácticas o requisitos legales. Cualquier modificación se publicará en esta página con una fecha de vigencia actualizada. Te animamos a revisar esta política periódicamente.</p>
            </div>

            <div className="privacy-section">
              <h2>12. Información de Contacto</h2>
              <p>Si tienes alguna pregunta sobre esta Política de Privacidad o cómo manejamos tu información personal, contáctanos:</p>
              <ul>
                <li><strong>WhatsApp:</strong> +90 551 952 24 48</li>
                <li><strong>Formulario de Contacto:</strong> Disponible en nuestro sitio web</li>
              </ul>
              <p>Nuestro equipo está disponible para ayudarte con cualquier inquietud relacionada con la privacidad.</p>
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