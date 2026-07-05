type Props = {
  title: string;
  quantity: number;
}

export const CartListItem = ({ title, quantity }: Props) => (
  <li className="cart-list-item">
    <span className="cart-list-item__name">{title}</span>
    <span className="cart-list-item__separator"> - </span>
    <span className="cart-list-item__qty">{quantity}</span>
  </li>
);