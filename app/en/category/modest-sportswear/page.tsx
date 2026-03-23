// app/en/category/modest-sportswear/page.tsx
'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useCurrency } from '@/app/contexts/CurrencyContext'

export default function ModestSportswearCategoryPage() {
  const params = useParams()
  
  // Page configuration for Modest Sportswear category
  const PAGE_CONFIG = {
    category: "Modest Sportswear",
    categoryName: "Modest Sportswear",
    pageTitle: "Wholesale Modest Sportswear | Turkish Activewear | Sports Hijabs & Modest Gym Wear From Turkey",
    pageDescription: "Premium Turkish modest sportswear wholesale. Wide collection of sports hijabs, modest gym wear, activewear sets, and workout clothes. Perfect for sports, fitness, and an active lifestyle. No minimum order, worldwide shipping.",
    pageKeywords: "modest sportswear wholesale, sports hijab, modest activewear, gym wear modest, turkish sportswear, workout clothes modest, fitness wear hijab, sports sets",
    h1: "Modest Sportswear – Activewear for Every Lifestyle",
    subtitle: "Discover our premium collection of Turkish modest sportswear. From sports hijabs to comfortable activewear sets, find the perfect workout clothes for your boutique at wholesale prices.",
    seoContent: {
      h2: "Wholesale Modest Sportswear – Performance Meets Modesty",
      p1: "Welcome to Hijab Fashion Mall, your premier source for authentic Turkish modest sportswear. Our activewear collection features high-performance fabrics that provide comfort, breathability, and flexibility. Whether you're looking for sports hijabs, gym sets, or casual activewear, we offer the perfect combination of modesty and functionality for active women.",
      features: [
        "100% Original Turkish Manufacturing",
        "Performance Fabrics: Cotton, Polyester, Spandex, Nylon, Breathable Blends",
        "Moisture-Wicking & Quick-Dry Technology",
        "Sports Hijabs Available",
        "Multiple Sizes (XS to 4XL) – Plus Sizes Available",
        "No Minimum Order Quantity",
        "Fast Worldwide Shipping (3-7 Days)",
        "Secure Payment Methods"
      ],
      popularStyles: "Sports Hijabs, Gym Sets, Jogging Suits, Yoga Wear, Fitness Tops, Training Pants, Athleisure Wear, Running Sets, and Modest Swimwear."
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

  // Convert sort value to API format
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

  // Fetch products from API with pagination and sorting
  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true)
      
      const params = new URLSearchParams()
      params.append('page', currentPage.toString())
      params.append('limit', productsPerPage.toString())
      params.append('category', 'Modest Sportswear')
      
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
      console.error('Error loading products:', error)
    } finally {
      setLoading(false)
    }
  }, [currentPage, currentSort])

  // Load products when page or sort changes
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (e) {
        console.error('Error parsing cart:', e)
      }
    }
  }, [])

  // Save cart to localStorage and update counter
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

  // Add to cart function - supports packets and single pieces
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
            font-family: 'Poppins', sans-serif;
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
            font-family: 'Poppins', sans-serif;
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
            
            .product-image {
                height: 250px;
            }
        }
      `}</style>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/en">Home</Link> <span>&gt;</span> 
            <Link href="/en/catalog">Catalog</Link> <span>&gt;</span> 
            <span>Modest Sportswear</span>
          </div>
          <h1>{PAGE_CONFIG.h1}</h1>
          <p>{PAGE_CONFIG.subtitle}</p>
        </div>
      </section>

      {/* Category Stats */}
      <section className="category-stats">
        <div className="container">
          <div className="stats-container">
            <div className="stats-info">
              <div className="stat-item">
                <i className="fas fa-tshirt"></i>
                <span><strong>{totalProducts}</strong> Sportswear Items</span>
              </div>
              <div className="stat-item">
                <i className="fas fa-truck"></i>
                <span>Worldwide Shipping</span>
              </div>
              <div className="stat-item">
                <i className="fas fa-tag"></i>
                <span>Wholesale Prices</span>
              </div>
            </div>
            <Link href="/en/catalog" className="catalog-link">
              <i className="fas fa-th-large"></i> View All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="products-header">
            <h2>Our <span>Modest Sportswear</span> Collection</h2>
            <div className="sort-options">
              <label htmlFor="sort">Sort by:</label>
              <select 
                id="sort" 
                value={currentSort}
                onChange={(e) => {
                  setCurrentSort(e.target.value)
                  setCurrentPage(1)
                }}
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>
          
          {loading ? (
            <div className="no-products">
              <i className="fas fa-spinner fa-spin"></i>
              <h3>Loading Products...</h3>
              <p>Please wait while we load our modest sportswear collection.</p>
            </div>
          ) : products.length === 0 ? (
            <div className="no-products">
              <i className="fas fa-box-open"></i>
              <h3>No Products Found</h3>
              <p>We couldn't find any modest sportswear in this category. Please check back later.</p>
              <Link href="/en/catalog" className="btn-view-all">Browse All Products</Link>
            </div>
          ) : (
            <>
              <div className="products-grid">
                {products.map((product: any) => {
                  const name = product.name_en || product.name_ar || 'Modest Sportswear'
                  const price = product.price_usd || 0
                  const imageUrl = product.imageUrl || '/images/default.webp'
                  const productSlug = product.slug_en || product.slug_ar || product._id
                  
                  return (
                    <Link href={`/en/product/${productSlug}`} key={product._id} className="product-card">
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
                          <i className="fas fa-shopping-cart"></i> Add to Inquiry
                        </button>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination">
                  <button 
                    className={`page-btn ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    <i className="fas fa-chevron-left"></i>
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
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* SEO Content */}
      <section className="seo-content">
        <div className="container">
          <h2>{PAGE_CONFIG.seoContent.h2}</h2>
          <p>{PAGE_CONFIG.seoContent.p1}</p>
          
          <h3>Why Choose Our Turkish Modest Sportswear?</h3>
          <ul>
            {PAGE_CONFIG.seoContent.features.map((feature, index) => (
              <li key={index}>
                <i className="fas fa-check-circle"></i> {feature}
              </li>
            ))}
          </ul>
          
          <p>Join over 5000+ satisfied retailers worldwide who trust us for their modest sportswear collections. From small boutiques to large retailers, we provide consistent quality and reliable service. Browse our collection and place your inquiry today!</p>
          
          <p><strong>Popular Modest Sportswear Styles:</strong> {PAGE_CONFIG.seoContent.popularStyles}</p>
        </div>
      </section>
    </>
  )
}