"use client";
import { ShoppingCart, Star } from "lucide-react";

export default function ProductCard({ item }: { item: any }) {
    return (
        <div className="bg-[#1a1a1a] rounded-3xl overflow-hidden p-4 border border-white/5 hover:border-yellow-500/30 transition-all group">


            {/* Image */}
            <div className="h-50 relative rounded-2xl overflow-hidden mb-4">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt={item.name} />
                {/* Badge */}
                <div className="absolute top-2 left-2 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-white z-50">
                    {item.badge}
                </div>
            </div>


            {/* Info */}
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <div className="flex items-center text-yellow-500 text-xs font-bold gap-1">
                    <Star size={14} fill="currentColor" /> {item.rating}
                </div>
            </div>

            <p className="text-neutral-500 text-xs mb-6 h-8">{item.desc}</p>

            {/* Footer Price & Cart */}
            <div className="flex justify-between items-center">
                <span className="text-xl font-serif italic text-white">Rs {item.price}</span>
                <button className="bg-[#222] p-3 rounded-full hover:bg-yellow-500 transition-colors">
                    <ShoppingCart size={18} />
                </button>
            </div>
        </div>
    );
}