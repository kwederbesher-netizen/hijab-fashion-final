// app/ar/refund-policy/page.tsx
'use client'

import Link from 'next/link'
import Head from 'next/head'

export default function RefundPolicyPageAr() {
  return (
    <>
      <Head>
        <title>سياسة الاسترجاع والاستبدال - حجاب فاشون مول | جملة ملابس محجبات تركية</title>
        <meta name="description" content="سياسة الضمان لجودة منتجاتنا بالجملة. تعويض كامل عن القطع التالفة أو المعيبة مع ضمان الجودة للطلبات الدولية." />
        <meta name="keywords" content="سياسة الاسترجاع, سياسة الاستبدال, جملة ملابس محجبات, ضمان الجودة, تعويض القطع التالفة" />
        <link rel="canonical" href="https://hijabfashionmall.com/ar/refund-policy" />
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
          text-align: right;
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
            <li style={{ fontSize: '14px', color: '#000', fontWeight: 600 }}>سياسة الاسترجاع والاستبدال</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>سياسة الاسترجاع والاستبدال</h1>
          <p>ضمان الجودة لطلبات الجملة</p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="policy-content">
        <div className="container">
          <div className="policy-wrapper">
            
            <div className="policy-section">
              <h2>١. ضمان الجودة</h2>
              <p>في حجاب فاشون مول، نفخر بتقديم أجود ملابس المحجبات التركية لشركائنا من تجار الجملة حول العالم. تخضع جميع المنتجات لفحص جودة دقيق قبل الشحن لضمان وصولها إليك مطابقة لأعلى معايير الحرفية والأصالة التركية.</p>
              <p>بصفتنا مورد جملة يخدم تجار التجزئة في أكثر من ٥٠ دولة، ندرك أهمية الجودة الموثوقة لنجاح عملك. التزامنا هو توفير منتجات تركية أصلية ومتسقة الجودة يحبها عملاؤك.</p>
            </div>

            <div className="policy-section">
              <h2>٢. المنتجات التالفة أو المعيبة</h2>
              <p>نحن نضمن جودة منتجاتنا. في حال وصول أي قطعة بها عيب تصنيع أو تعرضت للتلف أثناء الشحن، سنقوم بتعويضك بالكامل عن القطع المتضررة.</p>
              
              <div className="info-box">
                <p><strong>📦 الإجراء عند استلام قطع تالفة:</strong></p>
                <ul style={{ marginTop: '10px' }}>
                  <li>تواصل مع خدمة العملاء خلال ٧ أيام من استلام الطلب</li>
                  <li>قدم صوراً واضحة تظهر التلف أو العيب</li>
                  <li>أرفق رقم الطلب ورموز المنتجات المتضررة</li>
                  <li>سيقوم فريقنا بمراجعة ومعالجة التعويض خلال ٢-٣ أيام عمل</li>
                </ul>
              </div>
            </div>

            <div className="policy-section">
              <h2>٣. اعتبارات الجملة الدولية</h2>
              <p>نحن نتعامل كتجار جملة دوليين نشحن لتجار التجزئة حول العالم. نظراً لطبيعة الطلبات بالجملة والخدمات اللوجستية الدولية، لا نقبل استرجاع المنتجات للأسباب التالية:</p>
              <ul>
                <li>تغير الرأي أو عدم الرغبة بالمنتج</li>
                <li>اختلاف الألوان بسبب إعدادات الشاشة</li>
                <li>اختيار المقاس (يرجى التأكد من المقاسات قبل الطلب)</li>
                <li>اختلافات طفيفة عن صور المنتج</li>
              </ul>
              <p>نشجع شركاءنا من تجار الجملة على مراجعة تفاصيل المنتج بعناية قبل تقديم الطلبات. يوفر كتالوجنا وصفاً مفصلاً عن الأقمشة والمقاسات لمساعدتك في اتخاذ قرارات شراء مدروسة.</p>
            </div>

            <div className="policy-section">
              <h2>٤. عملية مراقبة الجودة</h2>
              <p>للتقليل من أي مشاكل في طلباتك، نطبق عملية مراقبة جودة شاملة:</p>
              <ul>
                <li>فحص كل قطعة قبل التعبئة</li>
                <li>تغليف احترافي للنقل الدولي</li>
                <li>توفير معلومات التتبع لجميع الشحنات</li>
                <li>الشراكة مع شركات شحن موثوقة للتوصيل العالمي</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2>٥. كيفية الإبلاغ عن مشكلة</h2>
              <p>إذا استلمت قطعاً بها عيب تصنيع أو تلف أثناء الشحن، يرجى التواصل معنا فوراً:</p>
              <ul>
                <li><strong>البريد الإلكتروني:</strong> support@hijabfashionmall.com</li>
                <li><strong>واتساب:</strong> +90 551 952 24 48</li>
                <li><strong>نموذج الاتصال:</strong> متوفر على موقعنا</li>
              </ul>
              <p>فريق خدمة العملاء متاح على مدار الساعة لمساعدتك في أي استفسار بخصوص طلبات الجملة.</p>
            </div>

            <div className="policy-section">
              <h2>٦. إجراءات التعويض</h2>
              <p>بعد التحقق من القطع التالفة أو المعيبة، سنقوم بتقديم تعويض كامل من خلال:</p>
              <ul>
                <li>رصيد للاستخدام في طلبك القادم</li>
                <li>استبدال القطع المتضررة (حسب التوفر)</li>
                <li>استرداد المبلغ عبر طريقة الدفع الأصلية</li>
              </ul>
              <p>يتم معالجة التعويض خلال ٢-٥ أيام عمل بعد تأكيد المشكلة.</p>
            </div>

            <div className="policy-section">
              <h2>٧. تواصل معنا</h2>
              <p>لأي استفسار حول سياسة الاسترجاع أو للإبلاغ عن مشكلة في طلبك، لا تتردد في التواصل مع فريقنا. نحن هنا لضمان أن تكون تجربتك مع الجملة سلسة وناجحة.</p>
              <p><strong>خدمة العملاء:</strong> +90 551 952 24 48 (واتساب 24/7)</p>
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