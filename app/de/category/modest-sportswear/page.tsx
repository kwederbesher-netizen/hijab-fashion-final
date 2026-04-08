import ModestSportswearClient from './ModestSportswearClient'

export const metadata = {
  title: 'Sportbekleidung im Großhandel | Funktionale Sportmode | Hijab Fashion Mall',
  description: 'Entdecken Sie Sportbekleidung im Großhandel. Atmungsaktive Stoffe, lange Schnitte, funktionale Sportbekleidung für verschiedene Aktivitäten. Laufen, Fitness, Yoga.',
  keywords: 'sportbekleidung großhandel, funktionale sportmode, atmungsaktive sportkleidung, lange sportshirts, sportleggings, fitnessbekleidung, yoga kleidung, laufbekleidung',
  alternates: {
    canonical: 'https://hijabfashionmall.com/de/category/modest-sportswear',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-sportswear',
      en: 'https://hijabfashionmall.com/en/category/modest-sportswear',
      fr: 'https://hijabfashionmall.com/fr/category/modest-sportswear',
      de: 'https://hijabfashionmall.com/de/category/modest-sportswear',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <ModestSportswearClient searchParams={searchParams} />
}