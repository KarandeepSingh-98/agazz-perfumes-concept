import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useWishlist } from '../../context/useWishlist'
import { HeartIcon, MenuIcon, CloseIcon, SearchIcon } from '../common/Icons'
import styles from './Header.module.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'Our House' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const { wishlist } = useWishlist()
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleSearchSubmit = (event) => {
    event.preventDefault()
    navigate(`/shop${query.trim() ? `?search=${encodeURIComponent(query.trim())}` : ''}`)
    setSearchOpen(false)
    setMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <button
          type="button"
          className={styles.menuToggle}
          onClick={() => setMenuOpen(true)}
          aria-label="Open navigation menu"
        >
          <MenuIcon />
        </button>

        <NavLink to="/" className={styles.logo}>
          AGAZZ
          <span className={styles.logoSub}>Perfumes</span>
        </NavLink>

        <nav className={styles.nav} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.iconButton}
            onClick={() => setSearchOpen((open) => !open)}
            aria-label="Toggle search"
            aria-expanded={searchOpen}
          >
            <SearchIcon />
          </button>
          <NavLink to="/wishlist" className={styles.iconButton} aria-label="View wishlist">
            <HeartIcon filled={wishlist.length > 0} />
            {wishlist.length > 0 && <span className={styles.badge}>{wishlist.length}</span>}
          </NavLink>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            className={styles.searchPanel}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <form className={`container ${styles.searchForm}`} onSubmit={handleSearchSubmit}>
              <SearchIcon />
              <input
                type="search"
                autoFocus
                placeholder="Search fragrances…"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-label="Search fragrances"
              />
              <button type="submit" className="btn">
                Search
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.nav
              className={styles.mobilePanel}
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
              aria-label="Mobile"
            >
              <button
                type="button"
                className={styles.mobileClose}
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <CloseIcon />
              </button>
              <ul className={styles.mobileLinks}>
                {NAV_LINKS.map((link) => (
                  <li key={link.to}>
                    <NavLink to={link.to} end={link.to === '/'} onClick={() => setMenuOpen(false)}>
                      {link.label}
                    </NavLink>
                  </li>
                ))}
                <li>
                  <NavLink to="/wishlist" onClick={() => setMenuOpen(false)}>
                    Wishlist {wishlist.length > 0 && `(${wishlist.length})`}
                  </NavLink>
                </li>
              </ul>
              <form className={styles.mobileSearch} onSubmit={handleSearchSubmit}>
                <SearchIcon />
                <input
                  type="search"
                  placeholder="Search fragrances…"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  aria-label="Search fragrances"
                />
              </form>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
