// app/fr/category/modest-dresses/page.tsx
import ModestDressesClient from './ModestDressesClient'

export const metadata = {
  title: 'Robes Modestes Turques en Gros | Robes Longues, Maxi, Cérémonie | Hijab Fashion Mall',
  description: 'Découvrez notre collection de robes modestes turques en gros. Robes longues, maxi, cérémonie, soirée. Tissus fluides, coupes élégantes. Parfaites pour boutiques. Livraison mondiale.',
  keywords: 'robes modestes en gros, grossiste robe modeste, robe longue musulmane, robe maxi modeste, robe cérémonie hijab, robe soirée modeste, robe turque, robe fluide, robe jersey, robe crêpe, robe dentelle',
  alternates: {
    canonical: 'https://hijabfashionmall.com/fr/category/modest-dresses',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-dresses',
      en: 'https://hijabfashionmall.com/en/category/modest-dresses',
      fr: 'https://hijabfashionmall.com/fr/category/modest-dresses',
      es: 'https://hijabfashionmall.com/es/category/modest-dresses',
      de: 'https://hijabfashionmall.com/de/category/modest-dresses',
      it: 'https://hijabfashionmall.com/it/category/modest-dresses',
    },
  },
  openGraph: {
    title: 'Collection Robes Modestes Turques en Gros - Longues, Maxi, Cérémonie',
    description: 'Découvrez notre collection de robes modestes turques en gros.',
    url: 'https://hijabfashionmall.com/fr/category/modest-dresses',
    siteName: 'Hijab Fashion Mall',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://hijabfashionmall.com/images/og-dresses-fr.jpg', width: 1200, height: 630, alt: 'Robes Modestes Turques en Gros' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Collection Robes Modestes Turques en Gros',
    description: 'Découvrez notre collection de robes modestes turques en gros.',
    images: ['https://hijabfashionmall.com/images/og-dresses-fr.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function Page({ searchParams }: any) {
  return <ModestDressesClient searchParams={searchParams} />
}