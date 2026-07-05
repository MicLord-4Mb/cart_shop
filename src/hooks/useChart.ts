import {useState} from "react";
import type {CartState} from "../types";

export const useCart = () => {
  const [cart, setCart] = useState<CartState>({});

  const handleIncrement = (id: number) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) +1 }));
  }

  const handleDecrement = (id: number) => {
    setCart((prev) => {
      const current = prev[id] ?? 0;
      if (current <= 0) return prev;
      return { ...prev, [id]: current - 1 };
    });
  }

  const handleClear = () => setCart({});

  return { cart, handleIncrement, handleDecrement, handleClear };
}