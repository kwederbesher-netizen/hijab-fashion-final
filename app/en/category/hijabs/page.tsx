import HijabsClient from './HijabsClient'

export const metadata = {
  title: 'Turkish Hijabs Wholesale | Premium Modal, Chiffon, Cotton, Jersey Collection | Hijab Fashion Mall',
  description: 'Discover premium Turkish hijabs wholesale. Soft modal, elegant chiffon, breathable cotton, comfortable jersey. Wide color range, various styles. Worldwide B2B shipping.',
  keywords: 'turkish hijabs wholesale, hijab wholesaler, modal hijab, chiffon hijab, cotton hijab, jersey hijab, woven hijab, square hijab, rectangular hijab, premium hijab',
  alternates: {
    canonical: 'https://hijabfashionmall.com/en/category/hijabs',
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