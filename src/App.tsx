import AboutUs from "./components/AboutUs"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Portifolio from "./components/Portifolio"
import Testimonials from "./components/Testimonials"

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
    </div>
  )
}

export default App