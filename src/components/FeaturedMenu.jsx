import MenuItem from './MenuItem'
import { menuItems } from '../data/menuData'

function FeaturedMenu() {
  const featuredItems = menuItems.filter((item) => item.featured)

  return (
    <section id="featured" className="featured-section section" aria-label="Featured favorites">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Curated Selections</p>
          <h2 className="section-title">Our Favorites</h2>
          <hr className="divider" />
          <p className="section-subtitle">
            Distinctive cups that embody the soul and quiet atmosphere of ANTIQUE.
          </p>
        </div>

        <div className="menu-grid featured-grid">
          {featuredItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedMenu
