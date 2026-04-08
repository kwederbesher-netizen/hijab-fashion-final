// app/fr/category/modest-evening-dresses/page.tsx
import ModestEveningDressesClient from './ModestEveningDressesClient'

export const metadata = {
  title: 'Robes de Soirée Modestes Turques en Gros | Robes de Cérémonie | Hijab Fashion Mall',
  description: 'Découvrez notre collection de robes de soirée modestes turques en gros. Robes de cérémonie, mariage, réception. Tissus luxueux, broderies, dentelle. Livraison mondiale.',
  keywords: 'robes de soirée modestes en gros, grossiste robe cérémonie, robe de mariage modeste, robe de réception hijab, robe soirée longue, robe dentelle modeste, robe brodée, robe pailletée',
  alternates: {
    canonical: 'https://hijabfashionmall.com/fr/category/modest-evening-dresses',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-evening-dresses',
      en: 'https://hijabfashionmall.com/en/category/modest-evening-dresses',
      fr: 'https://hijabfashionmall.com/fr/category/modest-evening-dresses',
      es: 'https://hijabfashionmall.com/es/category/modest-evening-dresses',
      de: 'https://hijabfashionmall.com/de/category/modest-evening-dresses',
      it: 'https://hijabfashionmall.com/it/category/modest-evening-dresses',
    },
  },
  openGraph: {
    title: 'Robes de Soirée Modestes Turques en Gros - Robes de Cérémonie',
    description: 'Découvrez notre collection de robes de soirée modestes turques en gros.',
    url: 'https://hijabfashionmall.com/fr/category/modest-evening-dresses',
    siteName: 'Hijab Fashion Mall',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://hijabfashionmall.com/images/og-evening-dresses-fr.jpg', width: 1200, height: 630, alt: 'Robes de Soirée Modestes Turques en Gros' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robes de Soirée Modestes Turques en Gros',
    description: 'Découvrez notre collection de robes de soirée modestes turques en gros.',
    images: ['https://hijabfashionmall.com/images/og-evening-dresses-fr.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function Page({ searchParams }: any) {
  return <ModestEveningDressesClient searchParams={searchParams} />
}