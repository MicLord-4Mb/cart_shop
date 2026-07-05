import type {Product} from "../../types";

type Props = {
  product: Product;
  quantity: number;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
}

const ProductCardFunction = ({
    product,
    quantity,
    onIncrement,
    onDecrement
  }:Props) => {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <p>Total cost: ${product.price * quantity}</p>
      <div className="product-actions">
        <button onClick={() => onDecrement(product.id)} disabled={quantity <= 0}>-</button>
        <span>{quantity}</span>
        <button onClick={() => onIncrement(product.id)}>+</button>
      </div>
    </div>
  )
}

export default ProductCardFunction
