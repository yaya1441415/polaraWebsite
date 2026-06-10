'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    quote:
      "I lost a $4,200/month contract because a crew didn't show and the client called me before I knew. That's what made me look for something. Showedly would have texted me at 9:15. I would have been able to fix it before anyone complained.",
    name: 'Rosa M.',
    role: 'Owner, 14-person crew — Miami, FL',
    initial: 'R',
    color: 'bg-rose-100 text-rose-700',
  },
  {
    quote:
      "I manage a medical office building — $3,800 a month. The property manager called twice in one month about missed cleans. I was one more call away from losing it. Since Showedly, I've had zero complaints. Zero. That contract is safe now.",
    name: 'James T.',
    role: 'Owner, 22 workers — Atlanta, GA',
    initial: 'J',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    quote:
      "Mis trabajadores no quieren descargar apps. Con Showedly solo reciben un mensaje. Nada más. El check-in pasó de 60% a 90% en la primera semana. Ahora sé exactamente quién llegó y a qué hora.",
    name: 'Carmen V.',
    role: 'Dueña, 11 empleados — Houston, TX',
    initial: 'C',
    color: 'bg-green-100 text-green-700',
    translated: 'My workers get a text. No app. Check-in rate went from 60% to 90% in week one.',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.18em] mb-4">
            Early beta users
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
            From people who had the same fear you do.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
              className="flex flex-col bg-gray-50 border border-gray-100 rounded-2xl p-7"
            >
              <blockquote className="text-gray-700 text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {t.translated && (
                <p className="text-xs text-gray-400 italic mb-4 border-l-2 border-gray-200 pl-3">
                  {t.translated}
                </p>
              )}

              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${t.color}`}>
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
