// app/fr/category/modest-pants-sets/page.tsx
import ModestPantsSetsClient from './ModestPantsSetsClient'

export const metadata = {
  title: 'Ensembles Pantalon Modestes Turcs en Gros | Sets 2 Pièces | Hijab Fashion Mall',
  description: 'Découvrez nos ensembles pantalon modestes turcs en gros. Sets 2 pièces (pantalon + tunique). Confortables, élégants, parfaits pour le quotidien. Livraison mondiale.',
  keywords: 'ensembles pantalon en gros, grossiste ensemble pantalon, set pantalon modeste, ensemble 2 pièces musulman, pantalon large avec tunique, tenue modeste turque, coordonné pantalon',
  alternates: {
    canonical: 'https://hijabfashionmall.com/fr/category/modest-pants-sets',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-pants-sets',
      en: 'https://hijabfashionmall.com/en/category/modest-pants-sets',
      fr: 'https://hijabfashionmall.com/fr/category/modest-pants-sets',
      es: 'https://hijabfashionmall.com/es/category/modest-pants-sets',
      de: 'https://hijabfashionmall.com/de/category/modest-pants-sets',
      it: 'https://hijabfashionmall.com/it/category/modest-pants-sets',
    },
  },
  openGraph: {
    title: 'Ensembles Pantalon Modestes Turcs en Gros - Sets 2 Pièces',
    description: 'Découvrez nos ensembles pantalon modestes turcs en gros.',
    url: 'https://hijabfashionmall.com/fr/category/modest-pants-sets',
    siteName: 'Hijab Fashion Mall',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://hijabfashionmall.com/images/og-pants-sets-fr.jpg', width: 1200, height: 630, alt: 'Ensembles Pantalon Turcs en Gros' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ensembles Pantalon Modestes Turcs en Gros',
    description: 'Découvrez nos ensembles pantalon modestes turcs en gros.',
    images: ['https://hijabfashionmall.com/images/og-pants-sets-fr.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function Page({ searchParams }: any) {
  return <ModestPantsSetsClient searchParams={searchParams} />
}