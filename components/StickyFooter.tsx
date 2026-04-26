"use client";
import { motion } from "framer-motion";

export default function StickyFooter() {
    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="fixed bottom-0 left-0 w-full p-6 z-[999]"
        >
            <div className="max-w-[1400px] mx-auto bg-white/80 backdrop-blur-md border border-black/10 p-4 flex justify-between items-center rounded-lg shadow-xl">
                <div>
                    <p className="text-sm uppercase tracking-widest font-bold">Several Dining</p>
                    <p className="text-xs text-neutral-500">Open Daily: 5pm - 11pm</p>
                </div>
                <button
                    onClick={() => window.open('https://resy.com', '_blank')}
                    className="bg-black text-white px-10 py-4 uppercase text-xs tracking-[0.2em] hover:bg-white hover:text-black border border-black transition-all duration-300"
                >
                    Book a Table
                </button>
            </div>
        </motion.div>
    );
}