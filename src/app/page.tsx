import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Nightmare from '@/components/sections/Nightmare'
import HowItWorks from '@/components/HowItWorks'
import ClientProof from '@/components/sections/ClientProof'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import Objections from '@/components/sections/Objections'
import FinalCTA from '@/components/sections/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Nightmare />
        <HowItWorks />
        <ClientProof />
        <Pricing />
        <Testimonials />
        <Objections />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
