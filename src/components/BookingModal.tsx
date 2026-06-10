'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useBooking } from './BookingContext'

// Replace with your actual Calendly event URL
const CALENDLY_URL =
  'https://calendly.com/yahyaouchch/chatbot-insurance?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=1B2B5E'

export default function BookingModal() {
  const { open, closeModal } = useBooking()

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [closeModal])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />

          {/* Modal panel */}
          <motion.div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 shrink-0">
              <div>
                <h2 className="text-base font-black text-gray-900">Book your 15-minute call</h2>
                <p className="text-sm text-gray-500 mt-0.5">Pick a time — no commitment, no credit card.</p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Calendly inline embed */}
            <iframe
              src={CALENDLY_URL}
              title="Schedule a 15-minute call with Showedly"
              className="w-full border-0"
              style={{ height: '600px' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
