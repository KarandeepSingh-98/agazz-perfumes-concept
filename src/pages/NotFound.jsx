import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>This page has evaporated.</h1>
        <p>The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link to="/" className="btn btn-solid">
          Return Home
        </Link>
      </div>
    </div>
  )
}
