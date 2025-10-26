import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4 animate-fade-in">
              <h1 className="font-heading text-4xl md:text-5xl font-bold">
                İletişim
              </h1>
              <p className="text-lg text-muted-foreground">
                Size nasıl yardımcı olabiliriz? Aşağıdaki formu doldurarak bizimle
                iletişime geçebilirsiniz.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-2xl font-bold mb-6">
                    İletişim Bilgileri
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">E-posta</p>
                        <a
                          href="mailto:info@goncayoldas.com"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@goncayoldas.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Telefon</p>
                        <a
                          href="tel:+905XXXXXXXXX"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +90 5XX XXX XX XX
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Konum</p>
                        <p className="text-muted-foreground">
                          İstanbul, Türkiye
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-bold mb-4">
                    Çalışma Saatleri
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                    <p>Cumartesi: 10:00 - 14:00</p>
                    <p>Pazar: Kapalı</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-lg border">
                <h2 className="font-heading text-2xl font-bold mb-6">
                  Bize Ulaşın
                </h2>
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
