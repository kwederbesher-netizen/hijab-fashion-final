import ModestSportswearClient from './ModestSportswearClient'

export const metadata = {
  title: 'Modest Sportswear Wholesale | Turkish Activewear, Gym Wear, Running Sets | Hijab Fashion Mall',
  description: 'Discover premium modest sportswear wholesale. Turkish activewear, gym sets, running outfits, yoga wear. Breathable fabrics, full coverage, moisture-wicking technology.',
  keywords: 'modest sportswear wholesale, turkish activewear, modest gym wear, sports hijab, long sleeve workout tops, modest running sets, yoga wear modest',
  alternates: {
    canonical: 'https://hijabfashionmall.com/en/category/modest-sportswear',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-sportswear',
      en: 'https://hijabfashionmall.com/en/category/modest-sportswear',
      fr: 'https://hijabfashionmall.com/fr/category/modest-sportswear',
      es: 'https://hijabfashionmall.com/es/category/modest-sportswear',
      de: 'https://hijabfashionmall.com/de/category/modest-sportswear',
      it: 'https://hijabfashionmall.com/it/category/modest-sportswear',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <ModestSportswearClient searchParams={searchParams} />
}