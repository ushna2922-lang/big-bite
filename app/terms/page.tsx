"use client";
import { Scale, ShieldCheck, CreditCard, Truck, AlertTriangle } from "lucide-react";
import Link from "next/link";

const sections = [
  { title: "Introduction", icon: ShieldCheck, text: "Welcome to our restaurant services. These Terms of Service ('Terms') govern your use of our website, mobile application, delivery services, and dining facilities. By using our services, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our services." },
  { title: "Acceptance of Terms", icon: ShieldCheck, subs: [
      { sub: "Agreement", desc: "By accessing and using our website, mobile application, or services, you accept and agree to be bound by the terms and provision of this agreement." },
      { sub: "Modifications", desc: "We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Continued use of our services constitutes acceptance of modified terms." }
  ]},
  { title: "Use of Services", icon: ShieldCheck, subs: [
      { sub: "Permitted Use", desc: "You may use our services for lawful purposes only. You agree not to use the service in any way that violates any applicable federal, state, local, or international law or regulation." },
      { sub: "User Accounts", desc: "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account." },
      { sub: "Prohibited Activities", desc: "You may not use our services to transmit any unlawful, harassing, defamatory, or fraudulent content, or attempt to interfere with the proper functioning of our systems." }
  ]},
  { title: "Orders and Payment", icon: CreditCard, subs: [
      { sub: "Order Acceptance", desc: "All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order at any time for any reason." },
      { sub: "Pricing", desc: "All prices are listed in Pakistani Rupees (PKR) and are subject to change without notice." },
      { sub: "Payment Terms", desc: "Payment is due at the time of order placement. We accept various payment methods including cash on delivery, credit cards, and digital payment platforms." }
  ]},
  { title: "Delivery and Pickup", icon: Truck, subs: [
      { sub: "Delivery Areas", desc: "We deliver within specified areas around our restaurant location. Delivery fees and minimum order requirements may apply." },
      { sub: "Delivery Times", desc: "Estimated delivery times are approximate and may vary due to weather, traffic, or high demand periods." },
      { sub: "Risk of Loss", desc: "Risk of loss for delivered items passes to you upon delivery." }
  ]},
  { title: "Refunds and Cancellations", icon: Scale, subs: [
      { sub: "Cancellation Policy", desc: "Orders may be cancelled within a reasonable time after placement, typically before preparation begins." },
      { sub: "Refund Policy", desc: "Refunds are considered on a case-by-case basis for issues related to food quality or incorrect orders." },
      { sub: "Quality Guarantee", desc: "We stand behind the quality of our food. If you're not satisfied, please contact us immediately." }
  ]},
  { title: "Important Notices", icon: AlertTriangle, subs: [
      { sub: "Limitation of Liability", desc: "To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages." },
      { sub: "Food Allergies", desc: "Please inform us of any food allergies or dietary restrictions when placing your order." },
      { sub: "Governing Law", desc: "These Terms shall be governed by and construed in accordance with the laws of Pakistan." }
  ]}
];

export default function TermsOfService() {
  return (
    <main className="bg-[#0b0e14] text-neutral-400 min-h-screen py-24 px-6">
      <section className="max-w-4xl mx-auto text-center mb-16">
        <Scale size={48} className="mx-auto text-yellow-500 mb-6"/>
        <h1 className="text-5xl font-bold text-white mb-4">Terms of <span className="text-yellow-500">Service</span></h1>
        <p className="text-sm">Please read these terms and conditions carefully before using our services. These terms govern your use of our restaurant's services.</p>
        <p className="text-[10px] mt-4 text-neutral-600">🕒 Last updated: September 27, 2025</p>
      </section>

      <div className="max-w-4xl mx-auto space-y-8">
        {sections.map((sec, i) => (
          <div key={i} className="border border-white/10 bg-[#111] p-8 rounded-3xl">
            <h2 className="text-yellow-500 font-bold text-lg mb-6 flex items-center gap-3">
              <sec.icon size={20} /> {sec.title}
            </h2>
            {sec.text && <p className="text-sm leading-relaxed text-neutral-300">{sec.text}</p>}
            {sec.subs && <div className="space-y-6">{sec.subs.map((s, j) => (
              <div key={j}><h4 className="text-white font-bold text-sm mb-1">{s.sub}</h4><p className="text-sm text-neutral-400">{s.desc}</p></div>
            ))}</div>}
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-12 bg-[#1a1a1a] p-8 rounded-3xl border border-yellow-500/20 text-center">
        <h3 className="text-xl font-bold text-white mb-4">Questions About These Terms?</h3>
        <div className="flex justify-center gap-4">
            <a href="tel:03213667355" className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold text-sm">Call: 03213667355</a>
            <Link href="/contact" className="bg-white text-black px-6 py-3 rounded-lg font-bold text-sm">Contact Us</Link>
        </div>
      </div>
    </main>
  );
}