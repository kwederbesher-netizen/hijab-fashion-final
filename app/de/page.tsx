'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useCurrency } from '@/app/contexts/CurrencyContext'
import { 
  FaUsers, FaWhatsapp, FaTelegramPlane, FaShoppingCart, FaArrowUp, 
  FaImage, FaVideo, FaCheckCircle, FaNewspaper, FaStore, FaGlobe, 
  FaCreditCard, FaBoxes, FaTruck, FaFacebookF, FaInstagram, FaYoutube
} from 'react-icons/fa'

export default function HomePageDe() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const { formatPrice } = useCurrency()
  
  const isMounted = useRef(true)
  const sliderInterval = useRef<NodeJS.Timeout | null>(null)

  const slides = [
    {
      image: '/images/hero-slider-1.webp',
      title: 'Türkische Bescheidene Mode',
      description: 'Entdecken Sie unsere exklusive Kollektion von Abayas, Kleidern und bescheidener Mode',
      cta: { text: 'Jetzt Einkaufen', link: '/de/catalog' }
    },
    {
      image: '/images/hero-slider-2.webp',
      title: 'Großhandelspreise',
      description: 'Beste Preise für Einzelhändler und Geschäfte weltweit',
      cta: { text: 'Katalog Ansehen', link: '/de/catalog' }
    },
    {
      image: '/images/hero-slider-3.webp',
      title: 'Schneller Weltweiter Versand',
      description: 'Lieferung in über 50 Länder mit zuverlässigen Spediteuren',
      cta: { text: 'Jetzt Einkaufen', link: '/de/catalog' }
    }
  ]

  useEffect(() => {
    isMounted.current = true
    const abortController = new AbortController()
    
    async function loadProducts() {
      try {
        const res = await fetch('/api/products?limit=8&sort=newest', {
          signal: abortController.signal
        })
        const data = await res.json()
        if (data.result && isMounted.current) setProducts(data.result)
      } catch (error: any) {
        if (error.name !== 'AbortError' && isMounted.current) {
          console.error('Fehler beim Laden der Produkte:', error)
        }
      } finally {
        if (isMounted.current) setLoading(false)
      }
    }
    loadProducts()
    return () => { isMounted.current = false; abortController.abort() }
  }, [])

  useEffect(() => {
    sliderInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => { if (sliderInterval.current) clearInterval(sliderInterval.current) }
  }, [slides.length])

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const addToCart = useCallback((product: any, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]')
    const isRSS = product['rss/not rss message_en']?.includes('single piece') || 
                  product['rss/not rss message_ar']?.includes('قطعة واحدة')
    const packetSize = product.pcs_per_packet ? parseInt(product.pcs_per_packet) : 1
    const productToAdd = {
      _id: product._id, name_ar: product.name_ar, name_en: product.name_en, price_usd: product.price_usd,
      product_code: product.product_code, imageUrl: product.imageUrl, slug_ar: product.slug_ar, slug_en: product.slug_en,
      category_main_en: product.category_main_en, quantity: 1, packetSize: packetSize, isRSS: isRSS, unitPrice: product.price_usd
    }
    const existingIndex = currentCart.findIndex((item: any) => item._id === product._id)
    if (existingIndex !== -1) currentCart[existingIndex].quantity += 1
    else currentCart.push(productToAdd)
    localStorage.setItem('cart', JSON.stringify(currentCart))
    const totalItems = currentCart.reduce((sum: number, item: any) => sum + (item.quantity || 1), 0)
    const cartCountElement = document.getElementById('cartCount')
    if (cartCountElement) cartCountElement.textContent = totalItems.toString()
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: totalItems }))
    setTimeout(() => window.dispatchEvent(new CustomEvent('openCart')), 50)
  }, [])

  const getProductUrl = useCallback((product: any) => {
    if (product.slug_en) return `/de/product/${product.slug_en}`
    else if (product.slug_ar) return `/de/product/${product.slug_ar}`
    else return `/de/product/${product._id || 'product'}`
  }, [])

  return (
    <>
      <Head>
        <title>Hijab Fashion Mall | Großhandel Türkische Hijab - Bescheidene Mode aus der Türkei</title>
        <meta name="description" content="Premium türkischer Hijab-Großhandel seit 2019. 5000+ Produkte: Abayas, Bescheidene Kleider, Sets, Sportbekleidung. Keine Mindestbestellung, weltweiter Versand, 24/7 Support." />
        <meta name="keywords" content="Großhandel Hijab türkisch, bescheidene Mode Großhandel, Hijab Großhandel" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hijabfashionmall.com/de" />
      </Head>

      <main id="main-content">
        <style>{`
          html, body { overflow-x: hidden !important; width: 100% !important; position: relative !important; margin: 0 !important; padding: 0 !important; }
          body { overflow-x: hidden !important; font-family: 'Poppins', sans-serif; }
          * { max-width: 100vw !important; box-sizing: border-box !important; }
          .container, [class*="container"], [style*="max-width"] { overflow-x: hidden !important; }
          img, video, iframe, svg { max-width: 100% !important; height: auto !important; }
          :root { --primary: #ff5a00; --primary-dark: #e04e00; --black: #000000; --dark-gray: #222; --medium-gray: #555; --light-gray: #f5f5f5; --white: #fff; --whatsapp: #25d366; --whatsapp-dark: #128C7E; --telegram: #0088cc; --telegram-dark: #006699; }
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Poppins', sans-serif; color: #333; line-height: 1.7; background: #fff; font-size: 16px; }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
          h1, h2, h3, h4, h5, h6 { font-family: 'Poppins', sans-serif; font-weight: 700; }
          .section-title { text-align: center; font-size: 42px; color: var(--black); margin-bottom: 15px; font-weight: 800; letter-spacing: -0.5px; }
          .section-subtitle { text-align: center; color: var(--medium-gray); margin-bottom: 40px; font-size: 20px; font-weight: 400; }
          .btn, .btn-primary { display: inline-block; background: var(--primary); color: var(--white); padding: 16px 45px; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 18px; transition: all 0.3s; border: none; cursor: pointer; box-shadow: 0 4px 15px rgba(255, 90, 0, 0.2); }
          .btn:hover, .btn-primary:hover { background: var(--primary-dark); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255, 90, 0, 0.3); }
          .btn-view-all { display: inline-block; background: var(--black); color: var(--white); padding: 16px 45px; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 18px; transition: all 0.3s; border: none; cursor: pointer; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); }
          .btn-view-all:hover { background: var(--dark-gray); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3); }
          .ranked-section { padding: 60px 0 40px; background: var(--light-gray); text-align: center; }
          .ranked-section .badge { display: inline-block; background: var(--primary); color: var(--white); padding: 8px 30px; border-radius: 50px; font-size: 16px; font-weight: 600; margin-bottom: 20px; }
          .ranked-section h3 { font-size: 32px; color: var(--black); margin-bottom: 30px; font-weight: 700; }
          .ranked-horizontal { display: flex; justify-content: center; align-items: center; gap: 30px; flex-wrap: wrap; margin: 30px 0; }
          .ranked-h-item { display: flex; align-items: center; gap: 12px; font-size: 20px; color: var(--medium-gray); background: var(--white); padding: 15px 30px; border-radius: 50px; box-shadow: 0 5px 15px rgba(0,0,0,0.03); border: 1px solid rgba(0,0,0,0.02); transition: transform 0.3s; }
          .ranked-h-item:hover { transform: translateY(-3px); box-shadow: 0 10px 25px rgba(255, 90, 0, 0.1); }
          .simple-icon { font-size: 32px; line-height: 1; }
          .ranked-h-item strong { color: var(--black); margin-right: 5px; font-weight: 700; }
          .ranked-btn { display: inline-block; background: transparent; color: var(--primary); padding: 14px 40px; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 18px; transition: all 0.3s; border: 2px solid var(--primary); }
          .ranked-btn:hover { background: var(--primary); color: var(--white); }
          .channels-section { padding: 60px 0; background: linear-gradient(135deg, var(--light-gray) 0%, #ffffff 100%); }
          .channels-grid { display: grid; grid-template-columns: repeat(2, 320px); gap: 30px; justify-content: center; margin: 0 auto; }
          .channel-card { background: var(--white); border-radius: 20px; padding: 30px 25px; text-align: center; transition: transform 0.3s; border: 1px solid rgba(0,0,0,0.05); box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
          .channel-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
          .channel-icon { width: 80px; height: 80px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 40px; }
          .whatsapp-card .channel-icon { background: rgba(37, 211, 102, 0.1); color: var(--whatsapp); }
          .telegram-card .channel-icon { background: rgba(0, 136, 204, 0.1); color: var(--telegram); }
          .channel-card h3 { font-size: 24px; margin-bottom: 12px; color: var(--black); font-weight: 700; }
          .channel-card p { color: var(--medium-gray); margin-bottom: 20px; font-size: 15px; line-height: 1.6; }
          .channel-stats { display: flex; justify-content: center; gap: 20px; margin-bottom: 25px; }
          .channel-stats span { font-size: 14px; color: var(--medium-gray); display: flex; align-items: center; gap: 5px; }
          .channel-btn { display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 12px 25px; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 15px; transition: all 0.3s; width: 100%; max-width: 250px; margin: 0 auto; color: var(--white); border: none; cursor: pointer; }
          .whatsapp-btn { background: var(--whatsapp); }
          .whatsapp-btn:hover { background: var(--whatsapp-dark); }
          .telegram-btn { background: var(--telegram); }
          .telegram-btn:hover { background: var(--telegram-dark); }
          .features-section { padding: 70px 0; background: var(--white); border-top: 1px solid #eee; border-bottom: 1px solid #eee; }
          .features-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 25px; margin-top: 40px; }
          .feature-card { background: var(--white); padding: 35px 20px; border-radius: 15px; text-align: center; box-shadow: 0 5px 20px rgba(0,0,0,0.03); transition: transform 0.3s; border: 1px solid rgba(0,0,0,0.02); }
          .feature-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px rgba(255, 90, 0, 0.05); }
          .feature-icon { width: 120px; height: 120px; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; background: rgba(255, 90, 0, 0.05); border-radius: 50%; padding: 20px; transition: all 0.3s; }
          .feature-icon img { width: 100%; height: 100%; object-fit: contain; transition: all 0.3s; }
          .feature-card:hover .feature-icon { background: var(--primary); }
          .feature-card:hover .feature-icon img { filter: brightness(0) invert(1); }
          .feature-card h3 { font-size: 22px; font-weight: 700; margin-bottom: 15px; color: var(--black); }
          .feature-card p { font-size: 16px; color: var(--medium-gray); line-height: 1.7; }
          .privatelabel-section { padding: 80px 0; background: linear-gradient(135deg, var(--light-gray) 0%, #ffffff 100%); border-top: 1px solid #eee; border-bottom: 1px solid #eee; }
          .privatelabel-wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: center; max-width: 1100px; margin: 0 auto; background: var(--white); border-radius: 30px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.05); }
          .privatelabel-image { height: 100%; min-height: 450px; overflow: hidden; position: relative; }
          .privatelabel-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
          .privatelabel-image:hover img { transform: scale(1.03); }
          .privatelabel-content { padding: 40px 40px 40px 0; }
          .privatelabel-badge { display: inline-block; background: rgba(255, 90, 0, 0.1); color: var(--primary); font-size: 14px; font-weight: 600; padding: 6px 18px; border-radius: 30px; margin-bottom: 20px; letter-spacing: 0.5px; }
          .privatelabel-title { font-size: 42px; font-weight: 800; color: var(--black); line-height: 1.2; margin-bottom: 20px; }
          .privatelabel-description { font-size: 18px; color: var(--medium-gray); line-height: 1.8; margin-bottom: 25px; }
          .privatelabel-features { list-style: none; padding: 0; margin-bottom: 30px; }
          .privatelabel-features li { font-size: 17px; color: var(--dark-gray); margin-bottom: 12px; display: flex; align-items: center; gap: 10px; }
          .privatelabel-features svg { color: var(--primary); font-size: 20px; }
          .privatelabel-btn { display: inline-flex; align-items: center; gap: 12px; background: var(--primary); color: var(--white); padding: 16px 40px; border-radius: 50px; text-decoration: none; font-weight: 600; font-size: 17px; transition: all 0.3s; box-shadow: 0 5px 15px rgba(255, 90, 0, 0.2); border: none; cursor: pointer; }
          .privatelabel-btn:hover { background: var(--primary-dark); transform: translateY(-3px); box-shadow: 0 10px 25px rgba(255, 90, 0, 0.3); }
          .categories-section { padding: 70px 0; background: var(--light-gray); }
          .categories-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; margin-top: 40px; }
          .category-card { position: relative; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.1); transition: transform 0.3s; aspect-ratio: 3/4; text-decoration: none; display: block; }
          .category-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(255, 90, 0, 0.2); }
          .category-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
          .category-card:hover img { transform: scale(1.1); }
          .category-info { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.9)); color: var(--white); padding: 25px; text-align: center; }
          .category-info h3 { font-size: 22px; font-weight: 700; margin-bottom: 5px; }
          .category-info p { font-size: 16px; opacity: 0.9; margin: 0; }
          .products-section { padding: 70px 0; background: var(--white); }
          .products-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 25px; margin: 40px 0 30px; }
          .product-card { background: var(--white); border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0,0,0,0.03); transition: transform 0.3s; border: 1px solid rgba(0,0,0,0.02); text-decoration: none; color: inherit; display: block; }
          .product-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(255, 90, 0, 0.1); }
          .product-image { width: 100%; height: 350px; overflow: hidden; position: relative; background-color: #f8f8f8; display: flex; align-items: center; justify-content: center; }
          .product-image img { width: 100%; height: 100%; object-fit: contain; transition: transform 0.5s; padding: 10px; }
          .product-card:hover .product-image img { transform: scale(1.03); }
          .product-info { padding: 20px; text-align: center; }
          .product-info h3 { font-size: 18px; font-weight: 600; color: var(--black); margin-bottom: 10px; line-height: 1.5; }
          .product-price { color: var(--primary); font-weight: 700; font-size: 20px; margin-bottom: 15px; }
          .add-to-cart { background: var(--primary); color: var(--white); border: none; padding: 12px 20px; border-radius: 50px; cursor: pointer; font-size: 16px; font-weight: 600; width: 100%; transition: background 0.3s; display: flex; align-items: center; justify-content: center; gap: 8px; }
          .add-to-cart:hover { background: var(--primary-dark); }
          .view-all-container { text-align: center; margin-top: 30px; }
          .faq-section { padding: 70px 0; background: var(--light-gray); }
          .faq-grid-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; max-width: 1100px; margin: 40px auto 0; }
          .faq-card { background: var(--white); border-radius: 20px; padding: 35px 25px; text-align: center; transition: all 0.3s ease; border: 1px solid rgba(0,0,0,0.03); box-shadow: 0 10px 30px rgba(0,0,0,0.05); }
          .faq-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(255, 90, 0, 0.1); }
          .faq-card-icon { width: 90px; height: 90px; background: rgba(255, 90, 0, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 36px; color: var(--primary); transition: all 0.3s; }
          .faq-card:hover .faq-card-icon { background: var(--primary); color: var(--white); }
          .faq-card h3 { font-size: 20px; font-weight: 700; color: var(--black); margin-bottom: 15px; }
          .faq-card p { font-size: 16px; color: var(--medium-gray); line-height: 1.7; margin: 0; }
          .testimonials-section { padding: 70px 0; background: var(--white); }
          .testimonials-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; margin-top: 40px; }
          .testimonial-card { background: var(--white); border-radius: 15px; padding: 35px; text-align: center; transition: transform 0.3s; box-shadow: 0 5px 20px rgba(0,0,0,0.03); border: 1px solid rgba(0,0,0,0.02); }
          .testimonial-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(255, 90, 0, 0.1); }
          .testimonial-image { width: 100px; height: 100px; border-radius: 50%; overflow: hidden; margin: 0 auto 20px; border: 3px solid var(--primary); position: relative; }
          .testimonial-card h4 { font-size: 20px; font-weight: 700; color: var(--black); margin-bottom: 5px; }
          .testimonial-card .location { color: var(--primary); font-size: 16px; margin-bottom: 15px; }
          .testimonial-text { font-size: 16px; color: var(--medium-gray); line-height: 1.8; font-style: italic; }
          .blogs-section { padding: 70px 0; background: var(--light-gray); }
          .blogs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; margin-top: 40px; }
          .blog-card { background: var(--white); border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0,0,0,0.03); transition: transform 0.3s; }
          .blog-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(255, 90, 0, 0.1); }
          .blog-image { width: 100%; height: 220px; overflow: hidden; position: relative; }
          .blog-card:hover .blog-image img { transform: scale(1.05); }
          .blog-content { padding: 25px; text-align: left; }
          .blog-category { display: inline-block; background: rgba(255, 90, 0, 0.08); color: var(--primary); font-size: 14px; font-weight: 600; padding: 5px 15px; border-radius: 30px; margin-bottom: 12px; }
          .blog-content h3 { font-size: 20px; font-weight: 700; color: var(--black); margin-bottom: 12px; line-height: 1.4; }
          .blog-content p { font-size: 16px; color: var(--medium-gray); margin-bottom: 15px; line-height: 1.7; }
          .blog-link { color: var(--primary); text-decoration: none; font-weight: 600; font-size: 16px; display: inline-flex; align-items: center; gap: 5px; transition: gap 0.3s; }
          .blog-link:hover { gap: 8px; }
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          @media (max-width: 992px) { .features-grid, .testimonials-grid, .blogs-grid, .faq-grid-cards, .categories-grid { grid-template-columns: repeat(2, 1fr) !important; } .privatelabel-wrapper { grid-template-columns: 1fr !important; } .privatelabel-content { padding: 40px !important; } }
          @media (max-width: 768px) { .hero-slider { height: 500px; } .section-title { font-size: 32px; } .section-subtitle { font-size: 18px; } .features-grid, .testimonials-grid, .blogs-grid, .faq-grid-cards, .categories-grid { grid-template-columns: 1fr !important; } .products-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 15px; } .product-image { height: 250px; } .ranked-horizontal { flex-direction: column; gap: 15px; } .ranked-h-item { width: 100%; justify-content: center; } .channels-grid { grid-template-columns: 1fr; gap: 20px; } .channel-card { max-width: 320px; margin: 0 auto; width: 100%; } }
          @media (max-width: 576px) { .products-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 12px; } .product-image { height: 220px; } .product-info h3 { font-size: 14px; } .product-price { font-size: 16px; } .add-to-cart { font-size: 13px; padding: 8px 12px; } }
        `}</style>

        <section className="hero-slider" style={{ position: 'relative', width: '100%', overflow: 'hidden', height: 'auto', maxHeight: '600px' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            {slides.map((slide, index) => (
              <div key={index} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: currentSlide === index ? 1 : 0, transition: 'opacity 0.5s ease-in-out' }}>
                <img src={slide.image} alt={slide.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.55)', zIndex: 1 }} />
                <div className="hero-content" style={{ position: 'absolute', top: '42%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, textAlign: 'center', color: 'white', width: '90%', maxWidth: '800px' }}>
                  <h1 style={{ fontSize: 'clamp(28px, 6vw, 54px)', fontWeight: 800, marginBottom: '20px' }}>{slide.title}</h1>
                  <p style={{ fontSize: 'clamp(14px, 3.5vw, 22px)', marginBottom: '25px' }}>{slide.description}</p>
                  <Link href={slide.cta.link} className="btn" style={{ padding: '14px 40px', fontSize: '16px' }}>{slide.cta.text}</Link>
                </div>
              </div>
            ))}
            <img src={slides[0].image} alt="hidden" style={{ width: '100%', height: 'auto', visibility: 'hidden', display: 'block' }} />
            <div className="hero-dots" style={{ position: 'absolute', bottom: '25px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '12px', zIndex: 3 }}>
              {slides.map((_, index) => (
                <button key={index} onClick={() => setCurrentSlide(index)} style={{ width: '12px', height: '12px', borderRadius: '50%', background: currentSlide === index ? '#ff5a00' : 'rgba(255,255,255,0.6)', border: 'none', cursor: 'pointer', padding: 0, transition: 'all 0.3s' }} aria-label={`Gehe zu Folie ${index + 1}`} />
              ))}
            </div>
          </div>
        </section>

        <section className="ranked-section">
          <div className="container">
            <span className="badge">🏆 Weltmarktführer</span>
            <h3>Wir sind #1 auf Google für:</h3>
            <div className="ranked-horizontal">
              <div className="ranked-h-item"><span className="simple-icon" style={{ color: '#ff5a00' }}>👗</span><span><strong>Großhandel Bescheidene Mode</strong> #1</span></div>
              <div className="ranked-h-item"><span className="simple-icon" style={{ color: '#4facfe' }}>🧕</span><span><strong>Großhandel Hijab Mode</strong> #1</span></div>
              <div className="ranked-h-item"><span className="simple-icon" style={{ color: '#f093fb' }}>👚</span><span><strong>Großhandel Bescheidene Sets</strong> #1</span></div>
            </div>
            <Link href="/de/why-were-number-one" className="ranked-btn">Sehen Sie, warum wir #1 sind →</Link>
          </div>
        </section>

        <section className="channels-section">
          <div className="container">
            <h2 className="section-title">Treten Sie Unseren Kanälen Bei</h2>
            <p className="section-subtitle">Folgen Sie uns auf WhatsApp und Telegram für die neuesten Updates und exklusive Angebote</p>
            <div className="channels-grid">
              <div className="channel-card whatsapp-card">
                <div className="channel-icon"><FaWhatsapp size={40} /></div>
                <h3>WhatsApp-Kanal</h3>
                <p>Treten Sie unserem WhatsApp-Kanal bei für tägliche Neuerscheinungen, Sonderrabatte und frühen Zugang zu Kollektionen.</p>
                <div className="channel-stats"><span><FaUsers size={14} /> 1.500+ Mitglieder</span><span><FaImage size={14} /> Tägliche Updates</span></div>
                <a href="https://whatsapp.com/channel/0029VatIrfWId7nGgsYAFQ1G" className="channel-btn whatsapp-btn" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={18} /> WhatsApp Beitreten</a>
              </div>
              <div className="channel-card telegram-card">
                <div className="channel-icon"><FaTelegramPlane size={40} /></div>
                <h3>Telegram-Kanal</h3>
                <p>Treten Sie unserem Telegram-Kanal bei für exklusive Inhalte, Styling-Tipps und Sonderangebote.</p>
                <div className="channel-stats"><span><FaUsers size={14} /> 11.000+ Mitglieder</span><span><FaVideo size={14} /> Video-Tutorials</span></div>
                <a href="https://t.me/hijabfashionmall" className="channel-btn telegram-btn" target="_blank" rel="noopener noreferrer"><FaTelegramPlane size={18} /> Telegram Beitreten</a>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <h2 className="section-title">Warum Uns Wählen</h2>
            <p className="section-subtitle">Ihre Zufriedenheit ist unsere Priorität</p>
            <div className="features-grid">
              <div className="feature-card"><div className="feature-icon"><Image src="/images/mix-icon.webp" alt="Produkte mischen" width={100} height={100} loading="lazy" /></div><h3>Mix & Match</h3><p>Alle Ihre Kollektionen in einer Bestellung. Bestellen Sie die gewünschte Menge zum richtigen Preis.</p></div>
              <div className="feature-card"><div className="feature-icon"><Image src="/images/no-minimum-icon.webp" alt="Keine Mindestbestellung" width={100} height={100} loading="lazy" /></div><h3>Kein Minimum</h3><p>Keine Mindestbestellmenge dank unseres Konsolidierungsservices. Bestellen Sie, was Sie brauchen.</p></div>
              <div className="feature-card"><div className="feature-icon"><Image src="/images/original-icon.webp" alt="100% original Türkisch" width={100} height={100} loading="lazy" /></div><h3>100% Original Türkisch</h3><p>Wir verkaufen keine Imitationen. Nur authentische türkische Qualität.</p></div>
              <div className="feature-card"><div className="feature-icon"><Image src="/images/service-icon.webp" alt="24/7 Support" width={100} height={100} loading="lazy" /></div><h3>24/7 Support</h3><p>Kundenservice zu Ihrer Verfügung, um bei Bestellungen zu helfen und persönliche Unterstützung zu bieten.</p></div>
            </div>
          </div>
        </section>

        <section className="privatelabel-section">
          <div className="container">
            <div className="privatelabel-wrapper">
              <div className="privatelabel-image"><Image src="/images/private-label.webp" alt="Private Label Service" width={800} height={800} loading="lazy" /></div>
              <div className="privatelabel-content">
                <span className="privatelabel-badge">Premium-Service</span>
                <h2 className="privatelabel-title">Ihre Marke,<br />Ihre Identität</h2>
                <p className="privatelabel-description">Bieten Sie Ihren Kunden exklusive Designs mit unserem <strong>Private-Label-Service</strong>. Wir passen Produkte mit Ihrem Logo, Ihrer Verpackung und Ihren Spezifikationen für regelmäßige Bestellungen an.</p>
                <ul className="privatelabel-features"><li><FaCheckCircle /> Individuelle Verpackung mit Ihrem Logo</li><li><FaCheckCircle /> Exklusive Designs für Ihre Marke</li><li><FaCheckCircle /> Flexibles Minimum für reguläre Bestellungen</li><li><FaCheckCircle /> Qualitätskontrolle und schneller Versand</li></ul>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  <Link href="/de/private-label-service" className="privatelabel-btn" style={{ background: 'transparent', color: 'var(--primary)', border: '2px solid var(--primary)', boxShadow: 'none' }}><FaNewspaper /> Leitfaden Lesen</Link>
                  <a href="https://wa.me/905519522448?text=Hallo%2C%20ich%20bin%20an%20Ihrem%20Private%20Label%20Service%20interessiert" className="privatelabel-btn" target="_blank" rel="noopener noreferrer"><FaWhatsapp /> Anfragen</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="categories-section">
          <div className="container">
            <h2 className="section-title">Entdecken Sie Unsere Kollektionen</h2>
            <p className="section-subtitle">Finden Sie den perfekten Stil für jeden Anlass</p>
            <div className="categories-grid">
              <Link href="/de/category/abayas" className="category-card"><Image src="/images/category-abayas.webp" alt="Abayas" width={600} height={800} loading="lazy" /><div className="category-info"><h3>Abayas</h3><p>Medina-Seide, Crêpe & mehr</p></div></Link>
              <Link href="/de/category/modest-dresses" className="category-card"><Image src="/images/category-dresses.webp" alt="Bescheidene Kleider" width={600} height={800} loading="lazy" /><div className="category-info"><h3>Bescheidene Kleider</h3><p>Lässig & formell</p></div></Link>
              <Link href="/de/category/modest-skirt-sets" className="category-card"><Image src="/images/category-skirt-sets.webp" alt="Rock-Sets" width={600} height={800} loading="lazy" /><div className="category-info"><h3>Rock-Sets</h3><p>2-teilige Sets mit Rock</p></div></Link>
              <Link href="/de/category/modest-evening-dresses" className="category-card"><Image src="/images/category-evening-dresses.webp" alt="Abendkleider" width={600} height={800} loading="lazy" /><div className="category-info"><h3>Abendkleider</h3><p>Für besondere Anlässe</p></div></Link>
              <Link href="/de/category/modest-pants-sets" className="category-card"><Image src="/images/178.webp" alt="Hosen-Sets" width={600} height={800} loading="lazy" /><div className="category-info"><h3>Hosen-Sets</h3><p>2-teilige Sets mit Hose</p></div></Link>
              <Link href="/de/category/hijabs" className="category-card"><Image src="/images/category-hijabs.webp" alt="Hijabs" width={600} height={800} loading="lazy" /><div className="category-info"><h3>Hijabs</h3><p>Seide, Chiffon, Baumwolle</p></div></Link>
              <Link href="/de/category/prayer-clothes" className="category-card"><Image src="/images/53.webp" alt="Gebetskleidung" width={600} height={800} loading="lazy" /><div className="category-info"><h3>Gebetskleidung</h3><p>Sets & Kleider zum Gebet</p></div></Link>
              <Link href="/de/category/modest-sportswear" className="category-card"><Image src="/images/category-sportswear.webp" alt="Sportbekleidung" width={600} height={800} loading="lazy" /><div className="category-info"><h3>Sportbekleidung</h3><p>Für Aktivitäten & Sport</p></div></Link>
              <Link href="/de/category/burkini" className="category-card"><Image src="/images/category-swimwear.webp" alt="Burkini" width={600} height={800} loading="lazy" /><div className="category-info"><h3>Burkini</h3><p>Bescheidene Bademode</p></div></Link>
            </div>
          </div>
        </section>

        <section className="products-section">
          <div className="container">
            <h2 className="section-title">Neueste Produkte</h2>
            <p className="section-subtitle">Stöbern Sie in unseren neuesten Neuheiten</p>
            {loading ? (<div style={{ textAlign: 'center', padding: '60px', fontSize: '18px', color: '#555' }}>Produkte werden geladen...</div>) : products.length === 0 ? (<div style={{ textAlign: 'center', padding: '60px', fontSize: '18px', color: '#555' }}>Keine Produkte gefunden</div>) : (
              <>
                <div className="products-grid">
                  {products.slice(0, 8).map((product: any) => {
                    const productName = product.name_en || product.name_ar || 'Produkt';
                    const productPrice = product.price_usd || 0;
                    const productUrl = getProductUrl(product);
                    return (
                      <Link href={productUrl} key={product._id} className="product-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="product-image"><img src={product.imageUrl || '/images/default.webp'} alt={productName} width={400} height={400} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = '/images/default.webp' }} /></div>
                        <div className="product-info"><h3>{productName}</h3><div className="product-price">{formatPrice(productPrice)}</div><button className="add-to-cart" onClick={(e) => addToCart(product, e)}><FaShoppingCart /> Hinzufügen</button></div>
                      </Link>
                    );
                  })}
                </div>
                <div className="view-all-container"><Link href="/de/catalog" className="btn-view-all">Alle Produkte</Link></div>
              </>
            )}
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
            <h2 className="section-title">Häufig Gestellte Fragen</h2>
            <p className="section-subtitle">Finden Sie Antworten auf häufige Fragen zu unseren Dienstleistungen</p>
            <div className="faq-grid-cards">
              <div className="faq-card"><div className="faq-card-icon"><FaStore size={36} /></div><h3>Wer sind wir?</h3><p>Hijab Fashion Mall ist der führende türkische Marktplatz, der Großhändler mit Einzelhändlern für bescheidene Mode weltweit verbindet.</p></div>
              <div className="faq-card"><div className="faq-card-icon"><FaShoppingCart size={36} /></div><h3>Wie bestelle ich?</h3><p>Durchstöbern Sie den Katalog, wählen Sie Produkte aus, fügen Sie sie zum Anfragekorb hinzu und senden Sie sie über WhatsApp. Unser Team wird innerhalb von 24 Stunden bestätigen.</p></div>
              <div className="faq-card"><div className="faq-card-icon"><FaGlobe size={36} /></div><h3>Liefern Sie weltweit?</h3><p>Ja! Wir liefern in über 50 Länder mit zuverlässigen Spediteuren. Schnelle Tür-zu-Tür-Lieferung mit Sendungsnummer.</p></div>
              <div className="faq-card"><div className="faq-card-icon"><FaCreditCard size={36} /></div><h3>Zahlungsmethoden?</h3><p>Wir akzeptieren Banküberweisungen, Western Union und gängige Kreditkarten.</p></div>
              <div className="faq-card"><div className="faq-card-icon"><FaBoxes size={36} /></div><h3>Mindestbestellung?</h3><p>Keine Mindestmenge! Bestellen Sie, was Sie brauchen.</p></div>
              <div className="faq-card"><div className="faq-card-icon"><FaTruck size={36} /></div><h3>Bestellverfolgung?</h3><p>Nach dem Versand erhalten Sie den Namen des Spediteurs und die Sendungsnummer.</p></div>
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="container">
            <h2 className="section-title">Was Unsere Kunden Sagen</h2>
            <p className="section-subtitle">Vertrauenswürdig bei Einzelhändlern weltweit</p>
            <div className="testimonials-grid">
              <div className="testimonial-card"><div className="testimonial-image"><Image src="/images/testimonial-1.webp" alt="Sarah Ahmed" width={150} height={150} loading="lazy" /></div><h4>Sarah Ahmed</h4><div className="location">London, Großbritannien</div><p className="testimonial-text">"Die Qualität der Hijabs ist außergewöhnlich. Meine Kunden lieben die türkischen Stoffe."</p></div>
              <div className="testimonial-card"><div className="testimonial-image"><Image src="/images/testimonial-2.webp" alt="Fatima Khan" width={150} height={150} loading="lazy" /></div><h4>Fatima Khan</h4><div className="location">New York, USA</div><p className="testimonial-text">"Zuverlässiger Lieferant mit gleichbleibender Qualität. Schneller Versand."</p></div>
              <div className="testimonial-card"><div className="testimonial-image"><Image src="/images/testimonial-3.webp" alt="Maryam Al Mansouri" width={150} height={150} loading="lazy" /></div><h4>Maryam Al Mansouri</h4><div className="location">Dubai, VAE</div><p className="testimonial-text">"Erstaunliche Produktvielfalt. Ich finde immer etwas Neues für meinen Laden."</p></div>
            </div>
          </div>
        </section>

        <section className="blogs-section">
          <div className="container">
            <h2 className="section-title">Hilfreiche Blogs</h2>
            <p className="section-subtitle">Praktische Leitfäden, die Ihnen helfen, fundierte Geschäftsentscheidungen zu treffen.</p>
            <div className="blogs-grid">
              <div className="blog-card"><div className="blog-image"><Image src="/images/blog-1.webp" alt="Online-Shop Leitfaden" width={400} height={225} loading="lazy" /></div><div className="blog-content"><span className="blog-category">Kaufberatung</span><h3>Online-Shop</h3><p>So erstellen Sie einen erfolgreichen Online-Shop für bescheidene Mode.</p><Link href="/de/online-store-guide" className="blog-link">Weiterlesen →</Link></div></div>
              <div className="blog-card"><div className="blog-image"><Image src="/images/blog-2.webp" alt="Stationärer Laden" width={400} height={225} loading="lazy" /></div><div className="blog-content"><span className="blog-category">Kaufberatung</span><h3>Stationärer Laden</h3><p>So starten Sie eine Boutique für bescheidene Mode im Jahr 2026: Import aus der Türkei.</p><Link href="/de/physical-store-guide" className="blog-link">Weiterlesen →</Link></div></div>
              <div className="blog-card"><div className="blog-image"><Image src="/images/blog-3.webp" alt="Modetrends" width={400} height={225} loading="lazy" /></div><div className="blog-content"><span className="blog-category">Marktführer</span><h3>Modetrends</h3><p>Hijab-Stile in Europa annehmen: Trends und Chancen für Einzelhändler.</p><Link href="/de/modest-fashion-trends" className="blog-link">Weiterlesen →</Link></div></div>
            </div>
          </div>
        </section>

        <a href="https://wa.me/905519522448?text=Hallo%2C%20ich%20habe%20eine%20Frage" className="whatsapp-float" target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: '30px', left: '30px', background: '#25d366', color: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', boxShadow: '0 4px 20px rgba(37,211,102,0.3)', zIndex: 999, transition: 'all 0.3s', textDecoration: 'none' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#128C7E'; e.currentTarget.style.transform = 'scale(1.05)' }} onMouseLeave={(e) => { e.currentTarget.style.background = '#25d366'; e.currentTarget.style.transform = 'scale(1)' }}><FaWhatsapp size={28} /></a>

        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ position: 'fixed', bottom: '30px', right: '30px', width: '50px', height: '50px', borderRadius: '50%', background: '#ff5a00', color: 'white', border: 'none', cursor: 'pointer', display: showBackToTop ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center', fontSize: '24px', boxShadow: '0 4px 15px rgba(255,90,0,0.3)', zIndex: 999, transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#e04e00'; e.currentTarget.style.transform = 'translateY(-2px)' }} onMouseLeave={(e) => { e.currentTarget.style.background = '#ff5a00'; e.currentTarget.style.transform = 'translateY(0)' }} aria-label="Nach oben"><FaArrowUp /></button>
      </main>
    </>
  )
}