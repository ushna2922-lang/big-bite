import { ShieldCheck, User, Eye, Lock, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
  const sections = [
    { title: "Introduction", icon: ShieldCheck, content: "At our restaurant, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or dine at our restaurant." },
    { title: "Information We Collect", icon: User, items: [
      { sub: "Personal Information", desc: "When you place an order, create an account, or contact us, we may collect information including your name, email address, phone number, and delivery address." },
      { sub: "Usage Information", desc: "We automatically collect information about how you use our website, including your IP address and pages visited." },
      { sub: "Location Information", desc: "With your permission, we may collect location information to provide delivery services." }
    ]},
    { title: "How We Use Your Information", icon: Eye, items: [
        { sub: "Service Delivery", desc: "We use your information to process orders and provide customer support." },
        { sub: "Communication", desc: "We may use your contact information to send updates about your orders." },
        { sub: "Improvement", desc: "We analyze usage patterns to improve our services and functionality." }
    ]},
    { title: "Your Rights", icon: Lock, items: [
        { sub: "Access & Correction", desc: "You have the right to access, update, or correct your personal information." },
        { sub: "Deletion", desc: "You may request deletion of your personal information, subject to legal requirements." }
    ]}
  ];

  return (
    <main className="bg-[#0b0e14] text-neutral-400 min-h-screen py-24 px-6">
      {/* Header */}
      <section className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-white mb-4 flex justify-center items-center gap-3">
          <ShieldCheck className="text-yellow-500" size={40}/> Privacy Policy
        </h1>
        <p>Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.</p>
        <p className="text-xs mt-4 text-yellow-500">🕒 Last updated: September 27, 2025</p>
      </section>

      {/* Policy Sections */}
      <div className="max-w-4xl mx-auto space-y-8">
        {sections.map((sec, i) => (
          <div key={i} className="border border-white/10 bg-[#111] p-8 rounded-3xl">
            <h2 className="text-yellow-500 font-bold text-xl mb-6 flex items-center gap-3">
              <sec.icon /> {sec.title}
            </h2>
            {sec.content && <p className="text-sm leading-relaxed text-neutral-300">{sec.content}</p>}
            {sec.items && (
              <div className="space-y-6">
                {sec.items.map((item, j) => (
                  <div key={j}>
                    <h4 className="text-white font-bold text-sm mb-1">{item.sub}</h4>
                    <p className="text-sm text-neutral-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Questions Box */}
      <div className="max-w-4xl mx-auto mt-12 bg-[#1a1a1a] p-8 rounded-3xl border border-yellow-500/20 text-center">
        <h3 className="text-xl font-bold text-white mb-4">Questions About This Policy?</h3>
        <p className="text-sm mb-8">If you have any questions about this Privacy Policy, please don't hesitate to contact us.</p>
        <div className="flex justify-center gap-4">
            <a href="tel:03000115919" className="flex items-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold text-sm">
                <Phone size={16}/> Call: 03000115919
            </a>
            <Link href="/contact" className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg font-bold text-sm">
                <Mail size={16}/> Contact Us
            </Link>
        </div>
      </div>
    </main>
  );
}