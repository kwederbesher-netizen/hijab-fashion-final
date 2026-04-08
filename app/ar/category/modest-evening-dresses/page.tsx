import ModestEveningDressesClient from './ModestEveningDressesClient'

export const metadata = {
title: 'فساتين سهرة محجبات بالجملة | فساتين رسمية تركية، فساتين ضيوف حفلات الزفاف | حجاب فاشون مول',
description: 'اكتشفي فساتين سهرة محجبات بالجملة فاخرة. فساتين رسمية تركية، فساتين ضيوف حفلات الزفاف، ملابس مناسبات خاصة. تصاميم أنيقة بتغطية كاملة.',
keywords: 'فساتين سهرة محجبات بالجملة, فساتين سهرة تركية, فساتين رسمية محجبات, فساتين ضيوف حفلات الزفاف محجبات',
alternates: {
canonical: 'https://hijabfashionmall.com/ar/category/modest-evening-dresses',
languages: {
ar: 'https://hijabfashionmall.com/ar/category/modest-evening-dresses',
en: 'https://hijabfashionmall.com/en/category/modest-evening-dresses',
fr: 'https://hijabfashionmall.com/fr/category/modest-evening-dresses',
es: 'https://hijabfashionmall.com/es/category/modest-evening-dresses',
de: 'https://hijabfashionmall.com/de/category/modest-evening-dresses',
it: 'https://hijabfashionmall.com/it/category/modest-evening-dresses',
},
},
}

export default function Page({ searchParams }: any) {
return <ModestEveningDressesClient searchParams={searchParams} />
}