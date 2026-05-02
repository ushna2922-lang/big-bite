"use client";
import { MapPin } from "lucide-react";
import MapSvg from "./MapSvg";

export default function DeliverySection() {
  return (
    <section className="py-24 px-8 bg-[#0f1012] text-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left: Info */}
        <div>
          <h2 className="text-5xl font-serif italic mb-6">Swift & Hot Delivery</h2>
          <p className="text-neutral-400 mb-10 max-w-md">
            We cover the entire metropolitan area. Our dedicated fleet ensures your meal retains its cinematic heat from our kitchen to your hands.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="border border-white/10 rounded-3xl p-6 bg-[#111]">
              <div className="text-3xl font-serif italic mb-1">30-40</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-yellow-500 mb-2">Minutes</div>
              <div className="text-[10px] text-neutral-500">Average Delivery Time</div>
            </div>
            <div className="border border-white/10 rounded-3xl p-6 bg-[#111]">
              <div className="text-3xl font-serif italic mb-1">Rs 0.00</div>
              <div className="text-[10px] uppercase tracking-widest font-bold text-yellow-500 mb-2">Delivery</div>
              <div className="text-[10px] text-neutral-500">On orders over Rs 1050</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-neutral-300">
            <MapPin size={18} className="text-yellow-500" />
            <p>Pak-Arab, Housing Block B Scheme, Lahore, Pakistan</p>
          </div>
        </div>

        {/* Right Side: Map Visual Container */}
        <div className="relative border border-white/10 rounded-[3rem] overflow-hidden h-[400px] w-full bg-[#111]">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13617.573462531225!2d74.35145899999999!3d31.430835899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907b69174d19d%3A0xa25ce8e180ef6c8c!2sBig%20Bite%20fast%20food!5e0!3m2!1sen!2s!4v1777756179915!5m2!1sen!2s"
            className="w-full h-full grayscale invert-[0.9] contrast-[1.2] brightness-[0.8]"
            style={{ border: '0' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Restaurant Location"
          />
        </div>
      </div>
    </section>
  );
}