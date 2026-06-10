import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from '@/components/ClientLayout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Showedly – Run Your Cleaning Company Without Chasing Workers',
  description:
    'GPS check-ins, no-show alerts, automated client updates, scheduling, and supply ordering—all from one simple platform for cleaning companies with 5–100 employees.',
  keywords: [
    'cleaning company software',
    'cleaning business management',
    'GPS check-in for cleaning',
    'maid service software',
    'cleaning schedule app',
  ],
  openGraph: {
    title: 'Showedly – Operations Platform for Cleaning Companies',
    description:
      'Replace spreadsheets, group chats, and paper checklists with one simple platform built for cleaning businesses.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Showedly – Run Your Cleaning Company Without Chasing Workers',
    description: 'GPS check-ins, scheduling, automated client updates, and more for cleaning businesses.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
