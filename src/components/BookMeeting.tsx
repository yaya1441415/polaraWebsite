import { useEffect } from 'react'
import { CheckCircle2 } from 'lucide-react'

const perks = [
  'We show you a live demo built for staffing agencies',
  'You see real prospect research the agent produces',
  'We map out your outreach sequences together',
  'No pitch. No contract. Just a working prototype.',
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
    <section id="book" style={{
      background: '#F0F7FF',
      padding: '120px 0',
      borderTop: '1px solid #E2E8F0',
    }}>
      <div className="container">

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }} className="book-grid">
          <div>
            <div className="label">Book a Demo</div>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 54px)',
              fontWeight: 800,
              color: '#0F172A',
              marginBottom: 20,
              lineHeight: 1.1,
            }}>
              See your AI SDR<br />
              <span style={{ color: '#2563EB' }}>in action.</span>
            </h2>
            <p style={{
              fontSize: 17,
              color: '#475569',
              maxWidth: 420,
              lineHeight: 1.75,
              marginBottom: 32,
            }}>
              Book a free 30-minute demo. We'll show you exactly how the agent
              researches, writes, and reaches out — tailored live to your agency's niche.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
              {perks.map(p => (
                <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <CheckCircle2 size={18} color="#2563EB" strokeWidth={2.5} style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 15, color: '#1E293B', fontWeight: 500, lineHeight: 1.5 }}>{p}</span>
                </div>
              ))}
            </div>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: '#FFFBEB',
              border: '1px solid #FDE68A',
              borderRadius: 10,
              padding: '12px 18px',
            }}>
              <span style={{ fontSize: 16 }}>🔒</span>
              <span style={{ fontSize: 13, color: '#92400E', fontWeight: 700 }}>
                No meetings booked, no invoice. Simple as that.
              </span>
            </div>
          </div>

          {/* Calendly embed */}
          <div style={{
            background: '#ffffff',
            borderRadius: 20,
            overflow: 'hidden',
            border: '1px solid #DBEAFE',
            boxShadow: '0 8px 40px rgba(37,99,235,0.1)',
          }}>
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/yahyaouchch/chatbot-insurance"
              style={{ minWidth: 320, height: 680 }}
            />
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 800px) {
          .book-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
