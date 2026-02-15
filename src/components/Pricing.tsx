import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";

const Pricing = () => {
  const services = [
    { name: "Pedicure medyczny", price: "150 zł" },
    { name: "Usuwanie odcisków i nagniotków", price: "100 zł" },
    { name: "Leczenie wrastających paznokci", price: "120 zł" },
    { name: "Rekonstrukcja paznokci", price: "80 zł" },
    { name: "Leczenie grzybicy paznokci", price: "100 zł" },
    { name: "Opieka nad stopą cukrzycową", price: "130 zł" },
    { name: "Konsultacja podologiczna", price: "50 zł" },
  ];

  return (
    <section id="pricing" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Cennik
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Przejrzysta polityka cenowa dostosowana do zakresu świadczonych usług
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-background border-border animate-fade-in">
            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-border last:border-0"
                >
                  <span className="text-foreground font-medium">{service.name}</span>
                  <span className="text-primary font-semibold text-lg whitespace-nowrap">{service.price}</span>
                </div>
              ))}
            </div>

            <Card className="p-6 bg-primary/10 border-primary/30">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ceny mogą się różnić w zależności od indywidualnych potrzeb pacjenta oraz stopnia
                    zaawansowania problemu. Dokładna wycena zostanie ustalona podczas konsultacji.
                  </p>
                </div>
              </div>
            </Card>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
