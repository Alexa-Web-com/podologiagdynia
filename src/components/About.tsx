import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import katarzynaImage from "@/assets/katarzyna-buczynska.jpg";
import certificate1 from "@/assets/certificate-1.jpg";
import certificate2 from "@/assets/certificate-2.jpg";
import certificate3 from "@/assets/certificate-3.jpg";
import certificate4 from "@/assets/certificate-4.jpg";
import certificate5 from "@/assets/certificate-5.jpg";
import certificate6 from "@/assets/certificate-6.jpg";
import certificate7 from "@/assets/certificate-7.jpg";
import certificate8 from "@/assets/certificate-8.jpg";
import certificate9 from "@/assets/certificate-9.jpg";
import certificate10 from "@/assets/certificate-10.jpg";
import certificate11 from "@/assets/certificate-11.jpg";
import certificate12 from "@/assets/certificate-12.jpg";
import certificate13 from "@/assets/certificate-13.jpg";
import certificate14 from "@/assets/certificate-14.jpg";

const certificates = [
  {
    src: certificate1,
    alt: "Certyfikat ze szkolenia specjalistycznego",
  },
  { src: certificate2, alt: "Certyfikat ze szkolenia specjalistycznego" },
  { src: certificate3, alt: "Certyfikat ze szkolenia specjalistycznego" },
  { src: certificate4, alt: "Certyfikat z warsztatów podologicznych" },
  { src: certificate5, alt: "Certyfikat ze szkolenia podologicznego" },
  {
    src: certificate6,
    alt: "Certyfikat uczetniczenia w naukowej konferencji podologicznej",
  },
  { src: certificate7, alt: "Certyfikat z warsztatów podologicznych" },
  {
    src: certificate8,
    alt: "Certyfikat uczetniczenia w naukowej konferencji medycznej",
  },
  { src: certificate9, alt: "Certyfikat z warsztatów podologicznych" },
  { src: certificate10, alt: "Certyfikat z kursu specjalistycznego" },
  { src: certificate11, alt: "Certyfikat z kursu specjalistycznego" },
  { src: certificate12, alt: "Certyfikat ze szkolenia podologicznego" },
  { src: certificate13, alt: "Certyfikat ze warsztatów z anatomii sekcyjnej" },
  { src: certificate14, alt: "Certyfikat z zawodowego kursu podologicznego" },
];

const About = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? certificates.length - 1 : i - 1));
  const next = () =>
    setCurrentIndex((i) => (i === certificates.length - 1 ? 0 : i + 1));

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

          <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <h3 className="text-3xl font-semibold text-foreground">
              Katarzyna Buczyńska
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Jestem certyfikowaną specjalistką w dziedzinie podologii z
              wieloletnim doświadczeniem w opiece nad stopami. Moją pasją jest
              pomaganie pacjentom w rozwiązywaniu problemów zdrowotnych stóp
              oraz dbanie o ich komfort i samopoczucie.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              W swojej pracy kieruję się indywidualnym podejściem do każdego
              pacjenta, wykorzystując najnowocześniejszy sprzęt i sprawdzone
              metody terapii. Regularnie podnoszę swoje kwalifikacje,
              uczestnicząc w szkoleniach i konferencjach branżowych.
            </p>

            <Card className="p-6 bg-secondary/30 border-primary/20">
              <div className="flex items-start gap-4">
                <Award className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">
                    Kwalifikacje i certyfikaty
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Certyfikowany Podolog</li>
                    <li>• Specjalizacja w terapii wrastających paznokci</li>
                    <li>• Szkolenia z zakresu rekonstrukcji paznokci</li>
                    <li>• Ukończone kursy z pedicure medycznego</li>
                  </ul>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => {
                      setCurrentIndex(0);
                      setOpen(true);
                    }}
                  >
                    Zobacz wszystkie certyfikaty
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-3xl p-2 sm:p-6">
          <DialogHeader>
            <DialogTitle>Certyfikaty i dyplomy</DialogTitle>
            <DialogDescription>
              {certificates[currentIndex].alt} ({currentIndex + 1}/
              {certificates.length})
            </DialogDescription>
          </DialogHeader>
          <div className="relative flex items-center justify-center min-h-[300px]">
            <button
              onClick={prev}
              className="absolute left-1 z-10 p-2 rounded-full bg-background/80 hover:bg-background shadow-md"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <img
              src={certificates[currentIndex].src}
              alt={certificates[currentIndex].alt}
              className="max-h-[60vh] object-contain rounded-lg mx-auto"
            />
            <button
              onClick={next}
              className="absolute right-1 z-10 p-2 rounded-full bg-background/80 hover:bg-background shadow-md"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default About;
