function Contact() {
  return (
    <section id="visit" className="contact" aria-label="Visit Us">
      <div className="contact__container container">
        <div className="contact__header">
          <h2 className="contact__heading">Visit Us</h2>
          <hr className="divider" />
          <p className="contact__subtitle">
            We would love to welcome you to our quiet corner of the city.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__card">
            <h3 className="contact__card-title">Location</h3>
            <address className="contact__address">
              <p>12 Lantern Street</p>
              <p>Shibuya-ku, Tokyo</p>
              <p>Japan 150-0001</p>
            </address>
          </div>

          <div className="contact__card">
            <h3 className="contact__card-title">Hours</h3>
            <div className="contact__hours">
              <div className="contact__hours-row">
                <span className="contact__hours-days">Mon – Fri</span>
                <span className="contact__hours-time">08:00 – 23:00</span>
              </div>
              <div className="contact__hours-row">
                <span className="contact__hours-days">Sat – Sun</span>
                <span className="contact__hours-time">09:00 – 00:00</span>
              </div>
            </div>
          </div>

          <div className="contact__card">
            <h3 className="contact__card-title">Contact</h3>
            <div className="contact__details">
              <p>
                <a href="tel:+81312345678" aria-label="Phone number">
                  +81 3-1234-5678
                </a>
              </p>
              <p>
                <a href="mailto:hello@antique.coffee" aria-label="Email address">
                  hello@antique.coffee
                </a>
              </p>
            </div>
          </div>
        </div>

        <p className="contact__disclaimer">
          <em>
            This is a fictional project created for educational purposes.
            ANTIQUE is not a real establishment.
          </em>
        </p>
      </div>
    </section>
  )
}

export default Contact
