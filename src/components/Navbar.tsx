export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      borderBottom: '1px solid #1A1A1A',
      background: 'rgba(10,10,10,0.88)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 62,
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: '0.06em',
          color: '#F5F5F5',
        }}>
          Dakaly
        </span>

        <a href="#book" className="btn-primary" style={{ padding: '9px 20px', fontSize: 13 }}>
          Book a Call
        </a>
      </div>
    </nav>
  )
}
