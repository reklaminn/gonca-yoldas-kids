import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/ProgramCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import BlogCard from "@/components/BlogCard";
import LeadForm from "@/components/LeadForm";
import { programs } from "@/data/programs";
import { blogPosts } from "@/data/blog";
import heroImage from "@/assets/hero-teacher-child.jpg";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/30 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Çocuğunuza İkinci Bir Dil Kazandırmak Artık Daha Kolay
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                0-10 yaş arası çocuklar için bilimsel temelli İngilizce edinim programları
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-xl shadow-lg">
                  <Link to="/programlar">Programları Keşfet</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl">
                  <Link to="/iletisim">Bilgi Al</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/programlar?age=0-2">
                  <div className="px-6 py-3 bg-card hover:bg-primary/10 rounded-xl border-2 border-border hover:border-primary transition-all cursor-pointer">
                    <p className="font-heading font-semibold">0-2 Yaş</p>
                    <p className="text-xs text-muted-foreground">Bebekler</p>
                  </div>
                </Link>
                <Link to="/programlar?age=2-5">
                  <div className="px-6 py-3 bg-card hover:bg-secondary/10 rounded-xl border-2 border-border hover:border-secondary transition-all cursor-pointer">
                    <p className="font-heading font-semibold">2-5 Yaş</p>
                    <p className="text-xs text-muted-foreground">Okul Öncesi</p>
                  </div>
                </Link>
                <Link to="/programlar?age=5-10">
                  <div className="px-6 py-3 bg-card hover:bg-accent/10 rounded-xl border-2 border-border hover:border-accent transition-all cursor-pointer">
                    <p className="font-heading font-semibold">5-10 Yaş</p>
                    <p className="text-xs text-muted-foreground">İlkokul</p>
                  </div>
                </Link>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="aspect-square lg:aspect-auto lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Öğretmen ve öğrenci"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Programlarımız
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Her yaş grubuna özel, bilimsel yöntemlerle tasarlanmış İngilizce edinim programları
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.id} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Velilerimiz Ne Diyor?
            </h2>
            <p className="text-lg text-muted-foreground">
              Programlarımızdan yararlanan ailelerin deneyimleri
            </p>
          </div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
                Blog
              </h2>
              <p className="text-muted-foreground">
                Çift dilli eğitim hakkında faydalı yazılar
              </p>
            </div>
            <Button asChild variant="outline" className="rounded-xl">
              <Link to="/blog">Tümünü Gör</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Hemen Başlayın
            </h2>
            <p className="text-lg text-muted-foreground">
              Size en uygun programı birlikte belirleyelim. Formu doldurun, ekibimiz sizinle iletişime geçsin.
            </p>
          </div>

          <div className="bg-card p-8 rounded-2xl shadow-lg border">
            <LeadForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
