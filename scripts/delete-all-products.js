const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'ruyb1c3n',
  dataset: 'production',
  token: 'skx5gNtTOsd0nBsyqscUJhFbanpJW0Gwak6CI3nObxsVIRM7OFZe4LotMaLeZeot0bz7Wd1XyuFKDEkWH1v7kKfG8xAsm36sRUX6yLuicLmzUP1Pr4WeikxJw36Lwr7XFUBG5ExGrXzzCX7Hrc4as6L4pMWzuBHuN5M3EDpzm5BouGD3ZwVo',
  useCdn: false,
  apiVersion: '2024-01-01'
})

async function deleteAllProducts() {
  try {
    // جلب جميع المنتجات
    const products = await client.fetch(`*[_type == "product"]{_id}`)
    console.log(`📦 Found ${products.length} products to delete`)

    // حذف كل منتج
    for (const product of products) {
      await client.delete(product._id)
      console.log(`✅ Deleted ${product._id}`)
    }

    console.log('🎉 All products deleted')
  } catch (error) {
    console.error('❌ Error:', error.message)
  }
}

deleteAllProducts()