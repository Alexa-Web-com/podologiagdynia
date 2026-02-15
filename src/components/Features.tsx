import { Award, Heart, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Wieloletnie doświadczenie",
      description: "Certyfikowana specjalistka z bogatym doświadczeniem w podologii",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Nowoczesny sprzęt",
      description: "Najnowocześniejsze urządzenia i najwyższej jakości materiały",
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Indywidualne podejście",
      description: "Każdy pacjent otrzymuje spersonalizowaną opiekę i doradztwo",
    },
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 text-center hover-lift bg-background border-border animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
