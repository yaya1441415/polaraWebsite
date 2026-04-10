interface LogoProps {
  size?: number
}

export default function Logo({ size = 36 }: LogoProps) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: '50%',
      background: '#2563EB',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      flexShrink: 0,
      boxShadow: '0 2px 10px rgba(37,99,235,0.3)',
    }}>
      {/* White thick ring */}
      <div style={{
        position: 'absolute',
        inset: size * 0.1,
        borderRadius: '50%',
        border: `${Math.max(2, size * 0.08)}px solid rgba(255,255,255,0.5)`,
        pointerEvents: 'none',
      }} />
      {/* K */}
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: size * 0.42,
        fontWeight: 800,
        color: '#0F172A',
        lineHeight: 1,
        letterSpacing: '-0.03em',
        position: 'relative',
        zIndex: 1,
      }}>
        K
      </span>
    </div>
  )
}
