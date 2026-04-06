'use client'

// app/ar/private-label-service/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { 
  FaCrown, 
  FaChartLine, 
  FaStar, 
  FaTag, 
  FaTags, 
  FaBox, 
  FaPalette, 
  FaQuestionCircle, 
  FaCheck,
  FaWhatsapp,
  FaArrowLeft,
  FaShieldAlt,
  FaGlobe,
  FaRocket,
  FaGem,
  FaHeart,
  FaStore,
  FaUserPlus,
  FaTruck,
  FaClock
} from 'react-icons/fa'

export default function PrivateLabelServiceArabicPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(anchor.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          window.history.pushState(null, '', anchor.hash)
        }
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
        <title>خدمة العلامة الخاصة 2026 | بناء علامتك التجارية | Hijab Fashion Mall</title>
        <meta name="description" content="ابنِ علامتك التجارية الخاصة في الأزياء المحتشمة من خلال خدمة العلامة الخاصة الشاملة. ملصقات مخصصة، علامات سعر، تغليف فاخر والمزيد. ابدأ علامتك اليوم!" />
        <meta name="keywords" content="علامة خاصة حجاب, ملصقات مخصصة, علامات سعر, تغليف مخصص, خدمات العلامة التجارية, بالجملة تركي, علامة أزياء محتشمة, ملابس علامة خاصة" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hijabfashionmall.com/ar/private-label-service" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/private-label-service" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/private-label-service" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/private-label-service" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/private-label-service" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/private-label-service" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/private-label-service" />
        <link rel="alternate" hrefLang="x-default" href="https://hijabfashionmall.com/en/private-label-service" />
        <meta property="og:title" content="خدمة العلامة الخاصة 2026 | بناء علامتك التجارية" />
        <meta property="og:description" content="ابنِ علامتك التجارية الخاصة في الأزياء المحتشمة من خلال خدمة العلامة الخاصة الشاملة." />
        <meta property="og:image" content="https://hijabfashionmall.com/images/private-label-intro.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://hijabfashionmall.com/ar/private-label-service" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_AR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="خدمة العلامة الخاصة 2026 | بناء علامتك التجارية" />
        <meta name="twitter:description" content="ابنِ علامتك التجارية الخاصة في الأزياء المحتشمة من خلال خدمة العلامة الخاصة الشاملة." />
        <meta name="twitter:image" content="https://hijabfashionmall.com/images/private-label-intro.webp" />
      </Head>

      <style>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #ff5a00;
            --primary-dark: #e04e00;
            --primary-light: #ff7b33;
            --primary-soft: #fff0e6;
            --primary-bg: rgba(255, 90, 0, 0.08);
            --black: #000000;
            --dark-gray: #1a1a1a;
            --medium-gray: #555555;
            --light-gray: #f8f9fa;
            --border-gray: #e9ecef;
            --white: #ffffff;
            --whatsapp: #25d366;
            --whatsapp-dark: #128C7E;
            --success: #28a745;
            --shadow-sm: 0 2px 8px rgba(0,0,0,0.05);
            --shadow-md: 0 5px 20px rgba(0,0,0,0.08);
            --shadow-lg: 0 20px 40px rgba(0,0,0,0.1);
            --shadow-xl: 0 30px 60px rgba(0,0,0,0.15);
            --radius-sm: 8px;
            --radius-md: 12px;
            --radius-lg: 20px;
            --radius-xl: 30px;
        }

        body {
            font-family: 'Tajawal', 'Poppins', system-ui, sans-serif;
            color: var(--dark-gray);
            line-height: 1.6;
            background: var(--white);
        }

        .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* RTL Support */
        .rtl {
            direction: rtl;
            text-align: right;
        }

        .rtl .service-features li {
            flex-direction: row-reverse;
        }

        .rtl .faq-question-left {
            flex-direction: row-reverse;
        }

        .rtl .cta-btn-primary svg {
            transform: rotate(180deg);
        }

        /* Buttons */
        .btn, .btn-primary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            background: var(--primary);
            color: var(--white);
            padding: 14px 32px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            font-size: 16px;
            box-shadow: 0 4px 12px rgba(255, 90, 0, 0.25);
        }

        .btn:hover, .btn-primary:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 90, 0, 0.35);
        }

        .btn-whatsapp {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: var(--whatsapp);
            color: var(--white);
            padding: 14px 32px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
        }

        .btn-whatsapp:hover {
            background: var(--whatsapp-dark);
            transform: translateY(-2px);
        }

        /* Section Titles */
        .section-title {
            text-align: center;
            font-size: 42px;
            color: var(--black);
            margin-bottom: 16px;
            font-weight: 800;
        }

        .section-title span {
            color: var(--primary);
            position: relative;
            display: inline-block;
        }

        .section-title span::after {
            content: '';
            position: absolute;
            bottom: 8px;
            right: 0;
            width: 100%;
            height: 8px;
            background: rgba(255, 90, 0, 0.15);
            z-index: -1;
        }

        .section-subtitle {
            text-align: center;
            color: var(--medium-gray);
            font-size: 18px;
            max-width: 700px;
            margin: 0 auto 50px;
        }

        /* Page Header */
        .page-header {
            background: linear-gradient(135deg, var(--primary-soft) 0%, var(--white) 100%);
            padding: 80px 0 60px;
            text-align: center;
            border-bottom: 1px solid var(--border-gray);
            position: relative;
            overflow: hidden;
        }

        .page-header::before {
            content: 'العلامة الخاصة 2026';
            position: absolute;
            top: 15%;
            left: 3%;
            font-size: 50px;
            font-weight: 800;
            color: rgba(255, 90, 0, 0.03);
            z-index: 0;
            line-height: 1;
            white-space: nowrap;
            transform: rotate(-3deg);
            letter-spacing: 2px;
        }

        .rtl .page-header::before {
            left: auto;
            right: 3%;
            transform: rotate(3deg);
        }

        .page-header .container {
            position: relative;
            z-index: 1;
        }

        .page-header h1 {
            font-size: 56px;
            color: var(--black);
            margin-bottom: 24px;
            font-weight: 800;
        }

        .page-header h1 span {
            color: var(--primary);
            position: relative;
            display: inline-block;
        }

        .page-header h1 span::after {
            content: '';
            position: absolute;
            bottom: 8px;
            right: 0;
            width: 100%;
            height: 10px;
            background: rgba(255, 90, 0, 0.2);
            z-index: -1;
        }

        .page-header p {
            font-size: 20px;
            color: var(--medium-gray);
            max-width: 800px;
            margin: 0 auto;
        }

        .breadcrumb {
            font-size: 14px;
            color: var(--medium-gray);
            margin-bottom: 24px;
        }

        .breadcrumb a {
            color: var(--primary);
            text-decoration: none;
        }

        .badge-2026 {
            display: inline-block;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: var(--white);
            padding: 6px 18px;
            border-radius: 50px;
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 20px;
            letter-spacing: 1px;
        }

        /* Service Intro */
        .service-intro {
            padding: 80px 0;
            background: var(--white);
        }

        .intro-wrapper {
            display: flex;
            align-items: center;
            gap: 60px;
        }

        .rtl .intro-wrapper {
            flex-direction: row-reverse;
        }

        .intro-content {
            flex: 1;
        }

        .intro-content h2 {
            font-size: 40px;
            color: var(--black);
            margin-bottom: 20px;
            font-weight: 800;
            line-height: 1.3;
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
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-xl);
        }

        /* Why Section */
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
            border-radius: var(--radius-lg);
            box-shadow: var(--shadow-md);
            transition: all 0.3s ease;
            border: 1px solid var(--border-gray);
            text-align: center;
        }

        .why-card:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-xl);
            border-color: var(--primary);
        }

        .why-icon {
            width: 80px;
            height: 80px;
            background: var(--primary-soft);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
            transition: all 0.3s;
        }

        .why-card:hover .why-icon {
            background: var(--primary);
        }

        .why-card:hover .why-icon svg {
            color: var(--white);
        }

        .why-icon svg {
            font-size: 36px;
            color: var(--primary);
            transition: all 0.3s;
        }

        .why-card h3 {
            font-size: 24px;
            color: var(--black);
            margin-bottom: 15px;
            font-weight: 700;
        }

        .why-card p {
            color: var(--medium-gray);
            line-height: 1.7;
        }

        /* Services Section */
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
            padding: 32px;
            background: var(--white);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-md);
            transition: all 0.3s ease;
            border: 1px solid var(--border-gray);
        }

        .rtl .service-item {
            flex-direction: row-reverse;
        }

        .service-item:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
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
            transition: all 0.3s;
        }

        .service-item:hover .service-icon {
            background: var(--primary);
        }

        .service-item:hover .service-icon svg {
            color: var(--white);
        }

        .service-icon svg {
            font-size: 36px;
            color: var(--primary);
            transition: all 0.3s;
        }

        .service-content h3 {
            font-size: 22px;
            color: var(--black);
            margin-bottom: 12px;
            font-weight: 700;
        }

        .service-content p {
            color: var(--medium-gray);
            line-height: 1.7;
            margin-bottom: 15px;
        }

        .service-features {
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

        .service-features li svg {
            color: var(--primary);
            font-size: 14px;
            flex-shrink: 0;
        }

        /* Process Section */
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

        .rtl .process-step:not(:last-child)::after {
            content: '→';
            left: auto;
            right: -20px;
        }

        .step-number {
            width: 80px;
            height: 80px;
            background: var(--white);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
            font-size: 32px;
            font-weight: 800;
            color: var(--primary);
            border: 2px solid var(--primary);
            transition: all 0.3s;
        }

        .process-step:hover .step-number {
            background: var(--primary);
            color: var(--white);
            transform: scale(1.05);
        }

        .process-step h3 {
            font-size: 20px;
            color: var(--black);
            margin-bottom: 12px;
            font-weight: 700;
        }

        .process-step p {
            color: var(--medium-gray);
            font-size: 14px;
            line-height: 1.6;
        }

        /* Brand Section */
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
            font-size: 44px;
            margin-bottom: 20px;
            font-weight: 800;
        }

        .brand-content h2 span {
            color: var(--primary);
        }

        .brand-content p {
            color: rgba(255,255,255,0.85);
            margin-bottom: 24px;
            font-size: 18px;
            line-height: 1.8;
        }

        .brand-stats {
            display: flex;
            justify-content: center;
            gap: 60px;
            margin-top: 50px;
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
            color: rgba(255,255,255,0.7);
            font-size: 14px;
            letter-spacing: 0.5px;
        }

        /* FAQ Section */
        .faq-section {
            padding: 80px 0;
            background: var(--white);
        }

        .faq-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
            margin-top: 50px;
        }

        .faq-item {
            background: var(--white);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow-md);
            border: 1px solid var(--border-gray);
            overflow: hidden;
            transition: all 0.3s;
        }

        .faq-item:hover {
            box-shadow: var(--shadow-lg);
        }

        .faq-question {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 24px 28px;
            cursor: pointer;
            transition: all 0.3s;
        }

        .faq-question:hover {
            background: var(--primary-soft);
        }

        .faq-question-left {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .rtl .faq-question-left {
            flex-direction: row-reverse;
        }

        .faq-question-left svg {
            font-size: 22px;
            color: var(--primary);
            flex-shrink: 0;
        }

        .faq-question-left h3 {
            font-size: 18px;
            color: var(--black);
            font-weight: 600;
            margin: 0;
        }

        .faq-icon {
            font-size: 20px;
            color: var(--primary);
            transition: transform 0.3s;
        }

        .faq-icon.open {
            transform: rotate(180deg);
        }

        .faq-answer {
            padding: 0 28px 24px 28px;
            color: var(--medium-gray);
            line-height: 1.7;
            border-top: 1px solid var(--border-gray);
            display: none;
        }

        .faq-answer.open {
            display: block;
        }

        /* CTA Section */
        .cta-section {
            padding: 80px 0;
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            color: var(--white);
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .cta-content {
            max-width: 700px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }

        .cta-content h2 {
            font-size: 44px;
            margin-bottom: 20px;
            font-weight: 800;
        }

        .cta-content p {
            font-size: 18px;
            margin-bottom: 32px;
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
            font-size: 16px;
            transition: all 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }

        .cta-btn-primary:hover {
            background: var(--black);
            color: var(--white);
            transform: translateY(-3px);
        }

        .cta-btn-whatsapp {
            background: var(--whatsapp);
            color: var(--white);
            padding: 16px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            transition: all 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 10px;
        }

        .cta-btn-whatsapp:hover {
            background: var(--whatsapp-dark);
            transform: translateY(-3px);
        }

        /* Responsive */
        @media (max-width: 1024px) {
            .section-title { font-size: 36px; }
            .page-header h1 { font-size: 44px; }
            .intro-content h2 { font-size: 34px; }
        }

        @media (max-width: 992px) {
            .intro-wrapper {
                flex-direction: column;
                text-align: center;
            }
            .rtl .intro-wrapper {
                flex-direction: column;
            }
            .why-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 24px;
            }
            .services-grid {
                grid-template-columns: 1fr;
                gap: 24px;
            }
            .process-steps {
                grid-template-columns: repeat(2, 1fr);
                gap: 40px;
            }
            .process-step:not(:last-child)::after {
                display: none;
            }
            .faq-grid {
                grid-template-columns: 1fr;
            }
            .brand-stats {
                gap: 40px;
            }
        }

        @media (max-width: 768px) {
            .container {
                padding: 0 20px;
            }
            .page-header {
                padding: 50px 0 40px;
            }
            .page-header h1 {
                font-size: 32px;
            }
            .page-header p {
                font-size: 16px;
            }
            .section-title {
                font-size: 28px;
            }
            .section-subtitle {
                font-size: 16px;
                margin-bottom: 30px;
            }
            .intro-content h2 {
                font-size: 28px;
            }
            .why-grid {
                grid-template-columns: 1fr;
            }
            .process-steps {
                grid-template-columns: 1fr;
                gap: 30px;
            }
            .brand-content h2 {
                font-size: 32px;
            }
            .brand-stats {
                flex-direction: column;
                gap: 30px;
            }
            .cta-content h2 {
                font-size: 32px;
            }
            .cta-buttons {
                flex-direction: column;
                align-items: center;
            }
            .cta-btn-primary, .cta-btn-whatsapp {
                width: 100%;
                justify-content: center;
            }
            .service-item {
                flex-direction: column;
                align-items: center;
                text-align: center;
            }
            .rtl .service-item {
                flex-direction: column;
            }
            .service-features li {
                justify-content: center;
            }
            .faq-question {
                padding: 18px 20px;
            }
            .faq-question-left h3 {
                font-size: 16px;
            }
        }
      `}</style>

      <div className="rtl">
        {/* Page Header */}
        <section className="page-header">
          <div className="container">
            <div className="breadcrumb">
              <Link href="/ar">🏠 الرئيسية</Link> 
              <span> &gt; </span> 
              <span>✨ خدمة العلامة الخاصة 2026</span>
            </div>
            <h1><span>خدمة العلامة الخاصة</span> 2026</h1>
            <p>ابنِ علامتك التجارية الخاصة في الأزياء المحتشمة من خلال حلولنا الشاملة. من الملصقات إلى التغليف، كل ما تحتاجه لإنشاء هوية فريدة.</p>
          </div>
        </section>

        {/* Service Intro */}
        <section className="service-intro">
          <div className="container">
            <div className="intro-wrapper">
              <div className="intro-content">
                <span className="badge-2026">✨ نسخة 2026 | جودة تركية</span>
                <h2>ابنِ <span>هوية علامتك التجارية</span> المميزة في سوق الأزياء المحتشمة</h2>
                <p className="lead">في سوق الأزياء التنافسي اليوم، امتلاك هوية علامة تجارية مميزة لم يعد خياراً - بل هو ضروري للنجاح والاستمرارية.</p>
                <p>تمكنك خدمة العلامة الخاصة الشاملة من بناء وتوسيع علامتك التجارية في سوق الحجاب دون تعقيدات التصنيع. نوفر منتجات تركية فاخرة كلوحة بيضاء لرؤية علامتك التجارية، مما يتيح لك التركيز على ما يهم حقاً: تنمية عملك والتواصل مع عملائك.</p>
                <p>سواء كنت تطلق بوتيكاً جديداً، أو توسع عملاً قائماً، أو تنشئ مجموعة حصرية، فإن حل العلامة الخاصة لدينا يمنحك المرونة والجودة التي تحتاجها لتتميز في سوق الأزياء المحتشمة.</p>
              </div>
              <div className="intro-image">
                <Image 
                  src="/images/private-label-intro.webp" 
                  alt="خدمة العلامة الخاصة للأزياء المحتشمة - ابنِ علامتك التجارية" 
                  width={500} 
                  height={400} 
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/images/fallback-private-label.webp'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Private Label Section */}
        <section className="why-section">
          <div className="container">
            <h2 className="section-title">لماذا <span>العلامة الخاصة</span> في 2026؟</h2>
            <p className="section-subtitle">مفتاح بناء علامة أزياء مستدامة ومعروفة</p>
            
            <div className="why-grid">
              <div className="why-card">
                <div className="why-icon">
                  <FaCrown size={32} />
                </div>
                <h3>ملكية العلامة التجارية</h3>
                <p>ابنِ علامة تجارية تملكها بالكامل. تتيح لك العلامة الخاصة إنشاء هوية فريدة يعرفها العملاء ويثقون بها، مما يميزك عن المنافسين.</p>
              </div>
              
              <div className="why-card">
                <div className="why-icon">
                  <FaChartLine size={32} />
                </div>
                <h3>نمو طويل المدى</h3>
                <p>اخلق ولاء للعلامة التجارية وعملاء متكررين. عندما تمتلك علامتك التجارية، يعود العملاء إلى علامتك الخاصة، مما يخلق نمواً مستداماً وهوامش ربح أعلى.</p>
              </div>
              
              <div className="why-card">
                <div className="why-icon">
                  <FaStar size={32} />
                </div>
                <h3>تحديد موقع متميز</h3>
                <p>ضع منتجاتك في مستوى متميز. علامتك التجارية تنقل الجودة والحصرية، مما يسمح لك ببناء علامة تجارية تفرض الاحترام والتسعير المتميز.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <div className="container">
            <h2 className="section-title">خدمات <span>العلامة الخاصة</span> الشاملة</h2>
            <p className="section-subtitle">اختر بالضبط ما تحتاجه لتحقيق رؤية علامتك التجارية</p>
            
            <div className="services-grid">
              <div className="service-item">
                <div className="service-icon">
                  <FaTag size={36} />
                </div>
                <div className="service-content">
                  <h3>ملصقات مخصصة منسوجة</h3>
                  <p>ملصقات منسوجة عالية الجودة تحمل اسم علامتك التجارية وشعارك وتعليمات العناية. متوفرة بأحجام وألوان مختلفة لتتناسب مع هوية علامتك التجارية.</p>
                  <ul className="service-features">
                    <li><FaCheck size={14} /> مادة ساتان منسوجة فاخرة</li>
                    <li><FaCheck size={14} /> خيارات ألوان متعددة</li>
                    <li><FaCheck size={14} /> أحجام وأشكال مخصصة</li>
                    <li><FaCheck size={14} /> ملصقات عناية مدمجة</li>
                  </ul>
                </div>
              </div>
              
              <div className="service-item">
                <div className="service-icon">
                  <FaTags size={36} />
                </div>
                <div className="service-content">
                  <h3>علامات سعر مخصصة</h3>
                  <p>علامات سعر احترافية تنقل قصة علامتك التجارية ومعلومات المنتج. صمم بنفسك أو اعمل مع فريقنا لإنشاء علامات مميزة.</p>
                  <ul className="service-features">
                    <li><FaCheck size={14} /> خيارات ورق فاخر</li>
                    <li><FaCheck size={14} /> نقش وختم رقائق معدنية</li>
                    <li><FaCheck size={14} /> أشكال وأحجام مخصصة</li>
                    <li><FaCheck size={14} /> ملحقات خيط أو شريط مطاطي أو شريط</li>
                  </ul>
                </div>
              </div>
              
              <div className="service-item">
                <div className="service-icon">
                  <FaBox size={36} />
                </div>
                <div className="service-content">
                  <h3>تغليف مخصص</h3>
                  <p>أنشئ تجربة فتح علبة كاملة بتغليف مخصص يعكس علامتك التجارية. من الأكياس البلاستيكية إلى الصناديق، نساعدك في تصميم تغليف مميز.</p>
                  <ul className="service-features">
                    <li><FaCheck size={14} /> أكياس بلاستيكية مطبوعة مخصصة</li>
                    <li><FaCheck size={14} /> صناديق وطرود ذات علامة تجارية</li>
                    <li><FaCheck size={14} /> ورق مناديل وملصقات</li>
                    <li><FaCheck size={14} /> خيارات صديقة للبيئة متاحة</li>
                  </ul>
                </div>
              </div>
              
              <div className="service-item">
                <div className="service-icon">
                  <FaPalette size={36} />
                </div>
                <div className="service-content">
                  <h3>باقة العلامة التجارية الكاملة</h3>
                  <p>الحل الأمثل لبناة العلامات التجارية الجادين. ننسق جميع العناصر - الملصقات والعلامات والتغليف - لإنشاء هوية علامة تجارية متماسكة واحترافية لمنتجاتك.</p>
                  <ul className="service-features">
                    <li><FaCheck size={14} /> تصميم منسق عبر جميع العناصر</li>
                    <li><FaCheck size={14} /> ميزة تسعير الحجم</li>
                    <li><FaCheck size={14} /> استشارة علامة تجارية مخصصة</li>
                    <li><FaCheck size={14} /> جودة متسقة عبر جميع المنتجات</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="process-section">
          <div className="container">
            <h2 className="section-title">عملية <span>بسيطة من 4 خطوات</span></h2>
            <p className="section-subtitle">البدء مع علامتك التجارية الخاصة سهل وسلس</p>
            
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">1</div>
                <h3>شارك رؤيتك</h3>
                <p>اتصل بنا بمفهوم علامتك التجارية وشعارك وتفضيلات التصميم للملصقات والعلامات والتغليف.</p>
              </div>
              <div className="process-step">
                <div className="step-number">2</div>
                <h3>اختر منتجاتك</h3>
                <p>اختر من كتالوجنا الواسع الذي يضم أكثر من 5000 قطعة تركية فاخرة لبناء مجموعتك.</p>
              </div>
              <div className="process-step">
                <div className="step-number">3</div>
                <h3>صمم واعتمد</h3>
                <p>نقوم بإنشاء نماذج رقمية للملصقات والعلامات والتغليف الخاص بك للمراجعة والموافقة.</p>
              </div>
              <div className="process-step">
                <div className="step-number">4</div>
                <h3>الإنتاج والشحن</h3>
                <p>يتم تجهيز منتجاتك ذات العلامة التجارية وشحنها إليك مع التتبع، جاهزة لعملائك.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Section */}
        <section className="brand-section">
          <div className="container">
            <div className="brand-content">
              <h2>ابنِ علامة تجارية <span>تدوم</span></h2>
              <p>في صناعة الأزياء سريعة الخطى، العلامات التجارية ذات الهويات القوية والمتابعين المخلصين هي التي تزدهر. تمنحك خدمة العلامة الخاصة لدينا الأساس لبناء ذلك بالضبط - علامة تجارية يعرفها العملاء ويثقون بها ويعودون إليها موسمًا بعد موسم.</p>
              <p>مع علامتك التجارية الخاصة، أنت لا تبيع المنتجات فقط؛ بل تبني قيمة. كل عملية بيع تعزز التعرف على علامتك التجارية، وكل عميل راضٍ يصبح سفيراً لهويتك الفريدة في عالم الأزياء المحتشمة.</p>
              
              <div className="brand-stats">
                <div className="brand-stat">
                  <div className="number">78%</div>
                  <div className="label">من المستهلكين يفضلون المنتجات ذات العلامات التجارية</div>
                </div>
                <div className="brand-stat">
                  <div className="number">3.5x</div>
                  <div className="label">زيادة في الاحتفاظ بالعملاء مع العلامة الخاصة</div>
                </div>
                <div className="brand-stat">
                  <div className="number">40%+</div>
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
            <p className="section-subtitle">كل ما تريد معرفته عن خدمة العلامة الخاصة لدينا</p>
            
            <div className="faq-grid">
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq(0)}>
                  <div className="faq-question-left">
                    <FaQuestionCircle size={22} />
                    <h3>ما هو الحد الأدنى لكمية الطلب للعلامة الخاصة؟</h3>
                  </div>
                  <span className={`faq-icon ${openFaq === 0 ? 'open' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${openFaq === 0 ? 'open' : ''}`}>
                  نقدم خيارات مرنة تناسب الأعمال بجميع أحجامها. سواء كنت تبدأ للتو أو تتوسع، يمكننا تلبية احتياجاتك. اتصل بنا لمناقشة متطلباتك الخاصة وسنجد حلاً يناسبك.
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq(1)}>
                  <div className="faq-question-left">
                    <FaQuestionCircle size={22} />
                    <h3>هل يمكنني مزج منتجات مختلفة في طلب العلامة الخاصة؟</h3>
                  </div>
                  <span className={`faq-icon ${openFaq === 1 ? 'open' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${openFaq === 1 ? 'open' : ''}`}>
                  بالتأكيد! يمكنك اختيار أي مجموعة من المنتجات من كتالوجنا - عباءات، حجاب، فساتين، ملابس صلاة، والمزيد - كل ذلك مع علامتك التجارية المخصصة.
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq(2)}>
                  <div className="faq-question-left">
                    <FaQuestionCircle size={22} />
                    <h3>كم تستغرق عملية العلامة الخاصة؟</h3>
                  </div>
                  <span className={`faq-icon ${openFaq === 2 ? 'open' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${openFaq === 2 ? 'open' : ''}`}>
                  يعتمد الجدول الزمني على متطلباتك الخاصة. عادةً، يستغرق إنتاج الملصقات 2-3 أسابيع، مع شحن يستغرق 3-7 أيام عمل في جميع أنحاء العالم.
                </div>
              </div>
              
              <div className="faq-item">
                <div className="faq-question" onClick={() => toggleFaq(3)}>
                  <div className="faq-question-left">
                    <FaQuestionCircle size={22} />
                    <h3>هل يمكنكم المساعدة في التصميم إذا لم يكن لدي عمل فني؟</h3>
                  </div>
                  <span className={`faq-icon ${openFaq === 3 ? 'open' : ''}`}>▼</span>
                </div>
                <div className={`faq-answer ${openFaq === 3 ? 'open' : ''}`}>
                  نعم! يمكن لفريقنا تقديم إرشادات تصميم أساسية ومواصفات لضمان أن ملصقاتك وعلاماتك تلبي المعايير المهنية.
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
              <p>اتخذ الخطوة الأولى نحو إنشاء خط الأزياء المحتشم الخاص بك ذو العلامة التجارية. اتصل بنا اليوم لمناقشة رؤيتك وابدأ الرحلة.</p>
              <div className="cta-buttons">
                <a href="https://wa.me/905519522448" className="cta-btn-whatsapp" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={20} /> تحدث عبر واتساب
                </a>
                <Link href="/ar/contact" className="cta-btn-primary">
                  اتصل بنا <FaArrowLeft size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
