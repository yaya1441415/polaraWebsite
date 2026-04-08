const steps = [
  {
    number: '01',
    title: 'We talk',
    desc: 'Book a 30-minute call. You walk me through how your business runs — I listen for where AI can make the biggest difference.',
  },
  {
    number: '02',
    title: 'I find the opportunity',
    desc: 'I map your operations and identify exactly where implementing AI will save you the most time and money — no guesswork.',
  },
  {
    number: '03',
    title: 'I implement the AI',
    desc: 'I build and deploy a custom AI system directly in your business. It runs 24/7. You keep every dollar it saves and every hour it frees.',
  },
]

export default function HowItWorks() {
  return (
    <section style={{
      background: '#0A0A0A',
      padding: '120px 0',
      borderTop: '1px solid #1A1A1A',
    }}>
      <div className="container">

        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: 72,
          gap: 32,
          flexWrap: 'wrap',
        }}>
          <div>
            <div className="label">The Process</div>
            <h2 style={{
              fontSize: 'clamp(32px, 4vw, 52px)',
              fontWeight: 700,
              color: '#F5F5F5',
            }}>
              Simple.<br />Fast.<br />Precise.
            </h2>
          </div>
          <p style={{
            fontSize: 16,
            color: '#555555',
            maxWidth: 340,
            lineHeight: 1.75,
          }}>
            No retainers. No decks. No wasted time.
            Just a focused process that ends with real AI running in your business.
          </p>
        </div>

        <div className="steps-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 1,
          background: '#1A1A1A',
          border: '1px solid #1A1A1A',
          borderRadius: 14,
          overflow: 'hidden',
        }}>
          {steps.map((step) => (
            <div key={step.number} style={{
              background: '#0A0A0A',
              padding: '48px 36px',
            }}>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 12,
                fontWeight: 700,
                color: '#C8FF00',
                letterSpacing: '0.1em',
                marginBottom: 32,
              }}>
                {step.number}
              </div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 22,
                fontWeight: 700,
                color: '#F5F5F5',
                marginBottom: 14,
                letterSpacing: '-0.02em',
              }}>
                {step.title}
              </h3>
              <p style={{
                fontSize: 15,
                color: '#666666',
                lineHeight: 1.75,
              }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
