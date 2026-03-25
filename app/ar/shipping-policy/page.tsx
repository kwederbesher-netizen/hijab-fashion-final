// app/ar/shipping-policy/page.tsx
'use client'

import Link from 'next/link'
import Head from 'next/head'

export default function ShippingPolicyPageAr() {
  return (
    <>
      <Head>
        <title>سياسة الشحن - حجاب فاشون مول | شحن عالمي من تركيا</title>
        <meta name="description" content="تعرف على سياسة الشحن لدينا للطلبات بالجملة. شحن سريع وموثوق إلى أكثر من 50 دولة عبر شركات شحن عالمية موثوقة." />
        <meta name="keywords" content="سياسة الشحن, شحن عالمي, شحن جملة, أوقات التوصيل, تتبع الطلبات" />
        <link rel="canonical" href="https://hijabfashionmall.com/ar/shipping-policy" />
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

        .shipping-content {
          padding: 60px 0;
          background: var(--white);
        }

        .shipping-wrapper {
          max-width: 900px;
          margin: 0 auto;
          background: var(--white);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid #f0f0f0;
          text-align: right;
        }

        .shipping-section {
          margin-bottom: 35px;
        }

        .shipping-section h2 {
          font-size: 24px;
          color: var(--black);
          margin-bottom: 20px;
          font-weight: 700;
          border-right: 3px solid var(--primary);
          padding-right: 15px;
        }

        .shipping-section h3 {
          font-size: 20px;
          color: var(--dark-gray);
          margin: 25px 0 15px;
          font-weight: 600;
        }

        .shipping-section p {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .shipping-section ul {
          list-style: none;
          padding: 0;
          margin: 15px 0;
        }

        .shipping-section ul li {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 12px;
          padding-right: 25px;
          position: relative;
        }

        .shipping-section ul li:before {
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
          
          .shipping-wrapper {
            padding: 25px;
          }
          
          .shipping-section h2 {
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
            <li style={{ fontSize: '14px', color: '#000', fontWeight: 600 }}>سياسة الشحن</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>سياسة الشحن</h1>
          <p>شحن سريع وموثوق إلى جميع أنحاء العالم من تركيا</p>
        </div>
      </section>

      {/* Shipping Content */}
      <section className="shipping-content">
        <div className="container">
          <div className="shipping-wrapper">
            
            <div className="shipping-section">
              <h2>١. الشحن العالمي</h2>
              <p>في حجاب فاشون مول، نفخر بخدمة شركائنا من تجار الجملة حول العالم. نقدم شحن عالمي موثوق إلى أكثر من ٥٠ دولة عبر شركائنا الموثوقين من شركات الشحن. تضمن شبكة الشحن لدينا وصول طلباتك إليك بأمان وكفاءة أينما كنت.</p>
              <p>بصفتنا مورد جملة دولي مقرنا في تركيا، ندرك أهمية التسليم في الوقت المناسب وبشكل آمن لعملك. نحن نعمل حصرياً مع شركات الشحن الدولية الراسخة لتقديم أفضل تجربة شحن ممكنة.</p>
            </div>

            <div className="shipping-section">
              <h2>٢. ترتيبات الشحن</h2>
              <p>يتم ترتيب الشحن حسب كل حالة على حدة، مع مراعاة موقعك وحجم الطلب ومتطلبات التسليم المحددة. نحن ننسق مع شركائنا من شركات الشحن لإيجاد حل الشحن الأنسب لكل طلب جملة.</p>
              <ul>
                <li>نعمل مع العديد من شركات الشحن الدولية (DHL، FedEx، UPS، وغيرها)</li>
                <li>يتم اختيار طرق الشحن بناءً على الوجهة ومواصفات الطلب</li>
                <li>نقوم بتوصيل جميع تفاصيل الشحن مباشرة إلى شركائنا من تجار الجملة</li>
                <li>يتم تأكيد ترتيبات الشحن بعد الانتهاء من الطلب</li>
              </ul>
              <div className="info-box">
                <p><strong>📦 شحن مرن:</strong> نحن ندرك أن لكل طلب جملة متطلبات فريدة. يعمل فريقنا عن كثب معك لترتيب شحن يلبي الجدول الزمني وتفضيلات الميزانية الخاصة بك.</p>
              </div>
            </div>

            <div className="shipping-section">
              <h2>٣. تكاليف الشحن</h2>
              <p>تختلف تكاليف الشحن حسب عدة عوامل:</p>
              <ul>
                <li><strong>الدولة المستهدفة:</strong> المسافة والمنطقة الجغرافية</li>
                <li><strong>وزن وحجم الطلب:</strong> أبعاد الشحنة والوزن الإجمالي</li>
                <li><strong>طريقة الشحن:</strong> خيارات الشحن العادي أو السريع أو الاقتصادي</li>
                <li><strong>الجمارك والرسوم:</strong> الضرائب والرسوم الجمركية المطبقة في بلدك</li>
              </ul>
              <p>يتم احتساب تكاليف الشحن بشكل فردي لكل طلب. سيقوم فريقنا بتزويدك بعرض شحن مفصل قبل الانتهاء من طلبك، لضمان الشفافية الكاملة وعدم وجود مفاجآت.</p>
            </div>

            <div className="shipping-section">
              <h2>٤. وقت المعالجة</h2>
              <p>نسعى جاهدين لتجهيز وشحن طلباتك في أسرع وقت ممكن:</p>
              <ul>
                <li><strong>معالجة الطلب:</strong> ١-٣ أيام عمل بعد تأكيد الدفع</li>
                <li><strong>فحص الجودة:</strong> يتم فحص كل قطعة قبل التعبئة</li>
                <li><strong>التغليف:</strong> تغليف احترافي لضمان سلامة المنتج أثناء النقل</li>
                <li><strong>المستندات:</strong> تجهيز جميع مستندات الشحن اللازمة</li>
              </ul>
            </div>

            <div className="shipping-section">
              <h2>٥. أوقات التسليم</h2>
              <p>تختلف أوقات التسليم المقدرة حسب الوجهة:</p>
              <ul>
                <li><strong>دول الخليج والشرق الأوسط:</strong> ٣-٥ أيام عمل</li>
                <li><strong>الدول الأوروبية:</strong> ٣-٧ أيام عمل</li>
                <li><strong>أمريكا الشمالية:</strong> ٥-٧ أيام عمل</li>
                <li><strong>أستراليا ونيوزيلندا:</strong> ٥-٨ أيام عمل</li>
                <li><strong>الوجهات الدولية الأخرى:</strong> ٧-١٠ أيام عمل</li>
              </ul>
              <p><strong>ملاحظة:</strong> هذه أوقات تسليم تقديرية. قد يختلف التسليم الفعلي بسبب التخليص الجمركي أو العطلات المحلية أو ظروف غير متوقعة.</p>
            </div>

            <div className="shipping-section">
              <h2>٦. تتبع الطلب</h2>
              <p>بمجرد شحن طلبك، نوفر لك رقم تتبع يسمح لك بمتابعة شحنتك في الوقت الفعلي. ستتلقى:</p>
              <ul>
                <li>اسم شركة الشحن ونوع الخدمة</li>
                <li>رقم تتبع فريد</li>
                <li>رابط تتبع للتحديثات المباشرة</li>
                <li>نافذة التسليم المتوقعة</li>
              </ul>
              <p>نوصي بمتابعة شحنتك والاستعداد لاستلام الطرد عند وصوله.</p>
            </div>

            <div className="shipping-section">
              <h2>٧. الجمارك والرسوم الجمركية</h2>
              <p>بصفتنا مورد جملة دولي يشحن إلى جميع أنحاء العالم، يرجى العلم أن:</p>
              <ul>
                <li>الرسوم الجمركية والضرائب ورسوم التخليص هي مسؤولية المشتري</li>
                <li>تختلف أوقات التخليص الجمركي حسب البلد وقد تؤثر على وقت التسليم</li>
                <li>نقدم جميع المستندات اللازمة لتسهيل التخليص الجمركي السلس</li>
                <li>يرجى الاستفسار من مكتب الجمارك المحلي لديك عن الرسوم المطبقة</li>
              </ul>
              <div className="info-box">
                <p><strong>🌍 ملاحظة حول الشحن الدولي:</strong> تختلف سياسات الجمارك بشكل كبير بين البلدان. نوصي بالاستشارة مع سلطات الجمارك المحلية لديك لفهم أي رسوم أو متطلبات محتملة قبل تقديم طلبك.</p>
              </div>
            </div>

            <div className="shipping-section">
              <h2>٨. الشحنات التالفة أو المفقودة</h2>
              <p>في حالة نادرة لتلف شحنتك أثناء النقل أو فقدانها، سنعمل مع شركة الشحن لحل المشكلة. يرجى ملاحظة:</p>
              <ul>
                <li>افحص الطرد فور استلامه</li>
                <li>وثق أي ضرر مرئي بالصور</li>
                <li>أبلغ عن أي مشكلة خلال ٧ أيام من التسليم</li>
                <li>سنقوم بمساعدتك في عملية المطالبة</li>
              </ul>
              <p>يرجى الرجوع إلى <Link href="/ar/refund-policy" style={{ color: 'var(--primary)' }}>سياسة الاسترجاع والاستبدال</Link> لمزيد من التفاصيل حول العناصر التالفة.</p>
            </div>

            <div className="shipping-section">
              <h2>٩. الشحن إلى المناطق النائية</h2>
              <p>بالنسبة للشحنات إلى المناطق النائية أو التي يصعب الوصول إليها، قد يتطلب الأمر وقت تسليم إضافي. قد تستخدم شركات الشحن لدينا شركاء محليين للتسليم النهائي في بعض المناطق. سنخطرك إذا كانت هناك أي ترتيبات خاصة مطلوبة لموقعك.</p>
            </div>

            <div className="shipping-section">
              <h2>١٠. الاستفسارات المتعلقة بالشحن</h2>
              <p>لأي استفسار بخصوص الشحن أو لمناقشة متطلبات التسليم الخاصة بك، يرجى التواصل معنا:</p>
              <ul>
                <li><strong>واتساب:</strong> +90 551 952 24 48</li>
                <li><strong>نموذج الاتصال:</strong> متوفر على موقعنا</li>
              </ul>
              <p>فريقنا مستعد لمساعدتك في ترتيبات الشحن المخصصة لطلبات الجملة الخاصة بك.</p>
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