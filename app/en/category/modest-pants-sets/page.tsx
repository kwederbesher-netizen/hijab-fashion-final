import ModestPantsSetsClient from './ModestPantsSetsClient'

export const metadata = {
  title: 'Modest Pants Sets Wholesale | Turkish Two-Piece Tunic & Trouser Sets | Hijab Fashion Mall',
  description: 'Discover premium modest pants sets wholesale. Turkish tunic and trouser combinations, comfortable wide-leg pants, elegant tops for everyday modest wear.',
  keywords: 'modest pants sets wholesale, turkish pants sets, tunic and trouser sets, two piece pants sets, modest workwear sets, wide leg pants sets, palazzo sets',
  alternates: {
    canonical: 'https://hijabfashionmall.com/en/category/modest-pants-sets',
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