import Logo from './Logo'

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      borderBottom: '1px solid #E2E8F0',
      background: 'rgba(255,255,255,0.94)',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 64,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Logo size={36} />
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#0F172A',
          }}>
         
          </span>
        </div>

        <a href="/demo" className="btn-primary" style={{ padding: '9px 22px', fontSize: 13 }}>
          Demo: See How It Works 
        </a>
      </div>
    </nav>
  )
}
