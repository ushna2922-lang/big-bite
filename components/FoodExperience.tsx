"use client";
import { ShoppingBag, ChefHat, Bike } from "lucide-react";

const steps = [
    { id: "1", icon: ShoppingBag, title: "Choose Your Food", desc: "Pick your favorite fast food items from our menu and place your order easily.", tag: "Quick ordering" },
    { id: "2", icon: ChefHat, title: "Fresh Preparation", desc: "Your food is prepared fresh after you order using quality ingredients.", tag: "Fresh every time" },
    { id: "3", icon: Bike, title: "Fast Delivery", desc: "We pack your order carefully and deliver it to your doorstep as quickly as possible.", tag: "Hot & fresh" },
];

export default function FoodExperience() {
    return (
        <section className="py-24 px-8 bg-[#0a0a0a]">
            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-bold mb-4">
                        The <span className="text-yellow-500">Food</span> Experience
                    </h2>
                    <p className="text-neutral-400">From your order to your doorstep — fresh, fast food delivered hot and fresh</p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {steps.map((step, i) => (
                        <div key={i} className="relative bg-[#111] p-8 rounded-3xl border border-white/5 pt-16">
                            {/* Number Badge */}
                            <div className="absolute -top-5 -left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center font-bold text-black text-xl shadow-lg">
                                {step.id}
                            </div>

                            <div className="flex justify-between items-start mb-6">
                                {/* The Icon inside the Gradient Box */}
                                <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border border-white/10 shadow-lg">
                                    {/* Subtle glow behind icon */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-xl" />
                                    <step.icon size={24} className="text-yellow-500 relative z-10" />
                                </div>

                                {/* Tag */}
                                <span className="text-[10px] border border-yellow-500/30 text-yellow-500 px-3 py-1 rounded-full uppercase tracking-widest">
                                    {step.tag}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-neutral-500 text-sm leading-relaxed mb-6">{step.desc}</p>
                            <div className="w-full h-[2px] bg-gradient-to-r from-red-600 to-yellow-500 rounded-full" />
                        </div>
                    ))}
                </div>

                {/* Footer Info */}
                <div className="mt-16 flex flex-wrap justify-center gap-5 border border-white/5 rounded-full py-4 px-6 bg-[#110a09] w-fit mx-auto text-sm text-neutral-400">
                    <span>🕒 Avg. delivery: 35min</span>
                    <span>🎁 Complimentary gift box</span>
                    <span>✨ 100% satisfaction</span>
                </div>
            </div>
        </section>
    );
}