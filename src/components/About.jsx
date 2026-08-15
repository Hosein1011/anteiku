import aboutBg from '../assets/about-bg.jpg'

function About() {
  return (
    <section id="about" className="about" aria-label="About ANTIQUE">
      <div className="about__container container">
        <div className="about__image-wrapper">
          <img
            src={aboutBg}
            alt="Artisanal pour-over coffee being carefully prepared at ANTIQUE"
            className="about__image"
          />
        </div>

        <div className="about__text">
          <h2 className="about__heading">Our Story</h2>
          <hr className="divider about__divider" />

          <p className="about__lead">
            Tucked away on a quiet side street in Tokyo, ANTIQUE is more than
            a coffee house — it is a place where time slows down.
          </p>

          <p>
            We opened our doors with a simple belief: that the best conversations
            happen over carefully made coffee, in spaces that feel like home. Our
            beans are sourced from small farms across Ethiopia, Colombia, and
            Guatemala, roasted slowly in small batches to bring out the warmth and
            complexity hidden in every origin.
          </p>

          <p>
            The worn wooden counter, the soft amber glow of our pendant lights,
            the scent of freshly ground beans at dawn — every detail of ANTIQUE has
            been shaped by a love for the quiet rituals that make a day feel whole.
          </p>

          <p>
            Whether you come for the first pour of the morning or a late-night
            espresso before the city sleeps, you will always find a seat, a story,
            and a cup made just for you.
          </p>

          <p className="about__signature">
            — The ANTIQUE Family
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
