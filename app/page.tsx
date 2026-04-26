import CategoryBar from "@/components/CategoryBar";
import HeroCarousel from "@/components/HeroCarousel";
import CategoryGrid from "@/components/CategoryGrid";
import BestSellers from "@/components/BestSellers";
import TextMarquee from "@/components/TextMarquee";
import FoodExperience from "@/components/FoodExperience";
import DeliverySection from "@/components/DeliverySection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="w-full pt-0">
      {/* Hero: No wrapper here = Full Width */}
      <HeroCarousel />
      <CategoryBar />
      <CategoryGrid />  
      <BestSellers />
      <TextMarquee />
      <FoodExperience />
      <DeliverySection />

    </main>
  );
}