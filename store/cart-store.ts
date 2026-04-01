import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartItem } from "@/types/cart";

export type CartState = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, color: string, size: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (item) => {
        const cart = get().cart;

        const existing = cart.find(
          (cartItem) =>
            cartItem.id === item.id &&
            cartItem.color === item.color &&
            cartItem.size === item.size
        );

        if (existing) {
          const updatedCart = cart.map((cartItem) =>
            cartItem === existing
              ? { ...cartItem, qty: cartItem.qty + item.qty }
              : cartItem
          );

          return set({ cart: updatedCart });
        }

        return set({ cart: [...cart, item] });
      },

      removeFromCart: (id, color, size) => {
        const updated = get().cart.filter(
          (item) =>
            !(item.id === id && item.color === color && item.size === size)
        );

        set({ cart: updated });
      },

      clearCart: () => set({ cart: [] }),
    }),

    {
      name: "cart-storage", // key name inside localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);