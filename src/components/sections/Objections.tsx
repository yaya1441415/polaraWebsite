'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const objections = [
  {
    q: 'Will my workers actually use it?',
    a: "Yes — because they don't have to download anything. They get a text. They tap a link. That's it. In beta, workers with zero smartphone experience checked in on day one. If they can read a WhatsApp message, they can use Showedly.",
  },
  {
    q: 'What about my Spanish-speaking workers?',
    a: 'The SMS goes out in Spanish automatically on the Pro plan. The check-in button works the same way. No confusion, no translation needed. We built this specifically for companies with Hispanic crews.',
  },
  {
    q: "What if they check in from home and didn't actually show up?",
    a: "Showedly uses GPS to verify they're within 500 feet of the job site when they tap the check-in link. If they're at home and tap it, the check-in is rejected and you get alerted. They can't fake it.",
  },
]

export default function Objections() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.18em] mb-4">
            Common questions
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Things people ask before signing up.
          </h2>
        </motion.div>

        <div className="space-y-8">
          {objections.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              className="bg-white rounded-2xl border border-gray-100 p-7 shadow-sm"
            >
              <h3 className="text-lg font-black text-gray-900 mb-3">{item.q}</h3>
              <p className="text-gray-500 leading-relaxed">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
