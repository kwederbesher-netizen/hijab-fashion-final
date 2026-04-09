import { Metadata } from 'next'
import { CurrencyProvider } from '@/app/contexts/CurrencyContext'
import ClientLayoutTr from './components/ClientLayoutTr'
import HreflangTags from '@/app/components/HreflangTags'

export const metadata: Metadata = {
  title: {
    default: 'Hijab Fashion Mall | Toptan Türk Hijab & Modest Giyim',
    template: '%s | Hijab Fashion Mall'
  },
  description: '2019\'dan beri premium Türk hijab toptan. 5000+ ürün: abaya, hijab, elbise, spor giyim. Minimum sipariş yok. Dünya çapında kargo.',
  keywords: 'toptan türk hijab, toptan mütevazı moda, toptan türk abaya, türkiye hijab tedarikçisi',
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
    canonical: 'https://www.hijabfashionmall.com/tr',
    languages: {
      'en': 'https://www.hijabfashionmall.com/en',
      'ar': 'https://www.hijabfashionmall.com/ar',
      'fr': 'https://www.hijabfashionmall.com/fr',
      'de': 'https://www.hijabfashionmall.com/de',
      'it': 'https://www.hijabfashionmall.com/it',
      'es': 'https://www.hijabfashionmall.com/es',
      // ✅ ملاحظة: 'tr' غير موجودة هنا لأنها ليست لغة كاملة
      // سيتم إضافتها ديناميكياً فقط في الصفحة الرئيسية
    },
  },
  openGraph: {
    title: 'Hijab Fashion Mall | Toptan Türk Hijab & Modest Giyim',
    description: 'Premium Türk hijab toptan. 5000+ ürün. Dünya çapında kargo.',
    url: 'https://www.hijabfashionmall.com/tr',
    siteName: 'Hijab Fashion Mall',
    locale: 'tr_TR',
    type: 'website',
    images: [
      {
        url: 'https://www.hijabfashionmall.com/images/og-image-tr.jpg',
        width: 1200,
        height: 630,
        alt: 'Hijab Fashion Mall - Türk Modest Giyim Koleksiyonu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hijab Fashion Mall | Toptan Türk Hijab',
    description: 'Premium Türk hijab toptan. 5000+ ürün. Şimdi alışveriş yap!',
    images: ['https://www.hijabfashionmall.com/images/og-image-tr.jpg'],
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

export default function TurkishLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HreflangTags />
      <CurrencyProvider>
        <ClientLayoutTr>
          {children}
        </ClientLayoutTr>
      </CurrencyProvider>
    </>
  )
}