'use client'

import { useState, useEffect } from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '@/lib/sanity'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

interface ProductImageProps {
  image: any
  alt: string
  className?: string
}

export default function ProductImage({ image, alt, className = '' }: ProductImageProps) {
  const [imgSrc, setImgSrc] = useState<string>('')
  const [error, setError] = useState(false)

  useEffect(() => {
    if (image) {
      try {
        // محاولة بناء رابط الصورة
        const url = urlFor(image).url()
        console.log('Image URL:', url) // للتشخيص
        setImgSrc(url)
      } catch (e) {
        console.error('Error building image URL:', e)
        setError(true)
      }
    } else {
      setError(true)
    }
  }, [image])

  if (error || !imgSrc) {
    return (
      <div className={`${className} flex items-center justify-center bg-gray-100 text-gray-400`}>
        No Image
      </div>
    )
  }

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={className}
      onError={() => {
        console.log('Image failed to load:', imgSrc)
        setError(true)
      }}
    />
  )
}