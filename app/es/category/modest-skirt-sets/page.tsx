import ModestSkirtSetsClient from './ModestSkirtSetsClient'

export const metadata = {
  title: 'Conjuntos de Falda Modestos Turcos al por Mayor | Faldas Largas + Túnicas | Hijab Fashion Mall',
  description: 'Descubre 300+ conjuntos de falda modestos turcos al por mayor. Faldas largas maxi combinadas con túnicas o blusas. Telas fluidas, diseños elegantes, tallas hasta 4XL.',
  keywords: 'conjuntos de falda modestos al por mayor, conjuntos turcos de falda, faldas largas musulmanas, conjunto de falda y túnica, conjuntos modestos de dos piezas, faldas modestas para trabajar, faldas midi modestas',
  alternates: {
    canonical: 'https://hijabfashionmall.com/es/category/modest-skirt-sets',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-skirt-sets',
      en: 'https://hijabfashionmall.com/en/category/modest-skirt-sets',
      fr: 'https://hijabfashionmall.com/fr/category/modest-skirt-sets',
      es: 'https://hijabfashionmall.com/es/category/modest-skirt-sets',
      de: 'https://hijabfashionmall.com/de/category/modest-skirt-sets',
      it: 'https://hijabfashionmall.com/it/category/modest-skirt-sets',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <ModestSkirtSetsClient searchParams={searchParams} />
}