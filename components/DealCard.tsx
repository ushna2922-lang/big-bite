"use client";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function DealCard({ item }: { item: any }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-[#111] border border-white/5 rounded-[40px] p-6 text-center hover:border-yellow-500/50 transition-all">
      {/* Circular Image */}
      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-yellow-500 mb-4">
        <img src={item.img} className="w-full h-full object-cover" alt={item.name} />
      </div>

      {/* Deal Badge */}
      <div className="bg-yellow-500 text-black font-black py-1 px-4 rounded-full inline-block mb-2 text-sm">
        Rs {item.price}
      </div>

      <h3 className="font-bold text-lg text-white">{item.name}</h3>
      <p className="text-[10px] text-neutral-400 mt-2 h-8">{item.desc}</p>

      <button 
        onClick={() => addToCart(item, null)}
        className="mt-4 w-full bg-red-600 py-3 rounded-lg text-xs font-bold uppercase hover:bg-red-500 transition-all"
      >
        <ShoppingCart size={14} className="inline mr-2" /> Add to Cart
      </button>
    </div>
  );
}