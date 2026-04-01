
'use client'

import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { QuantityInput } from "./QuantityInput";
import AddToCartButton from "./AddToCartButton";
import { Product } from "@/types/product";


const ProductActions = ({product}: {product: Product[]}) => {
  const [selectedColor, setSelectedColor] = useState(product?.[0]?.colors?.[0] ?? null);
  const [selectedSize, setSelectedSize] = useState(product?.[0]?.sizes?.[0] ?? null); 
  const [qty, setQty] = useState(1);


  const handleSelectedColor = (color) => {
    setSelectedColor(color);
  }

  const handleSelectedSize =(size) => {
    setSelectedSize(size)
  }
    
  return (
    <div className="mt-6">
        {selectedColor && <p  className="font-bold text-md py-3">Color: <span className="text-md font-normal ml-2 capitalize">{selectedColor}</span></p>}
        {selectedColor && <div className="flex gap-2 mt-2 mb-4">
            {product[0].colors.map((color, index) => (
                <button key={index} onClick={() => handleSelectedColor(color)} className={`flex items-center justify-center w-10 h-10 border rounded-full cursor-pointer ${colorMap[color]}`}>
                    {selectedColor === color && <FaCheck />}
                </button>
            ))}
        </div>}
        {selectedSize && <p className="font-bold text-md py-3">Color: <span className="text-md font-normal ml-2">{selectedSize}</span></p>}
        {selectedSize && <div className="flex gap-2 mt-2 mb-4">
            {product[0].sizes.map((size, index) => (
                <button key={index} onClick={() => handleSelectedSize(size)} className={`px-4 py-2 border rounded-md text-sm cursor-pointer ${size === selectedSize ? "bg-black text-white" : ""}`}>{size}</button>
            ))}
        </div>}
        <p className="font-bold text-md mb-2 py-3">Quantity: <span className="ml-1 mr-2"> ({qty}) </span> | <span className="text-md font-normal ml-2 text-gray-400">{product[0].stock} in stock</span></p>
        <QuantityInput value={qty} onChange={setQty} max={product[0].stock} />
         {/* Add to Cart Section */}
        <div className="space-y-4 mb-8">
            <AddToCartButton
                product={product[0]}
                selectedColor={selectedColor}
                selectedSize={selectedSize}
                quantity={qty}
            />
      </div>
    </div>
  )
}

const colorMap = {
  black: "text-white bg-black",
  gray: "text-white bg-gray-500",
  blue: "text-white bg-blue-900",
  red: "text-white bg-red-500",
};

export default ProductActions