'use client'

import { motion } from 'framer-motion'
import { MapPin, Bell, CheckCircle2, AlertCircle, Clock, Package, Zap } from 'lucide-react'

const workers = [
  {
    initials: 'MG',
    name: 'Maria G.',
    job: 'Maple Street',
    status: 'done' as const,
    time: '9:02 AM',
    color: 'bg-emerald-500',
  },
  {
    initials: 'CR',
    name: 'Carlos R.',
    job: 'Oak Avenue',
    status: 'noshow' as const,
    time: '9:00 AM',
    color: 'bg-red-500',
  },
  {
    initials: 'AM',
    name: 'Ana M.',
    job: 'Pine Road',
    status: 'active' as const,
    time: 'En route',
    color: 'bg-blue-500',
  },
  {
    initials: 'LP',
    name: 'Luis P.',
    job: 'Cedar Blvd',
    status: 'scheduled' as const,
    time: '1:00 PM',
    color: 'bg-gray-400',
  },
]

const statusMap = {
  done: {
    label: '✓ Checked in',
    labelClass: 'text-emerald-700 bg-emerald-50',
    Icon: CheckCircle2,
    iconClass: 'text-emerald-500',
  },
  noshow: {
    label: '⚠ No-show',
    labelClass: 'text-red-700 bg-red-50',
    Icon: AlertCircle,
    iconClass: 'text-red-500',
  },
  active: {
    label: '→ Active',
    labelClass: 'text-blue-700 bg-blue-50',
    Icon: Clock,
    iconClass: 'text-blue-500',
  },
  scheduled: {
    label: '○ Scheduled',
    labelClass: 'text-gray-600 bg-gray-100',
    Icon: Clock,
    iconClass: 'text-gray-400',
  },
}

export default function DashboardMockup() {
  return (
    <div className="relative lg:pl-4">
      {/* Ambient glow */}
      <div className="absolute -inset-8 bg-blue-500/8 rounded-3xl blur-3xl pointer-events-none" />

      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative bg-white rounded-2xl border border-gray-200 shadow-2xl shadow-gray-200/60 overflow-hidden"
      >
        {/* Top chrome bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-blue-600 rounded-md flex items-center justify-center">
              <Zap className="w-3 h-3 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-sm font-semibold text-gray-900">Showedly</span>
            <span className="text-gray-300 text-sm">/</span>
            <span className="text-sm text-gray-500">Dashboard</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            Live · May 31
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Active Jobs', value: '12', delta: '↑2 today', positive: true },
              { label: 'On-Time Rate', value: '92%', delta: '↑4% wk', positive: true },
              { label: 'Revenue', value: '$4.2k', delta: '+12%', positive: true },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.08 }}
                className="bg-gray-50 rounded-xl p-3 border border-gray-100"
              >
                <p className="text-xs text-gray-500 mb-1">{s.label}</p>
                <p className="text-lg font-black text-gray-900">{s.value}</p>
                <p className={`text-xs font-semibold ${s.positive ? 'text-emerald-600' : 'text-red-500'}`}>
                  {s.delta}
                </p>
              </motion.div>
            ))}
          </div>

          {/* No-show alert */}
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85 }}
            className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl px-3.5 py-3"
          >
            <Bell className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-red-700">No-show alert</p>
              <p className="text-xs text-red-600 truncate">
                Carlos R. missed Oak Avenue — 9:00 AM
              </p>
            </div>
            <button className="text-xs font-bold text-red-600 bg-red-100 hover:bg-red-200 px-2.5 py-1 rounded-lg transition-colors whitespace-nowrap shrink-0">
              Handle
            </button>
          </motion.div>

          {/* Worker list */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                Today's Team
              </p>
              <span className="text-xs text-blue-600 font-semibold cursor-pointer hover:underline">
                View all
              </span>
            </div>

            <div className="space-y-1.5">
              {workers.map((w, i) => {
                const s = statusMap[w.status]
                return (
                  <motion.div
                    key={w.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.0 + i * 0.07 }}
                    className="flex items-center gap-3 px-2.5 py-2 rounded-xl hover:bg-gray-50 transition-colors group"
                  >
                    <div
                      className={`w-8 h-8 ${w.color} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0`}
                    >
                      {w.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-900 truncate">{w.name}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1 truncate">
                        <MapPin className="w-2.5 h-2.5 shrink-0" />
                        {w.job}
                      </p>
                    </div>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full shrink-0 ${s.labelClass}`}
                    >
                      {s.label}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Auto-SMS confirmation */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35 }}
            className="flex items-start gap-3 bg-emerald-50 border border-emerald-100 rounded-xl px-3.5 py-3"
          >
            <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-3 h-3 text-white" />
            </div>
            <div>
              <p className="text-xs font-semibold text-emerald-700 mb-0.5">
                Auto-SMS sent to client
              </p>
              <p className="text-xs text-emerald-600 italic leading-relaxed">
                "Your cleaning at Maple St was completed at 10:47 AM. ✓ GPS verified."
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating: Supply alert */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: 20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.55, type: 'spring', stiffness: 220, damping: 20 }}
        className="absolute -right-3 top-10 bg-white border border-gray-200 rounded-2xl shadow-xl px-4 py-3 w-52 z-10"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-6 h-6 bg-amber-50 border border-amber-100 rounded-lg flex items-center justify-center">
            <Package className="w-3.5 h-3.5 text-amber-600" />
          </div>
          <span className="text-xs font-bold text-gray-800">Low Stock Alert</span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">
          All-purpose cleaner running low. Auto-order placed.
        </p>
      </motion.div>

      {/* Floating: GPS check-in */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 1.75, type: 'spring', stiffness: 220, damping: 20 }}
        className="absolute -left-3 bottom-12 bg-white border border-gray-200 rounded-2xl shadow-xl px-4 py-3 w-48 z-10"
      >
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-6 h-6 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
          </div>
          <span className="text-xs font-bold text-gray-800">GPS Check-In</span>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">
          Ana M. arrived at Pine Road — 9:58 AM ✓
        </p>
      </motion.div>
    </div>
  )
}
