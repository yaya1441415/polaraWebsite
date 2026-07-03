'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Plug, Zap, CalendarCheck, Repeat2 } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Plug,
    title: 'We connect to your existing tools',
    description:
      'We plug into your CRM, EHR, and booking system — no ripping and replacing. Your staff keeps working exactly as they do today.',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Every lead gets an instant AI response',
    description:
      'Instagram DM, website form, missed call, Google — every inquiry gets a reply in seconds, not hours. No lead slips through.',
  },
  {
    number: '03',
    icon: CalendarCheck,
    title: 'Consultations book themselves',
    description:
      'The AI qualifies the lead, answers questions, and books the consultation directly into your calendar — without anyone on your team lifting a finger.',
  },
  {
    number: '04',
    icon: Repeat2,
    title: 'The entire journey runs on autopilot',
    description:
      'Reminders, post-treatment follow-ups, rebooking triggers, retention campaigns — every touchpoint handled automatically, every time, forever.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="how-it-works" ref={ref} className="py-24 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0F0F0F] leading-tight">
            Four steps. Zero guesswork.
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            We build the system around your clinic, all custom for you, no a new tool to learn.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.1 }}
                className="bg-[#FAFAF8] border border-gray-100 rounded-2xl p-7 hover:border-blue-100 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-xs font-bold text-blue-600 tracking-widest">{step.number}</span>
                    <div className="mt-2 w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F0F0F] text-base mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
