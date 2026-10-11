import styles from './NotePyramid.module.css'

const TIERS = [
  { key: 'top', label: 'Top Notes' },
  { key: 'heart', label: 'Heart Notes' },
  { key: 'base', label: 'Base Notes' },
]

export default function NotePyramid({ notes }) {
  if (!notes) return null

  return (
    <div className={styles.pyramid}>
      {TIERS.map(
        (tier) =>
          notes[tier.key]?.length > 0 && (
            <div key={tier.key} className={styles.tier}>
              <h4>{tier.label}</h4>
              <ul>
                {notes[tier.key].map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          )
      )}
    </div>
  )
}
