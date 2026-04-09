import { Metadata } from 'next'
import { CurrencyProvider } from '@/app/contexts/CurrencyContext'
import ClientLayoutIt from './components/ClientLayoutIt'
import HreflangTags from '@/app/components/HreflangTags'

export const metadata: Metadata = {
  title: {
    default: 'Hijab Fashion Mall | Ingrosso Hijab Turco & Moda Modesta',
    template: '%s | Hijab Fashion Mall'
  },
  description: 'Ingrosso hijab turco premium dal 2019. Oltre 5000+ prodotti: abaya, hijab, abiti, abbigliamento sportivo. Nessun ordine minimo. Spedizione mondiale.',
  keywords: 'ingrosso hijab turco, moda modesta ingrosso, abaya turca ingrosso, fornitore hijab turchia',
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
    canonical: 'https://www.hijabfashionmall.com/it',
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
    title: 'Hijab Fashion Mall | Ingrosso Hijab Turco & Moda Modesta',
    description: 'Ingrosso hijab turco premium. Oltre 5000+ prodotti. Spedizione mondiale.',
    url: 'https://www.hijabfashionmall.com/it',
    siteName: 'Hijab Fashion Mall',
    locale: 'it_IT',
    type: 'website',
    images: [
      {
        url: 'https://www.hijabfashionmall.com/images/og-image-it.jpg',
        width: 1200,
        height: 630,
        alt: 'Hijab Fashion Mall - Collezione Moda Modesta Turca',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hijab Fashion Mall | Ingrosso Hijab Turco',
    description: 'Ingrosso hijab turco premium. 5000+ prodotti. Acquista ora!',
    images: ['https://www.hijabfashionmall.com/images/og-image-it.jpg'],
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

export default function ItalianLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HreflangTags />
      <CurrencyProvider>
        <ClientLayoutIt>
          {children}
        </ClientLayoutIt>
      </CurrencyProvider>
    </>
  )
}