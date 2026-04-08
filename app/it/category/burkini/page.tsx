import BurkiniModestSwimwearClient from './BurkiniModestSwimwearClient'

export const metadata = {
  title: 'Burkini all\'Ingrosso | Costume da Bagno Coprente Turco | Hijab Fashion Mall',
  description: 'Scopri burkini all\'ingrosso. Costumi da bagno coprenti, tessuto tecnico asciugatura rapida, protezione UV. Taglie S-4XL.',
  keywords: 'burkini all\'ingrosso, costume da bagno coprente, burkini turco, costume intero maniche lunghe, swimsuit modesto, burkini donna, costume mare coprente, tessuto lycra, protezione solare UV, burkini taglie forti, wholesale burkini, costume nuoto modesto, burkini estate, burkini piscina, burkini mare',
  alternates: {
    canonical: 'https://hijabfashionmall.com/it/category/burkini-modest-swimwear',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/burkini-modest-swimwear',
      en: 'https://hijabfashionmall.com/en/category/burkini-modest-swimwear',
      fr: 'https://hijabfashionmall.com/fr/category/burkini-modest-swimwear',
      it: 'https://hijabfashionmall.com/it/category/burkini-modest-swimwear',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <BurkiniModestSwimwearClient searchParams={searchParams} />
}