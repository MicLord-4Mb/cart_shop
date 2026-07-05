import {useMemo, useState} from "react";
import type {CartState} from "../types";
import {createProxyLogger} from "../utils/logger.ts";

export const useCart = (sectionName: string = 'Cart') => {
  const [cart, setCart] = useState<CartState>({});

  const actions = useMemo(() => {
    const rawAction = {
      increment(id: number){
        setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) +1 }));
        return `Added item ID: ${id}`;
      },
      decrement(id: number) {
        setCart((prev) => {
          const current = prev[id] ?? 0;
          if (current <= 1) {
            const newCart = {...prev};
            delete newCart[id];
            return newCart;
          }
          return {...prev, [id]: current - 1};
        });
        return `Decremented item ID: ${id}`;
      },
      clear() {
        setCart({});
        return 'Cart cleared';
      },
    };

    if (import.meta.env.DEV) {
      return createProxyLogger(rawAction, sectionName);
    }

    return rawAction;
  }, [sectionName]);


  return {
    cart,
    handleIncrement: actions.increment,
    handleDecrement: actions.decrement,
    handleClear: actions.clear,
  };
}