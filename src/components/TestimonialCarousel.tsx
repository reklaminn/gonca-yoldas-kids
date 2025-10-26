import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ayşe K.",
    text: "Bebeğimle Evde İngilizce programı sayesinde oğlum 2 yaşında iki dilli büyüyor. Gonca Hoca'nın rehberliği çok değerli.",
    childAge: "2 yaş",
  },
  {
    id: 2,
    name: "Mehmet Y.",
    text: "5 yaşındaki kızım online dersleri çok seviyor. Oyun gibi öğreniyor, zorlanmıyor. Artık günlük hayatta İngilizce kelimeler kullanıyor.",
    childAge: "5 yaş",
  },
  {
    id: 3,
    name: "Zeynep A.",
    text: "Bilimsel temelli bir yaklaşım arayanlar için harika bir program. Çocuğumla birlikte ben de çok şey öğrendim.",
    childAge: "3 yaş",
  },
];

const TestimonialCarousel = () => {
  return (
    <Carousel className="w-full max-w-4xl mx-auto">
      <CarouselContent>
        {testimonials.map((testimonial) => (
          <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
            <Card className="border-2">
              <CardContent className="p-6 space-y-4">
                <Quote className="h-8 w-8 text-primary opacity-50" />
                <p className="text-sm leading-relaxed">{testimonial.text}</p>
                <div className="pt-2 border-t">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    Çocuk yaşı: {testimonial.childAge}
                  </p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default TestimonialCarousel;
