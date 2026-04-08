import { ArrowRight, Search, MessageSquare, GitBranch, UserCheck } from 'lucide-react'

const pills = [
  { icon: <Search size={13} />, label: 'Deep lead research' },
  { icon: <MessageSquare size={13} />, label: 'Hyper-personalised outreach' },
  { icon: <GitBranch size={13} />, label: 'Multi-channel sequences' },
  { icon: <UserCheck size={13} />, label: 'Automated qualification' },
]

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 64,
      background: '#FFFFFF',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Blue glow top-right */}
      <div style={{
        position: 'absolute',
        top: '-15%', right: '-10%',
        width: 640, height: 640,
        background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      {/* Amber glow bottom-left */}
      <div style={{
        position: 'absolute',
        bottom: '0%', left: '-5%',
        width: 480, height: 480,
        background: 'radial-gradient(circle, rgba(245,158,11,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', padding: '100px 24px' }}>

        <div className="label">AI SDR Agent · Staffing &amp; Recruiting</div>

        <h1 style={{
          fontSize: 'clamp(42px, 6vw, 80px)',
          fontWeight: 800,
          color: '#0F172A',
          maxWidth: 860,
          marginBottom: 28,
          lineHeight: 1.06,
        }}>
          Your AI Sales Rep that books meetings{' '}
          <span style={{ color: '#2563EB' }}>while your recruiters recruit.</span>
        </h1>

        <p style={{
          fontSize: 19,
          color: '#475569',
          maxWidth: 560,
          lineHeight: 1.7,
          marginBottom: 40,
        }}>
          We build a custom AI SDR Agent for your staffing agency. It researches prospects
          deeply, writes personalised outreach, runs multi-channel sequences, and
          qualifies leads — handing you only the conversations worth having.
        </p>

        {/* Capability pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 44 }}>
          {pills.map(p => (
            <div key={p.label} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 7,
              background: '#F0F7FF',
              border: '1px solid #DBEAFE',
              borderRadius: 100,
              padding: '7px 14px',
              fontSize: 13,
              fontWeight: 600,
              color: '#1D4ED8',
            }}>
              {p.icon}
              {p.label}
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', marginBottom: 28 }}>
          <a href="#book" className="btn-primary">
            See It In Action <ArrowRight size={16} />
          </a>
          <span style={{ fontSize: 14, color: '#94A3B8' }}>
            30-min demo · No commitment
          </span>
        </div>

        {/* Guarantee badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          background: '#FFFBEB',
          border: '1px solid #FDE68A',
          borderRadius: 10,
          padding: '11px 18px',
        }}>
          <span style={{ fontSize: 16 }}>🔒</span>
          <span style={{ fontSize: 13, color: '#92400E', fontWeight: 700 }}>
            You don't pay until the agent books you qualified meetings.
          </span>
        </div>

      </div>
    </section>
  )
}
