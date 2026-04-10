export default function Footer() {
  return (
    <footer style={{
      background: '#0F172A',
      padding: '40px 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: '#FFFFFF',
        }}>
          Dispatch<span style={{ color: '#60A5FA' }}>IQ</span>
        </span>
        <span style={{ fontSize: 13, color: '#475569' }}>
          © {new Date().getFullYear()} DispatchIQ · The AI Scheduling Agent for NEMT Operators
        </span>
      </div>
    </footer>
  )
}
