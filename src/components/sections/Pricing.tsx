'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { useBooking } from '@/components/BookingContext'

const plans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/month',
    description: 'Perfect for small crews getting visibility for the first time.',
    workers: 'Up to 10 workers',
    features: [
      'GPS-verified check-ins',
      'Instant no-show alerts (SMS)',
      'Client auto-confirmation texts',
      'English SMS + Spanish SMS',
      'Dashboard app for the Manager',
      'Schedule Set-up',
      'Email support',
      'Stock Supply Alert',
      'Stock Supply Management',
      'Auto confirmation report to client'
    ],
    cta: 'Start Free Trial',
    highlight: true,
    badge: 'Most Popular',
  },
  {
    name: 'Pro',
    price: '$399',
    period: '/month',
    description: 'For growing companies managing bigger crews across multiple sites.',
    workers: 'Up to 50 workers',
    features: [
      'Everything in Starter',
      'Stock AI-Analysis',
      'Worker AI- Analysis',
    ],
    cta: 'Start Free Trial',
    highlight: false,
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })
  const { openModal } = useBooking()

  return (
    <section id="pricing" ref={ref} className="py-24 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.18em] mb-4">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Simple, honest pricing.
          </h2>
          <p className="text-gray-500 text-lg">
            14-day free trial. No credit card needed. Cancel anytime.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid sm:grid-cols-2 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                plan.highlight
                  ? 'border-[#1B2B5E] bg-[#1B2B5E] text-white shadow-xl'
                  : 'border-gray-200 bg-white text-gray-900'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-[#22C55E] text-white text-xs font-bold px-4 py-1 rounded-full">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className={`text-sm font-bold uppercase tracking-wider mb-1 ${plan.highlight ? 'text-green-300' : 'text-gray-400'}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-5xl font-black">{plan.price}</span>
                  <span className={`text-lg ${plan.highlight ? 'text-white/60' : 'text-gray-400'}`}>{plan.period}</span>
                </div>
                <p className={`text-sm ${plan.highlight ? 'text-white/70' : 'text-gray-500'}`}>
                  {plan.workers}
                </p>
              </div>

              <p className={`text-sm mb-6 leading-relaxed ${plan.highlight ? 'text-white/70' : 'text-gray-500'}`}>
                {plan.description}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-[#22C55E]' : 'text-[#22C55E]'}`} />
                    <span className={`text-sm ${plan.highlight ? 'text-white/85' : 'text-gray-700'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={openModal}
                className={`group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                  plan.highlight
                    ? 'bg-[#22C55E] text-white hover:bg-green-400'
                    : 'bg-[#1B2B5E] text-white hover:bg-[#162347]'
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-gray-400 mt-8"
        >
          Need more than 50 workers?{' '}
          <a href="mailto:hello@showedly.com" className="text-[#1B2B5E] font-semibold hover:underline">
            Contact us
          </a>{' '}
          for custom pricing.
        </motion.p>
      </div>
    </section>
  )
}
