import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Wholesale Turkish Hijab Clothing | Modest Fashion Supplier From Turkey',
  description: 'Premium Turkish hijab wholesale since 2019. 1000+ products: abayas, dresses, sets, sportswear. No minimum order, worldwide shipping, 24/7 support. Join 5000+ retailers worldwide.',
  keywords: 'wholesale hijab, turkish hijab wholesale, modest fashion wholesale, abaya wholesale, hijab clothing turkey, hijab dresses wholesale, islamic clothing wholesale',
  openGraph: {
    type: 'website',
    url: 'https://hijabfashionmall.com',
    title: 'Wholesale Turkish Hijab Clothing | Modest Fashion Supplier From Turkey',
    description: 'Premium Turkish hijab wholesale. 1000+ products: abayas, dresses, sets. No minimum order, worldwide shipping.',
    images: [
      {
        url: 'https://hijabfashionmall.com/images/og-cover.webp',
        width: 1200,
        height: 630,
        alt: 'Hijab Fashion Mall',
      },
    ],
    siteName: 'Hijab Fashion Mall',
  },
  alternates: {
    canonical: 'https://hijabfashionmall.com',
    languages: {
      'x-default': 'https://hijabfashionmall.com',
      'en': 'https://hijabfashionmall.com',
      'ar': 'https://hijabfashionmall.com/ar/',
      'fr': 'https://hijabfashionmall.com/fr/',
      'de': 'https://hijabfashionmall.com/de/',
      'tr': 'https://hijabfashionmall.com/tr/',
      'es': 'https://hijabfashionmall.com/es/',
      'it': 'https://hijabfashionmall.com/it/',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        
        {/* Schema Markup for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WholesaleStore",
              "name": "Hijab Fashion Mall",
              "alternateName": "Turkish Hijab Wholesale",
              "url": "https://hijabfashionmall.com",
              "logo": "https://hijabfashionmall.com/images/logo.png",
              "image": "https://hijabfashionmall.com/images/store-front.webp",
              "description": "Premium Turkish hijab wholesale supplier since 2019. Specializing in modest fashion, abayas, dresses, and Islamic wear.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "TR",
                "addressLocality": "Istanbul"
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+90-551-952-2448",
                  "contactType": "customer service",
                  "areaServed": "Worldwide",
                  "availableLanguage": ["English", "Arabic", "French", "German", "Turkish", "Spanish", "Italian"]
                }
              ],
              "sameAs": [
                "https://wa.me/905519522448",
                "https://t.me/hijabfashionmall",
                "https://instagram.com/hijabfashionmall",
                "https://facebook.com/hijabfashionmall",
                "https://youtube.com/@hijabfashionmall"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "500",
                "bestRating": "5",
                "worstRating": "1"
              },
              "offers": {
                "@type": "AggregateOffer",
                "offerCount": "1000+",
                "availability": "https://schema.org/InStock",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "priceCurrency": "USD",
                  "minPrice": "15",
                  "maxPrice": "150"
                }
              }
            })
          }}
        />
      </head>
      <body className={`${poppins.className} ${poppins.variable}`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}