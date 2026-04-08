import ModestPantsSetsClient from './ModestPantsSetsClient'

export const metadata = {
  title: 'Hosen-Sets im Großhandel | 2-teilige Kombinationen | Hijab Fashion Mall',
  description: 'Entdecken Sie Hosen-Sets im Großhandel. 2-teilige Sets bestehend aus Hose und Oberteil. Lange Hosen, weitere Hosen, Tunika-Kombinationen. Komfortable Business- und Freizeitmode.',
  keywords: 'hosen sets großhandel, 2-teilige sets hose, lange hosen, weitere hosen, kombinationen hose oberteil, türkische hosenmode, business hosen sets, freizeit hosen sets',
  alternates: {
    canonical: 'https://hijabfashionmall.com/de/category/modest-pants-sets',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-pants-sets',
      en: 'https://hijabfashionmall.com/en/category/modest-pants-sets',
      fr: 'https://hijabfashionmall.com/fr/category/modest-pants-sets',
      de: 'https://hijabfashionmall.com/de/category/modest-pants-sets',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <ModestPantsSetsClient searchParams={searchParams} />
}