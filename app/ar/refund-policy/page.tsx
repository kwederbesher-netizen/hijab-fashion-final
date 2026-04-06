// app/ar/refund-policy/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function RefundPolicyPageAr() {
  return (
    <>
      <Head>
        <title>سياسة الاسترداد والإرجاع - Hijab Fashion Mall | جملة الأزياء المحتشمة التركية</title>
        <meta name="description" content="سياسة الإرجاع لدينا بالجملة تغطي عيوب التصنيع وأضرار الشحن. تعرف على عملية ضمان الجودة للطلبات الدولية بالجملة." />
        <meta name="keywords" content="سياسة الاسترداد, سياسة الإرجاع, إرجاع الجملة, العناصر التالفة, ضمان الجودة, جملة حجاب تركيا" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/ar/refund-policy" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/refund-policy" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/refund-policy" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/refund-policy" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/refund-policy" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/refund-policy" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/refund-policy" />
        <meta property="og:title" content="سياسة الاسترداد والإرجاع - Hijab Fashion Mall" />
        <meta property="og:description" content="سياسة الإرجاع لدينا بالجملة تغطي عيوب التصنيع وأضرار الشحن." />
        <meta property="og:url" content="https://hijabfashionmall.com/ar/refund-policy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="سياسة الاسترداد والإرجاع - Hijab Fashion Mall" />
        <meta name="twitter:description" content="سياسة الإرجاع لدينا بالجملة تغطي عيوب التصنيع وأضرار الشحن." />
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

        .policy-content {
          padding: 60px 0;
          background: var(--white);
        }

        .policy-wrapper {
          max-width: 900px;
          margin: 0 auto;
          background: var(--white);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid #f0f0f0;
        }

        .policy-section {
          margin-bottom: 35px;
        }

        .policy-section h2 {
          font-size: 24px;
          color: var(--black);
          margin-bottom: 20px;
          font-weight: 700;
          border-right: 3px solid var(--primary);
          padding-right: 15px;
        }

        .policy-section h3 {
          font-size: 20px;
          color: var(--dark-gray);
          margin: 25px 0 15px;
          font-weight: 600;
        }

        .policy-section p {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .policy-section ul {
          list-style: none;
          padding: 0;
          margin: 15px 0;
        }

        .policy-section ul li {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 12px;
          padding-right: 25px;
          position: relative;
        }

        .policy-section ul li:before {
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

        .info-box p {
          margin-bottom: 0;
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
          
          .policy-wrapper {
            padding: 25px;
          }
          
          .policy-section h2 {
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
            <li className="breadcrumb-item active">سياسة الاسترداد والإرجاع</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>سياسة الاسترداد والإرجاع</h1>
          <p>ضمان الجودة لطلبات الجملة الخاصة بك</p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="policy-content">
        <div className="container">
          <div className="policy-wrapper">
            
            <div className="policy-section">
              <h2>١. ضمان الجودة</h2>
              <p>في Hijab Fashion Mall، نفخر بتقديم الأزياء المحتشمة التركية المتميزة لشركائنا في الجملة حول العالم. يخضع كل منتج لمراقبة جودة صارمة قبل الشحن لضمان حصولك على عناصر تلبي معاييرنا العالية من الحرفية والأصالة.</p>
              <p>باعتبارنا مورد جملة يخدم تجار التجزئة في أكثر من ٥٠ دولة، فإننا ندرك أهمية الجودة الموثوقة لعملك. التزامنا هو توفير منتجات تركية أصلية متسقة سيعشقها عملاؤك.</p>
            </div>

            <div className="policy-section">
              <h2>٢. العناصر التالفة أو المعيبة</h2>
              <p>نحن نقف وراء جودة منتجاتنا. في حالة نادرة أن تستلم عنصرًا به عيب تصنيع أو ضرر حدث أثناء النقل، فسوف نعوضك بالكامل عن العناصر المتضررة.</p>
              
              <div className="info-box">
                <p><strong>📦 ماذا تفعل إذا استلمت عناصر تالفة:</strong></p>
                <ul style={{ marginTop: '10px' }}>
                  <li>اتصل بخدمة العملاء لدينا في غضون ٧ أيام من استلام طلبك</li>
                  <li>قدم صورًا واضحة تظهر الضرر أو العيب</li>
                  <li>قم بتضمين رقم طلبك ورموز المنتج</li>
                  <li>سيراجع فريقنا ويعالج التعويض في غضون ٢-٣ أيام عمل</li>
                </ul>
              </div>
            </div>

            <div className="policy-section">
              <h2>٣. اعتبارات الجملة الدولية</h2>
              <p>باعتبارنا تاجر جملة دولي يشحن إلى تجار التجزئة في جميع أنحاء العالم، فإننا نعمل وفقًا لمعايير تجارة الجملة. نظرًا لطبيعة الطلبات بالجملة والخدمات اللوجستية الدولية، فإننا لا نقبل الإرجاع لأسباب مثل:</p>
              <ul>
                <li>تغيير الرأي أو التفضيل</li>
                <li>اختلافات الألوان بسبب إعدادات الشاشة</li>
                <li>اختيار المقاس (يرجى التحقق من المقاسات قبل الطلب)</li>
                <li>اختلافات طفيفة عن صور المنتج</li>
              </ul>
              <p>نحن نشجع شركاء الجملة لدينا على مراجعة تفاصيل المنتج بعناية قبل تقديم الطلبات. يوفر كتالوجنا أوصافًا مفصلة ومعلومات عن الأقمشة وأدلة مقاسات لمساعدتك في اتخاذ قرارات شراء مستنيرة.</p>
            </div>

            <div className="policy-section">
              <h2>٤. عملية مراقبة الجودة</h2>
              <p>لتقليل أي مشاكل مع طلباتك، ننفذ عملية مراقبة جودة شاملة:</p>
              <ul>
                <li>يتم فحص كل عنصر قبل التعبئة</li>
                <li>تغليف احترافي للنقل الدولي</li>
                <li>توفير معلومات التتبع لجميع الشحنات</li>
                <li>الشراكة مع شركات نقل موثوقة للتوصيل العالمي</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>٥. كيفية الإبلاغ عن مشكلة</h2>
              <p>إذا استلمت عناصر بها عيوب تصنيع أو أضرار شحن، يرجى الاتصال بنا فورًا:</p>
              <ul>
                <li><strong>واتساب:</strong> +90 551 952 24 48</li>
                <li><strong>نموذج الاتصال:</strong> متاح على موقعنا</li>
              </ul>
              <p>فريق خدمة العملاء لدينا متاح ٢٤/٧ لمساعدتك في أي مخاوف بشأن طلبات الجملة الخاصة بك.</p>
            </div>

            <div className="policy-section">
              <h2>٦. عملية التعويض</h2>
              <p>عند التحقق من العناصر التالفة أو المعيبة، سنقدم تعويضًا كاملاً من خلال:</p>
              <ul>
                <li>رصيد نحو طلبك التالي</li>
                <li>استبدال العناصر المتضررة (حسب التوفر)</li>
                <li>استرداد المبلغ عبر طريقة الدفع الأصلية</li>
              </ul>
              <p>تتم معالجة التعويض في غضون ٢-٥ أيام عمل بعد تأكيد المشكلة.</p>
            </div>

            <div className="policy-section">
              <h2>٧. اتصل بنا</h2>
              <p>لأي أسئلة حول سياسة الإرجاع أو للإبلاغ عن مشكلة مع طلبك، لا تتردد في التواصل مع فريقنا. نحن هنا لضمان أن تكون تجربة الجملة الخاصة بك سلسة وناجحة.</p>
              <p><strong>دعم العملاء (واتساب):</strong> +90 551 952 24 48</p>
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