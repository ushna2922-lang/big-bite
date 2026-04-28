"use client";
import { MapPin, Phone, Mail, Clock, Utensils, MessageSquare, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { link, linkSync } from "fs";
import Link from "next/link";

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
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const response = await fetch("https://formspree.io/f/mvzdezjg", {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
            setStatus('success');
            form.reset();
            alert("Message sent successfully!");
        } else {
            setStatus('idle');
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <main className="bg-[#0b0e14] min-h-screen text-white pt-20">
            {/* Header */}
            <section className="text-center py-20 px-6 bg-gradient-to-b from-black/60 to-[#0b0e14]">
                <div className="flex justify-center items-center gap-3 mb-4">
                    <Utensils size={36} className="text-yellow-500" />
                    <h1 className="text-5xl font-bold text-white">Contact <span className="text-yellow-500">Us</span></h1>
                </div>
            </section>

            <section className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                {/* LEFT: Contact Cards with functional links */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold flex items-center gap-3 text-yellow-500 mb-8">
                        <MessageSquare size={24} /> Get In Touch
                    </h2>

                    {/* Call Us Box */}
                    <div className="border border-white/10 rounded-2xl p-6 bg-[#111]">
                        <div className="flex items-center gap-2 mb-4 text-white font-bold"><Phone size={18} className="text-yellow-500" /> Call Us</div>
                        <div className="space-y-3">
                            <a href="tel:03213667355" className="block bg-[#1a1a1a] p-4 rounded-xl border border-white/10 text-sm hover:border-yellow-500 transition-all">03290039757</a>
                            <a href="tel:03213667355" className="block bg-[#1a1a1a] p-4 rounded-xl border border-white/10 text-sm hover:border-yellow-500 transition-all">03127172184</a>
                        </div>
                    </div>

                    {/* Visit Us Box */}
                    <div className="border border-white/10 rounded-2xl p-6 bg-[#111]">
                        <div className="flex items-center gap-2 mb-4 text-white font-bold"><MapPin size={18} className="text-yellow-500" /> Visit Us</div>
                        <div className="bg-[#1a1a1a] p-4 rounded-xl border border-white/10 text-sm">
                            <p>P-562/A Opposite Govt. Nusrat Fateh Ali Khan Hospital, Faisalabad</p>
                            <a
                                href="https://maps.app.goo.gl/YOUR_GOOGLE_MAPS_LINK"
                                target="_blank"
                                className="text-yellow-500 text-xs mt-2 underline block"
                            >
                                Click to open in Google Maps
                            </a>
                        </div>
                    </div>

                    {/* Business Hours */}
                    <div className="border border-white/10 rounded-2xl p-6 bg-[#111]">
                        <div className="flex items-center gap-2 mb-4 text-white font-bold"><Clock size={18} className="text-yellow-500" /> Business Hours</div>
                        <div className="flex justify-between text-sm text-neutral-300">
                            <span>Monday - Sunday</span>
                            <span className="font-bold text-white">5:00 PM - 01:00 AM</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Send Message Form */}
                <form onSubmit={handleSubmit} className="space-y-4 mt-20">
                    {/* Hidden field for Formspree subject */}
                    <input type="hidden" name="subject" value="Contact Form Submission" />

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs text-neutral-400 mb-1 block">Name</label>
                            <input name="name" type="text" required placeholder="Your name" className="w-full bg-[#1a1a1a] p-3 rounded-lg border border-white/10 outline-none" />
                        </div>
                        <div>
                            <label className="text-xs text-neutral-400 mb-1 block">Phone</label>
                            <input name="phone" type="tel" required placeholder="Your phone number" className="w-full bg-[#1a1a1a] p-3 rounded-lg border border-white/10 outline-none" />
                        </div>
                    </div>

                    <div>
                        <label className="text-xs text-neutral-400 mb-1 block">Email</label>
                        <input name="email" type="email" required placeholder="your@email.com" className="w-full bg-[#1a1a1a] p-3 rounded-lg border border-white/10" />
                    </div>

                    <div>
                        <label className="text-xs text-neutral-400 mb-1 block">Subject</label>
                        <select name="subject_topic" className="w-full bg-[#1a1a1a] p-3 rounded-lg border border-white/10">
                            <option>General Inquiry</option>
                            <option>Reservation</option>
                            <option>Feedback</option>
                        </select>
                    </div>

                    <div>
                        <label className="text-xs text-neutral-400 mb-1 block">Message</label>
                        <textarea name="message" required placeholder="Tell us how we can help you..." className="w-full bg-[#1a1a1a] p-3 rounded-lg border border-white/10 h-32" />
                    </div>

                    <button
                        disabled={status === 'submitting'}
                        className="w-full bg-yellow-500 text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-600 transition"
                    >
                        {status === 'submitting' ? 'Sending...' : <><Mail size={18} /> Send Message</>}
                    </button>
                </form>
            </section>

            {/* Footer "Ready to Order" Bar */}
            <section className="bg-yellow-500 py-16 text-center text-black">
                <h2 className="text-3xl font-bold mb-4">Ready to Order?</h2>
                <div className="flex justify-center gap-4">
                    <Link href="/menu" className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-neutral-800 transition">
                        View Menu
                    </Link>
                    <a href="tel:03213667355" className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-neutral-100 transition">
                        Call Now
                    </a>
                </div>
            </section>
        </main>
    );
}

