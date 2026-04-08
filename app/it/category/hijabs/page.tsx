import HijabsClient from './HijabsClient'

export const metadata = {
  title: 'Hijab all\'Ingrosso | Veli in Chiffon, Seta Medina, Jersey | Hijab Fashion Mall',
  description: 'Scopri hijab all\'ingrosso. Veli in chiffon, seta di Medina, jersey, georgette, cotone egiziano. Colori e stili vari. Acquisto online per professionisti.',
  keywords: 'hijab all\'ingrosso, grossista hijab, velo modesto, chiffon hijab, hijab seta medina, hijab jersey, hijab georgette, hijab cotone, foulard islamico, hijab turco, hijab arabo, hijab quotidiano, hijab cerimonia, wholesale hijab, hijab professionali, moda modesta hijab, collezione hijab 2026',
  alternates: {
    canonical: 'https://hijabfashionmall.com/it/category/hijabs',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/hijabs',
      en: 'https://hijabfashionmall.com/en/category/hijabs',
      fr: 'https://hijabfashionmall.com/fr/category/hijabs',
      it: 'https://hijabfashionmall.com/it/category/hijabs',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <HijabsClient searchParams={searchParams} />
}