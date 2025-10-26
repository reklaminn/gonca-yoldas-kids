import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProgramCardProps {
  title: string;
  description: string;
  ageRange: string;
  image: string;
  slug: string;
}

const ProgramCard = ({ title, description, ageRange, image, slug }: ProgramCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 animate-scale-in">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6 space-y-3">
        <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground text-xs font-medium rounded-full">
          {ageRange}
        </div>
        <h3 className="font-heading font-semibold text-xl">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild variant="outline" className="w-full rounded-xl">
          <Link to={`/programlar/${slug}`}>Detaylı İncele</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProgramCard;
