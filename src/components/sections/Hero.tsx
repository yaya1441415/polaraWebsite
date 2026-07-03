'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import { useBooking } from '@/components/BookingContext'

export default function Hero() {
  const { openModal } = useBooking()

  return (
    <section className="min-h-screen bg-[#FAFAF8] flex items-center pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-8">
            AI Patient Journey Automation for Med Spas &amp; Aesthetic Clinics
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold text-[#0F0F0F] leading-[1.08] tracking-tight mb-7"
        >
          Every Lead You Don&apos;t Follow Up<br className="hidden sm:block" />
          {' '}Is $4000/year{' '}
          <span className="text-blue-600">Someone Else Books.</span>
        </motion.h1>

        

        {/* CTA group */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.34 }}
          className="flex flex-col items-center gap-4"
        >
          <Button
            size="lg"
            onClick={openModal}
            className="gap-2 text-base px-8 py-4 rounded-xl shadow-md hover:shadow-lg"
          >
            Book Your Free Strategy Call
            <ArrowRight className="w-5 h-5" />
          </Button>
          <p className="text-sm text-gray-400">
            20 minutes &middot; Zero obligation &middot; You don&apos;t pay until you see results
          </p>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 flex items-center justify-center gap-4"
        >
          <div className="h-px w-16 bg-gray-200" />
          <p className="text-xs text-gray-400 font-medium tracking-widest uppercase">
            The Full Patient Journey, Automated
          </p>
          <div className="h-px w-16 bg-gray-200" />
        </motion.div>
      </div>
    </section>
  )
}
