import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'netsolution.ai – AI Patient Journey Automation for Med Spas',
  description:
    'netsolution.ai automates your entire patient journey — instant lead response, consultation booking, reminders, and long-term rebooking. Built around the tools you already use.',
  keywords: [
    'AI automation for med spas',
    'med spa patient journey automation',
    'aesthetic clinic lead automation',
    'AI appointment booking med spa',
    'med spa follow-up automation',
    'netsolution.ai',
  ],
  openGraph: {
    title: 'netsolution.ai – Stop Losing Patients to a Slow Reply',
    description:
      'AI automation that captures every lead, books consultations, and keeps patients coming back — built around your existing CRM and EHR.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'netsolution.ai – AI Patient Journey Automation for Med Spas',
    description: 'Every lead followed up. Every patient reactivated. All on autopilot.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#FAFAF8] text-[#0F0F0F] antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
