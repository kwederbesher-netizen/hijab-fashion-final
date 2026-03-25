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
      title: 'جاري التجهيز',
      subtitle: 'صفحة خاصة بدولة',
      description: 'نعمل على توفير معلومات شاملة عن استيراد ملابس المحجبات التركية إلى',
      backHome: 'الرئيسية',
      contact: 'اتصل بنا',
      notify: 'سيتم إضافة محتوى خاص بهذه الدولة قريباً',
      ready: 'جاهزون لخدمتك',
      shipping: 'شحن سريع',
      quality: 'جودة عالية',
      support: 'دعم 24/7'
    },
    en: {
      title: 'Coming Soon',
      subtitle: 'Country-Specific Page',
      description: 'We are working on providing comprehensive information about importing Turkish hijab wear to',
      backHome: 'Home',
      contact: 'Contact Us',
      notify: 'Country-specific content will be added soon',
      ready: 'Ready to Serve You',
      shipping: 'Fast Shipping',
      quality: 'Premium Quality',
      support: '24/7 Support'
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
      'usa': '🇺🇸', 'canada': '🇨🇦', 'uk': '🇬🇧', 'ireland': '🇮🇪',
      'germany': '🇩🇪', 'france': '🇫🇷', 'italy': '🇮🇹', 'spain': '🇪🇸',
      'netherlands': '🇳🇱', 'belgium': '🇧🇪', 'sweden': '🇸🇪', 'denmark': '🇩🇰',
      'norway': '🇳🇴', 'finland': '🇫🇮', 'switzerland': '🇨🇭', 'austria': '🇦🇹',
      'saudiarabia': '🇸🇦', 'uae': '🇦🇪', 'kuwait': '🇰🇼', 'qatar': '🇶🇦',
      'bahrain': '🇧🇭', 'oman': '🇴🇲', 'lebanon': '🇱🇧', 'syria': '🇸🇾',
      'iraq': '🇮🇶', 'jordan': '🇯🇴', 'egypt': '🇪🇬', 'algeria': '🇩🇿',
      'libya': '🇱🇾', 'morocco': '🇲🇦', 'tunisia': '🇹🇳', 'australia': '🇦🇺',
      'newzealand': '🇳🇿', 'brazil': '🇧🇷', 'argentina': '🇦🇷', 'mexico': '🇲🇽', 'chile': '🇨🇱'
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

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: ${lang === 'ar' ? "'Tajawal', sans-serif" : "'Poppins', sans-serif"};
          color: #333;
          line-height: 1.6;
          background: #fff;
        }

        :root {
          --primary: #ff5a00;
          --primary-dark: #e04e00;
          --black: #000000;
          --dark-gray: #222;
          --medium-gray: #555;
          --light-gray: #f5f5f5;
          --white: #fff;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .coming-soon {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #fff5f0 0%, #ffffff 100%);
          position: relative;
          overflow: hidden;
        }

        .coming-soon::before {
          content: '✦';
          position: absolute;
          top: 10%;
          left: 5%;
          font-size: 120px;
          color: rgba(255, 90, 0, 0.03);
          font-family: monospace;
          pointer-events: none;
        }

        .coming-soon::after {
          content: '✦';
          position: absolute;
          bottom: 10%;
          right: 5%;
          font-size: 180px;
          color: rgba(255, 90, 0, 0.03);
          font-family: monospace;
          pointer-events: none;
        }

        .coming-content {
          text-align: center;
          max-width: 800px;
          padding: 40px;
          z-index: 2;
          animation: fadeInUp 0.8s ease;
        }

        .logo {
          margin-bottom: 30px;
        }

        .logo h1 {
          font-size: 32px;
          color: var(--black);
          font-weight: 700;
        }

        .logo span {
          color: var(--primary);
          font-size: 16px;
          font-weight: 500;
        }

        .country-icon {
          width: 140px;
          height: 140px;
          background: rgba(255, 90, 0, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px;
          font-size: 70px;
          animation: pulse 2s infinite;
        }

        h2 {
          font-size: 48px;
          color: var(--primary);
          margin-bottom: 15px;
          font-weight: 800;
        }

        .country-name {
          font-size: 32px;
          color: var(--black);
          margin-bottom: 20px;
          font-weight: 700;
        }

        .coming-description {
          font-size: 18px;
          color: var(--medium-gray);
          margin-bottom: 30px;
          line-height: 1.8;
        }

        .notify-text {
          font-size: 16px;
          color: var(--medium-gray);
          margin-bottom: 40px;
          padding: 20px;
          background: var(--light-gray);
          border-radius: 15px;
          display: inline-block;
        }

        .features {
          display: flex;
          justify-content: center;
          gap: 30px;
          flex-wrap: wrap;
          margin: 40px 0;
        }

        .feature-item {
          text-align: center;
          padding: 20px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          min-width: 140px;
          transition: transform 0.3s;
        }

        .feature-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(255,90,0,0.1);
        }

        .feature-icon {
          font-size: 40px;
          color: var(--primary);
          margin-bottom: 12px;
        }

        .feature-item p {
          font-size: 14px;
          color: var(--medium-gray);
          font-weight: 500;
        }

        .button-group {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
          margin: 30px 0;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--primary);
          color: var(--white);
          padding: 14px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(255, 90, 0, 0.2);
        }

        .btn-primary:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 90, 0, 0.3);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          color: var(--primary);
          border: 2px solid var(--primary);
          padding: 12px 38px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s;
        }

        .btn-outline:hover {
          background: var(--primary);
          color: var(--white);
          transform: translateY(-2px);
        }

        .info-note {
          margin-top: 50px;
          padding: 20px 30px;
          background: var(--light-gray);
          border-radius: 15px;
          border: 1px solid rgba(255,90,0,0.1);
        }

        .info-note p {
          font-size: 14px;
          color: var(--medium-gray);
          margin: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 32px;
          }
          
          .country-name {
            font-size: 24px;
          }
          
          .coming-description {
            font-size: 16px;
          }
          
          .features {
            gap: 15px;
          }
          
          .feature-item {
            min-width: 110px;
            padding: 15px;
          }
          
          .feature-icon {
            font-size: 30px;
          }
          
          .button-group {
            flex-direction: column;
            align-items: center;
          }
          
          .btn-primary, .btn-outline {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }
        }
      `}</style>

      <div className="coming-soon">
        <div className="container">
          <div className="coming-content">
            <div className="logo">
              <h1>Hijab Fashion Mall</h1>
              <span>{lang === 'ar' ? 'جملة' : 'Wholesale'}</span>
            </div>
            
            <div className="country-icon">
              {getCountryFlag(country)}
            </div>
            
            <h2>{t.title}</h2>
            <div className="country-name">{countryName}</div>
            <p className="coming-description">
              {t.description} <strong style={{ color: 'var(--primary)' }}>{countryName}</strong>
            </p>
            
            <div className="notify-text">
              <i className="fas fa-info-circle" style={{ marginRight: lang === 'ar' ? 0 : '8px', marginLeft: lang === 'ar' ? '8px' : 0 }}></i>
              {t.notify}
            </div>
            
            <div className="features">
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-truck"></i></div>
                <p>{t.shipping}</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-check-circle"></i></div>
                <p>{t.quality}</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fas fa-headset"></i></div>
                <p>{t.support}</p>
              </div>
            </div>
            
            <div className="button-group">
              <Link href={`/${lang}`} className="btn-primary">
                <i className="fas fa-home"></i> {t.backHome}
              </Link>
              <Link href={`/${lang}/contact`} className="btn-outline">
                <i className="fab fa-whatsapp"></i> {t.contact}
              </Link>
            </div>
            
            <div className="info-note">
              <p>
                <i className="fas fa-chart-line" style={{ marginRight: lang === 'ar' ? 0 : '8px', marginLeft: lang === 'ar' ? '8px' : 0, color: 'var(--primary)' }}></i>
                {lang === 'ar' 
                  ? '📢 سيتم إضافة محتوى شامل قريباً يشمل: متطلبات الاستيراد، إجراءات الجمارك، أفضل شركات الشحن، ونصائح للنجاح في السوق المحلي.'
                  : '📢 Comprehensive content will be added soon including: import requirements, customs procedures, best shipping companies, and tips for success in the local market.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}