'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ClientProof() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.18em] mb-4">
              Client confidence
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-[1.08] tracking-tight mb-6">
              Your clients stop<br />
              asking if anyone came.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              The moment a worker checks in, Showedly can send your client an automatic
              confirmation — a professional text saying their office has been serviced.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              No more "did anyone come today?" calls. Your clients feel taken care of.
              You look like a professional operation.
            </p>
          </motion.div>

          {/* Right: client SMS phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="flex flex-col items-center">
              <div className="w-[220px] bg-gray-900 rounded-[40px] border-[6px] border-gray-800 shadow-2xl overflow-hidden">
                {/* Dynamic island */}
                <div className="flex justify-center pt-3 pb-1.5 bg-white">
                  <div className="w-20 h-5 bg-gray-900 rounded-full" />
                </div>

                {/* Messages header */}
                <div className="bg-white border-b border-gray-100 px-4 py-2.5 flex items-center gap-2">
                  <span className="text-blue-500 text-sm">‹</span>
                  <div className="flex-1 text-center">
                    <p className="text-xs font-semibold text-gray-900">Oak Street Properties</p>
                    <p className="text-[10px] text-gray-400">SMS</p>
                  </div>
                </div>

                {/* SMS content */}
                <div className="bg-white px-4 py-5 space-y-4 min-h-[260px]">
                  <p className="text-[9px] text-gray-400 text-center">Today, 9:04 AM</p>

                  {/* From Showedly */}
                  <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-3 py-2.5 max-w-[88%]">
                    <p className="text-[10px] text-gray-800 leading-relaxed">
                      Hi! Your cleaning at{' '}
                      <span className="font-semibold">400 Oak St, Suite 200</span>{' '}
                      has been completed. ✅
                    </p>
                    <p className="text-[10px] text-gray-700 mt-1 leading-relaxed">
                      Checked in: 9:02 AM
                      <br />
                      Service by: Oak Clean Co.
                    </p>
                  </div>

                  {/* Client reply */}
                  <div className="flex justify-end">
                    <div className="bg-[#1B2B5E] rounded-2xl rounded-tr-sm px-3 py-2 max-w-[72%]">
                      <p className="text-[10px] text-white leading-relaxed">
                        Thank you! Great as always 🙌
                      </p>
                    </div>
                  </div>
                </div>

                {/* Home bar */}
                <div className="flex justify-center py-2 bg-white">
                  <div className="w-16 h-1 bg-gray-200 rounded-full" />
                </div>
              </div>

              <p className="mt-3 text-xs text-gray-400 font-medium">
                Your client receives this automatically
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
