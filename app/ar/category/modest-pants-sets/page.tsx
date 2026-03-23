// app/ar/category/modest-pants-sets/page.tsx
'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { useCurrency } from '@/app/contexts/CurrencyContext'

export default function ModestPantsSetsCategoryPage() {
  // تكوين الصفحة حسب التصنيف - طقم بنطلون محجبات
  const PAGE_CONFIG = {
    category: "طقم بنطلون محجبات",
    categoryName: "Modest Pants Sets",
    pageTitle: "طقم بنطلون محجبات | طقم بنطلون قطعتين | تنسيقات بنطلون طويلة | طقم بنطلون وتوب | جملة تركي | حجاب فاشون مول",
    pageDescription: "تشكيلة واسعة من أطقم البنطلون المحتشمة بالجملة من تركيا. مجموعات متنوعة من أطقم البنطلونات المنسقة مع توب، مثالية للعمل، الخروجات اليومية، والمناسبات الرسمية. بدون حد أدنى للطلب، شحن عالمي سريع. انضم إلى أكثر من 5000+ تاجر تجزئة حول العالم.",
    pageKeywords: "طقم بنطلون محجبات, طقم بنطلون قطعتين, طقم بنطلون وتوب, تنسيقات بنطلون محتشمة, أطقم بنطلون تركي بالجملة, ملابس محجبات تركية, بنطلونات طويلة محتشمة",
    h1: "أطقم بنطلون محجبات – تنسيقات أنيقة من قطعتين",
    subtitle: "اكتشفي مجموعتنا الرائعة من أطقم البنطلون المحتشمة من تركيا. من التنسيقات الكاجوال إلى الأطقم الرسمية، ستجدين أطقم البنطلون المثالية لمتجرك بأسعار الجملة.",
    seoContent: {
      h2: "أطقم بنطلون محجبات بالجملة – تنسيقات متكاملة من قطعتين",
      p1: "مرحباً بك في حجاب فاشون مول، مصدرك الأول لأطقم البنطلون التركية المحتشمة الأصلية. مجموعتنا تضم تنسيقات رائعة من قطعتين تجمع بين الراحة والأناقة. كل طقم بنطلون وتوب مصمم لخلق إطلالة متناسقة وراقية مثالية للعمل، الخروجات اليومية، أو المناسبات الخاصة.",
      features: [
        "صناعة تركية 100% أصلية",
        "أقمشة فاخرة: كريب، فيسكوز، قطن، بوليستر، خلطات كتان",
        "مقاسات متعددة (XS إلى 4XL) – مقاسات كبيرة متوفرة",
        "بدون حد أدنى للطلب",
        "شحن سريع عالمي (3-7 أيام)",
        "طرق دفع آمنة"
      ],
      popularStyles: "أطقم بنطلون واسع, أطقم بنطلون بالازو, أطقم بنطلون مستقيم, أطقم كولوت, أطقم بنطلون مدبب, تنسيقات للعمل, أطقم كاجوال, أطقم رسمية."
    }
  }

  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalProducts, setTotalProducts] = useState(0)
  const [currentSort, setCurrentSort] = useState('default')
  const [cart, setCart] = useState<any[]>([])
  const { formatPrice } = useCurrency()
  
  const productsPerPage = 60

  // تحويل قيمة الترتيب إلى ما يقرأه API
  const getSortValue = (sort: string) => {
    switch (sort) {
      case 'price-low':
        return 'price-asc'
      case 'price-high':
        return 'price-desc'
      case 'name':
        return 'name-asc'
      case 'newest':
        return 'newest'
      default:
        return ''
    }
  }

  // تحميل المنتجات من API مع Pagination والترتيب
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true)
      
      const params = new URLSearchParams()
      params.append('page', currentPage.toString())
      params.append('limit', productsPerPage.toString())
      params.append('category', 'Modest Pants Sets')
      
      const sortValue = getSortValue(currentSort)
      if (sortValue) {
        params.append('sort', sortValue)
      }
      
      const res = await fetch(`/api/products?${params.toString()}`)
      const data = await res.json()
      
      if (data.result) {
        setProducts(data.result)
        setTotalPages(data.totalPages)
        setTotalProducts(data.total)
      }
    } catch (error) {
      console.error('خطأ في تحميل المنتجات:', error)
    } finally {
      setLoading(false)
    }
  }, [currentPage, currentSort])

  // تحميل المنتجات عند تغيير الصفحة أو الترتيب
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  // تحميل السلة من localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (e) {
        console.error('خطأ في تحميل السلة:', e)
      }
    }
  }, [])

  // حفظ السلة في localStorage وتحديث العداد
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
    const event = new CustomEvent('cartUpdated', { detail: totalItems })
    window.dispatchEvent(event)
    
    const cartCountElement = document.getElementById('cartCount')
    if (cartCountElement) {
      cartCountElement.textContent = totalItems.toString()
    }
  }, [cart])

  // إضافة إلى السلة مع دعم RSS والكرتون
  const addToCart = useCallback((product: any, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    const currentCart = JSON.parse(localStorage.getItem('cart') || '[]')
    
    const isRSS = product['rss/not rss message_en']?.toLowerCase().includes('single piece') || 
                  product['rss/not rss message_ar']?.includes('قطعة واحدة')
    const packetSize = product.pcs_per_packet ? parseInt(product.pcs_per_packet) : 1
    const requestedQuantity = isRSS ? 1 : packetSize
    
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
      unitPrice: product.price_usd,
      pcs_per_packet: product.pcs_per_packet
    }
    
    const existingIndex = currentCart.findIndex((item: any) => item._id === product._id)
    
    if (existingIndex !== -1) {
      currentCart[existingIndex].quantity += requestedQuantity
    } else {
      currentCart.push(productToAdd)
    }
    
    localStorage.setItem('cart', JSON.stringify(currentCart))
    
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

  return (
    <>
      <style>{`
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
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

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

        .page-header .breadcrumb span {
            color: var(--medium-gray);
            margin: 0 5px;
        }

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

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

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

        @media (max-width: 576px) {
            .products-grid {
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
            <span>طقم بنطلون محجبات</span>
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
                <span><strong>{totalProducts}</strong> طقم</span>
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
            <h2>تشكيلة <span>أطقم بنطلون محجبات</span></h2>
            <div className="sort-options">
              <label htmlFor="sort">ترتيب حسب:</label>
              <select 
                id="sort" 
                value={currentSort}
                onChange={(e) => {
                  setCurrentSort(e.target.value)
                  setCurrentPage(1)
                }}
              >
                <option value="default">الافتراضي</option>
                <option value="price-low">السعر: من الأقل للأعلى</option>
                <option value="price-high">السعر: من الأعلى للأقل</option>
                <option value="name">الاسم</option>
                <option value="newest">الأحدث</option>
              </select>
            </div>
          </div>
          
          {loading ? (
            <div className="no-products">
              <i className="fas fa-spinner fa-spin"></i>
              <h3>جاري تحميل المنتجات...</h3>
              <p>يرجى الانتظار بينما نقوم بتحميل المجموعة.</p>
            </div>
          ) : products.length === 0 ? (
            <div className="no-products">
              <i className="fas fa-box-open"></i>
              <h3>لا توجد منتجات</h3>
              <p>لم نتمكن من العثور على منتجات في هذا التصنيف. يرجى التحقق لاحقاً.</p>
              <Link href="/ar/catalog" className="btn-view-all">تصفح جميع المنتجات</Link>
            </div>
          ) : (
            <>
              <div className="products-grid">
                {products.map((product: any) => {
                  const name = product.name_ar || product.name_en || 'طقم بنطلون'
                  const price = product.price_usd || 0
                  const imageUrl = product.imageUrl || '/images/default.webp'
                  const productSlug = product.slug_ar || product.slug_en || product._id
                  
                  return (
                    <Link href={`/ar/product/${productSlug}`} key={product._id} className="product-card">
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
                        <h3>{name}</h3>
                        <div className="product-price">
                          {formatPrice(price)}
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
                        return <span key={`dots-${p}`} className="page-btn" style={{ cursor: 'default' }}>...</span>
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
          
          <h3>لماذا تختارين أطقم البنطلون التركية؟</h3>
          <ul>
            {PAGE_CONFIG.seoContent.features.map((feature, index) => (
              <li key={index}>
                <i className="fas fa-check-circle"></i> {feature}
              </li>
            ))}
          </ul>
          
          <p>انضمي إلى أكثر من 5000+ تاجر تجزئة حول العالم يثقون بنا في مجموعات أطقم البنطلون. من البوتيكات الصغيرة إلى كبار تجار التجزئة، نقدم جودة ثابتة وخدمة موثوقة. تصفحي مجموعتنا وقدمي استفسارك اليوم!</p>
          
          <p><strong>أنماط أطقم البنطلون الشائعة:</strong> {PAGE_CONFIG.seoContent.popularStyles}</p>
        </div>
      </section>
    </>
  )
}