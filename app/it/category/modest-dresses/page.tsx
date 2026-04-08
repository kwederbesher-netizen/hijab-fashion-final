import ModestDressesClient from './ModestDressesClient'

export const metadata = {
  title: 'Abiti Modesti all\'Ingrosso | Maxi Abiti Turchi | Hijab Fashion Mall',
  description: 'Scopri abiti modesti all\'ingrosso. Maxi abiti turchi, abiti lunghi eleganti, tuniche. Tessuti: crêpe, jersey, seta Medina. Taglie S-4XL.',
  keywords: 'abiti modesti all\'ingrosso, maxi abiti turchi, abiti lunghi eleganti, tunica lunga donna, abito lungo turco, vestito modesto, abbigliamento modesto all\'ingrosso, abito lungo cerimonia, abito lungo lavoro, vestito turco donna',
  alternates: {
    canonical: 'https://hijabfashionmall.com/it/category/modest-dresses',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/modest-dresses',
      en: 'https://hijabfashionmall.com/en/category/modest-dresses',
      fr: 'https://hijabfashionmall.com/fr/category/modest-dresses',
      it: 'https://hijabfashionmall.com/it/category/modest-dresses',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <ModestDressesClient searchParams={searchParams} />
}