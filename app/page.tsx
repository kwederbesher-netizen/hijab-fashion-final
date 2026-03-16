import { client } from '@/lib/sanity'
import Link from 'next/link'

async function getProducts() {
  return await client.fetch(`*[_type == "product"] | order(orderIndex asc){
    _id,
    "productCode": product_code,
    "name": name_en,
    "nameAr": name_ar,
    "price": price_usd,
    "imageUrl": main_image,
    "category": category_main_en,
    "categoryAr": category_main_ar,
    "color": color_en,
    "colorAr": color_ar,
    "sizes": sizes,
    "description": description_en,
    "descriptionAr": description_ar,
    "packSize": pcs_per_packet,
    "isNew": is_new,
    "isBestseller": is_bestseller,
    "viewsCount": views_count,
    "slug": slug_en,
    "slugAr": slug_ar,
    "outOfStock": Out_of_stock,
    "altText": Alt_Text_En,
    "altTextAr": Alt_Text_Ar
  }`)
}

export default async function Home() {
  const products = await getProducts()
  
  // للتأكد من عدد المنتجات (شوف Console في المتصفح)
  console.log('Total products:', products.length)

  // تجميع المنتجات حسب الكود لعرض الألوان المتعددة
  const groupedProducts = products.reduce((acc: any, product: any) => {
    if (!acc[product.productCode]) {
      acc[product.productCode] = {
        ...product,
        colors: []
      }
    }
    acc[product.productCode].colors.push({
      color: product.color,
      colorAr: product.colorAr,
      imageUrl: product.imageUrl,
      altText: product.altText
    })
    return acc
  }, {})

  const uniqueProducts = Object.values(groupedProducts)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Hijab Fashion Mall
          </h1>
          <p className="text-gray-600 mt-2">
            Premium Modest Fashion | Turkish Craftsmanship | Wholesale Prices
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Categories Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Abayas', 'Hijabs', 'Jilbabs', 'Dresses', 'Sets', 
              'Kaftans', 'Sportswear', 'Prayer Clothes', 'Coats', 'Evening Wear'].map((cat) => (
              <Link 
                key={cat} 
                href={`/category/${cat.toLowerCase().replace(' ', '-')}`}
                className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition text-center"
              >
                <span className="text-gray-800 font-medium">{cat}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Products Grid */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {uniqueProducts.map((product: any) => (
              <Link 
                key={product._id} 
                href={`/product/${product.slug}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition overflow-hidden">
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    {product.colors[0]?.imageUrl && (
                      <img
                        src={`https://cdn.sanity.io/images/ruyb1c3n/production/${product.colors[0].imageUrl}.jpg`}
                        alt={product.colors[0]?.altText || product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                      />
                    )}
                    
                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-2">
                      {product.isNew === 'Yes' && (
                        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                          NEW
                        </span>
                      )}
                      {product.isBestseller === 'Yes' && (
                        <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">
                          BESTSELLER
                        </span>
                      )}
                    </div>

                    {/* Pack Size Badge */}
                    {product.packSize && (
                      <div className="absolute top-2 right-2">
                        <span className="bg-black text-white text-xs px-2 py-1 rounded">
                          Pack of {product.packSize}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      {product.name}
                    </h3>
                    
                    {/* Category */}
                    <p className="text-sm text-gray-500 mb-2">
                      {product.category}
                    </p>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">
                        ${typeof product.price === 'number' 
                          ? product.price.toFixed(2) 
                          : product.price}
                      </span>
                    </div>

                    {/* Available Colors - قسم محسن */}
                    {product.colors.length > 1 && (
                      <div className="mt-3">
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">{product.colors.length} colors</span> available
                        </p>
                        {/* دوائر الألوان المصغرة */}
                        <div className="flex flex-wrap gap-1 mt-1">
                          {product.colors.slice(0, 5).map((color: any, idx: number) => {
                            // تحديد لون الخلفية بناءً على اسم اللون
                            let bgColor = '#e5e7eb'; // رمادي افتراضي
                            const colorName = color.color?.toLowerCase() || '';
                            
                            if (colorName.includes('black')) bgColor = '#000';
                            else if (colorName.includes('navy')) bgColor = '#000080';
                            else if (colorName.includes('burgundy') || colorName.includes('برغندي')) bgColor = '#800020';
                            else if (colorName.includes('beige') || colorName.includes('بيج')) bgColor = '#f5f5dc';
                            else if (colorName.includes('olive') || colorName.includes('زيتي')) bgColor = '#808000';
                            else if (colorName.includes('green') || colorName.includes('أخضر')) bgColor = '#008000';
                            else if (colorName.includes('blue') || colorName.includes('أزرق') || colorName.includes('كحلي')) bgColor = '#0000ff';
                            else if (colorName.includes('red') || colorName.includes('أحمر')) bgColor = '#ff0000';
                            else if (colorName.includes('brown') || colorName.includes('بني')) bgColor = '#8b4513';
                            else if (colorName.includes('gray') || colorName.includes('رمادي')) bgColor = '#808080';
                            else if (colorName.includes('white') || colorName.includes('أبيض')) bgColor = '#ffffff';
                            else if (colorName.includes('purple') || colorName.includes('بنفسجي')) bgColor = '#800080';
                            else if (colorName.includes('pink') || colorName.includes('زهري')) bgColor = '#ff69b4';
                            else if (colorName.includes('yellow') || colorName.includes('أصفر')) bgColor = '#ffd700';
                            
                            return (
                              <div
                                key={idx}
                                className="w-5 h-5 rounded-full border border-gray-300 shadow-sm"
                                style={{ backgroundColor: bgColor }}
                                title={color.color}
                              />
                            );
                          })}
                          {product.colors.length > 5 && (
                            <span className="text-xs text-gray-500 ml-1">
                              +{product.colors.length - 5}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Sizes Preview */}
                    {product.sizes && (
                      <p className="text-xs text-gray-400 mt-2">
                        Sizes: {product.sizes.split(' ').slice(0, 4).join(' ')}
                        {product.sizes.split(' ').length > 4 && '...'}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600">{products.length}+</div>
              <div className="text-gray-600 mt-2">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">50+</div>
              <div className="text-gray-600 mt-2">Colors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">10</div>
              <div className="text-gray-600 mt-2">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600">100%</div>
              <div className="text-gray-600 mt-2">Turkish Quality</div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-gray-600">
            © 2024 Hijab Fashion Mall. All rights reserved. | 
            Premium Turkish Modest Fashion Wholesale
          </p>
        </div>
      </footer>
    </div>
  )
}