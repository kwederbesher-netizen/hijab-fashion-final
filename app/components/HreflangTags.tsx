// app/components/HreflangTags.tsx
'use client'

import { usePathname } from 'next/navigation'

// اللغات الكاملة (جميع الصفحات موجودة)
const FULL_LANGUAGES = ['en', 'ar', 'fr', 'de', 'it', 'es'] as const

// اللغات الجزئية (صفحة رئيسية فقط)
const PARTIAL_LANGUAGES = ['tr'] as const

// جميع اللغات
const ALL_LANGUAGES = [...FULL_LANGUAGES, ...PARTIAL_LANGUAGES] as const

const BASE_URL = 'https://www.hijabfashionmall.com'

export default function HreflangTags() {
  const pathname = usePathname()
  
  if (!pathname) return null
  
  // هل هذا المسار هو الصفحة الرئيسية؟
  const isHomePage = pathname === '/' || pathname === '/en' || pathname === '/ar' || 
                     pathname === '/fr' || pathname === '/de' || pathname === '/it' || 
                     pathname === '/es' || pathname === '/tr'
  
  // استخراج المسار النقي (بدون لغة)
  let cleanPath = pathname
  for (const lang of ALL_LANGUAGES) {
    if (pathname === `/${lang}` || pathname.startsWith(`/${lang}/`)) {
      cleanPath = pathname.replace(`/${lang}`, '') || '/'
      break
    }
  }
  
  return (
    <>
      {ALL_LANGUAGES.map((lang) => {
        // للغات الجزئية (مثل التركية): أضفها فقط في الصفحة الرئيسية
        if (PARTIAL_LANGUAGES.includes(lang as any) && !isHomePage) {
          return null
        }
        
        // للغات الكاملة: أضفها في جميع الصفحات
        return (
          <link
            key={lang}
            rel="alternate"
            hrefLang={lang}
            href={`${BASE_URL}/${lang}${cleanPath}`}
          />
        )
      })}
      
      {/* الرابط الافتراضي (الإنجليزية) */}
      <link 
        rel="alternate" 
        hrefLang="x-default" 
        href={`${BASE_URL}/en${cleanPath}`} 
      />
    </>
  )
}