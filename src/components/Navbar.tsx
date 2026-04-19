import Logo from './Logo'

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      background: 'rgba(3,7,18,0.88)',
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
          <Logo size={34} />
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#F1F5F9',
          }}>
            Vigor<span style={{ color: '#60A5FA' }}>Node</span>
          </span>
        </div>

        <a href="#book" className="btn-primary" style={{
          padding: '9px 22px',
          fontSize: 13,
          background: 'linear-gradient(135deg, #1D4ED8, #3B82F6)',
          boxShadow: '0 2px 12px rgba(37,99,235,0.35)',
        }}>
          Book a Call
        </a>
      </div>
    </nav>
  )
}
