import './App.css'

function App() {
  return (
    <div className="app">
      {/* Navigation */}
      <header id="home">
        <nav className="navbar">
          <span className="navbar-brand">ANTIQUE</span>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section" aria-label="Welcome">
        <h1>ANTIQUE</h1>
        <p className="tagline">Coffee. Memories. Quiet Moments.</p>
      </section>

      {/* Featured Menu */}
      <section id="featured" className="section" aria-label="Featured Menu">
        <h2 className="section-title">Our Favorites</h2>
        <p className="section-placeholder">Featured menu items coming soon.</p>
      </section>

      {/* Full Menu */}
      <section id="menu" className="section" aria-label="Full Menu">
        <h2 className="section-title">The Menu</h2>
        <p className="section-placeholder">Full menu coming soon.</p>
      </section>

      {/* About */}
      <section id="about" className="section" aria-label="About ANTIQUE">
        <h2 className="section-title">Our Story</h2>
        <p className="section-placeholder">About section coming soon.</p>
      </section>

      {/* Visit Us */}
      <section id="visit" className="section" aria-label="Visit Us">
        <h2 className="section-title">Visit Us</h2>
        <p className="section-placeholder">Contact information coming soon.</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2026 ANTIQUE. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
