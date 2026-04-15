import { ArrowRight, Phone, MessageSquare, Brain } from 'lucide-react'

const particles = [
  { top: '12%', left: '8%', size: 3, delay: '0s', duration: '4.2s' },
  { top: '25%', left: '85%', size: 2, delay: '1s', duration: '3.8s' },
  { top: '60%', left: '6%', size: 4, delay: '0.5s', duration: '5s' },
  { top: '75%', left: '78%', size: 2, delay: '2s', duration: '4.5s' },
  { top: '40%', left: '92%', size: 3, delay: '1.5s', duration: '3.5s' },
  { top: '85%', left: '15%', size: 2, delay: '0.8s', duration: '4.8s' },
  { top: '18%', left: '55%', size: 2, delay: '3s', duration: '5.2s' },
  { top: '50%', left: '50%', size: 3, delay: '2.5s', duration: '4s' },
]

const stats = [
  { value: '3.2x', label: 'More replies' },
  { value: '24/7', label: 'Always on' },
  { value: '68%', label: 'Higher close rate' },
]

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 64,
      background: 'linear-gradient(135deg, #030712 0%, #080F1F 60%, #030B17 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @keyframes hero-float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.5; }
          50% { transform: translateY(-14px) scale(1.1); opacity: 1; }
        }
        @keyframes hero-pulse-glow {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.06); }
        }
        @keyframes hero-orbit-1 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes hero-orbit-2 {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes hero-ping {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes hero-ping2 {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(2.8); opacity: 0; }
        }
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hero-msg-in {
          0% { opacity: 0; transform: translateX(16px); }
          15%, 85% { opacity: 1; transform: translateX(0); }
          100% { opacity: 0; transform: translateX(-8px); }
        }
        @keyframes hero-dot-travel {
          0% { opacity: 0; offset-distance: 0%; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { opacity: 0; offset-distance: 100%; }
        }
        @keyframes hero-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .hero-particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(99, 179, 237, 0.6);
          animation: hero-float var(--dur) var(--delay) ease-in-out infinite;
        }
        .hero-vis-fade {
          animation: hero-fade-up 0.8s ease-out forwards;
        }
        .hero-content-fade {
          animation: hero-fade-up 0.7s ease-out forwards;
        }
        .hero-orbit-ring-1 {
          animation: hero-orbit-1 8s linear infinite;
        }
        .hero-orbit-ring-2 {
          animation: hero-orbit-2 12s linear infinite;
        }
        .hero-ping-1 {
          animation: hero-ping 2s ease-out infinite;
        }
        .hero-ping-2 {
          animation: hero-ping2 2s ease-out 1s infinite;
        }
        .hero-msg-bubble {
          animation: hero-msg-in 4s ease-in-out infinite;
        }
        .hero-msg-bubble:nth-child(2) { animation-delay: 1.3s; }
        .hero-msg-bubble:nth-child(3) { animation-delay: 2.6s; }
        .hero-call-blink {
          animation: hero-blink 1.2s ease-in-out infinite;
        }
      `}</style>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div key={i} className="hero-particle" style={{
          top: p.top, left: p.left,
          width: p.size, height: p.size,
          ['--dur' as string]: p.duration,
          ['--delay' as string]: p.delay,
        }} />
      ))}

      {/* Large background glow */}
      <div style={{
        position: 'absolute',
        top: '20%', right: '-5%',
        width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
        animation: 'hero-pulse-glow 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%', left: '-5%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', padding: '80px 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 60,
          alignItems: 'center',
        }} className="hero-grid">

          {/* Left content */}
          <div className="hero-content-fade">
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#60A5FA',
              background: 'rgba(37,99,235,0.12)',
              border: '1px solid rgba(96,165,250,0.2)',
              padding: '5px 14px',
              borderRadius: 100,
              marginBottom: 28,
            }}>
              AI Sales Agent
            </div>

            <h1 style={{
              fontSize: 'clamp(38px, 5vw, 68px)',
              fontWeight: 800,
              color: '#F1F5F9',
              maxWidth: 600,
              marginBottom: 22,
              lineHeight: 1.07,
              letterSpacing: '-0.03em',
            }}>
              Your sales agent{' '}
              <span style={{
                background: 'linear-gradient(135deg, #60A5FA, #818CF8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                calls, follows up
              </span>
              {' '}& closes — automatically.
            </h1>

            <p style={{
              fontSize: 17,
              color: '#94A3B8',
              maxWidth: 480,
              lineHeight: 1.75,
              marginBottom: 40,
            }}>
              Add your leads. The AI agent takes over — sending the right message at the right time,
              remembering every detail about each client, answering their calls, and reaching out
              until the deal is closed.
            </p>

            {/* Stats row */}
            <div style={{
              display: 'flex',
              gap: 32,
              marginBottom: 44,
              flexWrap: 'wrap',
            }}>
              {stats.map(s => (
                <div key={s.label}>
                  <div style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: '#F1F5F9',
                    fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: '-0.03em',
                  }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: '#64748B', fontWeight: 500, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <a href="#book" className="btn-primary" style={{
                background: 'linear-gradient(135deg, #2563EB, #4F46E5)',
                boxShadow: '0 4px 24px rgba(37,99,235,0.4)',
              }}>
                Book a Demo <ArrowRight size={16} />
              </a>
              <span style={{ fontSize: 13, color: '#475569' }}>
                Free 30-min session · No commitment
              </span>
            </div>
          </div>

          {/* Right - animated visualization */}
          <div className="hero-vis-fade" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div style={{
              position: 'relative',
              width: 340,
              height: 380,
            }}>
              {/* Central AI hub */}
              <div style={{
                position: 'absolute',
                top: '50%', left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 10,
              }}>
                {/* Ping rings */}
                <div className="hero-ping-1" style={{
                  position: 'absolute',
                  inset: -20,
                  borderRadius: '50%',
                  border: '1.5px solid rgba(96,165,250,0.4)',
                  pointerEvents: 'none',
                }} />
                <div className="hero-ping-2" style={{
                  position: 'absolute',
                  inset: -20,
                  borderRadius: '50%',
                  border: '1.5px solid rgba(129,140,248,0.3)',
                  pointerEvents: 'none',
                }} />
                {/* Hub circle */}
                <div style={{
                  width: 72,
                  height: 72,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1D4ED8, #4F46E5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 40px rgba(37,99,235,0.5), 0 0 80px rgba(79,70,229,0.2)',
                  border: '2px solid rgba(255,255,255,0.15)',
                }}>
                  <Brain size={28} color="#fff" />
                </div>
              </div>

              {/* Orbit ring 1 */}
              <div className="hero-orbit-ring-1" style={{
                position: 'absolute',
                top: '50%', left: '50%',
                width: 180, height: 180,
                marginTop: -90, marginLeft: -90,
                borderRadius: '50%',
                border: '1px dashed rgba(96,165,250,0.2)',
              }}>
                <div style={{
                  position: 'absolute',
                  top: -6, left: '50%',
                  marginLeft: -6,
                  width: 12, height: 12,
                  borderRadius: '50%',
                  background: '#60A5FA',
                  boxShadow: '0 0 12px rgba(96,165,250,0.8)',
                }} />
              </div>

              {/* Orbit ring 2 */}
              <div className="hero-orbit-ring-2" style={{
                position: 'absolute',
                top: '50%', left: '50%',
                width: 260, height: 260,
                marginTop: -130, marginLeft: -130,
                borderRadius: '50%',
                border: '1px dashed rgba(129,140,248,0.15)',
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: -5, left: '30%',
                  width: 10, height: 10,
                  borderRadius: '50%',
                  background: '#818CF8',
                  boxShadow: '0 0 10px rgba(129,140,248,0.8)',
                }} />
                <div style={{
                  position: 'absolute',
                  top: '20%', right: -5,
                  width: 8, height: 8,
                  borderRadius: '50%',
                  background: '#34D399',
                  boxShadow: '0 0 8px rgba(52,211,153,0.8)',
                }} />
              </div>

              {/* Floating message cards */}
              <div className="hero-msg-bubble" style={{
                position: 'absolute',
                top: 20, right: 0,
                background: 'rgba(30,41,59,0.9)',
                border: '1px solid rgba(96,165,250,0.25)',
                borderRadius: 12,
                padding: '10px 14px',
                backdropFilter: 'blur(12px)',
                maxWidth: 160,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
                  <MessageSquare size={11} color="#60A5FA" />
                  <span style={{ fontSize: 10, color: '#60A5FA', fontWeight: 700, letterSpacing: '0.05em' }}>MESSAGE SENT</span>
                </div>
                <p style={{ fontSize: 11, color: '#CBD5E1', lineHeight: 1.5 }}>
                  "Hi Sarah, following up on our last call — I have something perfect for you."
                </p>
              </div>

              <div className="hero-msg-bubble" style={{
                animationDelay: '1.4s',
                position: 'absolute',
                bottom: 30, left: 0,
                background: 'rgba(30,41,59,0.9)',
                border: '1px solid rgba(52,211,153,0.25)',
                borderRadius: 12,
                padding: '10px 14px',
                backdropFilter: 'blur(12px)',
                maxWidth: 155,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
                  <Phone size={11} color="#34D399" />
                  <span style={{ fontSize: 10, color: '#34D399', fontWeight: 700, letterSpacing: '0.05em' }}>CALL ANSWERED</span>
                </div>
                <p style={{ fontSize: 11, color: '#CBD5E1', lineHeight: 1.5 }}>
                  Agent answered, remembered objection from 3 weeks ago.
                </p>
              </div>

              {/* Live call indicator */}
              <div style={{
                position: 'absolute',
                top: '50%', right: -10,
                transform: 'translateY(-50%)',
                background: 'rgba(30,41,59,0.9)',
                border: '1px solid rgba(52,211,153,0.3)',
                borderRadius: 10,
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}>
                <div className="hero-call-blink" style={{
                  width: 8, height: 8,
                  borderRadius: '50%',
                  background: '#34D399',
                  boxShadow: '0 0 6px #34D399',
                }} />
                <span style={{ fontSize: 11, color: '#94A3B8', fontWeight: 600 }}>12 active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .hero-grid > div:last-child { display: none; }
        }
      `}</style>
    </section>
  )
}
