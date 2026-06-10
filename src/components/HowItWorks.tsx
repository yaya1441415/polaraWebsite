'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

function MiniPhone({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[160px] bg-gray-900 rounded-[30px] border-[5px] border-gray-800 shadow-xl overflow-hidden">
        <div className="flex justify-center pt-2 pb-0.5 bg-white">
          <div className="w-14 h-4 bg-gray-900 rounded-full" />
        </div>
        <div className="bg-white min-h-[260px]">{children}</div>
        <div className="flex justify-center py-1.5 bg-white">
          <div className="w-12 h-0.5 bg-gray-200 rounded-full" />
        </div>
      </div>
      {label && (
        <p className="mt-2 text-xs text-gray-400 font-medium text-center">{label}</p>
      )}
    </div>
  )
}

const steps = [
  {
    number: '01',
    title: 'You add the job.',
    description:
      "Enter the address, time, and which worker. That's it. Takes about 30 seconds. You can do it from your phone.",
    visual: (
      <div className="p-4 space-y-3">
        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">New Job</p>
        <div className="space-y-2">
          {[
            { label: 'Address', value: '400 Oak St, Suite 200' },
            { label: 'Time', value: '9:00 AM — Today' },
            { label: 'Worker', value: 'Maria G.' },
          ].map((f) => (
            <div key={f.label} className="bg-gray-50 border border-gray-100 rounded-lg px-2.5 py-2">
              <p className="text-[8px] text-gray-400 mb-0.5">{f.label}</p>
              <p className="text-[10px] font-semibold text-gray-900">{f.value}</p>
            </div>
          ))}
        </div>
        <button className="w-full bg-[#1B2B5E] text-white text-[10px] font-bold py-2 rounded-xl">
          Create Job →
        </button>
      </div>
    ),
    visualLabel: 'Showedly app — 30 sec',
  },
  {
    number: '02',
    title: 'Worker gets a text. No app.',
    description:
      "Maria gets an SMS the moment her shift starts: her job details and a one-tap check-in link. No app download. No login. No confusion. If she doesn't speak English, the message goes out in Spanish.",
    visual: (
      <div className="bg-white h-full">
        {/* Messages header */}
        <div className="bg-gray-50 border-b border-gray-100 px-3 py-2 flex items-center gap-1">
          <span className="text-blue-500 text-xs">‹</span>
          <div className="flex-1 text-center">
            <p className="text-[9px] font-semibold text-gray-900">Showedly</p>
          </div>
        </div>
        <div className="p-3 space-y-3">
          <p className="text-[8px] text-gray-400 text-center">9:00 AM</p>
          <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-2.5 py-2">
            <p className="text-[9px] text-gray-800 leading-relaxed">
              Hi Maria! 👋 You're at:
            </p>
            <div className="mt-1 bg-white rounded-lg px-2 py-1.5 border border-gray-200">
              <p className="text-[9px] font-bold text-gray-900">Oak St Office Park</p>
              <p className="text-[8px] text-gray-500">9:00 AM today</p>
            </div>
            <p className="text-[9px] text-gray-700 mt-1">
              Tap when you arrive ↓
            </p>
          </div>
          <button className="w-full bg-[#22C55E] text-white text-[9px] font-bold py-2 rounded-xl">
            ✓ I'm Here — Check In
          </button>
          <p className="text-[8px] text-gray-400 text-center">
            No app needed · Works on any phone
          </p>
        </div>
      </div>
    ),
    visualLabel: "Worker's phone",
  },
  {
    number: '03',
    title: 'You know first. Always.',
    description:
      "If Maria checks in, you see it instantly. If she doesn't — at 9:15 AM, 15 minutes after the job starts — you get a text. Not your client. You.",
    visual: (
      <div
        className="h-full flex flex-col"
        style={{ background: 'linear-gradient(160deg, #0f172a 0%, #1e293b 100%)' }}
      >
        <div className="text-center pt-4 pb-2">
          <p className="text-2xl font-thin text-white">9:15</p>
          <p className="text-[8px] text-gray-500">Tuesday</p>
        </div>
        <div className="mx-2 bg-white/10 border border-white/20 rounded-xl p-2.5">
          <div className="flex items-center gap-1.5 mb-1.5">
            <div className="w-4 h-4 bg-[#22C55E] rounded-md flex items-center justify-center">
              <span className="text-white text-[7px] font-black">S</span>
            </div>
            <span className="text-[8px] font-semibold text-white/90">SHOWEDLY</span>
            <span className="text-[7px] text-white/50 ml-auto">now</span>
          </div>
          <p className="text-[9px] font-bold text-white leading-snug">
            ⚠️ Maria hasn't checked in
          </p>
          <p className="text-[8px] text-white/70 leading-snug mt-0.5">
            Oak St · 9:00 AM · 15 min late
          </p>
          <div className="flex gap-1 mt-2">
            <button className="flex-1 bg-white/10 border border-white/20 text-white text-[7px] font-semibold py-1 rounded-lg">
              📞 Call
            </button>
            <button className="flex-1 bg-[#22C55E] text-white text-[7px] font-semibold py-1 rounded-lg">
              Reassign
            </button>
          </div>
        </div>
        <p className="text-center text-[8px] text-gray-600 mt-2 px-3">
          Your client still doesn't know.
        </p>
      </div>
    ),
    visualLabel: "Your phone — 15 min before client calls",
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.08 })

  return (
    <section id="how-it-works" ref={ref} className="py-24 sm:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.18em] mb-4">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 tracking-tight">
            Three steps. No training required.
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto">
            Your workers don't download anything.
            You don't need an IT department.
            It just works.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-16 sm:space-y-24">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              className={`flex flex-col ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-10 lg:gap-16`}
            >
              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                <span className="text-xs font-black text-[#22C55E] uppercase tracking-[0.2em]">
                  Step {step.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2 mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Phone visual */}
              <div className="shrink-0">
                <MiniPhone label={step.visualLabel}>{step.visual}</MiniPhone>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
