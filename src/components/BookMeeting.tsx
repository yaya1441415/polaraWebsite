import { useEffect } from 'react'
import { CheckCircle2, Calendar, Clock } from 'lucide-react'

const benefits = [
  '30-minute personalised walkthrough',
  'Live demo with your actual website',
  'Instant ROI estimate for your company',
  'No pressure, no commitment',
]

export default function BookMeeting() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  return (
    <section id="book" className="section" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label">Book a demo</div>
          <h2 className="section-title">See Polara in action</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Pick a time that works for you. We'll show you a live demo tailored to your company.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: 40,
          alignItems: 'start',
          maxWidth: 1000,
          margin: '0 auto',
        }} className="book-grid">

          {/* Left — Why book */}
          <div style={{
            background: 'linear-gradient(160deg, #0b1f4a, #162d6e)',
            borderRadius: 20,
            padding: '40px 32px',
            color: 'white',
            position: 'sticky',
            top: 100,
          }}>
            <div style={{
              width: 48, height: 48,
              background: 'rgba(255,255,255,0.1)',
              borderRadius: 12,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 24,
            }}>
              <Calendar size={24} color="white" />
            </div>

            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, letterSpacing: '-0.02em' }}>
              What to expect
            </h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginBottom: 32, lineHeight: 1.7 }}>
              A focused session — no fluff, just value.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 36 }}>
              {benefits.map(b => (
                <div key={b} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <CheckCircle2 size={16} color="#4ade80" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>{b}</span>
                </div>
              ))}
            </div>

            <div style={{
              padding: '16px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 12,
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <Clock size={16} color="rgba(255,255,255,0.5)" />
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>Google Meet or Zoom</span>
            </div>
          </div>

          {/* Right — Calendly embed */}
          <div style={{
            background: 'white',
            borderRadius: 20,
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            overflow: 'hidden',
            minHeight: 700,
          }}>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/yahyaouchch/chatbot-insurance"
              style={{ minWidth: 320, height: 700 }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .book-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
