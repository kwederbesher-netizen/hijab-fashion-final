import BurkiniClient from './BurkiniClient'

export const metadata = {
  title: 'بوركيني وملابس سباحة محجبات بالجملة | بوركيني تركي، مايوه كامل التغطية | حجاب فاشون مول',
  description: 'اكتشفي بوركيني وملابس سباحة محجبات بالجملة فاخرة. بوركيني تركي، مايوه كامل التغطية، أقمشة سريعة الجفاف، حماية من الأشعة فوق البنفسجية. شحن عالمي لتجار التجزئة.',
  keywords: 'بوركيني بالجملة, بوركيني تركي, ملابس سباحة محجبات بالجملة, مايوه كامل التغطية, بوركيني إسلامي, طقم بوركيني, حجاب سباحة',
  alternates: {
    canonical: 'https://hijabfashionmall.com/ar/category/burkini',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/burkini',
      en: 'https://hijabfashionmall.com/en/category/burkini',
      fr: 'https://hijabfashionmall.com/fr/category/burkini',
      es: 'https://hijabfashionmall.com/es/category/burkini',
      de: 'https://hijabfashionmall.com/de/category/burkini',
      it: 'https://hijabfashionmall.com/it/category/burkini',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <BurkiniClient searchParams={searchParams} />
}