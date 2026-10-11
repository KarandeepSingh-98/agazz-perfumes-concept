import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SectionHeading from '../components/common/SectionHeading'
import ProductGrid from '../components/product/ProductGrid'
import { CATEGORIES, getProductById, products } from '../data/products'
import heroBottle from '../assets/products/derived/oud-e-kuwait-hero.jpg'
import storyImage from '../assets/products/derived/white-oud-crop.jpg'
import styles from './Home.module.css'

const featured = products.filter((product) => product.featured)

const CATEGORY_IMAGE_BY_ID = {
  perfume: getProductById('good-girl').image,
  attar: getProductById('oud-e-kuwait').image,
  home: getProductById('sandalwood-room-freshener').image,
  car: getProductById('black-axe-car-perfume').image,
}

export default function Home() {
  return (
    <div>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              The AGazz House
            </motion.span>
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Fragrance, worn as memory.
            </motion.h1>
            <motion.p
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Niche perfumes, concentrated attars, and ambient scents for those who choose
              fragrance as a form of personal expression.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Link to="/shop" className="btn btn-solid">
                Explore the Catalogue
              </Link>
            </motion.div>
          </div>

          <motion.div
            className={styles.heroVisual}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <div className={styles.heroGlow} aria-hidden="true" />
            <div className={styles.heroPanel}>
              <img src={heroBottle} alt="AGazz Oud E-Kuwait concentrated perfume oil" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className={`container ${styles.section}`}>
        <SectionHeading
          eyebrow="Signature Selection"
          title="Featured Fragrances"
          subtitle="A short list of the bottles that define the house this season."
          theme="dark"
        />
        <ProductGrid products={featured} variant="featured" />
      </section>

      <section className={styles.categorySection}>
        <div className="container">
          <SectionHeading eyebrow="Shop by Category" title="Find Your Expression" theme="light" />
          <div className={styles.categoryGrid}>
            {CATEGORIES.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              >
                <Link to={`/shop?category=${category.id}`} className={styles.categoryCard}>
                  <div className={styles.categoryImageWrap}>
                    <img src={CATEGORY_IMAGE_BY_ID[category.id]} alt="" />
                  </div>
                  <div className={styles.categoryLabelRow}>
                    <span>{category.label}</span>
                    <span className={styles.categoryArrow} aria-hidden="true">
                      &rarr;
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className={`container ${styles.story}`}>
        <motion.div
          className={styles.storyImageWrap}
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <img src={storyImage} alt="AGazz White Oud concentrated perfume oil" />
        </motion.div>
        <motion.div
          className={styles.storyText}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <SectionHeading eyebrow="Our Philosophy" title="Fragrance as Expression" theme="dark" />
          <p>
            AGazz Perfumes brings together perfumes, concentrated attars, and ambient fragrance in
            one catalogue — built around contrast: citrus against amber, floral against wood,
            sweetness against smoke.
          </p>
          <p>
            Each bottle is presented with its fragrance notes exactly as supplied, from bright top
            notes through to the base that lingers, so you can choose a scent on its own terms.
          </p>
          <Link to="/about" className="btn">
            Our House
          </Link>
        </motion.div>
      </section>
    </div>
  )
}
