const formatter = new Intl.NumberFormat('en-IN')

export default function PriceTag({ price, className = '' }) {
  return <span className={className}>₹{formatter.format(price)}</span>
}
