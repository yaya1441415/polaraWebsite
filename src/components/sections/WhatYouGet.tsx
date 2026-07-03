'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, Target, Calendar, TrendingUp } from 'lucide-react'

const stages = [
  {
    icon: Target,
    label: 'Lead Capture',
    color: 'bg-violet-50 text-violet-600',
    items: [
      'Instant response to every inquiry (under 8 seconds)',
      'Multi-channel: Instagram, website, calls, Google',
      'Automatic CRM entry — zero manual work',
      'AI conversations that qualify leads',
      'Consultation booked without your team\'s involvement',
      'Automated communication between CRM and EHR'
    ],
  },
  {
    icon: Calendar,
    label: 'Clinic Operations',
    color: 'bg-blue-50 text-blue-600',
    items: [
      'Calendar sync and management',
      'Booking confirmation sent automatically',
      '24-hour appointment reminder',
      '1-hour appointment reminder',
      'No-show follow-up triggered instantly',
    ],
  },
  {
    icon: TrendingUp,
    label: 'Revenue & Retention',
    color: 'bg-emerald-50 text-emerald-600',
    items: [
      'Post-consultation follow-up',
      'Treatment appointment booking',
      'Post-treatment check-in message',
      'Rebooking reminder at the right interval',
      'Long-term retention campaigns',
    ],
  },
]

export default function WhatYouGet() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
            Everything That Runs on Autopilot
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F0F0F] leading-tight">
            The full patient journey.<br />
            <span className="text-blue-600">Every touchpoint covered.</span>
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-xl mx-auto">
            From the first message to the fifth rebooking — every stage of your funnel, automated.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stages.map((stage, i) => {
            const Icon = stage.icon
            return (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.12 }}
                className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm"
              >
                <div className={`inline-flex w-10 h-10 rounded-xl items-center justify-center mb-4 ${stage.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-[#0F0F0F] text-base mb-5">
                  {stage.label}
                </h3>
                <ul className="space-y-3">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-500 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Total count callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-[#0F0F0F]">15 automated touchpoints.</span>{' '}
            All running 24/7. All connected to what you already have.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
