// app/ar/privacy-policy/page.tsx
'use client'

import Link from 'next/link'
import Head from 'next/head'

export default function PrivacyPolicyPageAr() {
  return (
    <>
      <Head>
        <title>سياسة الخصوصية - حجاب فاشون مول | جملة ملابس محجبات تركية</title>
        <meta name="description" content="تعرف على كيفية جمع واستخدام وحماية معلوماتك الشخصية في حجاب فاشون مول. سياسة الخصوصية لعملاء الجملة وزوار الموقع." />
        <meta name="keywords" content="سياسة الخصوصية, حماية البيانات, معلومات شخصية, خصوصية الجملة" />
        <link rel="canonical" href="https://hijabfashionmall.com/ar/privacy-policy" />
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
          text-align: right;
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
            <li style={{ fontSize: '14px', color: '#000', fontWeight: 600 }}>سياسة الخصوصية</li>
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
              <p>في حجاب فاشون مول، نحن نقدر خصوصيتك وملتزمون بحماية معلوماتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية بياناتك عند زيارتك لموقعنا الإلكتروني أو تقديم طلبات الجملة معنا. باستخدام خدماتك، فإنك توافق على الممارسات الموضحة في هذه السياسة.</p>
              <p>نحن نعمل كمورد جملة لملابس المحجبات التركية، نخدم تجار التجزئة والمتاجر حول العالم. التزامنا بحماية البيانات يضمن بقاء معلوماتك آمنة أثناء تعاملك معنا.</p>
            </div>

            <div className="privacy-section">
              <h2>٢. المعلومات التي نجمعها</h2>
              <p>نجمع المعلومات التي تساعدنا في معالجة طلباتك وتحسين خدماتنا. تشمل أنواع المعلومات التي قد نجمعها:</p>
              <ul>
                <li><strong>معلومات العمل:</strong> اسم الشركة، عنوان العمل، رقم التسجيل الضريبي (حسب الاقتضاء)</li>
                <li><strong>بيانات الاتصال:</strong> الاسم، البريد الإلكتروني، رقم الهاتف، جهة اتصال واتساب</li>
                <li><strong>معلومات الطلب:</strong> اختيارات المنتج، الكميات، عنوان الشحن، سجل الطلبات</li>
                <li><strong>بيانات التواصل:</strong> الرسائل والاستفسارات المرسلة عبر موقعنا أو واتساب</li>
                <li><strong>البيانات التقنية:</strong> عنوان IP، نوع المتصفح، معلومات الجهاز، أنماط استخدام الموقع</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>٣. كيفية استخدام معلوماتك</h2>
              <p>تُستخدم معلوماتك فقط للأغراض التجارية المشروعة المتعلقة بعمليات الجملة:</p>
              <ul>
                <li>معالجة وتنفيذ طلبات الجملة الخاصة بك</li>
                <li>التواصل معك بشأن طلباتك واستفساراتك</li>
                <li>تقديم الدعم والمساعدة للعملاء</li>
                <li>إدارة ترتيبات الشحن والتوصيل</li>
                <li>إرسال تحديثات مهمة حول حسابك أو طلباتك</li>
                <li>تحسين موقعنا وخدماتنا</li>
                <li>الامتثال للمتطلبات القانونية والتنظيمية</li>
              </ul>
              <div className="info-box">
                <p><strong>🔒 ملاحظة:</strong> نحن لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة لأغراض تسويقية. تُستخدم بياناتك حصرياً لخدمة احتياجات الجملة الخاصة بك.</p>
              </div>
            </div>

            <div className="privacy-section">
              <h2>٤. مشاركة معلوماتك</h2>
              <p>قد نشارك معلوماتك مع أطراف ثالثة موثوقة فقط عند الضرورة لتنفيذ طلباتك:</p>
              <ul>
                <li><strong>شركاء الشحن:</strong> لتوصيل طلباتك إلى العنوان المحدد</li>
                <li><strong>معالجي الدفع:</strong> لمعالجة مدفوعاتك بشكل آمن</li>
                <li><strong>السلطات القانونية:</strong> عندما يقتضي القانون ذلك أو لحماية حقوقنا</li>
              </ul>
              <p>جميع مقدمي الخدمات من الأطراف الثالثة ملزمون تعاقدياً بحماية معلوماتك واستخدامها فقط للأغراض المحددة.</p>
            </div>

            <div className="privacy-section">
              <h2>٥. أمان البيانات</h2>
              <p>نحن نطبق التدابير التقنية والتنظيمية المناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الإفصاح أو التدمير. تشمل هذه التدابير:</p>
              <ul>
                <li>تشفير SSL لنقل البيانات</li>
                <li>تقييمات أمنية وتحديثات منتظمة</li>
                <li>تقييد الوصول إلى المعلومات الشخصية</li>
                <li>أنظمة تخزين آمنة وبروتوكولات حماية البيانات</li>
              </ul>
            </div>

            <div className="privacy-section">
              <h2>٦. ملفات تعريف الارتباط (الكوكيز)</h2>
              <p>يستخدم موقعنا ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتعزيز تجربة التصفح. تساعدنا ملفات تعريف الارتباط في فهم كيفية تفاعل الزوار مع موقعنا، مما يسمح لنا بتحسين الوظائف وتجربة المستخدم. يمكنك ضبط إعدادات المتصفح لرفض ملفات تعريف الارتباط، على الرغم من أن ذلك قد يؤثر على بعض ميزات الموقع.</p>
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
              <p>نحتفظ بمعلوماتك الشخصية طالما كان ذلك ضرورياً لتحقيق الأغراض الموضحة في سياسة الخصوصية هذه، ما لم تتطلب أو تسمح القوانين بفترة احتفاظ أطول. عادةً ما يتم الاحتفاظ بمعلومات الطلب لحفظ سجلات الأعمال وللتعامل مع أي مشكلات محتملة تتعلق بطلباتك.</p>
            </div>

            <div className="privacy-section">
              <h2>٨. حقوقك</h2>
              <p>كعميل قيم، لديك حقوق معينة فيما يتعلق بمعلوماتك الشخصية:</p>
              <ul>
                <li><strong>الوصول:</strong> طلب نسخة من المعلومات التي نحتفظ بها عنك</li>
                <li><strong>التصحيح:</strong> طلب تصحيح أي معلومات غير دقيقة أو غير كاملة</li>
                <li><strong>الحذف:</strong> طلب حذف معلوماتك الشخصية، مع مراعاة الالتزامات القانونية</li>
                <li><strong>الاعتراض:</strong> الاعتراض على بعض أنشطة المعالجة</li>
                <li><strong>نقل البيانات:</strong> طلب نقل بياناتك إلى مزود خدمة آخر</li>
              </ul>
              <p>لممارسة أي من هذه الحقوق، يرجى التواصل معنا عبر نموذج الاتصال في موقعنا.</p>
            </div>

            <div className="privacy-section">
              <h2>٩. نقل البيانات الدولي</h2>
              <p>بصفتنا مورد جملة دولي، قد يتم نقل معلوماتك ومعالجتها في بلدان خارج بلد إقامتك. نضمن وجود ضمانات مناسبة لحماية بياناتك وفقاً لقوانين الخصوصية المعمول بها.</p>
            </div>

            <div className="privacy-section">
              <h2>١٠. خصوصية الأطفال</h2>
              <p>خدماتنا موجهة للعملاء التجاريين ولا تستهدف الأفراد الذين تقل أعمارهم عن ١٨ عاماً. لا نجمع عن قصد معلومات شخصية من الأطفال. إذا كنت تعتقد أن طفلاً قد قدم لنا معلومات شخصية، يرجى التواصل معنا فوراً.</p>
            </div>

            <div className="privacy-section">
              <h2>١١. التغييرات على هذه السياسة</h2>
              <p>قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر لتعكس التغييرات في ممارساتنا أو المتطلبات القانونية. سيتم نشر أي تعديلات على هذه الصفحة مع تاريخ سريان محدث. نشجعك على مراجعة هذه السياسة بشكل دوري.</p>
            </div>

            <div className="privacy-section">
              <h2>١٢. معلومات الاتصال</h2>
              <p>إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو كيفية تعاملنا مع معلوماتك الشخصية، يرجى التواصل معنا:</p>
              <ul>
                <li><strong>واتساب:</strong> +90 551 952 24 48</li>
                <li><strong>نموذج الاتصال:</strong> متوفر على موقعنا</li>
              </ul>
              <p>فريقنا متاح لمساعدتك في أي استفسارات تتعلق بالخصوصية.</p>
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