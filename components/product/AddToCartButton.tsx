
"use client";

import { useCartStore } from "@/store/cart-store";
import { Product } from "@/types/product";

type AddToCartButtonProps = {
  product: Product;
  selectedColor: string;
  selectedSize: string;
  quantity: number;
};

const AddToCartButton = ({
  product,
  selectedColor,
  selectedSize,
  quantity,
}: AddToCartButtonProps) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      color: selectedColor,
      size: selectedSize,
      qty: quantity,
    });
  };

  return (
    <button
      onClick={handleAdd}
      className="bg-black w-full flex items-center justify-center text-white font-medium py-4 rounded-xl mt-6"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
