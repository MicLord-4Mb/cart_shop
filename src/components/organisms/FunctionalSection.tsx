import {useCart} from "../../hooks/useChart.ts";
import type {Product} from "../../types";
import {SectionWrapper} from "../templates/SectionWrapper.tsx";
import ProductCardFunction from "./ProductCardFunction.tsx";
import {CartSummaryFunction} from "./CartSummaryFunction.tsx";

type Props = {
  products: Product[];
}

export const FunctionalSection = ({ products }: Props) => {
  const { cart, handleIncrement, handleDecrement, handleClear } = useCart();

  return (
    <SectionWrapper title="Functional Components">
      <div className="products-grid">
        {products.map(product => (
          <ProductCardFunction
            key={product.id}
            product={product}
            quantity={cart[product.id] || 0}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        ))}
      </div>
      <CartSummaryFunction cart={cart} products={products} onClear={handleClear} />
    </SectionWrapper>
  );
};