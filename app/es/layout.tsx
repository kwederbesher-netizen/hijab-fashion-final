import { Metadata } from 'next'
import { CurrencyProvider } from '@/app/contexts/CurrencyContext'
import ClientLayoutEs from './components/ClientLayoutEs'
import HreflangTags from '@/app/components/HreflangTags'

export const metadata: Metadata = {
  title: {
    default: 'Hijab Fashion Mall | Mayorista Hijab Turco & Moda Modesta',
    template: '%s | Hijab Fashion Mall'
  },
  description: 'Mayorista hijab turco premium desde 2019. Más de 5000+ productos: abayas, hijabs, vestidos, ropa deportiva. Sin pedido mínimo. Envío mundial.',
  keywords: 'mayorista hijab turco, moda modesta mayorista, abaya turca mayorista, proveedor hijab turquía',
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
    canonical: 'https://www.hijabfashionmall.com/es',
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
    title: 'Hijab Fashion Mall | Mayorista Hijab Turco & Moda Modesta',
    description: 'Mayorista hijab turco premium. Más de 5000+ productos. Envío mundial.',
    url: 'https://www.hijabfashionmall.com/es',
    siteName: 'Hijab Fashion Mall',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://www.hijabfashionmall.com/images/og-image-es.jpg',
        width: 1200,
        height: 630,
        alt: 'Hijab Fashion Mall - Colección Moda Modesta Turca',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hijab Fashion Mall | Mayorista Hijab Turco',
    description: 'Mayorista hijab turco premium. 5000+ productos. ¡Compra ahora!',
    images: ['https://www.hijabfashionmall.com/images/og-image-es.jpg'],
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

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HreflangTags />
      <CurrencyProvider>
        <ClientLayoutEs>
          {children}
        </ClientLayoutEs>
      </CurrencyProvider>
    </>
  )
}