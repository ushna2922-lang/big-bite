"use client";
import { motion } from "framer-motion";

export default function TextMarquee() {
  return (
    <div className="w-full py-0 overflow-hidden bg-[#0f1012] border-t border-white/5">
      <motion.div 
        className="flex whitespace-nowrap text-[10vw] font-black uppercase tracking-tighter opacity-10"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 30, // Slow, industrial speed
          ease: "linear", 
          repeat: Infinity 
        }}
      >
        <div className="flex gap-10">
          {/* Repeat the text to ensure it loops perfectly */}
          <span >THE TASTE • LIVES HERE</span>
          <span>THE TASTE • LIVES HERE</span>
          <span>THE TASTE • LIVES HERE</span>
        </div>
      </motion.div>
    </div>
  );
}