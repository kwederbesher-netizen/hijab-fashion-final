import { Metadata } from 'next'
import { CurrencyProvider } from '@/app/contexts/CurrencyContext'
import ClientLayoutFr from './components/ClientLayoutFr'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'Hijab Fashion Mall | Grossiste Hijab Turc Premium',
    template: '%s | Hijab Fashion Mall'
  },
  description: 'Grossiste hijab turc premium depuis 2019. 5000+ produits : abayas, robes pour hijabis, ensembles, vêtements de sport. Pas de minimum de commande, livraison mondiale, support 24/7.',
  keywords: 'grossiste hijab turc, mode hijab en gros, vêtements pour hijabis en gros, abayas en gros, hijab turc',
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
    canonical: 'https://www.hijabfashionmall.com/fr',
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
    title: 'Hijab Fashion Mall | Grossiste Hijab Turc Premium',
    description: 'Grossiste hijab turc premium depuis 2019. 5000+ produits. Pas de minimum de commande, livraison mondiale.',
    url: 'https://www.hijabfashionmall.com/fr',
    siteName: 'Hijab Fashion Mall',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://www.hijabfashionmall.com/images/og-image-fr.jpg',
        width: 1200,
        height: 630,
        alt: 'Hijab Fashion Mall - Collection de mode hijab turque',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hijab Fashion Mall | Grossiste Hijab Turc Premium',
    description: 'Grossiste hijab turc premium. 5000+ produits. Commandez maintenant!',
    images: ['https://www.hijabfashionmall.com/images/og-image-fr.jpg'],
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

export default function FrenchLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-G2DPGVT9BY'
  
  return (
    <html lang="fr" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {/* Google Analytics */}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        />
        <Script
          id="google-analytics-fr"
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
          id="structured-data-fr"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Hijab Fashion Mall",
              "alternateName": "Hijab Fashion Mall France",
              "url": "https://www.hijabfashionmall.com/fr",
              "logo": "https://www.hijabfashionmall.com/logo.png",
              "sameAs": [
                "https://www.facebook.com/hijabfashionmall",
                "https://www.instagram.com/hijabfashionmall",
                "https://www.pinterest.com/hijabfashionmall"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["French", "English", "Arabic", "German", "Italian", "Spanish"]
              },
              "description": "Grossiste hijab turc premium. Plus de 5000+ produits avec livraison mondiale.",
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
          <ClientLayoutFr>
            {children}
          </ClientLayoutFr>
        </CurrencyProvider>
      </body>
    </html>
  )
}