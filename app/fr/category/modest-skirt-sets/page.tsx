// app/fr/category/modest-skirt-sets/page.tsx
import ModestSkirtSetsClient from './ModestSkirtSetsClient'

export const metadata = {
  title: 'Ensembles Jupe Modestes Turcs en Gros | Sets 2 Pièces | Hijab Fashion Mall',
  description: 'Découvrez notre collection d\'ensembles jupe modestes turcs en gros. Sets 2 pièces (jupe + tunique). Parfaits pour la mode modeste quotidienne et professionnelle. Livraison mondiale.',
  keywords: 'ensembles jupe en gros, grossiste ensemble jupe, set jupe modeste, ensemble 2 pièces musulman, jupe longue avec tunique, ensemble jupe professionnel, tenue modeste turque, coordonné jupe',
  alternates: {
    canonical: 'https://hijabfashionmall.com/fr/category/modest-skirt-sets',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-skirt-sets',
      en: 'https://hijabfashionmall.com/en/category/modest-skirt-sets',
      fr: 'https://hijabfashionmall.com/fr/category/modest-skirt-sets',
      es: 'https://hijabfashionmall.com/es/category/modest-skirt-sets',
      de: 'https://hijabfashionmall.com/de/category/modest-skirt-sets',
      it: 'https://hijabfashionmall.com/it/category/modest-skirt-sets',
    },
  },
  openGraph: {
    title: 'Ensembles Jupe Modestes Turcs en Gros - Sets 2 Pièces',
    description: 'Découvrez nos ensembles jupe turcs en gros. Sets coordonnés 2 pièces.',
    url: 'https://hijabfashionmall.com/fr/category/modest-skirt-sets',
    siteName: 'Hijab Fashion Mall',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://hijabfashionmall.com/images/og-skirt-sets-fr.jpg', width: 1200, height: 630, alt: 'Ensembles Jupe Turcs en Gros' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ensembles Jupe Modestes Turcs en Gros - Sets 2 Pièces',
    description: 'Découvrez nos ensembles jupe turcs en gros.',
    images: ['https://hijabfashionmall.com/images/og-skirt-sets-fr.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function Page({ searchParams }: any) {
  return <ModestSkirtSetsClient searchParams={searchParams} />
}