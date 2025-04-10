"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Heart, Share2, ArrowLeft, Star, MessageCircle, CheckCircle } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { Product } from "@/lib/types";
import { addToCart } from "@/lib/actions";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/hooks/use-toast";

interface ProductDetailProps {
  product: Product;
  allProducts: Product[];
}

export default function ProductDetail({ product, allProducts }: ProductDetailProps) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      await addToCart(product.id, quantity);
      // Kích hoạt sự kiện storage để cập nhật giỏ hàng trong Header
      window.dispatchEvent(new Event('storage'));
      toast({
        title: "Đã thêm vào giỏ hàng",
        description: `${quantity} x ${product.title}`,
        variant: "success",
      });
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

  const handleBuyNow = async () => {
    setIsLoading(true);
    try {
      // Thêm vào giỏ hàng trước
      await addToCart(product.id, quantity);
      // Kích hoạt sự kiện storage để cập nhật giỏ hàng trong Header
      window.dispatchEvent(new Event('storage'));
      // Sau đó chuyển hướng đến trang thanh toán
      router.push('/checkout');
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Không thể xử lý yêu cầu",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        className="mb-6 flex items-center gap-2 hover:bg-secondary/20"
        onClick={() => router.push('/shop')}
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Quay lại cửa hàng</span>
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Hình ảnh sản phẩm */}
        <div className="bg-secondary/10 rounded-lg overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Thông tin sản phẩm */}
        <div>
          <div className="mb-4">
            <Badge variant="outline" className="mb-2">
              {product.category === "n8n-code" ? "n8n Code" : "Source Code Web"}
            </Badge>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`h-4 w-4 ${
                      product.reviews && 
                      product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length >= star 
                        ? "text-yellow-500 fill-yellow-500" 
                        : "text-gray-300"
                    }`} 
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.reviews ? `${product.reviews.length} đánh giá` : "Chưa có đánh giá"}
              </span>
            </div>
            <p className="text-muted-foreground mb-6">{product.description}</p>
          </div>

          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {product.supportInfo && (
            <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
                <div>
                  <h3 className="font-medium text-green-800 dark:text-green-300">Hỗ trợ đặc biệt</h3>
                  <p className="text-green-700 dark:text-green-400 text-sm">{product.supportInfo}</p>
                </div>
              </div>
            </div>
          )}

          <div className="mb-8">
            <p className="text-3xl font-bold text-primary mb-2">{formatCurrency(product.price)}</p>
            <p className="text-sm text-muted-foreground">Đã bao gồm thuế VAT</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex items-center">
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="rounded-r-none"
                disabled={isLoading}
              >
                -
              </Button>
              <div className="px-4 py-2 border-y border-input">
                {quantity}
              </div>
              <Button 
                variant="outline" 
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
                className="rounded-l-none"
                disabled={isLoading}
              >
                +
              </Button>
            </div>
            <Button 
              className="flex-1 bg-amber-500 hover:bg-amber-600 text-white"
              onClick={handleBuyNow}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              ) : null}
              Mua ngay
            </Button>
            <Button 
              variant="outline" 
              className="flex-1 border-primary text-primary hover:bg-primary/10"
              onClick={handleAddToCart}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="h-4 w-4 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2"></div>
              ) : (
                <ShoppingCart className="mr-2 h-4 w-4" />
              )}
              Thêm vào giỏ hàng
            </Button>
          </div>

          <div className="flex gap-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Heart className="mr-2 h-4 w-4" />
              Yêu thích
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              <Share2 className="mr-2 h-4 w-4" />
              Chia sẻ
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="description" className="mb-12">
        <TabsList>
          <TabsTrigger value="description">Mô tả chi tiết</TabsTrigger>
          <TabsTrigger value="reviews">Đánh giá ({product.reviews?.length || 0})</TabsTrigger>
          <TabsTrigger value="support">Hỗ trợ</TabsTrigger>
        </TabsList>
        
        <TabsContent value="description" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: product.detailedDescription || '' }}></div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="reviews" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              {product.reviews && product.reviews.length > 0 ? (
                <div className="space-y-6">
                  {product.reviews.map((review) => (
                    <div key={review.id} className="pb-6 border-b last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium">{review.user}</p>
                          <div className="flex mt-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star 
                                key={star} 
                                className={`h-4 w-4 ${
                                  review.rating >= star 
                                    ? "text-yellow-500 fill-yellow-500" 
                                    : "text-gray-300"
                                }`} 
                              />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">1 tháng trước</span>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-muted-foreground">Chưa có đánh giá nào cho sản phẩm này.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="support" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
                  <h3 className="text-lg font-medium text-blue-800 dark:text-blue-300 mb-2">Hỗ trợ kỹ thuật</h3>
                  <p className="text-blue-700 dark:text-blue-400 mb-4">Đội ngũ kỹ thuật của chúng tôi sẵn sàng hỗ trợ bạn trong quá trình cài đặt và sử dụng sản phẩm.</p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Liên hệ hỗ trợ
                  </Button>
                </div>
                
                <div className="bg-secondary/20 p-6 rounded-lg border border-secondary/30">
                  <h3 className="text-lg font-medium mb-2">Câu hỏi thường gặp</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Làm thế nào để cài đặt sản phẩm?</h4>
                      <p className="text-sm text-muted-foreground">Chúng tôi cung cấp hướng dẫn chi tiết và hỗ trợ cài đặt cho tất cả các sản phẩm.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Tôi có thể tùy chỉnh sản phẩm không?</h4>
                      <p className="text-sm text-muted-foreground">Có, tất cả sản phẩm đều có thể tùy chỉnh theo nhu cầu của bạn.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Chính sách hoàn tiền như thế nào?</h4>
                      <p className="text-sm text-muted-foreground">Chúng tôi cam kết hoàn tiền 100% trong vòng 7 ngày nếu sản phẩm không đáp ứng được nhu cầu của bạn.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Sản phẩm liên quan */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Sản phẩm liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts
            .filter(p => p.id !== product.id && p.category === product.category)
            .slice(0, 4)
            .map(relatedProduct => (
              <Card key={relatedProduct.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2 line-clamp-1">{relatedProduct.title}</h3>
                  <p className="text-primary font-bold">{formatCurrency(relatedProduct.price)}</p>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto mt-2 text-sm"
                    onClick={() => router.push(`/shop/${relatedProduct.id}`)}
                  >
                    Xem chi tiết
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      <Separator className="my-12" />

      {/* Phần CTA cuối trang */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">Bạn cần giải pháp tùy chỉnh?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          Chúng tôi cung cấp dịch vụ phát triển tùy chỉnh để đáp ứng chính xác nhu cầu của doanh nghiệp bạn.
        </p>
        <Button className="bg-primary hover:bg-primary/90">
          Yêu cầu báo giá
        </Button>
      </div>
    </div>
  );
}
