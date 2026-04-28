"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Utensils, Phone, ShoppingCart, Menu, X } from "lucide-react";
import CartDrawer from "./CartDrawer";
import Link from "next/link";
// Inside your Navbar.tsx imports:
import { useCart } from "@/context/CartContext";


const links = [
  { name: "Home", icon: Home },
  { name: "Menu", icon: Utensils },
  { name: "Contact", icon: Phone },
];

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart(); // 2. Get the cart state
  const totalItems = cart.reduce(
    (acc: number, item: any) => acc + (item.qty || 0),
    0
  );

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 h-20 flex items-center bg-[#111]/80 backdrop-blur-md border-b-1 border-y-amber-500/50">
        <div className="max-w-[1600px] mx-auto px-8 w-full flex items-center justify-between">
          <div className="text-3xl font-black italic tracking-tighter">
            <Link href="/" className="text-3xl font-black italic tracking-tighter cursor-pointer">
              <span className="text-red-600">G</span>rilloo
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.name === "Home" ? "/" : `/${link.name.toLowerCase()}`}
                className="relative py-6 flex items-center"
                onMouseEnter={() => setHovered(link.name)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest transition-colors hover:text-yellow-500">
                  <link.icon size={20} /> {link.name}
                </div>
                {hovered === link.name && (
                  <motion.div layoutId="nav-underline" className="absolute bottom-4 left-0 w-full h-[2px] bg-yellow-500" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-black/50 p-3 rounded-full border border-white/10 hover:border-yellow-500 transition-colors"
            >
              <ShoppingCart size={18} className="text-yellow-500" />

              {/* 3. The Red Circle Badge */}
              {/* Inside Navbar.tsx, replace the badge div with this: */}
              {totalItems > 0 && (
                <motion.div
                  key={totalItems} // Key change triggers animation whenever totalItems changes
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1.2, opacity: 1 }} // It will "pop" to 1.2x size
                  className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full font-bold border-2 border-[#111]"
                >
                  {totalItems}
                </motion.div>
              )}
            </button>
            <button className="md:hidden bg-black/50 p-3 rounded-full border cursor-pointer border-white/10 hover:border-yellow-500 transition-colors" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={18} className="text-yellow-500" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#111] flex flex-col items-center justify-center p-8"
          >
            {/* Close Button */}
            <button
              className="absolute top-8 right-8 w-10 h-10 rounded-full border cursor-pointer border-yellow-500/50 flex items-center justify-center text-yellow-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={20} />
            </button>

            {/* Links Container */}
            <div className="flex flex-col gap-10 w-full max-w-[150px]">
              {[...links, { name: "Cart", icon: ShoppingCart }].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.name === "Home" ? "/" : link.name === "Cart" ? "#" : `/${link.name.toLowerCase()}`}
                    className="flex items-center gap-6 text-2xl font-bold transition-colors hover:text-yellow-500"
                    onClick={() => {
                      if (link.name !== "Cart") setMobileMenuOpen(false);
                      if (link.name === "Cart") setIsCartOpen(true);
                    }}
                  >
                    <div className="w-8 flex justify-center text-white hover:text-yellow-500">
                      <link.icon size={28} />
                    </div>
                    <span className={link.name === "Cart" ? "text-yellow-500" : "text-white"}>
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {isCartOpen && (
          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}