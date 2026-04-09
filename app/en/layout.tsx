import { Metadata } from 'next'
import ClientLayout from '@/app/components/ClientLayout'
import { CurrencyProvider } from '@/app/contexts/CurrencyContext'
import HreflangTags from '@/app/components/HreflangTags'

export const metadata: Metadata = {
  title: {
    default: 'Hijab Fashion Mall | Wholesale Turkish Hijab & Modest Wear',
    template: '%s | Hijab Fashion Mall'
  },
  description: 'Premium Turkish hijab wholesale since 2019. Shop 5000+ modest fashion products including abayas, hijabs, dresses, and sportswear. No minimum order. Worldwide shipping. 24/7 support.',
  keywords: 'wholesale hijab turkish, modest fashion wholesale, turkish abaya wholesale, hijab supplier turkey, wholesale modest wear',
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
    canonical: 'https://www.hijabfashionmall.com/en',
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
    title: 'Hijab Fashion Mall | Wholesale Turkish Hijab & Modest Wear',
    description: 'Premium Turkish hijab wholesale since 2019. Shop 5000+ modest fashion products. No minimum order. Worldwide shipping.',
    url: 'https://www.hijabfashionmall.com/en',
    siteName: 'Hijab Fashion Mall',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.hijabfashionmall.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hijab Fashion Mall - Turkish Modest Fashion Collection',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hijab Fashion Mall | Wholesale Turkish Hijab',
    description: 'Premium Turkish hijab wholesale. 5000+ modest fashion products. Shop now!',
    images: ['https://www.hijabfashionmall.com/images/og-image.jpg'],
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

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HreflangTags />
      <CurrencyProvider>
        <ClientLayout>
          {children}
        </ClientLayout>
      </CurrencyProvider>
    </>
  )
}