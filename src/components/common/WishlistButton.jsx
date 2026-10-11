import { motion } from 'framer-motion'
import { useWishlist } from '../../context/useWishlist'
import { HeartIcon } from './Icons'
import styles from './WishlistButton.module.css'

export default function WishlistButton({ productId, productName, size = 'md' }) {
  const { isWishlisted, toggleWishlist } = useWishlist()
  const active = isWishlisted(productId)

  return (
    <motion.button
      type="button"
      className={`${styles.button} ${styles[size]} ${active ? styles.active : ''}`}
      onClick={(event) => {
        event.preventDefault()
        event.stopPropagation()
        toggleWishlist(productId)
      }}
      aria-pressed={active}
      aria-label={active ? `Remove ${productName} from wishlist` : `Add ${productName} to wishlist`}
      whileTap={{ scale: 0.88 }}
    >
      <HeartIcon filled={active} />
    </motion.button>
  )
}
