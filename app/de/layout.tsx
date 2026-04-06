import { Metadata } from 'next'
import { CurrencyProvider } from '@/app/contexts/CurrencyContext'
import ClientLayoutDe from './components/ClientLayoutDe'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'Hijab Fashion Mall | Großhandel Türkische Hijab Premium',
    template: '%s | Hijab Fashion Mall'
  },
  description: 'Großhandel türkische Hijab Premium seit 2019. 5000+ Produkte: Abayas, Kleider für Hijabis, Sets, Sportbekleidung. Keine Mindestbestellmenge, weltweiter Versand, 24/7 Support.',
  keywords: 'Großhandel türkische Hijab, Hijab Mode Großhandel, Kleidung für Hijabis Großhandel, Abayas Großhandel, türkischer Hijab',
  authors: [{ name: 'Hijab Fashion Mall' }],
  creator: 'Hijab Fashion Mall',
  publisher: 'Hijab Fashion Mall',
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
      'tr': 'https://www.hijabfashionmall.com/tr',
    },
  },
  openGraph: {
    title: 'Hijab Fashion Mall | Großhandel Türkische Hijab Premium',
    description: 'Großhandel türkische Hijab Premium seit 2019. 5000+ Produkte. Keine Mindestbestellmenge, weltweiter Versand.',
    url: 'https://www.hijabfashionmall.com/de',
    siteName: 'Hijab Fashion Mall',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: 'https://www.hijabfashionmall.com/images/og-image-de.jpg',
        width: 1200,
        height: 630,
        alt: 'Hijab Fashion Mall - Türkische Hijab Mode Kollektion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hijab Fashion Mall | Großhandel Türkische Hijab Premium',
    description: 'Großhandel türkische Hijab Premium. 5000+ Produkte. Jetzt bestellen!',
    images: ['https://www.hijabfashionmall.com/images/og-image-de.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
  verification: {
    google: 'your-google-verification-code',
  },
  category: 'fashion',
}

export default function GermanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-G2DPGVT9BY'
  
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics-de"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />
      
      {/* JSON-LD Structured Data for SEO */}
      <Script
        id="structured-data-de"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Hijab Fashion Mall",
            "alternateName": "Hijab Fashion Mall Deutschland",
            "url": "https://www.hijabfashionmall.com/de",
            "logo": "https://www.hijabfashionmall.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/hijabfashionmall",
              "https://www.instagram.com/hijabfashionmall",
              "https://www.pinterest.com/hijabfashionmall"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": ["German", "English", "Arabic", "French", "Italian", "Spanish"]
            },
            "description": "Großhandel türkische Hijab Premium. Über 5000+ Produkte mit weltweitem Versand.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "TR"
            }
          })
        }}
      />
      
      {/* Google Fonts - Poppins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      
      <CurrencyProvider>
        <ClientLayoutDe>
          {children}
        </ClientLayoutDe>
      </CurrencyProvider>
    </>
  )
}