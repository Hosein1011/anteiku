import heroBg from '../assets/hero-bg.jpg'

function Hero() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero" aria-label="Welcome to ANTIQUE">
      <div className="hero__bg">
        <img
          src={heroBg}
          alt="Atmospheric interior of ANTIQUE coffee house with warm golden lighting"
          className="hero__bg-image"
        />
        <div className="hero__bg-overlay" aria-hidden="true" />
      </div>

      <div className="hero__content">
        <p className="hero__prelude">Est. 2024 · Tokyo</p>

        <h1 className="hero__title">ANTIQUE</h1>

        <p className="hero__tagline">
          Coffee. Memories. Quiet Moments.
        </p>

        <hr className="divider" />

        <p className="hero__description">
          A quiet corner in the city, where every cup has a story.
        </p>

        <div className="hero__actions">
          <a
            href="#menu"
            className="btn btn-primary"
            onClick={(e) => handleNavClick(e, '#menu')}
          >
            View the Menu
          </a>
          <a
            href="#about"
            className="btn btn-outline"
            onClick={(e) => handleNavClick(e, '#about')}
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
