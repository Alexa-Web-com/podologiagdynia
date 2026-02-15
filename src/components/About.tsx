import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";
import katarzynaImage from "@/assets/katarzyna-buczynska.png";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            O mnie
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="animate-fade-in">
            <img
              src={katarzynaImage}
              alt="Katarzyna Buczyńska - Specjalistka Podolog"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-3xl font-semibold text-foreground">
              Katarzyna Buczyńska
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Jestem certyfikowaną specjalistką w dziedzinie podologii z wieloletnim doświadczeniem w opiece nad stopami. Moją pasją jest pomaganie pacjentom w rozwiązywaniu problemów zdrowotnych stóp oraz dbanie o ich komfort i samopoczucie.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              W swojej pracy kieruję się indywidualnym podejściem do każdego pacjenta, wykorzystując najnowocześniejszy sprzęt i sprawdzone metody leczenia. Regularnie podnoszę swoje kwalifikacje, uczestnicząc w szkoleniach i konferencjach branżowych.
            </p>

            <Card className="p-6 bg-secondary/30 border-primary/20">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Kwalifikacje i certyfikaty</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Certyfikowany Podolog</li>
                    <li>• Specjalizacja w leczeniu wrastających paznokci</li>
                    <li>• Szkolenia z zakresu rekonstrukcji paznokci</li>
                    <li>• Ukończone kursy z pedicure medycznego</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
