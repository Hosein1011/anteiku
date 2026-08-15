import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Visit Us', href: '#visit' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      const sections = ['home', 'menu', 'about', 'visit']
      const scrollPos = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} navbar--polished`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__inner">
        <a
          href="#home"
          className="navbar__brand navbar__brand--glow"
          onClick={(e) => handleNavClick(e, '#home')}
          aria-label="ANTIQUE - Return to top"
        >
          <span className="navbar__brand-text">ANTIQUE</span>
          <span className="navbar__brand-sub">喫茶</span>
        </a>

        <ul className="navbar__links" role="menubar">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <li key={link.href} role="none">
                <a
                  href={link.href}
                  className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                  role="menuitem"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                  {isActive && <span className="navbar__link-dot" aria-hidden="true" />}
                </a>
              </li>
            )
          })}
        </ul>

        <button
          className={`navbar__hamburger ${isMenuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          type="button"
        >
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
          <span className="navbar__hamburger-line" />
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`navbar__mobile ${isMenuOpen ? 'navbar__mobile--open' : ''}`}
        role="menu"
        aria-hidden={!isMenuOpen}
      >
        <ul className="navbar__mobile-links">
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <a
                href={link.href}
                className="navbar__mobile-link"
                role="menuitem"
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {isMenuOpen && (
        <div
          className="navbar__overlay"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </nav>
  )
}

export default Navbar
