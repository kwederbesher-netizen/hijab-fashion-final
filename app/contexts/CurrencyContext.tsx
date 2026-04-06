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
  getCurrencyDisplayName: (curr: Currency) => string
  getCurrencyShortName: (curr: Currency) => string
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined)

// ============================================
// رموز العملات - إنجليزية للصفحة الإنجليزية
// ============================================
const englishSymbols: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  TRY: '₺',
  GBP: '£',
  SAR: 'SR',
  AED: 'AED',
  CAD: 'C$',
  AUD: 'A$',
  OMR: 'OMR',
  BHD: 'BHD',
  KWD: 'KWD',
  LYD: 'LYD',
  DZD: 'DZD'
}

// ============================================
// رموز العملات - عربية للصفحة العربية
// ============================================
const arabicSymbols: Record<Currency, string> = {
  USD: '$',
  EUR: '€',
  TRY: '₺',
  GBP: '£',
  SAR: '﷼',
  AED: 'د.إ',
  CAD: 'C$',
  AUD: 'A$',
  OMR: '﷼',
  BHD: 'د.ب',
  KWD: 'د.ك',
  LYD: 'ل.د',
  DZD: 'د.ج'
}

// ============================================
// أسماء العملات - الإنجليزية
// ============================================
const currencyNamesEn: Record<Currency, string> = {
  USD: 'US Dollar',
  EUR: 'Euro',
  TRY: 'Turkish Lira',
  GBP: 'British Pound',
  SAR: 'Saudi Riyal',
  AED: 'UAE Dirham',
  CAD: 'Canadian Dollar',
  AUD: 'Australian Dollar',
  OMR: 'Omani Rial',
  BHD: 'Bahraini Dinar',
  KWD: 'Kuwaiti Dinar',
  LYD: 'Libyan Dinar',
  DZD: 'Algerian Dinar'
}

// ============================================
// أسماء العملات - العربية
// ============================================
const currencyNamesAr: Record<Currency, string> = {
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

// ============================================
// أسماء العملات المختصرة للقائمة - الإنجليزية
// ============================================
const currencyShortNamesEn: Record<Currency, string> = {
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

// ============================================
// أسماء العملات المختصرة للقائمة - العربية
// ============================================
const currencyShortNamesAr: Record<Currency, string> = {
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

// الأسعار الافتراضية
const DEFAULT_RATES: Record<Currency, number> = {
  USD: 1,
  EUR: 0.92,
  TRY: 34.5,
  GBP: 0.79,
  SAR: 3.75,
  AED: 3.67,
  CAD: 1.38,
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

  useEffect(() => {
    async function fetchRates() {
      try {
        const savedCurrency = localStorage.getItem('preferredCurrency') as Currency | null
        if (savedCurrency && Object.keys(englishSymbols).includes(savedCurrency)) {
          setCurrency(savedCurrency)
        }
        
        const response = await fetch('/api/currencies')
        const data = await response.json()
        
        if (data) {
          setRates(data)
        }
      } catch (error) {
        console.error('Error loading rates:', error)
        setRates(DEFAULT_RATES)
      } finally {
        setLoading(false)
      }
    }
    
    fetchRates()
  }, [])

  const handleSetCurrency = (newCurrency: Currency) => {
    setCurrency(newCurrency)
    localStorage.setItem('preferredCurrency', newCurrency)
  }

  const convertPrice = (priceInUSD: number): number => {
    if (isNaN(priceInUSD) || priceInUSD === null || priceInUSD === undefined) return 0
    const rate = rates[currency] || rates.USD || 1
    return priceInUSD * rate
  }

  // تنسيق السعر - رموز إنجليزية للصفحة الإنجليزية، رموز عربية للصفحة العربية
  const formatPrice = (priceInUSD: number): string => {
    const converted = convertPrice(priceInUSD)
    
    const needsThreeDecimals = ['LYD', 'DZD', 'KWD', 'BHD', 'OMR'].includes(currency)
    const formattedNumber = needsThreeDecimals ? converted.toFixed(3) : converted.toFixed(2)
    
    // اختيار الرموز حسب اللغة
    const symbol = isArabic ? arabicSymbols[currency] : englishSymbols[currency]
    
    if (isArabic) {
      return `${formattedNumber} ${symbol}`
    }
    return `${symbol} ${formattedNumber}`
  }

  // دالة للحصول على اسم العملة للعرض (طويل)
  const getCurrencyDisplayName = (curr: Currency): string => {
    return isArabic ? currencyNamesAr[curr] : currencyNamesEn[curr]
  }

  // دالة للحصول على الاسم المختصر للقائمة المنسدلة
  const getCurrencyShortName = (curr: Currency): string => {
    return isArabic ? currencyShortNamesAr[curr] : currencyShortNamesEn[curr]
  }

  return (
    <CurrencyContext.Provider value={{
      currency,
      setCurrency: handleSetCurrency,
      formatPrice,
      convertPrice,
      rates,
      loading,
      getCurrencyDisplayName,
      getCurrencyShortName,
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