import PrayerClothesClient from './PrayerClothesClient'

export const metadata = {
  title: 'Conjuntos de Oración Turcos al por Mayor | Ropa para Rezar | Hijab Fashion Mall',
  description: 'Descubre 180+ conjuntos de oración turcos al por mayor. Khimar largo + falda amplia. Telas suaves de algodón y modal. Colores neutros, tallas hasta 4XL.',
  keywords: 'conjuntos de oración turcos, ropa para rezar, khimar largo, falda de oración, conjunto de namaz, prendas para rezar al por mayor, moda islámica práctica, ropa cómoda para oración',
  alternates: {
    canonical: 'https://hijabfashionmall.com/es/category/prayer-clothes',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/prayer-clothes',
      en: 'https://hijabfashionmall.com/en/category/prayer-clothes',
      fr: 'https://hijabfashionmall.com/fr/category/prayer-clothes',
      es: 'https://hijabfashionmall.com/es/category/prayer-clothes',
      de: 'https://hijabfashionmall.com/de/category/prayer-clothes',
      it: 'https://hijabfashionmall.com/it/category/prayer-clothes',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <PrayerClothesClient searchParams={searchParams} />
}