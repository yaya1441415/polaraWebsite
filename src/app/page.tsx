import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Problem from '@/components/sections/Problem'
import HowItWorks from '@/components/sections/HowItWorks'
import DemoVideo from '@/components/sections/DemoVideo'
import WhatYouGet from '@/components/sections/WhatYouGet'
import Guarantee from '@/components/sections/Guarantee'
import Founder from '@/components/sections/Founder'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <DemoVideo />
        <WhatYouGet />
        <Guarantee />
        <Founder />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
