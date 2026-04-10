import { Zap, Bell, BarChart2, Plug, LayoutDashboard } from 'lucide-react'

const features = [
  {
    icon: <Zap size={20} />,
    title: 'Automated trip assignment',
    desc: 'Matches every incoming trip to the right driver instantly — factoring in availability, current location, vehicle type, and trip requirements. Zero manual steps.',
    color: '#2563EB',
    bg: '#EFF6FF',
  },
  
  {
    icon: <Bell size={20} />,
    title: 'Driver notifications',
    desc: 'Assignments are pushed directly to drivers via SMS the moment they\'re made. No dispatcher relay. No missed messages. Drivers always know where they\'re going.',
    color: '#7C3AED',
    bg: '#F5F3FF',
  },
  {
    icon: <BarChart2 size={20} />,
    title: 'Capacity forecasting',
    desc: 'Before the day starts, DispatchIQ tells you whether you have enough drivers for your trip volume — so you can staff up, reach out to contractors, or turn down trips before it becomes a crisis.',
    color: '#059669',
    bg: '#ECFDF5',
  },
  {
    icon: <Plug size={20} />,
    title: 'Broker feed integration',
    desc: 'Pulls trips directly from ModivCare, Veyo, and MTM automatically. No manual imports, no copy-paste errors. Trips hit the system the moment they\'re assigned by the broker.',
    color: '#D97706',
    bg: '#FFFBEB',
  },
  {
    icon: <LayoutDashboard size={20} />,
    title: 'Dispatcher Insight',
    desc: 'DistpachIq remember how many times this trip hasn t showed and flags it if ther ei s a likelihood of it not showing up.',
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
            <div className="label">Core Capabilities</div>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 54px)',
              fontWeight: 800,
              color: '#0F172A',
              maxWidth: 520,
            }}>
              Your Dispatch Operations Has Been Put on Steroids
            </h2>
          </div>
          <p style={{
            fontSize: 17,
            color: '#475569',
            maxWidth: 340,
            lineHeight: 1.75,
          }}>
            Built specifically for NEMT operators running 6–1892 vehicles.
          </p>
        </div>

        {/* 7 features: top row 3, bottom row split to show last one centered or 4+3 layout */}
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
