// app/ar/terms-conditions/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function TermsConditionsPageAr() {
  return (
    <>
      <Head>
        <title>الشروط والأحكام - Hijab Fashion Mall | جملة الأزياء المحتشمة التركية</title>
        <meta name="description" content="اقرأ الشروط والأحكام الخاصة بالجملة لطلب الأزياء المحتشمة التركية. تعرف على التسعير والشحن وطرق الدفع وسياسات الجملة الدولية." />
        <meta name="keywords" content="الشروط والأحكام, شروط الجملة, شروط جملة الحجاب, شروط الأزياء المحتشمة, جملة تركيا" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/ar/terms-conditions" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/terms-conditions" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/terms-conditions" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/terms-conditions" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/terms-conditions" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/terms-conditions" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/terms-conditions" />
        <meta property="og:title" content="الشروط والأحكام - Hijab Fashion Mall" />
        <meta property="og:description" content="اقرأ الشروط والأحكام الخاصة بالجملة لطلب الأزياء المحتشمة التركية. تعرف على التسعير والشحن وطرق الدفع." />
        <meta property="og:url" content="https://hijabfashionmall.com/ar/terms-conditions" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hijabfashionmall.com/images/og-terms.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="الشروط والأحكام - Hijab Fashion Mall" />
        <meta name="twitter:description" content="اقرأ الشروط والأحكام الخاصة بالجملة لطلب الأزياء المحتشمة التركية." />
      </Head>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Poppins', 'Cairo', sans-serif;
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

        .breadcrumb-bar {
          padding: 20px 0;
          background: #f5f5f5;
          border-bottom: 1px solid #eee;
        }

        .breadcrumb-list {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .breadcrumb-item a {
          color: #555;
          text-decoration: none;
          font-size: 14px;
        }

        .breadcrumb-item a:hover {
          color: var(--primary);
        }

        .breadcrumb-item.active {
          font-size: 14px;
          color: #000;
          font-weight: 600;
        }

        .page-header {
          background: linear-gradient(135deg, var(--light-gray) 0%, #ffffff 100%);
          padding: 60px 0;
          text-align: center;
          border-bottom: 1px solid #eee;
        }

        .page-header h1 {
          font-size: 48px;
          color: var(--black);
          margin-bottom: 20px;
          font-weight: 700;
        }

        .page-header p {
          font-size: 18px;
          color: var(--medium-gray);
          max-width: 800px;
          margin: 0 auto;
        }

        .terms-content {
          padding: 60px 0;
          background: var(--white);
        }

        .terms-wrapper {
          max-width: 900px;
          margin: 0 auto;
          background: var(--white);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid #f0f0f0;
        }

        .terms-section {
          margin-bottom: 35px;
        }

        .terms-section h2 {
          font-size: 24px;
          color: var(--black);
          margin-bottom: 20px;
          font-weight: 700;
          border-right: 3px solid var(--primary);
          padding-right: 15px;
        }

        .terms-section h3 {
          font-size: 20px;
          color: var(--dark-gray);
          margin: 25px 0 15px;
          font-weight: 600;
        }

        .terms-section p {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .terms-section ul {
          list-style: none;
          padding: 0;
          margin: 15px 0;
        }

        .terms-section ul li {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 12px;
          padding-right: 25px;
          position: relative;
        }

        .terms-section ul li:before {
          content: '✓';
          color: var(--primary);
          position: absolute;
          right: 0;
          font-weight: bold;
        }

        .info-box {
          background: var(--light-gray);
          padding: 25px;
          border-radius: 15px;
          margin: 25px 0;
          border-right: 4px solid var(--primary);
        }

        .info-box a {
          color: var(--primary);
          text-decoration: none;
        }

        .info-box a:hover {
          text-decoration: underline;
        }

        .btn-back {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--primary);
          color: var(--white);
          padding: 14px 35px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s;
          margin-top: 30px;
        }

        .btn-back:hover {
          background: var(--primary-dark);
          transform: translateY(-2px);
        }

        .inline-link {
          color: var(--primary);
          text-decoration: none;
        }

        .inline-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 32px;
          }
          
          .terms-wrapper {
            padding: 25px;
          }
          
          .terms-section h2 {
            font-size: 20px;
          }
        }
      `}</style>

      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <ul className="breadcrumb-list">
            <li className="breadcrumb-item">
              <Link href="/ar">الرئيسية</Link>
            </li>
            <li className="breadcrumb-item">/</li>
            <li className="breadcrumb-item active">الشروط والأحكام</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>الشروط والأحكام</h1>
          <p>شروط تجارة الجملة لشركائنا الدوليين</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content">
        <div className="container">
          <div className="terms-wrapper">
            
            <div className="terms-section">
              <h2>١. معلومات عامة</h2>
              <p>مرحبًا بكم في Hijab Fashion Mall. تحكم هذه الشروط والأحكام استخدامك لموقعنا وخدمات الشراء بالجملة. بتقديم طلب معنا، فإنك توافق على الالتزام بهذه الشروط. يرجى قراءتها بعناية قبل المتابعة في أي عملية شراء.</p>
              <p>Hijab Fashion Mall هو مورد جملة متخصص في الأزياء المحتشمة التركية، ويخدم تجار التجزئة والمتاجر في جميع أنحاء العالم. منصتنا تربط المشترين الدوليين بمصنعين أتراك متميزين.</p>
            </div>

            <div className="terms-section">
              <h2>٢. طلبات الجملة</h2>
              <p>تعتبر جميع الطلبات المقدمة عبر موقعنا استفسارات جملة. منتجاتنا مخصصة لإعادة البيع بالتجزئة ما لم يُنص على خلاف ذلك. كمورد جملة، لا نقدم تسعير التجزئة أو تسعير القطعة الواحدة للعناصر غير الموسومة بـ RSS.</p>
              <ul>
                <li><strong>عناصر RSS:</strong> يمكن طلب المنتجات الموسومة بـ "RSS" كقطع فردية</li>
                <li><strong>عناصر الكرتون:</strong> المنتجات المباعة في كرتون بأحجام محددة</li>
                <li><strong>الطلبات المختلطة:</strong> يمكنك دمج منتجات مختلفة في طلب واحد بدون حد أدنى للكمية</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>٣. التسعير والمدفوعات</h2>
              <p>جميع الأسعار المعروضة على موقعنا بالدولار الأمريكي وتمثل أسعار الجملة. نحتفظ بالحق في تعديل الأسعار دون إشعار مسبق بناءً على ظروف السوق وأسعار الصرف وتسعير الشركة المصنعة.</p>
              <ul>
                <li><strong>طرق الدفع المقبولة:</strong> التحويل البنكي، ويسترن يونيون، وبطاقات الائتمان الرئيسية</li>
                <li><strong>شروط الدفع:</strong> تتم معالجة الطلبات بعد تأكيد الدفع</li>
                <li><strong>تحويل العملة:</strong> قد تختلف الرسوم النهائية بناءً على أسعار صرف البنك الذي تتعامل معه</li>
                <li><strong>الفواتير:</strong> يتم توفير فواتير أولية قبل الدفع، والفواتير النهائية عند الشحن</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>٤. الشحن والتسليم</h2>
              <p>نقدم شحنًا عالميًا إلى أكثر من ٥٠ دولة عبر شركائنا الموثوقين في النقل. تختلف تكاليف الشحن وأوقات التسليم حسب الوجهة.</p>
              <ul>
                <li><strong>وقت المعالجة:</strong> ١-٣ أيام عمل بعد تأكيد الدفع</li>
                <li><strong>وقت التسليم:</strong> ٣-٧ أيام عمل لمعظم الوجهات الدولية</li>
                <li><strong>التتبع:</strong> يتم توفير رقم تتبع لجميع الشحنات</li>
                <li><strong>الجمارك والرسوم:</strong> رسوم الاستيراد والضرائب هي مسؤولية المشتري</li>
              </ul>
              <div className="info-box">
                <p><strong>📦 ملاحظة مهمة حول الشحن:</strong> أوقات التسليم هي تقديرات وقد تختلف بسبب التخليص الجمركي أو العطلات المحلية أو الظروف غير المتوقعة. نحن لسنا مسؤولين عن التأخير الناجم عن شركات النقل أو السلطات الجمركية.</p>
              </div>
            </div>

            <div className="terms-section">
              <h2>٥. معلومات المنتج</h2>
              <p>نسعى جاهدين لتقديم أوصاف وصور ومواصفات دقيقة للمنتج. ومع ذلك، يرجى ملاحظة:</p>
              <ul>
                <li>قد تظهر الألوان مختلفة قليلاً بسبب إعدادات الشاشة</li>
                <li>المقاسات مبنية على معايير التصنيع التركية؛ يرجى مراجعة أدلة المقاسات قبل الطلب</li>
                <li>تكوينات الأقمشة محددة في أوصاف المنتج</li>
                <li>توفر المخزون عرضة للتغيير دون إشعار</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>٦. الإرجاع والتلف</h2>
              <p>كمورد جملة، لا نقبل الإرجاع بسبب تغيير الرأي أو التفضيل. ومع ذلك، نضمن جودة منتجاتنا بشكل كامل:</p>
              <ul>
                <li>عيوب التصنيع مغطاة بتعويض كامل</li>
                <li>أضرار النقل مغطاة بالتوثيق المناسب</li>
                <li>يجب تقديم المطالبات في غضون ٧ أيام من التسليم مع صور واضحة</li>
                <li>يتم تقديم التعويض كرصيد أو استبدال أو استرداد بناءً على مراجعة الحالة</li>
              </ul>
              <p>يرجى الرجوع إلى <Link href="/ar/refund-policy" className="inline-link">سياسة الاسترداد والإرجاع</Link> للحصول على معلومات مفصلة.</p>
            </div>

            <div className="terms-section">
              <h2>٧. الملكية الفكرية</h2>
              <p>جميع المحتويات على هذا الموقع، بما في ذلك الصور والنصوص والشعارات والتصاميم، هي ملك لـ Hijab Fashion Mall ومحمية بموجب قوانين حقوق النشر. يحظر الاستخدام أو النسخ أو التوزيع غير المصرح به دون موافقتنا الخطية.</p>
            </div>

            <div className="terms-section">
              <h2>٨. سياسة الخصوصية</h2>
              <p>نحن نحترم خصوصيتك ونلتزم بحماية معلوماتك الشخصية. تُستخدم بياناتك فقط لمعالجة الطلبات والتواصل وتحسين خدماتنا. لا نشارك معلوماتك مع أطراف ثالثة إلا عند الضرورة لأغراض الشحن ومعالجة المدفوعات.</p>
              <p>لمزيد من التفاصيل، يرجى مراجعة <Link href="/ar/privacy-policy" className="inline-link">سياسة الخصوصية</Link> الخاصة بنا.</p>
            </div>

            <div className="terms-section">
              <h2>٩. تحديد المسؤولية</h2>
              <p>لا تكون Hijab Fashion Mall مسؤولة عن أي أضرار غير مباشرة أو عرضية أو تبعية ناتجة عن استخدام منتجاتنا أو خدماتنا. مسؤوليتنا محدودة بسعر شراء المنتجات المعنية.</p>
            </div>

            <div className="terms-section">
              <h2>١٠. القانون الحاكم</h2>
              <p>تخضع هذه الشروط والأحكام لقوانين الجمهورية التركية. يتم حل أي نزاعات تنشأ عن هذه الشروط من خلال المحاكم التركية.</p>
            </div>

            <div className="terms-section">
              <h2>١١. تعديلات الشروط</h2>
              <p>نحتفظ بالحق في تحديث أو تعديل هذه الشروط والأحكام في أي وقت دون إشعار مسبق. ستصبح التغييرات سارية المفعول فور نشرها على هذه الصفحة. يشكل استمرارك في استخدام خدماتنا قبولًا لأي تعديلات.</p>
            </div>

            <div className="terms-section">
              <h2>١٢. اتصل بنا</h2>
              <p>إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يرجى الاتصال بنا:</p>
              <ul>
                <li><strong>واتساب:</strong> +90 551 952 24 48 (دعم ٢٤/٧)</li>
                <li><strong>نموذج الاتصال:</strong> متاح على موقعنا</li>
              </ul>
            </div>

            <Link href="/ar" className="btn-back">
              <FaArrowLeft size={14} /> العودة إلى الرئيسية
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}