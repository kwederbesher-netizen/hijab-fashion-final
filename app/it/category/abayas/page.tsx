import AbayasClient from './AbayasClient'

export const metadata = {
  title: 'Abaya Turche all\'Ingrosso | Collezione Premium Seta Medina, Crêpe, Jersey | Hijab Fashion Mall',
  description: 'Scopri abaya turche all\'ingrosso. Seta di Medina fluida, crêpe elegante, jersey morbido, pizzo raffinato. Tagli moderni, taglie fino al 4XL. Spedizione mondiale per professionisti.',
  keywords: 'abaya turche all\'ingrosso, grossista abaya, abaya seta medina, abaya crêpe, abaya jersey, abaya pizzo, abaya aperta, abaya chiusa, abaya taglie forti, abaya moderna, abaya elegante, moda modesta turca, hijab turco, collezione abaya 2026, abaya professionale, abaya cerimonia, abaya quotidiana, tessuto turco qualità, import abaya turchia, abaya rivenditore, vendita all\'ingrosso abaya',
  alternates: {
    canonical: 'https://hijabfashionmall.com/it/category/abayas',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/abayas',
      en: 'https://hijabfashionmall.com/en/category/abayas',
      fr: 'https://hijabfashionmall.com/fr/category/abayas',
      it: 'https://hijabfashionmall.com/it/category/abayas',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <AbayasClient searchParams={searchParams} />
}