import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.hijabfashionmall.com'),
  title: {
    default: 'Hijab Fashion Mall - Wholesale Turkish Hijab Wear',
    template: '%s | Hijab Fashion Mall'
  },
  description: 'Wholesale premium Turkish hijab fashion. Worldwide shipping. Shop luxury abayas, elegant modest dresses, premium hijabs, modest sportswear, burkini swimwear, evening dresses, prayer clothes, skirt sets, and pants sets. Largest collection of Turkish modest wear.',
  keywords: [
    'turkish hijab wholesale',
    'wholesale modest fashion',
    'abaya wholesale',
    'turkish abaya',
    'modest dresses wholesale',
    'hijab fashion mall',
    'wholesale hijab',
    'modest sportswear wholesale',
    'burkini wholesale',
    'evening dresses wholesale',
    'prayer clothes wholesale',
    'skirt sets wholesale',
    'pants sets wholesale',
    'turkish modest wear',
    'islamic clothing wholesale',
    'modest fashion supplier',
    'wholesale islamic wear',
    'turkish fashion wholesale'
  ],
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
    languages: {
      'en': 'https://www.hijabfashionmall.com/en',
      'ar': 'https://www.hijabfashionmall.com/ar',
      'fr': 'https://www.hijabfashionmall.com/fr',
      'es': 'https://www.hijabfashionmall.com/es',
      'de': 'https://www.hijabfashionmall.com/de',
      'it': 'https://www.hijabfashionmall.com/it',
      'tr': 'https://www.hijabfashionmall.com/tr',
    },
  },
  openGraph: {
    title: 'Hijab Fashion Mall - Wholesale Turkish Hijab Wear',
    description: 'Wholesale premium Turkish hijab fashion. Worldwide shipping. Shop luxury abayas, elegant modest dresses, premium hijabs, and more.',
    url: 'https://www.hijabfashionmall.com',
    siteName: 'Hijab Fashion Mall',
    images: [
      {
        url: 'https://www.hijabfashionmall.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hijab Fashion Mall',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hijab Fashion Mall - Wholesale Turkish Hijab Wear',
    description: 'Wholesale premium Turkish hijab fashion. Worldwide shipping. Shop luxury abayas, modest dresses, hijabs, and more.',
    images: ['https://www.hijabfashionmall.com/images/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-G2DPGVT9BY'
  
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />
        
        {/* Google Analytics - تحميل بعد تحميل المحتوى (lazyOnload) */}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        />
        <Script
          id="google-analytics"
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
      </head>
      <body className={`${poppins.className} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  )
}