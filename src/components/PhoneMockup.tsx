'use client'

import { motion } from 'framer-motion'

function WorkerPhone() {
  return (
    <div className="w-[178px] bg-gray-900 rounded-[36px] border-[6px] border-gray-800 shadow-xl overflow-hidden flex flex-col">
      {/* Dynamic island */}
      <div className="flex justify-center pt-2.5 pb-1 bg-white">
        <div className="w-20 h-5 bg-gray-900 rounded-full" />
      </div>

      {/* Messages header */}
      <div className="bg-white border-b border-gray-100 px-3 py-2 flex items-center gap-2">
        <div className="text-blue-600 text-xs font-semibold">‹</div>
        <div className="flex-1 text-center">
          <p className="text-xs font-semibold text-gray-900">Showedly</p>
          <p className="text-[10px] text-gray-500">SMS</p>
        </div>
      </div>

      {/* SMS content */}
      <div className="bg-white flex-1 px-3 py-4 space-y-3">
        <p className="text-[9px] text-gray-400 text-center">8:55 AM</p>

        {/* Received bubble */}
        <div className="bg-gray-100 rounded-2xl rounded-tl-sm px-3 py-2.5 max-w-[90%]">
          <p className="text-[10px] text-gray-800 leading-relaxed">
            Hi Maria! 👋 You're scheduled at:
          </p>
          <div className="mt-1.5 bg-white rounded-lg px-2 py-1.5 border border-gray-200">
            <p className="text-[10px] font-bold text-gray-900">Oak Street Office Park</p>
            <p className="text-[9px] text-gray-500">123 Oak St · 9:00 AM</p>
          </div>
          <p className="text-[10px] text-gray-800 mt-1.5 leading-relaxed">
            Tap the button below when you arrive. ↓
          </p>
        </div>

        {/* Check-in button */}
        <button className="w-full bg-[#22C55E] text-white text-[10px] font-bold py-2 rounded-xl">
          ✓ I'm Here — Check In
        </button>
      </div>

      {/* Home bar */}
      <div className="flex justify-center py-1.5 bg-white">
        <div className="w-16 h-1 bg-gray-200 rounded-full" />
      </div>
    </div>
  )
}

function OwnerPhone() {
  return (
    <div className="w-[200px] bg-gray-900 rounded-[40px] border-[7px] border-gray-800 shadow-2xl overflow-hidden flex flex-col">
      {/* Dynamic island */}
      <div className="flex justify-center pt-3 pb-1.5 bg-[#111827]">
        <div className="w-24 h-6 bg-gray-900 rounded-full" />
      </div>

      {/* Lock screen */}
      <div
        className="flex-1 flex flex-col"
        style={{ background: 'linear-gradient(160deg, #0f172a 0%, #1e293b 40%, #0f172a 100%)' }}
      >
        {/* Clock */}
        <div className="text-center pt-5 pb-3">
          <p className="text-4xl font-thin text-white tracking-tight">9:15</p>
          <p className="text-[11px] text-gray-400 mt-0.5">Tuesday, June 9</p>
        </div>

        {/* Alert notification */}
        <div className="mx-3 mb-3">
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden"
          >
            {/* Notification header */}
            <div className="flex items-center gap-2 px-3 pt-2.5 pb-1.5">
              <div className="w-5 h-5 bg-[#22C55E] rounded-md flex items-center justify-center shrink-0">
                <span className="text-white text-[9px] font-black">S</span>
              </div>
              <span className="text-[10px] font-semibold text-white/90">SHOWEDLY</span>
              <span className="text-[9px] text-white/50 ml-auto">now</span>
            </div>

            {/* Alert content */}
            <div className="px-3 pb-3">
              <p className="text-[11px] font-bold text-white leading-snug">
                ⚠️ Maria hasn't checked in
              </p>
              <p className="text-[10px] text-white/70 mt-0.5 leading-snug">
                Oak Street Office Park · 9:00 AM
                <br />She's now 15 min late.
              </p>

              {/* Action buttons */}
              <div className="flex gap-1.5 mt-2.5">
                <button className="flex-1 bg-white/15 border border-white/20 text-white text-[9px] font-semibold py-1.5 rounded-lg">
                  📞 Call Maria
                </button>
                <button className="flex-1 bg-[#22C55E] text-white text-[9px] font-semibold py-1.5 rounded-lg">
                  Reassign →
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Other notifications (faded) */}
        <div className="mx-3 space-y-1.5 opacity-40">
          <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2">
            <p className="text-[9px] text-white/60">WhatsApp · 2 new messages</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl px-3 py-2">
            <p className="text-[9px] text-white/60">Gmail · Invoice received</p>
          </div>
        </div>

        <div className="flex-1" />

        {/* Slide to unlock */}
        <div className="mx-6 mb-4">
          <div className="bg-white/10 rounded-full px-4 py-2 border border-white/10">
            <p className="text-[9px] text-white/50 text-center">slide to unlock</p>
          </div>
        </div>
      </div>

      {/* Home bar */}
      <div className="flex justify-center py-2 bg-[#111827]">
        <div className="w-20 h-1 bg-gray-700 rounded-full" />
      </div>
    </div>
  )
}

export default function PhoneMockup() {
  return (
    <div className="relative w-full h-[480px] flex items-center justify-center">
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-gradient-radial from-emerald-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Worker's phone — left, rotated back */}
      <motion.div
        initial={{ opacity: 0, x: -24, rotate: -3 }}
        animate={{ opacity: 1, x: 0, rotate: -5 }}
        transition={{ duration: 0.7, delay: 0.6, ease: 'easeOut' }}
        className="absolute left-0 sm:left-4 top-16 z-10 drop-shadow-xl"
      >
        <WorkerPhone />
        <div className="mt-2 text-center">
          <span className="text-xs text-gray-400 font-medium">Worker receives</span>
        </div>
      </motion.div>

      {/* Owner's phone — right, front */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
        className="absolute right-0 sm:right-4 top-4 z-20 drop-shadow-2xl"
      >
        <OwnerPhone />
        <div className="mt-2 text-center">
          <span className="text-xs text-gray-400 font-medium">You get alerted</span>
        </div>
      </motion.div>
    </div>
  )
}
