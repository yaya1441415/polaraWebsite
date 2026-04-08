import { useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

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
      background: '#0A0A0A',
      padding: '120px 0',
      borderTop: '1px solid #1A1A1A',
    }}>
      <div className="container">

        <div style={{ marginBottom: 64 }}>
          <div className="label">Book a Call</div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 58px)',
            fontWeight: 700,
            color: '#F5F5F5',
            maxWidth: 580,
            marginBottom: 20,
          }}>
            One call.<br />That's all it takes.
          </h2>
          <p style={{
            fontSize: 17,
            color: '#555555',
            maxWidth: 440,
            lineHeight: 1.75,
            marginBottom: 24,
          }}>
            Book a free 30-minute audit call. No pitch. No pressure.
            Just clarity on where your money is going.
          </p>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            background: 'rgba(200, 255, 0, 0.06)',
            border: '1px solid rgba(200, 255, 0, 0.2)',
            borderRadius: 8,
            padding: '10px 16px',
          }}>
            <span style={{ fontSize: 15 }}>🔒</span>
            <span style={{ fontSize: 13, color: '#C8FF00', fontWeight: 600 }}>
              No results, no invoice. Simple as that.
            </span>
          </div>
        </div>

        {/* Calendly embed */}
        <div style={{
          background: '#ffffff',
          borderRadius: 14,
          overflow: 'hidden',
          border: '1px solid #1A1A1A',
        }}>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/yahyaouchch/chatbot-insurance"
            style={{ minWidth: 320, height: 700 }}
          />
        </div>

      </div>
    </section>
  )
}
