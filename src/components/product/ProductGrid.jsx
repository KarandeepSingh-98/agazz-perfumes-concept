import ProductCard from './ProductCard'
import styles from './ProductGrid.module.css'

export default function ProductGrid({
  products,
  emptyMessage = 'No fragrances match your search.',
  variant = 'auto',
}) {
  if (products.length === 0) {
    return <p className={styles.empty}>{emptyMessage}</p>
  }

  return (
    <div className={`${styles.grid} ${variant === 'featured' ? styles.featured : ''}`}>
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  )
}
