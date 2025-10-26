import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LeadForm from "@/components/LeadForm";
import { programs } from "@/data/programs";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";
import NotFound from "./NotFound";

const ProgramDetail = () => {
  const { slug } = useParams();
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return <NotFound />;
  }

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[400px] overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 pb-12">
            <div className="container mx-auto px-4">
              <div className="inline-block px-4 py-2 bg-secondary/90 text-secondary-foreground text-sm font-medium rounded-full mb-4">
                {program.ageRange}
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
                {program.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-12">
              {/* About */}
              <div className="space-y-4 animate-fade-in">
                <h2 className="font-heading text-3xl font-bold">Program Hakkında</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {program.fullDescription}
                </p>
                <Button onClick={scrollToForm} size="lg" className="rounded-xl">
                  Bilgi Al
                </Button>
              </div>

              {/* Benefits */}
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-heading text-3xl font-bold">Kazanımlar</h2>
                <div className="grid gap-4">
                  {program.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-muted/30 rounded-xl"
                    >
                      <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="space-y-6 animate-fade-in">
                <h2 className="font-heading text-3xl font-bold">
                  Sık Sorulan Sorular
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {program.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Lead Form */}
              <div id="lead-form" className="space-y-6 animate-fade-in">
                <h2 className="font-heading text-3xl font-bold text-center">
                  Hemen Başlayın
                </h2>
                <div className="bg-card p-8 rounded-2xl shadow-lg border">
                  <LeadForm programId={program.id} />
                </div>
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
