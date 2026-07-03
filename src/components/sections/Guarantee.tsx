'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ShieldCheck } from 'lucide-react'

export default function Guarantee() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-[#0F1629]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 items-center justify-center mb-8">
            <ShieldCheck className="w-8 h-8 text-emerald-400" />
          </div>

          <p className="text-xs font-bold text-gray-600 uppercase tracking-[0.2em] mb-5">
            Our Guarantee
          </p>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight mb-7">
            You don&apos;t pay until<br />
            <span className="text-emerald-400">you see results.</span>
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            We build your entire automation system, run it for 30 days, and show you the
            exact numbers — leads captured, consultations booked, revenue recovered.
          </p>

          <p className="text-lg text-white font-medium">
            If you&apos;re not satisfied, you owe us nothing.
          </p>

          <p className="mt-3 text-gray-500 text-base">
            We take the risk. You keep the results either way.
          </p>
        </motion.div>

        {/* Supporting points */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-12 grid grid-cols-3 gap-4"
        >
          {[
            { value: '30', label: 'Days free' },
            { value: '$0', label: 'Until results' },
            { value: '100%', label: 'Risk on us' },
          ].map(({ value, label }) => (
            <div key={label} className="bg-white/5 border border-white/10 rounded-xl py-5 px-3">
              <p className="font-serif text-2xl font-bold text-white">{value}</p>
              <p className="text-xs text-gray-500 mt-1 font-medium">{label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
