// app/ar/shipping-policy/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function ShippingPolicyPageAr() {
  return (
    <>
      <Head>
        <title>سياسة الشحن - Hijab Fashion Mall | شحن عالمي من تركيا</title>
        <meta name="description" content="تعرف على سياسة الشحن العالمية لدينا لطلبات الجملة. توصيل سريع وموثوق إلى أكثر من 50 دولة عبر شركات نقل موثوقة." />
        <meta name="keywords" content="سياسة الشحن, شحن عالمي, شحن الجملة, أوقات التسليم, تتبع الطلبات, جملة حجاب تركيا" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/ar/shipping-policy" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/shipping-policy" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/shipping-policy" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/shipping-policy" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/shipping-policy" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/shipping-policy" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/shipping-policy" />
        <meta property="og:title" content="سياسة الشحن - Hijab Fashion Mall" />
        <meta property="og:description" content="شحن عالمي لطلبات الجملة. توصيل سريع وموثوق إلى أكثر من 50 دولة من تركيا." />
        <meta property="og:url" content="https://hijabfashionmall.com/ar/shipping-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://hijabfashionmall.com/images/og-shipping.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="سياسة الشحن - Hijab Fashion Mall" />
        <meta name="twitter:description" content="شحن عالمي لطلبات الجملة. توصيل سريع وموثوق من تركيا." />
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
          
          .shipping-wrapper {
            padding: 25px;
          }
          
          .shipping-section h2 {
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
            <li className="breadcrumb-item active">سياسة الشحن</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>سياسة الشحن</h1>
          <p>توصيل سريع وموثوق في جميع أنحاء العالم من تركيا</p>
        </div>
      </section>

      {/* Shipping Content */}
      <section className="shipping-content">
        <div className="container">
          <div className="shipping-wrapper">
            
            <div className="shipping-section">
              <h2>١. الشحن العالمي</h2>
              <p>في Hijab Fashion Mall، نفخر بخدمة شركائنا في الجملة حول العالم. نقدم شحنًا عالميًا موثوقًا إلى أكثر من ٥٠ دولة عبر شركائنا من شركات النقل الموثوقة. تضمن شبكة الشحن لدينا وصول طلباتك إليك بأمان وكفاءة، أينما كنت.</p>
              <p>باعتبارنا مورد جملة دولي مقره في تركيا، فإننا ندرك أهمية التسليم في الوقت المناسب وبشكل آمن لعملك. نحن نعمل حصريًا مع شركات النقل الدولية الراسخة لتزويدك بأفضل تجربة شحن ممكنة.</p>
            </div>

            <div className="shipping-section">
              <h2>٢. ترتيبات الشحن</h2>
              <p>يتم اتخاذ ترتيبات الشحن على أساس كل حالة على حدة، مع مراعاة موقعك وحجم الطلب ومتطلبات التسليم المحددة. نحن ننسق مع شركائنا من شركات النقل لإيجاد حل الشحن الأنسب لكل طلب جملة.</p>
              <ul>
                <li>نعمل مع عدة شركات نقل دولية (DHL، FedEx، UPS، وغيرها)</li>
                <li>يتم اختيار طرق الشحن بناءً على الوجهة ومواصفات الطلب</li>
                <li>نقوم بتوصيل جميع تفاصيل الشحن مباشرة إلى شركائنا في الجملة</li>
                <li>يتم تأكيد ترتيبات الشحن بعد الانتهاء من الطلب</li>
              </ul>
              <div className="info-box">
                <p><strong>📦 شحن مرن:</strong> نحن ندرك أن كل طلب جملة له متطلبات فريدة. يعمل فريقنا عن كثب معك لترتيب الشحن الذي يلبي الجدول الزمني وتفضيلات الميزانية الخاصة بك.</p>
              </div>
            </div>

            <div className="shipping-section">
              <h2>٣. تكاليف الشحن</h2>
              <p>تختلف تكاليف الشحن اعتمادًا على عدة عوامل:</p>
              <ul>
                <li><strong>بلد الوجهة:</strong> المسافة ومنطقة الشحن</li>
                <li><strong>وزن وحجم الطلب:</strong> أبعاد الطرد والوزن الإجمالي</li>
                <li><strong>طريقة الشحن:</strong> خيارات قياسية أو سريعة أو اقتصادية متاحة</li>
                <li><strong>الجمارك والرسوم:</strong> ضرائب الاستيراد والرسوم المطبقة على بلدك</li>
              </ul>
              <p>يتم حساب تكاليف الشحن بشكل فردي لكل طلب. سيزودك فريقنا بعرض شحن مفصل قبل الانتهاء من طلبك، مما يضمن الشفافية الكاملة وعدم وجود مفاجآت.</p>
            </div>

            <div className="shipping-section">
              <h2>٤. وقت المعالجة</h2>
              <p>نسعى جاهدين لتجهيز وشحن طلباتك في أسرع وقت ممكن:</p>
              <ul>
                <li><strong>معالجة الطلب:</strong> ١-٣ أيام عمل بعد تأكيد الدفع</li>
                <li><strong>فحص الجودة:</strong> يتم فحص كل عنصر قبل التعبئة</li>
                <li><strong>التغليف:</strong> تغليف احترافي لضمان سلامة المنتج أثناء النقل</li>
                <li><strong>التوثيق:</strong> يتم تجهيز جميع مستندات الشحن اللازمة</li>
              </ul>
            </div>

            <div className="shipping-section">
              <h2>٥. أوقات التسليم</h2>
              <p>تختلف أوقات التسليم المقدرة حسب الوجهة:</p>
              <ul>
                <li><strong>الشرق الأوسط ودول الخليج:</strong> ٣-٥ أيام عمل</li>
                <li><strong>الدول الأوروبية:</strong> ٣-٧ أيام عمل</li>
                <li><strong>أمريكا الشمالية:</strong> ٥-٧ أيام عمل</li>
                <li><strong>أستراليا ونيوزيلندا:</strong> ٥-٨ أيام عمل</li>
                <li><strong>وجهات دولية أخرى:</strong> ٧-١٠ أيام عمل</li>
              </ul>
              <p><strong>ملاحظة:</strong> هذه أوقات تسليم مقدرة. قد يختلف التسليم الفعلي بسبب التخليص الجمركي أو العطلات المحلية أو الظروف غير المتوقعة.</p>
            </div>

            <div className="shipping-section">
              <h2>٦. تتبع الطلب</h2>
              <p>بمجرد شحن طلبك، نزودك برقم تتبع يسمح لك بمراقبة شحنتك في الوقت الفعلي. سوف تتلقى:</p>
              <ul>
                <li>اسم شركة النقل ونوع الخدمة</li>
                <li>رقم تتبع فريد</li>
                <li>رابط تتبع للتحديثات في الوقت الفعلي</li>
                <li>نافذة التسليم المقدرة</li>
              </ul>
              <p>نوصي بمراقبة شحنتك وأن تكون متاحًا لاستلام الطرد عند وصوله.</p>
            </div>

            <div className="shipping-section">
              <h2>٧. الجمارك ورسوم الاستيراد</h2>
              <p>باعتبارنا تاجر جملة دولي يشحن في جميع أنحاء العالم، يرجى العلم أن:</p>
              <ul>
                <li>رسوم الاستيراد والضرائب والرسوم الجمركية هي مسؤولية المشتري</li>
                <li>تختلف أوقات التخليص الجمركي حسب البلد وقد تؤثر على وقت التسليم</li>
                <li>نقدم جميع المستندات اللازمة لتسهيل التخليص الجمركي السلس</li>
                <li>يرجى التحقق مع مكتب الجمارك المحلي الخاص بك لمعرفة الرسوم المطبقة</li>
              </ul>
              <div className="info-box">
                <p><strong>🌍 ملاحظة حول الشحن الدولي:</strong> تختلف سياسات الجمارك بشكل كبير بين البلدان. نوصي باستشارة سلطة الجمارك المحلية لديك لفهم أي رسوم أو متطلبات محتملة قبل تقديم طلبك.</p>
              </div>
            </div>

            <div className="shipping-section">
              <h2>٨. الشحنات التالفة أو المفقودة</h2>
              <p>في حالة نادرة تلف شحنتك أثناء النقل أو فقدانها، فسنعمل مع شركة النقل لحل المشكلة. يرجى ملاحظة:</p>
              <ul>
                <li>افحص طردك فور وصوله</li>
                <li>وثق أي ضرر مرئي بالصور</li>
                <li>أبلغ عن أي مشاكل في غضون ٧ أيام من التسليم</li>
                <li>سنقوم بمساعدتك في عملية المطالبة</li>
              </ul>
              <p>يرجى الرجوع إلى <Link href="/ar/refund-policy" className="inline-link">سياسة الاسترداد والإرجاع</Link> لمزيد من التفاصيل حول العناصر التالفة.</p>
            </div>

            <div className="shipping-section">
              <h2>٩. الشحن إلى المناطق النائية</h2>
              <p>بالنسبة للشحنات إلى المناطق النائية أو التي يصعب الوصول إليها، قد يكون هناك حاجة إلى وقت تسليم إضافي. قد يستخدم شركاؤنا الناقلون شركاء محليين للتسليم النهائي في بعض المناطق. سنخبرك إذا كانت هناك حاجة إلى أي ترتيبات خاصة لموقعك.</p>
            </div>

            <div className="shipping-section">
              <h2>١٠. الاتصال للاستفسارات حول الشحن</h2>
              <p>لأية أسئلة بخصوص الشحن أو لمناقشة متطلبات التسليم الخاصة بك، يرجى التواصل معنا:</p>
              <ul>
                <li><strong>واتساب:</strong> +90 551 952 24 48</li>
                <li><strong>نموذج الاتصال:</strong> متاح على موقعنا</li>
              </ul>
              <p>فريقنا جاهز لمساعدتك في ترتيبات الشحن الشخصية لطلبات الجملة الخاصة بك.</p>
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