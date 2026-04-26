"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import FoodCard from "@/components/FoodCard";
import { menuData } from "@/data/menu";


function MenuContent() {
    const searchParams = useSearchParams();
    const catFromUrl = searchParams.get("cat");

    // Set initial state based on URL, default to "ALL MENU"
    const [active, setActive] = useState(catFromUrl ? catFromUrl.toUpperCase() : "ALL MENU");

    useEffect(() => {
        if (catFromUrl) {
            setActive(catFromUrl.toUpperCase());
        }
    }, [catFromUrl]);

    return (
        <main className="bg-[#0b0e14] min-h-screen text-white pt-20">

            {/* RESTORED: Full-Width Cinematic Hero */}
            <section className="relative w-full h-[50vh] flex items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000"
                        className="w-full h-full object-cover"
                        alt="Menu"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#0b0e14]" />
                </div>
                <div className="relative z-10 px-6">
                    <h1 className="text-5xl md:text-7xl font-black uppercase text-yellow-500 mt-15">Our Menu</h1>
                    <p className="text-neutral-300 mt-4 text-lg">Discover a culinary journey of premium flavors, carefully curated for your delight</p>
                </div>
            </section>

            {/* Category Bar */}
            <div className="sticky top-20 z-40 bg-[#060502] backdrop-blur-md border-b-1 border-t-1 border-yellow-500/50 py-4">
                <div className="max-w-[1400px] mx-auto px-6 flex gap-4 overflow-x-auto no-scrollbar">
                    <button
                        onClick={() => setActive("ALL MENU")}
                        className={`px-8 py-3 rounded-full border transition-all whitespace-nowrap ${active === "ALL MENU" ? "border-yellow-500 bg-yellow-500/10 text-yellow-500" : "border-white/10 text-neutral-500"}`}
                    >
                        All Menu
                    </button>
                    {menuData.map((section) => (
                        <button
                            key={section.category}
                            onClick={() => setActive(section.category.toUpperCase())}
                            className={`px-6 py-2 rounded-full border transition-all whitespace-nowrap ${active === section.category.toUpperCase() ? "border-yellow-500 bg-yellow-500/10 text-yellow-500" : "border-white/10 text-neutral-500"}`}
                        >
                            {section.category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-[1400px] mx-auto p-8 py-16">
                <AnimatePresence mode="popLayout">
                    {menuData
                        .filter(section => active === "ALL MENU" || section.category.toUpperCase() === active)
                        .map((section) => (
                            <div key={section.category} className="mb-16">
                                <h2 className="text-2xl font-bold uppercase text-yellow-500 border-l-4 border-yellow-500 pl-4 mb-10">
                                    {section.category}
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {section.items.map((item: any, i: number) => (
                                        <FoodCard key={i} item={item} />
                                    ))}
                                </div>
                            </div>
                        ))}
                </AnimatePresence>
            </div>
        </main>
    );
}

// Next.js requirement: use Suspense for useSearchParams
export default function MenuPage() {
    return (
        <Suspense fallback={<div className="text-center mt-20">Loading Menu...</div>}>
            <MenuContent />
        </Suspense>
    );
}
