import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: string;
  category: string;
  condition?: string;
  isNew?: boolean;
}

export const ProductCard = ({ id, image, name, price, category, condition, isNew }: ProductCardProps) => {
  return (
    <Card className="group relative overflow-hidden border border-border bg-card hover:shadow-lg transition-all duration-300 rounded-xl">
      <Link to={`/product/${id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-secondary/50">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
          
          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/0 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {condition && (
              <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm shadow-lg">
                {condition}
              </Badge>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              {category}
            </p>
            <h3 className="font-semibold text-base text-foreground line-clamp-2 min-h-[3rem] leading-tight group-hover:text-primary transition-colors">
              {name}
            </h3>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-border">
            <span className="text-2xl font-bold text-primary">{price}</span>
            <Button 
              size="sm"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-all rounded-full px-4"
              onClick={(e) => {
                e.preventDefault();
                // Add to cart logic here
              }}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </Link>
    </Card>
  );
};
