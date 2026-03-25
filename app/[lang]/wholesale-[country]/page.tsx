// app/[lang]/wholesale-[country]/page.tsx
'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import Head from 'next/head'

export default function CountryPage() {
  const params = useParams()
  const lang = params?.lang as string || 'en'
  const country = params?.country as string || ''
  
  // ترجمة النصوص حسب اللغة
  const content = {
    ar: {
      title: 'قريباً',
      subtitle: 'جاري تجهيز الصفحة',
      description: 'نعمل على توفير معلومات شاملة عن استيراد ملابس المحجبات التركية إلى',
      backHome: 'العودة إلى الرئيسية',
      contact: 'تواصل معنا للاستفسار',
      notify: 'سيتم إضافة محتوى خاص بهذه الدولة قريباً'
    },
    en: {
      title: 'Coming Soon',
      subtitle: 'Page Under Preparation',
      description: 'We are working on providing comprehensive information about importing Turkish hijab wear to',
      backHome: 'Back to Home',
      contact: 'Contact Us for Inquiries',
      notify: 'Country-specific content will be added soon'
    }
  }

  const t = content[lang as keyof typeof content] || content.en
  
  // أسماء الدول للعرض
  const countryNames: Record<string, { ar: string; en: string }> = {
    'usa': { ar: 'الولايات المتحدة', en: 'USA' },
    'canada': { ar: 'كندا', en: 'Canada' },
    'uk': { ar: 'المملكة المتحدة', en: 'UK' },
    'ireland': { ar: 'أيرلندا', en: 'Ireland' },
    'germany': { ar: 'ألمانيا', en: 'Germany' },
    'france': { ar: 'فرنسا', en: 'France' },
    'italy': { ar: 'إيطاليا', en: 'Italy' },
    'spain': { ar: 'إسبانيا', en: 'Spain' },
    'netherlands': { ar: 'هولندا', en: 'Netherlands' },
    'belgium': { ar: 'بلجيكا', en: 'Belgium' },
    'sweden': { ar: 'السويد', en: 'Sweden' },
    'denmark': { ar: 'الدنمارك', en: 'Denmark' },
    'norway': { ar: 'النرويج', en: 'Norway' },
    'finland': { ar: 'فنلندا', en: 'Finland' },
    'switzerland': { ar: 'سويسرا', en: 'Switzerland' },
    'austria': { ar: 'النمسا', en: 'Austria' },
    'saudiarabia': { ar: 'السعودية', en: 'Saudi Arabia' },
    'uae': { ar: 'الإمارات', en: 'UAE' },
    'kuwait': { ar: 'الكويت', en: 'Kuwait' },
    'qatar': { ar: 'قطر', en: 'Qatar' },
    'bahrain': { ar: 'البحرين', en: 'Bahrain' },
    'oman': { ar: 'عمان', en: 'Oman' },
    'lebanon': { ar: 'لبنان', en: 'Lebanon' },
    'syria': { ar: 'سوريا', en: 'Syria' },
    'iraq': { ar: 'العراق', en: 'Iraq' },
    'jordan': { ar: 'الأردن', en: 'Jordan' },
    'egypt': { ar: 'مصر', en: 'Egypt' },
    'algeria': { ar: 'الجزائر', en: 'Algeria' },
    'libya': { ar: 'ليبيا', en: 'Libya' },
    'morocco': { ar: 'المغرب', en: 'Morocco' },
    'tunisia': { ar: 'تونس', en: 'Tunisia' },
    'australia': { ar: 'أستراليا', en: 'Australia' },
    'newzealand': { ar: 'نيوزيلندا', en: 'New Zealand' },
    'brazil': { ar: 'البرازيل', en: 'Brazil' },
    'argentina': { ar: 'الأرجنتين', en: 'Argentina' },
    'mexico': { ar: 'المكسيك', en: 'Mexico' },
    'chile': { ar: 'تشيلي', en: 'Chile' }
  }

  const countryName = countryNames[country] 
    ? (lang === 'ar' ? countryNames[country].ar : countryNames[country].en)
    : country?.replace(/-/g, ' ').toUpperCase() || ''

  // أيقونة الدولة
  const getCountryFlag = (countryCode: string): string => {
    const flags: Record<string, string> = {
      'usa': '🇺🇸',
      'canada': '🇨🇦',
      'uk': '🇬🇧',
      'ireland': '🇮🇪',
      'germany': '🇩🇪',
      'france': '🇫🇷',
      'italy': '🇮🇹',
      'spain': '🇪🇸',
      'netherlands': '🇳🇱',
      'belgium': '🇧🇪',
      'sweden': '🇸🇪',
      'denmark': '🇩🇰',
      'norway': '🇳🇴',
      'finland': '🇫🇮',
      'switzerland': '🇨🇭',
      'austria': '🇦🇹',
      'saudiarabia': '🇸🇦',
      'uae': '🇦🇪',
      'kuwait': '🇰🇼',
      'qatar': '🇶🇦',
      'bahrain': '🇧🇭',
      'oman': '🇴🇲',
      'lebanon': '🇱🇧',
      'syria': '🇸🇾',
      'iraq': '🇮🇶',
      'jordan': '🇯🇴',
      'egypt': '🇪🇬',
      'algeria': '🇩🇿',
      'libya': '🇱🇾',
      'morocco': '🇲🇦',
      'tunisia': '🇹🇳',
      'australia': '🇦🇺',
      'newzealand': '🇳🇿',
      'brazil': '🇧🇷',
      'argentina': '🇦🇷',
      'mexico': '🇲🇽',
      'chile': '🇨🇱'
    }
    return flags[countryCode] || '🌍'
  }

  return (
    <>
      <Head>
        <title>{t.title} - {countryName} | Hijab Fashion Mall</title>
        <meta name="description" content={`Guide to importing Turkish hijab wear to ${countryName}. Shipping information, customs, and best practices. Coming soon.`} />
        <meta name="robots" content="noindex, follow" />
      </Head>
      <div style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '80px 20px',
        background: 'linear-gradient(135deg, #f5f5f5 0%, #fff 100%)'
      }}>
        <div style={{ maxWidth: '600px' }}>
          <div style={{
            width: '140px',
            height: '140px',
            margin: '0 auto 30px',
            background: 'rgba(255, 90, 0, 0.1)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '70px'
          }}>
            {getCountryFlag(country)}
          </div>
          <h1 style={{
            fontSize: '48px',
            color: '#ff5a00',
            marginBottom: '15px',
            fontWeight: 800
          }}>
            {t.title}
          </h1>
          <p style={{
            fontSize: '24px',
            color: '#333',
            marginBottom: '15px',
            fontWeight: 500
          }}>
            {countryName}
          </p>
          <p style={{
            fontSize: '18px',
            color: '#666',
            marginBottom: '20px',
            lineHeight: '1.8'
          }}>
            {t.subtitle}
          </p>
          <p style={{
            fontSize: '16px',
            color: '#888',
            marginBottom: '40px',
            lineHeight: '1.8'
          }}>
            {t.description} <strong style={{ color: '#ff5a00' }}>{countryName}</strong>
            <br />
            {t.notify}
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link 
              href={`/${lang}`}
              style={{
                background: '#ff5a00',
                color: 'white',
                padding: '14px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px',
                transition: 'all 0.3s',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#e04e00'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#ff5a00'}
            >
              {t.backHome}
            </Link>
            <Link 
              href={`/${lang}/contact`}
              style={{
                background: 'transparent',
                color: '#ff5a00',
                padding: '14px 40px',
                borderRadius: '50px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '16px',
                border: '2px solid #ff5a00',
                transition: 'all 0.3s',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ff5a00'
                e.currentTarget.style.color = 'white'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#ff5a00'
              }}
            >
              {t.contact}
            </Link>
          </div>
          
          {/* رسالة إضافية */}
          <div style={{
            marginTop: '50px',
            padding: '20px',
            background: '#f9f9f9',
            borderRadius: '12px',
            border: '1px solid #eee'
          }}>
            <p style={{ fontSize: '14px', color: '#888', margin: 0 }}>
              {lang === 'ar' 
                ? '📢 سيتم إضافة محتوى شامل قريباً يشمل: متطلبات الاستيراد، إجراءات الجمارك، أفضل شركات الشحن، ونصائح للنجاح في السوق المحلي.'
                : '📢 Comprehensive content will be added soon including: import requirements, customs procedures, best shipping companies, and tips for success in the local market.'}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}