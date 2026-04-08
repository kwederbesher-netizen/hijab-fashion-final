import ModestSkirtSetsClient from './ModestSkirtSetsClient'

export const metadata = {
  title: 'Rock-Sets im Großhandel | Modische 2-teilige Sets | Hijab Fashion Mall',
  description: 'Entdecken Sie Rock-Sets im Großhandel. 2-teilige Sets bestehend aus Rock und Oberteil. Lange Röcke, Kombinationen mit Bluse oder Tunika. Weltweiter Versand.',
  keywords: 'rock sets großhandel, 2-teilige sets, lange röcke, rock und oberteil set, kombinierte sets, maxi rock sets, türkische mode sets, business sets mit rock',
  alternates: {
    canonical: 'https://hijabfashionmall.com/de/category/modest-skirt-sets',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-skirt-sets',
      en: 'https://hijabfashionmall.com/en/category/modest-skirt-sets',
      fr: 'https://hijabfashionmall.com/fr/category/modest-skirt-sets',
      de: 'https://hijabfashionmall.com/de/category/modest-skirt-sets',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <ModestSkirtSetsClient searchParams={searchParams} />
}