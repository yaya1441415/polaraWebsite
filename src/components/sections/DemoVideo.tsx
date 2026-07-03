'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Play } from 'lucide-react'

export default function DemoVideo() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const [hovered, setHovered] = useState(false)

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-[#FAFAF8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-4">
            See It In Action
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0F0F0F]">
            Watch the full patient journey run on autopilot.
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            From the first Instagram DM to the fifth rebooking — all automated.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.15 }}
        >
          {/* Video placeholder */}
          <div
            className="relative w-full rounded-2xl overflow-hidden cursor-pointer group"
            style={{ aspectRatio: '16 / 9' }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="absolute inset-0 bg-[#0F1629]" />

            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            {/* Center play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-5">
              <motion.div
                animate={{ scale: hovered ? 1.08 : 1 }}
                transition={{ duration: 0.2 }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center"
              >
                <Play className="w-7 h-7 sm:w-9 sm:h-9 text-white fill-white ml-1" />
              </motion.div>
              <p className="text-white/40 text-sm font-medium tracking-wide">
                Demo coming soon
              </p>
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white/60 text-xs font-medium">netsolution.ai — Patient Journey Demo</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
