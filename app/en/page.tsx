// app/en/page.tsx
'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useCurrency } from '@/app/contexts/CurrencyContext'

export default function HomePageEn() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const { formatPrice } = useCurrency()
  
  // ✅ أضف null كقيمة أولية
  const isMounted = useRef(true)
  const sliderInterval = useRef<NodeJS.Timeout | null>(null)

  // Load products from API with Pagination
  useEffect(() => {
    isMounted.current = true
    const abortController = new AbortController()
    
    async function loadProducts() {
      try {
        const res = await fetch('/api/products?limit=8&sort=newest', {
          signal: abortController.signal
        })
        const data = await res.json()
        
        if (data.result && isMounted.current) {
          setProducts(data.result)
          console.log('✅ Products loaded:', data.result.length)
        }
      } catch (error: any) {
        if (error.name !== 'AbortError' && isMounted.current) {
          console.error('Error loading products:', error)
        }
      } finally {
        if (isMounted.current) {
          setLoading(false)
        }
      }
    }
    loadProducts()

    return () => {
      isMounted.current = false
      abortController.abort()
    }
  }, [])

  // Hero Slider
  useEffect(() => {
    sliderInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3)
    }, 5000)
    
    return () => {
      if (sliderInterval.current) {
        clearInterval(sliderInterval.current)
      }
    }
  }, [])

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Add to cart function
  const addToCart = useCallback((product: any, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]')
    
    const isRSS = product['rss/not rss message_en']?.includes('single piece') || 
                  product['rss/not rss message_ar']?.includes('قطعة واحدة')
    const packetSize = product.pcs_per_packet ? parseInt(product.pcs_per_packet) : 1
    const requestedQuantity = 1
    
    const productToAdd = {
      _id: product._id,
      name_ar: product.name_ar,
      name_en: product.name_en,
      price_usd: product.price_usd,
      product_code: product.product_code,
      imageUrl: product.imageUrl,
      slug_ar: product.slug_ar,
      slug_en: product.slug_en,
      category_main_en: product.category_main_en,
      quantity: requestedQuantity,
      packetSize: packetSize,
      isRSS: isRSS,
      unitPrice: product.price_usd
    }
    
    const existingIndex = currentCart.findIndex((item: any) => item._id === product._id)
    
    if (existingIndex !== -1) {
      currentCart[existingIndex].quantity += requestedQuantity
    } else {
      currentCart.push(productToAdd)
    }
    
    localStorage.setItem('cart', JSON.stringify(currentCart))
    
    // ✅ أضف الأنواع
    const totalItems = currentCart.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0)
    
    const cartCountElement = document.getElementById('cartCount')
    if (cartCountElement) {
      cartCountElement.textContent = totalItems.toString()
    }
    
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: totalItems }))
    
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent('openCart'))
    }, 50)
  }, [])

  // Generate product URL
  const getProductUrl = useCallback((product: any) => {
    if (product.slug_en) {
      return `/en/product/${product.slug_en}`
    } else if (product.slug_ar) {
      return `/en/product/${product.slug_ar}`
    } else {
      return `/en/product/${product._id || 'product'}`
    }
  }, [])

  return (
    <>
      <Head>
        <title>Hijab Fashion Mall | Wholesale Turkish Hijab Wear - Modest Fashion Supplier from Turkey</title>
        <meta name="description" content="Premium Turkish hijab wholesale since 2019. 5000+ products: Abayas, Modest Dresses, Sets, Sportswear. No minimum order, worldwide shipping, 24/7 support. Join 5000+ retailers worldwide." />
        <meta name="keywords" content="wholesale hijab turkish, modest fashion wholesale, hijab wholesale, abaya wholesale, modest dresses turkey, turkish hijab supplier, turkey" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hijabfashionmall.com/en" />
        <link rel="alternate" href="https://hijabfashionmall.com" hrefLang="en" />
        <link rel="alternate" href="https://hijabfashionmall.com/ar" hrefLang="ar" />
        <link rel="alternate" href="https://hijabfashionmall.com" hrefLang="x-default" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Hijab Fashion Mall - Wholesale Turkish Hijab Wear" />
        <meta property="og:description" content="Leading supplier of Turkish modest fashion wholesale. 5000+ products, worldwide shipping, no minimum order." />
        <meta property="og:url" content="https://hijabfashionmall.com/en" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hijabfashionmall.com/images/og-home.jpg" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hijab Fashion Mall",
              "url": "https://hijabfashionmall.com",
              "logo": "https://hijabfashionmall.com/logo.png",
              "description": "Leading wholesale supplier of Turkish modest fashion",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TR"
              }
            })
          }}
        />
      </Head>

      <div>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
          
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

          .btn-view-all {
            display: inline-block;
            background: var(--black);
            color: var(--white);
            padding: 16px 45px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 18px;
            transition: all 0.3s;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          }

          .btn-view-all:hover {
            background: var(--dark-gray);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          }

          .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--primary);
            color: white;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            box-shadow: 0 4px 15px rgba(255, 90, 0, 0.3);
            z-index: 999;
            transition: all 0.3s;
            opacity: 0;
            visibility: hidden;
            animation: fadeIn 0.3s;
          }

          .back-to-top.show {
            opacity: 1;
            visibility: visible;
          }

          .back-to-top:hover {
            transform: translateY(-5px);
            background: var(--primary-dark);
          }

          .hero-slider {
            position: relative;
            height: 650px;
            overflow: hidden;
          }

          .slider-container {
            position: relative;
            height: 100%;
          }

          .slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: var(--white);
          }

          .slide.active {
            opacity: 1;
          }

          .slide::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
          }

          .slide-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            padding: 20px;
            animation: fadeInUp 1s ease;
          }

          .slide h1, .slide h2 {
            font-size: 54px;
            font-weight: 800;
            margin-bottom: 20px;
            text-shadow: 2px 2px 5px rgba(0,0,0,0.5);
            line-height: 1.3;
          }

          .slide p {
            font-size: 22px;
            margin-bottom: 30px;
            opacity: 0.95;
          }

          .slider-dots {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;
            z-index: 3;
          }

          .dot {
            width: 14px;
            height: 14px;
            border-radius: 50%;
            background: rgba(255,255,255,0.5);
            cursor: pointer;
            transition: all 0.3s;
          }

          .dot.active {
            background: var(--primary);
            transform: scale(1.2);
          }

          .ranked-section {
            padding: 60px 0 40px;
            background: var(--light-gray);
            text-align: center;
          }

          .ranked-section .badge {
            display: inline-block;
            background: var(--primary);
            color: var(--white);
            padding: 8px 30px;
            border-radius: 50px;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 20px;
          }

          .ranked-section h3 {
            font-size: 32px;
            color: var(--black);
            margin-bottom: 30px;
            font-weight: 700;
          }

          .ranked-horizontal {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 30px;
            flex-wrap: wrap;
            margin: 30px 0;
          }

          .ranked-h-item {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 20px;
            color: var(--medium-gray);
            background: var(--white);
            padding: 15px 30px;
            border-radius: 50px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.03);
            border: 1px solid rgba(0,0,0,0.02);
            transition: transform 0.3s;
          }

          .ranked-h-item:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(255, 90, 0, 0.1);
          }

          .simple-icon {
            font-size: 32px;
            line-height: 1;
          }

          .ranked-h-item strong {
            color: var(--black);
            margin-right: 5px;
            font-weight: 700;
          }

          .ranked-btn {
            display: inline-block;
            background: transparent;
            color: var(--primary);
            padding: 14px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 18px;
            transition: all 0.3s;
            border: 2px solid var(--primary);
          }

          .ranked-btn:hover {
            background: var(--primary);
            color: var(--white);
          }

          .channels-section {
            padding: 40px 0 60px;
            background: var(--light-gray);
          }

          .channels-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            max-width: 900px;
            margin: 0 auto;
          }

          .channel-card {
            background: var(--white);
            border-radius: 20px;
            padding: 40px 30px;
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
            width: 90px;
            height: 90px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 45px;
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
            font-size: 26px;
            margin-bottom: 15px;
            color: var(--black);
            font-weight: 700;
          }

          .channel-card p {
            color: var(--medium-gray);
            margin-bottom: 20px;
            font-size: 16px;
          }

          .channel-stats {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 25px;
          }

          .channel-stats span {
            font-size: 15px;
            color: var(--medium-gray);
          }

          .channel-stats i {
            margin-right: 5px;
            color: var(--primary);
          }

          .channel-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            padding: 14px 35px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 17px;
            transition: all 0.3s;
            width: 100%;
            max-width: 280px;
            margin: 0 auto;
            color: var(--white);
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

          .privatelabel-features i {
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
          }

          .privatelabel-btn:hover {
            background: var(--primary-dark);
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(255, 90, 0, 0.3);
          }

          .categories-section {
            padding: 70px 0;
            background: var(--light-gray);
          }

          .categories-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
            margin-top: 40px;
          }

          .category-card {
            position: relative;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s;
            aspect-ratio: 3/4;
            text-decoration: none;
            display: block;
          }

          .category-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(255, 90, 0, 0.2);
          }

          .category-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
          }

          .category-card:hover img {
            transform: scale(1.1);
          }

          .category-info {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(transparent, rgba(0,0,0,0.9));
            color: var(--white);
            padding: 25px;
            text-align: center;
          }

          .category-info h3 {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 5px;
          }

          .category-info p {
            font-size: 16px;
            opacity: 0.9;
            margin: 0;
          }

          .products-section {
            padding: 70px 0;
            background: var(--white);
          }

          .products-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 25px;
            margin: 40px 0 30px;
          }

          .product-card {
            background: var(--white);
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 5px 20px rgba(0,0,0,0.03);
            transition: transform 0.3s;
            border: 1px solid rgba(0,0,0,0.02);
            text-decoration: none;
            color: inherit;
            display: block;
          }

          .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(255, 90, 0, 0.1);
          }

          .product-image {
            width: 100%;
            height: 350px;
            overflow: hidden;
            position: relative;
            background-color: #f8f8f8;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .product-image img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            transition: transform 0.5s;
            padding: 10px;
          }

          .product-card:hover .product-image img {
            transform: scale(1.03);
          }

          .product-info {
            padding: 20px;
            text-align: center;
          }

          .product-info h3 {
            font-size: 18px;
            font-weight: 600;
            color: var(--black);
            margin-bottom: 10px;
            line-height: 1.5;
          }

          .product-price {
            color: var(--primary);
            font-weight: 700;
            font-size: 20px;
            margin-bottom: 15px;
          }

          .add-to-cart {
            background: var(--primary);
            color: var(--white);
            border: none;
            padding: 12px 20px;
            border-radius: 50px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            width: 100%;
            transition: background 0.3s;
          }

          .add-to-cart:hover {
            background: var(--primary-dark);
          }

          .view-all-container {
            text-align: center;
            margin-top: 30px;
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
          }

          .testimonial-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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

          .blogs-section {
            padding: 70px 0;
            background: var(--light-gray);
          }

          .blogs-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
            margin-top: 40px;
          }

          .blog-card {
            background: var(--white);
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 5px 20px rgba(0,0,0,0.03);
            transition: transform 0.3s;
          }

          .blog-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(255, 90, 0, 0.1);
          }

          .blog-image {
            width: 100%;
            height: 220px;
            overflow: hidden;
          }

          .blog-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s;
          }

          .blog-card:hover .blog-image img {
            transform: scale(1.05);
          }

          .blog-content {
            padding: 25px;
            text-align: left;
          }

          .blog-category {
            display: inline-block;
            background: rgba(255, 90, 0, 0.08);
            color: var(--primary);
            font-size: 14px;
            font-weight: 600;
            padding: 5px 15px;
            border-radius: 30px;
            margin-bottom: 12px;
          }

          .blog-content h3 {
            font-size: 20px;
            font-weight: 700;
            color: var(--black);
            margin-bottom: 12px;
            line-height: 1.4;
          }

          .blog-content p {
            font-size: 16px;
            color: var(--medium-gray);
            margin-bottom: 15px;
            line-height: 1.7;
          }

          .blog-link {
            color: var(--primary);
            text-decoration: none;
            font-weight: 600;
            font-size: 16px;
            display: inline-flex;
            align-items: center;
            gap: 5px;
            transition: gap 0.3s;
          }

          .blog-link:hover {
            gap: 8px;
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

          @media (max-width: 992px) {
            .features-grid,
            .products-grid,
            .testimonials-grid,
            .blogs-grid,
            .channels-grid,
            .faq-grid-cards {
              grid-template-columns: repeat(2, 1fr);
            }
            
            .categories-grid {
              grid-template-columns: repeat(2, 1fr);
            }
            
            .privatelabel-wrapper {
              grid-template-columns: 1fr;
            }
            
            .privatelabel-content {
              padding: 40px;
            }
          }

          @media (max-width: 768px) {
            .hero-slider {
              height: 500px;
            }
            
            .slide h1, .slide h2 {
              font-size: 36px;
            }
            
            .slide p {
              font-size: 18px;
            }
            
            .section-title {
              font-size: 32px;
            }
            
            .section-subtitle {
              font-size: 18px;
            }
            
            .features-grid,
            .products-grid,
            .testimonials-grid,
            .blogs-grid,
            .channels-grid,
            .faq-grid-cards,
            .categories-grid {
              grid-template-columns: 1fr;
            }
            
            .ranked-horizontal {
              flex-direction: column;
              gap: 15px;
            }
            
            .ranked-h-item {
              width: 100%;
              justify-content: center;
            }

            .product-image {
              height: 300px;
            }
            
            .products-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 15px;
            }
            
            .product-image {
              height: 250px;
            }
          }
          
          @media (max-width: 576px) {
            .products-grid {
              grid-template-columns: 1fr;
            }
            
            .product-image {
              height: 350px;
            }
          }
        `}</style>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className={`back-to-top ${showBackToTop ? 'show' : ''}`}
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>

        {/* Hero Slider */}
        <section className="hero-slider">
          <div className="slider-container">
            {/* Slide 1 */}
            <div 
              className={`slide ${currentSlide === 0 ? 'active' : ''}`} 
              style={{ backgroundImage: 'url(/images/hero-slider-1.webp)' }}
            >
              <div className="slide-content">
                <h1>Turkish Modest Fashion</h1>
                <p>Discover our exclusive collection of Abayas, Dresses, and Modest Wear</p>
                <Link href="/en/catalog" className="btn">Shop Now</Link>
              </div>
            </div>
            {/* Slide 2 */}
            <div 
              className={`slide ${currentSlide === 1 ? 'active' : ''}`} 
              style={{ backgroundImage: 'url(/images/hero-slider-2.webp)' }}
            >
              <div className="slide-content">
                <h2>Wholesale Prices</h2>
                <p>Best prices for retailers and stores worldwide</p>
                <Link href="/en/catalog" className="btn">View Catalog</Link>
              </div>
            </div>
            {/* Slide 3 */}
            <div 
              className={`slide ${currentSlide === 2 ? 'active' : ''}`} 
              style={{ backgroundImage: 'url(/images/hero-slider-3.webp)' }}
            >
              <div className="slide-content">
                <h2>Fast Worldwide Shipping</h2>
                <p>Delivery to 50+ countries with reliable carriers</p>
                <Link href="/en/catalog" className="btn">Learn More</Link>
              </div>
            </div>
          </div>
          <div className="slider-dots">
            <span 
              className={`dot ${currentSlide === 0 ? 'active' : ''}`} 
              onClick={() => setCurrentSlide(0)}
            ></span>
            <span 
              className={`dot ${currentSlide === 1 ? 'active' : ''}`} 
              onClick={() => setCurrentSlide(1)}
            ></span>
            <span 
              className={`dot ${currentSlide === 2 ? 'active' : ''}`} 
              onClick={() => setCurrentSlide(2)}
            ></span>
          </div>
        </section>

        {/* Ranked Section */}
        <section className="ranked-section">
          <div className="container">
            <span className="badge">🏆 Global Leader</span>
            <h3>We're Ranked #1 on Google for:</h3>
            <div className="ranked-horizontal">
              <div className="ranked-h-item">
                <span className="simple-icon" style={{ color: '#ff5a00' }}>👗</span>
                <span><strong>Wholesale Modest Wear</strong> #1</span>
              </div>
              <div className="ranked-h-item">
                <span className="simple-icon" style={{ color: '#4facfe' }}>🧕</span>
                <span><strong>Wholesale Hijab Fashion</strong> #1</span>
              </div>
              <div className="ranked-h-item">
                <span className="simple-icon" style={{ color: '#f093fb' }}>👚</span>
                <span><strong>Wholesale Modest Sets</strong> #1</span>
              </div>
            </div>
            <Link href="/en/why-were-number-one" className="ranked-btn">See Why We're #1 →</Link>
          </div>
        </section>

        {/* Channels Section */}
        <section className="channels-section">
          <div className="container">
            <h2 className="section-title">Join Our Channels</h2>
            <p className="section-subtitle">Follow us on WhatsApp and Telegram for latest updates and exclusive offers</p>
            <div className="channels-grid">
              <div className="channel-card whatsapp-card">
                <div className="channel-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <h3>WhatsApp Channel</h3>
                <p>Join our WhatsApp channel for daily new arrivals, special discounts, and early access to collections.</p>
                <div className="channel-stats">
                  <span><i className="fas fa-users"></i> 1,500+ members</span>
                  <span><i className="fas fa-image"></i> Daily updates</span>
                </div>
                <a href="https://whatsapp.com/channel/0029VaKJqF6A3kLkHxKJmKJ" className="channel-btn whatsapp-btn" target="_blank" rel="noopener noreferrer">Join WhatsApp Channel</a>
              </div>
              <div className="channel-card telegram-card">
                <div className="channel-icon">
                  <i className="fab fa-telegram-plane"></i>
                </div>
                <h3>Telegram Channel</h3>
                <p>Join our Telegram channel for exclusive content, styling tips, and special offers.</p>
                <div className="channel-stats">
                  <span><i className="fas fa-users"></i> 11,000+ members</span>
                  <span><i className="fas fa-video"></i> Video tutorials</span>
                </div>
                <a href="https://t.me/hijabfashionmall" className="channel-btn telegram-btn" target="_blank" rel="noopener noreferrer">Join Telegram Channel</a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="container">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">Your satisfaction is our priority</p>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <Image src="/images/mix-icon.webp" alt="Mix different products in one order" width={100} height={100} loading="lazy" />
                </div>
                <h3>Mix & Match</h3>
                <p>All your collections in one order. Order the quantity you want at the right cost.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Image src="/images/no-minimum-icon.webp" alt="No minimum order" width={100} height={100} loading="lazy" />
                </div>
                <h3>No Minimum Order</h3>
                <p>No minimum order quantity thanks to our consolidation service. Order what you need.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Image src="/images/original-icon.webp" alt="100% original Turkish craftsmanship" width={100} height={100} loading="lazy" />
                </div>
                <h3>100% Original Turkish</h3>
                <p>We don't sell imitations. Only authentic Turkish quality.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <Image src="/images/service-icon.webp" alt="24/7 customer support" width={100} height={100} loading="lazy" />
                </div>
                <h3>24/7 Support</h3>
                <p>Customer service at your disposal to help with orders and provide personal assistance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Private Label Section */}
        <section className="privatelabel-section">
          <div className="container">
            <div className="privatelabel-wrapper">
              <div className="privatelabel-image">
                <Image src="/images/private-label.webp" alt="Private label service - custom packaging with your logo" width={800} height={800} loading="lazy" />
              </div>
              <div className="privatelabel-content">
                <span className="privatelabel-badge">Premium Service</span>
                <h2 className="privatelabel-title">Your Brand,<br />Your Identity</h2>
                <p className="privatelabel-description">
                  Offer your customers exclusive designs with our <strong>private label service</strong>. 
                  We customize products with your logo, packaging, and specifications for regular orders. 
                  Build your brand with Turkish quality and global reach.
                </p>
                <ul className="privatelabel-features">
                  <li><i className="fas fa-check-circle"></i> Custom packaging with your logo</li>
                  <li><i className="fas fa-check-circle"></i> Exclusive designs for your brand</li>
                  <li><i className="fas fa-check-circle"></i> Flexible minimum for regular orders</li>
                  <li><i className="fas fa-check-circle"></i> Quality control and fast shipping</li>
                </ul>
                
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  <Link href="/en/private-label-service" className="privatelabel-btn" style={{ background: 'transparent', color: 'var(--primary)', border: '2px solid var(--primary)', boxShadow: 'none' }}>
                    <i className="fas fa-newspaper"></i> Read Full Guide
                  </Link>
                  
                  <a href="https://wa.me/905519522448?text=Hello%2C%20I%27m%20interested%20in%20your%20private%20label%20service%20for%20regular%20orders.%20Please%20provide%20more%20information." 
                     className="privatelabel-btn" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp"></i> Inquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="categories-section">
          <div className="container">
            <h2 className="section-title">Explore Our Collections</h2>
            <p className="section-subtitle">Find the perfect style for every occasion</p>
            <div className="categories-grid">
              {/* Abayas */}
              <Link href="/en/category/abayas" className="category-card">
                <Image src="/images/category-abayas.webp" alt="Wholesale Turkish Abayas" width={600} height={800} loading="lazy" />
                <div className="category-info">
                  <h3>Abayas</h3>
                  <p>Medina silk, crepe & more</p>
                </div>
              </Link>
              
              {/* Modest Dresses */}
              <Link href="/en/category/modest-dresses" className="category-card">
                <Image src="/images/category-dresses.webp" alt="Wholesale Modest Dresses" width={600} height={800} loading="lazy" />
                <div className="category-info">
                  <h3>Modest Dresses</h3>
                  <p>Casual & formal</p>
                </div>
              </Link>
              
              {/* Modest Skirt Sets */}
              <Link href="/en/category/modest-skirt-sets" className="category-card">
                <Image src="/images/category-skirt-sets.webp" alt="Wholesale Skirt Sets" width={600} height={800} loading="lazy" />
                <div className="category-info">
                  <h3>Skirt Sets</h3>
                  <p>2-piece sets with skirt</p>
                </div>
              </Link>
              
              {/* Modest Evening Dresses */}
              <Link href="/en/category/modest-evening-dresses" className="category-card">
                <Image src="/images/category-evening-dresses.webp" alt="Wholesale Evening Dresses" width={600} height={800} loading="lazy" />
                <div className="category-info">
                  <h3>Evening Dresses</h3>
                  <p>For special occasions</p>
                </div>
              </Link>
              
              {/* Modest Pants Sets */}
              <Link href="/en/category/modest-pants-sets" className="category-card">
                <Image src="/images/178.webp" alt="Wholesale Pants Sets" width={600} height={800} loading="lazy" />
                <div className="category-info">
                  <h3>Pants Sets</h3>
                  <p>2-piece sets with pants</p>
                </div>
              </Link>
              
              {/* Hijabs */}
              <Link href="/en/category/hijabs" className="category-card">
                <Image src="/images/category-hijabs.webp" alt="Wholesale Turkish Hijabs" width={600} height={800} loading="lazy" />
                <div className="category-info">
                  <h3>Hijabs</h3>
                  <p>Silk, chiffon, cotton</p>
                </div>
              </Link>
              
              {/* Prayer Clothes */}
              <Link href="/en/category/prayer-clothes" className="category-card">
                <Image src="/images/53.webp" alt="Wholesale Prayer Outfits" width={600} height={800} loading="lazy" />
                <div className="category-info">
                  <h3>Prayer Clothes</h3>
                  <p>Sets & dresses for prayer</p>
                </div>
              </Link>
              
              {/* Modest Sportswear */}
              <Link href="/en/category/modest-sportswear" className="category-card">
                <Image src="/images/category-sportswear.webp" alt="Wholesale Modest Sportswear" width={600} height={800} loading="lazy" />
                <div className="category-info">
                  <h3>Sportswear</h3>
                  <p>For activities & sports</p>
                </div>
              </Link>
              
              {/* Burkini & Modest Swimwear */}
              <Link href="/en/category/burkini" className="category-card">
                <Image src="/images/category-swimwear.webp" alt="Wholesale Burkini & Swimwear" width={600} height={800} loading="lazy" />
                <div className="category-info">
                  <h3>Burkini & Swimwear</h3>
                  <p>Modest swimwear</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="products-section">
          <div className="container">
            <h2 className="section-title">Latest Products</h2>
            <p className="section-subtitle">Browse our newest arrivals</p>
            {loading ? (
              <div style={{ textAlign: 'center', padding: '60px', fontSize: '18px', color: '#555' }}>Loading products...</div>
            ) : products.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px', fontSize: '18px', color: '#555' }}>No products found</div>
            ) : (
              <>
                <div className="products-grid">
                  {products.slice(0, 8).map((product: any) => {
                    const productName = product.name_en || product.name_ar || 'Product';
                    const productPrice = product.price_usd || 0;
                    const productUrl = getProductUrl(product);
                    
                    return (
                      <Link 
                        href={productUrl}
                        key={product._id} 
                        className="product-card"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <div className="product-image">
                          <img 
                            src={product.imageUrl || '/images/default.webp'} 
                            alt={productName}
                            width={400} 
                            height={400} 
                            loading="lazy"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/images/default.webp'
                            }}
                          />
                        </div>
                        <div className="product-info">
                          <h3>{productName}</h3>
                          <div className="product-price">
                            {formatPrice(productPrice)}
                          </div>
                          <button 
                            className="add-to-cart" 
                            onClick={(e) => addToCart(product, e)}
                          >
                            <i className="fas fa-shopping-cart"></i> Add to Inquiry
                          </button>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="view-all-container">
                  <Link href="/en/catalog" className="btn-view-all">View All Products</Link>
                </div>
              </>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Find answers to common questions about our services</p>
            <div className="faq-grid-cards">
              <div className="faq-card">
                <div className="faq-card-icon">
                  <i className="fas fa-store"></i>
                </div>
                <h3>Who are we?</h3>
                <p>Hijab Fashion Mall is Turkey's leading marketplace connecting wholesalers with modest fashion retailers worldwide.</p>
              </div>
              <div className="faq-card">
                <div className="faq-card-icon">
                  <i className="fas fa-shopping-cart"></i>
                </div>
                <h3>How to order?</h3>
                <p>Browse catalog, select products, add to inquiry cart, and send via WhatsApp. Our team will confirm within 24 hours.</p>
              </div>
              <div className="faq-card">
                <div className="faq-card-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h3>Do you ship worldwide?</h3>
                <p>Yes! We ship to 50+ countries with reliable carriers. Fast door-to-door delivery with tracking number.</p>
              </div>
              <div className="faq-card">
                <div className="faq-card-icon">
                  <i className="fas fa-credit-card"></i>
                </div>
                <h3>Payment methods?</h3>
                <p>We accept bank transfer, Western Union, and major credit cards. Secure payment processing for your convenience.</p>
              </div>
              <div className="faq-card">
                <div className="faq-card-icon">
                  <i className="fas fa-boxes"></i>
                </div>
                <h3>Minimum order?</h3>
                <p>No minimum quantity! Order what you need - perfect for small boutiques and large retailers alike.</p>
              </div>
              <div className="faq-card">
                <div className="faq-card-icon">
                  <i className="fas fa-truck"></i>
                </div>
                <h3>Order tracking?</h3>
                <p>Once shipped, you'll receive carrier name and tracking number to follow your package in real-time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">Trusted by retailers worldwide</p>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <Image src="/images/testimonial-1.webp" alt="Sarah Ahmed - Boutique owner from London" width={150} height={150} loading="lazy" />
                </div>
                <h4>Sarah Ahmed</h4>
                <div className="location">London, UK</div>
                <p className="testimonial-text">"The quality of the hijabs is exceptional. My customers love the Turkish fabrics, and the wholesale process is seamless."</p>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <Image src="/images/testimonial-2.webp" alt="Fatima Khan - Store owner from New York" width={150} height={150} loading="lazy" />
                </div>
                <h4>Fatima Khan</h4>
                <div className="location">New York, USA</div>
                <p className="testimonial-text">"Reliable supplier with consistent quality. Fast shipping and helpful customer service."</p>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-image">
                  <Image src="/images/testimonial-3.webp" alt="Maryam Al Mansouri - Retailer from Dubai" width={150} height={150} loading="lazy" />
                </div>
                <h4>Maryam Al Mansouri</h4>
                <div className="location">Dubai, UAE</div>
                <p className="testimonial-text">"Amazing product variety. I always find something new for my store."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Blogs Section */}
        <section className="blogs-section">
          <div className="container">
            <h2 className="section-title">Helpful Blogs</h2>
            <p className="section-subtitle">Practical guides to help you make informed business decisions.</p>
            <div className="blogs-grid">
              <div className="blog-card">
                <div className="blog-image">
                  <Image src="/images/blog-1.webp" alt="Guide to starting an online modest fashion store" width={400} height={225} loading="lazy" />
                </div>
                <div className="blog-content">
                  <span className="blog-category">Buying Guide</span>
                  <h3>Online Store</h3>
                  <p>How to create a successful online store to sell modest fashion: The complete 2026 guide.</p>
                  <Link href="/en/online-store-guide" className="blog-link">Read More →</Link>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-image">
                  <Image src="/images/blog-2.webp" alt="How to start a modest fashion boutique" width={400} height={225} loading="lazy" />
                </div>
                <div className="blog-content">
                  <span className="blog-category">Buying Guide</span>
                  <h3>Physical Store</h3>
                  <p>How to start a modest fashion boutique in 2026: Importing from Turkey.</p>
                  <Link href="/en/physical-store-guide" className="blog-link">Read More →</Link>
                </div>
              </div>
              <div className="blog-card">
                <div className="blog-image">
                  <Image src="/images/blog-3.webp" alt="The rise of modest fashion in Europe" width={400} height={225} loading="lazy" />
                </div>
                <div className="blog-content">
                  <span className="blog-category">Market Guide</span>
                  <h3>Modest Fashion Trends</h3>
                  <p>Embracing hijab styles in Europe: Trends and opportunities for retailers.</p>
                  <Link href="/en/modest-fashion-trends" className="blog-link">Read More →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}