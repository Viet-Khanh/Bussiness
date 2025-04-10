import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Home, ShoppingBag } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <Card className="border-primary/10 overflow-hidden">
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-8 flex justify-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
          </div>
          
          <CardContent className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Cảm ơn bạn đã đặt hàng!</h1>
            <p className="text-muted-foreground mb-6">
              Đơn hàng của bạn đã được tiếp nhận và đang được xử lý. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
            </p>
            
            <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/30 mb-8 text-left">
              <h3 className="font-medium mb-4">Thông tin đơn hàng</h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-muted-foreground">Mã đơn hàng:</span> <span className="font-medium">VS-{Date.now().toString().slice(-6)}</span></p>
                <p><span className="text-muted-foreground">Trạng thái:</span> <span className="font-medium text-amber-600 dark:text-amber-400">Đang xử lý</span></p>
                <p><span className="text-muted-foreground">Phương thức thanh toán:</span> <span className="font-medium">Chuyển khoản ngân hàng</span></p>
                <p><span className="text-muted-foreground">Trạng thái thanh toán:</span> <span className="font-medium text-amber-600 dark:text-amber-400">Đang xác nhận</span></p>
              </div>
            </div>
            
            <p className="mb-8">
              Chúng tôi đã gửi email xác nhận đơn hàng đến địa chỉ email của bạn. Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi qua email hoặc số điện thoại được cung cấp trong email.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="rounded-full">
                <Link href="/" className="gap-2">
                  <Home className="h-4 w-4" />
                  <span>Về trang chủ</span>
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-primary/20 hover:bg-primary/10">
                <Link href="/shop" className="gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  <span>Tiếp tục mua sắm</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
