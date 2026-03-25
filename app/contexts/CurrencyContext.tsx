// app/contexts/CurrencyContext.tsx
'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { usePathname } from 'next/navigation'

type Currency = 'USD' | 'EUR' | 'TRY' | 'GBP' | 'SAR' | 'AED' | 'CAD' | 'AUD' | 'OMR' | 'BHD' | 'KWD' | 'LYD' | 'DZD'

interface CurrencyContextType {
  currency: Currency
  setCurrency: (currency: Currency) => void
  formatPrice: (priceInUSD: number) => string
  convertPrice: (priceInUSD: number) => number
  rates: Record<string, number>
  loading: boolean
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

// رموز العملات باللغة الإنجليزية (مختصرة)
const currencySymbolsEn: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  TRY: '₺',
  GBP: '£',
  SAR: '﷼',
  AED: 'د.إ',
  CAD: 'C$',
  AUD: 'A$',
  OMR: '﷼',
  BHD: 'BD',
  KWD: 'KD',
  LYD: 'LD',
  DZD: 'DA'
}

// أسماء العملات بالعربية للعرض
const currencySymbolsAr: Record<Currency, string> = {
  USD: 'دولار أمريكي',
  EUR: 'يورو',
  TRY: 'ليرة تركية',
  GBP: 'جنيه إسترليني',
  SAR: 'ريال سعودي',
  AED: 'درهم إماراتي',
  CAD: 'دولار كندي',
  AUD: 'دولار أسترالي',
  OMR: 'ريال عماني',
  BHD: 'دينار بحريني',
  KWD: 'دينار كويتي',
  LYD: 'دينار ليبي',
  DZD: 'دينار جزائري'
}

// أسماء العملات بالإنجليزية للقائمة المنسدلة
const currencyNamesEn: Record<Currency, string> = {
  USD: '🇺🇸 USD',
  EUR: '🇪🇺 EUR',
  TRY: '🇹🇷 TRY',
  GBP: '🇬🇧 GBP',
  SAR: '🇸🇦 SAR',
  AED: '🇦🇪 AED',
  CAD: '🇨🇦 CAD',
  AUD: '🇦🇺 AUD',
  OMR: '🇴🇲 OMR',
  BHD: '🇧🇭 BHD',
  KWD: '🇰🇼 KWD',
  LYD: '🇱🇾 LYD',
  DZD: '🇩🇿 DZD'
}

// أسماء العملات بالعربية للقائمة المنسدلة
const currencyNamesAr: Record<Currency, string> = {
  USD: '🇺🇸 دولار أمريكي',
  EUR: '🇪🇺 يورو',
  TRY: '🇹🇷 ليرة تركية',
  GBP: '🇬🇧 جنيه إسترليني',
  SAR: '🇸🇦 ريال سعودي',
  AED: '🇦🇪 درهم إماراتي',
  CAD: '🇨🇦 دولار كندي',
  AUD: '🇦🇺 دولار أسترالي',
  OMR: '🇴🇲 ريال عماني',
  BHD: '🇧🇭 دينار بحريني',
  KWD: '🇰🇼 دينار كويتي',
  LYD: '🇱🇾 دينار ليبي',
  DZD: '🇩🇿 دينار جزائري'
}

// الأسعار الافتراضية (fallback)
const DEFAULT_RATES: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  TRY: 32.5,
  GBP: 0.79,
  SAR: 3.75,
  AED: 3.67,
  CAD: 1.35,
  AUD: 1.52,
  OMR: 0.38,
  BHD: 0.38,
  KWD: 0.31,
  LYD: 4.83,
  DZD: 134.5
}

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isArabic = pathname?.startsWith('/ar')
  
  const [currency, setCurrency] = useState<Currency>('USD')
  const [rates, setRates] = useState<Record<string, number>>(DEFAULT_RATES)
  const [loading, setLoading] = useState(true)

  // تحميل العملات من API
  useEffect(() => {
    async function fetchRates() {
      try {
        const savedCurrency = localStorage.getItem('preferredCurrency') as Currency | null
        if (savedCurrency && Object.keys(currencySymbolsEn).includes(savedCurrency)) {
          setCurrency(savedCurrency)
        }
        
        const response = await fetch('/api/currencies')
        const data = await response.json()
        
        if (data) {
          setRates(data)
          console.log('✅ تم تحميل العملات:', data)
        }
      } catch (error) {
        console.error('❌ خطأ في تحميل العملات:', error)
        setRates(DEFAULT_RATES)
      } finally {
        setLoading(false)
      }
    }
    
    fetchRates()
  }, [])

  // حفظ العملة المختارة
  const handleSetCurrency = (newCurrency: Currency) => {
    setCurrency(newCurrency)
    localStorage.setItem('preferredCurrency', newCurrency)
  }

  // تحويل السعر
  const convertPrice = (priceInUSD: number): number => {
    if (isNaN(priceInUSD) || priceInUSD === null || priceInUSD === undefined) return 0
    const rate = rates[currency] || rates.USD || 1
    return priceInUSD * rate
  }

  // تنسيق السعر مع الرمز حسب اللغة
  const formatPrice = (priceInUSD: number): string => {
    const converted = convertPrice(priceInUSD)
    
    // في الصفحة العربية: نستخدم الأسماء العربية
    if (isArabic) {
      const symbol = currencySymbolsAr[currency]
      // تنسيق خاص للعملات التي تحتاج 3 أرقام عشرية
      if (currency === 'LYD' || currency === 'DZD' || currency === 'KWD' || currency === 'BHD' || currency === 'OMR') {
        return `${converted.toFixed(3)} ${symbol}`
      }
      return `${converted.toFixed(2)} ${symbol}`
    }
    
    // في الصفحة الإنجليزية: نستخدم الرموز المختصرة
    const symbol = currencySymbolsEn[currency]
    // تنسيق خاص للعملات التي تحتاج 3 أرقام عشرية
    if (currency === 'LYD' || currency === 'DZD' || currency === 'KWD' || currency === 'BHD' || currency === 'OMR') {
      return `${symbol} ${converted.toFixed(3)}`
    }
    return `${symbol} ${converted.toFixed(2)}`
  }

  // الحصول على اسم العملة للعرض في القائمة المنسدلة
  const getCurrencyDisplayName = (curr: Currency): string => {
    return isArabic ? currencyNamesAr[curr] : currencyNamesEn[curr]
  }

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency: handleSetCurrency,
      formatPrice,
      convertPrice,
      rates,
      loading
    }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  const context = useContext(CurrencyContext)
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider')
  }
  return context
}

// تصدير دالة مساعدة للحصول على اسم العملة للعرض
export function useCurrencyDisplay() {
  const { currency } = useCurrency()
  const pathname = usePathname()
  const isArabic = pathname?.startsWith('/ar')
  
  const getDisplayName = () => {
    return isArabic ? currencyNamesAr[currency] : currencyNamesEn[currency]
  }
  
  return { getDisplayName }
}