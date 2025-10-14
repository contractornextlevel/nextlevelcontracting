import { ProductCard } from "./ProductCard";

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
  category: string;
  condition?: string;
  isNew?: boolean;
}

interface ProductGridProps {
  products: Product[];
  title: string;
  subtitle?: string;
  id?: string;
}

export const ProductGrid = ({ products, title, subtitle, id }: ProductGridProps) => {
  return (
    <section id={id} className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mt-6" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
