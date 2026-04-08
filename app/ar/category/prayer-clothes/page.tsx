import PrayerClothesClient from './PrayerClothesClient'

export const metadata = {
  title: 'ملابس صلاة بالجملة | ثياب صلاة تركية، أطقم صلاة من قطعتين | حجاب فاشون مول',
  description: 'اكتشفي ملابس صلاة بالجملة فاخرة. ثياب صلاة تركية، أطقم صلاة من قطعتين، أقمشة خفيفة الوزن ومريحة. شحن عالمي لتجار التجزئة.',
  keywords: 'ملابس صلاة بالجملة, ثوب صلاة تركي, طقم صلاة, عباية صلاة, ملابس صلاة قطعتين, ثوب صلاة خفيف, قماش صلاة قابل للتنفس',
  alternates: {
    canonical: 'https://hijabfashionmall.com/ar/category/prayer-clothes',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/prayer-clothes',
      en: 'https://hijabfashionmall.com/en/category/prayer-clothes',
      fr: 'https://hijabfashionmall.com/fr/category/prayer-clothes',
      es: 'https://hijabfashionmall.com/es/category/prayer-clothes',
      de: 'https://hijabfashionmall.com/de/category/prayer-clothes',
      it: 'https://hijabfashionmall.com/it/category/prayer-clothes',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <PrayerClothesClient searchParams={searchParams} />
}