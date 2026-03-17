'use client'

import { client } from '@/lib/sanity'
import { useState, useEffect } from 'react'

export default function Home() {
  const [status, setStatus] = useState('Checking Sanity connection...')
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    async function testSanity() {
      try {
        // اختبار 1: هل المشروع ID صحيح؟
        setStatus('✅ Project ID is set')
        
        // اختبار 2: هل يمكن جلب منتج واحد؟
        const data = await client.fetch(`*[_type == "product"][0..2]{
          _id,
          name_en
        }`)
        
        if (data && data.length > 0) {
          setStatus(`✅ Connected! Found ${data.length} products`)
          setProducts(data)
        } else {
          setStatus('❌ No products found in Sanity')
        }
      } catch (error: any) {
        setStatus(`❌ Error: ${error.message}`)
        console.error(error)
      }
    }
    
    testSanity()
  }, [])

  return (
    <div style={{ padding: '20px' }}>
      <h1>Hijab Fashion Mall</h1>
      <h2 style={{ color: status.includes('✅') ? 'green' : 'red' }}>
        {status}
      </h2>
      
      {products.length > 0 && (
        <div>
          <h3>Sample products:</h3>
          <ul>
            {products.map(p => (
              <li key={p._id}>{p.name_en}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}