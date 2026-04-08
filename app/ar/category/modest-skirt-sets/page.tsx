import ModestSkirtSetsClient from './ModestSkirtSetsClient'

export const metadata = {
title: 'أطقم تنانير محجبات بالجملة | طقم تنورة وبلوزة تركية | حجاب فاشون مول',
description: 'اكتشفي أطقم تنانير محجبات بالجملة فاخرة. أطقم تركية من قطعتين، تنانير طويلة مع بلوزات متطابقة. تصاميم أنيقة لأزياء المحجبات.',
keywords: 'أطقم تنانير محجبات بالجملة, أطقم تنانير تركية, طقم تنورة وبلوزة, أطقم محجبات منسقة, تنانير طويلة, طقم كوورد',
alternates: {
canonical: 'https://hijabfashionmall.com/ar/category/modest-skirt-sets',
languages: {
ar: 'https://hijabfashionmall.com/ar/category/modest-skirt-sets',
en: 'https://hijabfashionmall.com/en/category/modest-skirt-sets',
fr: 'https://hijabfashionmall.com/fr/category/modest-skirt-sets',
es: 'https://hijabfashionmall.com/es/category/modest-skirt-sets',
de: 'https://hijabfashionmall.com/de/category/modest-skirt-sets',
it: 'https://hijabfashionmall.com/it/category/modest-skirt-sets',
},
},
}

export default function Page({ searchParams }: any) {
return <ModestSkirtSetsClient searchParams={searchParams} />
}