import AbayasClient from './AbayasClient'

export const metadata = {
  title: 'Turkish Abayas Wholesale | Premium Medina Silk, Crepe, Jersey Collection | Hijab Fashion Mall',
  description: 'Discover premium Turkish abayas wholesale. Flowing Medina silk, elegant crepe, soft jersey, refined lace. Modern cuts, sizes up to 4XL. Worldwide B2B shipping.',
  keywords: 'turkish abayas wholesale, abaya wholesaler, medina silk abaya, crepe abaya, jersey abaya, lace abaya, open abaya, closed abaya, plus size abaya, modest fashion turkish',
  alternates: {
    canonical: 'https://hijabfashionmall.com/en/category/abayas',
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