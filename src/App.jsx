import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedMenu from './components/FeaturedMenu'
import Menu from './components/Menu'
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
        <FeaturedMenu />
        <Menu />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
