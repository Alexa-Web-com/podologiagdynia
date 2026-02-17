import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-podology.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Profesjonalny gabinet podologiczny"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-background/95 via-background/80 to-background/30" />
      </div>

      <div className="container mx-auto mb-4 px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Zadbaj o zdrowie
            <br />
            <span className="text-primary">swoich stóp</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Profesjonalna opieka podologiczna z wieloletnim doświadczeniem.
            <br />
            Specjalistka Katarzyna Buczyńska oferuje kompleksowe zabiegi
            <br />w nowoczesnym gabinecie w Gdyni.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8"
            >
              <Phone className="w-5 h-5 mr-2" />
              Umów wizytę
            </Button>
            <Button
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="text-lg px-8 border-2 hover:border-primary hover:bg-primary/10 hover:text-primary hover:ring-0 hover:ring-primary"
            >
              Dowiedz się więcej
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
