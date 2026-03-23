// app/ar/category/modest-skirt-sets/page.tsx
'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function ModestSkirtSetsCategoryPage() {
  const params = useParams()
  
  // تكوين الصفحة حسب التصنيف - مع كلمات مفتاحية متعددة للـ SEO
  const PAGE_CONFIG = {
    category: "طقم تنورة محجبات",
    categoryName: "طقم تنورة محجبات",
    // عنوان SEO طويل يشمل عدة كلمات مفتاحية خاصة بالطقم قطعتين (تنانير)
    pageTitle: "طقم تنورة محجبات | طقم تنورة قطعتين | تنسيقات تنورة طويلة | طقم تنورة وتوب | جملة تركي | حجاب فاشون مول",
    pageDescription: "تشكيلة واسعة من أطقم التنانير المحتشمة بالجملة من تركيا. مجموعات متنوعة من أطقم التنانير المنسقة مع توب، مثالية للخروجات اليومية والمناسبات. بدون حد أدنى للطلب، شحن عالمي سريع. انضم إلى أكثر من 5000+ تاجر تجزئة حول العالم.",
    pageKeywords: "طقم تنورة محجبات, طقم تنورة قطعتين, طقم تنورة وتوب, تنسيقات تنورة محتشمة, أطقم تنورة تركي بالجملة, ملابس محجبات تركية, تنانير طويلة محتشمة",
    h1: "أطقم تنورة محجبات – تنسيقات أنيقة من قطعتين",
    subtitle: "اكتشفي مجموعتنا الرائعة من أطقم التنانير المحتشمة من تركيا. من التنسيقات الكاجوال إلى الأطقم الرسمية، ستجدين أطقم التنانير المثالية لمتجرك بأسعار الجملة.",
    seoContent: {
      h2: "أطقم تنورة محجبات بالجملة – تنسيقات متكاملة من قطعتين",
      p1: "مرحباً بك في حجاب فاشون مول، مصدرك الأول لأطقم التنانير التركية المحتشمة الأصلية. مجموعتنا تضم تنسيقات رائعة من قطعتين تجمع بين الراحة والأناقة. كل طقم تنورة وتوب مصمم لخلق إطلالة متناسقة وراقية مثالية للخروجات اليومية والمناسبات الخاصة.",
      features: [
        "صناعة تركية 100% أصلية",
        "أقمشة فاخرة: فيسكوز، قطن، كريب، خلطات كتان",
        "مقاسات متعددة (XS إلى 4XL) – مقاسات كبيرة متوفرة",
        "بدون حد أدنى للطلب",
        "شحن سريع عالمي (3-7 أيام)",
        "طرق دفع آمنة"
      ],
      popularStyles: "أطقم تنورة طويلة, أطقم تنورة ميدي, أطقم تنورة مطوية, أطقم تنورة A-Line, أطقم تنورة ملفوفة, أطقم تنورة متعددة الطبقات."
    }
  }

  const [products, setProducts] = useState<any[]>([])
  const [filteredProducts, setFilteredProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentSort, setCurrentSort] = useState('default')
  const [cart, setCart] = useState<any[]>([])
  
  // useRef لمنع التحديثات المتكررة
  const isMounted = useRef(true)
  const cartInitialized = useRef(false)
  const processingEvent = useRef(false)
  const cartStringRef = useRef('')
  const productsPerPage = 24

  // تحميل المنتجات من Sanity
  useEffect(() => {
    isMounted.current = true
    
    async function loadProducts() {
      try {
        setLoading(true)
        const res = await fetch('/api/products')
        const data = await res.json()
        
        if (data.result && isMounted.current) {
          // فلترة المنتجات حسب التصنيف (طقم تنورة محجبات)
          // تحسين شروط التصفية لتكون أكثر دقة
          const categoryProducts = data.result.filter((p: any) => 
            p.category_main_en && 
            ((p.category_main_en.toLowerCase().includes('modest set') && 
              p.category_main_en.toLowerCase().includes('skirt')) || 
             p.category_main_en.toLowerCase().includes('skirt set') ||
             (p.name_en?.toLowerCase().includes('skirt set') && 
              !p.name_en?.toLowerCase().includes('pants')) ||
             (p.name_en?.toLowerCase().includes('skirt') && 
              p.name_en?.toLowerCase().includes('set')) ||
             (p.name_ar?.toLowerCase().includes('تنورة') && 
              p.name_ar?.toLowerCase().includes('قطعتين')) ||
             p.name_ar?.toLowerCase().includes('طقم تنورة'))
          )
          
          setProducts(categoryProducts)
          setFilteredProducts(categoryProducts)
          console.log(`✅ تم العثور على ${categoryProducts.length} منتج في قسم أطقم تنورة محجبات`)
        }
      } catch (error) {
        console.error('خطأ في تحميل المنتجات:', error)
      } finally {
        if (isMounted.current) {
          setLoading(false)
        }
      }
    }
    
    loadProducts()
    
    return () => {
      isMounted.current = false
    }
  }, [])

  // تحميل السلة من localStorage - مرة واحدة فقط
  useEffect(() => {
    if (!cartInitialized.current) {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart)
          setCart(parsedCart)
          cartStringRef.current = JSON.stringify(parsedCart)
        } catch (e) {
          console.error('خطأ في تحميل السلة:', e)
        }
      }
      cartInitialized.current = true
    }
  }, [])

  // الاستماع لتحديثات السلة
  useEffect(() => {
    const handleCartUpdate = () => {
      if (processingEvent.current) return
      
      processingEvent.current = true
      
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart)
          const newCartString = JSON.stringify(parsedCart)
          
          if (newCartString !== cartStringRef.current) {
            setCart(parsedCart)
            cartStringRef.current = newCartString
          }
        } catch (e) {
          console.error('خطأ في تحميل السلة:', e)
        }
      }
      
      setTimeout(() => {
        processingEvent.current = false
      }, 100)
    }

    window.addEventListener('cartUpdated', handleCartUpdate)
    
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate)
    }
  }, [])

  // حفظ السلة في localStorage وتحديث العداد
  useEffect(() => {
    if (cartInitialized.current) {
      const newCartString = JSON.stringify(cart)
      
      if (newCartString !== cartStringRef.current) {
        localStorage.setItem('cart', newCartString)
        cartStringRef.current = newCartString
        
        const event = new CustomEvent('cartUpdated', { detail: cart.length })
        window.dispatchEvent(event)
      }
    }
  }, [cart])

  // تطبيق الترتيب
  useEffect(() => {
    let sorted = [...products]
    
    switch(currentSort) {
      case 'price-low':
        sorted.sort((a, b) => (Number(a.price_usd) || 0) - (Number(b.price_usd) || 0))
        break
      case 'price-high':
        sorted.sort((a, b) => (Number(b.price_usd) || 0) - (Number(a.price_usd) || 0))
        break
      case 'name':
        sorted.sort((a, b) => (a.name_ar || a.name_en || '').localeCompare(b.name_ar || b.name_en || ''))
        break
      default:
        sorted = [...products]
    }
    
    setFilteredProducts(sorted)
    setCurrentPage(1)
  }, [currentSort, products])

  // إضافة إلى السلة
  const addToCart = useCallback((product: any, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    setCart(prevCart => {
      const newCart = [...prevCart, product]
      return newCart
    })
    
    const openCartEvent = new CustomEvent('openCart')
    window.dispatchEvent(openCartEvent)
  }, [])

  // تنسيق السعر بشكل آمن
  const formatPrice = (price: any) => {
    if (price === undefined || price === null) return '0.00'
    const num = Number(price)
    return isNaN(num) ? '0.00' : num.toFixed(2)
  }

  const startIndex = (currentPage - 1) * productsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  return (
    <>
      <style>{`
        /* جميع الأنماط - نفس التصميم الأصلي */
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

        /* View All Products Button */
        .btn-view-all {
            display: inline-block;
            background: var(--black);
            color: var(--white);
            padding: 14px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
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

        /* ===== Page Header ===== */
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
            margin: 0 auto 30px;
        }

        .page-header .breadcrumb {
            font-size: 14px;
            color: var(--medium-gray);
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
            color: var(--medium-gray);
            margin: 0 5px;
        }

        /* ===== Category Stats ===== */
        .category-stats {
            background: var(--white);
            padding: 30px 0;
            border-bottom: 1px solid #eee;
        }

        .stats-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        .stats-info {
            display: flex;
            gap: 30px;
            flex-wrap: wrap;
        }

        .stat-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .stat-item i {
            color: var(--primary);
            font-size: 24px;
        }

        .stat-item span {
            font-size: 16px;
            color: var(--medium-gray);
        }

        .stat-item strong {
            color: var(--black);
            font-size: 18px;
            margin-right: 5px;
        }

        .catalog-link {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: var(--primary);
            color: var(--white);
            padding: 12px 30px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
        }

        .catalog-link:hover {
            background: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(255, 90, 0, 0.3);
        }

        /* ===== Products Section ===== */
        .products-section {
            padding: 60px 0;
            background: var(--white);
        }

        .products-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            flex-wrap: wrap;
            gap: 20px;
        }

        .products-header h2 {
            font-size: 24px;
            color: var(--black);
            font-weight: 600;
        }

        .products-header h2 span {
            color: var(--primary);
            font-weight: 700;
        }

        .sort-options {
            display: flex;
            gap: 15px;
            align-items: center;
        }

        .sort-options label {
            color: var(--medium-gray);
            font-size: 14px;
        }

        .sort-options select {
            padding: 8px 15px;
            border: 1px solid #ddd;
            border-radius: 50px;
            font-family: 'Poppins', 'Tajawal', sans-serif;
            outline: none;
            cursor: pointer;
            background: var(--white);
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 25px;
            margin: 0 0 40px;
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
            height: 300px;
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
            font-size: 16px;
            font-weight: 600;
            color: var(--black);
            margin-bottom: 10px;
        }

        .product-price {
            color: var(--primary);
            font-weight: 700;
            font-size: 18px;
            margin-bottom: 15px;
        }

        .add-to-cart {
            background: var(--primary);
            color: var(--white);
            border: none;
            padding: 10px 20px;
            border-radius: 50px;
            cursor: pointer;
            font-size: 14px;
            font-weight: 600;
            width: 100%;
            transition: background 0.3s;
        }

        .add-to-cart:hover {
            background: var(--primary-dark);
        }

        .no-products {
            text-align: center;
            padding: 60px 20px;
            background: var(--light-gray);
            border-radius: 15px;
            grid-column: 1 / -1;
        }

        .no-products i {
            font-size: 60px;
            color: var(--medium-gray);
            margin-bottom: 20px;
        }

        .no-products h3 {
            font-size: 24px;
            color: var(--black);
            margin-bottom: 10px;
        }

        .no-products p {
            color: var(--medium-gray);
            margin-bottom: 20px;
        }

        /* ===== Pagination ===== */
        .pagination {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-top: 40px;
            flex-wrap: wrap;
        }

        .page-btn {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #ddd;
            border-radius: 8px;
            background: var(--white);
            color: var(--medium-gray);
            cursor: pointer;
            transition: all 0.3s;
            font-weight: 500;
        }

        .page-btn:hover {
            background: var(--primary);
            color: var(--white);
            border-color: var(--primary);
        }

        .page-btn.active {
            background: var(--primary);
            color: var(--white);
            border-color: var(--primary);
        }

        .page-btn:disabled,
        .page-btn.disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .page-btn:disabled:hover,
        .page-btn.disabled:hover {
            background: var(--white);
            color: var(--medium-gray);
            border-color: #ddd;
        }

        /* ===== SEO Content ===== */
        .seo-content {
            padding: 60px 0;
            background: var(--light-gray);
            border-top: 1px solid #eee;
            text-align: right;
        }

        .seo-content h2 {
            font-size: 28px;
            color: var(--black);
            margin-bottom: 20px;
            font-weight: 600;
        }

        .seo-content h3 {
            font-size: 22px;
            color: var(--black);
            margin: 30px 0 15px;
            font-weight: 600;
        }

        .seo-content p {
            color: var(--medium-gray);
            line-height: 1.8;
            margin-bottom: 20px;
        }

        .seo-content ul {
            list-style: none;
            padding: 0;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
            margin-bottom: 20px;
        }

        .seo-content ul li {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--medium-gray);
        }

        .seo-content ul li i {
            color: var(--primary);
        }

        /* Responsive */
        @media (max-width: 992px) {
            .products-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .page-header h1 {
                font-size: 36px;
            }
            
            .stats-container {
                flex-direction: column;
                text-align: center;
            }
            
            .stats-info {
                justify-content: center;
            }
            
            .products-header {
                flex-direction: column;
                text-align: center;
            }
            
            .products-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 15px;
            }
            
            .product-image {
                height: 220px;
            }
            
            .product-info h3 {
                font-size: 14px;
                margin-bottom: 5px;
            }
            
            .product-price {
                font-size: 16px;
                margin-bottom: 10px;
            }
            
            .add-to-cart {
                font-size: 13px;
                padding: 8px 12px;
            }
            
            .seo-content ul {
                grid-template-columns: 1fr;
            }
        }
      `}</style>

      {/* رأس الصفحة */}
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/ar">الرئيسية</Link> <span>&gt;</span> 
            <Link href="/ar/catalog">الكتالوج</Link> <span>&gt;</span> 
            <span>طقم تنورة محجبات</span>
          </div>
          <h1>{PAGE_CONFIG.h1}</h1>
          <p>{PAGE_CONFIG.subtitle}</p>
        </div>
      </section>

      {/* إحصائيات التصنيف */}
      <section className="category-stats">
        <div className="container">
          <div className="stats-container">
            <div className="stats-info">
              <div className="stat-item">
                <i className="fas fa-tshirt"></i>
                <span><strong>{filteredProducts.length}</strong> منتج</span>
              </div>
              <div className="stat-item">
                <i className="fas fa-truck"></i>
                <span>شحن عالمي</span>
              </div>
              <div className="stat-item">
                <i className="fas fa-tag"></i>
                <span>أسعار جملة</span>
              </div>
            </div>
            <Link href="/ar/catalog" className="catalog-link">
              <i className="fas fa-th-large"></i> جميع التصنيفات
            </Link>
          </div>
        </div>
      </section>

      {/* قسم المنتجات */}
      <section className="products-section">
        <div className="container">
          <div className="products-header">
            <h2>تشكيلة <span>أطقم تنورة محجبات</span></h2>
            <div className="sort-options">
              <label htmlFor="sort">ترتيب حسب:</label>
              <select 
                id="sort" 
                value={currentSort}
                onChange={(e) => setCurrentSort(e.target.value)}
              >
                <option value="default">الافتراضي</option>
                <option value="price-low">السعر: من الأقل للأعلى</option>
                <option value="price-high">السعر: من الأعلى للأقل</option>
                <option value="name">الاسم</option>
              </select>
            </div>
          </div>
          
          {loading ? (
            <div className="no-products">
              <i className="fas fa-spinner fa-spin"></i>
              <h3>جاري تحميل المنتجات...</h3>
              <p>يرجى الانتظار بينما نقوم بتحميل المجموعة.</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="no-products">
              <i className="fas fa-box-open"></i>
              <h3>قريباً</h3>
              <p>نعمل حالياً على تجهيز مجموعة أطقم التنانير المحتشمة. تابعونا قريباً للحصول على أجمل التصاميم والتنسيقات.</p>
              <Link href="/ar/catalog" className="btn-view-all">تصفح التصنيفات الأخرى</Link>
            </div>
          ) : (
            <>
              <div className="products-grid" id="productsGrid">
                {paginatedProducts.map((product: any) => {
                  const name = product.name_ar || product.name_en || 'منتج'
                  const price = product.price_usd || 0
                  const imageUrl = product.imageUrl || '/images/default.webp'
                  
                  return (
                    <Link href={`/ar/product/${product.slug_en || product._id}`} key={product._id} className="product-card">
                      <div className="product-image">
                        <img 
                          src={imageUrl} 
                          alt={name}
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/default.webp'
                          }}
                        />
                      </div>
                      <div className="product-info">
                        <h3 style={{ fontSize: '14px' }}>{name}</h3>
                        <div className="product-price" data-usd-price={price}>
                          ${formatPrice(price)}
                        </div>
                        <button 
                          className="add-to-cart"
                          onClick={(e) => addToCart(product, e)}
                        >
                          <i className="fas fa-shopping-cart"></i> أضف للاستفسار
                        </button>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {/* أرقام الصفحات */}
              {totalPages > 1 && (
                <div className="pagination">
                  <button 
                    className={`page-btn ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(p => p === 1 || p === totalPages || (p >= currentPage - 2 && p <= currentPage + 2))
                    .map((p, i, arr) => {
                      if (i > 0 && p - arr[i-1] > 1) {
                        return <span key={`dots-${p}`} className="page-btn" style={{ cursor: 'default', background: 'transparent' }}>...</span>
                      }
                      return (
                        <button
                          key={p}
                          className={`page-btn ${p === currentPage ? 'active' : ''}`}
                          onClick={() => setCurrentPage(p)}
                        >
                          {p}
                        </button>
                      )
                    })}
                  
                  <button 
                    className={`page-btn ${currentPage === totalPages ? 'disabled' : ''}`}
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* محتوى SEO */}
      <section className="seo-content">
        <div className="container">
          <h2>{PAGE_CONFIG.seoContent.h2}</h2>
          <p>{PAGE_CONFIG.seoContent.p1}</p>
          
          <h3>لماذا تختارين أطقم التنانير التركية؟</h3>
          <ul>
            {PAGE_CONFIG.seoContent.features.map((feature, index) => (
              <li key={index}>
                <i className="fas fa-check-circle"></i> {feature}
              </li>
            ))}
          </ul>
          
          <p>انضمي إلى أكثر من 5000+ تاجر تجزئة حول العالم يثقون بنا في مجموعات أطقم التنانير. من البوتيكات الصغيرة إلى كبار تجار التجزئة، نقدم جودة ثابتة وخدمة موثوقة. تصفحي مجموعتنا وقدمي استفسارك اليوم!</p>
          
          <p><strong>أنماط أطقم التنانير الشائعة:</strong> {PAGE_CONFIG.seoContent.popularStyles}</p>
        </div>
      </section>
    </>
  )
}