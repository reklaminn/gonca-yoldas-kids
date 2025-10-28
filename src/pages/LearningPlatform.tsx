import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Video, Award, Calendar, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LearningPlatform() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Akıllı Öğrenme Platformu
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Çocuklarınız için tasarlanmış interaktif, eğlenceli ve etkili online eğitim deneyimi
              </p>
              <Button size="lg" onClick={() => navigate("/programs")}>
                Programlara Göz At
              </Button>
            </div>
          </div>
        </section>

        {/* Features for Students */}
        <section className="py-16 container">
          <h2 className="text-3xl font-bold text-center mb-12">Öğrenciler İçin</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Video className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Canlı Online Dersler</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Küçük gruplarla interaktif, eğlenceli ve etkili online dersler
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Zengin İçerik</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Videolar, aktiviteler, oyunlar ve pratik alıştırmalar
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle>İlerleme Takibi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Gelişiminizi takip edin ve sertifika kazanın
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features for Parents */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Ebeveynler İçin</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Calendar className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Esnek Program</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Çocuğunuzun programına uygun ders saatleri
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <MessageCircle className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Sürekli Destek</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    WhatsApp destek grubu ve bireysel danışmanlık
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>İlerleme Raporları</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Çocuğunuzun gelişimini detaylı raporlarla takip edin
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 container">
          <Card className="bg-gradient-to-r from-primary to-secondary text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Hemen Başlayın!</h2>
              <p className="text-xl mb-8 opacity-90">
                Çocuğunuzun ikinci dil yolculuğuna bugün başlayın
              </p>
              <Button size="lg" variant="secondary" onClick={() => navigate("/programs")}>
                Programlara Kayıt Ol
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
