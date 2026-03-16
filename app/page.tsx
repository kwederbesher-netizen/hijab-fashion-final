import { client, urlFor, getProducts } from '@/lib/sanity'
import Link from 'next/link'

export default async function Home() {
  const products = await getProducts()
  
  console.log('Total products:', products.length)

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
            {products.map((product: any) => (
              <Link 
                key={product._id} 
                href={`/product/${product.slug}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-sm hover:shadow-xl transition overflow-hidden">
                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-gray-100">
                    {product.image ? (
                      <img
                        src={urlFor(product.image).url()}
                        alt={product.altText || product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        onError={(e) => {
                          e.currentTarget.src = 'https://via.placeholder.com/400x400?text=No+Image'
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                      </div>
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

                    {/* Color */}
                    {product.color && (
                      <p className="text-sm text-gray-600 mb-1">
                        Color: <span className="font-medium">{product.color}</span>
                      </p>
                    )}

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">
                        ${typeof product.price === 'number' 
                          ? product.price.toFixed(2) 
                          : product.price}
                      </span>
                    </div>

                    {/* Sizes */}
                    {product.sizes && (
                      <p className="text-xs text-gray-400 mt-2">
                        Sizes: {product.sizes}
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