// app/fr/category/hijabs/page.tsx
import HijabsClient from './HijabsClient'

export const metadata = {
  title: 'Hijabs Turcs en Gros | Voiles Chiffon, Soie, Jersey, Coton | Hijab Fashion Mall',
  description: 'Découvrez notre collection de hijabs turcs en gros. Voiles en chiffon fluide, soie luxueuse, jersey confortable et coton doux. Parfaits pour boutiques de mode modeste. Livraison mondiale.',
  keywords: 'hijabs turcs en gros, grossiste hijab, voile chiffon, foulard soie, écharpe jersey, hijab coton, foulard femme musulmane, voile modeste, grossiste foulard, hijab professionnel, hijab quotidien, foulard ramadan, accessoires hijab, pashmina, turque hijab',
  alternates: {
    canonical: 'https://hijabfashionmall.com/fr/category/hijabs',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/hijabs',
      en: 'https://hijabfashionmall.com/en/category/hijabs',
      fr: 'https://hijabfashionmall.com/fr/category/hijabs',
      es: 'https://hijabfashionmall.com/es/category/hijabs',
      de: 'https://hijabfashionmall.com/de/category/hijabs',
      it: 'https://hijabfashionmall.com/it/category/hijabs',
    },
  },
  openGraph: {
    title: 'Collection Hijabs Turcs en Gros - Voiles Chiffon, Soie, Jersey',
    description: 'Découvrez notre collection de hijabs turcs en gros. Voiles de qualité pour professionnels.',
    url: 'https://hijabfashionmall.com/fr/category/hijabs',
    siteName: 'Hijab Fashion Mall',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://hijabfashionmall.com/images/og-hijabs-fr.jpg',
        width: 1200,
        height: 630,
        alt: 'Hijabs Turcs en Gros',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Collection Hijabs Turcs en Gros - Voiles Chiffon, Soie, Jersey',
    description: 'Découvrez notre collection de hijabs turcs en gros.',
    images: ['https://hijabfashionmall.com/images/og-hijabs-fr.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Page({ searchParams }: any) {
  return <HijabsClient searchParams={searchParams} />
}