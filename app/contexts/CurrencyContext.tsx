// app/contexts/CurrencyContext.tsx
'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// تعريف العملات المدعومة
export type Currency = 'USD' | 'EUR' | 'GBP' | 'TRY' | 'SAR' | 'AED'

// تعريف نوع السياق
interface CurrencyContextType {
  currency: Currency
  setCurrency: (currency: Currency) => void
  formatPrice: (price: number) => string
  rates: Record<Currency, number>
  loading: boolean
  error: string | null
}

// سعر الصرف الأساسي (محدث)
const DEFAULT_RATES: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  TRY: 34.5,
  SAR: 3.75,
  AED: 3.67
}

// إنشاء السياق
const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

// Provider Component
export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>('USD')
  const [rates, setRates] = useState<Record<Currency, number>>(DEFAULT_RATES)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // تحميل العملة المحفوظة وأسعار الصرف
  useEffect(() => {
    const loadCurrency = async () => {
      try {
        setLoading(true)
        
        // تحميل العملة المحفوظة من localStorage
        const savedCurrency = localStorage.getItem('currency') as Currency
        if (savedCurrency && DEFAULT_RATES[savedCurrency]) {
          setCurrency(savedCurrency)
        }
        
        // يمكن إضافة API لجلب أسعار الصرف الحقيقية هنا
        // مثال: const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
        // const data = await response.json()
        // setRates(data.rates)
        
        // استخدام الأسعار الافتراضية
        setRates(DEFAULT_RATES)
        setError(null)
      } catch (err) {
        console.error('خطأ في تحميل العملات:', err)
        setError('فشل في تحميل أسعار العملات')
      } finally {
        setLoading(false)
      }
    }
    
    loadCurrency()
  }, [])

  // تحديث العملة وحفظها
  const handleSetCurrency = (newCurrency: Currency) => {
    setCurrency(newCurrency)
    localStorage.setItem('currency', newCurrency)
  }

  // تنسيق السعر حسب العملة المختارة
  const formatPrice = (price: number): string => {
    if (typeof price !== 'number' || isNaN(price)) {
      price = 0
    }
    
    const converted = price * rates[currency]
    
    // تنسيق حسب العملة
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(converted)
  }

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency: handleSetCurrency,
        formatPrice,
        rates,
        loading,
        error
      }}
    >
      {children}
    </CurrencyContext.Provider>
  )
}

// Hook مخصص لاستخدام العملات
export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
}