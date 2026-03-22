import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ScentFinder from "@/components/ScentFinder";
import ProductShowcase from "@/components/ProductShowcase";
import ExperienceLayer from "@/components/ExperienceLayer";
import BrandStory from "@/components/BrandStory";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ScentFinder />
      <ProductShowcase />
      <ExperienceLayer />
      <BrandStory />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
