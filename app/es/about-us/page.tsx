'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { 
  FaStore, FaGlobe, FaTshirt, FaCalendarAlt, 
  FaBoxes, FaBan, FaCertificate, FaHeadset, FaTag, FaShippingFast,
  FaQuoteRight
} from 'react-icons/fa'

export default function AboutPageEs() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).updateCartCount) {
      (window as any).updateCartCount()
    }
  }, [])

  return (
    <>
      <Head>
        <title>Quiénes somos - Hijab Fashion Mall | Mayoreo Moda Turca</title>
        <meta name="description" content="Desde 2019, Hijab Fashion Mall conecta a minoristas de todo el mundo con ropa hijab turca auténtica. Sin pedido mínimo, envío mundial, 5000+ productos." />
        <meta name="keywords" content="mayoreo hijab turco, moda turca, proveedor hijab Estambul" />
        <link rel="canonical" href="https://hijabfashionmall.com/es/about-us" />
      </Head>

      <div dir="ltr">

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <div className="container">
            <ul>
              <li><Link href="/es">Inicio</Link></li>
              <li className="active">Quiénes somos</li>
            </ul>
          </div>
        </div>

        {/* Page Header */}
        <section className="page-header">
          <div className="container">
            <h1>Sobre Hijab Fashion Mall</h1>
            <p>Tu socio de confianza para ropa hijab turca premium desde 2019. Conectamos a minoristas de todo el mundo con la moda turca auténtica.</p>
          </div>
        </section>

        {/* About Section - No Image */}
        <section className="about-section">
          <div className="container">
            <div className="about-content-full">
              <h2>Quiénes somos</h2>
              <p>Hijab Fashion Mall es una empresa mayorista turca con sede en Estambul, especializada en ropa hijab premium y moda turca. Desde nuestra fundación en 2019, nos comprometemos a ayudar a minoristas y tiendas de todo el mundo a obtener productos turcos auténticos de los mejores fabricantes.</p>
              
              <p>Trabajamos con los mejores fabricantes turcos para ofrecerte productos de alta calidad a precios competitivos, centrándonos en la comodidad de nuestros clientes y garantizándote la mejor relación calidad-precio.</p>
              
              <div className="about-highlight">
                <p><FaQuoteRight /> "No solo vendemos productos; construimos asociaciones a largo plazo con nuestros clientes. Su éxito es nuestro éxito."</p>
              </div>
              
              <p>Con más de 5000 productos en 9 categorías, ofrecemos todo, desde elegantes abayas hasta ropa deportiva moderna, todo hecho en Turquía con los mejores materiales y artesanía.</p>
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
                <div className="stat-label">Marcas</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaGlobe /></div>
                <div className="stat-number">50+</div>
                <div className="stat-label">Países</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaTshirt /></div>
                <div className="stat-number">5000+</div>
                <div className="stat-label">Productos</div>
              </div>
              <div className="stat-card">
                <div className="stat-icon"><FaCalendarAlt /></div>
                <div className="stat-number">2019</div>
                <div className="stat-label">Fundada</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <h2 className="section-title">Lo que ofrecemos</h2>
            <p className="section-subtitle">Servicios diseñados para ayudar a tu negocio a crecer</p>
            
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon"><FaBoxes /></div>
                <h3>Mezcla tu pedido</h3>
                <p>Combina diferentes productos en un solo envío. Pide exactamente lo que necesitas de múltiples categorías.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaBan /></div>
                <h3>Sin pedido mínimo</h3>
                <p>Comienza con cualquier cantidad. Perfecto tanto para pequeñas boutiques como para grandes minoristas.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaCertificate /></div>
                <h3>100% Original Hecho en Turquía</h3>
                <p>Productos auténticos directamente de fabricantes turcos. Sin copias ni imitaciones.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaHeadset /></div>
                <h3>Soporte al cliente 24/7</h3>
                <p>Siempre estamos aquí para ayudar con pedidos, consultas y asistencia personal.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaTag /></div>
                <h3>Servicio de marca privada</h3>
                <p>Construye tu propia marca con empaques personalizados y diseños exclusivos para pedidos regulares.</p>
              </div>
              <div className="service-card">
                <div className="service-icon"><FaShippingFast /></div>
                <h3>Envío mundial</h3>
                <p>Entrega rápida a más de 50 países a través de transportistas confiables con seguimiento disponible.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="container">
            <div className="mission-content">
              <h2>Nuestra misión</h2>
              <p>Hacer que la moda turca premium sea accesible para minoristas de todo el mundo, sin las complejidades del abastecimiento internacional. Estamos aquí para ser tu socio de confianza, garantizando calidad, confiabilidad y éxito para tu negocio.</p>
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