export type Product = {
  id: number;
  title: string;
  price: number;
};

export type CartState = Record<number, number>;  // { ProductId: quantity }
