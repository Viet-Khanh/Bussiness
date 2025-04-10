"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Trash2, ArrowLeft, MessageCircle, MinusCircle, PlusCircle } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { Product, CartItem } from "@/lib/types";
import { getCart, updateCartItem, removeFromCart, clearCart } from "@/lib/actions";

// Dữ liệu mẫu cho sản phẩm - sau này sẽ được thay thế bằng API call
const products: Product[] = [
  {
    id: 1,
    title: "E-commerce Template",
    description: "Template hoàn chỉnh cho website bán hàng với Next.js và Tailwind CSS",
    price: 599000,
    category: "web-source",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=E-commerce+Template",
    featured: true,
    tags: ["nextjs", "ecommerce", "responsive"],
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description: "Bảng điều khiển quản trị với đầy đủ tính năng và biểu đồ thống kê",
    price: 799000,
    category: "web-source",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Admin+Dashboard",
    featured: true,
    tags: ["dashboard", "analytics", "admin"],
  },
  {
    id: 3,
    title: "AI Chatbot n8n Workflow",
    description: "Workflow n8n tích hợp chatbot AI với các mô hình ngôn ngữ lớn",
    price: 1299000,
    category: "n8n-code",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=AI+Chatbot+n8n",
    featured: false,
    tags: ["ai", "chatbot", "nlp", "n8n"],
    supportInfo: "Bao gồm hỗ trợ cài đặt miễn phí và tùy chỉnh theo yêu cầu",
  }
];

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const cart = await getCart();
        setCartItems(cart.items);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching cart:", error);
        setIsLoading(false);
      }
    };

    fetchCart();
  }, []);

  const getProductDetails = (productId: number) => {
    return products.find(p => p.id === productId);
  };

  const handleUpdateQuantity = async (productId: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    try {
      await updateCartItem(productId, newQuantity);
      setCartItems(prevItems => 
        prevItems.map(item => 
          item.productId === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Không thể cập nhật số lượng sản phẩm",
        variant: "destructive",
      });
    }
  };

  const handleRemoveItem = async (productId: number) => {
    try {
      await removeFromCart(productId);
      setCartItems(prevItems => prevItems.filter(item => item.productId !== productId));
      toast({
        title: "Đã xóa sản phẩm",
        description: "Sản phẩm đã được xóa khỏi giỏ hàng",
        variant: "default",
      });
    } catch (error) {
      toast({
        title: "Lỗi",
        description: "Không thể xóa sản phẩm khỏi giỏ hàng",
        variant: "destructive",
      });
    }
  };

  const handleApplyCoupon = () => {
    if (couponCode.trim() === "") {
      toast({
        title: "Lỗi",
        description: "Vui lòng nhập mã giảm giá",
        variant: "destructive",
      });
      return;
    }

    // Mô phỏng kiểm tra mã giảm giá
    if (couponCode.toUpperCase() === "VIET10") {
      const subtotal = calculateSubtotal();
      const discountAmount = subtotal * 0.1; // Giảm 10%
      setDiscount(discountAmount);
      toast({
        title: "Áp dụng thành công",
        description: "Mã giảm giá VIET10 đã được áp dụng",
        variant: "success",
      });
    } else {
      toast({
        title: "Mã không hợp lệ",
        description: "Mã giảm giá không tồn tại hoặc đã hết hạn",
        variant: "destructive",
      });
    }
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const product = getProductDetails(item.productId);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  };

  const calculateTotal = () => {
    return calculateSubtotal() - discount;
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Giỏ hàng trống",
        description: "Vui lòng thêm sản phẩm vào giỏ hàng trước khi thanh toán",
        variant: "destructive",
      });
      return;
    }
    
    router.push("/checkout");
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg">Đang tải giỏ hàng...</p>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center py-16">
            <ShoppingCart className="h-16 w-16 text-muted-foreground mb-4" />
            <h1 className="text-2xl font-bold mb-2">Giỏ hàng của bạn đang trống</h1>
            <p className="text-muted-foreground mb-6">Hãy thêm sản phẩm vào giỏ hàng để tiếp tục mua sắm</p>
            <Button asChild className="rounded-full">
              <Link href="/shop">Tiếp tục mua sắm</Link>
            </Button>
          </div>
        </div>
        
        {/* Hỗ trợ trực tuyến */}
        <div className="mt-12 bg-red-600 text-white rounded-xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-2">Bạn có câu hỏi cần hỗ trợ?</h2>
              <p className="text-white/90">Hãy liên hệ với chúng tôi qua Zalo / Instagram / Messenger!</p>
            </div>
            <Button 
              className="mt-4 md:mt-0 bg-white text-red-600 hover:bg-white/90 hover:text-red-700 rounded-full"
              onClick={() => router.push('/contact')}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Inbox ngay
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <Button 
          variant="ghost" 
          className="flex items-center gap-2 hover:bg-secondary/20"
          onClick={() => router.push('/shop')}
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Tiếp tục mua sắm</span>
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold ml-4">Giỏ hàng</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Danh sách sản phẩm */}
        <div className="lg:col-span-2">
          <Card className="border-primary/10">
            <CardHeader className="border-b border-border">
              <CardTitle className="flex justify-between items-center">
                <span>Sản phẩm ({cartItems.length})</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-muted-foreground hover:text-destructive"
                  onClick={async () => {
                    await clearCart();
                    setCartItems([]);
                    toast({
                      title: "Đã xóa giỏ hàng",
                      description: "Tất cả sản phẩm đã được xóa khỏi giỏ hàng",
                      variant: "default",
                    });
                  }}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  <span>Xóa tất cả</span>
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-border">
                {cartItems.map((item) => {
                  const product = getProductDetails(item.productId);
                  if (!product) return null;
                  
                  return (
                    <li key={item.productId} className="p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="w-20 h-20 bg-secondary/10 rounded overflow-hidden flex-shrink-0">
                        <img 
                          src={product.image} 
                          alt={product.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="font-medium mb-1">{product.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{product.category === "n8n-code" ? "n8n Code" : "Source Code Web"}</p>
                        <p className="font-bold text-primary">{formatCurrency(product.price)}</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={() => handleUpdateQuantity(item.productId, item.quantity - 1)}
                        >
                          <MinusCircle className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="h-8 w-8 rounded-full"
                          onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1)}
                        >
                          <PlusCircle className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="text-right">
                        <p className="font-bold mb-2">{formatCurrency(product.price * item.quantity)}</p>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-muted-foreground hover:text-destructive p-0 h-auto"
                          onClick={() => handleRemoveItem(item.productId)}
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          <span>Xóa</span>
                        </Button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Chi tiết đơn hàng */}
        <div>
          <Card className="border-primary/10 sticky top-4">
            <CardHeader className="border-b border-border">
              <CardTitle>Chi tiết đơn hàng</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tổng tiền hàng</span>
                  <span className="font-medium">{formatCurrency(calculateSubtotal())}</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-green-600 dark:text-green-400">
                    <span>Giảm giá</span>
                    <span>-{formatCurrency(discount)}</span>
                  </div>
                )}
                
                <div className="pt-4 border-t border-border">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Thành tiền</span>
                    <span className="text-primary">{formatCurrency(calculateTotal())}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 text-right">Đã bao gồm VAT (nếu có)</p>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex gap-2 mb-4">
                  <Input 
                    placeholder="Nhập mã giảm giá" 
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="rounded-full"
                  />
                  <Button 
                    variant="outline" 
                    className="rounded-full border-primary text-primary hover:bg-primary/10"
                    onClick={handleApplyCoupon}
                  >
                    Áp dụng
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button 
                className="w-full rounded-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg"
                onClick={handleCheckout}
              >
                Thanh toán
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                Bằng cách nhấn "Thanh toán", bạn đồng ý với <Link href="/terms" className="underline">Điều khoản dịch vụ</Link> và <Link href="/privacy" className="underline">Chính sách bảo mật</Link> của chúng tôi.
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Hỗ trợ trực tuyến */}
      <div className="mt-12 bg-red-600 text-white rounded-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Bạn có câu hỏi cần hỗ trợ?</h2>
            <p className="text-white/90">Hãy liên hệ với chúng tôi qua Zalo / Instagram / Messenger!</p>
          </div>
          <Button 
            className="mt-4 md:mt-0 bg-white text-red-600 hover:bg-white/90 hover:text-red-700 rounded-full"
            onClick={() => router.push('/contact')}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Inbox ngay
          </Button>
        </div>
      </div>
    </div>
  );
}
