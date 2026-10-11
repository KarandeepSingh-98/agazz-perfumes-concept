import goodGirlCrop from '../assets/products/derived/good-girl-crop.jpg'
import goodGirlArtwork from '../assets/products/good-girl.jpeg'
import oudEKuwaitCard from '../assets/products/derived/oud-e-kuwait-card.jpg'
import oudEKuwaitArtwork from '../assets/products/oud-e-kuwait.jpeg'
import sandalwoodRoomFreshenerCrop from '../assets/products/derived/sandalwood-room-freshener-crop.jpg'
import velvetSunriseCrop from '../assets/products/derived/velvet-sunrise-crop.jpg'
import velvetSunriseArtwork from '../assets/products/velvet-sunrise.jpeg'
import whiteOudCrop from '../assets/products/derived/white-oud-crop.jpg'
import whiteOudArtwork from '../assets/products/white-oud.jpeg'
import blackAxeCarPerfume from '../assets/products/black-axe-car-perfume.jpeg'
import whiteOudCarPerfume from '../assets/products/white-oud-car-perfume.jpeg'

export const CATEGORIES = [
  { id: 'perfume', label: 'Perfumes' },
  { id: 'attar', label: 'Attars & Oils' },
  { id: 'home', label: 'Home Fragrance' },
  { id: 'car', label: 'Car Perfumes' },
]

// `image` is a cropped, text-free product shot used in cards, grids, and the
// detail page hero. `artwork` (only present when the supplied asset embedded
// a fragrance-notes infographic) is the original full artwork, shown as a
// secondary visual on the product detail page. `imageFit` follows the brief:
// "contain" for clean/prop-background bottle shots, "cover" for lifestyle photos.
export const products = [
  {
    id: 'good-girl',
    name: 'Good Girl Perfume',
    category: 'perfume',
    size: '20 ml',
    price: 300,
    image: goodGirlCrop,
    artwork: goodGirlArtwork,
    imageFit: 'contain',
    tagline: 'A gourmand floral with a daring edge.',
    description:
      'An opulent gourmand-floral blend that opens with bittersweet almond and coffee before settling into a lush white-flower heart, finished with warm tonka, cacao, and sandalwood.',
    notes: {
      top: ['Almond', 'Coffee', 'Bergamot', 'Lemon'],
      heart: ['Tuberose', 'Jasmine Sambac', 'Orange Blossom', 'Bulgarian Rose', 'Orris'],
      base: [
        'Tonka Bean',
        'Cacao',
        'Vanilla',
        'Praline',
        'Sandalwood',
        'Musk',
        'Amber',
        'Cashmere Wood',
        'Patchouli',
        'Cinnamon',
      ],
    },
    featured: true,
  },
  {
    id: 'oud-e-kuwait',
    name: 'Oud E-Kuwait',
    category: 'attar',
    size: '12 ml',
    price: 600,
    image: oudEKuwaitCard,
    artwork: oudEKuwaitArtwork,
    imageFit: 'contain',
    tagline: 'A regal concentrated oud for the connoisseur.',
    description:
      'A concentrated perfume oil built around deep agarwood, warmed by creamy sandalwood and amber, and sharpened with pink pepper and cypriol for a rich, long-lasting presence.',
    notes: {
      top: ['Woody Notes', 'Pink Pepper', 'Cypriol'],
      heart: ['Amber', 'Patchouli', 'Creamy Sandalwood'],
      base: ['Musk', 'Deep Agarwood (Oud)', 'Subtle Animalic Accord'],
    },
    featured: true,
  },
  {
    id: 'sandalwood-room-freshener',
    name: 'Sandalwood Room Freshener',
    category: 'home',
    size: '200 ml',
    price: 150,
    image: sandalwoodRoomFreshenerCrop,
    imageFit: 'cover',
    tagline: 'Fragrance that feels like home.',
    description:
      'A long-lasting sandalwood room spray designed to refresh home, office, and car interiors with a pure, soothing aroma.',
    notes: null,
    featured: false,
  },
  {
    id: 'velvet-sunrise',
    name: 'Velvet Sunrise Perfume',
    category: 'perfume',
    size: '20 ml',
    price: 300,
    image: velvetSunriseCrop,
    artwork: velvetSunriseArtwork,
    imageFit: 'contain',
    tagline: 'Citrus brightness wrapped in velvet woods.',
    description:
      'An energising citrus-floral that opens bright with lemon and mandarin, softens into lavender and rose at the heart, and settles into mossy cedarwood and patchouli.',
    notes: {
      top: ['Lemon', 'Mandarin Orange', 'Cardamom', 'Pink Pepper'],
      heart: ['Lavender', 'Green Apple', 'Orange Blossom', 'Rose'],
      base: ['Musk', 'Moss', 'Cedarwood', 'Patchouli'],
    },
    featured: true,
  },
  {
    id: 'white-oud',
    name: 'White Oud',
    category: 'attar',
    size: '12 ml',
    price: 300,
    image: whiteOudCrop,
    artwork: whiteOudArtwork,
    imageFit: 'contain',
    tagline: 'A lighter, brighter take on classic oud.',
    description:
      'A concentrated perfume oil opening with bright bergamot and citrus, blooming into soft jasmine, rose, and freesia, and resting on a lighter white oud base with musk and amber.',
    notes: {
      top: ['Bergamot', 'Lemon', 'Orange', 'Mandarin', 'Artemisia', 'Green Herbal Accords'],
      heart: ['Jasmine', 'Rose', 'Freesia', 'Creamy Sandalwood', 'Patchouli', 'Black Currant'],
      base: ['White Oud (Agarwood Resin)', 'White Musk', 'Amber', 'Subtle Tobacco & Frankincense'],
    },
    featured: false,
  },
  {
    id: 'black-axe-car-perfume',
    name: 'Black Axe Hanging Car Perfume',
    category: 'car',
    size: null,
    price: 150,
    image: blackAxeCarPerfume,
    imageFit: 'cover',
    tagline: 'A bold aromatherapy accent for your car.',
    description:
      'A wooden hanging car diffuser that releases a bold, long-lasting fragrance, designed to clip onto the rearview mirror for continuous aromatherapy on the move.',
    notes: null,
    featured: false,
  },
  {
    id: 'white-oud-car-perfume',
    name: 'White Oud Hanging Car Perfume',
    category: 'car',
    size: null,
    price: 150,
    image: whiteOudCarPerfume,
    imageFit: 'cover',
    tagline: 'Soft oud warmth for every drive.',
    description:
      'A wooden hanging car diffuser carrying a soft white oud fragrance, designed to clip onto the rearview mirror for continuous aromatherapy on the move.',
    notes: null,
    featured: false,
  },
]

export const getProductById = (id) => products.find((product) => product.id === id)

export const getRelatedProducts = (product, count = 3) =>
  products
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, count)
    .concat(
      products
        .filter((item) => item.id !== product.id && item.category !== product.category)
        .slice(0, Math.max(0, count - 1))
    )
    .slice(0, count)
