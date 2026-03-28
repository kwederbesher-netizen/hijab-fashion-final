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
  // ... الميتاداتا ...
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-G2DPGVT9BY'
  
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        />
        <Script
          id="google-analytics"
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
      </head>
      <body className={`${poppins.className} ${poppins.variable}`}>
        {children}
      </body>
    </html>
  )
}