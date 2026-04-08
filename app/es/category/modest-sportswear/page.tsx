import ModestSportswearClient from './ModestSportswearClient'

export const metadata = {
  title: 'Ropa Deportiva Modesta Turca al por Mayor | Activewear Recatado | Hijab Fashion Mall',
  description: 'Descubre 200+ conjuntos de ropa deportiva modesta turca al por mayor. Sudaderas, leggings anchos, conjuntos de entrenamiento. Telas transpirables, tallas hasta 4XL.',
  keywords: 'ropa deportiva modesta turca, activewear recatado, conjuntos de gimnasio modestos, sudaderas largas, leggings deportivos anchos, ropa de entrenamiento musulmana, chándal modesto, ropa de yoga recatada',
  alternates: {
    canonical: 'https://hijabfashionmall.com/es/category/modest-sportswear',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-sportswear',
      en: 'https://hijabfashionmall.com/en/category/modest-sportswear',
      fr: 'https://hijabfashionmall.com/fr/category/modest-sportswear',
      es: 'https://hijabfashionmall.com/es/category/modest-sportswear',
      de: 'https://hijabfashionmall.com/de/category/modest-sportswear',
      it: 'https://hijabfashionmall.com/it/category/modest-sportswear',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <ModestSportswearClient searchParams={searchParams} />
}