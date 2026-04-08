import { Target, Star, Radio, UserCheck, BarChart2, Plug } from 'lucide-react'

const features = [
  {
    icon: <Target size={20} />,
    title: 'Precision targeting',
    desc: 'We profile your ideal customer by industry, size, location, and intent — so the agent only goes after people who actually need what you sell.',
    color: '#2563EB',
    bg: '#EFF6FF',
  },
  {
    icon: <Star size={20} />,
    title: 'AI lead scoring',
    desc: 'Every prospect is scored on intent signals before it reaches you. No more wasting time on leads that were never going to convert.',
    color: '#D97706',
    bg: '#FFFBEB',
  },
  {
    icon: <Radio size={20} />,
    title: 'Multi-channel outreach',
    desc: 'The agent works across LinkedIn, email, and web — finding prospects wherever they are and engaging them at the right moment.',
    color: '#0369A1',
    bg: '#F0F9FF',
  },
  {
    icon: <UserCheck size={20} />,
    title: 'Instant qualification',
    desc: 'Leads are screened for budget, timeline, and buying intent before they land in your inbox. You only talk to people ready to move forward.',
    color: '#059669',
    bg: '#ECFDF5',
  },
  {
    icon: <BarChart2 size={20} />,
    title: 'Daily lead reports',
    desc: 'Wake up to a fresh, ranked list of qualified prospects every morning. Full visibility into pipeline health and conversion data.',
    color: '#7C3AED',
    bg: '#F5F3FF',
  },
  {
    icon: <Plug size={20} />,
    title: 'CRM ready',
    desc: 'Leads delivered directly into your existing CRM or inbox. No new tools to learn. Your workflow stays the same — just fuller.',
    color: '#2563EB',
    bg: '#EFF6FF',
  },
]

export default function Features() {
  return (
    <section style={{
      background: '#FFFFFF',
      padding: '120px 0',
      borderTop: '1px solid #E2E8F0',
    }}>
      <div className="container">

        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: 72,
          gap: 32,
          flexWrap: 'wrap',
        }}>
          <div>
            <div className="label">What you get</div>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 54px)',
              fontWeight: 800,
              color: '#0F172A',
              maxWidth: 480,
            }}>
              Everything your pipeline needs.
            </h2>
          </div>
          <p style={{
            fontSize: 17,
            color: '#475569',
            maxWidth: 340,
            lineHeight: 1.75,
          }}>
            Built for SMBs who are done chasing cold leads and ready
            to let an AI agent do the heavy lifting.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }} className="features-grid">
          {features.map(f => (
            <div key={f.title} style={{
              padding: '36px 30px',
              borderRadius: 16,
              border: '1px solid #E2E8F0',
              background: '#FAFAFA',
              transition: 'transform 0.2s, box-shadow 0.2s, background 0.2s',
              boxShadow: '0 2px 8px rgba(15,23,42,0.04)',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(15,23,42,0.09)'
                ;(e.currentTarget as HTMLElement).style.background = '#FFFFFF'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(15,23,42,0.04)'
                ;(e.currentTarget as HTMLElement).style.background = '#FAFAFA'
              }}
            >
              <div style={{
                width: 46, height: 46,
                background: f.bg,
                border: `1px solid ${f.color}22`,
                borderRadius: 12,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: f.color,
                marginBottom: 20,
              }}>
                {f.icon}
              </div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 17,
                fontWeight: 700,
                color: '#0F172A',
                marginBottom: 10,
                letterSpacing: '-0.02em',
              }}>
                {f.title}
              </h3>
              <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.75 }}>
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
