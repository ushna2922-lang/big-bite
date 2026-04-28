"use client";
import { useState } from "react";
import { ShoppingCart, ChevronDown, Check } from "lucide-react";
import { useCart } from "@/context/CartContext"; // 1. Import your Context
import { motion } from "framer-motion"; // Add 'motion' here


export default function FoodCard({ item }: { item: any }) {

  const { addToCart } = useCart(); // 2. Get the functions you need from the Context
  const hasSizes = item.sizes && Array.isArray(item.sizes) && item.sizes.length > 0;
  const [selectedSize, setSelectedSize] = useState(item.sizes ? item.sizes[0] : null);
  const [isOpen, setIsOpen] = useState(false);
  const [isAdded, setIsAdded] = useState(false); // 1. Added this missing hook


  // DEBUG: Open your browser console (F12) and look for this log!
  console.log("Card Item:", item.name, "Has Sizes:", hasSizes);


  const handleAddToCart = () => {
    addToCart(item, selectedSize);
    // Trigger animation
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1000);

  };

  return (
    <div className="bg-[#111] border border-white/5 rounded-2xl p-4 transition-all flex flex-col h-full">

      {/* Image Container */}
      <div className="relative h-48 rounded-xl overflow-hidden mb-4 shrink-0">
        <img src={item.img} className="w-full h-full object-cover" alt={item.name} />
      </div>

      {/* Title & Description */}
      <div className="flex-grow">
        <h3 className="font-bold text-md mb-1">{item.name}</h3>
        <p className="text-neutral-500 text-[10px] mb-4">{item.desc}</p>
      </div>

      {/* SIZE SELECTOR BOX */}
      <div className="h-[60px] relative mb-4 z-10">
        {item.sizes && item.sizes.length > 0 ? (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen); }}
              className="w-full bg-[#1a1a1a] p-3 rounded-lg flex justify-between items-center text-xs border border-white/10 hover:border-yellow-500 transition-colors"
            >
              <span className="font-bold text-yellow-500">
                {selectedSize ? `${selectedSize.label} - Rs${selectedSize.price}` : "Select Size"}
              </span>
              <ChevronDown size={14} className={isOpen ? "rotate-180" : ""} />
            </button>

            {/* Dropdown Options */}
            {isOpen && (
              <div className="absolute top-full left-0 w-full bg-[#222] mt-2 p-3 rounded-xl border border-yellow-500 z-50 grid grid-cols-3 gap-2">
                {item.sizes.map((s: any) => (
                  <button
                    key={s.label}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSize(s);
                      setIsOpen(false);
                    }}
                    className={`p-2 rounded-lg text-center ${selectedSize?.label === s.label ? "bg-orange-600" : "bg-black hover:bg-neutral-800"}`}
                  >
                    <div className="font-bold text-sm">{s.label[0]}</div>
                    <div className="text-[10px] text-yellow-500">Rs{s.price}</div>
                  </button>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="w-full p-3 text-sm font-bold text-white bg-[#1a1a1a] rounded-lg border border-white/5">
            Rs {item.price}
          </div>
        )}
      </div>


      {/* Cart Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        // 2. Animate based on isAdded state
        animate={isAdded ? { backgroundColor: "#16a34a", color: "#ffffff" } : {}}
        onClick={handleAddToCart}
        className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors shrink-0"
      >
        <ShoppingCart size={18} /> {isAdded ? "Added!" : "Cart"}
      </motion.button>
    </div>
  );
}