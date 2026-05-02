// Try replacing your import line with this:
import { MapPin, Phone, Mail, ShoppingCart, Home, Utensils, Menu, X } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";


export default function Footer() {
    const SocialIcons = () => (
        <div className="flex gap-4">
            <a href="https://www.facebook.com/bigbitessss/" target="_blank" className="bg-[#1a1a1a] p-3 rounded-md border border-white/10 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all">
                <FaFacebook size={18} />
            </a>
            <a href="https://www.instagram.com/bigbites_food_/" target="_blank" className="bg-[#1a1a1a] p-3 rounded-md border border-white/10 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all">
                <FaInstagram size={18} />
            </a>
            <a href="#" className="bg-[#1a1a1a] p-3 rounded-md border border-white/10 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all">
                <FaTwitter size={18} />
            </a>
        </div>
    );

    return (
        <footer className="bg-[#111] text-neutral-400 py-7 px-8 border-t border-white/5">
            <div className="max-w-[1400px] mx-auto">

                {/* Logo Section */}
                <div className="flex flex-col items-center mb-12">
                    <div className="text-4xl font-black italic tracking-tighter mb-2">
                        <Link href="/" className="text-4xl font-black italic tracking-tighter text-white">
                            <span className="text-red-600">B</span>ig Bite
                        </Link>
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.3em]">The Taste of Life</p>
                </div>

                {/* MOBILE VERSION: Visible only on phones (md:hidden) */}
                <div className="md:hidden flex flex-col items-center text-center gap-10 mb-20">
                    <div className="bg-[#1a1a1a] p-8 rounded-2xl w-full max-w-[350px] border border-white/5">
                        <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
                        <div className="space-y-4 text-sm flex flex-col items-center">
                            <a href="tel:+923001115919" className="flex gap-2 text-yellow-500 hover:text-yellow-400 transition-colors">
                                <Phone size={18} /> 03001115919
                            </a>
                            <a href="mailto:bigbite@gmail.com" className="flex gap-2 text-yellow-500 hover:text-yellow-400 transition-colors">
                                <Mail size={18} /> bigbite@gmail.com
                            </a>
                            <a
                                href="https://www.google.com/maps/place/Big+Bite+fast+food/@31.4308359,74.351459,15z/data=!4m10!1m2!2m1!1sbig+bite+in+lahore!3m6!1s0x391907b69174d19d:0xa25ce8e180ef6c8c!8m2!3d31.430796!4d74.3516221!15sChJiaWcgYml0ZSBpbiBsYWhvcmUiA4gBAVoUIhJiaWcgYml0ZSBpbiBsYWhvcmWSAQpyZXN0YXVyYW50mgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ0S1VVMHhPVEppUmsxNFV6QlpORTlWU2pGWmJscFNZV3hXUlZKSVl4QULgAQD6AQQILxBL!16s%2Fg%2F11k3thv587?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex gap-2 hover:text-yellow-500 transition-colors flex items-center"
                            >
                                <MapPin size={18} className="text-yellow-500 shrink-0" />
                                <p>Pak-Arab, Housing Block B Scheme, Lahore, Pakistan</p>
                            </a>
                        </div>
                    </div>
                    <div className="flex gap-6 text-sm">
                        <a href="/menu">Menu</a> <a href="/">About</a> <a href="/contact">Contact</a> <a href="/">Privacy</a>
                    </div>
                    <SocialIcons />
                </div>

                {/* DESKTOP VERSION: Visible only on tablets/desktops (hidden md:grid) */}
                <div className="hidden md:grid grid-cols-4 gap-12 mb-20">
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">About Big Bite</h4>
                        <p className="text-sm leading-relaxed mb-6">Experience the authentic taste of life with our carefully crafted dishes. We bring you the finest flavors that celebrate tradition and innovation.</p>
                        <div className="flex items-center gap-2 text-yellow-500 text-sm">
                            <span>🕒</span> Open 24/7
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="/menu" className="hover:text-yellow-500">Our Menu</a></li>
                            <li><a href="/" className="hover:text-yellow-500">About Us</a></li>
                            <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
                        <ul className="space-y-4 text-sm">
                            <li><a href="/" className="hover:text-yellow-500">Home Delivery</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
                        <div className="space-y-4 text-sm">
                            <div className="flex gap-2">
                                <a
                                    href="https://www.google.com/maps/place/Big+Bite+fast+food/@31.4308359,74.351459,15z/data=!4m10!1m2!2m1!1sbig+bite+in+lahore!3m6!1s0x391907b69174d19d:0xa25ce8e180ef6c8c!8m2!3d31.430796!4d74.3516221!15sChJiaWcgYml0ZSBpbiBsYWhvcmUiA4gBAVoUIhJiaWcgYml0ZSBpbiBsYWhvcmWSAQpyZXN0YXVyYW50mgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ0S1VVMHhPVEppUmsxNFV6QlpORTlWU2pGWmJscFNZV3hXUlZKSVl4QULgAQD6AQQILxBL!16s%2Fg%2F11k3thv587?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-2 hover:text-yellow-500 transition-colors"
                                >
                                    <MapPin size={18} className="text-yellow-500 shrink-0" />
                                    <p>Pak-Arab, Housing Block B Scheme, Lahore, Pakistan</p>
                                </a>
                            </div>
                            <div className="flex gap-2 text-yellow-500">
                                <a href="tel:+923001115919" className="flex gap-2 text-yellow-500 hover:text-yellow-400 transition-colors">
                                    <Phone size={18} /> 03001115919
                                </a>
                            </div>

                            <div className="flex gap-2">
                                <a href="mailto:bigbite@gmail.com" className="flex gap-2 hover:text-yellow-500 transition-colors">
                                    <Mail size={18} className="text-yellow-500" /> bigbite@gmail.com
                                </a>
                            </div>
                            <div className="mt-6"><SocialIcons /></div>
                        </div>
                    </div>
                </div>

                {/* Bottom: Copyright */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs gap-4 text-center md:text-left">
                    <p>© 2026 Big Bite - The taste of life. All rights reserved.</p>
                    <div className="flex justify-center gap-8">
                        <a href="privacy" className="hover:text-white">Privacy Policy</a>
                        <a href="terms" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}