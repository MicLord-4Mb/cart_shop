import type {Product, CartState} from "../../types";
import {CartListItem} from "../molecules/CartListItem.tsx";
import {Button} from "../atoms/Button.tsx";
import "./Cart.css"
import {useMemo} from "react";

type Props = {
  cart: CartState;
  products: Product[];
  onClear: () => void;
}

export const CartSummaryFunction = ({ cart, products, onClear }:Props) => {
  const cartEntries = Object.entries(cart);
  const { totalItems, totalPrice } = useMemo(() => {
    let items = 0;
    let price = 0;
    cartEntries.forEach(([id, qty]) => {
      items += qty;
      const product = products.find(p=> p.id === Number(id));
      if (product) price += product.price * qty;
    });
    return { totalItems: items, totalPrice: price };
  }, [cart, products]);

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