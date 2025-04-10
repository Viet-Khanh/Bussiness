"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Copy, Check, MessageCircle, AlertCircle } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";
import { Product, CartItem } from "@/lib/types";
import { getCart } from "@/lib/actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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

// Hàm lấy thông tin chi tiết sản phẩm
const getProductDetails = (productId: number) => {
  return products.find(p => p.id === productId);
};

export default function CheckoutPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    socialLink: "",
    note: ""
  });
  const [copied, setCopied] = useState(false);
  const [paymentStep, setPaymentStep] = useState(1);

  // Thông tin thanh toán mẫu
  const paymentInfo = {
    accountNumber: "0123456789",
    accountName: "CONG TY VIETSOURCE",
    bankName: "Vietcombank",
    amount: calculateTotal(),
    content: `VIETSOURCE ${Date.now().toString().slice(-6)}`
  };

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

  function calculateTotal() {
    return cartItems.reduce((total, item) => {
      const product = getProductDetails(item.productId);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCopyContent = () => {
    navigator.clipboard.writeText(paymentInfo.content);
    setCopied(true);
    toast({
      title: "Đã sao chép",
      description: "Nội dung chuyển khoản đã được sao chép",
      variant: "success",
    });
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Kiểm tra thông tin
    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: "Thiếu thông tin",
        description: "Vui lòng điền đầy đủ thông tin cần thiết",
        variant: "destructive",
      });
      return;
    }

    // Chuyển sang bước thanh toán
    setPaymentStep(2);
    window.scrollTo(0, 0);
  };

  const handleConfirmPayment = () => {
    // Mô phỏng xác nhận thanh toán
    toast({
      title: "Đã xác nhận thanh toán",
      description: "Chúng tôi sẽ kiểm tra và gửi sản phẩm cho bạn trong thời gian sớm nhất",
      variant: "success",
    });
    
    // Chuyển đến trang cảm ơn (sẽ được triển khai sau)
    setTimeout(() => {
      router.push("/thank-you");
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-lg">Đang tải thông tin thanh toán...</p>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center py-16">
            <AlertCircle className="h-16 w-16 text-muted-foreground mb-4" />
            <h1 className="text-2xl font-bold mb-2">Giỏ hàng của bạn đang trống</h1>
            <p className="text-muted-foreground mb-6">Không thể tiến hành thanh toán khi giỏ hàng trống</p>
            <Button asChild className="rounded-full">
              <Link href="/shop">Quay lại mua sắm</Link>
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
          onClick={() => router.push('/cart')}
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Quay lại giỏ hàng</span>
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold ml-4">Thanh toán</h1>
      </div>

      {paymentStep === 1 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Thông tin khách hàng */}
          <div className="lg:col-span-2">
            <Card className="border-primary/10">
              <CardHeader className="border-b border-border">
                <CardTitle>Thông tin khách hàng</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-6">
                    <div className="grid gap-3">
                      <Label htmlFor="fullName">Họ và tên <span className="text-red-500">*</span></Label>
                      <Input 
                        id="fullName" 
                        name="fullName" 
                        placeholder="Nhập họ và tên của bạn" 
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="grid gap-3">
                      <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Nhập địa chỉ email của bạn" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="grid gap-3">
                      <Label htmlFor="phone">Số điện thoại <span className="text-red-500">*</span></Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        placeholder="Nhập số điện thoại của bạn" 
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="grid gap-3">
                      <Label htmlFor="socialLink">Zalo/Facebook/Instagram (tùy chọn)</Label>
                      <Input 
                        id="socialLink" 
                        name="socialLink" 
                        placeholder="Nhập link hoặc số điện thoại Zalo của bạn" 
                        value={formData.socialLink}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="grid gap-3">
                      <Label htmlFor="note">Ghi chú (tùy chọn)</Label>
                      <Textarea 
                        id="note" 
                        name="note" 
                        placeholder="Nhập ghi chú nếu có" 
                        value={formData.note}
                        onChange={handleInputChange}
                        rows={3}
                      />
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button 
                      type="submit"
                      className="w-full rounded-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg"
                    >
                      Tiếp tục thanh toán
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Chi tiết đơn hàng */}
          <div>
            <Card className="border-primary/10 sticky top-4">
              <CardHeader className="border-b border-border">
                <CardTitle>Đơn hàng của bạn</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="divide-y divide-border">
                  {cartItems.map((item) => {
                    const product = getProductDetails(item.productId);
                    if (!product) return null;
                    
                    return (
                      <li key={item.productId} className="py-3 flex justify-between">
                        <div>
                          <p className="font-medium">{product.title}</p>
                          <p className="text-sm text-muted-foreground">SL: {item.quantity}</p>
                        </div>
                        <p className="font-bold">{formatCurrency(product.price * item.quantity)}</p>
                      </li>
                    );
                  })}
                </ul>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tổng tiền hàng</span>
                    <span className="font-medium">{formatCurrency(calculateTotal())}</span>
                  </div>
                  
                  <div className="pt-2 border-t border-border">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Thành tiền</span>
                      <span className="text-primary">{formatCurrency(calculateTotal())}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 text-right">Đã bao gồm VAT (nếu có)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Thông tin thanh toán */}
          <div className="lg:col-span-2">
            <Card className="border-primary/10">
              <CardHeader className="border-b border-border">
                <CardTitle>Thanh toán qua chuyển khoản ngân hàng</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Alert className="mb-6 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
                  <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <AlertTitle className="text-blue-800 dark:text-blue-300">Hướng dẫn thanh toán</AlertTitle>
                  <AlertDescription className="text-blue-700 dark:text-blue-400">
                    Vui lòng chuyển khoản theo thông tin bên dưới. Sau khi chuyển khoản, hãy nhấn nút "Đã thanh toán" để chúng tôi xác nhận và gửi sản phẩm cho bạn.
                  </AlertDescription>
                </Alert>
                
                <div className="grid gap-6">
                  <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/30">
                    <h3 className="font-medium mb-4">Thông tin chuyển khoản</h3>
                    
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-muted-foreground">Số tài khoản:</div>
                        <div className="col-span-2 font-medium">{paymentInfo.accountNumber}</div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-muted-foreground">Tên tài khoản:</div>
                        <div className="col-span-2 font-medium">{paymentInfo.accountName}</div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-muted-foreground">Ngân hàng:</div>
                        <div className="col-span-2 font-medium">{paymentInfo.bankName}</div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-muted-foreground">Số tiền:</div>
                        <div className="col-span-2 font-bold text-primary">{formatCurrency(paymentInfo.amount)}</div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-muted-foreground">Nội dung CK:</div>
                        <div className="col-span-2 flex items-center gap-2">
                          <code className="bg-secondary/20 px-2 py-1 rounded font-medium">{paymentInfo.content}</code>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8 rounded-full"
                            onClick={handleCopyContent}
                          >
                            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/30">
                    <h3 className="font-medium mb-4">Quét mã QR để thanh toán</h3>
                    <div className="flex justify-center">
                      <div className="bg-white p-4 rounded-lg">
                        <img 
                          src="https://placehold.co/300x300/ffffff/1e293b?text=VietQR+Code" 
                          alt="VietQR Payment Code" 
                          className="w-64 h-64 object-contain"
                        />
                      </div>
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      Sử dụng ứng dụng ngân hàng để quét mã QR và thanh toán
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col gap-4">
                  <Button 
                    className="w-full rounded-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg"
                    onClick={handleConfirmPayment}
                  >
                    Đã thanh toán
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full rounded-full border-primary/20 hover:bg-primary/10"
                    onClick={() => setPaymentStep(1)}
                  >
                    Quay lại thông tin khách hàng
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Chi tiết đơn hàng */}
          <div>
            <Card className="border-primary/10 sticky top-4">
              <CardHeader className="border-b border-border">
                <CardTitle>Đơn hàng của bạn</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-4">
                  <h3 className="font-medium mb-2">Thông tin khách hàng</h3>
                  <div className="text-sm space-y-1">
                    <p><span className="text-muted-foreground">Họ tên:</span> {formData.fullName}</p>
                    <p><span className="text-muted-foreground">Email:</span> {formData.email}</p>
                    <p><span className="text-muted-foreground">Điện thoại:</span> {formData.phone}</p>
                    {formData.socialLink && (
                      <p><span className="text-muted-foreground">Liên hệ:</span> {formData.socialLink}</p>
                    )}
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <ul className="divide-y divide-border">
                  {cartItems.map((item) => {
                    const product = getProductDetails(item.productId);
                    if (!product) return null;
                    
                    return (
                      <li key={item.productId} className="py-3 flex justify-between">
                        <div>
                          <p className="font-medium">{product.title}</p>
                          <p className="text-sm text-muted-foreground">SL: {item.quantity}</p>
                        </div>
                        <p className="font-bold">{formatCurrency(product.price * item.quantity)}</p>
                      </li>
                    );
                  })}
                </ul>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tổng tiền hàng</span>
                    <span className="font-medium">{formatCurrency(calculateTotal())}</span>
                  </div>
                  
                  <div className="pt-2 border-t border-border">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Thành tiền</span>
                      <span className="text-primary">{formatCurrency(calculateTotal())}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 text-right">Đã bao gồm VAT (nếu có)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Hỗ trợ trực tuyến */}
      <div className="mt-12 bg-red-600 text-white rounded-xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Cần hỗ trợ thanh toán?</h2>
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
