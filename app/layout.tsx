import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Import your Footer
import SmoothScroll from "@/components/SmoothScroll";
import { CartProvider } from "@/context/CartContext"; 

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <CartProvider>
          {/* Now everything is inside the CartProvider */}
          <Navbar />
          <SmoothScroll>
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}