import { client } from '@/lib/sanity'

async function getProducts() {
  return await client.fetch(`*[_type == "product"] | order(orderIndex asc){
    _id,
    name,
    nameAr,
    price,
    "image": image.asset->url,
    category,
    categoryAr,
    slug
  }`)
}

export default async function Home() {
  const products = await getProducts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Hijab Fashion Mall</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border rounded-lg p-4 hover:shadow-lg transition">
            {product.image && (
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            )}
            
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mb-2">{product.nameAr}</p>
            
            <div className="mt-2">
              <span className="text-2xl font-bold text-green-600">
                ${product.price}
              </span>
            </div>
            
            <p className="text-sm text-gray-500 mt-2">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  )
}