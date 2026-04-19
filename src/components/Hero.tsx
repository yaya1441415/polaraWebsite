import { ArrowRight } from 'lucide-react'

const particles = [
  { x: '7%',  y: '14%', s: 2, dur: '4.2s', delay: '0s'   },
  { x: '91%', y: '18%', s: 3, dur: '5.1s', delay: '1s'   },
  { x: '4%',  y: '68%', s: 2, dur: '6s',   delay: '2s'   },
  { x: '87%', y: '74%', s: 2, dur: '4.6s', delay: '0.5s' },
  { x: '48%', y: '4%',  s: 2, dur: '5.4s', delay: '3s'   },
  { x: '14%', y: '88%', s: 3, dur: '4.9s', delay: '1.5s' },
  { x: '74%', y: '86%', s: 2, dur: '5.3s', delay: '2.5s' },
  { x: '94%', y: '48%', s: 2, dur: '4.1s', delay: '4s'   },
  { x: '30%', y: '92%', s: 2, dur: '5.8s', delay: '0.8s' },
  { x: '62%', y: '7%',  s: 3, dur: '4.7s', delay: '3.5s' },
]

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 64,
      background: '#020810',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      <style>{`
        @keyframes vn-cw   { to { transform: rotate(360deg);  } }
        @keyframes vn-ccw  { to { transform: rotate(-360deg); } }
        @keyframes vn-pulse {
          0%, 100% { opacity: 0.45; transform: scale(1);    }
          50%       { opacity: 1;   transform: scale(1.14); }
        }
        @keyframes vn-halo {
          0%, 100% { opacity: 0.12; transform: scale(1);    }
          50%       { opacity: 0.28; transform: scale(1.06); }
        }
        @keyframes vn-dot-breathe {
          0%, 100% { box-shadow: 0 0 8px currentColor;  }
          50%       { box-shadow: 0 0 22px currentColor; }
        }
        @keyframes vn-particle {
          0%, 100% { transform: translateY(0);     opacity: 0.5; }
          50%       { transform: translateY(-22px); opacity: 1;   }
        }
        @keyframes vn-fade-up {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .vn-in-1 { animation: vn-fade-up 0.9s ease-out forwards; }
        .vn-in-2 { animation: vn-fade-up 0.9s 0.18s ease-out both; }
        .vn-in-3 { animation: vn-fade-up 0.9s 0.34s ease-out both; }
      `}</style>

      {/* ---- Orbital ring system ---- */}
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        pointerEvents: 'none',
        zIndex: 1,
      }}>
        {/* Core pulse */}
        <div style={{
          position: 'absolute',
          width: 130, height: 130,
          marginLeft: -65, marginTop: -65,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.65) 0%, rgba(59,130,246,0.1) 55%, transparent 75%)',
          animation: 'vn-pulse 3.2s ease-in-out infinite',
        }} />

        {/* Halo glow */}
        <div style={{
          position: 'absolute',
          width: 380, height: 380,
          marginLeft: -190, marginTop: -190,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 65%)',
          animation: 'vn-halo 4s ease-in-out 1.2s infinite',
        }} />

        {/* Ring 1 — inner 250px, CW 9s */}
        <div style={{
          position: 'absolute',
          width: 250, height: 250,
          marginLeft: -125, marginTop: -125,
          borderRadius: '50%',
          border: '1.5px solid rgba(96,165,250,0.28)',
          animation: 'vn-cw 9s linear infinite',
        }}>
          <div style={{ position: 'absolute', top: -6, left: 'calc(50% - 6px)', width: 12, height: 12, borderRadius: '50%', background: '#60A5FA', color: '#60A5FA', boxShadow: '0 0 16px #60A5FA, 0 0 6px #3B82F6', animation: 'vn-dot-breathe 2s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', bottom: -5, left: 'calc(50% - 5px)', width: 10, height: 10, borderRadius: '50%', background: '#93C5FD', color: '#93C5FD', boxShadow: '0 0 12px #93C5FD' }} />
        </div>

        {/* Ring 2 — middle 420px, CCW 16s */}
        <div style={{
          position: 'absolute',
          width: 420, height: 420,
          marginLeft: -210, marginTop: -210,
          borderRadius: '50%',
          border: '1px dashed rgba(129,140,248,0.22)',
          animation: 'vn-ccw 16s linear infinite',
        }}>
          <div style={{ position: 'absolute', top: -6, left: 'calc(50% - 6px)', width: 12, height: 12, borderRadius: '50%', background: '#818CF8', color: '#818CF8', boxShadow: '0 0 18px rgba(129,140,248,0.95)', animation: 'vn-dot-breathe 2.4s ease-in-out 0.5s infinite' }} />
          <div style={{ position: 'absolute', top: '18%', right: -5, width: 8, height: 8, borderRadius: '50%', background: '#60A5FA', boxShadow: '0 0 12px #60A5FA' }} />
          <div style={{ position: 'absolute', bottom: -5, left: '28%', width: 7, height: 7, borderRadius: '50%', background: '#A5B4FC', boxShadow: '0 0 10px #A5B4FC' }} />
        </div>

        {/* Ring 3 — outer 610px, CW 26s */}
        <div style={{
          position: 'absolute',
          width: 610, height: 610,
          marginLeft: -305, marginTop: -305,
          borderRadius: '50%',
          border: '1px dashed rgba(59,130,246,0.1)',
          animation: 'vn-cw 26s linear infinite',
        }}>
          <div style={{ position: 'absolute', top: -5, left: '38%', width: 9, height: 9, borderRadius: '50%', background: '#3B82F6', boxShadow: '0 0 12px #3B82F6', opacity: 0.75 }} />
          <div style={{ position: 'absolute', bottom: -4, right: '22%', width: 7, height: 7, borderRadius: '50%', background: '#60A5FA', opacity: 0.55 }} />
          <div style={{ position: 'absolute', top: '58%', left: -4, width: 6, height: 6, borderRadius: '50%', background: '#818CF8', opacity: 0.6 }} />
        </div>
      </div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div key={i} style={{
          position: 'absolute',
          top: p.y, left: p.x,
          width: p.s, height: p.s,
          borderRadius: '50%',
          background: '#60A5FA',
          opacity: 0.45,
          animation: `vn-particle ${p.dur} ${p.delay} ease-in-out infinite`,
          pointerEvents: 'none',
          zIndex: 1,
        }} />
      ))}

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, padding: '0 24px', maxWidth: 800 }}>

        {/* Logo + name */}
        <div className="vn-in-1" style={{
          display: 'inline-flex', alignItems: 'center', gap: 14, marginBottom: 52,
        }}>
          <div style={{
            width: 48, height: 48, borderRadius: 13,
            background: 'linear-gradient(135deg, #1D4ED8, #3B82F6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 28px rgba(59,130,246,0.5)',
          }}>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 25, fontWeight: 800, color: '#fff', lineHeight: 1 }}>V</span>
          </div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 800, letterSpacing: '-0.03em', color: '#F1F5F9' }}>
            Vigor<span style={{ color: '#60A5FA' }}>Node</span>
          </span>
        </div>

        {/* Slogan */}
        <div className="vn-in-2">
          <h1 style={{
            fontSize: 'clamp(50px, 9vw, 108px)',
            fontWeight: 800, lineHeight: 1.0,
            letterSpacing: '-0.04em', color: '#F1F5F9', marginBottom: 0,
          }}>
            One Trainer.
          </h1>
          <h1 style={{
            fontSize: 'clamp(50px, 9vw, 108px)',
            fontWeight: 800, lineHeight: 1.0,
            letterSpacing: '-0.04em', marginBottom: 36,
            background: 'linear-gradient(135deg, #3B82F6, #818CF8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Unlimited Clients.
          </h1>
          <p style={{
            fontSize: 18, color: '#475569', lineHeight: 1.75,
            maxWidth: 460, margin: '0 auto 48px auto',
          }}>
            Train your AI agent once — it coaches your clients 24/7,
            in your voice, with your methodology.
          </p>
        </div>

        {/* CTA */}
        <div className="vn-in-3">
          <a href="#book" className="btn-primary" style={{
            background: 'linear-gradient(135deg, #1D4ED8, #3B82F6)',
            boxShadow: '0 4px 28px rgba(59,130,246,0.45)',
            fontSize: 16, padding: '15px 36px',
          }}>
            Book a Call <ArrowRight size={17} />
          </a>
          <div style={{ marginTop: 16, fontSize: 13, color: '#1E293B' }}>
            Free 30 min · No commitment
          </div>
        </div>

      </div>
    </section>
  )
}
