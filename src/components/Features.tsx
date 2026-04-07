import { Brain, FileText, UserCheck, RefreshCcw, Globe, Lock } from 'lucide-react'

const features = [
  {
    icon: <Brain size={22} />,
    title: 'Trained on your content',
    desc: 'Upload policies, FAQs, pricing guides. The AI learns your products and answers with 100% accuracy.',
    color: '#2563eb',
  },
  {
    icon: <FileText size={22} />,
    title: 'Policy summarizer',
    desc: 'Dense insurance documents made simple. Clients finally understand what they\'re buying.',
    color: '#7c3aed',
  },
  {
    icon: <UserCheck size={22} />,
    title: 'Lead qualification',
    desc: 'The bot collects name, coverage needs, and budget — then delivers a warm lead profile to your team.',
    color: '#0891b2',
  },
  {
    icon: <RefreshCcw size={22} />,
    title: 'Always up to date',
    desc: 'Update your content anytime and the bot reflects it instantly. No retraining delays.',
    color: '#059669',
  },
  {
    icon: <Globe size={22} />,
    title: 'Multilingual support',
    desc: 'Serve clients in their language. The bot auto-detects and responds in French, Arabic, Spanish, and more.',
    color: '#d97706',
  },
  {
    icon: <Lock size={22} />,
    title: 'Secure & compliant',
    desc: 'Data encrypted at rest and in transit. GDPR-ready with configurable data retention policies.',
    color: '#dc2626',
  },
]

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div style={{ marginBottom: 64 }}>
          <div className="section-label">Features</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <h2 className="section-title" style={{ maxWidth: 480 }}>
              Everything your insurance team needs
            </h2>
            <p className="section-sub" style={{ maxWidth: 380 }}>
              Built specifically for insurance — not a generic chatbot bolted onto a website.
            </p>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }} className="features-grid">
          {features.map(f => (
            <div key={f.title} style={{
              padding: '32px 28px',
              borderRadius: 16,
              border: '1px solid #e2e8f0',
              background: 'white',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = f.color + '44'
                ;(e.currentTarget as HTMLElement).style.boxShadow = `0 4px 24px ${f.color}18`
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0'
                ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
              }}
            >
              <div style={{
                width: 48, height: 48,
                background: f.color + '15',
                borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: f.color,
                marginBottom: 20,
              }}>
                {f.icon}
              </div>
              <h3 style={{
                fontSize: 17, fontWeight: 700,
                color: '#0f172a', marginBottom: 10,
                letterSpacing: '-0.01em',
              }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.7 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
