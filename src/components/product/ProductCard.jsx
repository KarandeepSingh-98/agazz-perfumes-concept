import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PriceTag from '../common/PriceTag'
import WishlistButton from '../common/WishlistButton'
import { CATEGORIES } from '../../data/products'
import styles from './ProductCard.module.css'

const categoryLabel = (id) => CATEGORIES.find((category) => category.id === id)?.label ?? id

export default function ProductCard({ product, index = 0 }) {
  const fitClass = product.imageFit === 'cover' ? styles.cover : styles.contain

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: Math.min(index, 5) * 0.06, ease: 'easeOut' }}
    >
      <Link to={`/product/${product.id}`} className={styles.imageLink}>
        <div className={`${styles.imageWrap} ${fitClass}`}>
          <img src={product.image} alt={product.name} loading="lazy" />
        </div>
      </Link>

      <div className={styles.body}>
        <div className={styles.headRow}>
          <div>
            <p className={styles.category}>{categoryLabel(product.category)}</p>
            <h3 className={styles.name}>
              <Link to={`/product/${product.id}`}>{product.name}</Link>
            </h3>
          </div>
          <WishlistButton productId={product.id} productName={product.name} size="sm" />
        </div>

        <p className={styles.tagline}>{product.tagline}</p>

        <div className={styles.footRow}>
          <span className={styles.size}>{product.size || 'Hanging diffuser'}</span>
          <PriceTag price={product.price} className={styles.price} />
        </div>
      </div>
    </motion.article>
  )
}
