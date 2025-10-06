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
    <section id={id} className="py-24 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="animate-fade-in">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
