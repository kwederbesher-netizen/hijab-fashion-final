// app/fr/category/burkini-modest-swimwear/page.tsx
import BurkiniModestSwimwearClient from './BurkiniModestSwimwearClient'

export const metadata = {
  title: 'Burkini Turc en Gros | Maillot de Bain Modeste | Hijab Fashion Mall',
  description: 'Découvrez notre collection de burkinis turcs en gros. Maillots de bain modestes 2 ou 3 pièces. Tissus résistants à l\'eau, séchage rapide. Parfaits pour la plage et la piscine.',
  keywords: 'burkini en gros, grossiste burkini, maillot de bain modeste, burkini turc, burkini 2 pièces, burkini 3 pièces, hijab plage, tenue piscine modeste, burkini grande taille',
  alternates: {
    canonical: 'https://hijabfashionmall.com/fr/category/burkini-modest-swimwear',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/burkini-modest-swimwear',
      en: 'https://hijabfashionmall.com/en/category/burkini-modest-swimwear',
      fr: 'https://hijabfashionmall.com/fr/category/burkini-modest-swimwear',
      es: 'https://hijabfashionmall.com/es/category/burkini-modest-swimwear',
      de: 'https://hijabfashionmall.com/de/category/burkini-modest-swimwear',
      it: 'https://hijabfashionmall.com/it/category/burkini-modest-swimwear',
    },
  },
  openGraph: {
    title: 'Burkini Turc en Gros - Maillot de Bain Modeste',
    description: 'Découvrez notre collection de burkinis turcs en gros.',
    url: 'https://hijabfashionmall.com/fr/category/burkini-modest-swimwear',
    siteName: 'Hijab Fashion Mall',
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: 'https://hijabfashionmall.com/images/og-burkini-fr.jpg', width: 1200, height: 630, alt: 'Burkini Turc en Gros' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Burkini Turc en Gros - Maillot de Bain Modeste',
    description: 'Découvrez notre collection de burkinis turcs en gros.',
    images: ['https://hijabfashionmall.com/images/og-burkini-fr.jpg'],
  },
  robots: { index: true, follow: true },
}

export default function Page({ searchParams }: any) {
  return <BurkiniModestSwimwearClient searchParams={searchParams} />
}