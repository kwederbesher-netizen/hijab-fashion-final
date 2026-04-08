import HijabsClient from './HijabsClient'

export const metadata = {
  title: 'Türkische Hijabs im Großhandel | Premium Stoffe, Bambus, Viskose, Jersey | Hijab Fashion Mall',
  description: 'Entdecken Sie türkische Hijabs im Großhandel. Weicher Bambus, fließende Viskose, atmungsaktiver Jersey, edle Seide. Moderne Farben, verschiedene Größen. Weltweiter Versand für Geschäftskunden.',
  keywords: 'türkische hijabs großhandel, hijab großhandel, bambus hijab, viskose hijab, jersey hijab, seide hijab, chiffon hijab, baumwoll hijab, hijab mit draht, square hijab, instant hijab, modal hijab',
  alternates: {
    canonical: 'https://hijabfashionmall.com/de/category/hijabs',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/hijabs',
      en: 'https://hijabfashionmall.com/en/category/hijabs',
      fr: 'https://hijabfashionmall.com/fr/category/hijabs',
      de: 'https://hijabfashionmall.com/de/category/hijabs',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <HijabsClient searchParams={searchParams} />
}