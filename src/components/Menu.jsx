import { useState, useMemo } from 'react'
import MenuItem from './MenuItem'
import CategoryFilter from './CategoryFilter'
import MenuSearch from './MenuSearch'
import { menuCategories, menuItems } from '../data/menuData'

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        selectedCategory.toLowerCase() === 'all' ||
        item.category.toLowerCase() === selectedCategory.toLowerCase()

      const query = searchQuery.trim().toLowerCase()
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  const handleResetFilters = () => {
    setSelectedCategory('All')
    setSearchQuery('')
  }

  return (
    <section id="menu" className="menu-section section" aria-label="Full Coffee and Beverage Menu">
      <div className="container">
        <div className="section-header">
          <p className="section-eyebrow">Handcrafted Offerings</p>
          <h2 className="section-title">The Menu</h2>
          <hr className="divider" />
          <p className="section-subtitle">
            Explore our complete collection of slow-roasted coffees, velvety espressos,
            chilled brews, ceremonial teas, and morning pastries.
          </p>
        </div>

        <MenuSearch
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onClearSearch={() => setSearchQuery('')}
        />

        <CategoryFilter
          categories={menuCategories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="menu-status" aria-live="polite">
          <p className="menu-status__count">
            Showing <strong>{filteredItems.length}</strong>{' '}
            {filteredItems.length === 1 ? 'item' : 'items'}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {filteredItems.length > 0 ? (
          <div className="menu-grid">
            {filteredItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="menu-empty">
            <p className="menu-empty__title">No offerings match your search.</p>
            <p className="menu-empty__desc">
              Try adjusting your search terms or select another category.
            </p>
            <button
              type="button"
              className="btn btn-outline"
              onClick={handleResetFilters}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Menu
