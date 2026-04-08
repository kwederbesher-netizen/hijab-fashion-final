import ModestEveningDressesClient from './ModestEveningDressesClient'

export const metadata = {
  title: 'Modest Evening Dresses Wholesale | Turkish Formal Gowns, Wedding Guest Dresses | Hijab Fashion Mall',
  description: 'Discover premium modest evening dresses wholesale. Turkish formal gowns, wedding guest dresses, special occasion wear. Elegant designs with full coverage.',
  keywords: 'modest evening dresses wholesale, turkish evening gowns, formal modest dresses, wedding guest modest dresses, special occasion modest wear, turkish formal wear',
  alternates: {
    canonical: 'https://hijabfashionmall.com/en/category/modest-evening-dresses',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-evening-dresses',
      en: 'https://hijabfashionmall.com/en/category/modest-evening-dresses',
      fr: 'https://hijabfashionmall.com/fr/category/modest-evening-dresses',
      es: 'https://hijabfashionmall.com/es/category/modest-evening-dresses',
      de: 'https://hijabfashionmall.com/de/category/modest-evening-dresses',
      it: 'https://hijabfashionmall.com/it/category/modest-evening-dresses',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <ModestEveningDressesClient searchParams={searchParams} />
}