"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
  src: string;
  speed?: number; // How fast the image moves
}

export default function ParallaxImage({ src, speed = 0.2 }: ParallaxProps) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        start: "top bottom",
        end: "bottom top",
      },
    });
  }, [speed]);

  return (
    <div ref={containerRef} className="overflow-hidden w-full h-[60vh] relative">
      <img
        ref={imageRef}
        src={src}
        className="w-full h-[150%] object-cover absolute top-0 left-0"
        alt="Parallax"
      />
    </div>
  );
}