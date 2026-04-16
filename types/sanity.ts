// ============================================================
// TypeScript Types for Sanity
// ============================================================

export interface SanityImage {
  _type: 'image';
  asset: {
    _type: 'reference';
    _ref: string;
  };
  alt?: string;
  caption?: string;
}

export interface SanitySlug {
  _type: 'slug';
  current: string;
}

export interface Product {
  _id: string;
  _type: 'product';
  product_code: string;
  price_usd: number;
  pcs_per_packet: number;
  sizes: string;
  
  // الصور
  mainImage?: SanityImage | null;
  images?: SanityImage[];
  alt_text?: string;
  
  // الأسماء
  name_en: string;
  name_ar: string;
  name_de?: string;
  name_fr?: string;
  name_it?: string;
  name_es?: string;
  
  // Slugs
  slug_en: string;
  slug_ar: string;
  slug_de?: string;
  slug_fr?: string;
  slug_it?: string;
  slug_es?: string;
  
  // التصنيفات
  category_main_en: string;
  category_main_ar: string;
  category_main_de?: string;
  category_main_fr?: string;
  category_main_it?: string;
  category_main_es?: string;
  
  // الألوان
  color_en: string;
  color_ar: string;
  color_de?: string;
  color_fr?: string;
  color_it?: string;
  color_es?: string;
  
  // الأوصاف
  short_description_en?: string;
  short_description_ar?: string;
  short_description_de?: string;
  short_description_fr?: string;
  short_description_it?: string;
  short_description_es?: string;
  
  description_en?: string;
  description_ar?: string;
  description_de?: string;
  description_fr?: string;
  description_it?: string;
  description_es?: string;
  
  // Meta
  meta_title_en?: string;
  meta_title_ar?: string;
  meta_title_de?: string;
  meta_title_fr?: string;
  meta_title_it?: string;
  meta_title_es?: string;
  
  meta_description_en?: string;
  meta_description_ar?: string;
  meta_description_de?: string;
  meta_description_fr?: string;
  meta_description_it?: string;
  meta_description_es?: string;
  
  // حالات المنتج
  rss: 'single' | 'packet';
  plus_sizes: 'Yes' | 'No';
  is_new: 'Yes' | 'No';
  is_bestseller: 'Yes' | 'No';
  stock_status: 'in_stock' | 'out_of_stock';
  collection?: string;
  
  // حقل قديم (للتوافق المؤقت - سيتم حذفه)
  imageUrl?: string | null;
}