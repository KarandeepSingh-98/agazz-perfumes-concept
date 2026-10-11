import styles from './SectionHeading.module.css'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  theme = 'dark',
}) {
  return (
    <div className={`${styles.wrap} ${styles[align]} ${styles[theme]}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      <hr className={`gold-rule ${align === 'center' ? styles.centerRule : ''}`} />
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}
