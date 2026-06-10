'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { useBooking } from '@/components/BookingContext'

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const { openModal } = useBooking()

  return (
    <section ref={ref} className="py-28 bg-[#0A0F1E] relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(34,197,94,0.08),transparent)] pointer-events-none" />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Headline — outcome, not feature */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5 leading-[1.05] tracking-tight">
            Find out who showed up<br />
            <span className="text-[#22C55E]">before your client does.</span>
          </h2>

          <p className="text-gray-400 text-lg mb-10 leading-relaxed">
            Start your free 14-day trial today. No credit card.
            Setup takes 15 minutes. Your first alert might save a contract.
          </p>

          {/* Price visible — no surprise later */}
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gray-400 px-5 py-2.5 rounded-full text-sm font-medium mb-8">
            $49/month after trial &nbsp;·&nbsp; Cancel anytime
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button onClick={openModal} className="group flex items-center gap-2.5 bg-[#22C55E] hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 shadow-[0_4px_32px_rgba(34,197,94,0.3)] hover:shadow-[0_4px_40px_rgba(34,197,94,0.45)] w-full sm:w-auto justify-center">
              Start My Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Trust row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 text-sm text-gray-600 mb-10">
            {[
              'No credit card required',
              'Setup in 15 minutes',
              'No app for your workers',
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#22C55E] shrink-0" />
                {item}
              </span>
            ))}
          </div>

          {/* WhatsApp option — for owner-operators who prefer it */}
          <p className="text-gray-600 text-sm">
            Prefer to talk first?{' '}
            <a
              href="https://wa.me/1234567890"
              className="text-[#22C55E] font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Message us on WhatsApp
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
