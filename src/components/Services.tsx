import { Card } from "@/components/ui/card";
import { Scissors, Footprints, Sparkles, Wrench, Heart, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Scissors className="w-10 h-10 text-primary" />,
      title: "Usuwanie odcisków i nagniotków",
      description: "Profesjonalne usuwanie zmian skórnych z wykorzystaniem specjalistycznego sprzętu.",
    },
    {
      icon: <Footprints className="w-10 h-10 text-primary" />,
      title: "Leczenie wrastających paznokci",
      description: "Skuteczne metody leczenia, w tym klamry ortonyksyjne i odpowiednie opracowanie paznokci.",
    },
    {
      icon: <Sparkles className="w-10 h-10 text-primary" />,
      title: "Rekonstrukcja paznokci",
      description: "Odbudowa uszkodzonych paznokci za pomocą specjalnych żelów i żywic.",
    },
    {
      icon: <Heart className="w-10 h-10 text-primary" />,
      title: "Pedicure medyczny",
      description: "Kompleksowa pielęgnacja stóp z uwzględnieniem aspektów zdrowotnych.",
    },
    {
      icon: <Shield className="w-10 h-10 text-primary" />,
      title: "Leczenie grzybicy paznokci",
      description: "Diagnoza i skuteczne leczenie infekcji grzybiczych paznokci i skóry.",
    },
    {
      icon: <Wrench className="w-10 h-10 text-primary" />,
      title: "Opieka nad stopą cukrzycową",
      description: "Specjalistyczna opieka dla osób z cukrzycą, zapobieganie powikłaniom.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Oferta usług
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferuję szeroki zakres usług podologicznych dostosowanych do indywidualnych potrzeb każdego pacjenta
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover-lift bg-background border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
