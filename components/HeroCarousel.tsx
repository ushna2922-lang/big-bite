"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

// ... (keep your slides array exactly as is)
const slides = [
  {
    id: 1,
    tag: "🔥 MOST ORDERED",
    title: "Taste That Stops.",
    btn: "Order Now",
    transbtn: "View Menu→",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2000"
  },
  {
    id: 2,
    tag: "🍔 SIGNATURE",
    title: "Crafted For Taste.",
    btn: "Order Now",
    transbtn: "Customize→",
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2000"
  },
  {
    id: 3,
    tag: "🍟 LOADED & LEGENDARY",
    title: "Fries That Steal.",
    btn: "Get Fries",
    transbtn: "Add to Cart→",
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=2000"
  },
  {
    id: 4,
    tag: "🥤 REFRESHING",
    title: "Sips That Cool.",
    btn: "View Drinks",
    transbtn: "View Menu→",
    img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=2000"
  },
  {
    id: 5,
    tag: "🥗 FRESH",
    title: "Greens That Fresh.",
    btn: "See More",
    transbtn: "Add to Cart→",
    img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2000"
  },
  {
    id: 6,
    tag: "🍰 DESSERT",
    title: "Sweet Ends To Day.",
    btn: "View Menu",
    transbtn: "View More→",
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2000"
  },
];


export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);



  const currentSlide = slides[index];

  return (
    <section className="relative w-full h-[80vh] md:h-screen bg-[#111] overflow-hidden border-b-1 border-red-600/50">

      {/* Background - Full cover */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src={currentSlide.img} // Now it uses the dynamic image from the slide
            className="w-full h-full object-cover"
            alt="hero"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Layer */}
      <div className="absolute inset-0 z-20 flex items-center px-6 md:px-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full max-w-2xl text-left pt-10 md:pt-0"
          >
            <span className="text-yellow-500 border-2 border-yellow-500 px-4 py-1.5 text-[10px] uppercase rounded-full tracking-[0.2em]  inline-block  mb-6">
              {currentSlide.tag}
            </span>

            {/* Title - EXACT SPLIT COLOR */}
            <h1 className="text-[clamp(2.5rem,6vw,6rem)] font-black uppercase leading-[0.85] text-white">
              {currentSlide.title.split(" ").slice(0, 2).join(" ")} <br />
              <span className="text-yellow-500">{currentSlide.title.split(" ").slice(2).join(" ")}</span>
            </h1>

            {/* Red Accent Line */}
            <div className="w-20 h-1.5 bg-red-600 rounded-3xl mt-6 mb-10" />

            {/* Buttons: Force them to stay on one line or stack properly */}
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="/menu">
                <button className="bg-red-600 px-5 py-3 md:px-8 md:py-4 uppercase text-[10px] md:text-[11px] font-bold tracking-[0.2em] hover:bg-red-500 cursor-pointer transition-all border border-red-600 rounded-[13px] whitespace-nowrap ">
                  {currentSlide.btn}
                </button>
              </Link>
              <Link href="/menu">
                <button className="bg-transparent px-5 py-3 md:px-8 md:py-4 uppercase text-[10px] md:text-[11px] font-bold tracking-[0.2em] transition-all cursor-pointer border hover:border-yellow-500 border-yellow-500 text-yellow-500 rounded-[13px] whitespace-nowrap">
                  {currentSlide.transbtn}
                </button>

              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pips - Simplified for mobile */}
      <div className="absolute bottom-6 left-0 w-full flex justify-center gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 transition-all duration-300 rounded-full ${index === i ? "w-6 bg-yellow-500" : "w-6 bg-yellow-500/30"}`}
          />
        ))}
      </div>
    </section>
  );
}


