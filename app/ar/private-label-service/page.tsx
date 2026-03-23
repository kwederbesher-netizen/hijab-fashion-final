// app/ar/private-label-service/page.tsx
'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function PrivateLabelServiceArabicPage() {
  const [cart, setCart] = useState<any[]>([])
  const cartInitialized = useRef(false)

  // Load cart from localStorage - مرة واحدة فقط
  useEffect(() => {
    if (!cartInitialized.current) {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        try {
          setCart(JSON.parse(savedCart))
        } catch (e) {
          console.error('خطأ في تحميل السلة:', e)
        }
      }
      cartInitialized.current = true
    }

    // الاستماع لتحديثات السلة
    const handleCartUpdate = (event: CustomEvent) => {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        try {
          setCart(JSON.parse(savedCart))
        } catch (e) {
          console.error('خطأ في تحميل السلة:', e)
        }
      }
    }

    window.addEventListener('cartUpdated', handleCartUpdate as EventListener)
    
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate as EventListener)
    }
  }, [])

  // Save cart to localStorage
  useEffect(() => {
    if (cartInitialized.current) {
      localStorage.setItem('cart', JSON.stringify(cart))
      // Update cart count in header
      const event = new CustomEvent('cartUpdated', { detail: cart.length })
      window.dispatchEvent(event)
      
      const cartCountElement = document.getElementById('cartCount')
      if (cartCountElement) {
        cartCountElement.textContent = cart.length.toString()
      }
    }
  }, [cart])

  return (
    <>
      <style>{`
        /* جميع الأنماط - مع دعم اللغة العربية */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', 'Tajawal', sans-serif;
            color: #333;
            line-height: 1.6;
            background: #fff;
        }

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
            --whatsapp-dark: #128C7E;
            --telegram: #0088cc;
            --telegram-dark: #006699;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .section-title {
            text-align: center;
            font-size: 36px;
            color: var(--black);
            margin-bottom: 15px;
            font-weight: 700;
        }

        .section-title span {
            color: var(--primary);
        }

        .section-subtitle {
            text-align: center;
            color: var(--medium-gray);
            font-size: 18px;
            max-width: 700px;
            margin: 0 auto 50px;
        }

        /* ===== Buttons ===== */
        .btn, .btn-primary {
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

        .btn:hover, .btn-primary:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 90, 0, 0.3);
        }

        .btn-outline {
            display: inline-block;
            background: transparent;
            color: var(--primary);
            padding: 14px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            border: 2px solid var(--primary);
        }

        .btn-outline:hover {
            background: var(--primary);
            color: var(--white);
            transform: translateY(-2px);
        }

        .btn-whatsapp {
            background: var(--whatsapp);
            color: var(--white);
            padding: 14px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
        }

        .btn-whatsapp:hover {
            background: var(--whatsapp-dark);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
        }

        /* ===== Page Header ===== */
        .page-header {
            background: linear-gradient(135deg, var(--primary-soft) 0%, #ffffff 100%);
            padding: 60px 0 40px;
            text-align: center;
            border-bottom: 1px solid #eee;
            position: relative;
            overflow: hidden;
        }

        .page-header::before {
            content: 'العلامة التجارية الخاصة';
            position: absolute;
            top: 20%;
            left: 5%;
            font-size: 80px;
            font-weight: 800;
            color: rgba(255, 90, 0, 0.03);
            z-index: 0;
            line-height: 1;
            white-space: nowrap;
            transform: rotate(-5deg);
        }

        .page-header .container {
            position: relative;
            z-index: 1;
        }

        .page-header h1 {
            font-size: 48px;
            color: var(--black);
            margin-bottom: 20px;
            font-weight: 800;
            line-height: 1.3;
        }

        .page-header h1 span {
            color: var(--primary);
            position: relative;
            display: inline-block;
        }

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

        .page-header p {
            font-size: 18px;
            color: var(--medium-gray);
            max-width: 800px;
            margin: 0 auto;
        }

        .page-header .breadcrumb {
            font-size: 14px;
            color: var(--medium-gray);
            margin-bottom: 20px;
        }

        .page-header .breadcrumb a {
            color: var(--primary);
            text-decoration: none;
            margin: 0 5px;
        }

        .page-header .breadcrumb a:hover {
            text-decoration: underline;
        }

        .page-header .breadcrumb span {
            margin: 0 5px;
        }

        /* ===== Service Intro ===== */
        .service-intro {
            padding: 80px 0;
            background: var(--white);
        }

        .intro-wrapper {
            display: flex;
            align-items: center;
            gap: 60px;
        }

        .intro-content {
            flex: 1;
        }

        .intro-content h2 {
            font-size: 36px;
            color: var(--black);
            margin-bottom: 20px;
            font-weight: 700;
            line-height: 1.4;
        }

        .intro-content h2 span {
            color: var(--primary);
        }

        .intro-content p {
            color: var(--medium-gray);
            margin-bottom: 20px;
            font-size: 16px;
            line-height: 1.8;
        }

        .intro-content p.lead {
            font-size: 18px;
            font-weight: 500;
            color: var(--dark-gray);
        }

        .intro-image {
            flex: 1;
        }

        .intro-image img {
            width: 100%;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .badge-2026 {
            display: inline-block;
            background: var(--primary);
            color: var(--white);
            padding: 5px 15px;
            border-radius: 50px;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 20px;
        }

        /* ===== Why Private Label ===== */
        .why-section {
            padding: 80px 0;
            background: var(--light-gray);
        }

        .why-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            margin-top: 50px;
        }

        .why-card {
            background: var(--white);
            padding: 40px 30px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            transition: transform 0.3s;
            border: 1px solid #eee;
            text-align: center;
        }

        .why-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(255,90,0,0.1);
        }

        .why-icon {
            width: 70px;
            height: 70px;
            background: var(--primary-soft);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
        }

        .why-icon i {
            font-size: 32px;
            color: var(--primary);
        }

        .why-card h3 {
            font-size: 22px;
            color: var(--black);
            margin-bottom: 15px;
            font-weight: 700;
        }

        .why-card p {
            color: var(--medium-gray);
            line-height: 1.7;
        }

        /* ===== Services Grid ===== */
        .services-section {
            padding: 80px 0;
            background: var(--white);
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
            margin-top: 50px;
        }

        .service-item {
            display: flex;
            gap: 25px;
            padding: 30px;
            background: var(--white);
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            transition: all 0.3s;
            border: 1px solid #eee;
        }

        .service-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(255,90,0,0.1);
            border-color: var(--primary);
        }

        .service-icon {
            width: 80px;
            height: 80px;
            background: var(--primary-soft);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .service-icon i {
            font-size: 36px;
            color: var(--primary);
        }

        .service-content h3 {
            font-size: 22px;
            color: var(--black);
            margin-bottom: 10px;
            font-weight: 700;
        }

        .service-content p {
            color: var(--medium-gray);
            line-height: 1.7;
        }

        .service-features {
            margin-top: 15px;
            list-style: none;
            padding-right: 0;
        }

        .service-features li {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
            color: var(--medium-gray);
            font-size: 14px;
        }

        .service-features li i {
            color: var(--primary);
            font-size: 14px;
        }

        /* ===== Process Steps ===== */
        .process-section {
            padding: 80px 0;
            background: var(--light-gray);
        }

        .process-steps {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            margin-top: 50px;
            position: relative;
        }

        .process-step {
            text-align: center;
            position: relative;
        }

        .process-step:not(:last-child)::after {
            content: '←';
            position: absolute;
            top: 40px;
            left: -20px;
            font-size: 30px;
            color: var(--primary);
            opacity: 0.5;
        }

        .step-number {
            width: 80px;
            height: 80px;
            background: var(--primary-soft);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
            font-size: 32px;
            font-weight: 800;
            color: var(--primary);
            border: 2px dashed var(--primary);
        }

        .process-step h3 {
            font-size: 20px;
            color: var(--black);
            margin-bottom: 10px;
            font-weight: 700;
        }

        .process-step p {
            color: var(--medium-gray);
            font-size: 15px;
        }

        /* ===== Brand Building Section ===== */
        .brand-section {
            padding: 80px 0;
            background: linear-gradient(135deg, var(--black) 0%, #1a1a1a 100%);
            color: var(--white);
        }

        .brand-content {
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }

        .brand-content h2 {
            font-size: 42px;
            margin-bottom: 20px;
            font-weight: 800;
        }

        .brand-content h2 span {
            color: var(--primary);
        }

        .brand-content p {
            color: rgba(255,255,255,0.8);
            margin-bottom: 30px;
            font-size: 18px;
            line-height: 1.8;
        }

        .brand-stats {
            display: flex;
            justify-content: center;
            gap: 50px;
            margin-top: 40px;
            flex-wrap: wrap;
        }

        .brand-stat {
            text-align: center;
        }

        .brand-stat .number {
            font-size: 48px;
            font-weight: 800;
            color: var(--primary);
            line-height: 1.2;
        }

        .brand-stat .label {
            color: rgba(255,255,255,0.6);
            font-size: 14px;
            letter-spacing: 1px;
        }

        /* ===== FAQ Section ===== */
        .faq-section {
            padding: 80px 0;
            background: var(--white);
        }

        .faq-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            margin-top: 50px;
        }

        .faq-item {
            padding: 30px;
            background: var(--white);
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            border: 1px solid #eee;
        }

        .faq-question {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 15px;
        }

        .faq-question i {
            font-size: 24px;
            color: var(--primary);
        }

        .faq-question h3 {
            font-size: 18px;
            color: var(--black);
            font-weight: 600;
        }

        .faq-answer {
            color: var(--medium-gray);
            line-height: 1.7;
            padding-right: 39px;
        }

        /* ===== CTA Section ===== */
        .cta-section {
            padding: 80px 0;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: var(--white);
            text-align: center;
        }

        .cta-content {
            max-width: 700px;
            margin: 0 auto;
        }

        .cta-content h2 {
            font-size: 42px;
            margin-bottom: 20px;
            font-weight: 800;
        }

        .cta-content p {
            font-size: 18px;
            margin-bottom: 30px;
            opacity: 0.9;
        }

        .cta-buttons {
            display: flex;
            gap: 20px;
            justify-content: center;
            flex-wrap: wrap;
        }

        .cta-btn-primary {
            background: var(--white);
            color: var(--primary);
            padding: 16px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 18px;
            transition: all 0.3s;
        }

        .cta-btn-primary:hover {
            background: var(--black);
            color: var(--white);
            transform: translateY(-2px);
        }

        .cta-btn-whatsapp {
            background: var(--whatsapp);
            color: var(--white);
            padding: 16px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 18px;
            transition: all 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }

        .cta-btn-whatsapp:hover {
            background: var(--whatsapp-dark);
            transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 992px) {
            .intro-wrapper {
                flex-direction: column;
            }
            
            .why-grid {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .services-grid {
                grid-template-columns: 1fr;
            }
            
            .process-steps {
                grid-template-columns: repeat(2, 1fr);
            }
            
            .process-step:not(:last-child)::after {
                display: none;
            }
            
            .faq-grid {
                grid-template-columns: 1fr;
            }
            
            .process-step:not(:last-child)::after {
                display: none;
            }
        }

        @media (max-width: 768px) {
            .page-header h1 {
                font-size: 36px;
            }
            
            .intro-content h2 {
                font-size: 28px;
            }
            
            .section-title {
                font-size: 28px;
            }
            
            .why-grid {
                grid-template-columns: 1fr;
            }
            
            .process-steps {
                grid-template-columns: 1fr;
            }
            
            .brand-stats {
                flex-direction: column;
                gap: 30px;
            }
            
            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }
            
            .cta-btn-primary, .cta-btn-whatsapp {
                width: 100%;
                text-align: center;
            }
        }

        @media (max-width: 576px) {
            .service-item {
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            
            .service-features li {
                justify-content: center;
            }
        }
      `}</style>

      {/* Metadata للـ SEO - يتم إضافتها في head بواسطة Next.js */}
      <head>
        <title>خدمة العلامة التجارية الخاصة (Private Label) للحجاب التركي | حجاب فاشون مول</title>
        <meta name="description" content="أنشئ علامتك التجارية الخاصة في عالم الأزياء المحتشمة مع خدمة Private Label من حجاب فاشون مول. نقدم لabels مخصصة، hang tags، تغليف فاخر، وأكثر. ابدأ اليوم!" />
        <meta name="keywords" content="Private Label حجاب, علامة تجارية خاصة, تصميم ملصقات مخصصة, تغليف منتجات, هانج تاج, هانج تاق, صناعة علامة تجارية, بيع بالجملة تركي" />
        <link rel="canonical" href="https://hijabfashionmall.com/ar/private-label-service" />
      </head>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/ar">الرئيسية</Link> <span>&gt;</span> <span>خدمة العلامة التجارية الخاصة</span>
          </div>
          <h1>خدمة <span>العلامة التجارية الخاصة 2026</span></h1>
          <p>ابنِ علامتك التجارية الخاصة في عالم الحجاب مع حلولنا الشاملة. من الملصقات إلى التغليف، كل ما تحتاجه لإنشاء هوية فريدة.</p>
        </div>
      </section>

      {/* Service Intro */}
      <section className="service-intro">
        <div className="container">
          <div className="intro-wrapper">
            <div className="intro-content">
              <span className="badge-2026">✨ إصدار 2026</span>
              <h2>أنشئ <span>هويتك التجارية</span> المميزة في سوق الأزياء المحتشمة</h2>
              <p className="lead">في سوق الأزياء التنافسي اليوم، امتلاك هوية تجارية مميزة لم يعد خياراً بل ضرورة أساسية للنجاح والاستمرارية.</p>
              <p>خدمة العلامة التجارية الخاصة الشاملة تمكنك من بناء وتوسيع علامتك التجارية في عالم الحجاب دون تعقيدات التصنيع. نقدم لك منتجات تركية فاخرة لتصبح لوحة فارغة لرؤيتك التجارية، مما يتيح لك التركيز على ما يهم حقاً: تنمية أعمالك والتواصل مع عملائك.</p>
              <p>سواء كنت تطلق بوتيكاً جديداً، أو توسع عملاً قائماً، أو تنشئ مجموعة حصرية، فإن حل العلامة التجارية الخاصة لدينا يمنحك المرونة والجودة التي تحتاجها لتتميز في سوق الأزياء المحتشمة.</p>
            </div>
            <div className="intro-image">
              <Image 
                src="/images/private-label-intro.webp" 
                alt="خدمة العلامة التجارية الخاصة للملابس المحتشمة" 
                width={500} 
                height={400} 
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/default.webp'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Private Label Section */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">لماذا <span>العلامة التجارية الخاصة</span> في 2026؟</h2>
          <p className="section-subtitle">مفتاح بناء علامة تجارية مستدامة ومعروفة في عالم الأزياء</p>
          
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <i className="fas fa-crown"></i>
              </div>
              <h3>ملكية العلامة التجارية</h3>
              <p>ابنِ علامة تجارية مملوكة لك بالكامل. العلامة الخاصة تسمح لك بإنشاء هوية فريدة يتعرف عليها العملاء ويثقون بها، مما يميزك عن المنافسين.</p>
            </div>
            
            <div className="why-card">
              <div className="why-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>نمو طويل المدى</h3>
              <p>أنشئ ولاء للعلامة التجارية وعملاء دائمين. عندما تمتلك علامتك الخاصة، يعود العملاء لعلامتك التجارية تحديداً، مما يخلق نمواً مستداماً وأرباحاً أعلى.</p>
            </div>
            
            <div className="why-card">
              <div className="why-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>تسويق متميز</h3>
              <p>ضع منتجاتك في موقع متميز. علامتك الخاصة توحي بالجودة والحصرية، مما يتيح لك بناء علامة تجارية تفرض الاحترام وأسعاراً متميزة في السوق.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Grid */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">خدماتنا الشاملة <span>للعلامة التجارية الخاصة</span></h2>
          <p className="section-subtitle">اختر بالضبط ما تحتاجه لتحقيق رؤية علامتك التجارية</p>
          
          <div className="services-grid">
            {/* Service 1: Custom Labels */}
            <div className="service-item">
              <div className="service-icon">
                <i className="fas fa-tag"></i>
              </div>
              <div className="service-content">
                <h3>ملصقات مخصصة منسوجة</h3>
                <p>ملصقات منسوجة عالية الجودة تحمل اسم علامتك التجارية وشعارك وتعليمات العناية. متوفرة بأحجام وألوان متعددة تناسب هوية علامتك.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> ساتان منسوج عالي الجودة</li>
                  <li><i className="fas fa-check"></i> خيارات ألوان متعددة</li>
                  <li><i className="fas fa-check"></i> أحجام وأشكال مخصصة</li>
                  <li><i className="fas fa-check"></i> دمج ملصقات العناية</li>
                </ul>
              </div>
            </div>
            
            {/* Service 2: Hang Tags */}
            <div className="service-item">
              <div className="service-icon">
                <i className="fas fa-tags"></i>
              </div>
              <div className="service-content">
                <h3>هانج تاج (بطاقات تعليق) مخصصة</h3>
                <p>بطاقات تعليق احترافية تنقل قصة علامتك التجارية ومعلومات المنتج. صمم بنفسك أو اعمل مع فريقنا لإنشاء بطاقات مميزة.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> خيارات ورق فاخر</li>
                  <li><i className="fas fa-check"></i> طباعة بارزة، رقائق معدنية</li>
                  <li><i className="fas fa-check"></i> أشكال وأحجام مخصصة</li>
                  <li><i className="fas fa-check"></i> إرفاق بخيط، مطاط، أو شريط</li>
                </ul>
              </div>
            </div>
            
            {/* Service 3: Custom Packaging */}
            <div className="service-item">
              <div className="service-icon">
                <i className="fas fa-box"></i>
              </div>
              <div className="service-content">
                <h3>تغليف مخصص</h3>
                <p>اصنع تجربة فتح علبة كاملة مع تغليف مخصص يعكس علامتك التجارية. من أكياس بلاستيكية إلى صناديق، نساعدك في تصميم تغليف مميز.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> أكياس بلاستيكية مطبوعة</li>
                  <li><i className="fas fa-check"></i> صناديق وأظرف ذات علامة تجارية</li>
                  <li><i className="fas fa-check"></i> ورق مناديل وملصقات</li>
                  <li><i className="fas fa-check"></i> خيارات صديقة للبيئة</li>
                </ul>
              </div>
            </div>
            
            {/* Service 4: Complete Branding Package */}
            <div className="service-item">
              <div className="service-icon">
                <i className="fas fa-palette"></i>
              </div>
              <div className="service-content">
                <h3>حزمة العلامة التجارية الكاملة</h3>
                <p>الحل الأمثل لبناء علامة تجارية جادة. ننسق جميع العناصر - الملصقات، البطاقات، والتغليف - لخلق هوية متكاملة واحترافية لمنتجاتك.</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> تصميم منسق عبر جميع العناصر</li>
                  <li><i className="fas fa-check"></i> أسعار مميزة للكميات</li>
                  <li><i className="fas fa-check"></i> استشارة علامة تجارية مخصصة</li>
                  <li><i className="fas fa-check"></i> جودة ثابتة عبر جميع المنتجات</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">عملية بسيطة <span>من 4 خطوات</span></h2>
          <p className="section-subtitle">البدء مع علامتك التجارية الخاصة سهل وسلس</p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>شارك رؤيتك</h3>
              <p>تواصل معنا بمفهوم علامتك التجارية وشعارك وتفضيلات التصميم للملصقات والبطاقات والتغليف.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>اختر منتجاتك</h3>
              <p>اختر من كتالوجنا الواسع الذي يضم أكثر من 5000 قطعة تركية فاخرة لتشكيل مجموعتك.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>صمم ووافق</h3>
              <p>نقوم بإنشاء نماذج رقمية لملصقاتك وبطاقاتك وتغليفك لمراجعتك واعتمادك.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>الإنتاج والشحن</h3>
              <p>يتم تجهيز منتجاتك بعلامتك التجارية وشحنها إليك مع إمكانية التتبع، جاهزة لعملائك.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Building Section */}
      <section className="brand-section">
        <div className="container">
          <div className="brand-content">
            <h2>ابنِ علامة تجارية <span>تدوم</span></h2>
            <p>في صناعة الأزياء سريعة الخطى، العلامات التجارية ذات الهويات القوية والمتابعين المخلصين هي التي تزدهر. خدمة العلامة التجارية الخاصة لدينا تمنك الأساس لبناء بالضبط ذلك - علامة تجارية يتعرف عليها العملاء ويثقون بها ويعودون إليها موسم بعد موسم.</p>
            <p>مع علامتك الخاصة، أنت لا تبيع منتجات فحسب؛ بل تبني قيمة. كل عملية بيع تعزز التعرف على علامتك التجارية، وكل عميل راضٍ يصبح سفيراً لهويتك الفريدة في فضاء الأزياء المحتشمة.</p>
            
            <div className="brand-stats">
              <div className="brand-stat">
                <div className="number">78%</div>
                <div className="label">من المستهلكين يفضلون المنتجات ذات العلامة التجارية</div>
              </div>
              <div className="brand-stat">
                <div className="number">3.5x</div>
                <div className="label">زيادة في الاحتفاظ بالعملاء مع علامتك الخاصة</div>
              </div>
              <div className="brand-stat">
                <div className="number">40%</div>
                <div className="label">هوامش ربح أعلى</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">الأسئلة <span>الشائعة</span></h2>
          <p className="section-subtitle">كل ما تحتاج معرفته عن خدمة العلامة التجارية الخاصة</p>
          
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question">
                <i className="fas fa-question-circle"></i>
                <h3>ما هو الحد الأدنى للطلب للعلامة التجارية الخاصة؟</h3>
              </div>
              <div className="faq-answer">
                لدينا خيارات مرنة تناسب الشركات بجميع أحجامها. تواصل معنا لمناقشة احتياجاتك الخاصة وسنجد حلاً يناسبك.
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <i className="fas fa-question-circle"></i>
                <h3>هل يمكنني دمج منتجات مختلفة في طلب العلامة الخاصة؟</h3>
              </div>
              <div className="faq-answer">
                بالتأكيد! يمكنك اختيار أي مجموعة من المنتجات من كتالوجنا - عبايات، حجابات، فساتين، ملابس صلاة، والمزيد - كلها بعلامتك التجارية المخصصة.
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <i className="fas fa-question-circle"></i>
                <h3>كم تستغرق عملية العلامة التجارية الخاصة؟</h3>
              </div>
              <div className="faq-answer">
                المدة تعتمد على متطلباتك الخاصة. عادةً، يستغرق إنتاج الملصقات 2-3 أسابيع، والشحن 3-7 أيام عمل حول العالم.
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question">
                <i className="fas fa-question-circle"></i>
                <h3>هل يمكنكم المساعدة في التصميم إذا لم يكن لدي عمل فني؟</h3>
              </div>
              <div className="faq-answer">
                نعم! يمكن لفريقنا تقديم إرشادات التصميم الأساسية والمواصفات لضمان أن ملصقاتك وبطاقاتك تلبي المعايير المهنية.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>هل أنت مستعد لبناء علامتك التجارية؟</h2>
            <p>اتخذ الخطوة الأولى نحو إنشاء علامتك التجارية الخاصة في عالم الحجاب. تواصل معنا اليوم لمناقشة رؤيتك وابدأ الرحلة.</p>
            <div className="cta-buttons">
              <a href="https://wa.me/905519522448" className="cta-btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i> تحدث عبر واتساب
              </a>
              <Link href="/ar/contact" className="cta-btn-primary">اتصل بنا</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}