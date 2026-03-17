'use client'

import { client } from '@/lib/sanity'
import { useState, useEffect } from 'react'

// دالة تحديد لون الخلفية
function getColorCode(colorName: string) {
  const colors: {[key: string]: string} = {
    'Black': '#000000', 'White': '#FFFFFF', 'Navy': '#000080', 'Gray': '#808080',
    'Burgundy': '#800020', 'Red': '#FF0000', 'Green': '#008000', 'Blue': '#0000FF',
    'Brown': '#8B4513', 'Beige': '#F5F5DC', 'Olive': '#808000', 'Purple': '#800080',
    'Pink': '#FFC0CB', 'Orange': '#FFA500', 'Light Grey': '#D3D3D3',
  };
  return colors[colorName] || '#CCCCCC';
}

export default function Home() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await client.fetch(`*[_type == "product"] | order(orderIndex asc){
          _id,
          "productCode": product_code,
          "name": name_en,
          "nameAr": name_ar,
          "price": price_usd,
          "imageRef": image.asset->_ref,
          "category": category_main_en,
          "categoryAr": category_main_ar,
          "color": color_en,
          "colorAr": color_ar,
          "sizes": sizes,
          "packSize": pcs_per_packet,
          "isNew": is_new,
          "isBestseller": is_bestseller,
          "slug": slug,
          "outOfStock": Out_of_stock,
          "altText": Alt_Text_En,
          "plusSizes": plus_sizes,
          "rssMessage": rss_not_rss_message_en
        }`)
        setProducts(data)
        console.log('Total products:', data.length)
      } catch (error) {
        console.error('Error loading products:', error)
      } finally {
        setLoading(false)
      }
    }
    loadProducts()
  }, [])

  // دالة لبناء رابط الصورة من imageRef
  const getImageUrl = (imageRef: string) => {
    if (!imageRef) return null
    // إزالة "image-" من البداية و "-{dimensions}" من النهاية
    const baseId = imageRef.replace('image-', '').replace(/-[^-]*$/, '')
    return `https://cdn.sanity.io/images/ruyb1c3n/production/${baseId}.webp`
  }

  const getProductSlug = (product: any) => {
    if (!product.slug) return 'product'
    if (typeof product.slug === 'string') return product.slug
    if (product.slug?.current) return product.slug.current
    return 'product'
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <i className="fas fa-spinner fa-spin text-4xl text-orange-500 mb-4"></i>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Hijab Fashion Mall</h1>
          <p className="text-gray-600 mt-2">Premium Modest Fashion | Turkish Craftsmanship | Wholesale Prices</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product: any) => {
              const productSlug = getProductSlug(product)
              const productCode = product.productCode || ''
              const productPrice = product.price || 0
              const isRSS = product.rssMessage && product.rssMessage.includes('✅')
              const productPieces = product.packSize || 1
              const imageUrl = getImageUrl(product.imageRef)
              
              const badges = []
              if (product.isNew === 'Yes') badges.push('New')
              if (product.isBestseller === 'Yes') badges.push('Bestseller')
              if (product.plusSizes === 'Yes') badges.push('Plus')

              return (
                <div key={product._id} className="bg-white rounded-lg shadow-sm hover:shadow-xl transition overflow-hidden">
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={product.altText || product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        onError={(e) => {
                          e.currentTarget.src = 'https://placehold.co/400x400/ff5a00/white?text=No+Image'
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                      </div>
                    )}
                    {badges.length > 0 && (
                      <div className="absolute top-2 left-2 flex flex-col gap-2">
                        {badges.map((badge, idx) => (
                          <span
                            key={idx}
                            className={`text-white text-xs px-2 py-1 rounded ${
                              badge === 'New' ? 'bg-blue-500' :
                              badge === 'Bestseller' ? 'bg-yellow-500' :
                              badge === 'Plus' ? 'bg-blue-600' : 'bg-gray-500'
                            }`}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <div className="text-sm text-orange-500 font-semibold mb-1">{product.category}</div>
                    <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <div className="text-xs text-gray-500 mb-2">SKU: {productCode}</div>

                    {product.color && (
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                          style={{ backgroundColor: getColorCode(product.color) }}
                          title={product.color}
                        />
                        <span className="text-sm text-gray-700">{product.color}</span>
                      </div>
                    )}

                    <div className={`text-xs p-2 rounded mb-3 flex items-center gap-2 ${
                      isRSS ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-orange-50 text-orange-700 border border-orange-200'
                    }`}>
                      <i className={`fas ${isRSS ? 'fa-check-circle' : 'fa-box'}`}></i>
                      <span>{product.rssMessage || `📦 Sold in packs of ${productPieces} pieces`}</span>
                    </div>

                    <div className="text-xl font-bold text-orange-500 mb-3">
                      ${typeof productPrice === 'number' ? productPrice.toFixed(2) : productPrice}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}