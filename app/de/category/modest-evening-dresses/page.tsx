import ModestEveningDressesClient from './ModestEveningDressesClient'

export const metadata = {
  title: 'Abendkleider im Großhandel | Elegante Lange Kleider | Hijab Fashion Mall',
  description: 'Entdecken Sie elegante Abendkleider im Großhandel. Lange Abendkleider, festliche Roben, Hochzeitsgäste-Kleider, Ballkleider. Hochwertige Stoffe, edle Verarbeitung.',
  keywords: 'abendkleider großhandel, lange abendkleider, festliche kleider, ballkleider, hochzeitsgäste kleider, elegante roben, maxi abendkleider, türkische abendmode',
  alternates: {
    canonical: 'https://hijabfashionmall.com/de/category/modest-evening-dresses',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-evening-dresses',
      en: 'https://hijabfashionmall.com/en/category/modest-evening-dresses',
      fr: 'https://hijabfashionmall.com/fr/category/modest-evening-dresses',
      de: 'https://hijabfashionmall.com/de/category/modest-evening-dresses',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <ModestEveningDressesClient searchParams={searchParams} />
}