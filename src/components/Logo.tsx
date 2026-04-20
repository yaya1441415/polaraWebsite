interface LogoProps {
  size?: number
}

export default function Logo({ size = 36 }: LogoProps) {
  const r = size * 0.28
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: r,
      background: 'linear-gradient(145deg, #0A0F1E 0%, #0F172A 100%)',
      border: '1.5px solid rgba(59,130,246,0.35)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      boxShadow: '0 2px 12px rgba(59,130,246,0.25), inset 0 1px 0 rgba(255,255,255,0.06)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Blue glow streak */}
      <div style={{
        position: 'absolute',
        top: 0, left: '-30%',
        width: '60%', height: '50%',
        background: 'radial-gradient(ellipse, rgba(59,130,246,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <span style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: size * 0.44,
        fontWeight: 800,
        lineHeight: 1,
        letterSpacing: '-0.04em',
        position: 'relative',
        zIndex: 1,
      }}>
        <span style={{ color: '#60A5FA' }}>V</span>
        <span style={{ color: '#F1F5F9' }}>N</span>
      </span>
    </div>
  )
}
