"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const categories = [
    { name: "BURGERS", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800" },
    { name: "FRIES", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800" },
    { name: "PASTA", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800" },
    { name: "PIZZA", img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&q=80&w=800" },
    { name: "SANDWICHES", img: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?auto=format&fit=crop&q=80&w=800" },
    { name: "SPRING ROLLS", img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&q=80&w=800" },
    { name: "SAUCE", img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800" },
    { name: "WINGS", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800" },
];

export default function CategoryGrid() {
    const router = useRouter();
    const [active, setActive] = useState<string | null>(null);

    return (
        <section className="py-20 px-8 bg-[#0b0e14]">
            <div className="text-center mb-16">
                <span className="text-yellow-500 bg-yellow-500/10 px-4 py-3 text-xs uppercase tracking-widest rounded-full">Explore Our Menu</span>
                <h2 className="text-5xl font-black uppercase mt-6 mb-4">Browse Categories</h2>
            </div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 p-3">
                {categories.map((cat, i) => (
                    <motion.div
                        key={i}
                        // onClick={() => setActive(cat.name)}
                        onClick={() => router.push(`/menu?cat=${cat.name.toLowerCase()}`)}
                        whileHover={{ y: -10 }}
                        // HERE IS THE FIX: The background logic is on the parent div
                        className={`rounded-2xl overflow-hidden bg-[#111] border border-white/5 group cursor-pointer transition-colors duration-300 `}
                    >
                        <div className="h-45 overflow-hidden">
                            <img
                                src={cat.img}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                alt={cat.name}
                            />
                        </div>
                        <div className="p-5 text-center transition-colors duration-300 bg-[#111] group-hover:bg-yellow-500">
                            <h3 className="font-bold text-sm tracking-widest uppercase text-white">
                                {cat.name}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}