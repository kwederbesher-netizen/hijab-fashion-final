import PrayerClothesClient from './PrayerClothesClient'

export const metadata = {
  title: 'Prayer Clothes Wholesale | Turkish Prayer Dresses, Two-Piece Prayer Sets | Hijab Fashion Mall',
  description: 'Discover premium prayer clothes wholesale. Turkish prayer dresses, two-piece prayer sets, lightweight comfortable fabrics. Worldwide B2B shipping for retailers.',
  keywords: 'prayer clothes wholesale, turkish prayer dress, prayer set, islamic prayer outfit, prayer abaya, two piece prayer clothes, lightweight prayer dress, breathable prayer fabric',
  alternates: {
    canonical: 'https://hijabfashionmall.com/en/category/prayer-clothes',
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