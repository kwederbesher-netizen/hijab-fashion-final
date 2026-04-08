import ModestDressesClient from './ModestDressesClient'

export const metadata = {
  title: 'فساتين محجبات بالجملة | فساتين طويلة تركية، فساتين ماكسي | حجاب فاشون مول',
  description: 'اكتشفي فساتين محجبات بالجملة فاخرة. فساتين طويلة تركية، فساتين ماكسي، فساتين ميدي بأقمشة فاخرة. تصاميم انسيابية وأنيقة لكل المناسبات.',
  keywords: 'فساتين محجبات بالجملة, فساتين تركية للمحجبات, فساتين طويلة بالجملة, فساتين ماكسي بالجملة, فساتين ميدي للمحجبات',
  alternates: {
    canonical: 'https://hijabfashionmall.com/ar/category/modest-dresses',
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