import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'ruyb1c3n',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

export async function getProducts() {
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