export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
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
    {
      name: 'category_main_en',
      title: 'Category (English)',
      type: 'string',
    },
    {
      name: 'category_main_ar',
      title: 'Category (Arabic)',
      type: 'string',
    },
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
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'string',
    },
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
    {
      name: 'pcs_per_packet',
      title: 'Pieces per Packet',
      type: 'string',
    },
    {
      name: 'is_new',
      title: 'Is New?',
      type: 'string',
    },
    {
      name: 'is_bestseller',
      title: 'Is Bestseller?',
      type: 'string',
    },
    {
      name: 'views_count',
      title: 'Views Count',
      type: 'number',
    },
    {
      name: 'slug_en',
      title: 'Slug (English)',
      type: 'slug',
      options: {
        source: 'name_en',
        maxLength: 96,
      },
    },
    {
      name: 'slug_ar',
      title: 'Slug (Arabic)',
      type: 'string',
    },
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
    {
      name: 'orderIndex',
      title: 'Order Index',
      type: 'number',
    },
  ],
}