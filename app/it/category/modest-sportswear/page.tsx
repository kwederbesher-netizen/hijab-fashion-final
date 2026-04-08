import ModestSportswearClient from './ModestSportswearClient'

export const metadata = {
  title: 'Abbigliamento Sportivo Modesto all\'Ingrosso | Tuta Sportiva Turca | Hijab Fashion Mall',
  description: 'Scopri abbigliamento sportivo modesto all\'ingrosso. Tute sportive, felpe, leggings coprenti. Tessuti tecnici traspiranti. Taglie S-3XL.',
  keywords: 'abbigliamento sportivo modesto all\'ingrosso, tuta sportiva turca, felpa sportiva donna, leggings lunghi, top sportivo maniche lunghe, abbigliamento fitness modesto, tuta palestra donna, sportswear turco, activewear modesto, abbigliamento yoga, running donna, wholesale sportswear, tessuto tecnico traspirante',
  alternates: {
    canonical: 'https://hijabfashionmall.com/it/category/modest-sportswear',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-sportswear',
      en: 'https://hijabfashionmall.com/en/category/modest-sportswear',
      fr: 'https://hijabfashionmall.com/fr/category/modest-sportswear',
      it: 'https://hijabfashionmall.com/it/category/modest-sportswear',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <ModestSportswearClient searchParams={searchParams} />
}