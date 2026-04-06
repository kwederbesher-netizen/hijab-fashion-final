'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useCurrency } from '@/app/contexts/CurrencyContext'
import { 
  FaUsers, 
  FaWhatsapp, 
  FaTelegramPlane, 
  FaShoppingCart, 
  FaArrowUp, 
  FaImage, 
  FaVideo,
  FaCheckCircle,
  FaNewspaper,
  FaStore,
  FaGlobe,
  FaCreditCard,
  FaBoxes,
  FaTruck,
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'

export default function HomePageTr() {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const { formatPrice } = useCurrency()
  
  const sliderInterval = useRef<NodeJS.Timeout | null>(null)

  // Hero Slider Data
  const slides = [
    {
      image: '/images/hero-slider-1.webp',
      title: 'Türk Tesettür Modası',
      description: 'Abaya, Elbise ve Tesettür Giyim koleksiyonlarımızı keşfedin',
      cta: { text: 'Alışverişe Başla', link: '/tr/katalog' }
    },
    {
      image: '/images/hero-slider-2.webp',
      title: 'Toptan Fiyatlar',
      description: 'Dünyanın her yerindeki perakendeciler ve mağazalar için en iyi fiyatlar',
      cta: { text: 'Kataloğu İncele', link: '/tr/katalog' }
    },
    {
      image: '/images/hero-slider-3.webp',
      title: 'Hızlı Dünya Çapında Kargo',
      description: '50+ ülkeye güvenilir kargo şirketleri ile teslimat',
      cta: { text: 'Alışverişe Başla', link: '/tr/katalog' }
    }
  ]

  // Hero Slider timer
  useEffect(() => {
    sliderInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    
    return () => {
      if (sliderInterval.current) {
        clearInterval(sliderInterval.current)
      }
    }
  }, [slides.length])

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Hijab Fashion Mall | Toptan Türk Tesettür Giyim - Türkiye\'den Tesettür Moda Tedarikçisi</title>
        <meta name="description" content="2019\'dan beri premium toptan Türk tesettür giyim. 5000+ ürün: Abaya, Tesettür Elbise, Takımlar, Spor Giyim. Minimum sipariş yok, dünya çapında kargo, 7/24 destek." />
        <meta name="keywords" content="toptan türk tesettür giyim, toptan hijab moda, tesettür giyim toptan" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hijabfashionmall.com/tr" />
      </Head>

      <main id="main-content">
        {/* Global CSS */}
        <style>{`
          /* Fix white space on right in mobile */
          html, body {
            overflow-x: hidden !important;
            width: 100% !important;
            position: relative !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          body {
            overflow-x: hidden !important;
          }
          
          * {
            max-width: 100vw !important;
            box-sizing: border-box !important;
          }
          
          .container,
          [class*="container"],
          [style*="max-width"] {
            overflow-x: hidden !important;
          }
          
          img, video, iframe, svg {
            max-width: 100% !important;
            height: auto !important;
          }
          
          :root {
            --primary: #ff5a00;
            --primary-dark: #e04e00;
            --black: #000000;
            --dark-gray: #222;
            --medium-gray: #555;
            --light-gray: #f5f5f5;
            --white: #fff;
            --whatsapp: #25d366;
            --whatsapp-dark: #128C7E;
            --telegram: #0088cc;
            --telegram-dark: #006699;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Poppins', sans-serif;
            color: #333;
            line-height: 1.7;
            background: #fff;
            font-size: 16px;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }

          h1, h2, h3, h4, h5, h6 {
            font-family: 'Poppins', sans-serif;
            font-weight: 700;
          }

          .section-title {
            text-align: center;
            font-size: 42px;
            color: var(--black);
            margin-bottom: 15px;
            font-weight: 800;
            letter-spacing: -0.5px;
          }

          .section-subtitle {
            text-align: center;
            color: var(--medium-gray);
            margin-bottom: 40px;
            font-size: 20px;
            font-weight: 400;
          }

          .btn, .btn-primary {
            display: inline-block;
            background: var(--primary);
            color: var(--white);
            padding: 16px 45px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 18px;
            transition: all 0.3s;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(255, 90, 0, 0.2);
          }

          .btn:hover, .btn-primary:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 90, 0, 0.3);
          }

          .channels-section {
            padding: 60px 0;
            background: linear-gradient(135deg, var(--light-gray) 0%, #ffffff 100%);
          }

          .channels-grid {
            display: grid;
            grid-template-columns: repeat(2, 320px);
            gap: 30px;
            justify-content: center;
            margin: 0 auto;
          }

          .channel-card {
            background: var(--white);
            border-radius: 20px;
            padding: 30px 25px;
            text-align: center;
            transition: transform 0.3s;
            border: 1px solid rgba(0,0,0,0.05);
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          }

          .channel-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          }

          .channel-icon {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 40px;
          }

          .whatsapp-card .channel-icon {
            background: rgba(37, 211, 102, 0.1);
            color: var(--whatsapp);
          }

          .telegram-card .channel-icon {
            background: rgba(0, 136, 204, 0.1);
            color: var(--telegram);
          }

          .channel-card h3 {
            font-size: 24px;
            margin-bottom: 12px;
            color: var(--black);
            font-weight: 700;
          }

          .channel-card p {
            color: var(--medium-gray);
            margin-bottom: 20px;
            font-size: 15px;
            line-height: 1.6;
          }

          .channel-stats {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 25px;
          }

          .channel-stats span {
            font-size: 14px;
            color: var(--medium-gray);
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .channel-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 12px 25px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 15px;
            transition: all 0.3s;
            width: 100%;
            max-width: 250px;
            margin: 0 auto;
            color: var(--white);
            border: none;
            cursor: pointer;
          }

          .whatsapp-btn {
            background: var(--whatsapp);
          }

          .whatsapp-btn:hover {
            background: var(--whatsapp-dark);
          }

          .telegram-btn {
            background: var(--telegram);
          }

          .telegram-btn:hover {
            background: var(--telegram-dark);
          }

          .features-section {
            padding: 70px 0;
            background: var(--white);
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
          }

          .features-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 25px;
            margin-top: 40px;
          }

          .feature-card {
            background: var(--white);
            padding: 35px 20px;
            border-radius: 15px;
            text-align: center;
            box-shadow: 0 5px 20px rgba(0,0,0,0.03);
            transition: transform 0.3s;
            border: 1px solid rgba(0,0,0,0.02);
          }

          .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(255, 90, 0, 0.05);
          }

          .feature-icon {
            width: 120px;
            height: 120px;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 90, 0, 0.05);
            border-radius: 50%;
            padding: 20px;
            transition: all 0.3s;
          }

          .feature-icon img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            transition: all 0.3s;
          }

          .feature-card:hover .feature-icon {
            background: var(--primary);
          }

          .feature-card:hover .feature-icon img {
            filter: brightness(0) invert(1);
          }

          .feature-card h3 {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 15px;
            color: var(--black);
          }

          .feature-card p {
            font-size: 16px;
            color: var(--medium-gray);
            line-height: 1.7;
          }

          .privatelabel-section {
            padding: 80px 0;
            background: linear-gradient(135deg, var(--light-gray) 0%, #ffffff 100%);
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
          }

          .privatelabel-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            align-items: center;
            max-width: 1100px;
            margin: 0 auto;
            background: var(--white);
            border-radius: 30px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          }

          .privatelabel-image {
            height: 100%;
            min-height: 450px;
            overflow: hidden;
            position: relative;
          }

          .privatelabel-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }

          .privatelabel-image:hover img {
            transform: scale(1.03);
          }

          .privatelabel-content {
            padding: 40px 40px 40px 0;
          }

          .privatelabel-badge {
            display: inline-block;
            background: rgba(255, 90, 0, 0.1);
            color: var(--primary);
            font-size: 14px;
            font-weight: 600;
            padding: 6px 18px;
            border-radius: 30px;
            margin-bottom: 20px;
            letter-spacing: 0.5px;
          }

          .privatelabel-title {
            font-size: 42px;
            font-weight: 800;
            color: var(--black);
            line-height: 1.2;
            margin-bottom: 20px;
          }

          .privatelabel-description {
            font-size: 18px;
            color: var(--medium-gray);
            line-height: 1.8;
            margin-bottom: 25px;
          }

          .privatelabel-features {
            list-style: none;
            padding: 0;
            margin-bottom: 30px;
          }

          .privatelabel-features li {
            font-size: 17px;
            color: var(--dark-gray);
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .privatelabel-features svg {
            color: var(--primary);
            font-size: 20px;
          }

          .privatelabel-btn {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            background: var(--primary);
            color: var(--white);
            padding: 16px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 17px;
            transition: all 0.3s;
            box-shadow: 0 5px 15px rgba(255, 90, 0, 0.2);
            border: none;
            cursor: pointer;
          }

          .privatelabel-btn:hover {
            background: var(--primary-dark);
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(255, 90, 0, 0.3);
          }

          .faq-section {
            padding: 70px 0;
            background: var(--light-gray);
          }

          .faq-grid-cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
            max-width: 1100px;
            margin: 40px auto 0;
          }

          .faq-card {
            background: var(--white);
            border-radius: 20px;
            padding: 35px 25px;
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid rgba(0,0,0,0.03);
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          }

          .faq-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(255, 90, 0, 0.1);
          }

          .faq-card-icon {
            width: 90px;
            height: 90px;
            background: rgba(255, 90, 0, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 36px;
            color: var(--primary);
            transition: all 0.3s;
          }

          .faq-card:hover .faq-card-icon {
            background: var(--primary);
            color: var(--white);
          }

          .faq-card h3 {
            font-size: 20px;
            font-weight: 700;
            color: var(--black);
            margin-bottom: 15px;
          }

          .faq-card p {
            font-size: 16px;
            color: var(--medium-gray);
            line-height: 1.7;
            margin: 0;
          }

          .testimonials-section {
            padding: 70px 0;
            background: var(--white);
          }

          .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
            margin-top: 40px;
          }

          .testimonial-card {
            background: var(--white);
            border-radius: 15px;
            padding: 35px;
            text-align: center;
            transition: transform 0.3s;
            box-shadow: 0 5px 20px rgba(0,0,0,0.03);
            border: 1px solid rgba(0,0,0,0.02);
          }

          .testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(255, 90, 0, 0.1);
          }

          .testimonial-image {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            overflow: hidden;
            margin: 0 auto 20px;
            border: 3px solid var(--primary);
            position: relative;
          }

          .testimonial-card h4 {
            font-size: 20px;
            font-weight: 700;
            color: var(--black);
            margin-bottom: 5px;
          }

          .testimonial-card .location {
            color: var(--primary);
            font-size: 16px;
            margin-bottom: 15px;
          }

          .testimonial-text {
            font-size: 16px;
            color: var(--medium-gray);
            line-height: 1.8;
            font-style: italic;
          }

          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Responsive */
          @media (max-width: 992px) {
            .features-grid,
            .testimonials-grid,
            .faq-grid-cards {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            
            .privatelabel-wrapper {
              grid-template-columns: 1fr !important;
            }
            
            .privatelabel-content {
              padding: 40px !important;
            }
          }

          @media (max-width: 768px) {
            .hero-slider {
              height: 500px;
            }
            
            .section-title {
              font-size: 32px;
            }
            
            .section-subtitle {
              font-size: 18px;
            }
            
            .features-grid,
            .testimonials-grid,
            .faq-grid-cards {
              grid-template-columns: 1fr !important;
            }
            
            .channels-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            
            .channel-card {
              max-width: 320px;
              margin: 0 auto;
              width: 100%;
            }
          }
        `}</style>

        {/* Hero Slider */}
        <section className="hero-slider" style={{ position: 'relative', width: '100%', overflow: 'hidden', height: 'auto', maxHeight: '600px' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            {slides.map((slide, index) => (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  opacity: currentSlide === index ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out'
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0, 0, 0, 0.55)',
                  zIndex: 1
                }} />
                <div className="hero-content" style={{
                  position: 'absolute',
                  top: '42%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2,
                  textAlign: 'center',
                  color: 'white',
                  width: '90%',
                  maxWidth: '800px'
                }}>
                  <h1 style={{
                    fontSize: 'clamp(28px, 6vw, 54px)',
                    fontWeight: 800,
                    marginBottom: '20px'
                  }}>{slide.title}</h1>
                  <p style={{
                    fontSize: 'clamp(14px, 3.5vw, 22px)',
                    marginBottom: '25px'
                  }}>{slide.description}</p>
                  <Link href={slide.cta.link} className="btn" style={{
                    padding: '14px 40px',
                    fontSize: '16px'
                  }}>
                    {slide.cta.text}
                  </Link>
                </div>
              </div>
            ))}
            <img src={slides[0].image} alt="hidden" style={{ width: '100%', height: 'auto', visibility: 'hidden', display: 'block' }} />
            <div className="hero-dots" style={{
              position: 'absolute',
              bottom: '25px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '12px',
              zIndex: 3
            }}>
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: currentSlide === index ? '#ff5a00' : 'rgba(255,255,255,0.6)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s'
                  }}
                  aria-label={`Slayt ${index + 1}'e git`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Channels Section */}
        <section className="channels-section">
          <div className="container">
            <h2 className="section-title">Kanallarımıza Katılın</h2>
            <p className="section-subtitle">Güncellemeler ve özel fırsatlar için bizi WhatsApp ve Telegram\'da takip edin</p>
            <div className="channels-grid">
              <div className="channel-card whatsapp-card">
                <div className="channel-icon">
                  <FaWhatsapp size={40} />
                </div>
                <h3>WhatsApp Kanalı</h3>
                <p>Günlük yeni ürünler, özel indirimler ve koleksiyonlara erken erişim için WhatsApp kanalımıza katılın.</p>
                <div className="channel-stats">
                  <span><FaUsers size={14} /> 1.500+ üye</span>
                  <span><FaImage size={14} /> Günlük güncellemeler</span>
                </div>
                <a href="https://whatsapp.com/channel/0029VatIrfWId7nGgsYAFQ1G" className="channel-btn whatsapp-btn" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={18} /> WhatsApp Kanalına Katıl
                </a>
              </div>
              <div className="channel-card telegram-card">
                <div className="channel-icon">
                  <FaTelegramPlane size={40} />
                </div>
                <h3>Telegram Kanalı</h3>
                <p>Özel içerik, stillendirme ipuçları ve özel fırsatlar için Telegram kanalımıza katılın.</p>
                <div className="channel-stats">
                  <span><FaUsers size={14} /> 11.000+ üye</span>
                  <span><FaVideo size={14} /> Video eğitimleri</span>
                </div>
                <a href="https://t.me/hijabfashionmall" className="channel-btn telegram-btn" target="_blank" rel="noopener noreferrer">
                  <FaTelegramPlane size={18} /> Telegram Kanalına Katıl
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <h2 className="section-title">Neden Bizi Seçmelisiniz</h2>
            <p className="section-subtitle">Memnuniyetiniz bizim önceliğimizdir</p>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <Image src="/images/mix-icon.webp" alt="Tek siparişte farklı ürünleri karıştırın" width={100} height={100} loading="lazy" />
                </div>
                <h3>Karıştır & Eşleştir</h3>
                <p>Tüm koleksiyonlarınızı tek siparişte. Uygun maliyetle istediğiniz miktarda sipariş verin.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Image src="/images/no-minimum-icon.webp" alt="Minimum sipariş yok" width={100} height={100} loading="lazy" />
                </div>
                <h3>Minimum Sipariş Yok</h3>
                <p>Konsolidasyon hizmetimiz sayesinde minimum sipariş miktarı yok. İhtiyacınız olanı sipariş edin.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Image src="/images/original-icon.webp" alt="%100 orijinal Türk işçiliği" width={100} height={100} loading="lazy" />
                </div>
                <h3>%100 Orijinal Türk</h3>
                <p>Taklit ürün satmıyoruz. Sadece otantik Türk kalitesi.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Image src="/images/service-icon.webp" alt="7/24 müşteri desteği" width={100} height={100} loading="lazy" />
                </div>
                <h3>7/24 Destek</h3>
                <p>Siparişlerinizde yardımcı olmak ve kişisel destek sağlamak için hazır müşteri hizmetleri.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <h2 className="section-title">Sıkça Sorulan Sorular</h2>
            <p className="section-subtitle">Hizmetlerimiz hakkında sık sorulan soruların yanıtları</p>
            <div className="faq-grid-cards">
              <div className="faq-card">
                <div className="faq-card-icon">
                  <FaStore size={36} />
                </div>
                <h3>Biz kimiz?</h3>
                <p>Hijab Fashion Mall, toptancıları dünyanın dört bir yanındaki tesettür moda perakendecileriyle buluşturan Türkiye'nin önde gelen pazar yeridir.</p>
              </div>
              <div className="faq-card">
                <div className="faq-card-icon">
                  <FaShoppingCart size={36} />
                </div>
                <h3>Nasıl sipariş verilir?</h3>
                <p>Kataloğa göz atın, ürünleri seçin, sipariş sepetine ekleyin ve WhatsApp ile gönderin. Ekibimiz 24 saat içinde onaylayacaktır.</p>
              </div>
              <div className="faq-card">
                <div className="faq-card-icon">
                  <FaGlobe size={36} />
                </div>
                <h3>Dünya çapında kargo yapıyor musunuz?</h3>
                <p>Evet! Güvenilir kargo şirketleriyle 50+ ülkeye gönderim yapıyoruz. Takip numarası ile hızlı kapıdan kapıya teslimat.</p>
              </div>
              <div className="faq-card">
                <div className="faq-card-icon">
                  <FaCreditCard size={36} />
                </div>
                <h3>Ödeme yöntemleri?</h3>
                <p>Banka havalesi, Western Union ve başlıca kredi kartlarını kabul ediyoruz. Kolaylığınız için güvenli ödeme işleme.</p>
              </div>
              <div className="faq-card">
                <div className="faq-card-icon">
                  <FaBoxes size={36} />
                </div>
                <h3>Minimum sipariş?</h3>
                <p>Minimum miktar yok! İhtiyacınız olanı sipariş edin - küçük butikler ve büyük perakendeciler için mükemmel.</p>
              </div>
              <div className="faq-card">
                <div className="faq-card-icon">
                  <FaTruck size={36} />
                </div>
                <h3>Sipariş takibi?</h3>
                <p>Gönderildikten sonra, paketinizi gerçek zamanlı olarak takip etmek için kargo şirketi adını ve takip numarasını alacaksınız.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <h2 className="section-title">Müşterilerimiz Ne Diyor</h2>
            <p className="section-subtitle">Dünyanın dört bir yanındaki perakendeciler tarafından güvenilmektedir</p>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <Image src="/images/testimonial-1.webp" alt="Sarah Ahmed - Londra'dan butik sahibi" width={150} height={150} loading="lazy" />
                </div>
                <h4>Sarah Ahmed</h4>
                <div className="location">Londra, İngiltere</div>
                <p className="testimonial-text">"Hijabların kalitesi olağanüstü. Müşterilerim Türk kumaşlarını seviyor ve toptan satış süreci sorunsuz."</p>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <Image src="/images/testimonial-2.webp" alt="Fatima Khan - New York'tan mağaza sahibi" width={150} height={150} loading="lazy" />
                </div>
                <h4>Fatima Khan</h4>
                <div className="location">New York, ABD</div>
                <p className="testimonial-text">"Güvenilir tedarikçi, tutarlı kalite. Hızlı kargo ve yardımsever müşteri hizmetleri."</p>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <Image src="/images/testimonial-3.webp" alt="Maryam Al Mansouri - Dubai'den perakendeci" width={150} height={150} loading="lazy" />
                </div>
                <h4>Maryam Al Mansouri</h4>
                <div className="location">Dubai, BAE</div>
                <p className="testimonial-text">"Harika ürün çeşitliliği. Mağazam için her zaman yeni bir şeyler buluyorum."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#ff5a00',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            display: showBackToTop ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            boxShadow: '0 4px 15px rgba(255, 90, 0, 0.3)',
            zIndex: 999,
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#e04e00'; e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#ff5a00'; e.currentTarget.style.transform = 'translateY(0)' }}
          aria-label="Yukarı çık"
        >
          <FaArrowUp />
        </button>
      </main>
    </>
  )
}