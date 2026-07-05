import type {Product, CartState} from "../../types";
import {CartListItem} from "../molecules/CartListItem.tsx";
import {Button} from "../atoms/Button.tsx";

type Props = {
  cart: CartState;
  products: Product[];
  onClear: () => void;
}

export const CartSummaryFunction = ({ cart, products, onClear }:Props) => {
  const cartEntries = Object.entries(cart);
  const totalItems = cartEntries.reduce((sum, [, qty]) => sum + qty, 0);

  const totalPrice = cartEntries.reduce((sum, [id, qty]) => {
    const product = products.find(p => p.id === Number(id));
    return sum + (product ? product.price * qty : 0);
  }, 0);

  if (totalItems === 0) return <div className="cart-summary empty">Cart is empty</div>;

  return (
    <div className="cart-summary">
      <h3>Cart Summary</h3>

      <ul className="cart-summary__list">
        {cartEntries.map(([id, qty]) => {
          const product = products.find(p => p.id === Number(id));
          if (!product) return null;
          return <CartListItem key={id} title={product.title} quantity={qty} />;
        })}
      </ul>

      <div className="cart-summary__totals">
        <p>Total Items: <strong>{totalItems}</strong></p>
        <p>Total Price: <strong>${totalPrice}</strong></p>
      </div>

      <Button variant="danger" onClick={onClear}>Clear Cart</Button>
    </div>
  );
};