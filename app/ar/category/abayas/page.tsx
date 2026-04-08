import AbayasClient from './AbayasClient'

export const metadata = {
  title: 'عبايات تركية بالجملة | مجموعة حرير المدينة والكريب والجيرسي الفاخرة | حجاب فاشون مول',
  description: 'اكتشفي عبايات تركية بالجملة فاخرة. حرير المدينة الانسيابي، كريب أنيق، جيرسي ناعم، دانتيل رقيق. مقاسات عصرية حتى 4XL. شحن عالمي للمحترفين.',
  keywords: 'عبايات تركية بالجملة, جملة عبايات, عباية حرير المدينة, عباية كريب, عباية جيرسي, عباية دانتيل, عباية مفتوحة, عباية مغلقة, مقاسات كبيرة, أزياء محجبات تركية',
  alternates: {
    canonical: 'https://hijabfashionmall.com/ar/category/abayas',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/abayas',
      en: 'https://hijabfashionmall.com/en/category/abayas',
      fr: 'https://hijabfashionmall.com/fr/category/abayas',
      es: 'https://hijabfashionmall.com/es/category/abayas',
      de: 'https://hijabfashionmall.com/de/category/abayas',
      it: 'https://hijabfashionmall.com/it/category/abayas',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <AbayasClient searchParams={searchParams} />
}