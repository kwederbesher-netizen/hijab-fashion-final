import BurkiniModestSwimwearClient from './BurkiniClient'

export const metadata = {
  title: 'Burkini Traje de Baño Modesto Turco al por Mayor | Bañador Islámico | Hijab Fashion Mall',
  description: 'Descubre 150+ burkinis turcos al por mayor. Bañadores de dos piezas, mangas largas, pantalón hasta la rodilla. Tela de secado rápido, protección UV, tallas hasta 4XL.',
  keywords: 'burkini al por mayor, traje de baño modesto turco, bañador islámico, burkini de dos piezas, ropa de playa musulmana, traje de baño recatado, burkini con mangas largas, swimwear modesto',
  alternates: {
    canonical: 'https://hijabfashionmall.com/es/category/burkini-modest-swimwear',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/burkini-modest-swimwear',
      en: 'https://hijabfashionmall.com/en/category/burkini-modest-swimwear',
      fr: 'https://hijabfashionmall.com/fr/category/burkini-modest-swimwear',
      es: 'https://hijabfashionmall.com/es/category/burkini-modest-swimwear',
      de: 'https://hijabfashionmall.com/de/category/burkini-modest-swimwear',
      it: 'https://hijabfashionmall.com/it/category/burkini-modest-swimwear',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <BurkiniModestSwimwearClient searchParams={searchParams} />
}