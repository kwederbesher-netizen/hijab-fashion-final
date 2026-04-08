// app/fr/category/modest-sportswear/page.tsx
import ModestSportswearClient from './ModestSportswearClient'

export const metadata = {
  title: 'Tenues de Sport Modestes Turques en Gros | Sportswear | Hijab Fashion Mall',
  description: 'Découvrez notre collection de tenues de sport modestes turques en gros. Leggings, hoodies, sweats, joggings. Tissus techniques respirants. Livraison mondiale.',
  keywords: 'tenue de sport modeste en gros, grossiste sportswear, leggings modestes, hoodie modeste, jogging femme musulmane, vêtement sport hijab, sportswear turc, fitness modeste',
  alternates: {
    canonical: 'https://hijabfashionmall.com/fr/category/modest-sportswear',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-sportswear',
      en: 'https://hijabfashionmall.com/en/category/modest-sportswear',
      fr: 'https://hijabfashionmall.com/fr/category/modest-sportswear',
      es: 'https://hijabfashionmall.com/es/category/modest-sportswear',
      de: 'https://hijabfashionmall.com/de/category/modest-sportswear',
      it: 'https://hijabfashionmall.com/it/category/modest-sportswear',
    },
  },
  openGraph: {
    title: 'Tenues de Sport Modestes Turques en Gros - Sportswear',
    description: 'Découvrez notre collection de tenues de sport modestes turques en gros.',
    url: 'https://hijabfashionmall.com/fr/category/modest-sportswear',
    siteName: 'Hijab Fashion Mall',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://hijabfashionmall.com/images/og-sportswear-fr.jpg', width: 1200, height: 630, alt: 'Sportswear Modeste Turc en Gros' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tenues de Sport Modestes Turques en Gros',
    description: 'Découvrez notre collection de tenues de sport modestes turques en gros.',
    images: ['https://hijabfashionmall.com/images/og-sportswear-fr.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function Page({ searchParams }: any) {
  return <ModestSportswearClient searchParams={searchParams} />
}