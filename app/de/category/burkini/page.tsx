import BurkiniModestSwimwearClient from './BurkiniClient'

export const metadata = {
  title: 'Burkini im Großhandel | Modische Badebekleidung | Hijab Fashion Mall',
  description: 'Entdecken Sie Burkini-Modelle im Großhandel. Modische, bequeme Badebekleidung. Schnelltrocknende Materialien, UV-Schutz, verschiedene Größen. Ideal für Strand, Pool und Urlaub.',
  keywords: 'burkini großhandel, burkini modelle, badebekleidung langarm, schwimmanzug mit kopfhaube, burkini 2-teilig, burkini 3-teilig, muslimische badebekleidung, uv-schutz badebekleidung',
  alternates: {
    canonical: 'https://hijabfashionmall.com/de/category/burkini-modest-swimwear',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/burkini-modest-swimwear',
      en: 'https://hijabfashionmall.com/en/category/burkini-modest-swimwear',
      fr: 'https://hijabfashionmall.com/fr/category/burkini-modest-swimwear',
      de: 'https://hijabfashionmall.com/de/category/burkini-modest-swimwear',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <BurkiniModestSwimwearClient searchParams={searchParams} />
}