// lib/products.ts
interface GetProductsParams {
  category?: string
  search?: string
  page?: number
  limit?: number
  sort?: string
  minPrice?: number
  maxPrice?: number
  id?: string
}

export async function getProducts(params: GetProductsParams = {}) {
  const {
    category,
    search,
    page = 1,
    limit = 24,
    sort = 'default',
    minPrice = 0,
    maxPrice = 10000,
    id
  } = params
  
  const queryParams = new URLSearchParams()
  if (category) queryParams.append('category', category)
  if (search) queryParams.append('search', search)
  if (id) queryParams.append('id', id)
  queryParams.append('page', page.toString())
  queryParams.append('limit', limit.toString())
  queryParams.append('sort', sort)
  queryParams.append('minPrice', minPrice.toString())
  queryParams.append('maxPrice', maxPrice.toString())
  
  const res = await fetch(`/api/products?${queryParams.toString()}`)
  return res.json()
}

export async function getLatestProducts(limit: number = 8) {
  return getProducts({ sort: 'newest', limit })
}

export async function getProductsByCategory(category: string, page: number = 1, limit: number = 24) {
  return getProducts({ category, page, limit })
}

export async function searchProducts(query: string, page: number = 1) {
  return getProducts({ search: query, page })
}

export async function getProductById(id: string) {
  return getProducts({ id, limit: 1 })
}