import { Linkedin, Mail, Search, Mic, SlidersHorizontal, Handshake } from 'lucide-react'

const features = [
  {
    icon: <Search size={20} />,
    title: 'Intent-based prospect discovery',
    desc: 'The agent identifies companies with active hiring pain — analysing job postings, layoff signals, growth indicators, and leadership changes to find staffing agencies\' best-fit clients.',
    color: '#2563EB',
    bg: '#EFF6FF',
  },
  {
    icon: <SlidersHorizontal size={20} />,
    title: 'Role & industry-specific hooks',
    desc: 'Outreach is tailored to the prospect\'s exact role — a Head of Talent gets a different message than a COO. Every hook is grounded in their real situation, not a generic pitch.',
    color: '#0369A1',
    bg: '#F0F9FF',
  },
  {
    icon: <Mail size={20} />,
    title: 'Email sequences that convert',
    desc: 'Multi-step email campaigns written and sent by the agent. Each follow-up adapts based on opens, clicks, and replies — never feeling like a blast, always feeling personal.',
    color: '#7C3AED',
    bg: '#F5F3FF',
  },
  {
    icon: <Linkedin size={20} />,
    title: 'LinkedIn outreach automation',
    desc: 'The agent manages LinkedIn connection requests, follow-up messages, and engagement — coordinated with email to create a coherent, persistent presence without overwhelming prospects.',
    color: '#0A66C2',
    bg: '#EFF6FF',
  },
  {
    icon: <Mic size={20} />,
    title: 'Conversational qualification',
    desc: 'When a prospect engages, the agent handles initial back-and-forth to confirm budget, timeline, and hiring needs. Only qualified opportunities get escalated to your team.',
    color: '#059669',
    bg: '#ECFDF5',
  },
  {
    icon: <Handshake size={20} />,
    title: 'Clean handoff to your recruiters',
    desc: 'Every warm lead arrives with a full research brief — pain points, conversation history, and a qualification summary. Your team walks into every call already prepared.',
    color: '#D97706',
    bg: '#FFFBEB',
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
            <div className="label">Capabilities</div>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 54px)',
              fontWeight: 800,
              color: '#0F172A',
              maxWidth: 520,
            }}>
              Everything a top SDR does.<br />Done by AI.
            </h2>
          </div>
          <p style={{
            fontSize: 17,
            color: '#475569',
            maxWidth: 340,
            lineHeight: 1.75,
          }}>
            Built specifically for staffing and recruiting agencies —
            not a generic outreach tool bolted onto a CRM.
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
                fontSize: 16,
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
