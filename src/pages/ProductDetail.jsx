import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import PriceTag from '../components/common/PriceTag'
import WishlistButton from '../components/common/WishlistButton'
import SectionHeading from '../components/common/SectionHeading'
import NotePyramid from '../components/product/NotePyramid'
import ProductGrid from '../components/product/ProductGrid'
import { CATEGORIES, getProductById, getRelatedProducts } from '../data/products'
import styles from './ProductDetail.module.css'

const categoryLabel = (id) => CATEGORIES.find((category) => category.id === id)?.label ?? id

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const related = getRelatedProducts(product)
  const fitClass = product.imageFit === 'cover' ? styles.cover : styles.contain

  return (
    <div>
      <div className={`container ${styles.breadcrumb}`}>
        <Link to="/shop">Shop</Link> <span>/</span> <span>{product.name}</span>
      </div>

      <section className={`container ${styles.layout}`}>
        <motion.div
          className={`${styles.imageWrap} ${fitClass}`}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <img src={product.image} alt={product.name} />
        </motion.div>

        <motion.div
          className={styles.info}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
        >
          <span className="eyebrow">{categoryLabel(product.category)}</span>
          <div className={styles.titleRow}>
            <h1>{product.name}</h1>
            <WishlistButton productId={product.id} productName={product.name} size="lg" />
          </div>
          <p className={styles.tagline}>{product.tagline}</p>

          <div className={styles.priceRow}>
            <PriceTag price={product.price} className={styles.price} />
            <span className={styles.size}>{product.size || 'Hanging car diffuser'}</span>
          </div>

          <p className={styles.description}>{product.description}</p>

          {product.notes && (
            <div className={styles.notesBlock}>
              <h2 className={styles.notesHeading}>Fragrance Notes</h2>
              <NotePyramid notes={product.notes} />
            </div>
          )}

          {product.artwork && (
            <div className={styles.artworkBlock}>
              <h2 className={styles.notesHeading}>Fragrance Notes Artwork</h2>
              <img
                className={styles.artworkImage}
                src={product.artwork}
                alt={`Full fragrance notes artwork for ${product.name}`}
                loading="lazy"
              />
            </div>
          )}

          <p className={styles.disclaimer}>
            Frontend concept store — this is a preview experience; no payment is processed.
          </p>
        </motion.div>
      </section>

      {related.length > 0 && (
        <section className={`container ${styles.related}`}>
          <SectionHeading eyebrow="You May Also Like" title="Related Fragrances" theme="dark" />
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  )
}
