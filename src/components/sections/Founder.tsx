'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Founder() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
            Who Builds This
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F0F0F]">
            Built by an engineer who saw the gap.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center sm:items-start gap-8 bg-[#FAFAF8] border border-gray-100 rounded-2xl p-8"
        >
          {/* Photo placeholder */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-100 flex items-center justify-center">
              <span className="text-3xl font-serif font-bold text-blue-600">Y</span>
            </div>
          </div>

          {/* Bio */}
          <div className="text-center sm:text-left">
            <p className="font-semibold text-[#0F0F0F] text-lg mb-1">Yahya</p>
            <p className="text-sm text-blue-600 font-medium mb-4">
              Founder, netsolution.ai &mdash; Seattle, WA
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              I&apos;m a software engineer who spent years automating complex systems. I built
              netsolution.ai after watching med spas spend thousands on ads — only to lose
              patients at the follow-up stage because the response was too slow or the reminder
              never went out.
            </p>
            <p className="text-gray-500 text-base leading-relaxed mt-3">
              I don&apos;t sell software. I build a custom automation system around your clinic,
              connect it to the tools you already have, and make sure every lead is followed up —
              every time.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
