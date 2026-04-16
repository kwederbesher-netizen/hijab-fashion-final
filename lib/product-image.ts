// lib/product-image.ts
import { urlFor } from './sanity'

export interface GetProductImageOptions {
  width?: number
  height?: number
}

export function getProductImage(
  mainImage?: any,
  fallbackUrl?: string | null,
  options?: GetProductImageOptions,
  galleryImages?: any[]
): string {
  const { width = 600 } = options || {}
  
  // 🎯 الأولوية 1: استخدام أول صورة من galleryImages
  if (galleryImages && galleryImages.length > 0 && galleryImages[0]?.asset?._ref) {
    try {
      const url = urlFor(galleryImages[0])
        ?.width(width)
        .fit('max')
        .auto('format')
        .url()
      if (url) return url
    } catch (e) {
      console.warn('فشل في توليد رابط من galleryImages:', e)
    }
  }
  
  // 🎯 الأولوية 2: استخدام mainImage (إذا تم ترحيله لاحقاً)
  if (mainImage?.asset?._ref) {
    try {
      const url = urlFor(mainImage)
        ?.width(width)
        .fit('max')
        .auto('format')
        .url()
      if (url) return url
    } catch (e) {
      console.warn('فشل في توليد رابط من mainImage:', e)
    }
  }
  
  // 🎯 الأولوية 3: استخدام imageUrl القديم
  if (fallbackUrl && typeof fallbackUrl === 'string' && fallbackUrl.startsWith('http')) {
    return fallbackUrl
  }
  
  // 🎯 الصورة الافتراضية
  return '/images/default.webp'
}

export function getProductGallery(product: { images?: any[] }): string[] {
  if (!product.images || product.images.length === 0) {
    return ['/images/default.webp']
  }
  
  const urls = product.images
    .map(img => {
      if (!img?.asset?._ref) return null
      try {
        return urlFor(img)?.width(800).fit('max').auto('format').url() || null
      } catch {
        return null
      }
    })
    .filter((url): url is string => url !== null)
  
  return urls.length ? urls : ['/images/default.webp']
}

export function getProductImageWithDimensions(
  mainImage?: any,
  fallbackUrl?: string | null,
  width: number = 600,
  height?: number,
  galleryImages?: any[]
): string {
  return getProductImage(mainImage, fallbackUrl, { width, height }, galleryImages)
}