import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image?: string;
}

const BlogCard = ({ title, excerpt, date, slug, image }: BlogCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardContent className="p-6 flex-1 space-y-3">
        <div className="flex items-center text-xs text-muted-foreground">
          <Calendar className="h-3 w-3 mr-1" />
          {date}
        </div>
        <h3 className="font-heading font-semibold text-lg leading-tight">
          <Link
            to={`/blog/${slug}`}
            className="hover:text-primary transition-colors"
          >
            {title}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link
          to={`/blog/${slug}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          Devamını Oku →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
