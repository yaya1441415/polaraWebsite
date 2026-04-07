import { ArrowRight, MessageSquare, Shield, TrendingUp } from 'lucide-react'

const stats = [
  { value: '3 min', label: 'Setup time', color: '#fbbf24' },
  { value: '24/7', label: 'Always available', color: '#34d399' },
  { value: '90%', label: 'Query resolution rate', color: '#818cf8' },
]

const chatMessages = [
  { from: 'user', text: 'What does my home policy cover for water damage?' },
  { from: 'bot', text: 'Your Platinum Home policy covers sudden water damage from burst pipes up to $50,000. Want me to pull up your full coverage details?' },
  { from: 'user', text: 'Yes please, and can I add flood coverage?' },
  { from: 'bot', text: 'Of course! Flood coverage can be added for ~$28/month. Shall I schedule a call with your agent?' },
]

export default function Hero() {
  return (
    <section style={{
      background: 'linear-gradient(145deg, #06091a 0%, #0d1b3e 40%, #130d2e 75%, #0a1628 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: 100,
      paddingBottom: 96,
      overflow: 'hidden',
      position: 'relative',
    }}>

      {/* Ambient glow orbs — varied colors */}
      <div style={{
        position: 'absolute', top: '5%', left: '-5%',
        width: 560, height: 560,
        background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '35%', right: '-8%',
        width: 640, height: 640,
        background: 'radial-gradient(circle, rgba(37,99,235,0.16) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '35%',
        width: 480, height: 480,
        background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '20%', left: '42%',
        width: 320, height: 320,
        background: 'radial-gradient(circle, rgba(251,191,36,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Subtle grid texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ width: '100%', position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'center',
        }} className="hero-grid">

          {/* Left — Copy */}
          <div>
            {/* Pill badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'linear-gradient(135deg, rgba(251,191,36,0.12), rgba(251,191,36,0.06))',
              border: '1px solid rgba(251,191,36,0.25)',
              borderRadius: 100, padding: '7px 16px',
              marginBottom: 32,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fbbf24', boxShadow: '0 0 6px #fbbf24' }} />
              <span style={{ color: '#fde68a', fontSize: 13, fontWeight: 500 }}>
                Now available for insurance companies
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(38px, 5vw, 62px)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.035em',
              color: 'white',
              marginBottom: 24,
            }}>
              Your insurance website,{' '}
              <br />
              <span style={{
                background: 'linear-gradient(120deg, #60a5fa 0%, #a78bfa 45%, #06b6d4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                turned into a 24/7 advisor
              </span>
            </h1>

            <p style={{
              fontSize: 17,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.8,
              marginBottom: 40,
              maxWidth: 460,
            }}>
              Polara embeds a smart chatbot into your website that instantly answers client questions,
              explains policies, and qualifies leads — automatically.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginBottom: 52 }}>
              <a href="#book" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                color: 'white',
                fontSize: 15, fontWeight: 600,
                padding: '13px 26px',
                borderRadius: 12, border: 'none',
                boxShadow: '0 4px 20px rgba(79,70,229,0.4)',
                transition: 'transform 0.15s, box-shadow 0.2s',
                cursor: 'pointer',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(79,70,229,0.5)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(79,70,229,0.4)'
                }}
              >
                Book a Free Demo <ArrowRight size={16} />
              </a>
              <a href="#how-it-works" style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'rgba(255,255,255,0.06)',
                color: 'rgba(255,255,255,0.8)',
                fontSize: 15, fontWeight: 600,
                padding: '13px 26px',
                borderRadius: 12,
                border: '1px solid rgba(255,255,255,0.12)',
                transition: 'background 0.15s, border-color 0.15s',
              }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.2)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'
                  ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'
                }}
              >
                See how it works
              </a>
            </div>

            {/* Stats — each with its own accent color */}
            <div style={{
              display: 'flex', gap: 0, flexWrap: 'wrap',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              paddingTop: 28,
            }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{
                  paddingRight: 36,
                  marginRight: 36,
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}>
                  <div style={{
                    fontSize: 30, fontWeight: 800,
                    color: s.color,
                    letterSpacing: '-0.03em',
                    textShadow: `0 0 20px ${s.color}44`,
                  }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', marginTop: 3 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Chat mockup */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: 420,
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 22,
              overflow: 'hidden',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 32px 80px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)',
            }}>
              {/* Chat header */}
              <div style={{
                padding: '16px 20px',
                background: 'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(79,70,229,0.15))',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}>
                <div style={{
                  width: 38, height: 38,
                  background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
                  borderRadius: 11,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(79,70,229,0.4)',
                }}>
                  <MessageSquare size={18} color="white" />
                </div>
                <div>
                  <div style={{ color: 'white', fontWeight: 600, fontSize: 14 }}>InsureBot</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, display: 'flex', alignItems: 'center', gap: 5 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#34d399', boxShadow: '0 0 5px #34d399' }} />
                    Online — powered by Polara
                  </div>
                </div>

                {/* Window dots */}
                <div style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
                  {['#ef4444', '#fbbf24', '#34d399'].map(c => (
                    <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c, opacity: 0.6 }} />
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div style={{ padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {chatMessages.map((msg, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start',
                  }}>
                    <div style={{
                      maxWidth: '82%',
                      padding: '10px 14px',
                      borderRadius: msg.from === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      background: msg.from === 'user'
                        ? 'linear-gradient(135deg, #4f46e5, #2563eb)'
                        : 'linear-gradient(135deg, rgba(6,182,212,0.12), rgba(99,102,241,0.08))',
                      border: msg.from === 'bot' ? '1px solid rgba(6,182,212,0.15)' : 'none',
                      color: 'white',
                      fontSize: 13,
                      lineHeight: 1.6,
                    }}>
                      {msg.text}
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                <div style={{ display: 'flex', gap: 5, paddingLeft: 4 }}>
                  {[0, 1, 2].map(i => (
                    <div key={i} style={{
                      width: 7, height: 7,
                      borderRadius: '50%',
                      background: i === 0 ? '#60a5fa' : i === 1 ? '#a78bfa' : '#06b6d4',
                      animation: `bounce 1.2s ease-in-out ${i * 0.18}s infinite`,
                      opacity: 0.7,
                    }} />
                  ))}
                </div>
              </div>

              {/* Input */}
              <div style={{
                padding: '12px 16px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                display: 'flex', gap: 10, alignItems: 'center',
                background: 'rgba(0,0,0,0.15)',
              }}>
                <div style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 10,
                  padding: '9px 14px',
                  color: 'rgba(255,255,255,0.25)',
                  fontSize: 13,
                }}>
                  Ask anything about your policy…
                </div>
                <div style={{
                  width: 36, height: 36,
                  background: 'linear-gradient(135deg, #4f46e5, #06b6d4)',
                  borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 10px rgba(79,70,229,0.35)',
                }}>
                  <ArrowRight size={16} color="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        background: 'rgba(0,0,0,0.25)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '16px 24px',
        display: 'flex',
        justifyContent: 'center',
        gap: 48,
        flexWrap: 'wrap',
      }}>
        {[
          { icon: <Shield size={14} />, text: 'GDPR Compliant', color: '#34d399' },
          { icon: <TrendingUp size={14} />, text: 'Reduces support calls by 60%', color: '#fbbf24' },
          { icon: <MessageSquare size={14} />, text: 'Works on any website', color: '#818cf8' },
        ].map(b => (
          <div key={b.text} style={{
            display: 'flex', alignItems: 'center', gap: 7,
            color: 'rgba(255,255,255,0.4)', fontSize: 13, fontWeight: 500,
          }}>
            <span style={{ color: b.color }}>{b.icon}</span>
            {b.text}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.7; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        @media (max-width: 860px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
