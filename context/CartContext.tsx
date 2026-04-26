"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext<any>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<any[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const savedCart = localStorage.getItem("several_cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("several_cart", JSON.stringify(cart));
        }
    }, [cart, isLoaded]);

    // ADDS ITEM OR INCREMENTS QUANTITY
    const addToCart = (item: any, selectedSize: any) => {
        setCart((prev) => {
            const sizeLabel = selectedSize?.label || "Default";

            const existingItemIndex = prev.findIndex(
                (i) => i.name === item.name && i.size === sizeLabel
            );

            if (existingItemIndex > -1) {
                const updatedCart = [...prev];
                updatedCart[existingItemIndex].qty += 1;
                return updatedCart;
            } else {
                return [
                    ...prev,
                    {
                        name: item.name,
                        img: item.img,
                        qty: 1,
                        size: sizeLabel, // ✅ CLEAN STRING
                        price: selectedSize?.price || item.price,
                    },
                ];
            }
        });
    };

    // UPDATES QUANTITY (Increases or decreases)
    const updateQty = (name: string, size: string, delta: number) => {
    setCart((prev) =>
        prev.map((i) => {
            const itemSize = i.size || "Default";
            const targetSize = size || "Default";

            if (i.name === name && itemSize === targetSize) {
                return {
                    ...i,
                    qty: Math.max(1, i.qty + delta),
                };
            }

            return i;
        })
    );
};

    // REMOVES ITEM
    const removeItem = (name: string, size: string) => {
    setCart((prev) =>
        prev.filter((i) => {
            const itemSize = i.size || "Default";
            const targetSize = size || "Default";
            return !(i.name === name && itemSize === targetSize);
        })
    );
};

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, updateQty, removeItem }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);