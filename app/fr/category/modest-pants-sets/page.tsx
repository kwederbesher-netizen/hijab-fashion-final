'use client'

import { Suspense } from 'react'
import CategoryPageContent from '../CategoryPageContent'

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <CategoryPageContent />
    </Suspense>
  )
}
