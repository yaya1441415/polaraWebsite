interface LogoProps {
  size?: number
}

export default function Logo({ size = 36 }: LogoProps) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: size * 0.28,
      background: 'linear-gradient(135deg, #1D4ED8, #3B82F6)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      boxShadow: '0 2px 10px rgba(59,130,246,0.4)',
    }}>
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: size * 0.52,
        fontWeight: 800,
        color: '#fff',
        lineHeight: 1,
        letterSpacing: '-0.03em',
      }}>
        V
      </span>
    </div>
  )
}
