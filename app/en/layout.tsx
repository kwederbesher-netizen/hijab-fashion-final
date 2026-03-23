// app/en/layout.tsx
import { CurrencyProvider } from '@/app/contexts/CurrencyContext'
import ClientLayout from '@/app/components/ClientLayout'

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CurrencyProvider>
      <ClientLayout>
        {children}
      </ClientLayout>
    </CurrencyProvider>
  )
}