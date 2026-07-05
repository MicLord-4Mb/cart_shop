import { Component } from 'react';
import type {CartState, Product} from "../../types";
import {SectionWrapper} from "../templates/SectionWrapper.tsx";
import ProductCardClass from "./ProductCardClass.tsx";
import CartSummaryClass from "./CartSummaryClass.tsx";
import "./Sections.css"

type Props = {
  products: Product[];
}

type State = {
  cart: CartState;
}

export class ClassSection extends Component<Props, State> {
  state: State = { cart: {} };

  handleIncrement = (id: number) => {
    this.setState(prev => ({
      cart: { ...prev.cart, [id]: (prev.cart[id] || 0) + 1 }
    }));
  };

  handleDecrement = (id: number) => {
    this.setState(prev => {
      const current = prev.cart[id] || 0;
      if (current <= 1) {
        const newCart = { ...prev.cart };
        delete newCart[id];
        return { cart: newCart };
      }
      return { cart: { ...prev.cart, [id]: current - 1 } };
    });
  };

  handleClear = () => this.setState({ cart: {} });

  render() {
    return (
      <SectionWrapper title="Class Components">
        <div className="products-grid">
          {this.props.products.map(product => (
            <ProductCardClass
              key={product.id}
              product={product}
              quantity={this.state.cart[product.id] || 0}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            />
          ))}
        </div>
        <CartSummaryClass cart={this.state.cart} products={this.props.products} onClear={this.handleClear} />
      </SectionWrapper>
    );
  }
}