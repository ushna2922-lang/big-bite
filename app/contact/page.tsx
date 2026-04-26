"use client";
import { MapPin, Phone, Mail, Clock, Utensils, MessageSquare, Star } from "lucide-react";
import Navbar from "@/components/Navbar";


// Helper component for clean cards
function ContactCard({ title, icon, details }: any) {
    return (
        <div className="border border-white/5 bg-[#111] p-6 rounded-2xl">
            <div className="flex items-center gap-3 text-yellow-500 mb-4 uppercase font-bold text-sm tracking-widest">
                {icon} {title}
            </div>
            {details.map((d: string) => <p key={d} className="text-sm text-neutral-300">{d}</p>)}
        </div>
    );
}

export default function ContactPage() {
    return (
        <main className="bg-[#0b0e14] min-h-screen text-white pt-20">

            {/* Header */}
            {/* Header Section - 100% Match */}
            <section className="text-center py-20 px-6 bg-gradient-to-b from-black/60 to-[#0b0e14]">
                <div className="flex justify-center items-center gap-3 mb-4 ">
                    <Utensils size={36} className="text-yellow-500" />
                    <h1 className="text-5xl font-bold text-white">
                        Contact <span className="text-yellow-500">Us</span>
                    </h1>
                </div>

                <p className="text-neutral-400 max-w-lg mx-auto leading-relaxed">
                    Get in touch with us for reservations, orders, or any inquiries.
                    We're here to serve you the best dining experience!
                </p>
            </section>

            {/* Main Grid: Left Details | Right Form */}
            <section className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

                {/* LEFT: Contact Cards */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-3 text-yellow-500 mb-8">
                        <MessageSquare size={24} /> Get In Touch
                    </h2>

                    {/* Call Us Box */}
                    <div className="border border-white/10 rounded-2xl p-6 bg-[#111]">
                        <div className="flex items-center gap-2 mb-4 text-white font-bold"><Phone size={18} className="text-yellow-500" /> Call Us</div>
                        <div className="space-y-3">
                            <div className="bg-[#1a1a1a] p-4 rounded-xl border border-white/10 text-sm">03290039757</div>
                            <div className="bg-[#1a1a1a] p-4 rounded-xl border border-white/10 text-sm">03127172184</div>
                        </div>
                    </div>

                    {/* Visit Us Box */}
                    <div className="border border-white/10 rounded-2xl p-6 bg-[#111]">
                        <div className="flex items-center gap-2 mb-4 text-white font-bold"><MapPin size={18} className="text-yellow-500" /> Visit Us</div>
                        <div className="bg-[#1a1a1a] p-4 rounded-xl border border-white/10 text-sm">
                            <p>P-562/A Opposite Govt. Nusrat Fateh Ali Khan Hospital, Peoples Colony No 2, Faisalabad</p>
                            <button className="text-yellow-500 text-xs mt-2 underline">Click to open in Google Maps</button>
                        </div>
                    </div>

                    {/* Business Hours Box */}
                    <div className="border border-white/10 rounded-2xl p-6 bg-[#111]">
                        <div className="flex items-center gap-2 mb-4 text-white font-bold"><Clock size={18} className="text-yellow-500" /> Business Hours</div>
                        <div className="flex justify-between text-sm text-neutral-300">
                            <span>Monday - Sunday</span>
                            <span className="font-bold text-white">5:00 PM - 01:00 AM</span>
                        </div>
                        <div className="mt-4 text-yellow-500 text-xs flex items-center gap-2">
                            <Star size={12} /> Open 7 days a week for your convenience
                        </div>
                    </div>
                </div>

                {/* RIGHT: Send Message Form */}
                <div className="bg-[#111] p-8 rounded-3xl border border-white/10">
                    <h2 className="text-3xl font-bold text-center mb-2">Send Message</h2>
                    <p className="text-center text-neutral-400 text-sm mb-8">Have a question or feedback? Drop us a message and we'll get back to you soon!</p>

                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs text-neutral-400 mb-1 block">Name</label>
                                <input type="text" placeholder="Your name" className="w-full bg-[#1a1a1a] p-3 rounded-lg border border-white/10 focus:border-yellow-500 outline-none" />
                            </div>
                            <div>
                                <label className="text-xs text-neutral-400 mb-1 block">Phone</label>
                                <input type="tel" placeholder="Your phone number" className="w-full bg-[#1a1a1a] p-3 rounded-lg border border-white/10 focus:border-yellow-500 outline-none" />
                            </div>
                        </div>

                        <div>
                            <label className="text-xs text-neutral-400 mb-1 block">Email</label>
                            <input type="email" placeholder="your@email.com" className="w-full bg-[#1a1a1a] p-3 rounded-lg border border-white/10" />
                        </div>

                        <div>
                            <label className="text-xs text-neutral-400 mb-1 block">Subject</label>
                            <select className="w-full bg-[#1a1a1a] p-3 rounded-lg border border-white/10">
                                <option>Select a topic</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-xs text-neutral-400 mb-1 block">Message</label>
                            <textarea placeholder="Tell us how we can help you..." className="w-full bg-[#1a1a1a] p-3 rounded-lg border border-white/10 h-32" />
                        </div>

                        <button className="w-full bg-yellow-500 text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-600 transition">
                            <Mail size={18} /> Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer "Ready to Order" Bar */}
            <section className="bg-yellow-500 py-16 text-center text-black">
                <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
                <p className="mb-8 opacity-80">Browse our menu and place your order now.</p>
                <div className="flex justify-center gap-4">
                    <button className="bg-black text-white px-8 py-3 rounded-lg font-bold">View Menu</button>
                    <button className="bg-white text-black px-8 py-3 rounded-lg font-bold">Call Now</button>
                </div>
            </section>
        </main>
    );
}

