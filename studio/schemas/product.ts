// D:\hijab-final\studio\schemas\product.ts
export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    // ===== معلومات أساسية =====
    {
      name: 'product_code',
      title: 'Product Code',
      type: 'string',
    },
    {
      name: 'name_en',
      title: 'Name (English)',
      type: 'string',
    },
    {
      name: 'name_ar',
      title: 'Name (Arabic)',
      type: 'string',
    },
    {
      name: 'price_usd',
      title: 'Price (USD)',
      type: 'number',
    },
    
    // ===== التصنيفات =====
    {
      name: 'category_main_en',
      title: 'Category (English)',
      type: 'string',
      options: {
        list: [
          {title: 'Abayas', value: 'Abayas'},
          {title: 'Hijabs', value: 'Hijabs'},
          {title: 'Modest Dresses', value: 'Modest Dresses'},
          {title: 'Modest Evening Dresses', value: 'Modest Evening Dresses'},
          {title: 'Modest Pants Sets', value: 'Modest Pants Sets'},
          {title: 'Modest Skirt Sets', value: 'Modest Skirt Sets'},
          {title: 'Modest Sportswear', value: 'Modest Sportswear'},
          {title: 'Prayer Clothes', value: 'Prayer Clothes'},
          {title: 'Burkini Modest Swimwear', value: 'Burkini Modest Swimwear'}
        ]
      }
    },
    {
      name: 'category_main_ar',
      title: 'Category (Arabic)',
      type: 'string',
      options: {
        list: [
          {title: 'عبايات', value: 'عبايات'},
          {title: 'حجاب', value: 'حجاب'},
          {title: 'فساتين محجبات', value: 'فساتين محجبات'},
          {title: 'فساتين سهرة محجبات', value: 'فساتين سهرة محجبات'},
          {title: 'طقم بنطلون محجبات', value: 'طقم بنطلون محجبات'},
          {title: 'طقم تنورة محجبات', value: 'طقم تنورة محجبات'},
          {title: 'ملابس رياضية محجبات', value: 'ملابس رياضية محجبات'},
          {title: 'ملابس صلاة', value: 'ملابس صلاة'},
          {title: 'بوركيني ملابس سباحة محجبات', value: 'بوركيني ملابس سباحة محجبات'}
        ]
      }
    },
    
    // ===== الألوان =====
    {
      name: 'color_en',
      title: 'Color (English)',
      type: 'string',
    },
    {
      name: 'color_ar',
      title: 'Color (Arabic)',
      type: 'string',
    },
    
    // ===== المقاسات =====
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'string',
      description: 'Example: 38 40 42 44 46',
    },
    {
      name: 'pcs_per_packet',
      title: 'Pieces per Packet',
      type: 'string',
    },
    
    // ===== الصور =====
    {
      name: 'main_image',
      title: 'Main Image Number',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    
    // ===== الوصف =====
    {
      name: 'description_en',
      title: 'Description (English)',
      type: 'text',
    },
    {
      name: 'description_ar',
      title: 'Description (Arabic)',
      type: 'text',
    },
    
    // ===== Alt Text للصور =====
    {
      name: 'alt_text_en',
      title: 'Alt Text (English)',
      type: 'string',
    },
    {
      name: 'alt_text_ar',
      title: 'Alt Text (Arabic)',
      type: 'string',
    },
    
    // ===== العلامات (Badges) =====
    {
      name: 'is_new',
      title: 'Is New',
      type: 'string',
      options: {
        list: [
          {title: 'Yes', value: 'Yes'},
          {title: 'No', value: ''}
        ]
      }
    },
    {
      name: 'is_bestseller',
      title: 'Is Bestseller',
      type: 'string',
      options: {
        list: [
          {title: 'Yes', value: 'Yes'},
          {title: 'No', value: ''}
        ]
      }
    },
    
    // ===== RSS / Plus Sizes =====
    {
      name: 'plus_sizes',
      title: 'Plus Sizes',
      type: 'string',
      options: {
        list: [
          {title: 'Yes', value: 'Yes'},
          {title: 'No', value: ''}
        ]
      }
    },
    {
      name: 'rss_not_rss_message_en',
      title: 'RSS/Not RSS Message (English)',
      type: 'string',
      description: 'Example: ✅ Available as single piece | 📦 Pack of 5 pieces',
    },
    {
      name: 'rss_not_rss_message_ar',
      title: 'RSS/Not RSS Message (Arabic)',
      type: 'string',
      description: 'Example: ✅ يمكن البيع بالقطعة الواحدة | 📦 الحزمة من 5 قطع',
    },
    {
      name: 'is_rss',
      title: 'Is RSS (Single Piece)',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'has_plus_sizes',
      title: 'Has Plus Sizes',
      type: 'boolean',
      initialValue: false,
    },
    
    // ===== Slugs (روابط) =====
    {
      name: 'slug_en',
      title: 'Slug (English)',
      type: 'slug',
      options: {
        source: 'name_en',
        maxLength: 200,
      },
    },
    {
      name: 'slug_ar',
      title: 'Slug (Arabic)',
      type: 'slug',
      options: {
        source: 'name_ar',
        maxLength: 200,
      },
    },
    
    // ===== إحصائيات =====
    {
      name: 'views_count',
      title: 'Views Count',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'orderIndex',
      title: 'Order Index',
      type: 'number',
    },
    
    // ===== فيديو =====
    {
      name: 'video_url',
      title: 'Video URL',
      type: 'url',
    },
    
    // ===== المخزون =====
    {
      name: 'out_of_stock',
      title: 'Out of Stock',
      type: 'boolean',
      initialValue: false,
    },
  ],
}