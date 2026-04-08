import ModestSportswearClient from './ModestSportswearClient'

export const metadata = {
  title: 'ملابس رياضية محجبات بالجملة | ملابس نشاطات تركية، ملابس جيم، أطقم جري | حجاب فاشون مول',
  description: 'اكتشفي ملابس رياضية محجبات بالجملة فاخرة. ملابس نشاطات تركية، أطقم جيم، ملابس جري، ملابس يوجا. أقمشة قابلة للتنفس، تغطية كاملة، تقنية لطرد الرطوبة.',
  keywords: 'ملابس رياضية محجبات بالجملة, ملابس نشاطات تركية, ملابس جيم محجبات, حجاب رياضي, قمصان تدريب بأكمام طويلة, أطقم جري محجبات, ملابس يوجا محجبات',
  alternates: {
    canonical: 'https://hijabfashionmall.com/ar/category/modest-sportswear',
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