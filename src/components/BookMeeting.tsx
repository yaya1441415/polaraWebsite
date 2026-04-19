import { useEffect } from 'react'
import { CheckCircle2 } from 'lucide-react'

const perks = [
  "We demo a live AI agent configured with your coaching style",
  "You see it answer your clients' most common questions in real time",
  "We walk through the setup — under 20 minutes to launch your agent",
  "See your exact revenue potential based on your current client base",
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
      borderTop: '1px solid #DBEAFE',
    }}>
      <div className="container">

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }} className="vn-book-grid">

          <div>
            <div className="label" style={{
              color: '#2563EB',
              background: 'rgba(37,99,235,0.08)',
              borderColor: 'rgba(37,99,235,0.18)',
            }}>
              Book a Call
            </div>
            <h2 style={{
              fontSize: 'clamp(30px, 4vw, 50px)',
              fontWeight: 800, color: '#0F172A',
              marginBottom: 20, lineHeight: 1.1,
            }}>
              See your AI coaching<br />
              <span style={{ color: '#2563EB' }}>agent live.</span>
            </h2>
            <p style={{
              fontSize: 17, color: '#475569',
              maxWidth: 400, lineHeight: 1.75, marginBottom: 32,
            }}>
              
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
              background: '#FFFFFF',
              border: '1px solid #DBEAFE',
              borderRadius: 12, padding: '18px 20px', marginBottom: 24,
            }}>
              <div style={{
                fontSize: 12, fontWeight: 700, color: '#2563EB',
                letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8,
              }}>
                Who this is for
              </div>
              <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.65 }}>
                Personal trainers and fitness coaches who want to grow their client base
                and income — without trading more hours for it.
              </p>
            </div>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              background: '#FFFBEB',
              border: '1px solid #FDE68A',
              borderRadius: 10, padding: '12px 18px',
            }}>
              <span style={{ fontSize: 16 }}>🔒</span>
              <span style={{ fontSize: 13, color: '#92400E', fontWeight: 700 }}>
                If the demo doesn't show clear value, no conversation about pricing.
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
          .vn-book-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  )
}
