// app/ar/terms-conditions/page.tsx
'use client'

import Link from 'next/link'
import Head from 'next/head'

export default function TermsConditionsPageAr() {
  return (
    <>
      <Head>
        <title>الشروط والأحكام - حجاب فاشون مول | جملة ملابس محجبات تركية</title>
        <meta name="description" content="اطلع على الشروط والأحكام الخاصة بالطلب بالجملة من حجاب فاشون مول. تعرف على سياسات الأسعار والشحن والدفع والضمان للطلبات الدولية." />
        <meta name="keywords" content="شروط وأحكام, جملة ملابس محجبات, سياسة الشحن, طرق الدفع, ضمان الجودة" />
        <link rel="canonical" href="https://hijabfashionmall.com/ar/terms-conditions" />
      </Head>

      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Tajawal', sans-serif;
          color: #333;
          line-height: 1.7;
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

        .page-header .breadcrumb {
          font-size: 14px;
          color: var(--medium-gray);
          margin-bottom: 20px;
        }

        .page-header .breadcrumb a {
          color: var(--primary);
          text-decoration: none;
        }

        .page-header .breadcrumb span {
          color: var(--medium-gray);
          margin: 0 5px;
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
          text-align: right;
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
      <div style={{
        padding: '20px 0',
        background: '#f5f5f5',
        borderBottom: '1px solid #eee'
      }}>
        <div className="container">
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            <li style={{ fontSize: '14px', color: '#555' }}>
              <Link href="/ar" style={{ color: '#555', textDecoration: 'none' }}>الرئيسية</Link>
            </li>
            <li style={{ fontSize: '14px', color: '#555' }}>/</li>
            <li style={{ fontSize: '14px', color: '#000', fontWeight: 600 }}>الشروط والأحكام</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>الشروط والأحكام</h1>
          <p>شروط التعامل بالجملة لشركائنا الدوليين</p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="terms-content">
        <div className="container">
          <div className="terms-wrapper">
            
            <div className="terms-section">
              <h2>١. معلومات عامة</h2>
              <p>مرحباً بك في حجاب فاشون مول. تحكم هذه الشروط والأحكام استخدامك لموقعنا الإلكتروني وخدمات الشراء بالجملة. بتقديم طلب معنا، فإنك توافق على الالتزام بهذه الشروط. يرجى قراءتها بعناية قبل إتمام أي عملية شراء.</p>
              <p>حجاب فاشون مول هو مورد جملة متخصص في ملابس المحجبات التركية، يخدم تجار التجزئة والمتاجر حول العالم. منصتنا تربط المشترين الدوليين بالمصنعين الأتراك المتميزين.</p>
            </div>

            <div className="terms-section">
              <h2>٢. طلبات الجملة</h2>
              <p>جميع الطلبات المقدمة عبر موقعنا تعتبر استفسارات جملة. منتجاتنا مخصصة لإعادة البيع بالتجزئة ما لم يُنص على خلاف ذلك. بصفتنا مورد جملة، لا نقدم أسعار التجزئة أو أسعار القطع الفردية للمنتجات غير المصنفة كـ RSS.</p>
              <ul>
                <li><strong>منتجات RSS:</strong> يمكن طلب المنتجات المصنفة كـ "RSS" كقطع فردية</li>
                <li><strong>منتجات الكرتون:</strong> منتجات تباع بكرتونات بأحجام محددة</li>
                <li><strong>مزج الطلبات:</strong> يمكنك مزج منتجات مختلفة في طلب واحد بدون حد أدنى للكمية</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>٣. الأسعار والدفع</h2>
              <p>جميع الأسعار المعروضة على موقعنا بالدولار الأمريكي (USD) وتمثل أسعار الجملة. نحتفظ بالحق في تعديل الأسعار دون إشعار مسبق بناءً على ظروف السوق وأسعار الصرف وتسعير المصنع.</p>
              <ul>
                <li><strong>طرق الدفع المقبولة:</strong> التحويل البنكي، ويسترن يونيون، وبطاقات الائتمان الرئيسية</li>
                <li><strong>شروط الدفع:</strong> تتم معالجة الطلبات بعد تأكيد الدفع</li>
                <li><strong>تحويل العملات:</strong> قد تختلف الرسوم النهائية حسب أسعار صرف البنك الذي تتعامل معه</li>
                <li><strong>الفواتير:</strong> يتم تقديم فاتورة أولية قبل الدفع، وفاتورة نهائية عند الشحن</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>٤. الشحن والتوصيل</h2>
              <p>نقدم خدمة شحن عالمي إلى أكثر من ٥٠ دولة عبر شركائنا الموثوقين. تختلف تكاليف الشحن وأوقات التسليم حسب الوجهة.</p>
              <ul>
                <li><strong>وقت المعالجة:</strong> ١-٣ أيام عمل بعد تأكيد الدفع</li>
                <li><strong>وقت التوصيل:</strong> ٣-٧ أيام عمل لمعظم الوجهات الدولية</li>
                <li><strong>التتبع:</strong> يتم توفير رقم تتبع لجميع الشحنات</li>
                <li><strong>الجمارك والرسوم:</strong> رسوم الاستيراد والضرائب تقع على عاتق المشتري</li>
              </ul>
              <div className="info-box">
                <p><strong>📦 ملاحظة مهمة حول الشحن:</strong> أوقات التسليم تقديرية وقد تختلف بسبب التخليص الجمركي أو العطلات المحلية أو ظروف غير متوقعة. نحن غير مسؤولين عن التأخير الناتج عن شركات الشحن أو السلطات الجمركية.</p>
              </div>
            </div>

            <div className="terms-section">
              <h2>٥. معلومات المنتج</h2>
              <p>نسعى جاهدين لتقديم أوصاف وصور ومواصفات دقيقة للمنتج. ومع ذلك، يرجى ملاحظة:</p>
              <ul>
                <li>قد تظهر الألوان بشكل مختلف قليلاً بسبب إعدادات الشاشة</li>
                <li>المقاسات تعتمد على معايير التصنيع التركية؛ يرجى مراجعة أدلة المقاسات قبل الطلب</li>
                <li>يتم توفير تركيبة الأقمشة في وصف المنتج</li>
                <li>توفر المخزون عرضة للتغيير دون إشعار</li>
              </ul>
            </div>

            <div className="terms-section">
              <h2>٦. الاسترجاع والمنتجات التالفة</h2>
              <p>بصفتنا مورد جملة، لا نقبل استرجاع المنتجات بسبب تغير الرأي أو عدم الرغبة. ومع ذلك، نضمن جودة منتجاتنا بشكل كامل:</p>
              <ul>
                <li>عيوب التصنيع مشمولة بالتعويض الكامل</li>
                <li>تلف الشحن مشمول مع الوثائق المناسبة</li>
                <li>يجب تقديم المطالبات خلال ٧ أيام من التسليم مع صور واضحة</li>
                <li>يتم تقديم التعويض كرصيد أو استبدال أو استرداد حسب مراجعة الحالة</li>
              </ul>
              <p>يرجى الرجوع إلى <Link href="/ar/refund-policy" style={{ color: 'var(--primary)' }}>سياسة الاسترجاع والاستبدال</Link> للحصول على معلومات مفصلة.</p>
            </div>

            <div className="terms-section">
              <h2>٧. الملكية الفكرية</h2>
              <p>جميع المحتويات على هذا الموقع، بما في ذلك الصور والنصوص والشعارات والتصاميم، هي ملك لحجاب فاشون مول ومحمية بموجب حقوق النشر. يمنع الاستخدام أو النسخ أو التوزيع غير المصرح به دون موافقتنا الخطية.</p>
            </div>

            <div className="terms-section">
              <h2>٨. سياسة الخصوصية</h2>
              <p>نحن نحترم خصوصيتك وملتزمون بحماية معلوماتك الشخصية. تُستخدم بياناتك فقط لمعالجة الطلبات والتواصل وتحسين خدماتنا. لا نشارك معلوماتك مع أطراف ثالثة إلا عند الضرورة للشحن ومعالجة الدفع.</p>
              <p>لمزيد من التفاصيل، يرجى مراجعة <Link href="/ar/privacy-policy" style={{ color: 'var(--primary)' }}>سياسة الخصوصية</Link> الخاصة بنا.</p>
            </div>

            <div className="terms-section">
              <h2>٩. حدود المسؤولية</h2>
              <p>لا يتحمل حجاب فاشون مول المسؤولية عن أي أضرار غير مباشرة أو عرضية أو تبعية ناتجة عن استخدام منتجاتنا أو خدماتنا. تقتصر مسؤوليتنا على سعر شراء المنتجات المعنية.</p>
            </div>

            <div className="terms-section">
              <h2>١٠. القانون الحاكم</h2>
              <p>تخضع هذه الشروط والأحكام لقوانين الجمهورية التركية. يتم حل أي نزاعات تنشأ عن هذه الشروط من خلال المحاكم التركية.</p>
            </div>

            <div className="terms-section">
              <h2>١١. تعديل الشروط</h2>
              <p>نحتفظ بالحق في تحديث أو تعديل هذه الشروط والأحكام في أي وقت دون إشعار مسبق. تصبح التغييرات سارية المفعول فور نشرها على هذه الصفحة. استمرارك في استخدام خدماتنا يعتبر قبولاً لأي تعديلات.</p>
            </div>

            <div className="terms-section">
              <h2>١٢. تواصل معنا</h2>
              <p>إذا كان لديك أي أسئلة حول هذه الشروط والأحكام، يرجى التواصل معنا:</p>
              <ul>
                <li><strong>واتساب:</strong> +90 551 952 24 48 (دعم 24/7)</li>
                <li><strong>نموذج الاتصال:</strong> متوفر على موقعنا</li>
              </ul>
            </div>

            <Link href="/ar" className="btn-back">
              <i className="fas fa-arrow-right"></i> العودة للرئيسية
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}