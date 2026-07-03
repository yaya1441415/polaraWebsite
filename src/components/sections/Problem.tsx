'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.12 })

  return (
    <section ref={ref} className="py-28 sm:py-36 bg-[#0F1629]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold text-gray-600 uppercase tracking-[0.2em] mb-14"
        >
          Sound familiar?
        </motion.p>

        <div className="space-y-5">

          {[
            { text: "It's 3 PM on a Tuesday.", delay: 0.05 },
            { text: 'A woman messages your Instagram:', delay: 0.13 },
            { text: '"Do you have Botox openings this week?"', delay: 0.21 },
          ].map(({ text, delay }) => (
            <motion.p
              key={text}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay }}
              className="text-xl sm:text-2xl text-gray-400 font-medium"
            >
              {text}
            </motion.p>
          ))}

          {[
            { text: 'Your front desk sees it two hours later.', delay: 0.32 },
            { text: "She's already booked with the clinic down the street.", delay: 0.42 },
          ].map(({ text, delay }) => (
            <motion.p
              key={text}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay }}
              className="text-xl text-gray-500"
            >
              {text}
            </motion.p>
          ))}

          {/* Punchline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.56 }}
            className="py-6"
          >
            <blockquote className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
              That wasn&apos;t a missed message.
            </blockquote>
            <blockquote className="font-serif text-3xl sm:text-5xl font-bold text-blue-400 leading-tight mt-2">
              That was $4,000 in lifetime revenue — gone.
            </blockquote>
          </motion.div>

          {[
            { text: "This happens every week.", delay: 0.7 },
            { text: "Not because your clinic isn't good enough.", delay: 0.78 },
            { text: "Because your follow-up isn't fast enough.", delay: 0.86 },
          ].map(({ text, delay }) => (
            <motion.p
              key={text}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay }}
              className="text-xl text-gray-500"
            >
              {text}
            </motion.p>
          ))}

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.98 }}
            className="text-xl sm:text-2xl text-blue-400 font-semibold pt-2"
          >
            Fast enough means seconds. Not hours.
          </motion.p>

        </div>
      </div>
    </section>
  )
}
