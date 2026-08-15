function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo" aria-label="Site footer">
      <div className="footer__container container">
        <div className="footer__brand">
          <a
            href="#home"
            className="footer__logo"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="ANTIQUE - Return to top"
          >
            ANTIQUE
          </a>
          <p className="footer__tagline">Coffee. Memories. Quiet Moments.</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <ul className="footer__links">
            <li>
              <a
                href="#home"
                className="footer__link"
                onClick={(e) => handleNavClick(e, '#home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="footer__link"
                onClick={(e) => handleNavClick(e, '#menu')}
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="footer__link"
                onClick={(e) => handleNavClick(e, '#about')}
              >
                Our Story
              </a>
            </li>
            <li>
              <a
                href="#visit"
                className="footer__link"
                onClick={(e) => handleNavClick(e, '#visit')}
              >
                Visit Us
              </a>
            </li>
          </ul>
        </nav>

        <div className="footer__divider" aria-hidden="true">
          <span className="footer__divider-gem">◆</span>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} ANTIQUE Coffee House. All rights reserved.
          </p>
          <p className="footer__fictional-note">
            A fictional coffee sanctuary inspired by quiet Tokyo moments.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
