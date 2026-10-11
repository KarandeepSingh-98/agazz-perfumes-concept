import { SearchIcon } from '../common/Icons'
import styles from './SearchBar.module.css'

export default function SearchBar({ value, onChange }) {
  return (
    <label className={styles.wrap}>
      <SearchIcon className={styles.icon} />
      <input
        type="search"
        placeholder="Search by name or note…"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Search fragrances"
      />
    </label>
  )
}
