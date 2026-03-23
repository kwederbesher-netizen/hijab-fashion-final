// app/ar/blogs/page.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

export default function BlogsPageAr() {
  const [cartCount, setCartCount] = useState(0)
  const cartInitialized = useRef(false)

  // Load cart from localStorage - مرة واحدة فقط
  useEffect(() => {
    if (!cartInitialized.current) {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart)
          setCartCount(parsedCart.length)
        } catch (e) {
          console.error('خطأ في تحميل السلة:', e)
        }
      }
      cartInitialized.current = true
    }

    const handleCartUpdate = (event: CustomEvent) => {
      setCartCount(event.detail)
    }
    window.addEventListener('cartUpdated', handleCartUpdate as EventListener)
    
    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate as EventListener)
    }
  }, [])

  return (
    <>
      <Head>
        <title>المدونة | نصائح واتجاهات الأزياء المحتشمة | حجاب فاشون مول</title>
        <meta name="description" content="اكتشف أحدث اتجاهات الأزياء المحتشمة، أدلة الشراء، نصائح التنسيق، ورؤى الصناعة. مصدرك الموثوق لملابس المحجبات التركية بالجملة." />
        <meta name="keywords" content="مدونة أزياء محتشمة, نصائح تنسيق حجاب, اتجاهات موضة تركية, دليل شراء عبايات, أخبار أزياء محتشمة" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hijabfashionmall.com/ar/blogs" />
        <link rel="alternate" href="https://hijabfashionmall.com/en/blogs" hrefLang="en" />
        <link rel="alternate" href="https://hijabfashionmall.com/ar/blogs" hrefLang="ar" />
        
        {/* Open Graph */}
        <meta property="og:title" content="المدونة - حجاب فاشون مول" />
        <meta property="og:description" content="اكتشف أحدث اتجاهات الأزياء المحتشمة وأدلة الشراء ونصائح التنسيق" />
        <meta property="og:url" content="https://hijabfashionmall.com/ar/blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hijabfashionmall.com/images/og-blog.jpg" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "name": "مدونة حجاب فاشون مول",
              "description": "أحدث المقالات والأدلة حول الأزياء المحتشمة",
              "url": "https://hijabfashionmall.com/ar/blogs",
              "blogPost": [
                {
                  "@type": "BlogPosting",
                  "headline": "لماذا نحن رقم 1 في سوق الحجاب التركي بالجملة؟",
                  "url": "https://hijabfashionmall.com/ar/why-were-number-one",
                  "datePublished": "2026-03-13"
                },
                {
                  "@type": "BlogPosting",
                  "headline": "كيفية بدء متجر ملابس أونلاين في 2026",
                  "url": "https://hijabfashionmall.com/ar/online-store-guide",
                  "datePublished": "2026-03-13"
                },
                {
                  "@type": "BlogPosting",
                  "headline": "كيفية افتتاح متجر ملابس واقعي في 2026",
                  "url": "https://hijabfashionmall.com/ar/physical-store-guide",
                  "datePublished": "2026-03-13"
                },
                {
                  "@type": "BlogPosting",
                  "headline": "خدمة العلامة التجارية الخاصة 2026",
                  "url": "https://hijabfashionmall.com/ar/private-label-service",
                  "datePublished": "2026-03-13"
                },
                {
                  "@type": "BlogPosting",
                  "headline": "موضة ملابس المحجبات 2026",
                  "url": "https://hijabfashionmall.com/ar/modest-fashion-trends",
                  "datePublished": "2026-03-14"
                },
                {
                  "@type": "BlogPosting",
                  "headline": "استيراد الحجاب التركي إلى الولايات المتحدة",
                  "url": "https://hijabfashionmall.com/ar/wholesale-usa",
                  "datePublished": "2026-03-14"
                }
              ]
            })
          }}
        />
      </Head>

      {/* Page Header */}
      <section style={{
        background: 'linear-gradient(135deg, #fff0e6 0%, #ffffff 100%)',
        padding: '60px 0 40px',
        textAlign: 'center',
        borderBottom: '1px solid #eee'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ fontSize: '14px', color: '#555', marginBottom: '20px' }}>
            <Link href="/ar" style={{ color: '#ff5a00', textDecoration: 'none' }}>الرئيسية</Link> 
            <span style={{ color: '#555', margin: '0 8px' }}>&gt;</span> 
            <span style={{ color: '#555' }}>المدونة</span>
          </div>
          <h1 style={{ fontSize: '48px', color: '#000', marginBottom: '15px', fontWeight: 800 }}>
            <span style={{ color: '#ff5a00' }}>مدونة</span> حجاب فاشون مول
          </h1>
          <p style={{ fontSize: '18px', color: '#555', maxWidth: '700px', margin: '0 auto 20px' }}>
            أحدث المقالات والأدلة حول الأزياء المحتشمة، نصائح الشراء، واتجاهات الموضة
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            marginTop: '20px',
            color: '#555',
            fontSize: '14px',
            flexWrap: 'wrap'
          }}>
            <span><i className="fas fa-newspaper" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> 7+ مقالات</span>
            <span><i className="fas fa-folder" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> 4 تصنيفات</span>
            <span><i className="fas fa-clock" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> تحديثات أسبوعية</span>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section style={{ padding: '40px 0', background: 'white', borderBottom: '1px solid #eee' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap'
          }}>
            <Link href="/ar/blogs" className="category-chip active" style={{
              padding: '12px 30px',
              borderRadius: '50px',
              background: '#ff5a00',
              border: '1px solid #ff5a00',
              color: 'white',
              textDecoration: 'none',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <i className="fas fa-newspaper"></i> جميع المقالات
            </Link>
            <Link href="/ar/blogs/category/buying-guides" className="category-chip" style={{
              padding: '12px 30px',
              borderRadius: '50px',
              background: 'white',
              border: '1px solid #ddd',
              color: '#555',
              textDecoration: 'none',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <i className="fas fa-shopping-cart"></i> أدلة الشراء
            </Link>
            <Link href="/ar/blogs/category/fashion-trends" className="category-chip" style={{
              padding: '12px 30px',
              borderRadius: '50px',
              background: 'white',
              border: '1px solid #ddd',
              color: '#555',
              textDecoration: 'none',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <i className="fas fa-tshirt"></i> اتجاهات الموضة
            </Link>
            <Link href="/ar/blogs/category/styling-tips" className="category-chip" style={{
              padding: '12px 30px',
              borderRadius: '50px',
              background: 'white',
              border: '1px solid #ddd',
              color: '#555',
              textDecoration: 'none',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <i className="fas fa-magic"></i> نصائح تنسيق
            </Link>
            <Link href="/ar/blogs/category/country-guides" className="category-chip" style={{
              padding: '12px 30px',
              borderRadius: '50px',
              background: 'white',
              border: '1px solid #ddd',
              color: '#555',
              textDecoration: 'none',
              fontWeight: 500,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <i className="fas fa-globe"></i> أدلة الدول
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section style={{ padding: '60px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div className="featured-card" style={{
            display: 'flex',
            background: 'white',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            border: '1px solid #eee'
          }}>
            <div style={{ flex: 1, position: 'relative', minHeight: '400px', background: '#f5f5f5' }}>
              <span style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#ff5a00',
                color: 'white',
                padding: '8px 20px',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: 600,
                zIndex: 1
              }}>🏆 إنجاز</span>
              <Image 
                src="/images/celebration-global-rank.webp" 
                alt="حجاب فاشون مول يحقق المركز الأول عالمياً في بيع الحجاب التركي بالجملة"
                width={600}
                height={400}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                loading="eager"
                priority
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/default.webp'
                }}
              />
            </div>
            <div className="featured-content" style={{ flex: 1, padding: '50px' }}>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '20px', color: '#555', fontSize: '14px', flexWrap: 'wrap' }}>
                <span><i className="far fa-calendar" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> 13 مارس 2026</span>
                <span><i className="far fa-folder" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> قصة نجاح</span>
                <span><i className="far fa-clock" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> 8 دقائق قراءة</span>
              </div>
              <h2 style={{ fontSize: '32px', color: '#000', marginBottom: '20px', fontWeight: 700, lineHeight: '1.3' }}>
                <Link href="/ar/why-were-number-one" style={{ color: 'inherit', textDecoration: 'none' }}>
                  حجاب فاشون مول يحقق المركز الأول عالمياً في بيع الحجاب التركي بالجملة
                </Link>
              </h2>
              <p style={{ color: '#555', marginBottom: '30px', fontSize: '16px', lineHeight: '1.8' }}>
                يسعدنا أن نعلن أن حجاب فاشون مول قد حقق رسمياً المركز الأول عالمياً في نتائج بحث جوجل للكلمات المفتاحية: حجاب تركي بالجملة، ملابس محجبات تركية، أزياء محتشمة بالجملة. هذا الإنجاز يمثل تتويجاً لسنوات من التفاني والعمل الجاد.
              </p>
              <Link href="/ar/why-were-number-one" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                color: '#ff5a00',
                textDecoration: 'none',
                fontWeight: 600
              }}>
                اقرأ المقال كاملاً <i className="fas fa-arrow-left"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ padding: '60px 0', background: '#f5f5f5' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '36px', color: '#000', marginBottom: '15px', fontWeight: 700 }}>
            أحدث <span style={{ color: '#ff5a00' }}>المقالات</span>
          </h2>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '40px', fontSize: '18px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
            استكشف أحدث مقالاتنا وأدلتنا الشاملة
          </p>
          
          <div className="blog-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            marginBottom: '40px'
          }}>
            {/* Private Label Service Article */}
            <article className="blog-card" style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
              border: '1px solid #eee'
            }}>
              <div className="blog-image" style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: '#ff5a00',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 600,
                  zIndex: 1
                }}>خدمات</span>
                <Image 
                  src="/images/private-label-intro.webp" 
                  alt="خدمة العلامة التجارية الخاصة للحجاب التركي"
                  width={400}
                  height={250}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default.webp'
                  }}
                />
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', color: '#555', fontSize: '13px', flexWrap: 'wrap' }}>
                  <span><i className="far fa-calendar" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> 13 مارس 2026</span>
                  <span><i className="far fa-clock" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> 10 دقائق قراءة</span>
                </div>
                <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '15px', fontWeight: 700, lineHeight: '1.4' }}>
                  <Link href="/ar/private-label-service" style={{ color: 'inherit', textDecoration: 'none' }}>
                    خدمة العلامة التجارية الخاصة 2026: ابنِ علامتك التجارية في عالم الحجاب
                  </Link>
                </h3>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
                  أنشئ علامتك التجارية الخاصة في عالم الحجاب مع خدمتنا الشاملة للعلامة التجارية الخاصة. ملصقات مخصصة، بطاقات تعليق، وتغليف فاخر لهوية علامتك التجارية المميزة.
                </p>
                <Link href="/ar/private-label-service" style={{
                  color: '#ff5a00',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  اقرأ المزيد <i className="fas fa-arrow-left"></i>
                </Link>
              </div>
            </article>

            {/* Online Store Guide Article */}
            <article className="blog-card" style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
              border: '1px solid #eee'
            }}>
              <div className="blog-image" style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: '#ff5a00',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 600,
                  zIndex: 1
                }}>دليل</span>
                <Image 
                  src="/images/online-clothing-store-guide.webp" 
                  alt="كيفية بدء متجر ملابس أونلاين في 2026"
                  width={400}
                  height={250}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default.webp'
                  }}
                />
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', color: '#555', fontSize: '13px', flexWrap: 'wrap' }}>
                  <span><i className="far fa-calendar" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> 13 مارس 2026</span>
                  <span><i className="far fa-clock" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> 15 دقيقة قراءة</span>
                </div>
                <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '15px', fontWeight: 700, lineHeight: '1.4' }}>
                  <Link href="/ar/online-store-guide" style={{ color: 'inherit', textDecoration: 'none' }}>
                    كيفية بدء متجر ملابس أونلاين في 2026: الدليل الشامل
                  </Link>
                </h3>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
                  دليل شامل خطوة بخطوة لإطلاق متجر ملابس إلكتروني ناجح في 2026، يشمل اختيار النيش، بناء العلامة التجارية، منصات التجارة الإلكترونية، واستراتيجيات التسويق.
                </p>
                <Link href="/ar/online-store-guide" style={{
                  color: '#ff5a00',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  اقرأ المزيد <i className="fas fa-arrow-left"></i>
                </Link>
              </div>
            </article>

            {/* Physical Store Guide Article */}
            <article className="blog-card" style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
              border: '1px solid #eee'
            }}>
              <div className="blog-image" style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: '#ff5a00',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 600,
                  zIndex: 1
                }}>دليل</span>
                <Image 
                  src="/images/physical-clothing-store-guide.webp" 
                  alt="كيفية افتتاح متجر ملابس واقعي في 2026"
                  width={400}
                  height={250}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default.webp'
                  }}
                />
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', color: '#555', fontSize: '13px', flexWrap: 'wrap' }}>
                  <span><i className="far fa-calendar" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> 13 مارس 2026</span>
                  <span><i className="far fa-clock" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> 16 دقيقة قراءة</span>
                </div>
                <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '15px', fontWeight: 700, lineHeight: '1.4' }}>
                  <Link href="/ar/physical-store-guide" style={{ color: 'inherit', textDecoration: 'none' }}>
                    كيفية افتتاح متجر ملابس واقعي في 2026: الدليل الشامل
                  </Link>
                </h3>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
                  دليل شامل لافتتاح متجر فيزيائي ناجح، يشمل اختيار الموقع، تصميم المتجر، توفير المنتجات، واستراتيجيات تسويق التجزئة.
                </p>
                <Link href="/ar/physical-store-guide" style={{
                  color: '#ff5a00',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  اقرأ المزيد <i className="fas fa-arrow-left"></i>
                </Link>
              </div>
            </article>

            {/* Rise of Modest Fashion Article */}
            <article className="blog-card" style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
              border: '1px solid #eee'
            }}>
              <div className="blog-image" style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: '#ff5a00',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 600,
                  zIndex: 1
                }}>اتجاهات</span>
                <Image 
                  src="/images/rise-modest-fashion.webp" 
                  alt="موضة ملابس المحجبات 2026"
                  width={400}
                  height={250}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default.webp'
                  }}
                />
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', color: '#555', fontSize: '13px', flexWrap: 'wrap' }}>
                  <span><i className="far fa-calendar" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> 14 مارس 2026</span>
                  <span><i className="far fa-clock" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> 14 دقيقة قراءة</span>
                </div>
                <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '15px', fontWeight: 700, lineHeight: '1.4' }}>
                  <Link href="/ar/modest-fashion-trends" style={{ color: 'inherit', textDecoration: 'none' }}>
                    موضة ملابس المحجبات 2026: اتجاهات السوق العالمية
                  </Link>
                </h3>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
                  اكتشف أحدث صيحات موضة المحجبات لعام 2026. تحليل شامل لسوق الأزياء المحتشمة بقيمة 400 مليار دولار، اتجاهات المستهلك، والاستدامة في الأزياء.
                </p>
                <Link href="/ar/modest-fashion-trends" style={{
                  color: '#ff5a00',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  اقرأ المزيد <i className="fas fa-arrow-left"></i>
                </Link>
              </div>
            </article>

            {/* USA Guide */}
            <article className="blog-card" style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
              border: '1px solid #eee'
            }}>
              <div className="blog-image" style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: '#ff5a00',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 600,
                  zIndex: 1
                }}>دليل دولة</span>
                <Image 
                  src="/images/usa-wholesale-guide.webp" 
                  alt="استيراد الحجاب التركي إلى الولايات المتحدة"
                  width={400}
                  height={250}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default.webp'
                  }}
                />
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', color: '#555', fontSize: '13px', flexWrap: 'wrap' }}>
                  <span><i className="far fa-calendar" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> 14 مارس 2026</span>
                  <span><i className="far fa-clock" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> 12 دقيقة قراءة</span>
                </div>
                <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '15px', fontWeight: 700, lineHeight: '1.4' }}>
                  <Link href="/ar/wholesale-usa" style={{ color: 'inherit', textDecoration: 'none' }}>
                    استيراد الحجاب التركي إلى الولايات المتحدة: دليل 2026
                  </Link>
                </h3>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
                  دليل شامل لاستيراد الحجاب التركي إلى أمريكا. شحن يومي، 180$ للصندوق (30 كغم) عبر UPS/FedEx/DHL، توصيل 5-7 أيام عمل. تعرف على الجمارك والعلامة التجارية الخاصة.
                </p>
                <Link href="/ar/wholesale-usa" style={{
                  color: '#ff5a00',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  اقرأ المزيد <i className="fas fa-arrow-left"></i>
                </Link>
              </div>
            </article>

            {/* Canada Guide */}
            <article className="blog-card" style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
              border: '1px solid #eee'
            }}>
              <div className="blog-image" style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: '#ff5a00',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 600,
                  zIndex: 1
                }}>دليل دولة</span>
                <Image 
                  src="/images/canada-wholesale-guide.webp" 
                  alt="استيراد الحجاب التركي إلى كندا"
                  width={400}
                  height={250}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default.webp'
                  }}
                />
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', color: '#555', fontSize: '13px', flexWrap: 'wrap' }}>
                  <span><i className="far fa-calendar" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> 14 مارس 2026</span>
                  <span><i className="far fa-clock" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> 12 دقيقة قراءة</span>
                </div>
                <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '15px', fontWeight: 700, lineHeight: '1.4' }}>
                  <Link href="/ar/wholesale-canada" style={{ color: 'inherit', textDecoration: 'none' }}>
                    استيراد الحجاب التركي إلى كندا: دليل 2026
                  </Link>
                </h3>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
                  دليل شامل لتجار التجزئة الكنديين لاستيراد الحجاب التركي. تعرف على تكاليف الشحن، إجراءات الجمارك الكندية، وخدمات العلامة التجارية الخاصة لبناء علامتك التجارية.
                </p>
                <Link href="/ar/wholesale-canada" style={{
                  color: '#ff5a00',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  اقرأ المزيد <i className="fas fa-arrow-left"></i>
                </Link>
              </div>
            </article>

            {/* UK Guide */}
            <article className="blog-card" style={{
              background: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'transform 0.3s',
              border: '1px solid #eee'
            }}>
              <div className="blog-image" style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <span style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: '#ff5a00',
                  color: 'white',
                  padding: '5px 15px',
                  borderRadius: '50px',
                  fontSize: '12px',
                  fontWeight: 600,
                  zIndex: 1
                }}>دليل دولة</span>
                <Image 
                  src="/images/uk-wholesale-guide.webp" 
                  alt="استيراد الحجاب التركي إلى المملكة المتحدة"
                  width={400}
                  height={250}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default.webp'
                  }}
                />
              </div>
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '15px', color: '#555', fontSize: '13px', flexWrap: 'wrap' }}>
                  <span><i className="far fa-calendar" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> 14 مارس 2026</span>
                  <span><i className="far fa-clock" style={{ color: '#ff5a00', marginLeft: '5px' }}></i> 12 دقيقة قراءة</span>
                </div>
                <h3 style={{ fontSize: '18px', color: '#000', marginBottom: '15px', fontWeight: 700, lineHeight: '1.4' }}>
                  <Link href="/ar/wholesale-uk" style={{ color: 'inherit', textDecoration: 'none' }}>
                    استيراد الحجاب التركي إلى المملكة المتحدة: دليل 2026
                  </Link>
                </h3>
                <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
                  دليل شامل للتجار البريطانيين لاستيراد الحجاب التركي. تكاليف الشحن (€165/30kg)، وقت التسليم (1-3 أيام)، إجراءات الجمارك بعد البريكست، وخدمات العلامة التجارية الخاصة.
                </p>
                <Link href="/ar/wholesale-uk" style={{
                  color: '#ff5a00',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '14px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  اقرأ المزيد <i className="fas fa-arrow-left"></i>
                </Link>
              </div>
            </article>
          </div>

          {/* More Articles Coming Soon */}
          <div style={{
            textAlign: 'center',
            marginTop: '40px',
            padding: '30px',
            background: '#fff0e6',
            borderRadius: '15px'
          }}>
            <h3 style={{ fontSize: '24px', color: '#000', marginBottom: '10px' }}>المزيد من المقالات قريباً!</h3>
            <p style={{ color: '#555' }}>نضيف محتوى جديد باستمرار. تابعونا لآخر اتجاهات الأزياء المحتشمة وأدلة الشراء.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{
        padding: '80px 0',
        background: 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '15px' }}>
            اشترك في <span style={{ color: '#ff5a00' }}>نشرتنا البريدية</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '30px', fontSize: '18px' }}>
            احصل على آخر اتجاهات الأزياء المحتشمة في بريدك الإلكتروني
          </p>
          <form style={{
            display: 'flex',
            maxWidth: '500px',
            margin: '0 auto',
            gap: '10px',
            flexWrap: 'wrap'
          }} onSubmit={(e) => { e.preventDefault(); alert('شكراً لاشتراكك!'); }}>
            <input 
              type="email" 
              placeholder="بريدك الإلكتروني" 
              required
              style={{
                flex: 1,
                padding: '15px 20px',
                border: 'none',
                borderRadius: '50px',
                fontFamily: 'Tajawal, sans-serif',
                fontSize: '16px',
                outline: 'none',
                minWidth: '250px'
              }}
            />
            <button type="submit" style={{
              background: '#ff5a00',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '50px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s',
              whiteSpace: 'nowrap',
              minWidth: '120px'
            }}>
              اشتراك
            </button>
          </form>
        </div>
      </section>

      <style>{`
        @media (max-width: 992px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
          
          .featured-card {
            flex-direction: column !important;
          }
          
          .featured-content {
            padding: 30px !important;
          }
        }
        
        .category-chip:hover {
          background: #ff5a00 !important;
          color: white !important;
          border-color: #ff5a00 !important;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255,90,0,0.2);
        }
        
        .category-chip.active {
          background: #ff5a00 !important;
          color: white !important;
          border-color: #ff5a00 !important;
        }
        
        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(255,90,0,0.1);
        }
        
        .blog-card:hover .blog-image img {
          transform: scale(1.05);
        }
        
        .blog-image {
          overflow: hidden;
        }
        
        .blog-image img {
          transition: transform 0.5s;
        }
      `}</style>
    </>
  )
}