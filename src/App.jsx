import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />

        {/* Menu sections placeholder — will be implemented in feature/menu-system */}
        <section id="menu" className="section menu-placeholder" aria-label="Menu coming soon">
          <h2 className="section-title">The Menu</h2>
          <hr className="divider" />
          <p className="section-placeholder">
            Our artisan coffee and dessert selections are being carefully prepared.
          </p>
        </section>

        <About />

        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
