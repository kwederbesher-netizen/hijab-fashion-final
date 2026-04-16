import { Metadata } from 'next'
import { CurrencyProvider } from '@/app/contexts/CurrencyContext'
import ClientLayoutDe from './components/ClientLayoutDe'
import HreflangTags from '@/app/components/HreflangTags'

export const metadata: Metadata = {
  title: {
    default: 'Hijab Fashion Mall | Großhandel Türkische Hijab & Modest Wear',
    template: '%s | Hijab Fashion Mall'
  },
  description: 'Premium türkischer Hijab-Großhandel seit 2019. Entdecken Sie 5000+ Produkte: Abayas, Hijabs, Kleider, Sportbekleidung. Keine Mindestbestellmenge. Weltweiter Versand.',
  keywords: 'Großhandel türkische Hijab, modest fashion Großhandel, türkische Abaya Großhandel, Hijab Lieferant Türkei',
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
    canonical: 'https://www.hijabfashionmall.com/de',
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
    title: 'Hijab Fashion Mall | Großhandel Türkische Hijab & Modest Wear',
    description: 'Premium türkischer Hijab-Großhandel. 5000+ Produkte. Weltweiter Versand.',
    url: 'https://www.hijabfashionmall.com/de',
    siteName: 'Hijab Fashion Mall',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.hijabfashionmall.com/images/og-image-de.jpg',
        width: 1200,
        height: 630,
        alt: 'Hijab Fashion Mall - Türkische Modest Wear Kollektion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hijab Fashion Mall | Großhandel Türkische Hijab',
    description: 'Premium türkischer Hijab-Großhandel. 5000+ Produkte. Jetzt einkaufen!',
    images: ['https://www.hijabfashionmall.com/images/og-image-de.jpg'],
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

export default function GermanLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HreflangTags />
      <CurrencyProvider>
        <ClientLayoutDe>
          {children}
        </ClientLayoutDe>
      </CurrencyProvider>
    </>
  )
}