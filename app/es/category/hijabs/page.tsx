import HijabsClient from './HijabsClient'

export const metadata = {
  title: 'Hiyabs Turcos al por Mayor | Velo Musulmán Modal, Seda, Jersey, Gasa | Hijab Fashion Mall',
  description: 'Descubre 500+ hiyabs turcos al por mayor. Modal premium, seda líquida, jersey suave, gasa ligera. Más de 50 colores, calidad excepcional. Envío mundial para profesionales.',
  keywords: 'hiyabs turcos al por mayor, mayorista hiyabs, velo musulmán, hiyab modal, hiyab seda, hiyab jersey, hiyab gasa, pañuelo árabe, velo islámico, moda modesta turca, hiyab profesional, colección hiyab 2026',
  alternates: {
    canonical: 'https://hijabfashionmall.com/es/category/hijabs',
    languages: {
      ar: 'https://hijabfashionmall.com/ar/category/hijabs',
      en: 'https://hijabfashionmall.com/en/category/hijabs',
      es: 'https://hijabfashionmall.com/es/category/hijabs',
    },
  },
}

export default function Page({ searchParams }: any) {
  return <HijabsClient searchParams={searchParams} />
}