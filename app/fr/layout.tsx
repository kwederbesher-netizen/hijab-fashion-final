import { Metadata } from 'next'
import { CurrencyProvider } from '@/app/contexts/CurrencyContext'
import ClientLayoutFr from './components/ClientLayoutFr'
import HreflangTags from '@/app/components/HreflangTags'

export const metadata: Metadata = {
  title: {
    default: 'Hijab Fashion Mall | Grossiste Hijab Turc & Mode Modeste',
    template: '%s | Hijab Fashion Mall'
  },
  description: 'Grossiste hijab turc premium depuis 2019. Découvrez plus de 5000+ produits: abayas, hijabs, robes, vêtements de sport. Pas de minimum de commande. Livraison mondiale.',
  keywords: 'grossiste hijab turc, mode modeste grossiste, abaya turque grossiste, fournisseur hijab turquie',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.hijabfashionmall.com/fr',
    languages: {
      'en': 'https://www.hijabfashionmall.com/en',
      'ar': 'https://www.hijabfashionmall.com/ar',
      'fr': 'https://www.hijabfashionmall.com/fr',
      'de': 'https://www.hijabfashionmall.com/de',
      'it': 'https://www.hijabfashionmall.com/it',
      'es': 'https://www.hijabfashionmall.com/es',
    },
  },
  openGraph: {
    title: 'Hijab Fashion Mall | Grossiste Hijab Turc & Mode Modeste',
    description: 'Grossiste hijab turc premium. Plus de 5000+ produits. Livraison mondiale.',
    url: 'https://www.hijabfashionmall.com/fr',
    siteName: 'Hijab Fashion Mall',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://www.hijabfashionmall.com/images/og-image-fr.jpg',
        width: 1200,
        height: 630,
        alt: 'Hijab Fashion Mall - Collection Mode Modeste Turque',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hijab Fashion Mall | Grossiste Hijab Turc',
    description: 'Grossiste hijab turc premium. 5000+ produits. Commandez maintenant!',
    images: ['https://www.hijabfashionmall.com/images/og-image-fr.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'fashion',
}

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HreflangTags />
      <CurrencyProvider>
        <ClientLayoutFr>
          {children}
        </ClientLayoutFr>
      </CurrencyProvider>
    </>
  )
}