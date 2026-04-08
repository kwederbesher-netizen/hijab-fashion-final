// app/fr/category/prayer-clothes/page.tsx
import PrayerClothesClient from './PrayerClothesClient'

export const metadata = {
  title: 'Tenues de Prière Modestes Turques en Gros | Ensembles Complets | Hijab Fashion Mall',
  description: 'Découvrez notre collection de tenues de prière modestes turques en gros. Ensembles 2 pièces, robes de prière. Tissus confortables, couleurs sobres. Livraison mondiale.',
  keywords: 'tenue de prière en gros, grossiste tenue prière, ensemble prière femme, robe prière musulmane, hijab prière, set prière, vêtement prière turc, tenue pour prière, ensemble 2 pièces prière',
  alternates: {
    canonical: 'https://hijabfashionmall.com/fr/category/prayer-clothes',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/prayer-clothes',
      en: 'https://hijabfashionmall.com/en/category/prayer-clothes',
      fr: 'https://hijabfashionmall.com/fr/category/prayer-clothes',
      es: 'https://hijabfashionmall.com/es/category/prayer-clothes',
      de: 'https://hijabfashionmall.com/de/category/prayer-clothes',
      it: 'https://hijabfashionmall.com/it/category/prayer-clothes',
    },
  },
  openGraph: {
    title: 'Tenues de Prière Modestes Turques en Gros',
    description: 'Découvrez notre collection de tenues de prière modestes turques en gros.',
    url: 'https://hijabfashionmall.com/fr/category/prayer-clothes',
    siteName: 'Hijab Fashion Mall',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://hijabfashionmall.com/images/og-prayer-fr.jpg', width: 1200, height: 630, alt: 'Tenues de Prière Turques en Gros' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tenues de Prière Modestes Turques en Gros',
    description: 'Découvrez notre collection de tenues de prière modestes turques en gros.',
    images: ['https://hijabfashionmall.com/images/og-prayer-fr.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function Page({ searchParams }: any) {
  return <PrayerClothesClient searchParams={searchParams} />
}