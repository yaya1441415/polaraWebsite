'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, TrendingDown, ThumbsUp, Shield, AlertTriangle } from 'lucide-react'

const metrics = [
  {
    Icon: Clock,
    stat: '8+ hrs',
    label: 'Saved per week',
    description:
      'Stop spending your Sunday nights building next week\'s schedule. Showedly does it in 15 minutes.',
    color: { bg: 'bg-blue-50', icon: 'text-blue-600', stat: 'text-blue-600' },
  },
  {
    Icon: TrendingDown,
    stat: '87%',
    label: 'Fewer no-shows',
    description:
      'GPS accountability means workers show up—and you know instantly when they don\'t, before clients complain.',
    color: { bg: 'bg-emerald-50', icon: 'text-emerald-600', stat: 'text-emerald-600' },
  },
  {
    Icon: ThumbsUp,
    stat: '3×',
    label: 'Higher client retention',
    description:
      'Automatic proof of service builds trust and keeps clients renewing month after month.',
    color: { bg: 'bg-purple-50', icon: 'text-purple-600', stat: 'text-purple-600' },
  },
  {
    Icon: Shield,
    stat: '100%',
    label: 'Job accountability',
    description:
      'Every job is logged, GPS-verified, and documented. No more disputes about whether work was done.',
    color: { bg: 'bg-amber-50', icon: 'text-amber-600', stat: 'text-amber-600' },
  },
  {
    Icon: AlertTriangle,
    stat: '$0',
    label: 'Supply emergencies',
    description:
      'Automated reordering means your team never shows up to a job unprepared or underprepared.',
    color: { bg: 'bg-red-50', icon: 'text-red-600', stat: 'text-red-600' },
  },
]

const beforeAfter = [
  { task: 'Weekly scheduling', before: '3 hours', after: '15 min' },
  { task: 'Worker check-ins', before: 'Manual calls', after: 'Automatic' },
  { task: 'Client updates', before: 'You call each one', after: 'Auto-SMS' },
  { task: 'No-show response', before: 'Client calls first', after: 'Instant alert' },
  { task: 'Supply management', before: 'Run out mid-job', after: 'Auto-reorder' },
]

export default function ROI() {
  const ref = useRef(null)
  const ref2 = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })
  const inView2 = useInView(ref2, { once: true, amount: 0.2 })

  return (
    <section id="results" ref={ref} className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-7">
            Real results
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5 tracking-tight leading-tight">
            Save Hours Every Week.<br />
            <span className="text-gray-400">Starting Day One.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Cleaning business owners using Showedly get back their evenings and weekends. Here's what changes.
          </p>
        </motion.div>

        {/* Metric cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.07 + i * 0.09 }}
              className={`p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className={`w-11 h-11 ${m.color.bg} rounded-xl flex items-center justify-center mb-5`}>
                <m.Icon className={`w-5 h-5 ${m.color.icon}`} strokeWidth={2} />
              </div>
              <div className={`text-5xl font-black mb-1 ${m.color.stat}`}>{m.stat}</div>
              <div className="text-base font-bold text-gray-900 mb-2">{m.label}</div>
              <p className="text-sm text-gray-500 leading-relaxed">{m.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Before / After table */}
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: 24 }}
          animate={inView2 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gray-950 rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-3 text-xs font-bold uppercase tracking-widest px-6 py-4 border-b border-gray-800">
            <span className="text-gray-500">Task</span>
            <span className="text-red-400 text-center">Before Showedly</span>
            <span className="text-emerald-400 text-center">With Showedly</span>
          </div>
          {beforeAfter.map((row, i) => (
            <div
              key={row.task}
              className={`grid grid-cols-3 px-6 py-4 items-center ${
                i !== beforeAfter.length - 1 ? 'border-b border-gray-800/60' : ''
              }`}
            >
              <span className="text-sm font-medium text-gray-300">{row.task}</span>
              <span className="text-sm text-red-400 text-center font-medium">{row.before}</span>
              <span className="text-sm text-emerald-400 text-center font-semibold">{row.after}</span>
            </div>
          ))}
          <div className="px-6 py-5 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm">
              "Before Showedly, I spent 3 hours every Monday on scheduling alone. Now it takes 15 minutes—and I actually take Sundays off."
            </p>
            <div className="flex items-center justify-center gap-3 mt-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                RM
              </div>
              <div className="text-left">
                <p className="text-white text-sm font-semibold">Rosa Martinez</p>
                <p className="text-gray-500 text-xs">Owner, Martinez Cleaning Services · Dallas, TX</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
