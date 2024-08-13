import Header from '@/app/components/Header'
import HeroPage from '@/app/components/HeroPage'
import AboutMe from '@/app/components/AboutMe'
import Service from '@/app/components/Service'
import MyProject from '@/app/components/MyProject'
import Testimonials from '@/app/components/Testimonials'
import ContactMe from '@/app/components/ContactMe'
import Footer from '@/app/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Header />
      <main>
        <HeroPage />
        <AboutMe />
        <Service />
        <MyProject />
        <Testimonials />
        <ContactMe />
      </main>
      <Footer />
    </div>
  )
}