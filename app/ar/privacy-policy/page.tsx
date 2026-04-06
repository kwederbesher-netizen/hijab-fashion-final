// app/ar/privacy-policy/page.tsx
import Link from 'next/link'
import Head from 'next/head'
import { FaArrowLeft } from 'react-icons/fa'

export default function PrivacyPolicyPageAr() {
  return (
    <>
      <Head>
        <title>سياسة الخصوصية - Hijab Fashion Mall | جملة الأزياء المحتشمة التركية</title>
        <meta name="description" content="تعرف على كيفية جمع Hijab Fashion Mall لمعلوماتك الشخصية واستخدامها وحمايتها. سياسة الخصوصية لعملاء الجملة وزوار الموقع." />
        <meta name="keywords" content="سياسة الخصوصية, حماية البيانات, معلومات شخصية, خصوصية الجملة, خصوصية أزياء الحجاب" />
        <meta name="author" content="Hijab Fashion Mall" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://hijabfashionmall.com/ar/privacy-policy" />
        <link rel="alternate" hrefLang="ar" href="https://hijabfashionmall.com/ar/privacy-policy" />
        <link rel="alternate" hrefLang="en" href="https://hijabfashionmall.com/en/privacy-policy" />
        <link rel="alternate" hrefLang="fr" href="https://hijabfashionmall.com/fr/privacy-policy" />
        <link rel="alternate" hrefLang="de" href="https://hijabfashionmall.com/de/privacy-policy" />
        <link rel="alternate" hrefLang="it" href="https://hijabfashionmall.com/it/privacy-policy" />
        <link rel="alternate" hrefLang="es" href="https://hijabfashionmall.com/es/privacy-policy" />
        <meta property="og:title" content="سياسة الخصوصية - Hijab Fashion Mall" />
        <meta property="og:description" content="تعرف على كيفية جمع Hijab Fashion Mall لمعلوماتك الشخصية واستخدامها وحمايتها." />
        <meta property="og:url" content="https://hijabfashionmall.com/ar/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="سياسة الخصوصية - Hijab Fashion Mall" />
        <meta name="twitter:description" content="تعرف على كيفية حماية Hijab Fashion Mall لمعلوماتك الشخصية." />
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

        /* Breadcrumb Bar */
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

        /* Page Header */
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

        /* Privacy Content */
        .privacy-content {
          padding: 60px 0;
          background: var(--white);
        }

        .privacy-wrapper {
          max-width: 900px;
          margin: 0 auto;
          background: var(--white);
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid #f0f0f0;
        }

        .privacy-section {
          margin-bottom: 35px;
        }

        .privacy-section h2 {
          font-size: 24px;
          color: var(--black);
          margin-bottom: 20px;
          font-weight: 700;
          border-right: 3px solid var(--primary);
          padding-right: 15px;
        }

        .privacy-section h3 {
          font-size: 20px;
          color: var(--dark-gray);
          margin: 25px 0 15px;
          font-weight: 600;
        }

        .privacy-section p {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .privacy-section ul {
          list-style: none;
          padding: 0;
          margin: 15px 0;
        }

        .privacy-section ul li {
          font-size: 16px;
          color: var(--medium-gray);
          line-height: 1.8;
          margin-bottom: 12px;
          padding-right: 25px;
          position: relative;
        }

        .privacy-section ul li:before {
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
          
          .privacy-wrapper {
            padding: 25px;
          }
          
          .privacy-section h2 {
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
            <li className="breadcrumb-item active">سياسة الخصوصية</li>
          </ul>
        </div>
      </div>

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>سياسة الخصوصية</h1>
          <p>كيف نحمي ونتعامل مع معلوماتك</p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="privacy-content">
        <div className="container">
          <div className="privacy-wrapper">
            
            <div className="privacy-section">
              <h2>١. مقدمة</h2>
              <p>في Hijab Fashion Mall، نحن نقدر خصوصيتك ونلتزم بحماية معلوماتك الشخصية. تشرح سياسة الخصوصية هذه كيفية جمع بياناتك واستخدامها وحمايتها عند زيارة موقعنا أو تقديم طلبات الجملة معنا. باستخدام خدماتك، فإنك توافق على الممارسات الموضحة في هذه السياسة.</p>
              <p>نحن نعمل كمورد جملة للأزياء المحتشمة التركية، ونخدم تجار التجزئة والمتاجر في جميع أنحاء العالم. يضمن التزامنا بحماية البيانات بقاء معلوماتك آمنة أثناء عملك معنا.</p>
            </div>

            <div className="privacy-section">
              <h2>٢. المعلومات التي نجمعها</h2>
              <p>نقوم بجمع المعلومات التي تساعدنا في معالجة طلباتك وتحسين خدماتنا. تشمل أنواع المعلومات التي قد نجمعها:</p>
              <ul>
                <li><strong>معلومات العمل:</strong> اسم الشركة، عنوان العمل، رقم التعريف الضريبي (حيثما ينطبق)</li>
                <li><strong>تفاصيل الاتصال:</strong> الاسم، البريد الإلكتروني، رقم الهاتف، جهة اتصال واتساب</li>
                <li><strong>معلومات الطلب:</strong> اختيارات المنتج، الكميات، عنوان الشحن، سجل الطلبات</li>
                <li><strong>بيانات الاتصال:</strong> الرسائل والاستفسارات المرسلة عبر موقعنا أو واتساب</li>
                <li><strong>البيانات التقنية:</strong> عنوان IP، نوع المتصفح، معلومات الجهاز، وأنماط استخدام الموقع</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>٣. كيفية استخدام معلوماتك</h2>
              <p>تُستخدم معلوماتك فقط لأغراض تجارية مشروعة تتعلق بعمليات الجملة لدينا:</p>
              <ul>
                <li>معالجة وتنفيذ طلبات الجملة الخاصة بك</li>
                <li>التواصل معك بخصوص طلباتك واستفساراتك</li>
                <li>تقديم الدعم والمساعدة للعملاء</li>
                <li>إدارة ترتيبات الشحن والتسليم</li>
                <li>إرسال تحديثات مهمة حول حسابك أو طلباتك</li>
                <li>تحسين موقعنا وخدماتنا</li>
                <li>الامتثال للمتطلبات القانونية والتنظيمية</li>
              </ul>
              <div className="info-box">
                <p><strong>🔒 ملاحظة:</strong> نحن لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة لأغراض تسويقية. تُستخدم بياناتك حصريًا لخدمة احتياجات الجملة الخاصة بك.</p>
              </div>
            </div>

            <div className="privacy-section">
              <h2>٤. مشاركة معلوماتك</h2>
              <p>قد نشارك معلوماتك مع أطراف ثالثة موثوقة فقط عند الضرورة لتنفيذ طلباتك:</p>
              <ul>
                <li><strong>شركاء الشحن:</strong> لتوصيل طلباتك إلى عنوانك المحدد</li>
                <li><strong>معالجي المدفوعات:</strong> لمعالجة مدفوعاتك بشكل آمن</li>
                <li><strong>السلطات القانونية:</strong> عندما يقتضي القانون ذلك أو لحماية حقوقنا</li>
              </ul>
              <p>جميع مقدمي الخدمات من الأطراف الثالثة ملزمون تعاقديًا بحماية معلوماتك واستخدامها فقط للأغراض المحددة.</p>
            </div>

            <div className="privacy-section">
              <h2>٥. أمان البيانات</h2>
              <p>نحن ننفذ تدابير تقنية وتنظيمية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الكشف أو التدمير. تشمل هذه التدابير:</p>
              <ul>
                <li>تشفير SSL لنقل البيانات</li>
                <li>تقييمات وتحديثات أمنية منتظمة</li>
                <li>الوصول المقيد إلى المعلومات الشخصية</li>
                <li>أنظمة تخزين آمنة وبروتوكولات حماية البيانات</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>٦. ملفات تعريف الارتباط وتقنيات التتبع</h2>
              <p>يستخدم موقعنا ملفات تعريف الارتباط وتقنيات تتبع مماثلة لتعزيز تجربة التصفح الخاصة بك. تساعدنا ملفات تعريف الارتباط في فهم كيفية تفاعل الزوار مع موقعنا، مما يسمح لنا بتحسين الوظائف وتجربة المستخدم. يمكنك ضبط إعدادات المتصفح لرفض ملفات تعريف الارتباط، على الرغم من أن هذا قد يؤثر على某些 ميزات الموقع.</p>
              <p>نستخدم ملفات تعريف الارتباط للوظائف الأساسية مثل:</p>
              <ul>
                <li>تذكر اختيارات سلة التسوق الخاصة بك</li>
                <li>الحفاظ على جلستك أثناء التصفح</li>
                <li>تحليل حركة المرور على الموقع والأداء</li>
                <li>تخزين تفضيلات اللغة والعملة</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>٧. الاحتفاظ بالبيانات</h2>
              <p>نحن نحتفظ بمعلوماتك الشخصية طالما كان ذلك ضروريًا لتحقيق الأهداف الموضحة في سياسة الخصوصية هذه، ما لم تكن فترة احتفاظ أطول مطلوبة أو مسموح بها بموجب القانون. يتم عادةً الاحتفاظ بمعلومات الطلب لحفظ السجلات التجارية ولمعالجة أي مشكلات محتملة مع طلباتك.</p>
            </div>

            <div className="privacy-section">
              <h2>٨. حقوقك</h2>
              <p>كعميل قيم، لديك حقوق معينة فيما يتعلق بمعلوماتك الشخصية:</p>
              <ul>
                <li><strong>الوصول:</strong> طلب نسخة من المعلومات التي نحتفظ بها عنك</li>
                <li><strong>التصحيح:</strong> طلب تصحيح أي معلومات غير دقيقة أو غير كاملة</li>
                <li><strong>الحذف:</strong> طلب حذف معلوماتك الشخصية، مع مراعاة الالتزامات القانونية</li>
                <li><strong>الاعتراض:</strong> الاعتراض على أنشطة معالجة معينة</li>
                <li><strong>قابلية النقل:</strong> طلب نقل بياناتك إلى مزود خدمة آخر</li>
              </ul>
              <p>لممارسة أي من هذه الحقوق، يرجى الاتصال بنا من خلال نموذج الاتصال في موقعنا.</p>
            </div>

            <div className="privacy-section">
              <h2>٩. نقل البيانات الدولي</h2>
              <p>كمورد جملة دولي، قد يتم نقل معلوماتك إلى ومعالجتها في بلدان خارج مكان إقامتك. نضمن وجود ضمانات مناسبة لحماية بياناتك وفقًا لقوانين الخصوصية المعمول بها.</p>
            </div>

            <div className="privacy-section">
              <h2>١٠. خصوصية الأطفال</h2>
              <p>خدماتنا مخصصة لعملاء الأعمال وليست موجهة للأفراد دون سن 18 عامًا. نحن لا نجمع عن قصد معلومات شخصية من الأطفال. إذا كنت تعتقد أن طفلاً قد قدم لنا معلومات شخصية، يرجى الاتصال بنا على الفور.</p>
            </div>

            <div className="privacy-section">
              <h2>١١. تغييرات على هذه السياسة</h2>
              <p>قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في ممارساتنا أو المتطلبات القانونية. سيتم نشر أي تعديلات على هذه الصفحة مع تاريخ سريان محدث. نشجعك على مراجعة هذه السياسة بشكل دوري.</p>
            </div>

            <div className="privacy-section">
              <h2>١٢. معلومات الاتصال</h2>
              <p>إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو كيفية تعاملنا مع معلوماتك الشخصية، يرجى التواصل معنا:</p>
              <ul>
                <li><strong>واتساب:</strong> +90 551 952 24 48</li>
                <li><strong>نموذج الاتصال:</strong> متاح على موقعنا</li>
              </ul>
              <p>فريقنا متاح لمساعدتك في أي مخاوف متعلقة بالخصوصية.</p>
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