"use client";
import { motion } from "framer-motion";
import { X, Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const { cart, updateQty, removeItem } = useCart();
    const subtotal = cart.reduce(
        (acc: number, item: any) => {
            return acc + (Number(item.price || 0) * (item.qty || 0));
        },
        0
    );


    return (
        <>
            {/* 1. Backdrop Animation */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            />

            {/* 2. Drawer Slide Animation */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 w-full md:w-[400px] h-full bg-[#111] z-[101] border-l border-yellow-500/20 p-6 flex flex-col"
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                        <ShoppingBag className="text-yellow-500" /> Your Cart ({cart.length})
                    </h2>
                    <button onClick={onClose} className="hover:text-yellow-500 transition"><X /></button>
                </div>

                {/* Items List */}
                <div className="flex-1 overflow-y-auto space-y-4">
                    {cart.length === 0 ? (
                        <p className="text-center text-neutral-500 mt-20">Your cart is empty.</p>
                    ) : (
                        cart.map((item: any, index: number) => (
                            <div key={`${item.name}-${item.size || "default"}-${index}`} className="bg-[#1a1a1a] p-3 rounded-xl flex gap-4">
                                <img src={item.img} className="w-16 h-16 rounded-lg object-cover" alt={item.name} />
                                <div className="flex-1">
                                    <h4 className="font-bold text-sm">{item.name}</h4>
                                    {/* Show size if it exists and isn't "Standard" */}
                                    {item.size && item.size !== "Standard" && (
                                        <p className="text-[10px] text-yellow-500 uppercase">{item.size}</p>
                                    )}

                                    <div className="flex items-center gap-3 mt-2">
                                        <button
                                            onClick={() => updateQty(item.name, item.size, -1)}
                                            className="bg-black p-1 rounded cursor-pointer"
                                        >
                                            <Minus size={14} />
                                        </button>
                                        <span>{item.qty}</span>
                                        <button
                                            onClick={() => updateQty(item.name, item.size, 1)}
                                            className="bg-black p-1 rounded cursor-pointer"
                                        >
                                            <Plus size={14} />
                                        </button>
                                        <button onClick={() => removeItem(item.name, item.size)} className="text-red-500 hover:text-red-600 transition">
                                            <Trash2 size={16} />
                                        </button>
                                    </div>
                                </div>
                                <div className="font-bold">Rs {parseFloat(item.price) * item.qty}</div>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                    <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                        <div className="flex justify-between text-xl font-bold mb-6">
                            <span>Total:</span> <span>Rs {subtotal.toFixed(2)}</span>
                        </div>
                        <Link href="/checkout" onClick={onClose} className="w-full block text-center bg-yellow-500 text-black font-bold py-4 rounded-xl hover:bg-yellow-400 transition">
                            Proceed to Checkout
                        </Link>
                        <Link
                            href="/cart"
                            onClick={onClose}
                            className="w-full block text-center bg-yellow-500 text-black font-bold py-4 rounded-xl hover:bg-yellow-400 transition"
                        >
                            View Cart
                        </Link>
                    </div>
                )}
            </motion.div>
        </>
    );
}