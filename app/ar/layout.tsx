// app/ar/layout.tsx
import { Metadata } from 'next'
import { CurrencyProvider } from '@/app/contexts/CurrencyContext'
import ClientLayoutAr from './components/ClientLayoutAr'
import Script from 'next/script'

export const metadata: Metadata = {
  title: {
    default: 'حجاب فاشون مول | جملة ملابس محجبات تركية',
    template: '%s | حجاب فاشون مول'
  },
  description: 'جملة حجاب تركي premium منذ 2019. أكثر من 5000+ منتج: عبايات، فساتين محجبات، أطقم، ملابس رياضية. لا يوجد حد أدنى للطلب، شحن عالمي، دعم 24/7.',
  keywords: 'جملة حجاب تركي, أزياء محجبات جملة, جملة ملابس محجبات, عبايات جملة, حجاب تركي بالجملة',
  authors: [{ name: 'حجاب فاشون مول' }],
  creator: 'حجاب فاشون مول',
  publisher: 'حجاب فاشون مول',
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
    canonical: 'https://www.hijabfashionmall.com/ar',
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
    title: 'حجاب فاشون مول | جملة ملابس محجبات تركية',
    description: 'جملة حجاب تركي premium منذ 2019. أكثر من 5000+ منتج. لا يوجد حد أدنى للطلب، شحن عالمي.',
    url: 'https://www.hijabfashionmall.com/ar',
    siteName: 'حجاب فاشون مول',
    locale: 'ar_AR',
    type: 'website',
    images: [
      {
        url: 'https://www.hijabfashionmall.com/images/og-image-ar.jpg',
        width: 1200,
        height: 630,
        alt: 'حجاب فاشون مول - تشكيلة أزياء محجبات تركية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'حجاب فاشون مول | جملة ملابس محجبات تركية',
    description: 'جملة حجاب تركي premium. أكثر من 5000+ منتج. تسوق الآن!',
    images: ['https://www.hijabfashionmall.com/images/og-image-ar.jpg'],
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

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-G2DPGVT9BY'
  
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics-ar"
        strategy="afterInteractive"
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
        id="structured-data-ar"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "حجاب فاشون مول",
            "alternateName": "Hijab Fashion Mall",
            "url": "https://www.hijabfashionmall.com/ar",
            "logo": "https://www.hijabfashionmall.com/logo.png",
            "sameAs": [
              "https://www.facebook.com/hijabfashionmall",
              "https://www.instagram.com/hijabfashionmall",
              "https://www.pinterest.com/hijabfashionmall"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "availableLanguage": ["Arabic", "English", "French", "German", "Italian", "Spanish"]
            },
            "description": "جملة ملابس محجبات تركية premium. أكثر من 5000+ منتج مع شحن عالمي.",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "TR"
            }
          })
        }}
      />
      
      {/* Google Fonts - Tajawal */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap" rel="stylesheet" />
      
      <style dangerouslySetInnerHTML={{
        __html: `
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          body {
            font-family: 'Tajawal', sans-serif !important;
            background-color: #fff;
          }
        `
      }} />
      
      <CurrencyProvider>
        <ClientLayoutAr>
          {children}
        </ClientLayoutAr>
      </CurrencyProvider>
    </>
  )
}