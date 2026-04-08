import ModestSkirtSetsClient from './ModestSkirtSetsClient'

export const metadata = {
  title: 'Modest Skirt Sets Wholesale | Turkish Two-Piece Sets, Skirt & Top Sets | Hijab Fashion Mall',
  description: 'Discover premium modest skirt sets wholesale. Turkish two-piece sets, matching skirt and top combinations. Premium fabrics, elegant designs for modest fashion retailers.',
  keywords: 'modest skirt sets wholesale, turkish skirt sets, two piece sets modest, skirt and top sets, matching modest sets, modest co-ord sets, long skirt sets',
  alternates: {
    canonical: 'https://hijabfashionmall.com/en/category/modest-skirt-sets',
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