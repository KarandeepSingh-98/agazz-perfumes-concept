import { Link } from 'react-router-dom'
import SectionHeading from '../components/common/SectionHeading'
import ProductGrid from '../components/product/ProductGrid'
import { useWishlist } from '../context/useWishlist'
import { getProductById } from '../data/products'
import styles from './Wishlist.module.css'

export default function Wishlist() {
  const { wishlist } = useWishlist()
  const items = wishlist.map(getProductById).filter(Boolean)

  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading
          eyebrow="Saved"
          title="Your Wishlist"
          subtitle={
            items.length > 0
              ? 'Fragrances you have set aside — saved locally on this device.'
              : undefined
          }
          theme="light"
        />

        {items.length === 0 ? (
          <div className={styles.empty}>
            <p>Your wishlist is empty for now.</p>
            <Link to="/shop" className="btn btn-solid">
              Browse the Catalogue
            </Link>
          </div>
        ) : (
          <ProductGrid products={items} />
        )}
      </div>
    </div>
  )
}
