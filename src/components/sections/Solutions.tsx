'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin, Bell, CheckSquare2, Calendar, MessageSquare, Package } from 'lucide-react'

const features = [
  {
    Icon: MapPin,
    title: 'GPS Worker Check-In',
    description:
      'Workers receive a text link the moment their shift starts. One tap verifies their GPS location. No app download—ever.',
    bullets: ['SMS-based, zero friction', 'GPS-verified arrival', 'Instant timestamp'],
    color: { bg: 'bg-blue-50', border: 'border-blue-100', icon: 'text-blue-600', dot: 'bg-blue-500' },
  },
  {
    Icon: Bell,
    title: 'No-Show Alerts',
    description:
      'Get a push notification the moment a worker misses a job. Respond and reassign before your client ever notices.',
    bullets: ['Real-time alerts', 'Act before clients complain', 'Full incident log'],
    color: { bg: 'bg-red-50', border: 'border-red-100', icon: 'text-red-600', dot: 'bg-red-500' },
  },
  {
    Icon: CheckSquare2,
    title: 'Proof of Service',
    description:
      'When the job is done, your client automatically receives an SMS with the timestamp and GPS-verified proof of completion.',
    bullets: ['Auto-sent confirmation', 'GPS + timestamp included', 'Builds client loyalty'],
    color: { bg: 'bg-emerald-50', border: 'border-emerald-100', icon: 'text-emerald-600', dot: 'bg-emerald-500' },
  },
  {
    Icon: Calendar,
    title: 'Weekly Schedule Builder',
    description:
      'Build your entire week in minutes with a drag-and-drop interface. Workers get notified automatically—no more scheduling calls.',
    bullets: ['Drag-and-drop simplicity', 'Auto-assign by area', 'Team auto-notified'],
    color: { bg: 'bg-purple-50', border: 'border-purple-100', icon: 'text-purple-600', dot: 'bg-purple-500' },
  },
  {
    Icon: MessageSquare,
    title: 'Spanish SMS Support',
    description:
      'Communicate with your entire team in English or Spanish. No language barriers, no miscommunication, no missed instructions.',
    bullets: ['Bilingual SMS system', 'English & Spanish', 'Clear, consistent updates'],
    color: { bg: 'bg-amber-50', border: 'border-amber-100', icon: 'text-amber-600', dot: 'bg-amber-500' },
  },
  {
    Icon: Package,
    title: 'Automated Supply Ordering',
    description:
      'Track inventory in real-time and trigger auto-reorders before you run out. Your team always arrives fully stocked.',
    bullets: ['Live inventory tracking', 'Auto-reorder triggers', 'No more supply emergencies'],
    color: { bg: 'bg-teal-50', border: 'border-teal-100', icon: 'text-teal-600', dot: 'bg-teal-500' },
  },
]

export default function Solutions() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="features" ref={ref} className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-7">
            The complete solution
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-5 tracking-tight leading-tight">
            Everything Your Cleaning<br />Operation Needs
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            One platform that replaces your spreadsheets, group chats, and paper checklists—built specifically for cleaning companies.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.06 + i * 0.09 }}
              className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-gray-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <div
                className={`w-11 h-11 ${f.color.bg} border ${f.color.border} rounded-xl flex items-center justify-center mb-5`}
              >
                <f.Icon className={`w-5 h-5 ${f.color.icon}`} strokeWidth={2} />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{f.description}</p>
              <ul className="space-y-2">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-xs text-gray-600">
                    <span className={`w-1.5 h-1.5 rounded-full ${f.color.dot} shrink-0`} />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
