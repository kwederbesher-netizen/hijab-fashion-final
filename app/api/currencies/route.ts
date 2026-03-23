// app/api/currencies/route.ts
import { NextResponse } from 'next/server'

// تخزين مؤقت للعملات
let cachedRates: any = null
let lastFetchTime: number = 0
const CACHE_DURATION = 6 * 60 * 60 * 1000 // 6 ساعات

export async function GET() {
  console.log('API العملات تم استدعاؤها')
  
  try {
    const now = Date.now()
    
    // إذا كان التخزين المؤقت لا يزال صالحاً
    if (cachedRates && (now - lastFetchTime) < CACHE_DURATION) {
      console.log('استخدام العملات المخزنة مؤقتاً')
      return NextResponse.json(cachedRates)
    }
    
    // استخدام API مجاني
    console.log('جلب عملات جديدة من API الخارجي')
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD')
    const data = await response.json()
    
    if (data && data.rates) {
      cachedRates = {
        USD: 1,
        EUR: data.rates.EUR || 0.92,
        TRY: data.rates.TRY || 32.5,
        GBP: data.rates.GBP || 0.79,
        SAR: data.rates.SAR || 3.75,
        AED: data.rates.AED || 3.67,
        KWD: data.rates.KWD || 0.31,
        QAR: data.rates.QAR || 3.64
      }
      lastFetchTime = now
      console.log('تم تحديث العملات:', cachedRates)
      return NextResponse.json(cachedRates)
    }
    
    // في حالة الفشل، أعد آخر تحديث
    if (cachedRates) {
      console.log('فشل التحديث، استخدام آخر عملات مخزنة')
      return NextResponse.json(cachedRates)
    }
    
    // قيم افتراضية (fallback)
    const defaultRates = {
      USD: 1,
      EUR: 0.92,
      TRY: 32.5,
      GBP: 0.79,
      SAR: 3.75,
      AED: 3.67,
      KWD: 0.31,
      QAR: 3.64
    }
    console.log('استخدام القيم الافتراضية للعملات')
    return NextResponse.json(defaultRates)
    
  } catch (error) {
    console.error('خطأ في جلب العملات:', error)
    // في حالة الخطأ، أعد آخر تحديث
    if (cachedRates) {
      return NextResponse.json(cachedRates)
    }
    // أو قيم افتراضية
    return NextResponse.json({
      USD: 1,
      EUR: 0.92,
      TRY: 32.5,
      GBP: 0.79,
      SAR: 3.75,
      AED: 3.67,
      KWD: 0.31,
      QAR: 3.64
    })
  }
}