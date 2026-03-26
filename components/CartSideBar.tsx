
import Portal from "./Portal";
import { FiX } from "react-icons/fi";

type CartSideBarProps = {
    isOpen: boolean;
    onClose: () => void;
};

const CartSideBar = ({ isOpen, onClose }: CartSideBarProps) => {
  if (!isOpen) return null;

  return (
    <Portal>
        {/* Overlay */}
            {isOpen && (
                <div
                className="fixed right-0 top-0 h-full w-full bg-black/10 z-60 transition-opacity"
                onClick={onClose}
                />
            )}
         {/* Sidebar */}
        <div className="fixed right-0 top-0 bg-white w-80 h-full p-4 z-70">
            <div className="flex flex-col ">
                {/* Header */}
                <div className="flex items-center justify-between pr-2 pl-6 pb-4 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
                    <button
                    onClick={onClose}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    aria-label="Close cart"
                    >
                    <FiX className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
            </div>
        </div>
    </Portal>
  )
}

export default CartSideBar