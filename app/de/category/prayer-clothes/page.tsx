import PrayerClothesClient from './PrayerClothesClient'

export const metadata = {
  title: 'Gebetskleidung im Großhandel | Bequeme Gebetskleider Sets | Hijab Fashion Mall',
  description: 'Entdecken Sie Gebetskleidung im Großhandel. Bequeme Gebetskleider, 2-teilige Sets, weiche Stoffe. Ideal für den täglichen Gebrauch. Verschiedene Farben und Größen.',
  keywords: 'gebetskleidung großhandel, gebetskleider, gebetskleid set, 2-teilige gebetskleidung, bequeme gebetskleidung, baumwolle gebetskleid, jersey gebetskleid, viskose gebetskleidung',
  alternates: {
    canonical: 'https://hijabfashionmall.com/de/category/prayer-clothes',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/prayer-clothes',
      en: 'https://hijabfashionmall.com/en/category/prayer-clothes',
      fr: 'https://hijabfashionmall.com/fr/category/prayer-clothes',
      de: 'https://hijabfashionmall.com/de/category/prayer-clothes',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <PrayerClothesClient searchParams={searchParams} />
}