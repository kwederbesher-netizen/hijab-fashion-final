import AbayasClient from './AbayasClient'

export const metadata = {
  title: 'Abayas Turcas al por Mayor | Colección Premium Seda Medina, Crepe, Jersey | Hijab Fashion Mall',
  description: 'Descubre 500+ abayas turcas al por mayor. Seda de Medina fluida, crepe elegante, jersey suave, encaje refinado. Cortes modernos, tallas hasta 4XL. Envío mundial para profesionales.',
  keywords: 'abayas turcas al por mayor, mayorista abayas, abaya seda medina, abaya crepe, abaya jersey, abaya encaje, abaya abierta, abaya cerrada, abaya talla grande, abaya moderna, abaya elegante, moda modesta turca, colección abaya 2026',
  alternates: {
    canonical: 'https://hijabfashionmall.com/es/category/abayas',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/abayas',
      en: 'https://hijabfashionmall.com/en/category/abayas',
      fr: 'https://hijabfashionmall.com/fr/category/abayas',
      es: 'https://hijabfashionmall.com/es/category/abayas',
      de: 'https://hijabfashionmall.com/de/category/abayas',
      it: 'https://hijabfashionmall.com/it/category/abayas',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <AbayasClient searchParams={searchParams} />
}