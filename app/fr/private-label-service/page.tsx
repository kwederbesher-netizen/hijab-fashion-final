'use client'

// app/fr/private-label-service/page.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { 
  FaCrown, FaChartLine, FaStar, FaTag, FaTags, FaBox, FaPalette, 
  FaQuestionCircle, FaCheck, FaWhatsapp, FaArrowRight
} from 'react-icons/fa'

export default function PrivateLabelServiceFrenchPage() {
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
        <title>Service Marque Priv e 2026 | Cr ez Votre Propre Marque | Hijab Fashion Mall</title>
        <meta name="description" content="Cr ez votre propre marque de mode modeste avec notre service de marque priv e complet. Etiquettes personnalis es,  tiquettes de prix, emballage premium et plus encore. Lancez votre marque d s aujourd'hui !" />
        <meta name="keywords" content="marque priv e hijab,  tiquettes personnalis es,  tiquettes de prix, emballage personnalis , services de marque, grossiste turc, marque de mode modeste, v tements marque priv e" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hijabfashionmall.com/fr/private-label-service" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/private-label-service" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/private-label-service" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/private-label-service" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/private-label-service" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/private-label-service" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/private-label-service" />
        <link rel="alternate" hrefLang="x-default" href="https://hijabfashionmall.com/en/private-label-service" />
        <meta property="og:title" content="Service Marque Priv e 2026 | Cr ez Votre Propre Marque" />
        <meta property="og:description" content="Cr ez votre propre marque de mode modeste avec notre service de marque priv e complet." />
        <meta property="og:image" content="https://hijabfashionmall.com/images/private-label-intro.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://hijabfashionmall.com/fr/private-label-service" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Service Marque Priv e 2026 | Cr ez Votre Propre Marque" />
        <meta name="twitter:description" content="Cr ez votre propre marque de mode modeste avec notre service de marque priv e complet." />
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
            font-family: 'Poppins', system-ui, -apple-system, sans-serif;
            color: var(--dark-gray);
            line-height: 1.6;
            background: var(--white);
        }

        .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 24px;
        }

        h1, h2, h3, h4, h5, h6 {
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: -0.02em;
        }

        /* Buttons */
        .btn-primary {
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

        .btn-primary:hover {
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
            left: 0;
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
            content: 'MARQUE PRIVEE 2026';
            position: absolute;
            top: 15%;
            right: 3%;
            font-size: 50px;
            font-weight: 800;
            color: rgba(255, 90, 0, 0.03);
            z-index: 0;
            line-height: 1;
            white-space: nowrap;
            transform: rotate(3deg);
            letter-spacing: 2px;
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
            left: 0;
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
            transition: color 0.3s;
        }

        .breadcrumb a:hover {
            text-decoration: underline;
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
            padding-left: 0;
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
            content: '?';
            position: absolute;
            top: 40px;
            right: -20px;
            font-size: 30px;
            color: var(--primary);
            opacity: 0.5;
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

        .cta-section::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -20%;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            border-radius: 50%;
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

        @media (max-width: 480px) {
            .page-header h1 {
                font-size: 28px;
            }
            .badge-2026 {
                font-size: 12px;
            }
            .why-card {
                padding: 30px 20px;
            }
            .why-card h3 {
                font-size: 20px;
            }
            .brand-stat .number {
                font-size: 36px;
            }
        }
      `}</style>

      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/fr">?? Accueil</Link> 
            <span> &gt; </span> 
            <span>? Service Marque Priv e 2026</span>
          </div>
          <h1><span>Service Marque Priv e</span> 2026</h1>
          <p>Cr ez votre propre marque de mode modeste avec nos solutions compl tes. Des  tiquettes   l'emballage, tout ce dont vous avez besoin pour cr er une identit  unique.</p>
        </div>
      </section>

      <section className="service-intro">
        <div className="container">
          <div className="intro-wrapper">
            <div className="intro-content">
              <span className="badge-2026">? Edition 2026 | Qualit  Turque</span>
              <h2>Cr ez <span>Votre Identit  de Marque Distinctive</span> sur le March  de la Mode Modeste</h2>
              <p className="lead">Sur le march  de la mode concurrentiel d'aujourd'hui, avoir une identit  de marque distinctive n'est plus optionnel - c'est essentiel pour le succ s et la long vit .</p>
              <p>Notre service de marque priv e complet vous permet de construire et d velopper votre marque sur le march  du hijab sans les complexit s de la fabrication. Nous fournissons des produits turcs premium comme toile vierge pour votre vision de marque, vous permettant de vous concentrer sur ce qui compte vraiment : d velopper votre entreprise et vous connecter avec vos clients.</p>
              <p>Que vous lanciez une nouvelle boutique, d veloppiez une entreprise existante ou cr iez une collection exclusive, notre solution de marque priv e vous donne la flexibilit  et la qualit  dont vous avez besoin pour vous d marquer sur le march  de la mode modeste.</p>
            </div>
            <div className="intro-image">
              <Image 
                src="/images/private-label-intro.webp" 
                alt="Service marque priv e pour la mode modeste" 
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

      <section className="why-section">
        <div className="container">
          <h2 className="section-title">Pourquoi la <span>Marque Priv e</span> en 2026?</h2>
          <p className="section-subtitle">La cl  pour construire une marque de mode durable et reconnue</p>
          
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon"><FaCrown size={32} /></div>
              <h3>Propri t  de la Marque</h3>
              <p>Construisez une marque que vous poss dez enti rement. La marque priv e vous permet de cr er une identit  unique que les clients reconnaissent et en qui ils ont confiance.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><FaChartLine size={32} /></div>
              <h3>Croissance   Long Terme</h3>
              <p>Cr ez la fid lit    la marque et des clients fid les. Quand vous poss dez votre marque, les clients reviennent sp cifiquement   vous.</p>
            </div>
            <div className="why-card">
              <div className="why-icon"><FaStar size={32} /></div>
              <h3>Positionnement Premium</h3>
              <p>Positionnez vos produits   un niveau premium. Votre propre marque transmet qualit  et exclusivit .</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Nos <span>Services de Marque Priv e</span> Complets</h2>
          <p className="section-subtitle">Choisissez exactement ce dont vous avez besoin pour concr tiser votre vision de marque</p>
          
          <div className="services-grid">
            <div className="service-item">
              <div className="service-icon"><FaTag size={36} /></div>
              <div className="service-content">
                <h3>Etiquettes Tiss es Personnalis es</h3>
                <p>Etiquettes tiss es de haute qualit  avec votre nom de marque, logo et instructions d'entretien.</p>
                <ul className="service-features">
                  <li><FaCheck size={14} /> Satin tiss  premium</li>
                  <li><FaCheck size={14} /> Plusieurs options de couleurs</li>
                  <li><FaCheck size={14} /> Tailles et formes personnalis es</li>
                  <li><FaCheck size={14} /> Etiquettes d'entretien int gr es</li>
                </ul>
              </div>
            </div>
            
            <div className="service-item">
              <div className="service-icon"><FaTags size={36} /></div>
              <div className="service-content">
                <h3>Etiquettes de Prix Personnalis es</h3>
                <p>Etiquettes professionnelles qui communiquent l'histoire de votre marque et les informations produit.</p>
                <ul className="service-features">
                  <li><FaCheck size={14} /> Options de papier premium</li>
                  <li><FaCheck size={14} /> Gaufrage et estampage</li>
                  <li><FaCheck size={14} /> Formes et tailles personnalis es</li>
                  <li><FaCheck size={14} /> Attaches en ficelle ou ruban</li>
                </ul>
              </div>
            </div>
            
            <div className="service-item">
              <div className="service-icon"><FaBox size={36} /></div>
              <div className="service-content">
                <h3>Emballage Personnalis </h3>
                <p>Cr ez une exp rience de d ballage compl te avec un emballage personnalis  qui refl te votre marque.</p>
                <ul className="service-features">
                  <li><FaCheck size={14} /> Sacs poly imprim s personnalis s</li>
                  <li><FaCheck size={14} /> Bo tes et envois personnalis s</li>
                  <li><FaCheck size={14} /> Papier de soie et autocollants</li>
                  <li><FaCheck size={14} /> Options  cologiques disponibles</li>
                </ul>
              </div>
            </div>
            
            <div className="service-item">
              <div className="service-icon"><FaPalette size={36} /></div>
              <div className="service-content">
                <h3>Pack Complet de Marque</h3>
                <p>La solution ultime pour les b tisseurs de marque s rieux. Nous coordonnons tous les  l ments pour cr er une identit  coh rente.</p>
                <ul className="service-features">
                  <li><FaCheck size={14} /> Design coordonn  sur tous les articles</li>
                  <li><FaCheck size={14} /> Tarification avantageuse</li>
                  <li><FaCheck size={14} /> Consultation de marque d di e</li>
                  <li><FaCheck size={14} /> Qualit  constante</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Processus <span>Simple en 4 Etapes</span></h2>
          <p className="section-subtitle">Commencer avec votre marque priv e est facile et fluide</p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Partagez Votre Vision</h3>
              <p>Contactez-nous avec votre concept de marque, logo et pr f rences de design.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>S lectionnez Vos Produits</h3>
              <p>Choisissez parmi notre catalogue de 5000+ articles turcs premium.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Design & Approbation</h3>
              <p>Nous cr ons des maquettes num riques pour votre examen et approbation.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Production & Exp dition</h3>
              <p>Vos produits personnalis s sont pr par s et exp di s avec suivi.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="container">
          <div className="brand-content">
            <h2>Construisez une Marque <span>Qui Dure</span></h2>
            <p>Dans l'industrie de la mode en  volution rapide, les marques avec des identit s fortes et des suivis fid les sont celles qui prosp rent. Notre service de marque priv e vous donne la base pour construire exactement cela - une marque que les clients reconnaissent, en qui ils ont confiance et   laquelle ils reviennent saison apr s saison.</p>
            <p>Avec votre propre marque, vous ne vendez pas seulement des produits ; vous construisez une valeur. Chaque vente renforce la reconnaissance de votre marque, et chaque client satisfait devient un ambassadeur de votre identit  unique.</p>
            
            <div className="brand-stats">
              <div className="brand-stat">
                <div className="number">78%</div>
                <div className="label">des consommateurs pr f rent les produits de marque</div>
              </div>
              <div className="brand-stat">
                <div className="number">3.5x</div>
                <div className="label">augmentation de la fid lisation client</div>
              </div>
              <div className="brand-stat">
                <div className="number">40%+</div>
                <div className="label">marges b n ficiaires plus  lev es</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Questions <span>Fr quemment Pos es</span></h2>
          <p className="section-subtitle">Tout ce que vous devez savoir sur notre service de marque priv e</p>
          
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(0)}>
                <div className="faq-question-left">
                  <FaQuestionCircle size={22} />
                  <h3>Quelle est la quantit  minimum de commande?</h3>
                </div>
                <span className={`faq-icon ${openFaq === 0 ? 'open' : ''}`}>?</span>
              </div>
              <div className={`faq-answer ${openFaq === 0 ? 'open' : ''}`}>
                Nous offrons des options flexibles pour les entreprises de toutes tailles. Contactez-nous pour discuter de vos besoins sp cifiques.
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(1)}>
                <div className="faq-question-left">
                  <FaQuestionCircle size={22} />
                  <h3>Puis-je m langer diff rents produits?</h3>
                </div>
                <span className={`faq-icon ${openFaq === 1 ? 'open' : ''}`}>?</span>
              </div>
              <div className={`faq-answer ${openFaq === 1 ? 'open' : ''}`}>
                Absolument! Vous pouvez choisir n'importe quelle combinaison de notre catalogue - abayas, hijabs, robes, v tements de pri re, et plus.
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(2)}>
                <div className="faq-question-left">
                  <FaQuestionCircle size={22} />
                  <h3>Combien de temps prend le processus?</h3>
                </div>
                <span className={`faq-icon ${openFaq === 2 ? 'open' : ''}`}>?</span>
              </div>
              <div className={`faq-answer ${openFaq === 2 ? 'open' : ''}`}>
                La production prend g n ralement 2-3 semaines, avec une livraison de 3-7 jours ouvrables dans le monde.
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(3)}>
                <div className="faq-question-left">
                  <FaQuestionCircle size={22} />
                  <h3>Pouvez-vous aider avec le design?</h3>
                </div>
                <span className={`faq-icon ${openFaq === 3 ? 'open' : ''}`}>?</span>
              </div>
              <div className={`faq-answer ${openFaq === 3 ? 'open' : ''}`}>
                Oui! Notre  quipe peut fournir des conseils de design pour garantir des normes professionnelles.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Pr t   Construire Votre Marque?</h2>
            <p>Faites le premier pas vers la cr ation de votre propre ligne de mode modeste personnalis e. Contactez-nous d s aujourd'hui.</p>
            <div className="cta-buttons">
              <a href="https://wa.me/905519522448" className="cta-btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={20} /> WhatsApp
              </a>
              <Link href="/fr/contact" className="cta-btn-primary">
                Contactez-nous <FaArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Service Marque Priv e",
            "description": "Cr ez votre propre marque de mode modeste avec  tiquettes personnalis es et emballage",
            "provider": {
              "@type": "Organization",
              "name": "Hijab Fashion Mall",
              "url": "https://hijabfashionmall.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "Marque Priv e"
          })
        }}
      />
    </>
  )
}
