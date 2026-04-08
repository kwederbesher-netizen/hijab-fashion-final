import ModestDressesClient from './ModestDressesClient'

export const metadata = {
  title: 'Modische Kleider im Großhandel | Türkische Maxi-Kleider Langarm | Hijab Fashion Mall',
  description: 'Entdecken Sie modische Kleider im Großhandel. Maxi-Kleider, Langarm-Kleider, Alltagsmode, Business-Kleider. Hochwertige Stoffe, zeitlose Schnitte. Weltweiter Versand.',
  keywords: 'modische kleider großhandel, maxi kleider langarm, lange kleider großhandel, business kleider langarm, alltagskleider, türkische kleider, kleider mit ärmeln, midi kleider',
  alternates: {
    canonical: 'https://hijabfashionmall.com/de/category/modest-dresses',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-dresses',
      en: 'https://hijabfashionmall.com/en/category/modest-dresses',
      fr: 'https://hijabfashionmall.com/fr/category/modest-dresses',
      de: 'https://hijabfashionmall.com/de/category/modest-dresses',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <ModestDressesClient searchParams={searchParams} />
}