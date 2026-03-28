import { Metadata } from 'next'
import ClientLayout from '@/app/components/ClientLayout'
import { CurrencyProvider } from '@/app/contexts/CurrencyContext'

// ✅ generateMetadata للصفحات الإنجليزية - canonical صحيح
export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.hijabfashionmall.com/en',
    languages: {
      'en': 'https://www.hijabfashionmall.com/en',
      'ar': 'https://www.hijabfashionmall.com/ar',
    },
  },
  openGraph: {
    title: 'Hijab Fashion Mall - Wholesale Turkish Hijab Wear',
    description: 'Wholesale premium Turkish hijab fashion. Worldwide shipping, no minimum order.',
    url: 'https://www.hijabfashionmall.com/en',
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
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CurrencyProvider>
      <ClientLayout>
        {children}
      </ClientLayout>
    </CurrencyProvider>
  )
}