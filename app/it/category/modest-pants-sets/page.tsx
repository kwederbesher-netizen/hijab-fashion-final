import ModestPantsSetsClient from './ModestPantsSetsClient'

export const metadata = {
  title: 'Completi Pantalone Modesti all\'Ingrosso | Tuta Turca Pantalone Lungo | Hijab Fashion Mall',
  description: 'Scopri completi pantalone modesti all\'ingrosso. Sets coordinati con pantalone lungo e top. Tessuti: crêpe, jersey, viscosa. Taglie S-4XL.',
  keywords: 'completi pantalone modesti all\'ingrosso, tuta pantalone turca, completo pantalone e top, pantalone lungo donna, completo coordinato pantalone, abbigliamento modesto pantalone, set turco pantalone, pantalone elegante lungo, completo lavoro donna, tuta turca donna, pantalone largo donna',
  alternates: {
    canonical: 'https://hijabfashionmall.com/it/category/modest-pants-sets',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-pants-sets',
      en: 'https://hijabfashionmall.com/en/category/modest-pants-sets',
      fr: 'https://hijabfashionmall.com/fr/category/modest-pants-sets',
      it: 'https://hijabfashionmall.com/it/category/modest-pants-sets',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <ModestPantsSetsClient searchParams={searchParams} />
}