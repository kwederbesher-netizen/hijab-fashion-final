import ModestEveningDressesClient from './ModestEveningDressesClient'

export const metadata = {
  title: 'Vestidos de Noche Modestos Turcos al por Mayor | Moda Formal Recatada | Hijab Fashion Mall',
  description: 'Descubre 250+ vestidos de noche modestos turcos al por mayor. Telas de lujo: seda, crepe, pedrería. Largos hasta el suelo, mangas largas. Perfectos para bodas y galas.',
  keywords: 'vestidos de noche modestos turcos, vestidos de gala recatados, vestidos de ceremonia musulmanes, vestidos de fiesta largos, moda formal modesta, vestidos de invitada recatados, vestidos de graduación modestos',
  alternates: {
    canonical: 'https://hijabfashionmall.com/es/category/modest-evening-dresses',
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