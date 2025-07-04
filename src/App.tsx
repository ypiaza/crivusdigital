import AboutUs from "./components/AboutUs"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Portifolio from "./components/Portifolio"
import ScrollButton from "./components/ScrollButtom"
import Testimonials from "./components/Testimonials"

import logo from '../src/assets/logo-clean.svg'

const App = () => {
  return (
    <div>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="portifolio">
        <Portifolio />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contato" className="h-[100vh] py-16 bg-white">
        <h2 className="text-4xl items-center justify-center flex gap-2 text-[#161616]/80 font-bold text-center mb-6">
          Fale com a Crivus <img className="w-10" src={logo} />
        </h2>
        <ContactForm />
      </section>
      <Footer />

      <ScrollButton />
    </div>
  )
}

export default App