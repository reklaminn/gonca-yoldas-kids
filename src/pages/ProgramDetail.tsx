import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { programs } from "@/data/programs";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check, Calendar, Clock, Users, Star } from "lucide-react";
import NotFound from "./NotFound";

const ProgramDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return <NotFound />;
  }

  const handleRegister = () => {
    navigate(`/kayit/${slug}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Info Section */}
        <section className="py-8 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center bg-card rounded-2xl p-6 shadow-lg border">
                {/* Instructor */}
                <div className="flex flex-col items-center text-center space-y-2">
                  <img
                    src={program.instructor.image}
                    alt={program.instructor.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                  />
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">EĞİTMEN</p>
                    <p className="font-bold text-lg">{program.instructor.name}</p>
                  </div>
                </div>

                {/* Duration */}
                <div className="text-center border-l-0 md:border-l pl-0 md:pl-6">
                  <p className="text-sm text-muted-foreground font-medium mb-1">SÜRE</p>
                  <p className="font-bold text-xl">{program.duration}</p>
                </div>

                {/* Date */}
                <div className="text-center border-l-0 md:border-l pl-0 md:pl-6">
                  <p className="text-sm text-muted-foreground font-medium mb-1">TARİH</p>
                  <p className="font-bold text-xl">{program.startDate}</p>
                </div>

                {/* Price & CTA */}
                <div className="text-center border-l-0 md:border-l pl-0 md:pl-6 space-y-3">
                  <p className="text-3xl font-bold text-primary">
                    {program.price.toLocaleString('tr-TR')} ₺
                  </p>
                  <Button 
                    onClick={handleRegister} 
                    size="lg" 
                    className="w-full bg-[#2D2A4A] hover:bg-[#2D2A4A]/90 text-white rounded-xl font-bold"
                  >
                    PROGRAMA KATIL
                  </Button>
                </div>
              </div>

              {/* Program Title & Subtitle */}
              <div className="mt-8 text-center space-y-4">
                <h1 className="font-heading text-4xl md:text-5xl font-bold">
                  {program.title}
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-semibold">
                  {program.ageRange} - {program.description.split('.')[0]}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-16">
              
              {/* Program Tanıtım */}
              <div className="space-y-4 animate-fade-in">
                <p className="text-lg text-foreground leading-relaxed">
                  {program.fullDescription}
                </p>
              </div>

              {/* Neden Bu Eğitim */}
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-heading text-3xl font-bold border-b-4 border-primary inline-block pb-2">
                  Neden Bu Eğitim?
                </h2>
                <div className="grid gap-4">
                  {program.whyThisEducation.map((reason, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-primary/5 rounded-xl border border-primary/10"
                    >
                      <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">{reason}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kazanımlar */}
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-heading text-3xl font-bold border-b-4 border-secondary inline-block pb-2">
                  Kazanımlar
                </h2>
                <div className="grid gap-4">
                  {program.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-secondary/5 rounded-xl border border-secondary/10"
                    >
                      <Check className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eğitimde Neler Var */}
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-heading text-3xl font-bold border-b-4 border-accent inline-block pb-2">
                  Eğitimde Neler Var?
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {program.whatIsIncluded.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-accent/5 rounded-xl border border-accent/10"
                    >
                      <Check className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eğitim İçeriği */}
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-heading text-3xl font-bold border-b-4 border-primary inline-block pb-2">
                  Eğitim İçeriği
                </h2>
                <div className="space-y-4">
                  {program.curriculum.map((item, index) => (
                    <div
                      key={index}
                      className="p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border"
                    >
                      <h3 className="font-bold text-xl mb-3 text-primary">{item.week}</h3>
                      <ul className="space-y-2">
                        {item.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-secondary mt-1">•</span>
                            <span className="text-foreground">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eğitim Başlangıcı ve Ders Günleri */}
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-heading text-3xl font-bold border-b-4 border-secondary inline-block pb-2">
                  Eğitim Başlangıcı ve Ders Günleri
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-card rounded-xl border shadow-sm text-center">
                    <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">Başlangıç</p>
                    <p className="font-bold text-lg">{program.schedule.startDate}</p>
                  </div>
                  <div className="p-6 bg-card rounded-xl border shadow-sm text-center">
                    <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">Ders Günleri</p>
                    <p className="font-bold text-lg">{program.schedule.days}</p>
                  </div>
                  <div className="p-6 bg-card rounded-xl border shadow-sm text-center">
                    <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                    <p className="text-sm text-muted-foreground mb-2">Ders Saati</p>
                    <p className="font-bold text-lg">{program.schedule.time}</p>
                  </div>
                </div>
              </div>

              {/* Ücreti ve Kayıt Bilgisi */}
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-heading text-3xl font-bold border-b-4 border-accent inline-block pb-2">
                  Ücreti ve Kayıt Bilgisi
                </h2>
                <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 border-2 border-primary/20">
                  <div className="text-center space-y-6">
                    <div>
                      <p className="text-muted-foreground text-lg mb-2">Program Ücreti</p>
                      <p className="text-5xl font-bold text-primary">
                        {program.price.toLocaleString('tr-TR')} ₺
                      </p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-muted-foreground">
                        ✓ Taksit seçenekleri mevcuttur
                      </p>
                      <p className="text-muted-foreground">
                        ✓ Kayıt sonrası tüm materyallere anında erişim
                      </p>
                    </div>
                    <Button 
                      onClick={handleRegister} 
                      size="lg" 
                      className="bg-[#2D2A4A] hover:bg-[#2D2A4A]/90 text-white rounded-xl font-bold text-lg px-12 py-6"
                    >
                      HEMEN KAYIT OL
                    </Button>
                  </div>
                </div>
              </div>

              {/* Kursa Katılanlar Neler Söyledi */}
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-heading text-3xl font-bold border-b-4 border-primary inline-block pb-2">
                  Kursa Katılanlar Neler Söyledi?
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {program.testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="p-6 bg-card rounded-xl border shadow-sm"
                    >
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                      <p className="font-bold text-primary">— {testimonial.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sık Sorulan Sorular */}
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-heading text-3xl font-bold border-b-4 border-secondary inline-block pb-2">
                  Sık Sorulan Sorular
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {program.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-semibold text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProgramDetail;
