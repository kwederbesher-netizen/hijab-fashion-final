import HijabsClient from './HijabsClient'

export const metadata = {
  title: 'حجابات تركية بالجملة | مجموعة مودال وشيفون وقطن وجيرسي فاخرة | حجاب فاشون مول',
  description: 'اكتشفي حجابات تركية بالجملة فاخرة. مودال ناعم، شيفون أنيق، قطن قابل للتنفس، جيرسي مريح. تشكيلة واسعة من الألوان وأنماط متعددة. شحن عالمي للمحترفين.',
  keywords: 'حجابات تركية بالجملة, جملة حجابات, حجاب مودال, حجاب شيفون, حجاب قطن, حجاب جيرسي, حجاب مربع, حجاب مستطيل, حجاب فاخر',
  alternates: {
    canonical: 'https://hijabfashionmall.com/ar/category/hijabs',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/hijabs',
      en: 'https://hijabfashionmall.com/en/category/hijabs',
      fr: 'https://hijabfashionmall.com/fr/category/hijabs',
      es: 'https://hijabfashionmall.com/es/category/hijabs',
      de: 'https://hijabfashionmall.com/de/category/hijabs',
      it: 'https://hijabfashionmall.com/it/category/hijabs',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <HijabsClient searchParams={searchParams} />
}