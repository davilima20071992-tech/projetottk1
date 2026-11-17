import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Structure from './components/Structure'
import Donation from './components/Donation'
import Routine from './components/Routine'
import Team from './components/Team'
import Differentials from './components/Differentials'
import Testimonials from './components/Testimonials'
import Documents from './components/Documents'
import Location from './components/Location'
import Faq from './components/Faq'
import Contact from './components/Contact'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  return (
    <div className="grain min-h-screen bg-cream text-ink">
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <Header />

      <main>
        <Hero />
        <About />
        <Structure />
        <Donation />
        <Services />
        <Team />
        <Routine />
        <Differentials />
        <Testimonials />
        <Documents />
        <Location />
        <Faq />
        <Contact />
        <FinalCta />
      </main>

      <Footer />
      <WhatsAppFab />
    </div>
  )
}
