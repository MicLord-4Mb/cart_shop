import {PureComponent} from 'react'
import type {Product} from "../../types";
import "./Card.css"


type Props = {
  product: Product;
  quantity: number;
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
}

export default class ProductCardClass extends PureComponent<Props> {

  render() {
    const { product, quantity, onIncrement, onDecrement } = this.props;

    return (
      <div className="product-card">
        <h3>{product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Total Cost: ${product.price * quantity}</p>
        <div className="product-actions">
          <button onClick={() => onDecrement(product.id)} disabled={quantity <= 0}>-</button>
          <span>{quantity}</span>
          <button onClick={() => onIncrement(product.id)}>+</button>
        </div>
      </div>
    )
  }
}
