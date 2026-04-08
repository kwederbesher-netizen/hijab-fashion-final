import BurkiniClient from './BurkiniClient'

export const metadata = {
  title: 'Burkini Wholesale | Turkish Modest Swimwear, Full Coverage Swimsuits | Hijab Fashion Mall',
  description: 'Discover premium burkini wholesale. Turkish modest swimwear, full coverage swimsuits, quick-dry fabrics, UV protection. Worldwide B2B shipping for retailers.',
  keywords: 'burkini wholesale, turkish burkini, modest swimwear wholesale, full coverage swimsuit, islamic swimwear, burkini set, swim hijab, uv protection swimwear',
  alternates: {
    canonical: 'https://hijabfashionmall.com/en/category/burkini',
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