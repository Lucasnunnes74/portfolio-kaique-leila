import About from './components/About'
import Contact from './components/Contact'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Hero from './components/Hero'
import Posts from './components/Posts'
import Process from './components/Process'
import Services from './components/Services'
import Videos from './components/Videos'
import { useReveal } from './lib/useReveal'

export default function App() {
  useReveal()
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Videos />
        <Gallery />
        <About />
        <Posts />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
