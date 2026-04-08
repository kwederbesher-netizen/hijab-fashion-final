import AbayasClient from './AbayasClient'

export const metadata = {
  title: 'Türkische Abayas im Großhandel | Premium Medina-Seide, Crêpe, Jersey | Hijab Fashion Mall',
  description: 'Entdecken Sie türkische Abayas im Großhandel. Fließende Medina-Seide, eleganter Crêpe, weicher Jersey, edle Spitze. Moderne Schnitte, Größen bis 4XL. Weltweiter Versand für Geschäftskunden.',
  keywords: 'türkische abayas großhandel, abaya großhandel, abaya medina seide, abaya crêpe, abaya jersey, abaya spitze, offene abaya, geschlossene abaya, abaya große größen, moderne abaya, elegante abaya, bescheidene mode türkisch, türkisches hijab, abaya kollektion 2026, abaya business',
  alternates: {
    canonical: 'https://hijabfashionmall.com/de/category/abayas',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/abayas',
      en: 'https://hijabfashionmall.com/en/category/abayas',
      fr: 'https://hijabfashionmall.com/fr/category/abayas',
      de: 'https://hijabfashionmall.com/de/category/abayas',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <AbayasClient searchParams={searchParams} />
}