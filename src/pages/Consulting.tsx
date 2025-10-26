import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GraduationCap, FileText, Users, CheckCircle } from "lucide-react";

const Consulting = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Öğretmen Eğitimi",
      description:
        "Çift dilli eğitim konusunda öğretmenlere profesyonel gelişim programları sunuyoruz.",
    },
    {
      icon: FileText,
      title: "Müfredat Geliştirme",
      description:
        "Kurumunuzun ihtiyaçlarına özel, bilimsel temelli müfredat tasarlama hizmeti.",
    },
    {
      icon: Users,
      title: "Sınıf İçi Uygulama",
      description:
        "Öğretmenlerinize sınıf içi uygulamalarda mentorluk ve destek sağlama.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="font-heading text-4xl md:text-5xl font-bold">
                Eğitim Kurumlarına Danışmanlık
              </h1>
              <p className="text-xl text-muted-foreground">
                Anaokulları ve ilkokullar için çift dilli eğitim danışmanlığı hizmetleri
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Hizmetlerimiz
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Kurumunuza özel çözümler sunuyoruz
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="text-center space-y-4 p-8 rounded-2xl bg-card border hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              <div className="bg-muted/30 rounded-2xl p-8 space-y-6">
                <h3 className="font-heading text-2xl font-bold">
                  Neden Bizimle Çalışmalısınız?
                </h3>
                <ul className="space-y-4">
                  {[
                    "10+ yıllık çift dilli eğitim deneyimi",
                    "Bilimsel araştırmalara dayalı yöntemler",
                    "Kurumunuzun ihtiyaçlarına özel çözümler",
                    "Uygulamalı eğitim ve sürekli destek",
                    "Ölçülebilir sonuçlar ve düzenli değerlendirme",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Kurumunuz İçin Özel Teklif Alın
              </h2>
              <p className="text-lg text-muted-foreground">
                İhtiyaçlarınızı dinlemek ve size en uygun çözümleri sunmak için
                görüşelim.
              </p>
              <Button asChild size="lg" className="rounded-xl">
                <Link to="/iletisim">İletişime Geçin</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Consulting;
