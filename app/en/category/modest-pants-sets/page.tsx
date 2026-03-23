// app/en/category/modest-pants-sets/page.tsx
'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function ModestPantsSetsCategoryPage() {
  const params = useParams()
  
  // Page configuration for Modest Pants Sets - with SEO keywords
  const PAGE_CONFIG = {
    category: "Modest Pants Sets",
    categoryName: "Modest Pants Sets",
    // Long SEO title with multiple keywords
    pageTitle: "Modest Pants Sets | Two-Piece Pants Outfits | Matching Pants & Top Sets | Trouser Coordinates | Turkish Wholesale",
    pageDescription: "Premium Turkish modest pants sets wholesale. Wide collection of matching pants and top sets, trouser coordinates, and elegant two-piece ensembles. Perfect for work, casual, and formal wear. No minimum order, worldwide shipping. Join 5000+ retailers.",
    pageKeywords: "turkish modest pants sets wholesale, two-piece pants outfits, matching pants and top, trouser coordinates, modest pants suits, islamic pants sets, pants ensembles turkey, women's pants sets wholesale",
    h1: "Modest Pants Sets – Two-Piece Trouser Outfits & Coordinates",
    subtitle: "Discover our elegant collection of Turkish modest pants sets. From casual coordinates to formal two-piece ensembles, find the perfect matching pants and top sets for your boutique at wholesale prices.",
    seoContent: {
      h2: "Wholesale Turkish Modest Pants Sets – Perfectly Coordinated Two-Piece Outfits",
      p1: "Welcome to Hijab Fashion Mall, your premier source for authentic Turkish modest pants sets. Our collection features beautifully coordinated two-piece ensembles that combine comfort with elegance. Each matching pants and top set is designed to create a cohesive, polished look perfect for work, daily wear, or special occasions.",
      features: [
        "100% Original Turkish Manufacturing",
        "Premium Fabrics: Crepe, Viscose, Cotton, Polyester, Linen blends",
        "Sizes from XS to 4XL (Plus Sizes Available)",
        "No Minimum Order Quantity",
        "Fast Worldwide Shipping (3-7 Days)",
        "Secure Payment Methods"
      ],
      popularStyles: "Wide Leg Pants Sets, Palazzo Pants Sets, Straight Leg Pants Sets, Culotte Sets, Tapered Pants Sets, Work Wear Coordinates, Casual Trouser Ensembles, Formal Pants Suits."
    }
  }

  const [products, setProducts] = useState<any[]>([])
  const [filteredProducts, setFilteredProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [currentSort, setCurrentSort] = useState('default')
  const [cart, setCart] = useState<any[]>([])
  
  // useRef to prevent infinite updates
  const isMounted = useRef(true)
  const cartInitialized = useRef(false)
  const processingEvent = useRef(false)
  const cartStringRef = useRef('')
  const productsPerPage = 24

  // Load products from Sanity - once only
  useEffect(() => {
    isMounted.current = true
    
    async function loadProducts() {
      try {
        setLoading(true)
        const res = await fetch('/api/products')
        const data = await res.json()
        
        if (data.result && isMounted.current) {
          // Filter products by category (Modest Pants Sets) - Using the same pattern as skirt sets
          const categoryProducts = data.result.filter((p: any) => 
            p.category_main_en && 
            (p.category_main_en.toLowerCase().includes('modest set') || 
             p.category_main_en.toLowerCase().includes('pants set') ||
             p.category_main_en.toLowerCase().includes('trouser set') ||
             p.name_en?.toLowerCase().includes('2 pcs set') ||
             p.name_en?.toLowerCase().includes('pants set') ||
             p.name_en?.toLowerCase().includes('trouser set') ||
             p.name_ar?.toLowerCase().includes('بنطلون'))
          )
          
          setProducts(categoryProducts)
          setFilteredProducts(categoryProducts)
          console.log(`✅ Found ${categoryProducts.length} Modest Pants Sets products`)
        }
      } catch (error) {
        console.error('Error loading products:', error)
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

  // Load cart from localStorage - once only
  useEffect(() => {
    if (!cartInitialized.current) {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart)
          setCart(parsedCart)
          cartStringRef.current = JSON.stringify(parsedCart)
        } catch (e) {
          console.error('Error parsing cart:', e)
        }
      }
      cartInitialized.current = true
    }
  }, [])

  // Listen for cart updates
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
          console.error('Error parsing cart:', e)
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

  // Save cart to localStorage and update counter
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

  // Apply sorting
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
        sorted.sort((a, b) => (a.name_en || '').localeCompare(b.name_en || ''))
        break
      default:
        sorted = [...products]
    }
    
    setFilteredProducts(sorted)
    setCurrentPage(1)
  }, [currentSort, products])

  // Add to cart function
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

  // Format price safely
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
        /* All styles - same as original design */
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
        }

        .page-header .breadcrumb a:hover {
            text-decoration: underline;
        }

        .page-header .breadcrumb span {
            color: var(--medium-gray);
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

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/en">Home</Link> <span>&gt;</span> 
            <Link href="/en/catalog">Catalog</Link> <span>&gt;</span> 
            <span>Modest Pants Sets</span>
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
                <span><strong>{filteredProducts.length}</strong> Products</span>
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
              <i className="fas fa-th-large"></i> All Categories
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="products-header">
            <h2>Our <span>Modest Pants Sets</span> Collection</h2>
            <div className="sort-options">
              <label htmlFor="sort">Sort by:</label>
              <select 
                id="sort" 
                value={currentSort}
                onChange={(e) => setCurrentSort(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
          
          {loading ? (
            <div className="no-products">
              <i className="fas fa-spinner fa-spin"></i>
              <h3>Loading Products...</h3>
              <p>Please wait while we load our collection.</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="no-products">
              <i className="fas fa-box-open"></i>
              <h3>No Products Found</h3>
              <p>We couldn't find any products in this category. Please check back later.</p>
              <Link href="/en/catalog" className="btn-view-all">Browse All Products</Link>
            </div>
          ) : (
            <>
              <div className="products-grid" id="productsGrid">
                {paginatedProducts.map((product: any) => {
                  const name = product.name_en || 'Product'
                  const price = product.price_usd || 0
                  const imageUrl = product.imageUrl || '/images/default.webp'
                  
                  return (
                    <Link href={`/en/product/${product.slug_en || product._id}`} key={product._id} className="product-card">
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
          
          <h3>Why Choose Our Turkish Modest Pants Sets?</h3>
          <ul>
            {PAGE_CONFIG.seoContent.features.map((feature, index) => (
              <li key={index}>
                <i className="fas fa-check-circle"></i> {feature}
              </li>
            ))}
          </ul>
          
          <p>Join over 5000+ satisfied retailers worldwide who trust us for their modest pants sets collections. From small boutiques to large retailers, we provide consistent quality and reliable service. Browse our collection and place your inquiry today!</p>
          
          <p><strong>Popular Pants Set Styles:</strong> {PAGE_CONFIG.seoContent.popularStyles}</p>
        </div>
      </section>
    </>
  )
}