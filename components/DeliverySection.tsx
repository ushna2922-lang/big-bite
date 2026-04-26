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
            <p>P-562/A Opposite Govt. Nusrat Fateh Ali Khan Hospital</p>
          </div>
        </div>

        {/* Right Side: Map Visual Container */}
        <div className="relative border border-white/10 rounded-[3rem] p-8 h-[400px] flex items-center justify-center bg-[#111]">
           
           {/* Map Background */}
           <div className="absolute inset-0 p-10 opacity-20">
             <MapSvg /> 
           </div>
           
           {/* The Pulsing Marker */}
           <div className="relative z-10 w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center animate-pulse">
             <div className="w-10 h-10 bg-yellow-500/30 rounded-full flex items-center justify-center">
               <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center">
                 <span className="text-white text-xs">🍴</span>
               </div>
             </div>
           </div>

        </div> {/* This closes the Right Side container correctly */}

      </div>
    </section>
  );
}