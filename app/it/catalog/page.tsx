import { Suspense } from 'react'
import CatalogPageContentIt from './CatalogPageContentIt'

export default function CatalogPageIt() {
  return (
    <Suspense fallback={
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '60vh' 
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '60px',
            height: '60px',
            border: '3px solid #f3f3f3',
            borderTop: '3px solid #ff5a00',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto'
          }} />
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
          <p style={{ marginTop: '20px', color: '#555' }}>Caricamento prodotti...</p>
        </div>
      </div>
    }>
      <CatalogPageContentIt />
    </Suspense>
  )
}