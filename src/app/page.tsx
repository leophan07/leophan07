import Hero from '@/components/Hero'
import Biography from '@/components/Biography'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Experience from '@/components/Experience'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Biography />
      <Stats />
      <Services />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
    </main>
  )
}