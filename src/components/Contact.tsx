import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      label: "Adres",
      value: "ul. Waleriana Szefki 2F/B1",
      value2: "81-572 Gdynia",
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      label: "Telefon",
      value: "502 039 656",
      link: "tel:502039656",
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      label: "E-mail",
      value: "podolog.katarzyna.buczynska@gmail.com",
      link: "mailto:podolog@gmail.com",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      label: "Godziny otwarcia",
      value: "Poniedziałek - Piątek: 9:00 - 18:00",
      value2: "Sobota: 9:00 - 14:00",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kontakt
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zapraszamy do kontaktu i umówienia wizyty
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 animate-fade-in">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="p-6 bg-secondary/30 border-border hover-lift"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="hidden sm:block shrink-0">{info.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="sm:hidden shrink-0">{info.icon}</div>
                      <h3 className="font-semibold text-foreground">
                        {info.label}
                      </h3>
                    </div>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <>
                        <p className="text-sm sm:text-base text-muted-foreground">
                          {info.value}
                        </p>
                        {info.value2 && (
                          <p className="text-sm sm:text-base text-muted-foreground">
                            {info.value2}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </Card>
            ))}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                size="lg"
                className="flex-1 bg-primary py-3 hover:bg-primary/80 border border-primary"
              >
                <a href="tel:502039656">
                  <Phone className="w-5 h-5 mr-2" />
                  Zadzwoń teraz
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="flex-1 border-2 py-3 hover:border-primary hover:bg-primary/10 hover:text-primary hover:ring-0 hover:ring-primary"
              >
                <a
                  href="https://maps.app.goo.gl/HWX37pZekSkNgSdb7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Nawiguj
                </a>
              </Button>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="p-2 bg-background border-border overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1639.6335825043345!2d18.487094162695577!3d54.46660596071166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fda05540b642d7%3A0xfb19d4a3ed9bc896!2sPodolog%20Katarzyna%20Buczy%C5%88ska!5e0!3m2!1spl!2spl!4v1771242470323!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa dojazdu do Gabinetu Podologicznego"
                className="rounded-lg"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
