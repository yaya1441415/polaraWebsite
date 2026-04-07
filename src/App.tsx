import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import LeadMagnet from './components/LeadMagnet'
import BookMeeting from './components/BookMeeting'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <LeadMagnet />
        <BookMeeting />
      </main>
      <Footer />
    </>
  )
}
