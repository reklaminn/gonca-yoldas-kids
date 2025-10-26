import { Link } from "react-router-dom";
import { Instagram, Youtube, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg">Gonca Yoldaş</h3>
            <p className="text-sm text-muted-foreground">
              0-10 yaş arası çocuklar için bilimsel temelli İngilizce edinim programları
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="TikTok"
              >
                <Music className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Programlar</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/programlar" className="text-muted-foreground hover:text-primary transition-colors">
                  Bebeğimle Evde İngilizce
                </Link>
              </li>
              <li>
                <Link to="/programlar" className="text-muted-foreground hover:text-primary transition-colors">
                  Çocuğumla Evde İngilizce
                </Link>
              </li>
              <li>
                <Link to="/programlar" className="text-muted-foreground hover:text-primary transition-colors">
                  Online İngilizce
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Kurumsal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/hakkimda" className="text-muted-foreground hover:text-primary transition-colors">
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link to="/danismanlik" className="text-muted-foreground hover:text-primary transition-colors">
                  Danışmanlık
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="text-muted-foreground hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Yasal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/yasal/gizlilik" className="text-muted-foreground hover:text-primary transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link to="/yasal/kvkk" className="text-muted-foreground hover:text-primary transition-colors">
                  KVKK
                </Link>
              </li>
              <li>
                <Link to="/yasal/mesafeli-satis" className="text-muted-foreground hover:text-primary transition-colors">
                  Mesafeli Satış Sözleşmesi
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Gonca Yoldaş. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
