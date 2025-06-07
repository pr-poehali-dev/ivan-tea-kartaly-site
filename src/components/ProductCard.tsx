import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  weight: string;
  inStock: boolean;
}

const ProductCard = ({
  name,
  description,
  price,
  image,
  weight,
  inStock,
}: ProductCardProps) => {
  return (
    <Card className="bg-black/60 border-red-800/30 hover:border-green-400/50 transition-all duration-300 group">
      <CardHeader className="pb-3">
        <div className="aspect-square bg-gradient-to-br from-red-900/20 to-black/40 rounded-md mb-4 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex items-center justify-between">
          <CardTitle className="text-white text-lg">{name}</CardTitle>
          <span className="text-green-400 text-xl">😊</span>
        </div>
        <p className="text-white/70 text-sm">{description}</p>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="flex items-center justify-between mb-4">
          <Badge
            variant="outline"
            className="text-green-400 border-green-400/30"
          >
            {weight}
          </Badge>
          {inStock ? (
            <Badge className="bg-green-600 text-white">В наличии</Badge>
          ) : (
            <Badge variant="destructive">Нет в наличии</Badge>
          )}
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white">{price} ₽</span>
          <Button
            className={`${
              inStock
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-600 cursor-not-allowed"
            }`}
            disabled={!inStock}
          >
            {inStock ? "В корзину" : "Нет в наличии"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
