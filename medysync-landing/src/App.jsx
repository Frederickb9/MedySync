import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Features from './components/Features'
import Roles from './components/Roles'
import Stats from './components/Stats'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <Hero />
      <Problem />
      <Features />
      <Stats />
      <Roles />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}