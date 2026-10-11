import { useCallback, useEffect, useMemo, useState } from 'react'
import { WishlistContext } from './wishlist-context-instance'

const STORAGE_KEY = 'agazz-wishlist'

const readStoredWishlist = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(readStoredWishlist)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist))
    } catch {
      // storage unavailable (private browsing, quota, etc.) — fail silently
    }
  }, [wishlist])

  const toggleWishlist = useCallback((productId) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    )
  }, [])

  const isWishlisted = useCallback((productId) => wishlist.includes(productId), [wishlist])

  const value = useMemo(
    () => ({ wishlist, toggleWishlist, isWishlisted }),
    [wishlist, toggleWishlist, isWishlisted]
  )

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}
