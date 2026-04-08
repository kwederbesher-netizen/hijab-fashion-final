import ModestEveningDressesClient from './ModestEveningDressesClient'

export const metadata = {
  title: 'Abiti da Sera Modesti all\'Ingrosso | Abiti Lunghi Eleganti Turchi | Hijab Fashion Mall',
  description: 'Scopri abiti da sera modesti all\'ingrosso. Abiti lunghi eleganti per cerimonie, matrimoni. Tessuti: seta Medina, crêpe georgette, pizzo. Taglie S-3XL.',
  keywords: 'abiti da sera modesti all\'ingrosso, abito lungo elegante, abito cerimonia turco, abito lungo matrimonio, abito da sera turco, vestito lungo cerimonia, abito lungo pizzo, abito lungo seta, abito lungo crêpe, abito da sera con maniche lunghe, abito lungo formale, wholesale evening dresses',
  alternates: {
    canonical: 'https://hijabfashionmall.com/it/category/modest-evening-dresses',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-evening-dresses',
      en: 'https://hijabfashionmall.com/en/category/modest-evening-dresses',
      fr: 'https://hijabfashionmall.com/fr/category/modest-evening-dresses',
      it: 'https://hijabfashionmall.com/it/category/modest-evening-dresses',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <ModestEveningDressesClient searchParams={searchParams} />
}