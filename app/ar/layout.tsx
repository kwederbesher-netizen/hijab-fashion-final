// app/ar/layout.tsx
import { CurrencyProvider } from '@/app/contexts/CurrencyContext'
import ClientLayoutAr from './components/ClientLayoutAr'

export default function ArabicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Font Awesome - للأيقونات (يجب أن يكون الأول) */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      
      {/* Google Fonts - Tajawal للعربية */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap" rel="stylesheet" />
      
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Tajawal', sans-serif !important;
        }
        
        body {
          font-family: 'Tajawal', sans-serif !important;
          background-color: #fff;
        }

        /* التأكد من ظهور أيقونات Font Awesome */
        .fas, .fab, .far {
          font-family: 'Font Awesome 6 Free' !important;
        }
        
        .fab {
          font-family: 'Font Awesome 6 Brands' !important;
        }
      `}</style>
      
      <CurrencyProvider>
        <ClientLayoutAr>
          {children}
        </ClientLayoutAr>
      </CurrencyProvider>
    </>
  )
}