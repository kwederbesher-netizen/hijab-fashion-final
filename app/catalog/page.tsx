'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'

export default function CatalogPage() {
  const [allProducts, setAllProducts] = useState<any[]>([])
  const [filteredProducts, setFilteredProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 24

  // Filter state
  const [activeFilters, setActiveFilters] = useState({
    search: '',
    categories: [] as string[],
    rssFilter: false,
    plusSizes: false,
    sort: 'default'
  })

  // Load products
  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch('/api/products')
        const data = await res.json()
        if (data.result) {
          setAllProducts(data.result)
          setFilteredProducts(data.result)
          console.log('✅ Products loaded:', data.result.length)
        }
      } catch (error) {
        console.error('Error loading products:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  // ===== useMemo للحسابات المشتقة =====
  const categories = useMemo(() => {
    return [...new Set(allProducts.map(p => p.category_main_en || ''))].filter(Boolean)
  }, [allProducts])

  const rssCount = useMemo(() => {
    return allProducts.filter(p => p['rss/not rss message_en']?.includes('✅')).length
  }, [allProducts])

  const plusSizesCount = useMemo(() => {
    return allProducts.filter(p => 
      p['plus sizes'] === 'Yes' || p['plus sizes'] === 'YES'
    ).length
  }, [allProducts])

  const getCategoryCount = (cat: string) => {
    return allProducts.filter(p => p.category_main_en === cat).length
  }

  // Apply filters
  useEffect(() => {
    if (allProducts.length === 0) return

    let filtered = [...allProducts]

    if (activeFilters.search) {
      const searchLower = activeFilters.search.toLowerCase()
      filtered = filtered.filter(p => 
        (p.name_en || '').toLowerCase().includes(searchLower)
      )
    }

    if (activeFilters.categories.length > 0) {
      filtered = filtered.filter(p => 
        activeFilters.categories.includes(p.category_main_en || '')
      )
    }

    if (activeFilters.rssFilter) {
      filtered = filtered.filter(p => 
        p['rss/not rss message_en']?.includes('✅')
      )
    }

    if (activeFilters.plusSizes) {
      filtered = filtered.filter(p => 
        p['plus sizes'] === 'Yes' || p['plus sizes'] === 'YES'
      )
    }

    switch (activeFilters.sort) {
      case 'price-asc':
        filtered.sort((a, b) => (a.price_usd || 0) - (b.price_usd || 0))
        break
      case 'price-desc':
        filtered.sort((a, b) => (b.price_usd || 0) - (a.price_usd || 0))
        break
      case 'name-asc':
        filtered.sort((a, b) => (a.name_en || '').localeCompare(b.name_en || ''))
        break
      case 'name-desc':
        filtered.sort((a, b) => (b.name_en || '').localeCompare(a.name_en || ''))
        break
    }

    setFilteredProducts(filtered)
    setCurrentPage(1)
  }, [activeFilters, allProducts])

  const getColorCode = (color: string) => {
    const colors: any = {
      'Black': '#000000', 'White': '#FFFFFF', 'Navy': '#000080',
      'Gray': '#808080', 'Burgundy': '#800020', 'Red': '#FF0000',
      'Green': '#008000', 'Blue': '#0000FF', 'Brown': '#8B4513',
      'Beige': '#F5F5DC', 'Olive': '#808000', 'Purple': '#800080',
      'Pink': '#FFC0CB', 'Orange': '#FFA500', 'Light Grey': '#D3D3D3',
      'Dark Brown': '#5D3A1A', 'Mint Green': '#98FB98', 'Cream': '#FFFDD0',
      'Petrol Blue': '#1F4F5F', 'Mauve': '#E0B0FF', 'Taupe': '#483C32',
      'Olive Green': '#708238', 'Charcoal': '#36454F', 'Dusty Rose': '#DCAE96',
      'Sky Blue': '#87CEEB', 'Light Brown': '#C4A484', 'Yellow': '#FFFF00',
      'Dark Beige': '#C9A87C', 'Rose': '#FF007F'
    }
    return colors[color] || '#CCCCCC'
  }

  const startIndex = (currentPage - 1) * productsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  if (loading) return (
    <div className="loading">
      <i className="fas fa-spinner"></i>
      <p>Loading products...</p>
    </div>
  )

  return (
    <>
      {/* Catalog Header */}
      <section className="catalog-header">
        <div className="container">
          <h1>Our Collection</h1>
          <p>Browse our wholesale catalog of premium Turkish hijab wear. Find the perfect pieces for your boutique.</p>
          <div className="breadcrumb">
            <Link href="/">Home</Link> / <span>Catalog</span>
          </div>
        </div>
      </section>

      {/* Catalog Layout */}
      <div className="container">
        <div className="catalog-layout">
          {/* Sidebar Filters */}
          <aside className="filters-sidebar">
            {/* Search */}
            <div className="filter-section">
              <h3 className="filter-title"><i className="fas fa-search"></i> Search</h3>
              <input 
                type="text" 
                className="filter-search" 
                placeholder="Search products..."
                onChange={(e) => {
                  setTimeout(() => {
                    setActiveFilters(prev => ({ ...prev, search: e.target.value }))
                  }, 300)
                }}
              />
            </div>
            
            {/* Special Filters */}
            <div className="filter-section">
              <h3 className="filter-title"><i className="fas fa-star"></i> Special Filters</h3>
              <div 
                className={`special-filter ${activeFilters.rssFilter ? 'active' : ''}`}
                onClick={() => setActiveFilters(prev => ({ ...prev, rssFilter: !prev.rssFilter }))}
              >
                <i className="fas fa-check-circle" style={{ color: '#4caf50' }}></i>
                <span className="filter-name">RSS (Single Pieces)</span>
                <span className="filter-count">{rssCount}</span>
              </div>
              <div 
                className={`special-filter ${activeFilters.plusSizes ? 'active' : ''}`}
                onClick={() => setActiveFilters(prev => ({ ...prev, plusSizes: !prev.plusSizes }))}
              >
                <i className="fas fa-arrow-up" style={{ color: '#2196f3' }}></i>
                <span className="filter-name">Plus Sizes</span>
                <span className="filter-count">{plusSizesCount}</span>
              </div>
            </div>
            
            {/* Categories */}
            <div className="filter-section">
              <h3 className="filter-title"><i className="fas fa-tags"></i> Categories</h3>
              <div className="category-list">
                {categories.map(cat => (
                  <label key={cat} className="category-item">
                    <input 
                      type="checkbox"
                      checked={activeFilters.categories.includes(cat)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setActiveFilters(prev => ({ 
                            ...prev, 
                            categories: [...prev.categories, cat] 
                          }))
                        } else {
                          setActiveFilters(prev => ({ 
                            ...prev, 
                            categories: prev.categories.filter(c => c !== cat) 
                          }))
                        }
                      }}
                    />
                    <span className="category-name">{cat}</span>
                    <span className="category-count">{getCategoryCount(cat)}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter Actions */}
            <div className="filter-actions">
              <button className="apply-filters" onClick={() => {}}>Apply Filters</button>
              <button className="reset-filters" onClick={() => {
                setActiveFilters({
                  search: '',
                  categories: [],
                  rssFilter: false,
                  plusSizes: false,
                  sort: 'default'
                })
                const searchInput = document.querySelector('.filter-search') as HTMLInputElement
                if (searchInput) searchInput.value = ''
              }}>Reset</button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="catalog-main">
            {/* Toolbar */}
            <div className="catalog-toolbar">
              <div className="results-count">
                Showing <strong>{startIndex + 1}-{Math.min(startIndex + productsPerPage, filteredProducts.length)}</strong> of <strong>{filteredProducts.length}</strong> products
              </div>
              <select 
                className="sort-select"
                value={activeFilters.sort}
                onChange={(e) => setActiveFilters(prev => ({ ...prev, sort: e.target.value }))}
              >
                <option value="default">Sort by: Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="no-results">
                <i className="fas fa-search"></i>
                <h3>No Products Found</h3>
                <p>Try adjusting your filters or search term.</p>
                <button className="btn-primary" onClick={() => {
                  setActiveFilters({
                    search: '',
                    categories: [],
                    rssFilter: false,
                    plusSizes: false,
                    sort: 'default'
                  })
                }}>Clear All Filters</button>
              </div>
            ) : (
              <>
                <div className="products-grid">
                  {paginatedProducts.map((p: any) => {
                    const isRSS = p['rss/not rss message_en']?.includes('✅')
                    const badges = []
                    if (p.is_new === 'Yes') badges.push(<span key="new" className="product-badge">New</span>)
                    if (p.is_bestseller === 'Yes') badges.push(<span key="bestseller" className="product-badge rss">Bestseller</span>)
                    if (p['plus sizes'] === 'Yes') badges.push(<span key="plus" className="product-badge plus">Plus</span>)

                    return (
                      <Link href={`/product/${p.slug_en || p._id}`} key={p._id} className="product-card">
                        <div className="product-image">
                          <img 
                            src={p.imageUrl || '/images/default.webp'} 
                            alt={p.name_en || ''}
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = '/images/default.webp'
                            }}
                          />
                          {badges.length > 0 && (
                            <div className="product-badges">{badges}</div>
                          )}
                        </div>
                        <div className="product-info">
                          <div className="product-category">{p.category_main_en || ''}</div>
                          <h3 className="product-title">{p.name_en || ''}</h3>
                          <div className="product-sku">SKU: {p.product_code || ''}</div>
                          
                          {p.color_en && (
                            <div className="product-colors">
                              <div 
                                className="color-circle" 
                                style={{ background: getColorCode(p.color_en) }}
                                title={p.color_en}
                              />
                            </div>
                          )}
                          
                          <div className={`selling-message ${isRSS ? 'rss' : 'pack'}`}>
                            <i className={`fas ${isRSS ? 'fa-check-circle' : 'fa-box'}`}></i>
                            <span>{p['rss/not rss message_en'] || '📦 Sold in packs'}</span>
                          </div>
                          
                          {/* السعر مع تصغير الخط */}
                          <div className="product-price" data-usd-price={p.price_usd || 0} style={{ fontSize: '14px' }}>
                            ${(p.price_usd || 0).toFixed(2)}
                          </div>
                          
                          <button 
                            className="add-to-cart"
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              // Add to cart logic here
                              alert('Added to cart: ' + p.name_en)
                            }}
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
                      className="pagination-btn"
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                    >
                      <i className="fas fa-chevron-left"></i>
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter(p => p === 1 || p === totalPages || (p >= currentPage - 2 && p <= currentPage + 2))
                      .map((p, i, arr) => {
                        if (i > 0 && p - arr[i-1] > 1) {
                          return (
                            <span key={`dots-${p}`} className="pagination-dots">...</span>
                          )
                        }
                        return (
                          <button
                            key={p}
                            className={`pagination-btn ${p === currentPage ? 'active' : ''}`}
                            onClick={() => setCurrentPage(p)}
                          >
                            {p}
                          </button>
                        )
                      })}
                    
                    <button 
                      className="pagination-btn"
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                    >
                      <i className="fas fa-chevron-right"></i>
                    </button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>
    </>
  )
}