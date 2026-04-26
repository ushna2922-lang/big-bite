"use client";
import { motion } from "framer-motion";

const items = [
  { n: "Beetroot", p: "$18", d: "Whipped goat cheese, hazelnut." },
  { n: "Risotto", p: "$28", d: "Truffle oil, aged parmesan." },
  { n: "Scallops", p: "$34", d: "Cauliflower puree, pancetta." },
];

export default function MenuGrid() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {items.map((item, i) => (
        <motion.div 
          key={i}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex justify-between items-end border-b border-white/20 pb-6"
        >
          <div>
            <h3 className="text-3xl uppercase">{item.n}</h3>
            <p className="text-neutral-400 mt-2">{item.d}</p>
          </div>
          <span className="text-2xl">{item.p}</span>
        </motion.div>
      ))}
    </div>
  );
}