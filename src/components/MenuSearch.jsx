function MenuSearch({ searchQuery, onSearchChange, onClearSearch }) {
  return (
    <div className="menu-search" role="search">
      <div className="menu-search__input-wrapper">
        <svg
          className="menu-search__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        <input
          type="text"
          className="menu-search__input"
          placeholder="Search by name, origin, or flavor..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search menu items"
        />

        {searchQuery && (
          <button
            type="button"
            className="menu-search__clear"
            onClick={onClearSearch}
            aria-label="Clear search query"
          >
            &times;
          </button>
        )}
      </div>
    </div>
  )
}

export default MenuSearch
