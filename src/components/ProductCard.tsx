import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category: string;
  condition?: string;
  isNew?: boolean;
}

export const ProductCard = ({ image, name, price, category, condition, isNew }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-card">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {isNew && (
          <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
            New
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {category}
          </p>
          <h3 className="font-semibold text-lg text-foreground line-clamp-2 min-h-[3.5rem]">
            {name}
          </h3>
          {condition && (
            <p className="text-sm text-muted-foreground">
              Condition: {condition}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-2xl font-bold text-foreground">{price}</span>
          <Button 
            size="icon" 
            className="bg-primary hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
