function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div
      className="category-filter"
      role="group"
      aria-label="Filter menu by category"
    >
      <div className="category-filter__list">
        {categories.map((category) => {
          const isSelected = selectedCategory.toLowerCase() === category.toLowerCase()

          return (
            <button
              key={category}
              type="button"
              className={`category-filter__btn ${
                isSelected ? 'category-filter__btn--active' : ''
              }`}
              onClick={() => onSelectCategory(category)}
              aria-pressed={isSelected}
            >
              {category}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryFilter
