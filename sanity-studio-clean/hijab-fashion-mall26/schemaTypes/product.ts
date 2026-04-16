// schemaTypes/product.ts

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  
  fields: [
    // ============================================
    // 1. معلومات أساسية
    // ============================================
    {
      name: 'product_code',
      title: 'Product Code',
      type: 'string',
    },
    {
      name: 'price_usd',
      title: 'Price (USD)',
      type: 'number',
    },
    {
      name: 'pcs_per_packet',
      title: 'Pieces per Packet',
      type: 'number',
      initialValue: 1,
    },
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'string',
    },
    
    // ============================================
    // 2. الصور
    // ============================================
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    },
    {
      name: 'imageUrl',
      title: 'Main Image URL (Legacy - سيتم حذفه)',
      type: 'string',
      description: '⚠️ حقل قديم للتوافق المؤقت فقط',
      hidden: true,
    },
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'alt_text',
      title: 'Alt Text',
      type: 'string',
      description: 'Generated automatically from product name',
    },
    
    // ============================================
    // 3. الأسماء (6 لغات)
    // ============================================
    { name: 'name_en', title: 'Name (English)', type: 'string' },
    { name: 'name_ar', title: 'Name (Arabic)', type: 'string' },
    { name: 'name_de', title: 'Name (German)', type: 'string' },
    { name: 'name_fr', title: 'Name (French)', type: 'string' },
    { name: 'name_it', title: 'Name (Italian)', type: 'string' },
    { name: 'name_es', title: 'Name (Spanish)', type: 'string' },
    
    // ============================================
    // 4. الروابط (Slugs)
    // ============================================
    { name: 'slug_en', title: 'Slug (English)', type: 'string' },
    { name: 'slug_ar', title: 'Slug (Arabic)', type: 'string' },
    { name: 'slug_de', title: 'Slug (German)', type: 'string' },
    { name: 'slug_fr', title: 'Slug (French)', type: 'string' },
    { name: 'slug_it', title: 'Slug (Italian)', type: 'string' },
    { name: 'slug_es', title: 'Slug (Spanish)', type: 'string' },
    
    // ============================================
    // 5. التصنيفات (6 لغات)
    // ============================================
    { name: 'category_main_en', title: 'Category (English)', type: 'string' },
    { name: 'category_main_ar', title: 'Category (Arabic)', type: 'string' },
    { name: 'category_main_de', title: 'Category (German)', type: 'string' },
    { name: 'category_main_fr', title: 'Category (French)', type: 'string' },
    { name: 'category_main_it', title: 'Category (Italian)', type: 'string' },
    { name: 'category_main_es', title: 'Category (Spanish)', type: 'string' },
    
    // ============================================
    // 6. الألوان (6 لغات)
    // ============================================
    { name: 'color_en', title: 'Color (English)', type: 'string' },
    { name: 'color_ar', title: 'Color (Arabic)', type: 'string' },
    { name: 'color_de', title: 'Color (German)', type: 'string' },
    { name: 'color_fr', title: 'Color (French)', type: 'string' },
    { name: 'color_it', title: 'Color (Italian)', type: 'string' },
    { name: 'color_es', title: 'Color (Spanish)', type: 'string' },
    
    // ============================================
    // 7. الأقمشة (6 لغات)
    // ============================================
    { name: 'fabric_en', title: 'Fabric (English)', type: 'string' },
    { name: 'fabric_ar', title: 'Fabric (Arabic)', type: 'string' },
    { name: 'fabric_de', title: 'Fabric (German)', type: 'string' },
    { name: 'fabric_fr', title: 'Fabric (French)', type: 'string' },
    { name: 'fabric_it', title: 'Fabric (Italian)', type: 'string' },
    { name: 'fabric_es', title: 'Fabric (Spanish)', type: 'string' },
    
    // ============================================
    // 8. الأوصاف الطويلة (6 لغات)
    // ============================================
    { name: 'description_en', title: 'Description (English)', type: 'text' },
    { name: 'description_ar', title: 'Description (Arabic)', type: 'text' },
    { name: 'description_de', title: 'Description (German)', type: 'text' },
    { name: 'description_fr', title: 'Description (French)', type: 'text' },
    { name: 'description_it', title: 'Description (Italian)', type: 'text' },
    { name: 'description_es', title: 'Description (Spanish)', type: 'text' },
    
    // ============================================
    // 9. الأوصاف القصيرة (6 لغات)
    // ============================================
    { name: 'short_description_en', title: 'Short Description (English)', type: 'string' },
    { name: 'short_description_ar', title: 'Short Description (Arabic)', type: 'string' },
    { name: 'short_description_de', title: 'Short Description (German)', type: 'string' },
    { name: 'short_description_fr', title: 'Short Description (French)', type: 'string' },
    { name: 'short_description_it', title: 'Short Description (Italian)', type: 'string' },
    { name: 'short_description_es', title: 'Short Description (Spanish)', type: 'string' },
    
    // ============================================
    // 10. Meta Tags
    // ============================================
    { name: 'meta_title_en', title: 'Meta Title (English)', type: 'string' },
    { name: 'meta_title_ar', title: 'Meta Title (Arabic)', type: 'string' },
    { name: 'meta_title_de', title: 'Meta Title (German)', type: 'string' },
    { name: 'meta_title_fr', title: 'Meta Title (French)', type: 'string' },
    { name: 'meta_title_it', title: 'Meta Title (Italian)', type: 'string' },
    { name: 'meta_title_es', title: 'Meta Title (Spanish)', type: 'string' },
    
    { name: 'meta_description_en', title: 'Meta Description (English)', type: 'text' },
    { name: 'meta_description_ar', title: 'Meta Description (Arabic)', type: 'text' },
    { name: 'meta_description_de', title: 'Meta Description (German)', type: 'text' },
    { name: 'meta_description_fr', title: 'Meta Description (French)', type: 'text' },
    { name: 'meta_description_it', title: 'Meta Description (Italian)', type: 'text' },
    { name: 'meta_description_es', title: 'Meta Description (Spanish)', type: 'text' },
    
    // ============================================
    // 11. RSS و Plus Sizes
    // ============================================
    {
      name: 'rss',
      title: 'RSS Type',
      type: 'string',
      options: {
        list: [
          { title: 'Single Piece (قطعة واحدة)', value: 'single' },
          { title: 'Packet / Carton', value: 'packet' }
        ]
      }
    },
    {
      name: 'plus_sizes',
      title: 'Plus Sizes Available',
      type: 'string',
      options: {
        list: [
          { title: 'Yes', value: 'Yes' },
          { title: 'No', value: 'No' }
        ]
      }
    },
    
    // ============================================
    // 12. حالة المنتج
    // ============================================
    {
      name: 'is_new',
      title: 'New Product',
      type: 'string',
      options: { list: [{ title: 'Yes', value: 'Yes' }, { title: 'No', value: 'No' }] },
      initialValue: 'No'
    },
    {
      name: 'is_bestseller',
      title: 'Bestseller',
      type: 'string',
      options: { list: [{ title: 'Yes', value: 'Yes' }, { title: 'No', value: 'No' }] },
      initialValue: 'No'
    },
    {
      name: 'stock_status',
      title: 'Stock Status',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'in_stock' },
          { title: 'Out of Stock', value: 'out_of_stock' }
        ]
      },
      initialValue: 'in_stock'
    },
    
    // ============================================
    // 13. معلومات إضافية
    // ============================================
    { name: 'collection', title: 'Collection', type: 'string' }
  ],  // ✅ نهاية fields - هنا تنتهي
  
  // ============================================
  // 14. Preview (خارج fields)
  // ============================================
  preview: {
    select: {
      title: 'name_en',
      subtitle: 'product_code',
      mainImage: 'mainImage',
      galleryImage: 'images.0'
    },
    prepare(selection: any) {
      const { title, subtitle, mainImage, galleryImage } = selection
      return {
        title: title || 'Untitled',
        subtitle: subtitle || '',
        media: mainImage || galleryImage
      }
    }
  }
}