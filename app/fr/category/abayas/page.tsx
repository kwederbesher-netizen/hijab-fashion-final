// app/fr/category/abayas/page.tsx
import AbayasClient from './AbayasClient'

export const metadata = {
  title: 'Abayas Turques en Gros | Collection Premium Soie Medina, Crêpe, Jersey | Hijab Fashion Mall',
  description: 'Découvrez notre collection d\'abayas turques en gros. Soie de Médine fluide, crêpe élégant, jersey doux, dentelle raffinée. Coupes modernes, tailles jusqu\'au 4XL. Livraison mondiale pour professionnels.',
  keywords: 'abayas turques en gros, grossiste abayas, abaya soie medina, abaya crêpe, abaya jersey, abaya dentelle, abaya ouverte, abaya fermée, abaya grande taille, abaya moderne, abaya élégante, mode modeste turque, hijab turc, collection abaya 2026, abaya professionnelle, abaya cérémonie, abaya quotidienne, tissu turc qualité, import abaya turquie, abaya détaillant, vente en gros abaya',
  alternates: {
    canonical: 'https://hijabfashionmall.com/fr/category/abayas',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/abayas',
      en: 'https://hijabfashionmall.com/en/category/abayas',
      fr: 'https://hijabfashionmall.com/fr/category/abayas',
      es: 'https://hijabfashionmall.com/es/category/abayas',
      de: 'https://hijabfashionmall.com/de/category/abayas',
      it: 'https://hijabfashionmall.com/it/category/abayas',
    },
  },
  openGraph: {
    title: 'Collection Abayas Turques en Gros - Soie Medina & Crêpe',
    description: 'Découvrez notre collection d\'abayas turques en gros. Tissus d\'exception : soie Médine, crêpe fluide, jersey. Pour professionnels de la mode modeste.',
    url: 'https://hijabfashionmall.com/fr/category/abayas',
    siteName: 'Hijab Fashion Mall',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://hijabfashionmall.com/images/og-abayas-fr.jpg',
        width: 1200,
        height: 630,
        alt: 'Abayas Turques en Gros',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Collection Abayas Turques en Gros - Soie Medina & Crêpe',
    description: 'Découvrez notre collection d\'abayas turques en gros. Tissus d\'exception pour professionnels.',
    images: ['https://hijabfashionmall.com/images/og-abayas-fr.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function Page({ searchParams }: any) {
  return <AbayasClient searchParams={searchParams} />
}