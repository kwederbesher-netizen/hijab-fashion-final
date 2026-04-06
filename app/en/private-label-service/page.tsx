'use client'

// app/en/private-label-service/page.tsx
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
  FaArrowRight,
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

export default function PrivateLabelServicePage() {
  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Smooth scroll for anchor links
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
        <title>Private Label Service 2026 | Build Your Own Hijab Brand | Hijab Fashion Mall</title>
        <meta name="description" content="Build your own modest fashion brand with our comprehensive private label service. Custom woven labels, hang tags, premium packaging, and more. Start your brand today!" />
        <meta name="keywords" content="private label hijab, custom labels, hang tags, custom packaging, branding services, Turkish wholesale, modest fashion brand, private label clothing, custom clothing labels, hijab brand, modest wear private label" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hijabfashionmall.com/en/private-label-service" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/private-label-service" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/private-label-service" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/private-label-service" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/private-label-service" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/private-label-service" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/private-label-service" />
        <link rel="alternate" hrefLang="x-default" href="https://hijabfashionmall.com/en/private-label-service" />
        <meta property="og:title" content="Private Label Service 2026 | Build Your Own Hijab Brand" />
        <meta property="og:description" content="Build your own modest fashion brand with our comprehensive private label service. Custom woven labels, hang tags, premium packaging, and more." />
        <meta property="og:image" content="https://hijabfashionmall.com/images/private-label-intro.webp" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://hijabfashionmall.com/en/private-label-service" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Private Label Service 2026 | Build Your Own Hijab Brand" />
        <meta name="twitter:description" content="Build your own modest fashion brand with our comprehensive private label service." />
        <meta name="twitter:image" content="https://hijabfashionmall.com/images/private-label-intro.webp" />
      </Head>

      <style>{`
        /* Modern CSS Reset & Variables */
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
            --telegram: #0088cc;
            --success: #28a745;
            --warning: #ffc107;
            --info: #17a2b8;
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
            font-family: 'Inter', 'Poppins', system-ui, -apple-system, sans-serif;
            color: var(--dark-gray);
            line-height: 1.6;
            background: var(--white);
        }

        .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* Typography */
        h1, h2, h3, h4, h5, h6 {
            font-weight: 700;
            line-height: 1.3;
            letter-spacing: -0.02em;
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

        .btn-outline {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: transparent;
            color: var(--primary);
            padding: 12px 28px;
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
            content: 'PRIVATE LABEL 2026';
            position: absolute;
            top: 15%;
            right: 3%;
            font-size: 70px;
            font-weight: 800;
            color: rgba(255, 90, 0, 0.03);
            z-index: 0;
            line-height: 1;
            white-space: nowrap;
            transform: rotate(3deg);
            letter-spacing: 5px;
        }

        .page-header::after {
            content: '';
            position: absolute;
            bottom: -50px;
            left: -50px;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(255,90,0,0.05) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
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

        .cta-section::after {
            content: '';
            position: absolute;
            bottom: -50%;
            left: -20%;
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

        /* Animations */
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

        .service-intro, .why-section, .services-section, .process-section, .brand-section, .faq-section, .cta-section {
            animation: fadeInUp 0.6s ease forwards;
        }
      `}</style>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/en">?? Home</Link> 
            <span> &gt; </span> 
            <span>? Private Label Service 2026</span>
          </div>
          <h1><span>Private Label Service</span> 2026</h1>
          <p>Build your own modest fashion brand with our comprehensive solutions. From labels to packaging, everything you need to create a unique identity.</p>
        </div>
      </section>

      {/* Service Intro */}
      <section className="service-intro">
        <div className="container">
          <div className="intro-wrapper">
            <div className="intro-content">
              <span className="badge-2026">? 2026 EDITION | TURKISH QUALITY</span>
              <h2>Build Your <span>Distinct Brand Identity</span> in the Modest Fashion Market</h2>
              <p className="lead">In today's competitive fashion market, having a distinctive brand identity is no longer optional it's essential for success and longevity.</p>
              <p>Our comprehensive private label service empowers you to build and expand your brand in the hijab market without the complexities of manufacturing. We provide premium Turkish products as a blank canvas for your brand vision, allowing you to focus on what truly matters: growing your business and connecting with your customers.</p>
              <p>Whether you're launching a new boutique, expanding an existing business, or creating an exclusive collection, our private label solution gives you the flexibility and quality you need to stand out in the modest fashion market.</p>
            </div>
            <div className="intro-image">
              <Image 
                src="/images/private-label-intro.webp" 
                alt="Private label service for modest fashion clothing - Build your own brand with custom labels and packaging" 
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
          <h2 className="section-title">Why <span>Private Label</span> in 2026?</h2>
          <p className="section-subtitle">The key to building a sustainable, recognized fashion brand</p>
          
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">
                <FaCrown size={32} />
              </div>
              <h3>Brand Ownership</h3>
              <p>Build a brand that you fully own. Private labeling allows you to create a unique identity that customers recognize and trust, setting you apart from competitors.</p>
            </div>
            
            <div className="why-card">
              <div className="why-icon">
                <FaChartLine size={32} />
              </div>
              <h3>Long-Term Growth</h3>
              <p>Create brand loyalty and repeat customers. When you own your brand, customers come back to your specific brand, creating sustainable growth and higher margins.</p>
            </div>
            
            <div className="why-card">
              <div className="why-icon">
                <FaStar size={32} />
              </div>
              <h3>Premium Positioning</h3>
              <p>Position your products at a premium level. Your own brand conveys quality and exclusivity, allowing you to build a brand that commands respect and premium pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Grid */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Our Comprehensive <span>Private Label Services</span></h2>
          <p className="section-subtitle">Choose exactly what you need to bring your brand vision to life</p>
          
          <div className="services-grid">
            {/* Service 1: Custom Labels */}
            <div className="service-item">
              <div className="service-icon">
                <FaTag size={36} />
              </div>
              <div className="service-content">
                <h3>Custom Woven Labels</h3>
                <p>High-quality woven labels featuring your brand name, logo, and care instructions. Available in various sizes and colors to match your brand identity.</p>
                <ul className="service-features">
                  <li><FaCheck size={14} /> Premium woven satin material</li>
                  <li><FaCheck size={14} /> Multiple color options available</li>
                  <li><FaCheck size={14} /> Custom sizes and shapes</li>
                  <li><FaCheck size={14} /> Integrated care labels</li>
                </ul>
              </div>
            </div>
            
            {/* Service 2: Hang Tags */}
            <div className="service-item">
              <div className="service-icon">
                <FaTags size={36} />
              </div>
              <div className="service-content">
                <h3>Custom Hang Tags</h3>
                <p>Professional hang tags that communicate your brand story and product information. Design yourself or work with our team to create standout tags.</p>
                <ul className="service-features">
                  <li><FaCheck size={14} /> Premium paper options</li>
                  <li><FaCheck size={14} /> Embossing & foil stamping</li>
                  <li><FaCheck size={14} /> Custom shapes and sizes</li>
                  <li><FaCheck size={14} /> String, elastic, or ribbon attachments</li>
                </ul>
              </div>
            </div>
            
            {/* Service 3: Custom Packaging */}
            <div className="service-item">
              <div className="service-icon">
                <FaBox size={36} />
              </div>
              <div className="service-content">
                <h3>Custom Packaging</h3>
                <p>Create a complete unboxing experience with custom packaging that reflects your brand. From poly bags to boxes, we help you design distinctive packaging.</p>
                <ul className="service-features">
                  <li><FaCheck size={14} /> Custom printed poly bags</li>
                  <li><FaCheck size={14} /> Branded boxes and mailers</li>
                  <li><FaCheck size={14} /> Tissue paper and stickers</li>
                  <li><FaCheck size={14} /> Eco-friendly options available</li>
                </ul>
              </div>
            </div>
            
            {/* Service 4: Complete Branding Package */}
            <div className="service-item">
              <div className="service-icon">
                <FaPalette size={36} />
              </div>
              <div className="service-content">
                <h3>Complete Branding Package</h3>
                <p>The ultimate solution for serious brand builders. We coordinate all elements labels, tags, and packaging to create a cohesive, professional brand identity for your products.</p>
                <ul className="service-features">
                  <li><FaCheck size={14} /> Coordinated design across all items</li>
                  <li><FaCheck size={14} /> Volume pricing advantage</li>
                  <li><FaCheck size={14} /> Dedicated brand consultation</li>
                  <li><FaCheck size={14} /> Consistent quality across all products</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2 className="section-title">Simple <span>4-Step Process</span></h2>
          <p className="section-subtitle">Getting started with your private label brand is easy and seamless</p>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Share Your Vision</h3>
              <p>Contact us with your brand concept, logo, and design preferences for labels, tags, and packaging.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Select Your Products</h3>
              <p>Choose from our extensive catalog of 5,000+ premium Turkish items to build your collection.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Design & Approve</h3>
              <p>We create digital mockups of your labels, tags, and packaging for your review and approval.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Production & Shipping</h3>
              <p>Your branded products are prepared and shipped to you with tracking, ready for your customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Building Section */}
      <section className="brand-section">
        <div className="container">
          <div className="brand-content">
            <h2>Build a Brand <span>That Lasts</span></h2>
            <p>In the fast-paced fashion industry, brands with strong identities and loyal followings are the ones that thrive. Our private label service gives you the foundation to build exactly that a brand customers recognize, trust, and return to season after season.</p>
            <p>With your own brand, you're not just selling products; you're building equity. Every sale reinforces your brand recognition, and every satisfied customer becomes an ambassador for your unique identity in the modest fashion space.</p>
            
            <div className="brand-stats">
              <div className="brand-stat">
                <div className="number">78%</div>
                <div className="label">of consumers prefer branded products</div>
              </div>
              <div className="brand-stat">
                <div className="number">3.5x</div>
                <div className="label">increase in customer retention with private label</div>
              </div>
              <div className="brand-stat">
                <div className="number">40%+</div>
                <div className="label">higher profit margins</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Frequently <span>Asked Questions</span></h2>
          <p className="section-subtitle">Everything you need to know about our private label service</p>
          
          <div className="faq-grid">
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(0)}>
                <div className="faq-question-left">
                  <FaQuestionCircle size={22} />
                  <h3>What is the minimum order quantity for private label?</h3>
                </div>
                <span className={`faq-icon ${openFaq === 0 ? 'open' : ''}`}>?</span>
              </div>
              <div className={`faq-answer ${openFaq === 0 ? 'open' : ''}`}>
                We offer flexible options to suit businesses of all sizes. Whether you're just starting out or scaling up, we can accommodate your needs. Contact us to discuss your specific requirements and we'll find a solution that works for you.
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(1)}>
                <div className="faq-question-left">
                  <FaQuestionCircle size={22} />
                  <h3>Can I mix different products in my private label order?</h3>
                </div>
                <span className={`faq-icon ${openFaq === 1 ? 'open' : ''}`}>?</span>
              </div>
              <div className={`faq-answer ${openFaq === 1 ? 'open' : ''}`}>
                Absolutely! You can select any combination of products from our catalog abayas, hijabs, dresses, prayer clothes, and more all with your custom branding. This gives you the flexibility to create a diverse collection that truly represents your brand.
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(2)}>
                <div className="faq-question-left">
                  <FaQuestionCircle size={22} />
                  <h3>How long does the private label process take?</h3>
                </div>
                <span className={`faq-icon ${openFaq === 2 ? 'open' : ''}`}>?</span>
              </div>
              <div className={`faq-answer ${openFaq === 2 ? 'open' : ''}`}>
                Timeline depends on your specific requirements. Typically, label production takes 2-3 weeks, with shipping taking 3-7 business days worldwide. We'll provide you with a detailed timeline based on your order.
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(3)}>
                <div className="faq-question-left">
                  <FaQuestionCircle size={22} />
                  <h3>Can you help with design if I don't have artwork?</h3>
                </div>
                <span className={`faq-icon ${openFaq === 3 ? 'open' : ''}`}>?</span>
              </div>
              <div className={`faq-answer ${openFaq === 3 ? 'open' : ''}`}>
                Yes! Our team can provide basic design guidance and specifications to ensure your labels and tags meet professional standards. We'll work with you to bring your brand vision to life, even if you're starting from scratch.
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(4)}>
                <div className="faq-question-left">
                  <FaQuestionCircle size={22} />
                  <h3>Do you ship worldwide?</h3>
                </div>
                <span className={`faq-icon ${openFaq === 4 ? 'open' : ''}`}>?</span>
              </div>
              <div className={`faq-answer ${openFaq === 4 ? 'open' : ''}`}>
                Yes, we ship to customers worldwide. Our logistics network ensures reliable delivery to most countries with tracking information provided for every order.
              </div>
            </div>
            
            <div className="faq-item">
              <div className="faq-question" onClick={() => toggleFaq(5)}>
                <div className="faq-question-left">
                  <FaQuestionCircle size={22} />
                  <h3>What makes Turkish products special?</h3>
                </div>
                <span className={`faq-icon ${openFaq === 5 ? 'open' : ''}`}>?</span>
              </div>
              <div className={`faq-answer ${openFaq === 5 ? 'open' : ''}`}>
                Turkish textiles are world-renowned for their exceptional quality, durability, and craftsmanship. Our products are made from premium materials with attention to every detail, ensuring your brand is associated with excellence.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Your Brand?</h2>
            <p>Take the first step toward creating your own branded modest fashion line. Contact us today to discuss your vision and start the journey.</p>
            <div className="cta-buttons">
              <a 
                href="https://wa.me/905519522448" 
                className="cta-btn-whatsapp" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={20} /> Chat on WhatsApp
              </a>
              <Link href="/en/contact" className="cta-btn-primary">
                Contact Us <FaArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Private Label Service",
            "description": "Build your own modest fashion brand with custom labels, hang tags, and packaging",
            "provider": {
              "@type": "Organization",
              "name": "Hijab Fashion Mall",
              "url": "https://hijabfashionmall.com",
              "logo": "https://hijabfashionmall.com/images/logo.png"
            },
            "areaServed": "Worldwide",
            "serviceType": "Private Label Branding",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "USD"
            }
          })
        }}
      />
    </>
  )
}
