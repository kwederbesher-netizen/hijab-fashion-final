import ModestPantsSetsClient from './ModestPantsSetsClient'

export const metadata = {
  title: 'Conjuntos de Pantalón Modestos Turcos al por Mayor | Pantalones Anchos + Túnicas | Hijab Fashion Mall',
  description: 'Descubre 250+ conjuntos de pantalón modestos turcos al por mayor. Pantalones anchos combinados con túnicas largas. Telas fluidas, tallas hasta 4XL.',
  keywords: 'conjuntos de pantalón modestos turcos, pantalones anchos musulmanes, túnica y pantalón, moda recatada profesional, conjuntos de trabajo modestos, pantalones palazzo, moda turca al por mayor',
  alternates: {
    canonical: 'https://hijabfashionmall.com/es/category/modest-pants-sets',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-pants-sets',
      en: 'https://hijabfashionmall.com/en/category/modest-pants-sets',
      fr: 'https://hijabfashionmall.com/fr/category/modest-pants-sets',
      es: 'https://hijabfashionmall.com/es/category/modest-pants-sets',
      de: 'https://hijabfashionmall.com/de/category/modest-pants-sets',
      it: 'https://hijabfashionmall.com/it/category/modest-pants-sets',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <ModestPantsSetsClient searchParams={searchParams} />
}