"use client";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CartPage() {
    const { cart, updateQty, removeItem } = useCart();
    const subtotal = cart.reduce(
        (acc: number, item: any) =>
            acc + (parseFloat(item.price) * item.qty),
        0
    );

    return (
        <main className="min-h-screen bg-[#0b0e14] text-white pt-30 px-6 pb-10 md:px-20">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* Left Side: Cart Items */}
                <div className="lg:col-span-2">
                    <h1 className="text-3xl font-bold mb-8">Shopping Cart ({cart.length})</h1>
                    {cart.length === 0 ? (
                        <div className="p-10 border border-white/10 rounded-2xl text-center">
                            Your cart is empty. <Link href="/menu" className="text-yellow-500 underline">Browse Menu</Link>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {cart.map((item: any) => (
                                <div key={`${item.name}-${item.size}`} className="bg-[#111] p-4 rounded-2xl flex items-center gap-6 border border-white/5">
                                    <img src={item.img} className="w-20 h-20 rounded-lg object-cover" />
                                    <div className="flex-1">
                                        <h3 className="font-bold">{item.name}</h3>
                                        <p className="text-xs text-neutral-500">
                                            {item.size !== "Default" ? item.size : ""}
                                        </p>
                                        <div className="flex items-center gap-4 mt-2">
                                            <button onClick={() => updateQty(item.name, item.size, -1)} className="bg-black p-1 rounded"><Minus size={14} /></button>
                                            <span>{item.qty}</span>
                                            <button onClick={() => updateQty(item.name, item.size, 1)} className="bg-black p-1 rounded"><Plus size={14} /></button>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-bold">Rs {parseFloat(item.price) * item.qty}</div>
                                        <button onClick={() => removeItem(item.name, item.size)} className="text-red-500 text-xs mt-2">Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right Side: Order Summary (Sticky) */}
                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-[#111] p-8 rounded-3xl border border-white/10">
                        <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                        <div className="flex justify-between mb-4 text-sm">
                            <span className="text-neutral-400">Subtotal</span>
                            <span>Rs {subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between mb-6 text-sm">
                            <span className="text-neutral-400">Delivery Fee</span>
                            <span className="text-green-500">Free</span>
                        </div>
                        <div className="border-t border-white/10 pt-4 flex justify-between text-lg font-bold mb-8">
                            <span>Total</span>
                            <span className="text-yellow-500">Rs {subtotal.toFixed(2)}</span>
                        </div>

                        <Link href="/checkout" className="w-full block text-center bg-yellow-500 text-black font-bold py-4 rounded-xl hover:bg-yellow-400 transition">
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}