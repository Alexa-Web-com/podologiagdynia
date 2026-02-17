import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Ensure the URL is clean on load
    if (window.location.hash || window.location.pathname !== "/") {
      window.history.replaceState(null, "", "/");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Services />
      <Gallery />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
