import ProductCard from "./ProductCard";

const products = [
  { 
    name: "Zinger Burger", 
    badge: "Chef's Choice", 
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600", 
    price: "380", 
    rating: "4.9", 
    desc: "Crispy chicken, fresh lettuce, secret sauce." 
  },
  { 
    name: "Loaded Fries", 
    badge: "Most Wanted", 
    img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600", 
    price: "550", 
    rating: "4.9", 
    desc: "Golden fries with melted cheese and beef." 
  },
  { 
    name: "Special Platter", 
    badge: "Popular", 
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600", 
    price: "850", 
    rating: "4.9", 
    desc: "Wings, spring rolls, and dip sauce." 
  },
  { 
    name: "Several Special Pizza", 
    badge: "Options", 
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600", 
    price: "1,400", 
    rating: "4.9", 
    desc: "Large hand-tossed with fresh toppings." 
  },
];;

export default function BestSellers() {
  return (
    <section className="py-20 px-6 md:px-24 lg:px-20 bg-[#0f1012]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-yellow-500 text-xs uppercase tracking-widest mb-2">Most Wanted</p>
            <h2 className="text-5xl font-serif italic font-bold">The Best Sellers</h2>
          </div>
          <a href="#" className="text-sm underline hover:text-yellow-500">See Full Menu</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, i) => <ProductCard key={i} item={item} />)}
        </div>
      </div>
    </section>
  );
}