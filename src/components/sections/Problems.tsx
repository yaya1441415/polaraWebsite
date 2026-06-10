'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { X } from 'lucide-react'

const problems = [
  {
    title: 'Workers forget to check in',
    description:
      'You have no idea if your team actually showed up until an angry client calls to complain—hours later.',
  },
  {
    title: 'Scheduling eats your morning',
    description:
      'Every Monday is three hours of calls and texts just to figure out who\'s working where. There has to be a better way.',
  },
  {
    title: 'Clients ask if jobs were done',
    description:
      'Without automatic updates, clients are left wondering—and you\'re fielding calls that should never have happened.',
  },
  {
    title: 'No visibility into field operations',
    description:
      'You\'re managing a team you can\'t see. You don\'t know if jobs are on track, late, or skipped entirely.',
  },
  {
    title: 'Supplies run out mid-job',
    description:
      'Workers arrive at a client\'s home with the wrong products—or none at all. The client is frustrated. So are you.',
  },
]

export default function Problems() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section ref={ref} className="py-28 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-semibold mb-7">
            Sound familiar?
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5 tracking-tight leading-tight">
            Managing a Cleaning Business<br />
            <span className="text-gray-500">Shouldn't Feel Like This</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Most cleaning owners run their entire operation through texts and spreadsheets. It's chaotic, exhausting, and completely unnecessary.
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 + i * 0.09 }}
              className={`p-6 rounded-2xl border border-gray-800 bg-gray-900 hover:border-gray-700 transition-colors group ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-9 h-9 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500/15 transition-colors">
                <X className="w-4 h-4 text-red-400" strokeWidth={2.5} />
              </div>
              <h3 className="text-base font-bold text-white mb-2 leading-snug">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
