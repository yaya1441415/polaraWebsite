'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Nightmare() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-[#0A0F1E]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold text-gray-600 uppercase tracking-[0.2em] mb-12"
        >
          Sound familiar?
        </motion.p>

        {/* The story — each beat reveals on scroll */}
        <div className="space-y-5">
          {[
            { text: "It's 9:47 AM on a Tuesday.", delay: 0.1 },
            { text: 'Your phone rings.', delay: 0.2 },
            { text: "It's your biggest client.", delay: 0.3 },
          ].map(({ text, delay }) => (
            <motion.p
              key={text}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay }}
              className="text-xl sm:text-2xl text-gray-400 font-medium"
            >
              {text}
            </motion.p>
          ))}

          {/* The client quote — the moment of dread */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="py-6"
          >
            <blockquote className="text-2xl sm:text-4xl font-black text-white leading-tight">
              "Did anyone come today?<br />
              Our office hasn't been touched."
            </blockquote>
          </motion.div>

          {[
            { text: "You open WhatsApp. Maria hasn't responded.", delay: 0.55 },
            { text: "You call. No answer.", delay: 0.65 },
          ].map(({ text, delay }) => (
            <motion.p
              key={text}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay }}
              className="text-xl text-gray-500"
            >
              {text}
            </motion.p>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.75 }}
            className="text-xl text-gray-500"
          >
            You didn't know.{' '}
            <span className="text-gray-400 font-semibold">
              You had no way of knowing.
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.85 }}
            className="text-base text-gray-600"
          >
            That phone call costs you trust you spent two years building.
          </motion.p>
        </div>

        {/* The turn */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-14 pt-10 border-t border-gray-800"
        >
          <p className="text-lg sm:text-xl text-[#22C55E] font-semibold leading-relaxed">
            Showedly would have texted you at 9:15 AM.
            <br />
            <span className="text-white/60 font-normal text-base">
              Before your client found out. Before you lost that contract.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
