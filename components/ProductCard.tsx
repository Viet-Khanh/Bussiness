"use client";

import { Product } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { addToCart } from "@/lib/actions";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (productId: number) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLoading(true);
    
    try {
      if (onAddToCart) {
        onAddToCart(product.id);
      } else {
        await addToCart(product.id, 1);
        // Kích hoạt sự kiện storage để cập nhật giỏ hàng trong Header
        window.dispatchEvent(new Event('storage'));
        toast({
          title: "Đã thêm vào giỏ hàng",
          description: `1 x ${product.title}`,
          variant: "success",
        });
      }
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Không thể thêm sản phẩm vào giỏ hàng",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewDetails = () => {
    router.push(`/shop/${product.id}`);
  };

  return (
    <Card className="overflow-hidden flex flex-col hover-card border-primary/10 cursor-pointer" onClick={handleViewDetails}>
      <div className="relative">
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="absolute top-2 right-2 flex gap-2">
          <Button 
            variant="secondary" 
            size="icon" 
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              toast({
                title: "Đã thêm vào danh sách yêu thích",
                description: product.title,
                variant: "default",
              });
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button 
            variant="secondary" 
            size="icon" 
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/shop/${product.id}`);
            }}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>
        {product.featured && (
          <Badge className="absolute top-2 left-2 bg-primary">Nổi bật</Badge>
        )}
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{product.title}</CardTitle>
        </div>
        <Badge variant="outline" className="w-fit">
          {product.category === "n8n-code" ? "n8n Code" : "Source Code Web"}
        </Badge>
        <CardDescription className="line-clamp-2">{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {product.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        {product.supportInfo && (
          <div className="mb-4 p-2 bg-accent/10 rounded text-xs text-accent-foreground">
            <strong>Hỗ trợ:</strong> {product.supportInfo}
          </div>
        )}
        <p className="text-2xl font-bold text-primary">{formatCurrency(product.price)}</p>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full rounded-full flex items-center gap-2"
          onClick={handleAddToCart}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
          ) : (
            <ShoppingCart className="h-4 w-4" />
          )}
          <span>Thêm vào giỏ hàng</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
