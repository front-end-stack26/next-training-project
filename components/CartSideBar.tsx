import { useCartStore } from "@/store/cart-store";
import Portal from "./Portal";
import { FiX } from "react-icons/fi";

type CartSideBarProps = {
  isOpen: boolean;
  onClose: () => void;
};

const CartSideBar = ({ isOpen, onClose }: CartSideBarProps) => {
  const cartItems = useCartStore((state) => state.cart);

  if (!isOpen) return null;

  return (
    <Portal>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className="
          fixed right-0 top-0 h-full w-80 bg-white z-50 shadow-xl 
          transform transition-transform duration-300 
          translate-x-0
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Shopping Cart</h2>

          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FiX className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex flex-col gap-4 overflow-y-auto p-6 h-[calc(100%-180px)]">
          {cartItems.length === 0 && (
            <p className="text-gray-500 text-sm text-center mt-10">
              Your cart is empty.
            </p>
          )}

          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 pb-4 border-b border-gray-100"
            >
              {/* Image */}
              <img src={item.image} alt={item.name} className="w-[100] h-[100] rounded-lg"/>

              {/* Product Info */}
              <div className="flex flex-col flex-1 text-sm">
                <span className="font-medium text-gray-900">{item.name}</span>

                <span className="text-gray-500 capitalize">
                  Color: {item.color}
                </span>
                <span className="text-gray-500">Size: {item.size}</span>

                <span className="font-semibold mt-1">
                  {item.qty} × ${item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full border-t border-gray-200 p-6 bg-white">
          <div className="flex items-center justify-between mb-4">
            <span className="text-gray-600 font-medium">Subtotal:</span>
            <span className="text-gray-900 font-bold">
              $
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </span>
          </div>

          <button
            className="
              w-full py-3 bg-black text-white rounded-lg font-medium 
              hover:bg-gray-900 transition-colors
            "
          >
            Checkout
          </button>
        </div>
      </div>
    </Portal>
  );
};

export default CartSideBar;