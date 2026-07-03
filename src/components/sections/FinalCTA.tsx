'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useBooking } from '@/components/BookingContext'

export default function FinalCTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const { openModal } = useBooking()

  return (
    <section ref={ref} className="py-28 sm:py-36 bg-[#0F1629]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold text-gray-600 uppercase tracking-[0.2em] mb-6">
            Ready to stop the bleeding?
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
            Stop losing patients<br />to a slow reply.
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            Book a free 20-minute strategy call. We&apos;ll map out exactly where your clinic is
            losing revenue and show you how to fix it — no pitch decks, no pressure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <Button
            size="lg"
            onClick={openModal}
            className="gap-2 text-base px-8 py-4 rounded-xl shadow-lg"
          >
            Book My Free Strategy Call
            <ArrowRight className="w-5 h-5" />
          </Button>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 mt-1">
            {['20 minutes', 'No obligation', "You don't pay until you see results"].map((item, i) => (
              <span key={item} className="flex items-center gap-2 text-sm text-gray-500">
                {i > 0 && <span className="w-1 h-1 rounded-full bg-gray-700 hidden sm:block" />}
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
