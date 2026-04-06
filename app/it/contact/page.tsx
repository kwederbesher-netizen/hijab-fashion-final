// app/it/contact/page.tsx
'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { FaPhoneAlt, FaClock, FaWhatsapp, FaQuestionCircle, FaTruck, FaCreditCard, FaBox } from 'react-icons/fa'

export default function ContactPageIt() {
  const [mounted, setMounted] = useState(false)
  const [formStatus, setFormStatus] = useState<{type: 'success' | 'error' | null, message: string}>({ type: null, message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => { setMounted(true) }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    const data = { name: formData.get('name'), country: formData.get('country'), phone: formData.get('phone'), email: formData.get('email') || '', message: formData.get('message') }
    try {
      const response = await fetch('/api/send-email', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
      const result = await response.json()
      if (result.success) {
        setFormStatus({ type: 'success', message: '✅ Grazie! Messaggio inviato con successo.' })
        if (formRef.current) formRef.current.reset()
        setTimeout(() => setFormStatus({ type: null, message: '' }), 5000)
      } else throw new Error(result.message || 'Errore')
    } catch (error) {
      setFormStatus({ type: 'error', message: '❌ Errore durante l\'invio. Riprova.' })
      setTimeout(() => setFormStatus({ type: null, message: '' }), 5000)
    } finally { setIsSubmitting(false) }
  }

  if (!mounted) return null

  return (
    <>
      <Head>
        <title>Contattaci - Hijab Fashion Mall | Grossista Moda Modesta Turca</title>
        <meta name="description" content="Contattate Hijab Fashion Mall per richieste all'ingrosso e partnership." />
        <link rel="canonical" href="https://hijabfashionmall.com/it/contact" />
        <link rel="alternate" href="https://hijabfashionmall.com/ar/contact" hrefLang="ar" />
        <link rel="alternate" href="https://hijabfashionmall.com/en/contact" hrefLang="en" />
        <link rel="alternate" href="https://hijabfashionmall.com/fr/contact" hrefLang="fr" />
        <link rel="alternate" href="https://hijabfashionmall.com/de/contact" hrefLang="de" />
        <link rel="alternate" href="https://hijabfashionmall.com/it/contact" hrefLang="it" />
        <link rel="alternate" href="https://hijabfashionmall.com/es/contact" hrefLang="es" />
        <meta property="og:title" content="Contattaci - Hijab Fashion Mall" />
        <meta property="og:description" content="Contattateci per richieste all'ingrosso." />
        <meta property="og:image" content="https://hijabfashionmall.com/images/contact-og.webp" />
        <meta property="og:url" content="https://hijabfashionmall.com/it/contact" />
        <meta property="og:locale" content="it_IT" />
      </Head>

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root { --primary: #f87833; --primary-dark: #f87833; --primary-soft: #fff0e6; --black: #000; --light-gray: #f8f9fa; --border-gray: #e9ecef; --white: #fff; --whatsapp: #25d366; --shadow-md: 0 5px 20px rgba(0,0,0,0.08); --radius-md: 12px; --radius-lg: 20px; }
        body { font-family: 'Poppins', system-ui, sans-serif; color: #1a1a1a; line-height: 1.6; }
        .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
        .breadcrumb-section { padding: 20px 0; background: var(--light-gray); border-bottom: 1px solid var(--border-gray); }
        .breadcrumb-list { list-style: none; display: flex; flex-wrap: wrap; gap: 10px; }
        .breadcrumb-list li a { color: #555; text-decoration: none; }
        .breadcrumb-list li a:hover { color: var(--primary); }
        .page-header { background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); padding: 60px 0; text-align: center; color: white; }
        .page-header h1 { font-size: 48px; font-weight: 800; margin-bottom: 16px; }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; }
        .info-card { background: white; border-radius: var(--radius-lg); padding: 30px 20px; text-align: center; box-shadow: var(--shadow-md); border: 1px solid var(--border-gray); transition: all 0.3s; }
        .info-card:hover { transform: translateY(-5px); border-color: var(--primary); }
        .info-icon { width: 70px; height: 70px; border-radius: 50%; background: var(--primary-soft); color: var(--primary); display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; font-size: 28px; }
        .whatsapp-card { background: linear-gradient(135deg, var(--whatsapp) 0%, #128C7E 100%); color: white; padding: 40px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 30px; margin-top: 30px; }
        .whatsapp-btn { display: inline-flex; align-items: center; gap: 10px; background: white; color: var(--whatsapp); padding: 14px 35px; border-radius: 50px; text-decoration: none; font-weight: 600; }
        .contact-form { background: white; border-radius: var(--radius-lg); padding: 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .contact-form h2 { font-size: 28px; font-weight: 700; margin-bottom: 30px; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px; }
        .form-input, .form-textarea { width: 100%; padding: 15px; border: 2px solid var(--border-gray); border-radius: var(--radius-md); background: var(--light-gray); }
        .form-input:focus, .form-textarea:focus { outline: none; border-color: var(--primary); }
        .submit-btn { background: var(--primary); color: white; border: none; padding: 16px; border-radius: 50px; font-weight: 600; cursor: pointer; width: 100%; }
        .faq-section { padding: 60px 0; background: var(--light-gray); }
        .faq-title { text-align: center; font-size: 36px; font-weight: 800; margin-bottom: 50px; }
        .faq-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; }
        .faq-card { background: white; border-radius: var(--radius-md); padding: 30px; box-shadow: var(--shadow-md); }
        .faq-card h3 { font-size: 18px; font-weight: 700; color: var(--primary); margin-bottom: 15px; display: flex; align-items: center; gap: 10px; }
        @media (max-width: 992px) { .contact-grid { grid-template-columns: 1fr; } .faq-grid { grid-template-columns: 1fr; } }
        @media (max-width: 768px) { .page-header h1 { font-size: 36px; } .form-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div>
        <div className="breadcrumb-section"><div className="container"><ul className="breadcrumb-list"><li><Link href="/it">🏠 Home</Link></li><li>/</li><li>📞 Contattaci</li></ul></div></div>
        <section className="page-header"><div className="container"><h1>Contattaci</h1><p>Siamo qui per rispondere alle tue domande.</p></div></section>
        {formStatus.type && <div className={`form-status ${formStatus.type}`} style={{ maxWidth: '1280px', margin: '20px auto', padding: '16px', borderRadius: '12px', textAlign: 'center' }}>{formStatus.message}</div>}
        <section style={{ padding: '80px 0' }}>
          <div className="container">
            <div className="contact-grid">
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px', marginBottom: '30px' }}>
                  <div className="info-card"><div className="info-icon"><FaPhoneAlt size={28} /></div><h3>Chiamaci</h3><p>+90 551 952 24 48</p><a href="tel:+905519522448" className="info-link">Chiama ora →</a></div>
                  <div className="info-card"><div className="info-icon"><FaClock size={28} /></div><h3>Orari</h3><p>Lun-Ven: 9-20</p><p>Sab: 10-18</p><p>Dom: Chiuso</p></div>
                </div>
                <div className="whatsapp-card"><div><h3>Chat su WhatsApp</h3><p>Risposte immediate. Disponibile 24/7.</p><a href="https://wa.me/905519522448" target="_blank" rel="noopener noreferrer" className="whatsapp-btn"><FaWhatsapp size={18} /> Chat</a></div><FaWhatsapp size={80} style={{ opacity: 0.2 }} /></div>
              </div>
              <div className="contact-form"><h2>Invia un messaggio</h2><form ref={formRef} onSubmit={handleSubmit}><div className="form-grid"><input type="text" name="name" placeholder="Nome completo *" required className="form-input" /><input type="text" name="country" placeholder="Paese *" required className="form-input" /><input type="tel" name="phone" placeholder="Telefono *" required className="form-input" /><input type="email" name="email" placeholder="Email (opzionale)" className="form-input" /></div><textarea name="message" rows={6} placeholder="Il tuo messaggio *" required className="form-textarea"></textarea><button type="submit" disabled={isSubmitting} className="submit-btn">{isSubmitting ? 'Invio...' : 'Invia'}</button></form></div>
            </div>
          </div>
        </section>
        <section className="faq-section"><div className="container"><h2 className="faq-title">Domande Frequenti</h2><div className="faq-grid"><div className="faq-card"><h3><FaQuestionCircle size={18} /> Come ordinare?</h3><p>Sfoglia il catalogo, seleziona i prodotti, invia via WhatsApp.</p></div><div className="faq-card"><h3><FaTruck size={18} /> Spedizione mondiale?</h3><p>Sì! Spediamo in 50+ paesi con tracciabilità.</p></div><div className="faq-card"><h3><FaCreditCard size={18} /> Metodi di pagamento?</h3><p>Bonifico, Western Union, carte di credito.</p></div><div className="faq-card"><h3><FaBox size={18} /> Quantità minima?</h3><p>Nessuna quantità minima!</p></div></div></div></section>
      </div>
    </>
  )
}