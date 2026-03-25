// app/sitemap.ts
import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity'

// قائمة التصنيفات الثابتة
const categories = [
  'abayas',
  'hijabs',
  'modest-dresses',
  'modest-skirt-sets',
  'modest-evening-dresses',
  'modest-pants-sets',
  'modest-sportswear',
  'prayer-clothes',
  'burkini',
  'tunics',
  'modest-coats',
  'modest-jackets',
  'trenchcoats',
  'modest-wool',
  'kaftan'
]

// قائمة اللغات المدعومة
const locales = ['ar', 'en', 'fr', 'de', 'es', 'it', 'tr']

// الصفحات الثابتة (الرئيسية)
const staticPages = [
  '',
  'catalog',
  'about-us',
  'contact',
  'blogs',
  'why-were-number-one',
  'private-label-service',
  'online-store-guide',
  'physical-store-guide',
  'modest-fashion-trends',
  'refund-policy',
  'terms-conditions',
  'privacy-policy',
  'shipping-policy'
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://hijabfashionmall.com'
  
  // جلب جميع المنتجات من Sanity
  let products: any[] = []
  try {
    const query = `*[_type == "product"]{
      "slug_ar": slug_ar.current,
      "slug_en": slug_en.current,
      _updatedAt
    }`
    products = await client.fetch(query)
    console.log(`✅ جلب ${products.length} منتج لـ sitemap`)
  } catch (error) {
    console.error('خطأ في جلب المنتجات لـ sitemap:', error)
  }

  // جلب صفحات الدول الديناميكية
  const countries = [
    'usa', 'canada', 'uk', 'ireland', 'germany', 'france', 'italy', 'spain',
    'netherlands', 'belgium', 'sweden', 'denmark', 'norway', 'finland',
    'switzerland', 'austria', 'saudiarabia', 'uae', 'kuwait', 'qatar',
    'bahrain', 'oman', 'lebanon', 'syria', 'iraq', 'jordan', 'egypt',
    'algeria', 'libya', 'morocco', 'tunisia', 'australia', 'newzealand',
    'brazil', 'argentina', 'mexico', 'chile'
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  // 1. الصفحات الرئيسية لكل لغة
  for (const locale of locales) {
    for (const page of staticPages) {
      const path = page === '' ? `/${locale}` : `/${locale}/${page}`
      sitemapEntries.push({
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1.0 : 0.8,
      })
    }
  }

  // 2. صفحات التصنيفات لكل لغة
  for (const locale of locales) {
    for (const category of categories) {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/category/${category}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    }
  }

  // 3. صفحات المنتجات لكل لغة
  for (const product of products) {
    if (product.slug_ar) {
      sitemapEntries.push({
        url: `${baseUrl}/ar/product/${product.slug_ar}`,
        lastModified: new Date(product._updatedAt),
        changeFrequency: 'weekly',
        priority: 0.6,
      })
    }
    if (product.slug_en) {
      sitemapEntries.push({
        url: `${baseUrl}/en/product/${product.slug_en}`,
        lastModified: new Date(product._updatedAt),
        changeFrequency: 'weekly',
        priority: 0.6,
      })
    }
  }

  // 4. صفحات الدول (للغتين العربية والإنجليزية فقط حالياً)
  for (const country of countries) {
    // الصفحة العربية
    sitemapEntries.push({
      url: `${baseUrl}/ar/wholesale-${country}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })
    // الصفحة الإنجليزية
    sitemapEntries.push({
      url: `${baseUrl}/en/wholesale-${country}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    })
  }

  console.log(`✅ تم إنشاء sitemap بـ ${sitemapEntries.length} رابط`)

  return sitemapEntries
}