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
          Daka<span style={{ color: '#60A5FA' }}>ly</span>
        </span>
        <span style={{ fontSize: 13, color: '#475569' }}>
          © {new Date().getFullYear()} Dakaly · Made by Yahya
        </span>
      </div>
    </footer>
  )
}
