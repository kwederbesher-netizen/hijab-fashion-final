import ModestDressesClient from './ModestDressesClient'

export const metadata = {
  title: 'Modest Dresses Wholesale | Turkish Long Dresses, Maxi Dresses Collection | Hijab Fashion Mall',
  description: 'Discover premium modest dresses wholesale. Turkish long dresses, maxi dresses, midi dresses in premium fabrics. Flowing silhouettes, elegant designs for every occasion.',
  keywords: 'modest dresses wholesale, turkish modest dresses, long dresses wholesale, maxi dresses wholesale, midi modest dresses, modest evening dresses, turkish dress wholesaler',
  alternates: {
    canonical: 'https://hijabfashionmall.com/en/category/modest-dresses',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-dresses',
      en: 'https://hijabfashionmall.com/en/category/modest-dresses',
      fr: 'https://hijabfashionmall.com/fr/category/modest-dresses',
      es: 'https://hijabfashionmall.com/es/category/modest-dresses',
      de: 'https://hijabfashionmall.com/de/category/modest-dresses',
      it: 'https://hijabfashionmall.com/it/category/modest-dresses',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <ModestDressesClient searchParams={searchParams} />
}