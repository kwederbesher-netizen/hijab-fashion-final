import ModestSkirtSetsClient from './ModestSkirtSetsClient'

export const metadata = {
  title: 'Completi Gonna Modesti all\'Ingrosso | Gonna Lunga + Top | Hijab Fashion Mall',
  description: 'Scopri completi gonna modesti all\'ingrosso. Sets coordinati con gonna lunga e top. Tessuti: crêpe, jersey, viscosa. Taglie S-3XL.',
  keywords: 'completi gonna modesti all\'ingrosso, set gonna e top, gonna lunga turca, gonna a pieghe, gonna a ruota, completo coordinato donna, abbigliamento modesto set, gonna lunga elegante, gonna lunga casual, top coordinato, set turco donna',
  alternates: {
    canonical: 'https://hijabfashionmall.com/it/category/modest-skirt-sets',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-skirt-sets',
      en: 'https://hijabfashionmall.com/en/category/modest-skirt-sets',
      fr: 'https://hijabfashionmall.com/fr/category/modest-skirt-sets',
      it: 'https://hijabfashionmall.com/it/category/modest-skirt-sets',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <ModestSkirtSetsClient searchParams={searchParams} />
}