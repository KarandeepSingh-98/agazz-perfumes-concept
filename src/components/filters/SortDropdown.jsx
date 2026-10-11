import styles from './SortDropdown.module.css'

const OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A to Z' },
]

export default function SortDropdown({ value, onChange }) {
  return (
    <label className={styles.wrap}>
      <span className="visually-hidden">Sort products</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}
