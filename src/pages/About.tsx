import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, BookOpen, Heart, Users } from "lucide-react";
import goncaImage from "@/assets/gonca-yoldas.jpg";

const About = () => {
  const values = [
    {
      icon: BookOpen,
      title: "Bilimsel Yöntem",
      description: "Dil edinimi araştırmalarına dayalı, kanıtlanmış yöntemler",
    },
    {
      icon: Heart,
      title: "Oyunla Öğrenme",
      description: "Çocukların doğal öğrenme biçimine uygun, eğlenceli aktiviteler",
    },
    {
      icon: Users,
      title: "Ebeveyn Desteği",
      description: "Ailelerle birlikte çalışarak çocuğun gelişimini destekleme",
    },
    {
      icon: Award,
      title: "Kanıtlanmış Sonuçlar",
      description: "Yüzlerce ailenin başarı hikayesiyle desteklenmiş programlar",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in">
                <h1 className="font-heading text-4xl md:text-5xl font-bold">
                  Gonca Yoldaş
                </h1>
                <p className="text-2xl text-primary font-heading font-semibold">
                  Dilbilimci & Çift Dilli Eğitim Uzmanı
                </p>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    10 yılı aşkın süredir çocuklara çift dilli eğitim alanında çalışıyorum.
                    Dilbilim eğitimim ve anne olarak kendi deneyimlerimle, yüzlerce aileye
                    çocuklarına ikinci bir dil kazandırma yolculuğunda rehberlik ettim.
                  </p>
                  <p>
                    Her çocuğun benzersiz olduğuna ve doğru yaklaşımla her çocuğun
                    rahatlıkla iki dilli büyüyebileceğine inanıyorum. Misyonum, bilimsel
                    temelli, eğlenceli ve ebeveyn dostu programlarla ailelere destek olmak.
                  </p>
                </div>
                <Button asChild size="lg" className="rounded-xl">
                  <Link to="/iletisim">İletişime Geçin</Link>
                </Button>
              </div>

              <div className="animate-scale-in">
                <div className="relative">
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={goncaImage}
                      alt="Gonca Yoldaş"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                  <div className="absolute -top-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 space-y-4">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Değerlerimiz
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Çalışmalarımızı şekillendiren temel ilkeler
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center space-y-4 p-6 rounded-2xl bg-card border hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Birlikte Başlayalım
              </h2>
              <p className="text-lg text-muted-foreground">
                Çocuğunuz için en uygun programı birlikte belirleyelim.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild size="lg" className="rounded-xl">
                  <Link to="/programlar">Programları İncele</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link to="/iletisim">İletişime Geç</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
