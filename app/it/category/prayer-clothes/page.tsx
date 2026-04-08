import PrayerClothesClient from './PrayerClothesClient'

export const metadata = {
  title: 'Abbigliamento per la Preghiera all\'Ingrosso | Jilbab Turco | Hijab Fashion Mall',
  description: 'Scopri abbigliamento per la preghiera all\'ingrosso. Jilbab, tunica lunga, gonna ampia. Tessuti: jersey, crêpe, cotone. Taglie S-3XL.',
  keywords: 'abbigliamento preghiera all\'ingrosso, jilbab turco, tunica lunga preghiera, gonna lunga preghiera, set preghiera donna, abito preghiera, hijab preghiera, wholesale prayer clothes, jilbab all\'ingrosso, abbigliamento religioso, tunica preghiera, gonna lunga coprente, set completo preghiera',
  alternates: {
    canonical: 'https://hijabfashionmall.com/it/category/prayer-clothes',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/prayer-clothes',
      en: 'https://hijabfashionmall.com/en/category/prayer-clothes',
      fr: 'https://hijabfashionmall.com/fr/category/prayer-clothes',
      it: 'https://hijabfashionmall.com/it/category/prayer-clothes',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <PrayerClothesClient searchParams={searchParams} />
}