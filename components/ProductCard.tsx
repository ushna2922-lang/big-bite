"use client";
import { ShoppingCart, Star, ChevronDown, Check } from "lucide-react";
import { useCart } from "@/context/CartContext"; // 1. Import your Context
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductCard({ item }: { item: any }) {
    const { addToCart } = useCart();
    const [selectedSize, setSelectedSize] = useState(item.sizes ? item.sizes[0] : null);
    const [isOpen, setIsOpen] = useState(false);
    const [isAdded, setIsAdded] = useState(false); // 1. Added State for animation


    const handleAddToCart = () => {
        addToCart(item, selectedSize);
        setIsAdded(true); // 2. Trigger Green state
        setTimeout(() => setIsAdded(false), 1000); // 3. Reset after 1 second
    };

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


            {/* SIZE SELECTOR BOX */}
            <div className="flex items-center justify-between h-50px relative mb-12 z-10">
                <div className="h-[40px] relative z-10">
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
                                            {/* <div className="text-[10px] text-yellow-500">Rs{s.price}</div> */}
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



                {/* Footer Price & Cart */}
                <div className="flex justify-between items-center">
                    <motion.button
                    onClick={handleAddToCart}
                    // 4. Change color to green when isAdded is true
                    className={`p-3 rounded-full border border-white/10 transition-colors duration-300 ${
                        isAdded ? "bg-green-600 text-white border-green-500" : "bg-[#222] text-yellow-500 hover:bg-yellow-500 hover:text-black"
                    }`}
                >
                    {isAdded ? <Check size={18} /> : <ShoppingCart size={18} />}
                </motion.button>
                </div>
            </div>
        </div>
    );
}