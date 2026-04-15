import Logo from './Logo'

export default function Footer() {
  return (
    <footer style={{
      background: '#030712',
      padding: '40px 0',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Logo size={32} />
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 17,
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#F1F5F9',
          }}>
            Close<span style={{ color: '#60A5FA' }}>IQ</span>
          </span>
        </div>
        <span style={{ fontSize: 13, color: '#334155' }}>
          © {new Date().getFullYear()} CloseIQ · AI Sales Agent for Outreach & Closing
        </span>
      </div>
    </footer>
  )
}
