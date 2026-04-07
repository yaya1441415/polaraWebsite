import { Code2, Sparkles, BarChart3 } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: <Code2 size={24} />,
    title: 'We set up your bot',
    desc: 'We train the AI on your policy documents, FAQs, coverage details, and anything else you share. No technical work needed from your side.',
  },
  {
    step: '02',
    icon: <Sparkles size={24} />,
    title: 'Embed on your website',
    desc: 'One line of code places the chatbot on your site. It matches your brand colors, tone, and style — it looks like it was built just for you.',
  },
  {
    step: '03',
    icon: <BarChart3 size={24} />,
    title: 'Watch leads convert',
    desc: 'Clients get instant answers. The bot captures contact info, summarizes needs, and hands warm leads directly to your agents.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div className="section-label">Simple process</div>
          <h2 className="section-title">Up and running in under a week</h2>
          <p className="section-sub" style={{ margin: '0 auto' }}>
            No long contracts, no dev sprints. We handle everything — you just start getting better-qualified leads.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 32,
          position: 'relative',
        }} className="steps-grid">

          {/* Connector line */}
          <div style={{
            position: 'absolute',
            top: 44, left: '18%', right: '18%',
            height: 2,
            background: 'linear-gradient(90deg, #2563eb33, #2563eb, #2563eb33)',
            zIndex: 0,
          }} className="connector" />

          {steps.map((s) => (
            <div key={s.step} style={{
              background: 'white',
              borderRadius: 20,
              padding: '40px 32px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 2px 16px rgba(0,0,0,0.05)',
              position: 'relative',
              zIndex: 1,
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(37,99,235,0.12)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(0,0,0,0.05)'
              }}
            >
              <div style={{
                width: 56, height: 56,
                background: 'linear-gradient(135deg, #2563eb, #06b6d4)',
                borderRadius: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white',
                marginBottom: 24,
                boxShadow: '0 4px 16px rgba(37,99,235,0.3)',
              }}>
                {s.icon}
              </div>

              <div style={{
                fontSize: 12, fontWeight: 700, letterSpacing: '0.1em',
                color: '#2563eb', marginBottom: 10,
              }}>
                STEP {s.step}
              </div>

              <h3 style={{
                fontSize: 20, fontWeight: 700,
                color: '#0f172a', marginBottom: 12,
                letterSpacing: '-0.02em',
              }}>
                {s.title}
              </h3>

              <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .connector { display: none !important; }
        }
      `}</style>
    </section>
  )
}
