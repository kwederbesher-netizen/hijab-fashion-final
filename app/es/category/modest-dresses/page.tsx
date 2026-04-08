import ModestDressesClient from './ModestDressesClient'

export const metadata = {
  title: 'Vestidos Modestos Turcos al por Mayor | Mangas Largas Vestidos Maxi | Hijab Fashion Mall',
  description: 'Descubre 400+ vestidos modestos turcos al por mayor. Mangas largas, largos hasta el tobillo, telas fluidas: crepe, jersey, seda. Estilos profesionales y casuales. Tallas hasta 4XL.',
  keywords: 'vestidos modestos al por mayor, vestidos modestos turcos, vestidos maxi de manga larga, vestidos musulmanes, vestidos modestos para trabajar, vestidos casuales modestos, vestidos de noche modestos',
  alternates: {
    canonical: 'https://hijabfashionmall.com/es/category/modest-dresses',
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