import ModestPantsSetsClient from './ModestPantsSetsClient'

export const metadata = {
  title: 'أطقم بنطلونات محجبات بالجملة | طقم تونيك وبنطلون تركي | حجاب فاشون مول',
  description: 'اكتشفي أطقم بنطلونات محجبات بالجملة فاخرة. أطقم تونيك وبنطلون تركي، بنطلونات واسعة مريحة، توب أنيق للأزياء اليومية المحجبات.',
  keywords: 'أطقم بنطلونات محجبات بالجملة, أطقم بنطلونات تركية, طقم تونيك وبنطلون, أطقم بنطلونات قطعتين, أطقم عمل محجبات, بنطلون واسع, طقم بالاتسو',
  alternates: {
    canonical: 'https://hijabfashionmall.com/ar/category/modest-pants-sets',
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