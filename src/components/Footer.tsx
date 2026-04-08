export default function Footer() {
  return (
    <footer style={{
      background: '#0A0A0A',
      borderTop: '1px solid #1A1A1A',
      padding: '36px 0',
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
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: '0.06em',
          color: '#F5F5F5',
        }}>
          Dakaly
        </span>
        <span style={{ fontSize: 13, color: '#333333' }}>
          © {new Date().getFullYear()} Dakaly · Made by Yahya
        </span>
      </div>
    </footer>
  )
}
