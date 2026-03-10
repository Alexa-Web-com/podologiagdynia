import { Card } from "@/components/ui/card";
import { Info } from "lucide-react";

const Pricing = () => {
  const services = [
    { name: "Konsultacja podologiczna dorosłych", price: "100 zł" },
    {
      name: "Konsultacja podologiczna dzieci i niemowląt przeprowadzona wraz z wywiadem rodzica/opiekuna",
      price: "120 zł",
    },
    { name: "Pedicure podstawowy", price: "180 zł" },
    {
      name: "Zabieg podologiczny przy użyciu specjalistycznych narzędzi",
      price: "200 zł",
    },
    {
      name: "Zabieg podologiczny  rozszerzony, wykonany po raz pierwszy lub po długim okresie przerwy",
      price: "250 zł",
    },
    {
      name: "Pedicure medyczny przeznaczony dla osób z problemami skóry stóp (m.in. rogowiec, łuszczyca, grzybica, keratoliza dziobata)",
      price: "280 zł",
    },
    { name: "Opracowanie i terapia pękających pięt", price: "170 zł" },
    { name: "Terapia wrastających paznokci", price: "120 zł" },
    { name: "Usunięcie modzela/modzeli", price: "120 - 200 zł" },
    { name: "Usunięcie odcisku", price: "90 zł" },
    { name: "Usunięcie odcisku w podstawowym zabiegu", price: "40 zł" },
    {
      name: "Odciążenie miejscowe w postaci indywidualnej wkładki odciążeniowej PWO15 , najczęściej po zabiegu usunięcia modzeli, odcisków lub pęknięć",
      price: "200 zł",
    },
    {
      name: "Pielęgnacja paznokci zdrowych: obcięcie, oczyszczenie oraz opracowanie wałów paznokciowych",
      price: "120 zł",
    },
    {
      name: "Specjalistyczne opracowanie paznokci przerośniętych/zgrubiałych",
      price: "150 zł",
    },
    {
      name: "Opracowanie paznokci zgrubiałych, zmienionych chorobowo",
      price: "250 zł",
    },
    { name: "Rekonstrukcja paznokcia", price: "150 zł" },
    { name: "Usuwanie krwiaka podpaznokciowego", price: "190 zł" },
    { name: "Terapia paznokci wrastających lub wkręcających:", price: "" },
    {
      name: "Zabieg przy użyciu Kostki Arkady 1 paznokieć",
      price: "350 zł",
      style: "pl-10",
    },
    {
      name: "Korekta po zabiegu Kostki Arkady",
      price: "200 zł",
      style: "pl-10",
    },
    {
      name: "Paznokieć wrastający w stanie zapalnym, usunięcie elementu drażniącego, oczyszczenie wraz z założeniem klamry ortonyksyjnej - pierwsza wizyta",
      price: "350 zł",
      style: "pl-10",
    },
    {
      name: "Paznokieć wrastający w stanie zapalnym, bez założenia klamry - pierwsza wizyta",
      price: "200 zł",
      style: "pl-10",
    },
    {
      name: "Założenie klamry ortonyksyjnej na 1 paznokieć",
      price: "220 zł",
      style: "pl-10",
    },
    {
      name: "Założenie klamry ortonyksyjnej na 2 paznokcie",
      price: "400 zł",
      style: "pl-10",
    },
    {
      name: "Wizyta kontrolna przełożenie klamry 1 paznokieć",
      price: "170 zł",
      style: "pl-10",
    },
    {
      name: "Wizyta kontrolna przełożenie klamry 2 paznokcie",
      price: "250 zł",
      style: "pl-10",
    },
    {
      name: "Kontrola i zmiana opatrunku w terapii wrastającego paznokcia",
      price: "120 zł",
      style: "pl-10",
    },
    {
      name: "Terapia brodawki wirusowej  pierwsza wizyta , oczyszczenie , dobór metody terapii, zalecenia",
      price: "120 zł",
    },
    {
      name: "Terapia brodawek mnogich pierwsza wizyta, oczyszczenie, dobór metody terapii, zalecenia",
      price: "250 zł",
    },
    {
      name: "W przypadku nagłej wizyty w dniach wolnych od pracy lub podczas dni świątecznych doliczana jest dodatkowa opłata w wysokości",
      price: "200 zł",
    },
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
            Przejrzysta polityka cenowa dostosowana do zakresu świadczonych
            usług
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-background border-border animate-fade-in">
            <div className="space-y-4 mb-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`${service.style ? service.style : ""} flex justify-between gap-4 items-center py-4 border-b border-border last:border-0`}
                >
                  <span className="text-foreground font-medium">
                    {service.name}
                  </span>
                  <span className="text-primary font-semibold text-lg whitespace-nowrap">
                    {service.price}
                  </span>
                </div>
              ))}
            </div>

            <Card className="p-6 bg-primary/10 border-primary/30">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Niniejszy cennik nie stanowi oferty w rozumieniu art. 66 § 1
                    kc i następne, lecz jest jedyniem zaproszeniem do zawarcia
                    umowy zgodnie z treścią art. 71 kc.
                    <br />
                    Ceny mogą się różnić w zależności od indywidualnych potrzeb
                    pacjenta oraz stopnia zaawansowania problemu. Dokładna
                    wycena zostanie ustalona podczas konsultacji.
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
