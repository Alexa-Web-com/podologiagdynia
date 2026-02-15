import { Mail, Phone } from "lucide-react";
import Facebook from "../assets/teal_facebook.svg";
import Instagram from "../assets/teal_instagram.svg";
import Youtube from "../assets/teal_youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Gabinet Podologiczny<br />
              Katarzyna Buczyńska
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Profesjonalna opieka podologiczna z wieloletnim doświadczeniem w Gdyni.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Kontakt</h4>
            <div className="space-y-3 text-muted-foreground">
              <a
                href="tel:502039656"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                502 039 656
              </a>
              <p className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1" />
                <span>ul. Waleriana Szefki 2F/B1<br />81-572 Gdynia</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Media społecznościowe</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Gdynia.Podolog"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <img src={Facebook} className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <img src={Instagram} className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Youtube"
              >
                <img src={Youtube} className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Gabinet Podologiczny Katarzyna Buczyńska. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
