// app/api/currencies/route.ts
import { NextResponse } from 'next/server'

// تخزين مؤقت للعملات
let cachedRates: any = null
let lastFetchTime: number = 0
const CACHE_DURATION = 6 * 60 * 60 * 1000 // 6 ساعات

// القيم الافتراضية للعملات (fallback) - محدثة بأسعار حقيقية
const DEFAULT_RATES = {
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
  LYD: 4.83,   // دينار ليبي
  DZD: 134.5   // دينار جزائري
}

export async function GET() {
  console.log('API العملات تم استدعاؤها')
  
  try {
    const now = Date.now()
    
    // إذا كان التخزين المؤقت لا يزال صالحاً
    if (cachedRates && (now - lastFetchTime) < CACHE_DURATION) {
      console.log('استخدام العملات المخزنة مؤقتاً')
      return NextResponse.json(cachedRates)
    }
    
    // محاولة استخدام عدة APIs
    let ratesData = null
    
    // المحاولة الأولى: Frankfurter API (مجاني ولا يحتاج مفتاح)
    try {
      console.log('محاولة جلب العملات من Frankfurter API...')
      const response = await fetch('https://api.frankfurter.app/latest?from=USD', {
        next: { revalidate: 3600 }
      })
      
      if (response.ok) {
        const data = await response.json()
        if (data && data.rates) {
          ratesData = data.rates
          console.log('✅ تم جلب العملات من Frankfurter API')
        }
      }
    } catch (error) {
      console.log('Frankfurter API failed:', error)
    }
    
    // المحاولة الثانية: ExchangeRate-API (بديل)
    if (!ratesData) {
      try {
        console.log('محاولة جلب العملات من ExchangeRate-API...')
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD', {
          next: { revalidate: 3600 }
        })
        
        if (response.ok) {
          const data = await response.json()
          if (data && data.rates) {
            ratesData = data.rates
            console.log('✅ تم جلب العملات من ExchangeRate-API')
          }
        }
      } catch (error) {
        console.log('ExchangeRate-API failed:', error)
      }
    }
    
    // بناء كائن العملات بالأسعار المطلوبة
    if (ratesData) {
      cachedRates = {
        USD: 1,
        EUR: ratesData.EUR || DEFAULT_RATES.EUR,
        TRY: ratesData.TRY || DEFAULT_RATES.TRY,
        GBP: ratesData.GBP || DEFAULT_RATES.GBP,
        SAR: ratesData.SAR || DEFAULT_RATES.SAR,
        AED: ratesData.AED || DEFAULT_RATES.AED,
        CAD: ratesData.CAD || DEFAULT_RATES.CAD,
        AUD: ratesData.AUD || DEFAULT_RATES.AUD,
        OMR: ratesData.OMR || DEFAULT_RATES.OMR,
        BHD: ratesData.BHD || DEFAULT_RATES.BHD,
        KWD: ratesData.KWD || DEFAULT_RATES.KWD,
        LYD: ratesData.LYD || DEFAULT_RATES.LYD,
        DZD: ratesData.DZD || DEFAULT_RATES.DZD
      }
      lastFetchTime = now
      console.log('✅ تم تحديث العملات:', cachedRates)
      return NextResponse.json(cachedRates)
    }
    
    // في حالة فشل جميع APIs، استخدم القيم الافتراضية
    console.log('⚠️ فشل جلب العملات، استخدام القيم الافتراضية')
    return NextResponse.json(DEFAULT_RATES)
    
  } catch (error) {
    console.error('❌ خطأ في جلب العملات:', error)
    
    // في حالة الخطأ، أعد آخر تحديث مخزن
    if (cachedRates) {
      console.log('استخدام آخر عملات مخزنة')
      return NextResponse.json(cachedRates)
    }
    
    // أو القيم الافتراضية
    console.log('استخدام القيم الافتراضية للعملات')
    return NextResponse.json(DEFAULT_RATES)
  }
}