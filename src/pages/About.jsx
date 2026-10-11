import { Link } from 'react-router-dom'
import SectionHeading from '../components/common/SectionHeading'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.page}>
      <div className={`container ${styles.inner}`}>
        <SectionHeading
          eyebrow="Our House"
          title="Fragrance as Personal Expression"
          theme="dark"
        />

        <div className={styles.columns}>
          <p>
            AGazz Perfumes brings together four expressions of scent in one catalogue: perfumes
            built around a classic top, heart, and base structure; concentrated attars; home
            fragrance for everyday spaces; and hanging car diffusers for fragrance on the move.
          </p>
          <p>
            Every formula on this site is presented with the fragrance notes exactly as supplied —
            nothing embellished, nothing invented — so you can choose a scent on its own terms.
          </p>
          <p className={styles.note}>
            This is a concept storefront built to demonstrate the AGazz catalogue. Brand history,
            heritage, and production details are intentionally omitted here pending confirmation.
          </p>
        </div>

        <Link to="/shop" className="btn">
          Explore the Catalogue
        </Link>
      </div>
    </div>
  )
}
