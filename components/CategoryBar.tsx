"use client";
import { motion } from "framer-motion";
import { Flame, Drumstick, Sandwich, Package, Sparkles, Coffee } from "lucide-react";

const categories = [
  { name: "Chapli Kabab Burger", icon: Flame },
  { name: "Oven Baked Wings (6pc)", icon: Drumstick },
  { name: "Zinger Shawarma", icon: Sandwich },
  { name: "Special Platter", icon: Package },
  { name: "Deal 1 (Large)", icon: Sparkles },
  { name: "Premium Coffee", icon: Coffee },
];

export default function CategoryBar() {
  return (
    <div className="w-full bg-[#0a0a0a] py-8  overflow-hidden border-b-1 border-red-600/50">
      <div className="max-w-[1800px] mx-auto flex overflow-hidden">
        
        {/* The motion.div contains the loop */}
        <motion.div 
          className="flex gap-6 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }} // Slides exactly half the width
          transition={{ 
            duration: 20, // Adjust speed here (higher = slower)
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {/* We spread the array twice to create the seamless loop */}
          {[...categories, ...categories].map((cat, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 px-6 py-3 bg-[#150808] border border-white/5 rounded-full shrink-0"
            >
              <cat.icon size={16} className="text-yellow-500" />
              <span className="text-sm font-medium text-white">{cat.name}</span>
              <span className="w-2 h-2 rounded-full bg-red-500 ml-2" />
            </div>
          ))}
        </motion.div>
        
      </div>
    </div>
  );
}