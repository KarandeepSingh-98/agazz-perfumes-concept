import { Link } from 'react-router-dom'
import { CATEGORIES } from '../../data/products'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>AGAZZ</span>
          <p className={styles.tagline}>
            A niche fragrance house crafting perfumes, attars, and ambient scents for those who
            wear memory as adornment.
          </p>
        </div>

        <div className={styles.col}>
          <h3>Shop</h3>
          <ul>
            {CATEGORIES.map((category) => (
              <li key={category.id}>
                <Link to={`/shop?category=${category.id}`}>{category.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h3>Explore</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Full Catalogue</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/about">Our House</Link>
            </li>
          </ul>
        </div>

        <div className={styles.col}>
          <h3>This Demo</h3>
          <p className={styles.muted}>
            A frontend concept storefront. No checkout, payment, or account system is connected.
          </p>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <p>&copy; {new Date().getFullYear()} AGazz Perfumes. All rights reserved.</p>
        <p className={styles.muted}>
          Location and contact details are not yet confirmed and are omitted pending approval.
        </p>
      </div>
    </footer>
  )
}
