function MenuItem({ item }) {
  const { name, description, price, category, image, featured } = item

  return (
    <article className={`menu-card ${featured ? 'menu-card--featured' : ''}`}>
      <div className="menu-card__image-container">
        <img
          src={image}
          alt={name}
          className="menu-card__image"
          loading="lazy"
        />
        {featured && (
          <span className="menu-card__badge" aria-label="Featured favorite">
            Favorite
          </span>
        )}
      </div>

      <div className="menu-card__content">
        <div className="menu-card__header">
          <h3 className="menu-card__title">{name}</h3>
          <span className="menu-card__price">
            ${typeof price === 'number' ? price.toFixed(2) : price}
          </span>
        </div>

        <span className="menu-card__category">{category}</span>

        <p className="menu-card__desc">{description}</p>
      </div>
    </article>
  )
}

export default MenuItem
