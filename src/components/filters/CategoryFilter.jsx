import { CATEGORIES } from '../../data/products'
import styles from './CategoryFilter.module.css'

export default function CategoryFilter({ active, onChange }) {
  return (
    <div className={styles.wrap} role="group" aria-label="Filter by category">
      <button
        type="button"
        className={`${styles.chip} ${active === 'all' ? styles.active : ''}`}
        onClick={() => onChange('all')}
      >
        All
      </button>
      {CATEGORIES.map((category) => (
        <button
          key={category.id}
          type="button"
          className={`${styles.chip} ${active === category.id ? styles.active : ''}`}
          onClick={() => onChange(category.id)}
        >
          {category.label}
        </button>
      ))}
    </div>
  )
}
