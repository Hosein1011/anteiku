# ANTIQUE

> *Coffee. Memories. Quiet Moments.*

[![Deploy to GitHub Pages](https://github.com/Hosein1011/anteiku/actions/workflows/deploy.yml/badge.svg)](https://github.com/Hosein1011/anteiku/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live%20Site-GitHub%20Pages-c9a96e?style=flat&logo=github)](https://Hosein1011.github.io/anteiku/)
[![React 19](https://img.shields.io/badge/React-19.2-61dafb?style=flat&logo=react)](https://react.dev/)
[![Vite 8](https://img.shields.io/badge/Vite-8.2-646cff?style=flat&logo=vite)](https://vite.dev/)

A static frontend single-page application for **ANTIQUE**, an elegant, atmospheric Japanese coffee sanctuary inspired by quiet Tokyo moments. Built with React 19, Vite, and vanilla CSS design tokens, following strict academic software engineering practices including branch workflows, conflict resolution, Pull Requests, and automated CI/CD deployment.

---

## Table of Contents

- [1. Project Overview](#1-project-overview)
- [2. ANTIQUE Concept & Atmosphere](#2-antique-concept--atmosphere)
- [3. Features](#3-features)
- [4. Technology Stack](#4-technology-stack)
- [5. Installation & Local Development](#5-installation--local-development)
- [6. Project Structure](#6-project-structure)
- [7. Git Branching Strategy](#7-git-branching-strategy)
- [8. Feature Branches Summary](#8-feature-branches-summary)
- [9. Complete Commit History](#9-complete-commit-history)
- [10. Conflict Resolution #1 (App Integration)](#10-conflict-resolution-1-app-integration)
- [11. Conflict Resolution #2 (Theme Polish & Responsive Fix)](#11-conflict-resolution-2-theme-polish--responsive-fix)
- [12. Pull Request Workflow & Main Branch Protection](#12-pull-request-workflow--main-branch-protection)
- [13. Continuous Deployment (GitHub Actions & Pages)](#13-continuous-deployment-github-actions--pages)
- [14. Project Management & Kanban Board](#14-project-management--kanban-board)
- [15. Live Demonstration](#15-live-demonstration)
- [16. License & Academic Disclaimer](#16-license--academic-disclaimer)

---

## 1. Project Overview

This repository represents the final term project for the **Software Engineering Lab**. Beyond presenting a portfolio-grade web experience, the primary objective is to maintain a verifiable, traceable, and mathematically authentic Git development lifecycle.

Key deliverables demonstrated:
- Minimum 20+ meaningful commits using [Conventional Commits](https://www.conventionalcommits.org/).
- Minimum 3+ distinct feature branches.
- Exactly 2 real Git merge conflict scenarios generated through genuine divergent branch work and cleanly resolved.
- Component-driven React architecture with interactive category filtering, live text search, and responsive layout.
- Fully automated continuous deployment pipeline to GitHub Pages via GitHub Actions.

---

## 2. ANTIQUE Concept & Atmosphere

ANTIQUE is a fictional neighborhood coffee house located on a quiet side street in Shibuya, Tokyo. The design palette is crafted around:
- **Near-Black Charcoal** (`#0f0d0b`, `#1a1410`): Deep, calm backgrounds evoking twilight.
- **Deep Coffee Brown** (`#3e2723`, `#1e1812`): Warm wooden textures and rich espresso tones.
- **Warm Cream** (`#f5ece0`, `#d4c8b8`): Soft vintage typography and readability.
- **Muted Gold Accents** (`#c9a96e`, `#a68b55`): Subtle borders, active states, and brand marks.
- **Burgundy Highlights** (`#6b2d3e`, `#8b3d4e`): Badges and delicate accents.
- **Editorial Typography**: *Cormorant Garamond* for titles and *Inter* for body copy.

---

## 3. Features

### Navigation
- Sticky header with dynamic background blur and opacity transition on scroll.
- Active section scroll spy detecting current view (`Home`, `Menu`, `About`, `Visit Us`).
- Responsive mobile drawer with slide-in animation, backdrop overlay, Escape-key dismiss, and body touch-lock.

### Hero Section
- Full viewport cinematic presentation with original Japanese café interior photography.
- High-contrast typography, brand tagline, and smooth-scroll CTA buttons.

### Featured Menu ("Our Favorites")
- Curated showcase dynamically derived from `menuData.js` highlighting 4 signature drinks:
  1. *Antique House Blend* ($4.50)
  2. *Black Rabbit Mocha* ($6.00)
  3. *Midnight Latte* ($5.75)
  4. *Tokyo Cold Brew* ($5.25)

### Interactive Full Menu
- **25 original menu items** across 5 categories: `Coffee`, `Espresso`, `Cold`, `Tea`, and `Desserts`.
- **Category Filter Tabs**: Instant filtering by category without page reload.
- **Live Search Bar**: Real-time filtering matching item title, description, or category with instant clear action.
- **Combined Filtering**: Search query and category filter operate concurrently.
- **Live Counter & Empty State**: Accessible screen-reader counter (`aria-live="polite"`) and graceful fallback with filter reset.

### About Section
- Two-column responsive editorial layout detailing the artisanal origins, small-batch roasting philosophy, and quiet Tokyo atmosphere.

### Visit Us / Contact
- 3 elevated detail cards presenting fictional location (`12 Lantern Street, Shibuya-ku, Tokyo`), weekday/weekend operating hours, and contact details.

### Footer
- Brand badge (`ANTIQUE 喫茶`), navigation links, decorative center diamond divider, and academic disclaimer.

---

## 4. Technology Stack

- **Core**: React 19.2 (`react`, `react-dom`)
- **Build Tool**: Vite 8.2 with `@vitejs/plugin-react`
- **Styling**: Vanilla CSS with comprehensive CSS custom properties (Design Tokens)
- **Icons & Typography**: Google Fonts (*Cormorant Garamond*, *Inter*) + Inline SVGs
- **Version Control**: Git & GitHub
- **Automation / CI**: GitHub Actions (`deploy.yml`)
- **Hosting**: GitHub Pages

---

## 5. Installation & Local Development

### Prerequisites
- Node.js `v20.x` or later (tested on `v24.19.0`)
- npm `10.x` or later (tested on `11.17.0`)

### Setup Instructions
```bash
# 1. Clone the repository
git clone https://github.com/Hosein1011/anteiku.git
cd anteiku

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev

# 4. Open in browser
# http://localhost:5173/anteiku/
```

### Production Build & Lint
```bash
# Lint code for syntax and style rules
npm run lint

# Compile production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 6. Project Structure

```
anteiku/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   └── favicon.svg             # Site favicon
├── src/
│   ├── assets/
│   │   ├── hero-bg.jpg         # Original atmospheric café photography
│   │   └── about-bg.jpg        # Original pour-over coffee photography
│   ├── components/
│   │   ├── Navbar.jsx          # Responsive header & mobile navigation
│   │   ├── Hero.jsx            # Full viewport hero section
│   │   ├── FeaturedMenu.jsx    # "Our Favorites" 4-card showcase
│   │   ├── CategoryFilter.jsx  # Category selection pill tabs
│   │   ├── MenuSearch.jsx      # Real-time search input bar
│   │   ├── MenuItem.jsx        # Reusable menu item card component
│   │   ├── Menu.jsx            # Complete interactive menu system
│   │   ├── About.jsx           # ANTIQUE story & artisanal philosophy
│   │   ├── Contact.jsx         # Visit Us cards, hours & location
│   │   └── Footer.jsx          # Brand links, copyright & disclaimer
│   ├── data/
│   │   └── menuData.js         # 25 menu items with prices, tags & images
│   ├── App.css                 # Component layout & responsive styles
│   ├── App.jsx                 # Single-page application root
│   ├── index.css               # Design tokens, reset, typography & utilities
│   └── main.jsx                # React DOM root entry point
├── .gitignore                  # Git exclusions (build, logs, env)
├── index.html                  # HTML5 shell, Google Fonts & meta tags
├── package.json                # Project scripts & dependencies
├── vite.config.js              # Vite bundler config with base: '/anteiku/'
└── README.md                   # Project documentation
```

---

## 7. Git Branching Strategy

The repository follows a structured branching model:

```
main (protected production branch)
  ↑ (PR merge)
develop (integration branch)
  ↑ (clean merge)    ── feature/deployment
  ↑ (conflict #2)    ── feature/theme-polish
  ↑ (conflict #1)    ── feature/menu-system
  ↑ (clean merge)    ── feature/ui-foundation
```

### Strategy Principles:
1. **`main`**: Protected branch representing deployable production code. Triggers GitHub Actions deployment.
2. **`develop`**: Central integration branch where all features and fixes are merged and validated.
3. **`feature/*`**: Short-lived branches dedicated to individual subsystems (`ui-foundation`, `menu-system`, `theme-polish`, `deployment`).

---

## 8. Feature Branches Summary

| Branch Name | Base Commit | Purpose | Commits |
|---|---|---|---|
| `feature/ui-foundation` | `8cf8345` | Built Navbar, Hero, About, Contact, Footer & visual assets | 6 |
| `feature/menu-system` | `8cf8345` | Built 25-item data model, MenuItem, FeaturedMenu, CategoryFilter, MenuSearch, Menu | 7 |
| `feature/theme-polish` | `9fe96e2` | Implemented scroll spy, animations, link dots, brand subtitle | 2 |
| `feature/deployment` | `9ba158e` | Configured GitHub Actions workflow and Vite base path | 2 |

---

## 9. Complete Commit History

Every commit in this repository represents an authentic milestone of work:

```
* 4087f57 build: configure Vite base path for GitHub Pages
* 98a96b0 ci: configure GitHub Actions for Pages deployment
*   9ba158e merge: resolve conflict integrating theme-polish (Conflict #2 Resolution)
|\  
| * b21fa26 style: enhance navbar visual design and transitions
| * e041c9a style: refine animations and hover interactions
* | 84036a4 fix: resolve responsive navbar overflow on mobile
|/  
*   9fe96e2 merge: resolve conflict integrating menu-system (Conflict #1 Resolution)
|\  
| * 6339681 feat: integrate menu system into application
| * c1f0916 feat: implement full menu section with filter and search
| * 21c59fa feat: implement menu search functionality
| * 444369d feat: implement category filter component
| * 13734c3 feat: implement featured menu section
| * a7a7c07 feat: implement MenuItem card component
| * a99c44f feat: create menu data model with 20+ items
* | 77b5178 feat: integrate ui-foundation sections into app
* | 778308a feat: implement footer component
* | 55f9d9a feat: implement visit-us contact section
* | 7262164 feat: implement about section
* | dfd606d feat: implement hero section with atmospheric design and visual assets
* | 23f1ef0 feat: implement responsive navigation bar
|/  
* 8cf8345 style: establish antique visual theme and design tokens
* a33591b feat: create base application structure
* 61d1f94 chore: configure .gitignore and project metadata
* c2c50dc chore: initialize React project with Vite
```

---

## 10. Conflict Resolution #1 (App Integration)

### Context & Cause
Both `feature/ui-foundation` and `feature/menu-system` branched simultaneously from `develop@8cf8345`. Each branch independently replaced the starter placeholder in `App.jsx` with its own component tree:
- `feature/ui-foundation` added `Navbar`, `Hero`, `About`, `Contact`, `Footer` and left a temporary placeholder for the menu.
- `feature/menu-system` added `FeaturedMenu` and `Menu` between the hero and about placeholders.

### Conflicted Files
- **`src/App.jsx`** (Content conflict on import statements and JSX body).
- **`src/App.css`** (Auto-merged by Git without conflict).

### Conflict Markers Inspected
```jsx
<<<<<<< HEAD
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
=======
import FeaturedMenu from './components/FeaturedMenu'
import Menu from './components/Menu'
>>>>>>> feature/menu-system
```

### Resolution
Merged all 7 component imports and structured the `<main>` section in logical reading order:
`Navbar` ➔ `Hero` ➔ `FeaturedMenu` ➔ `Menu` ➔ `About` ➔ `Contact` ➔ `Footer`.
Committed as **`9fe96e2`** (`merge: resolve conflict integrating menu-system`).

---

## 11. Conflict Resolution #2 (Theme Polish & Responsive Fix)

### Context & Cause
After Conflict #1 was merged into `develop` at `9fe96e2`, two parallel workflows diverged:
1. Direct responsive fix on `develop` (`84036a4`): Added mobile Escape-key listener, body touch lock, close button in drawer, and `navbar--menu-active` state.
2. Visual polish on `feature/theme-polish` (`b21fa26`): Added scroll spy active indicators, Japanese brand subtitle `喫茶`, active link dots, and `navbar--polished` styling.

### Conflicted Files
- **`src/components/Navbar.jsx`** (Content conflict on `<nav>` element attributes and className).
- **`src/index.css`** (Auto-merged responsive rules and keyframe animations).
- **`src/App.css`** (Auto-merged drawer styles and visual polish).

### Conflict Markers Inspected
```jsx
<<<<<<< HEAD
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${
        isMenuOpen ? 'navbar--menu-active' : ''
      }`}
=======
      className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} navbar--polished`}
>>>>>>> feature/theme-polish
```

### Resolution
Combined all classes into `navbar ${isScrolled ? 'navbar--scrolled' : ''} ${isMenuOpen ? 'navbar--menu-active' : ''} navbar--polished`, preserving all mobile accessibility logic alongside all visual polish enhancements.
Committed as **`9ba158e`** (`merge: resolve conflict integrating theme-polish`).

---

## 12. Pull Request Workflow & Main Branch Protection

To release code from `develop` into production `main`:
1. Push `develop` to `origin`.
2. Open a Pull Request from `develop` into `main` titled:
   `release: v1.0 — complete ANTIQUE coffee shop website`
3. Verify that CI build passes.
4. Merge the Pull Request into `main`.

### Recommended Branch Protection Rules on `main`:
- **Require a pull request before merging**: Enabled (enforces code review).
- **Require status checks to pass before merging**: `deploy` workflow.
- **Do not allow bypassing the above settings**: Enabled.

---

## 13. Continuous Deployment (GitHub Actions & Pages)

Deployment is managed entirely through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):
1. **Trigger**: Any push to the `main` branch.
2. **Build**: Checks out the repository, installs Node 20 dependencies with `npm ci`, and compiles the production bundle with `npm run build`.
3. **Artifact**: Uploads `./dist` using `actions/upload-pages-artifact@v3`.
4. **Publish**: Automatically deploys the artifact to GitHub Pages with `actions/deploy-pages@v4`.

---

## 14. Project Management & Kanban Board

Project tasks were tracked using a GitHub Kanban Board structure organized into 5 workflow states:

```
[ BACKLOG ] ➔ [ TODO ] ➔ [ IN PROGRESS ] ➔ [ CODE REVIEW ] ➔ [ DONE ]
```

### Task Distribution & Implementation Mapping

| Task / Issue Title | Category | Branch | Associated Commits | Final Status |
|---|---|---|---|---|
| Initialize React/Vite project | Setup | `main` | `c2c50dc` | **DONE** |
| Configure .gitignore & metadata | Setup | `develop` | `61d1f94` | **DONE** |
| Create base application structure | Architecture | `develop` | `a33591b` | **DONE** |
| Establish ANTIQUE design tokens | Styling | `develop` | `8cf8345` | **DONE** |
| Implement responsive navigation bar | UI Component | `feature/ui-foundation` | `23f1ef0` | **DONE** |
| Implement hero section with assets | UI Component | `feature/ui-foundation` | `dfd606d` | **DONE** |
| Implement about section | UI Component | `feature/ui-foundation` | `7262164` | **DONE** |
| Implement visit-us contact section | UI Component | `feature/ui-foundation` | `55f9d9a` | **DONE** |
| Implement footer component | UI Component | `feature/ui-foundation` | `778308a` | **DONE** |
| Assemble UI foundation into App | Integration | `feature/ui-foundation` | `77b5178` | **DONE** |
| Create 25-item menu data model | Data | `feature/menu-system` | `a99c44f` | **DONE** |
| Implement MenuItem card component | Component | `feature/menu-system` | `a7a7c07` | **DONE** |
| Implement featured menu section | Component | `feature/menu-system` | `13734c3` | **DONE** |
| Implement category filter tabs | Component | `feature/menu-system` | `444369d` | **DONE** |
| Implement menu search bar | Component | `feature/menu-system` | `21c59fa` | **DONE** |
| Implement interactive Menu system | Component | `feature/menu-system` | `c1f0916` | **DONE** |
| Assemble menu system into App | Integration | `feature/menu-system` | `6339681` | **DONE** |
| Resolve Conflict #1 (App integration) | Git / Merge | `develop` | `9fe96e2` | **DONE** |
| Fix mobile navbar overflow | Bugfix | `develop` | `84036a4` | **DONE** |
| Refine hover animations & effects | Styling | `feature/theme-polish` | `e041c9a` | **DONE** |
| Enhance navbar visual transitions | Styling | `feature/theme-polish` | `b21fa26` | **DONE** |
| Resolve Conflict #2 (Theme polish) | Git / Merge | `develop` | `9ba158e` | **DONE** |
| Configure GitHub Actions CI/CD | DevOps | `feature/deployment` | `98a96b0` | **DONE** |
| Configure Vite base path for Pages | DevOps | `feature/deployment` | `4087f57` | **DONE** |
| Write comprehensive README | Documentation | `develop` | `eb386c3` | **DONE** |

---

## 15. Live Demonstration

- **GitHub Repository**: [https://github.com/Hosein1011/anteiku](https://github.com/Hosein1011/anteiku)
- **Live GitHub Pages URL**: [https://Hosein1011.github.io/anteiku/](https://Hosein1011.github.io/anteiku/)

---

## 16. License & Academic Disclaimer

This project is created strictly for educational purposes as part of a university Software Engineering Lab course.
- **Original Content**: All copywriting, fictional menu items, design tokens, and components are original work.
- **Imagery**: Original AI-generated visual assets and curated photography from Unsplash.
- **Trademarks**: ANTIQUE is a fictional establishment and is not affiliated with any real brand or intellectual property.
