import { useState, useRef, useEffect } from 'react'
import {
  LayoutGrid, Car, Users, BarChart2, Settings,
  MapPin, Clock, Phone, CheckCircle2, Loader2, ArrowLeft,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

// ─── Types ────────────────────────────────────────────────────────────────────

interface Trip {
  id: string
  patient: string
  pickup: string
  dropoff: string
  pickupTime: string
  pickupMinutes: number
  type: 'AMBULATORY' | 'WHEELCHAIR'
  durationMinutes: number
  broker: 'ModivCare' | 'Veyo' | 'MTM'
}

interface Driver {
  id: string
  name: string
  vehicleType: 'WC-VAN' | 'SEDAN' | 'AMB-VAN'
  vehicleId: string
  phone: string
  base: string
  initials: string
  color: string
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TRIPS: Trip[] = [
  { id: 'TRP-001', patient: 'Dorothy Hayes',    pickup: '4823 Rainier Ave S',       dropoff: 'UW Medical Center',   pickupTime: '06:30', pickupMinutes: 390, type: 'AMBULATORY', durationMinutes: 35, broker: 'ModivCare' },
  { id: 'TRP-002', patient: 'Robert Chen',      pickup: '2145 NW Market St',        dropoff: 'Swedish First Hill',  pickupTime: '07:00', pickupMinutes: 420, type: 'AMBULATORY', durationMinutes: 40, broker: 'Veyo' },
  { id: 'TRP-003', patient: 'Margaret Liu',     pickup: '3421 SW Alaska St',        dropoff: 'Harborview Medical',  pickupTime: '07:15', pickupMinutes: 435, type: 'WHEELCHAIR', durationMinutes: 50, broker: 'MTM' },
  { id: 'TRP-004', patient: 'James Patterson',  pickup: '1092 NE Northgate Way',    dropoff: 'Virginia Mason',      pickupTime: '07:30', pickupMinutes: 450, type: 'AMBULATORY', durationMinutes: 40, broker: 'ModivCare' },
  { id: 'TRP-005', patient: 'Barbara Williams', pickup: '1534 E Pine St',           dropoff: 'UW Medical Center',   pickupTime: '08:00', pickupMinutes: 480, type: 'WHEELCHAIR', durationMinutes: 40, broker: 'Veyo' },
  { id: 'TRP-006', patient: 'Thomas Rodriguez', pickup: '3201 Beacon Ave S',        dropoff: 'Swedish First Hill',  pickupTime: '08:15', pickupMinutes: 495, type: 'AMBULATORY', durationMinutes: 35, broker: 'MTM' },
  { id: 'TRP-007', patient: 'Nancy Patel',      pickup: '4521 Fremont Ave N',       dropoff: 'Harborview Medical',  pickupTime: '08:30', pickupMinutes: 510, type: 'WHEELCHAIR', durationMinutes: 40, broker: 'ModivCare' },
  { id: 'TRP-008', patient: 'George Martinez',  pickup: '512 Queen Anne Ave N',     dropoff: "Seattle Children's",  pickupTime: '09:00', pickupMinutes: 540, type: 'AMBULATORY', durationMinutes: 30, broker: 'Veyo' },
  { id: 'TRP-009', patient: 'Helen Thompson',   pickup: '5832 Airport Way S',       dropoff: 'Virginia Mason',      pickupTime: '09:30', pickupMinutes: 570, type: 'AMBULATORY', durationMinutes: 35, broker: 'MTM' },
  { id: 'TRP-010', patient: 'Charles Anderson', pickup: '6124 Rainier Ave S',       dropoff: 'Providence Medical',  pickupTime: '10:00', pickupMinutes: 600, type: 'WHEELCHAIR', durationMinutes: 50, broker: 'ModivCare' },
  { id: 'TRP-011', patient: 'Sandra Lee',       pickup: '4502 University Way NE',   dropoff: 'Harborview Medical',  pickupTime: '10:30', pickupMinutes: 630, type: 'AMBULATORY', durationMinutes: 30, broker: 'Veyo' },
  { id: 'TRP-012', patient: 'Kevin Johnson',    pickup: '5234 Ballard Ave NW',      dropoff: 'UW Medical Center',   pickupTime: '11:00', pickupMinutes: 660, type: 'AMBULATORY', durationMinutes: 35, broker: 'MTM' },
  { id: 'TRP-013', patient: 'Patricia Davis',   pickup: '2891 SW Avalon Way',       dropoff: 'Swedish First Hill',  pickupTime: '11:30', pickupMinutes: 690, type: 'WHEELCHAIR', durationMinutes: 55, broker: 'ModivCare' },
  { id: 'TRP-014', patient: 'Frank Wilson',     pickup: '800 Westlake Ave N',       dropoff: 'Harborview Medical',  pickupTime: '12:00', pickupMinutes: 720, type: 'AMBULATORY', durationMinutes: 25, broker: 'Veyo' },
  { id: 'TRP-015', patient: 'Sharon Taylor',    pickup: '8921 Greenwood Ave N',     dropoff: "Seattle Children's",  pickupTime: '12:30', pickupMinutes: 750, type: 'WHEELCHAIR', durationMinutes: 40, broker: 'MTM' },
  { id: 'TRP-016', patient: 'Gary Brown',       pickup: '1823 Harvard Ave E',       dropoff: 'Providence Medical',  pickupTime: '13:00', pickupMinutes: 780, type: 'AMBULATORY', durationMinutes: 30, broker: 'ModivCare' },
  { id: 'TRP-017', patient: 'Donna Jackson',    pickup: '4122 Rainier Ave S',       dropoff: 'Virginia Mason',      pickupTime: '13:30', pickupMinutes: 810, type: 'WHEELCHAIR', durationMinutes: 40, broker: 'Veyo' },
  { id: 'TRP-018', patient: 'Steven Garcia',    pickup: '3456 Fremont Ave N',       dropoff: 'UW Medical Center',   pickupTime: '14:00', pickupMinutes: 840, type: 'AMBULATORY', durationMinutes: 30, broker: 'MTM' },
  { id: 'TRP-019', patient: 'Carol White',      pickup: '6234 Airport Way S',       dropoff: 'Harborview Medical',  pickupTime: '14:30', pickupMinutes: 870, type: 'AMBULATORY', durationMinutes: 30, broker: 'ModivCare' },
  { id: 'TRP-020', patient: 'Mark Harris',      pickup: '621 Queen Anne Ave N',     dropoff: 'Swedish First Hill',  pickupTime: '15:00', pickupMinutes: 900, type: 'WHEELCHAIR', durationMinutes: 40, broker: 'Veyo' },
]

const DRIVERS: Driver[] = [
  { id: 'DRV-001', name: 'Marcus Webb',   vehicleType: 'WC-VAN',  vehicleId: 'WA-4821K', phone: '(206) 555-0142', base: 'Northgate',     initials: 'MW', color: '#2563EB' },
  { id: 'DRV-002', name: 'Sarah Kim',     vehicleType: 'SEDAN',   vehicleId: 'WA-7734B', phone: '(206) 555-0187', base: 'Capitol Hill',   initials: 'SK', color: '#7C3AED' },
  { id: 'DRV-003', name: 'James Torres',  vehicleType: 'WC-VAN',  vehicleId: 'WA-2291M', phone: '(206) 555-0253', base: 'West Seattle',   initials: 'JT', color: '#0369A1' },
  { id: 'DRV-004', name: 'Lisa Chen',     vehicleType: 'AMB-VAN', vehicleId: 'WA-9943C', phone: '(206) 555-0316', base: 'Ballard',        initials: 'LC', color: '#059669' },
  { id: 'DRV-005', name: 'Darnell Hayes', vehicleType: 'AMB-VAN', vehicleId: 'WA-1174D', phone: '(206) 555-0428', base: 'Rainier Valley', initials: 'DH', color: '#D97706' },
]

// ─── Optimization ─────────────────────────────────────────────────────────────

function optimizeSchedule(trips: Trip[], drivers: Driver[]) {
  const sorted = [...trips].sort((a, b) => a.pickupMinutes - b.pickupMinutes)
  const freeAt: Record<string, number> = {}
  drivers.forEach(d => { freeAt[d.id] = 0 })

  const byDriver: Record<string, string[]> = {}
  drivers.forEach(d => { byDriver[d.id] = [] })
  const byTrip: Record<string, string> = {}

  for (const trip of sorted) {
    const compatible = drivers.filter(d =>
      trip.type === 'AMBULATORY' || d.vehicleType === 'WC-VAN'
    )
    const best = compatible.reduce((prev, curr) =>
      (freeAt[curr.id] ?? 0) < (freeAt[prev.id] ?? 0) ? curr : prev
    )
    byDriver[best.id].push(trip.id)
    byTrip[trip.id] = best.id
    const start = Math.max(freeAt[best.id], trip.pickupMinutes)
    freeAt[best.id] = start + trip.durationMinutes + 15
  }

  return { byDriver, byTrip }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const BROKER_COLOR: Record<string, { bg: string; text: string }> = {
  ModivCare: { bg: '#EFF6FF', text: '#1D4ED8' },
  Veyo:      { bg: '#F5F3FF', text: '#6D28D9' },
  MTM:       { bg: '#ECFDF5', text: '#065F46' },
}

// ─── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar({ view, onView }: { view: string; onView: (v: string) => void }) {
  const items = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutGrid size={17} /> },
    { id: 'trips',     label: 'Trips',     icon: <Car size={17} /> },
    { id: 'drivers',   label: 'Drivers',   icon: <Users size={17} /> },
    { id: 'reports',   label: 'Reports',   icon: <BarChart2 size={17} /> },
    { id: 'settings',  label: 'Settings',  icon: <Settings size={17} /> },
  ]
  return (
    <div style={{ width: 216, minWidth: 216, height: '100vh', background: '#1A2035', display: 'flex', flexDirection: 'column', flexShrink: 0 }}>
      {/* Logo */}
      <div style={{ height: 56, display: 'flex', alignItems: 'center', padding: '0 18px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
          <div style={{ width: 28, height: 28, background: 'linear-gradient(135deg,#4ECDC4,#2563EB)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13, fontWeight: 800, color: '#fff' }}>S</div>
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em' }}>SafeRide</span>
          <span style={{ fontSize: 10, color: '#4ECDC4', fontWeight: 700, background: 'rgba(78,205,196,0.15)', padding: '2px 5px', borderRadius: 4 }}>PRO</span>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, padding: '14px 10px' }}>
        {items.map(item => {
          const active = view === item.id
          return (
            <button key={item.id}
              onClick={() => (item.id === 'trips' || item.id === 'drivers') && onView(item.id)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: 11,
                padding: '9px 12px', borderRadius: 7, border: 'none', cursor: 'pointer',
                marginBottom: 2, background: active ? '#252E4B' : 'transparent',
                color: active ? '#fff' : '#8892B0', fontSize: 13,
                fontWeight: active ? 600 : 400, textAlign: 'left', transition: 'background 0.15s',
              }}
              onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'transparent' }}
            >
              <span style={{ opacity: active ? 1 : 0.55 }}>{item.icon}</span>
              {item.label}
              {active && <span style={{ marginLeft: 'auto', width: 6, height: 6, borderRadius: '50%', background: '#4ECDC4' }} />}
            </button>
          )
        })}
      </nav>

      {/* Dispatcher */}
      <div style={{ padding: '14px 18px', borderTop: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 32, height: 32, background: '#252E4B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, color: '#8892B0' }}>JD</div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: '#D1D9E6' }}>J. Davis</div>
          <div style={{ fontSize: 11, color: '#8892B0' }}>Dispatcher</div>
        </div>
      </div>
    </div>
  )
}

// ─── Header ───────────────────────────────────────────────────────────────────

function Header({ view, dispatched, tripCount, assignedCount }: {
  view: string; dispatched: boolean; tripCount: number; assignedCount: number
}) {
  return (
    <div style={{ height: 56, background: '#fff', borderBottom: '1px solid #E8ECF0', display: 'flex', alignItems: 'center', padding: '0 24px', gap: 16, flexShrink: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#8892B0' }}>
        <span>Operations</span>
        <span>/</span>
        <span style={{ color: '#1A2035', fontWeight: 600 }}>{view === 'trips' ? 'Trip Management' : 'Driver Management'}</span>
      </div>
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
        <span style={{ fontSize: 12, color: '#8892B0' }}>Thu, Apr 10 · Seattle, WA</span>
        {dispatched && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: 6, padding: '5px 10px' }}>
            <CheckCircle2 size={13} color="#059669" />
            <span style={{ fontSize: 12, fontWeight: 700, color: '#065F46' }}>{assignedCount}/{tripCount} trips assigned</span>
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Trips Table ──────────────────────────────────────────────────────────────

function TripsTable({ byTrip }: { dispatched: boolean; byTrip: Record<string, string> }) {
  const [filter, setFilter] = useState<'all' | 'unassigned' | 'assigned'>('all')

  const filtered = TRIPS.filter(t => {
    if (filter === 'unassigned') return !byTrip[t.id]
    if (filter === 'assigned') return !!byTrip[t.id]
    return true
  })

  const driverOf = (tripId: string) => DRIVERS.find(d => d.id === byTrip[tripId])

  const filters: { id: typeof filter; label: string }[] = [
    { id: 'all', label: `All (${TRIPS.length})` },
    { id: 'unassigned', label: `Unassigned (${TRIPS.filter(t => !byTrip[t.id]).length})` },
    { id: 'assigned', label: `Assigned (${TRIPS.filter(t => !!byTrip[t.id]).length})` },
  ]

  const cols = ['Trip ID', 'Patient', 'Pickup Time', 'Pickup Address', 'Dropoff', 'Type', 'Broker', 'Driver', 'Status']

  return (
    <div style={{ flex: 1, overflow: 'auto', padding: '20px 24px' }}>
      {/* Filter bar */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {filters.map(f => (
          <button key={f.id} onClick={() => setFilter(f.id)} style={{
            padding: '6px 14px', borderRadius: 6, border: '1px solid',
            borderColor: filter === f.id ? '#2563EB' : '#E2E8F0',
            background: filter === f.id ? '#EFF6FF' : '#fff',
            color: filter === f.id ? '#1D4ED8' : '#64748B',
            fontSize: 13, fontWeight: filter === f.id ? 600 : 400, cursor: 'pointer',
          }}>{f.label}</button>
        ))}
      </div>

      {/* Table */}
      <div style={{ background: '#fff', borderRadius: 10, border: '1px solid #E4E8EE', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E4E8EE' }}>
              {cols.map(c => (
                <th key={c} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: '#64748B', fontSize: 12, letterSpacing: '0.03em', whiteSpace: 'nowrap' }}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((trip, i) => {
              const driver = driverOf(trip.id)
              const assigned = !!driver
              return (
                <tr key={trip.id} style={{ borderBottom: i < filtered.length - 1 ? '1px solid #F1F4F8' : 'none', background: assigned ? '#FAFFFE' : '#fff', transition: 'background 0.3s' }}>
                  <td style={{ padding: '11px 14px', fontWeight: 600, color: '#1A2035', fontFamily: 'monospace', fontSize: 12 }}>{trip.id}</td>
                  <td style={{ padding: '11px 14px', color: '#1A2035', fontWeight: 500 }}>{trip.patient}</td>
                  <td style={{ padding: '11px 14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#374151', fontWeight: 600 }}>
                      <Clock size={13} color="#94A3B8" />{trip.pickupTime}
                    </div>
                  </td>
                  <td style={{ padding: '11px 14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#475569', maxWidth: 190 }}>
                      <MapPin size={13} color="#94A3B8" style={{ flexShrink: 0 }} />
                      <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{trip.pickup}</span>
                    </div>
                  </td>
                  <td style={{ padding: '11px 14px', color: '#475569', fontWeight: 500 }}>{trip.dropoff}</td>
                  <td style={{ padding: '11px 14px' }}>
                    <span style={{
                      padding: '3px 8px', borderRadius: 5, fontSize: 11, fontWeight: 700,
                      background: trip.type === 'WHEELCHAIR' ? '#F5F3FF' : '#F0F9FF',
                      color: trip.type === 'WHEELCHAIR' ? '#6D28D9' : '#0369A1',
                    }}>{trip.type === 'WHEELCHAIR' ? '♿ WC' : '🚶 AMB'}</span>
                  </td>
                  <td style={{ padding: '11px 14px' }}>
                    <span style={{ padding: '3px 8px', borderRadius: 5, fontSize: 11, fontWeight: 700, background: BROKER_COLOR[trip.broker].bg, color: BROKER_COLOR[trip.broker].text }}>{trip.broker}</span>
                  </td>
                  <td style={{ padding: '11px 14px' }}>
                    {driver ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                        <div style={{ width: 22, height: 22, borderRadius: '50%', background: driver.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, fontWeight: 700, color: '#fff', flexShrink: 0 }}>{driver.initials}</div>
                        <span style={{ fontWeight: 600, color: '#1A2035', fontSize: 12 }}>{driver.name}</span>
                      </div>
                    ) : (
                      <span style={{ color: '#CBD5E1', fontSize: 12 }}>—</span>
                    )}
                  </td>
                  <td style={{ padding: '11px 14px' }}>
                    <span style={{
                      padding: '3px 9px', borderRadius: 5, fontSize: 11, fontWeight: 700,
                      background: assigned ? '#ECFDF5' : '#F8FAFC',
                      color: assigned ? '#065F46' : '#94A3B8',
                    }}>{assigned ? '● Assigned' : '○ Unassigned'}</span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ─── Drivers View ─────────────────────────────────────────────────────────────

function DriversView({ dispatched, byDriver }: {
  dispatched: boolean
  byDriver: Record<string, string[]>
  byTrip: Record<string, string>
}) {
  const [expanded, setExpanded] = useState<string | null>(null)

  const vehicleLabel: Record<string, string> = { 'WC-VAN': 'Wheelchair Van', 'SEDAN': 'Sedan', 'AMB-VAN': 'Ambulatory Van' }

  return (
    <div style={{ flex: 1, overflow: 'auto', padding: '20px 24px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16 }}>
        {DRIVERS.map(driver => {
          const tripIds = dispatched ? (byDriver[driver.id] || []) : []
          const trips = tripIds.map(id => TRIPS.find(t => t.id === id)!).filter(Boolean)
          const isOpen = expanded === driver.id

          return (
            <div key={driver.id} style={{ background: '#fff', border: '1px solid #E4E8EE', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 8px rgba(15,23,42,0.05)' }}>
              {/* Driver card header */}
              <div style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer', borderBottom: isOpen ? '1px solid #F1F4F8' : 'none' }}
                onClick={() => setExpanded(isOpen ? null : driver.id)}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: driver.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 800, color: '#fff', flexShrink: 0 }}>{driver.initials}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: '#0F172A', fontSize: 15 }}>{driver.name}</div>
                  <div style={{ fontSize: 12, color: '#64748B', marginTop: 2 }}>{vehicleLabel[driver.vehicleType]} · {driver.vehicleId}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: driver.color }}>{trips.length}</div>
                  <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 500 }}>trips</div>
                </div>
              </div>

              {/* Driver meta */}
              <div style={{ padding: '10px 20px', display: 'flex', gap: 16, borderBottom: '1px solid #F1F4F8', background: '#FAFAFA' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#64748B' }}>
                  <Phone size={12} color="#94A3B8" />{driver.phone}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#64748B' }}>
                  <MapPin size={12} color="#94A3B8" />Base: {driver.base}
                </div>
              </div>

              {/* Trip list (click to expand) */}
              {isOpen && (
                <div style={{ maxHeight: 320, overflow: 'auto' }}>
                  {trips.length === 0 ? (
                    <div style={{ padding: '24px 20px', textAlign: 'center', color: '#CBD5E1', fontSize: 13 }}>
                      {dispatched ? 'No trips assigned' : 'Dispatch to see schedule'}
                    </div>
                  ) : (
                    trips.map((trip, i) => (
                      <div key={trip.id} style={{ padding: '12px 20px', borderBottom: i < trips.length - 1 ? '1px solid #F1F4F8' : 'none', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                        <div style={{ width: 28, height: 28, borderRadius: 7, background: driver.color + '15', border: `1px solid ${driver.color}33`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: driver.color, flexShrink: 0 }}>{i + 1}</div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                            <span style={{ fontWeight: 700, color: '#1A2035', fontSize: 13 }}>{trip.pickupTime}</span>
                            <span style={{ fontFamily: 'monospace', fontSize: 11, color: '#94A3B8' }}>{trip.id}</span>
                            <span style={{ marginLeft: 'auto', fontSize: 10, fontWeight: 700, padding: '2px 6px', borderRadius: 4, background: trip.type === 'WHEELCHAIR' ? '#F5F3FF' : '#F0F9FF', color: trip.type === 'WHEELCHAIR' ? '#6D28D9' : '#0369A1' }}>
                              {trip.type === 'WHEELCHAIR' ? '♿' : '🚶'}
                            </span>
                          </div>
                          <div style={{ fontSize: 12, color: '#475569', fontWeight: 500 }}>{trip.patient}</div>
                          <div style={{ fontSize: 11, color: '#94A3B8', marginTop: 2 }}>{trip.pickup} → {trip.dropoff}</div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}

              {!isOpen && !dispatched && (
                <div style={{ padding: '12px 20px', fontSize: 12, color: '#CBD5E1', textAlign: 'center' }}>
                  Click to expand · Dispatch first to see assignments
                </div>
              )}
              {!isOpen && dispatched && trips.length > 0 && (
                <div style={{ padding: '12px 20px', fontSize: 12, color: '#64748B', cursor: 'pointer' }} onClick={() => setExpanded(driver.id)}>
                  Click to see {trips.length} assigned trip{trips.length !== 1 ? 's' : ''} →
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Agent Circle (Draggable) ─────────────────────────────────────────────────

function AgentCircle({ dispatched, dispatching, onDispatch }: {
  dispatched: boolean
  dispatching: boolean
  onDispatch: () => void
}) {
  const [pos, setPos] = useState({ x: 80, y: window.innerHeight - 140 })
  const [showMenu, setShowMenu] = useState(false)
  const isDragging = useRef(false)
  const hasDragged = useRef(false)
  const offset = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      hasDragged.current = true
      setPos({ x: e.clientX - offset.current.x, y: e.clientY - offset.current.y })
    }
    const onUp = () => { isDragging.current = false }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp) }
  }, [])

  const onMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('[data-menu]')) return
    isDragging.current = true
    hasDragged.current = false
    offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y }
    e.preventDefault()
  }

  const onClick = () => {
    if (hasDragged.current) return
    if (!dispatched && !dispatching) setShowMenu(m => !m)
  }

  return (
    <div style={{ position: 'fixed', left: pos.x, top: pos.y, zIndex: 999, userSelect: 'none' }}
      onMouseDown={onMouseDown}>

      {/* Popup menu */}
      {showMenu && !dispatched && (
        <div data-menu style={{
          position: 'absolute', bottom: 80, left: '50%', transform: 'translateX(-50%)',
          background: '#fff', border: '1px solid #E2E8F0', borderRadius: 12,
          boxShadow: '0 8px 32px rgba(15,23,42,0.15)', padding: '14px', width: 220,
          zIndex: 1000,
        }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#0F172A', marginBottom: 4 }}>DispatchIQ Agent</div>
          <div style={{ fontSize: 11, color: '#64748B', marginBottom: 12, lineHeight: 1.5 }}>
            AI will assign all 20 trips to the 5 drivers, optimizing for time, location, and vehicle type.
          </div>
          <button data-menu onClick={() => { setShowMenu(false); onDispatch() }} style={{
            width: '100%', padding: '10px', borderRadius: 8, border: 'none',
            background: '#2563EB', color: '#fff', fontSize: 13, fontWeight: 700,
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            ⚡ Dispatch All Trips
          </button>
          {/* Triangle */}
          <div style={{ position: 'absolute', bottom: -7, left: '50%', transform: 'translateX(-50%)', width: 14, height: 7, overflow: 'hidden' }}>
            <div style={{ width: 10, height: 10, background: '#fff', border: '1px solid #E2E8F0', transform: 'rotate(45deg)', margin: '0 auto', marginTop: -5 }} />
          </div>
        </div>
      )}

      {/* The circle */}
      <div onClick={onClick} style={{
        width: 64, height: 64,
        borderRadius: '50%',
        background: dispatched ? '#059669' : dispatching ? '#F59E0B' : '#2563EB',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: dispatched ? 'default' : 'grab',
        boxShadow: dispatched
          ? '0 0 0 6px rgba(5,150,105,0.15), 0 8px 24px rgba(5,150,105,0.3)'
          : dispatching
          ? '0 0 0 6px rgba(245,158,11,0.15), 0 8px 24px rgba(245,158,11,0.3)'
          : '0 0 0 6px rgba(37,99,235,0.15), 0 8px 24px rgba(37,99,235,0.3)',
        transition: 'background 0.4s, box-shadow 0.4s',
        position: 'relative',
      }}>
        {/* White thick ring */}
        <div style={{
          position: 'absolute', inset: 5,
          borderRadius: '50%',
          border: '3px solid rgba(255,255,255,0.35)',
          pointerEvents: 'none',
        }} />
        {/* Center content */}
        {dispatching ? (
          <Loader2 size={22} color="#fff" style={{ animation: 'spin 1s linear infinite' }} />
        ) : dispatched ? (
          <CheckCircle2 size={22} color="#fff" />
        ) : (
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: 800, color: '#0F172A' }}>K</span>
        )}
      </div>

      {/* Label */}
      <div style={{ textAlign: 'center', marginTop: 5, fontSize: 10, fontWeight: 700, color: dispatched ? '#059669' : '#2563EB', whiteSpace: 'nowrap' }}>
        {dispatched ? 'Dispatched ✓' : dispatching ? 'Optimizing…' : 'DispatchIQ'}
      </div>

      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

// ─── Main Demo Component ──────────────────────────────────────────────────────

export default function Demo() {
  const navigate = useNavigate()
  const [view, setView] = useState<'trips' | 'drivers'>('trips')
  const [dispatched, setDispatched] = useState(false)
  const [dispatching, setDispatching] = useState(false)
  const [byDriver, setByDriver] = useState<Record<string, string[]>>({})
  const [byTrip, setByTrip] = useState<Record<string, string>>({})

  const handleDispatch = () => {
    setDispatching(true)
    setTimeout(() => {
      const result = optimizeSchedule(TRIPS, DRIVERS)
      setByDriver(result.byDriver)
      setByTrip(result.byTrip)
      setDispatched(true)
      setDispatching(false)
    }, 2200)
  }

  const assignedCount = Object.keys(byTrip).length

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <Sidebar view={view} onView={v => setView(v as 'trips' | 'drivers')} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#F0F3F8' }}>
        <Header view={view} dispatched={dispatched} tripCount={TRIPS.length} assignedCount={assignedCount} />

        {/* Sub-header */}
        <div style={{ background: '#fff', borderBottom: '1px solid #E8ECF0', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
          {/* Back link */}
          <button onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#64748B', background: 'none', border: 'none', cursor: 'pointer', padding: '10px 0', marginRight: 16 }}>
            <ArrowLeft size={13} /> Back to site
          </button>
          {(['trips', 'drivers'] as const).map(tab => (
            <button key={tab} onClick={() => setView(tab)} style={{
              padding: '10px 16px', border: 'none', background: 'none', cursor: 'pointer',
              fontSize: 13, fontWeight: view === tab ? 700 : 400,
              color: view === tab ? '#1A2035' : '#8892B0',
              borderBottom: view === tab ? '2px solid #2563EB' : '2px solid transparent',
              transition: 'color 0.15s', textTransform: 'capitalize',
            }}>{tab}</button>
          ))}
          {!dispatched && (
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#94A3B8' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#F59E0B', animation: 'pulse 2s infinite' }} />
              20 unassigned trips · Click the <span style={{ fontWeight: 700, color: '#2563EB' }}>K</span> agent to dispatch
            </div>
          )}
          <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
        </div>

        {view === 'trips'
          ? <TripsTable dispatched={dispatched} byTrip={byTrip} />
          : <DriversView dispatched={dispatched} byDriver={byDriver} byTrip={byTrip} />
        }
      </div>

      <AgentCircle dispatched={dispatched} dispatching={dispatching} onDispatch={handleDispatch} />
    </div>
  )
}
