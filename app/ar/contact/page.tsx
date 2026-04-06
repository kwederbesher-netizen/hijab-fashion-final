// app/ar/contact/page.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { 
  FaPhoneAlt, 
  FaClock, 
  FaWhatsapp, 
  FaQuestionCircle, 
  FaTruck, 
  FaCreditCard, 
  FaBox, 
  FaEnvelope,
  FaUser,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTimesCircle
} from 'react-icons/fa'

export default function ContactPageAr() {
  const [mounted, setMounted] = useState(false)
  const [formStatus, setFormStatus] = useState<{type: 'success' | 'error' | null, message: string}>({ type: null, message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      country: formData.get('country'),
      phone: formData.get('phone'),
      email: formData.get('email') || '',
      message: formData.get('message'),
    }

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await response.json()

      if (result.success) {
        setFormStatus({ 
          type: 'success', 
          message: '✅ شكراً لك! تم إرسال رسالتك بنجاح. سوف نتواصل معك قريباً.' 
        })
        if (formRef.current) formRef.current.reset()
        setTimeout(() => setFormStatus({ type: null, message: '' }), 5000)
      } else {
        throw new Error(result.message || 'حدث خطأ')
      }
    } catch (error) {
      console.error('Error sending email:', error)
      setFormStatus({ 
        type: 'error', 
        message: '❌ عذراً، حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى أو الاتصال بنا عبر واتساب.' 
      })
      setTimeout(() => setFormStatus({ type: null, message: '' }), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      <Head>
        <title>اتصل بنا - Hijab Fashion Mall | جملة الأزياء المحتشمة التركية</title>
        <meta name="description" content="اتصل بـ Hijab Fashion Mall للاستفسارات بالجملة والطلبات الكبيرة والشراكات في مجال الأزياء المحتشمة." />
        <meta name="keywords" content="اتصل بنا, هجاب فاشن مول, جملة حجاب تركي, مورد أزياء محتشمة" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/ar/contact" />
        <link rel="alternate" href="https://hijabfashionmall.com/ar/contact" hrefLang="ar" />
        <link rel="alternate" href="https://hijabfashionmall.com/en/contact" hrefLang="en" />
        <link rel="alternate" href="https://hijabfashionmall.com/fr/contact" hrefLang="fr" />
        <link rel="alternate" href="https://hijabfashionmall.com/de/contact" hrefLang="de" />
        <link rel="alternate" href="https://hijabfashionmall.com/it/contact" hrefLang="it" />
        <link rel="alternate" href="https://hijabfashionmall.com/es/contact" hrefLang="es" />
        <link rel="alternate" hrefLang="x-default" href="https://hijabfashionmall.com/en/contact" />
        <meta property="og:title" content="اتصل بنا - Hijab Fashion Mall" />
        <meta property="og:description" content="اتصل بنا للاستفسارات بالجملة والطلبات الكبيرة والشراكات في الأزياء المحتشمة." />
        <meta property="og:image" content="https://hijabfashionmall.com/images/contact-og.webp" />
        <meta property="og:url" content="https://hijabfashionmall.com/ar/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_AR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="اتصل بنا - Hijab Fashion Mall" />
        <meta name="twitter:description" content="اتصل بنا للاستفسارات بالجملة والطلبات الكبيرة والشراكات." />
      </Head>

      <style>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary: #f87833;
            --primary-dark: #f87833;
            --primary-light: #ff7b33;
            --primary-soft: #fff0e6;
            --black: #000000;
            --dark-gray: #1a1a1a;
            --medium-gray: #555555;
            --light-gray: #f8f9fa;
            --border-gray: #e9ecef;
            --white: #ffffff;
            --whatsapp: #25d366;
            --whatsapp-dark: #128C7E;
            --success: #28a745;
            --error: #dc3545;
            --shadow-sm: 0 2px 8px rgba(0,0,0,0.05);
            --shadow-md: 0 5px 20px rgba(0,0,0,0.08);
            --shadow-lg: 0 20px 40px rgba(0,0,0,0.1);
            --radius-sm: 8px;
            --radius-md: 12px;
            --radius-lg: 20px;
        }

        body {
            font-family: 'Tajawal', 'Poppins', system-ui, sans-serif;
            color: var(--dark-gray);
            line-height: 1.6;
            background: var(--white);
        }

        .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 24px;
        }

        /* RTL Support */
        .rtl {
            direction: rtl;
            text-align: right;
        }

        /* Breadcrumb */
        .breadcrumb-section {
            padding: 20px 0;
            background: var(--light-gray);
            border-bottom: 1px solid var(--border-gray);
        }

        .breadcrumb-list {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .rtl .breadcrumb-list {
            flex-direction: row-reverse;
        }

        .breadcrumb-list li a {
            color: var(--medium-gray);
            text-decoration: none;
            transition: color 0.3s;
        }

        .breadcrumb-list li a:hover {
            color: var(--primary);
        }

        .breadcrumb-list li:last-child {
            color: var(--black);
            font-weight: 600;
        }

        /* Page Header */
        .page-header {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
            padding: 60px 0;
            text-align: center;
            color: white;
        }

        .page-header h1 {
            font-size: 48px;
            font-weight: 800;
            margin-bottom: 16px;
        }

        .page-header p {
            font-size: 18px;
            max-width: 600px;
            margin: 0 auto;
            opacity: 0.9;
        }

        /* Form Status */
        .form-status {
            max-width: 1280px;
            margin: 20px auto;
            padding: 16px 24px;
            border-radius: var(--radius-md);
            text-align: center;
            font-weight: 500;
        }

        .form-status.success {
            background: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }

        .form-status.error {
            background: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }

        /* Contact Grid */
        .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            align-items: start;
        }

        /* Info Cards */
        .info-card {
            background: var(--white);
            border-radius: var(--radius-lg);
            padding: 30px 20px;
            text-align: center;
            box-shadow: var(--shadow-md);
            transition: all 0.3s;
            border: 1px solid var(--border-gray);
        }

        .info-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
            border-color: var(--primary);
        }

        .info-icon {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background: var(--primary-soft);
            color: var(--primary);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 28px;
        }

        .info-card h3 {
            font-size: 18px;
            font-weight: 700;
            margin-bottom: 10px;
            color: var(--black);
        }

        .info-card p {
            color: var(--medium-gray);
            margin-bottom: 8px;
        }

        .info-link {
            color: var(--primary);
            text-decoration: none;
            font-weight: 600;
            display: inline-block;
            margin-top: 12px;
            transition: all 0.3s;
        }

        .rtl .info-link:hover {
            transform: translateX(-5px);
        }

        .info-link:hover {
            transform: translateX(5px);
        }

        /* WhatsApp Card */
        .whatsapp-card {
            background: linear-gradient(135deg, var(--whatsapp) 0%, var(--whatsapp-dark) 100%);
            color: white;
            padding: 40px;
            border-radius: var(--radius-lg);
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 30px;
            margin-top: 30px;
        }

        .rtl .whatsapp-card {
            flex-direction: row-reverse;
        }

        .whatsapp-content {
            flex: 1;
            min-width: 250px;
        }

        .whatsapp-content h3 {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 10px;
            color: white;
        }

        .whatsapp-content p {
            opacity: 0.9;
            margin-bottom: 20px;
        }

        .whatsapp-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: white;
            color: var(--whatsapp);
            padding: 14px 35px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
        }

        .whatsapp-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .whatsapp-icon-bg {
            font-size: 80px;
            opacity: 0.2;
        }

        /* Contact Form */
        .contact-form {
            background: var(--white);
            border-radius: var(--radius-lg);
            padding: 40px;
            box-shadow: var(--shadow-lg);
            border: 1px solid var(--border-gray);
        }

        .contact-form h2 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 30px;
            color: var(--black);
        }

        .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
        }

        .form-input,
        .form-textarea {
            width: 100%;
            padding: 15px;
            border: 2px solid var(--border-gray);
            border-radius: var(--radius-md);
            background: var(--light-gray);
            transition: all 0.3s;
            font-family: inherit;
            font-size: 14px;
        }

        .form-input:focus,
        .form-textarea:focus {
            outline: none;
            border-color: var(--primary);
            background: var(--white);
        }

        .form-textarea {
            resize: vertical;
            margin-bottom: 20px;
        }

        .submit-btn {
            background: var(--primary);
            color: white;
            border: none;
            padding: 16px;
            border-radius: 50px;
            font-weight: 600;
            cursor: pointer;
            width: 100%;
            transition: all 0.3s;
            font-size: 16px;
        }

        .submit-btn:hover:not(:disabled) {
            background: var(--primary-dark);
            transform: translateY(-2px);
        }

        .submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }

        /* FAQ Section */
        .faq-section {
            padding: 60px 0;
            background: var(--light-gray);
        }

        .faq-title {
            text-align: center;
            font-size: 36px;
            font-weight: 800;
            margin-bottom: 50px;
            color: var(--black);
        }

        .faq-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
        }

        .faq-card {
            background: var(--white);
            border-radius: var(--radius-md);
            padding: 30px;
            box-shadow: var(--shadow-md);
            transition: all 0.3s;
            border: 1px solid var(--border-gray);
        }

        .faq-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
        }

        .faq-card h3 {
            font-size: 18px;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .rtl .faq-card h3 {
            flex-direction: row-reverse;
        }

        .faq-card p {
            color: var(--medium-gray);
            line-height: 1.7;
        }

        /* Responsive */
        @media (max-width: 992px) {
            .contact-grid {
                grid-template-columns: 1fr;
                gap: 40px;
            }
            
            .faq-grid {
                grid-template-columns: 1fr;
                gap: 20px;
            }
        }

        @media (max-width: 768px) {
            .container {
                padding: 0 20px;
            }
            
            .page-header h1 {
                font-size: 36px;
            }
            
            .page-header p {
                font-size: 16px;
            }
            
            .form-grid {
                grid-template-columns: 1fr;
                gap: 15px;
            }
            
            .contact-form {
                padding: 30px 20px;
            }
            
            .contact-form h2 {
                font-size: 24px;
            }
            
            .faq-title {
                font-size: 28px;
            }
            
            .whatsapp-card {
                text-align: center;
                justify-content: center;
            }
            
            .rtl .whatsapp-card {
                flex-direction: column;
            }
            
            .whatsapp-icon-bg {
                display: none;
            }
        }

        @media (max-width: 480px) {
            .info-card {
                padding: 20px 15px;
            }
            
            .info-icon {
                width: 55px;
                height: 55px;
                font-size: 22px;
            }
            
            .whatsapp-btn {
                width: 100%;
                justify-content: center;
            }
        }
      `}</style>

      <div className="rtl">
        {/* Breadcrumb */}
        <div className="breadcrumb-section">
          <div className="container">
            <ul className="breadcrumb-list">
              <li><Link href="/ar">🏠 الرئيسية</Link></li>
              <li>/</li>
              <li>📞 اتصل بنا</li>
            </ul>
          </div>
        </div>

        {/* Page Header */}
        <section className="page-header">
          <div className="container">
            <h1>اتصل بنا</h1>
            <p>نحن هنا للإجابة على أسئلتك ومساعدتك في تنمية أعمالك.</p>
          </div>
        </section>

        {/* Form Status */}
        {formStatus.type && (
          <div className={`form-status ${formStatus.type}`}>
            {formStatus.message}
          </div>
        )}

        {/* Contact Section */}
        <section style={{ padding: '80px 0' }}>
          <div className="container">
            <div className="contact-grid">
              
              {/* Left Side - Contact Info */}
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px', marginBottom: '30px' }}>
                  
                  {/* Phone Card */}
                  <div className="info-card">
                    <div className="info-icon">
                      <FaPhoneAlt size={28} />
                    </div>
                    <h3>اتصل بنا</h3>
                    <p>+90 551 952 24 48</p>
                    <a href="tel:+905519522448" className="info-link">
                      اتصل الآن ←
                    </a>
                  </div>

                  {/* Hours Card */}
                  <div className="info-card">
                    <div className="info-icon">
                      <FaClock size={28} />
                    </div>
                    <h3>ساعات العمل</h3>
                    <p>الإثنين-الجمعة: 9ص-8م</p>
                    <p>السبت: 10ص-6م</p>
                    <p>الأحد: مغلق</p>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="whatsapp-card">
                  <div className="whatsapp-content">
                    <h3>تحدث عبر واتساب</h3>
                    <p>احصل على إجابات فورية. فريقنا متاح 24/7.</p>
                    <a 
                      href="https://wa.me/905519522448" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="whatsapp-btn"
                    >
                      <FaWhatsapp size={18} /> ابدأ المحادثة
                    </a>
                  </div>
                  <div className="whatsapp-icon-bg">
                    <FaWhatsapp size={80} />
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Form */}
              <div className="contact-form">
                <h2>أرسل لنا رسالة</h2>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="form-grid">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="الاسم الكامل *" 
                      required 
                      className="form-input"
                    />
                    <input 
                      type="text" 
                      name="country" 
                      placeholder="الدولة *" 
                      required 
                      className="form-input"
                    />
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="رقم الهاتف *" 
                      required 
                      className="form-input"
                    />
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="البريد الإلكتروني (اختياري)" 
                      className="form-input"
                    />
                  </div>
                  <textarea 
                    name="message" 
                    rows={6} 
                    placeholder="رسالتك *" 
                    required 
                    className="form-textarea"
                  ></textarea>
                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="submit-btn"
                  >
                    {isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <div className="container">
            <h2 className="faq-title">الأسئلة الشائعة</h2>
            <div className="faq-grid">
              <div className="faq-card">
                <h3><FaQuestionCircle size={18} /> كيف يمكنني تقديم طلب؟</h3>
                <p>تصفح كتالوجنا، اختر المنتجات، أضف إلى سلة الاستفسار، وأرسل عبر واتساب. سيقوم فريقنا بالتأكيد خلال 24 ساعة.</p>
              </div>
              <div className="faq-card">
                <h3><FaTruck size={18} /> هل تشحن إلى جميع أنحاء العالم؟</h3>
                <p>نعم! نشحن إلى أكثر من 50 دولة عبر شركات شحن موثوقة. توصيل سريع من الباب إلى الباب مع تتبع.</p>
              </div>
              <div className="faq-card">
                <h3><FaCreditCard size={18} /> طرق الدفع؟</h3>
                <p>تحويل بنكي، ويسترن يونيون، وبطاقات الائتمان الرئيسية. معالجة آمنة لراحتك.</p>
              </div>
              <div className="faq-card">
                <h3><FaBox size={18} /> الحد الأدنى للطلب؟</h3>
                <p>لا يوجد حد أدنى للكمية! اطلب ما تحتاجه - مثالي للمتاجر الصغيرة والكبيرة.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "اتصل بـ Hijab Fashion Mall",
            "description": "اتصل بنا للاستفسارات بالجملة والشراكات",
            "url": "https://hijabfashionmall.com/ar/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Hijab Fashion Mall",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+905519522448",
                "contactType": "خدمة العملاء",
                "availableLanguage": ["العربية", "الإنجليزية", "التركية"]
              }
            }
          })
        }}
      />
    </>
  )
}