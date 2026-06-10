'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Button from './ui/Button'
import PhoneMockup from './PhoneMockup'
import { useBooking } from './BookingContext'

export default function Hero() {
  const { openModal } = useBooking()
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-16 flex items-center">
      {/* Very subtle top gradient — no dot grid */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-gray-50/80 to-transparent pointer-events-none" />

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* ── Left: Copy ── */}
          <div className="flex flex-col gap-6">

            {/* Headline — the fear, not a benefit list */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="text-5xl sm:text-6xl lg:text-[62px] font-black text-gray-900 leading-[1.05] tracking-tight"
            >
              Know Before<br />
              <span className="text-[#1B2B5E]">Your Client</span>{' '}
              <span className="text-[#22C55E]">Calls.</span>
            </motion.h1>

            {/* Subheadline — one idea only */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed max-w-md"
            >
              When a worker doesn't check in, Showedly alerts{' '}
              <em className="not-italic font-semibold text-gray-900">you</em> — not your client.
              GPS-verified arrivals. Instant no-show alerts.
              Works on any phone, no app needed.
            </motion.p>

            {/* Primary CTA — free trial, price visible */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="flex flex-col gap-3"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <Button size="lg" className="group w-full sm:w-auto justify-center" onClick={openModal}>
                  Start Free — 14-Day Trial
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
                <span className="text-sm text-gray-500 font-medium">
                  $49/month after. Cancel anytime.
                </span>
              </div>
            </motion.div>

            {/* Trust — honest, specific */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="flex flex-col gap-2"
            >
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {[
                  'No app download for your workers',
                  'Setup in 15 minutes',
                  'English & Spanish SMS',
                ].map((item) => (
                  <span key={item} className="flex items-center gap-1.5 text-sm text-gray-500">
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Right: Two phones showing the real product flow ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
