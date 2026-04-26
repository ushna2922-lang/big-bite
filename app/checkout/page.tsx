"use client";
import { CartProvider, useCart } from "@/context/CartContext";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabaseClient"; // Import the client
import Link from "next/link"; // Import setCart to clear the cart after order placement

export default function CheckoutPage() {
    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        address: ""
    });
    const { cart, setCart, updateQty, removeItem } = useCart();
    const subtotal = cart.reduce(
        (acc: number, item: any) =>
            acc + (parseFloat(item.price) * item.qty),
        0
    );

    const [formData, setFormData] = useState({ name: "", phone: "", address: "" });

    const [loading, setLoading] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const isFormValid =
        formData.name.trim() &&
        /^03[0-9]{9}$/.test(formData.phone) &&
        formData.address.trim() &&
        cart.length > 0;

    const validate = () => {
        let newErrors = { name: "", phone: "", address: "" };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
            isValid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
            isValid = false;
        } else if (!/^03[0-9]{9}$/.test(formData.phone)) {
            newErrors.phone = "Enter valid number (03XXXXXXXXX)";
            isValid = false;
        }

        if (!formData.address.trim()) {
            newErrors.address = "Address is required";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };


    const handlePlaceOrder = async () => {

        if (!validate()) return;
        if (cart.length === 0) return;

        setLoading(true);

        const { error } = await supabase.from('orders').insert([
            {
                customer_name: formData.name,
                phone: formData.phone,
                address: formData.address,
                items: cart.map((i: any) => ({
                    name: i.name,
                    size: i.selectedSize?.label || i.size || "Default",
                    qty: i.qty,
                    price: i.price
                })),
                total: subtotal
            }
        ]);

        if (error) {
            setLoading(false);
            alert("Error placing order");
            return;
        }

        // ✅ Clean WhatsApp message (receipt style)
        const orderItems = cart.map((i: any) => {
            const sizeLabel =
                i.selectedSize?.label ||
                i.size ||
                "";

            const size = sizeLabel && sizeLabel !== "Default"
                ? ` (${sizeLabel})`
                : "";

            return `• ${i.name}${size} x${i.qty} = Rs ${parseFloat(i.price) * i.qty}`;
        }).join("%0A");

        const whatsappMsg =
            `🧾 *New Order*%0A
------------------------%0A
👤 *Name:* ${formData.name}%0A
📞 *Phone:* ${formData.phone}%0A
📍 *Address:* ${formData.address}%0A
------------------------%0A
${orderItems}%0A
------------------------%0A
💰 *Total:* Rs ${subtotal.toFixed(2)}`;

        window.open(`https://wa.me/923213667355?text=${whatsappMsg}`, '_blank');

        // ✅ CLEAR CART + SHOW SUCCESS
        setCart([]); // IMPORTANT: import from context
        setOrderPlaced(true);
        setLoading(false);
    };


    const testConnection = async () => {
        const { data, error } = await supabase
            .from('orders')
            .insert([{ customer_name: 'Test User', phone: '000000', address: 'Test Address', total: 0 }]);

        if (error) console.log("Error:", error);
        else console.log("Success! Data inserted.");
    };

    if (orderPlaced) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-[#0b0e14] text-white">
                <div className="bg-[#111] p-10 m-7 rounded-3xl text-center border border-white/10 animate-fadeIn">

                    <h1 className="text-3xl font-bold text-yellow-500 mb-4">
                        🎉 Order Placed!
                    </h1>

                    <p className="text-neutral-400 mb-6">
                        Your order has been sent successfully via WhatsApp.
                    </p>

                    <Link
                        href="/menu"
                        className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition"
                    >
                        Back to Menu
                    </Link>
                </div>
            </main>
        );
    }

    return (

        <main className="min-h-screen bg-[#0b0e14] text-white py-12 px-6 md:px-20">
            <div className="max-w-[1200px] mx-auto">
                <Link href="/cart" className="flex items-center gap-2 text-neutral-400 mb-8 hover:text-white">
                    <ArrowLeft size={20} /> Back to Cart
                </Link>
                <h1 className="text-4xl font-bold mb-10">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* LEFT: Customer Info Form */}
                    <div className="lg:col-span-2 space-y-8">
                        <CheckoutSection title="Customer Information">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Full Name *"
                                    className="bg-[#1a1a1a] p-4 rounded-xl border border-white/10"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                <input
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    placeholder="Phone Number *"
                                    className="bg-[#1a1a1a] p-4 rounded-xl border border-white/10"
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                            </div>
                            <input placeholder="Email (Optional)" className="w-full bg-[#1a1a1a] mt-4 p-4 rounded-xl border border-white/10" />
                        </CheckoutSection>

                        <CheckoutSection title="Delivery Address">
                            <textarea
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                placeholder="Address *"
                                className="w-full h-32 bg-[#1a1a1a] p-4 rounded-xl border border-white/10"
                            />
                            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                        </CheckoutSection>

                        <CheckoutSection title="Payment Method">
                            <div className="p-4 border border-yellow-500/50 bg-[#111] rounded-xl flex items-center gap-3 text-yellow-500">
                                <div className="w-4 h-4 rounded-full border-2 border-yellow-500 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-yellow-500" />
                                </div>
                                Cash on Delivery
                            </div>
                        </CheckoutSection>
                    </div>

                    {/* RIGHT: Order Summary (STICKY) */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-[#111] p-8 rounded-3xl border border-white/10 shadow-2xl">
                            <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                            <div className="space-y-4 mb-6">
                                {cart.map((item: any) => {
                                    const size =
                                        item.selectedSize?.label ||
                                        item.size ||
                                        "";

                                    return (
                                        <div key={`${item.name}-${size}`} className="flex justify-between text-sm">
                                            <span>
                                                {item.qty}x {item.name} {size && size !== "Default" && `(${size})`}
                                            </span>

                                            <span>
                                                Rs {parseFloat(item.price) * item.qty}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="border-t border-white/10 pt-4 space-y-2">
                                <div className="flex justify-between text-sm"><span>Subtotal</span> <span>Rs {subtotal.toFixed(2)}</span></div>
                                <div className="flex justify-between text-sm text-green-500"><span>Delivery Fee</span> <span>Rs 0.00</span></div>
                                <div className="flex justify-between text-lg font-bold pt-4 text-yellow-500">
                                    <span>Total</span> <span>Rs {subtotal.toFixed(2)}</span>
                                </div>
                            </div>
                            <button
                                onClick={handlePlaceOrder}
                                disabled={!isFormValid || loading}
                                className={`w-full mt-8 py-4 rounded-xl font-bold transition flex justify-center items-center gap-2
    ${loading
                                        ? "bg-gray-600 cursor-not-allowed"
                                        : "bg-yellow-500 hover:bg-yellow-400 text-black"}
  `}
                            >
                                {loading ? "Placing Order..." : "Place Order"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

// Helper component to style those dark boxes
function CheckoutSection({ title, children }: any) {
    return (
        <div className="bg-[#111] p-8 rounded-3xl border border-white/10">
            <h2 className="text-lg font-bold mb-6 flex items-center gap-3">
                <span className="text-yellow-500">👤</span> {title}
            </h2>
            {children}
        </div>
    );
}