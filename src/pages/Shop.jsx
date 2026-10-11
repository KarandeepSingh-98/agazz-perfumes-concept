import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SectionHeading from '../components/common/SectionHeading'
import ProductGrid from '../components/product/ProductGrid'
import CategoryFilter from '../components/filters/CategoryFilter'
import SearchBar from '../components/filters/SearchBar'
import SortDropdown from '../components/filters/SortDropdown'
import { products } from '../data/products'
import styles from './Shop.module.css'

const matchesSearch = (product, query) => {
  if (!query) return true
  const haystack = [
    product.name,
    product.tagline,
    product.description,
    ...(product.notes ? [...product.notes.top, ...product.notes.heart, ...product.notes.base] : []),
  ]
    .join(' ')
    .toLowerCase()
  return haystack.includes(query.toLowerCase())
}

const sortProducts = (list, sortBy) => {
  const sorted = [...list]
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price)
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    default:
      return sorted.sort((a, b) => Number(b.featured) - Number(a.featured))
  }
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')

  const category = searchParams.get('category') || 'all'
  const query = searchParams.get('search') || ''

  const handleCategoryChange = (next) => {
    const params = new URLSearchParams(searchParams)
    if (next === 'all') {
      params.delete('category')
    } else {
      params.set('category', next)
    }
    setSearchParams(params)
  }

  const handleQueryChange = (next) => {
    const params = new URLSearchParams(searchParams)
    if (next) {
      params.set('search', next)
    } else {
      params.delete('search')
    }
    setSearchParams(params, { replace: true })
  }

  const filtered = useMemo(() => {
    const byCategory = products.filter((product) => category === 'all' || product.category === category)
    const bySearch = byCategory.filter((product) => matchesSearch(product, query))
    return sortProducts(bySearch, sortBy)
  }, [category, query, sortBy])

  return (
    <div className={styles.page}>
      <div className="container">
        <SectionHeading
          eyebrow="The Catalogue"
          title="All Fragrances"
          subtitle="Filter by category, search by note, and sort to find the bottle that suits your mood."
          theme="light"
        />

        <div className={styles.toolbar}>
          <CategoryFilter active={category} onChange={handleCategoryChange} />
          <div className={styles.toolbarRight}>
            <SearchBar value={query} onChange={handleQueryChange} />
            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>
        </div>

        <p className={styles.count}>
          {filtered.length} {filtered.length === 1 ? 'fragrance' : 'fragrances'} found
        </p>

        <ProductGrid products={filtered} />
      </div>
    </div>
  )
}
