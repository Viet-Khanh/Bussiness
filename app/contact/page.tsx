"use client"

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Facebook, Instagram, MessageSquare, Phone, Mail, Clock, MapPin, CheckCircle } from "lucide-react";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Giả lập gửi form
    setTimeout(() => {
      toast({
        title: "Gửi thành công!",
        description: "Chúng tôi đã nhận được tin nhắn của bạn và sẽ phản hồi sớm nhất có thể.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header với gradient */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3 gradient-heading">Liên Hệ Với Chúng Tôi</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7. Hãy liên hệ với chúng tôi qua các kênh dưới đây hoặc gửi tin nhắn trực tiếp.
          </p>
        </div>
        
        {/* Banner hỗ trợ với gradient và hiệu ứng */}
        <div className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-6 mb-12 shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-lg md:text-xl font-bold mb-1 md:mb-2">Kadix Solutions - Giải Pháp & Hỗ Trợ Chuyên Nghiệp</h2> {/* Updated Title */}
              <p className="text-white/90 text-xs md:text-sm mb-1">Hỗ trợ kỹ thuật & Bảo hành 1 năm cho mọi sản phẩm.</p>
              <div className="flex items-center gap-2 text-white/90 text-xs md:text-sm">
                <CheckCircle className="h-4 w-4" />
                <span>Cam kết phản hồi yêu cầu trong 24 giờ.</span>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-white/10 p-1 rounded-lg backdrop-blur-sm">
                <Image 
                  src="https://placehold.co/150x75/ffffff/5C7F89?text=Kadix+Solutions" // Updated Image Text
                  alt="Kadix Solutions Support" // Updated Alt Text
                  width={150}
                  height={75}
                  className="rounded-md shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Thông tin liên hệ và form */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-primary/10 shadow-md hover-card">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-lg">
              <CardTitle className="text-primary">Thông Tin Liên Hệ</CardTitle>
              <CardDescription>Các kênh liên hệ chính thức của chúng tôi</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Điện thoại & Zalo</h3>
                    <p className="text-muted-foreground">0812928500</p>
                    <p className="text-sm text-muted-foreground mt-1">Hỗ trợ trực tiếp qua điện thoại và Zalo</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full">
                    <Facebook className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Facebook</h3>
                    <p className="text-muted-foreground">Trần Anh Premium</p> {/* Consider updating if needed */}
                    <p className="text-sm text-muted-foreground mt-1">Cập nhật thông tin và hỗ trợ qua Facebook</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 dark:bg-pink-900/20 p-3 rounded-full">
                    <Instagram className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Instagram</h3>
                    <p className="text-muted-foreground">@trananhpremium.official</p> {/* Consider updating if needed */}
                    <p className="text-sm text-muted-foreground mt-1">Theo dõi chúng tôi trên Instagram</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-muted-foreground">support@kadixsolutions.com</p> {/* Updated Email */}
                    <p className="text-sm text-muted-foreground mt-1">Gửi yêu cầu hỗ trợ qua email</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Giờ làm việc</h3>
                    <p className="text-muted-foreground">10h00 đến 00h00 hàng ngày (kể cả ngày lễ)</p>
                    <p className="text-sm text-muted-foreground mt-1">Chúng tôi sẽ hỗ trợ <span className="font-medium">nhanh chóng trong vòng 24h</span> sau khi nhận được yêu cầu.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-primary/10 shadow-md hover-card">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-lg">
              <CardTitle className="text-primary">Gửi Tin Nhắn</CardTitle>
              <CardDescription>Điền thông tin của bạn và chúng tôi sẽ liên hệ lại sớm</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium">Họ và tên</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="rounded-md border-primary/20 focus-visible:ring-primary"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="rounded-md border-primary/20 focus-visible:ring-primary"
                    placeholder="example@gmail.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-sm font-medium">Tiêu đề</Label>
                  <Input 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                    className="rounded-md border-primary/20 focus-visible:ring-primary"
                    placeholder="Vấn đề cần hỗ trợ"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">Tin nhắn</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    className="rounded-md border-primary/20 focus-visible:ring-primary"
                    placeholder="Mô tả chi tiết vấn đề của bạn..."
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full rounded-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
        
        {/* Bản đồ và thông tin văn phòng */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-12 hover-card">
          <div className="grid md:grid-cols-3">
            <div className="p-8 md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 gradient-heading">Thông Tin Liên Hệ</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full">
                    <Facebook className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Facebook</h3>
                    <p className="text-muted-foreground">Trần Anh Premium</p> {/* Consider updating if needed */}
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-pink-100 dark:bg-pink-900/20 p-3 rounded-full">
                    <Instagram className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Instagram</h3>
                    <p className="text-muted-foreground">@trananhpremium.official</p> {/* Consider updating if needed */}
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full">
                    <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.0099 0C5.3839 0 0 5.3839 0 12.0099C0 18.0284 4.3434 22.9634 10.0499 23.8843V15.4839H7.0301V12.0099H10.0499V9.3584C10.0499 6.3488 11.8408 4.6877 14.5761 4.6877C15.8824 4.6877 17.2486 4.9219 17.2486 4.9219V7.8741H15.7386C14.2538 7.8741 13.7698 8.8042 13.7698 9.7564V12.0099H17.1144L16.5705 15.4839H13.7698V23.8843C19.4763 22.9634 23.8197 18.0285 23.8197 12.0099C23.8197 5.3839 18.4358 0 12.0099 0Z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Zalo</h3>
                    <p className="text-muted-foreground">0812928500</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Messenger</h3>
                    <p className="text-muted-foreground">m.me/trananhpremium</p> {/* Consider updating if needed */}
                  </div>
                </div>
                
                <div className="flex items-center gap-4 md:col-span-2">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Địa chỉ</h3>
                    <p className="text-muted-foreground">Hà Nội, Việt Nam</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-accent text-white p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Giờ Làm Việc</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-white/80" />
                  <div>
                    <p className="font-medium">10h00 - 00h00</p>
                    <p className="text-sm text-white/80">Tất cả các ngày trong tuần</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-white/80" />
                  <div>
                    <p className="font-medium">Hỗ trợ 24/7</p>
                    <p className="text-sm text-white/80">Kể cả ngày lễ</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full bg-white text-primary hover:bg-white/90 hover:text-primary/90 rounded-full shadow-md">
                  <Phone className="mr-2 h-4 w-4" />
                  Gọi ngay
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <Card className="border-primary/10 shadow-lg mb-12 hover-card">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-lg">
            <CardTitle className="text-primary">Câu Hỏi Thường Gặp</CardTitle>
            <CardDescription>Những thắc mắc phổ biến của khách hàng</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="p-5 bg-primary/5 rounded-lg border border-primary/10 transition-all duration-300 hover:border-primary/30">
                <h3 className="font-medium text-lg mb-2 text-primary">Làm thế nào để mua sản phẩm source code?</h3>
                <p className="text-muted-foreground">
                  Bạn có thể mua sản phẩm source code trực tiếp trên trang web của chúng tôi. 
                  Sau khi thanh toán, bạn sẽ nhận được link tải về sản phẩm qua email.
                </p>
              </div>
              
              <div className="p-5 bg-primary/5 rounded-lg border border-primary/10 transition-all duration-300 hover:border-primary/30">
                <h3 className="font-medium text-lg mb-2 text-primary">Các sản phẩm có được hỗ trợ kỹ thuật không?</h3>
                <p className="text-muted-foreground">
                  Có, tất cả các sản phẩm của chúng tôi đều được hỗ trợ kỹ thuật trong vòng 365 ngày 
                  kể từ ngày mua. Nếu bạn cần hỗ trợ thêm, vui lòng liên hệ với chúng tôi.
                </p>
              </div>
              
              <div className="p-5 bg-primary/5 rounded-lg border border-primary/10 transition-all duration-300 hover:border-primary/30">
                <h3 className="font-medium text-lg mb-2 text-primary">Tôi có thể yêu cầu tùy chỉnh sản phẩm không?</h3>
                <p className="text-muted-foreground">
                  Có, chúng tôi cung cấp dịch vụ tùy chỉnh sản phẩm theo yêu cầu. Vui lòng liên hệ 
                  với chúng tôi để biết thêm chi tiết và báo giá.
                </p>
              </div>
              
              <div className="p-5 bg-primary/5 rounded-lg border border-primary/10 transition-all duration-300 hover:border-primary/30">
                <h3 className="font-medium text-lg mb-2 text-primary">Làm thế nào để nhận hỗ trợ kỹ thuật?</h3>
                <p className="text-muted-foreground">
                  Bạn có thể liên hệ với chúng tôi qua form liên hệ trên trang web, hoặc qua Zalo, Facebook, Instagram. 
                  Chúng tôi sẽ phản hồi trong vòng 24 giờ.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Form yêu cầu báo giá */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3 gradient-heading">Yêu Cầu Báo Giá</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Điền thông tin dưới đây để nhận báo giá chi tiết cho dự án của bạn. Chúng tôi sẽ liên hệ trong thời gian sớm nhất.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-primary/10">
            <QuoteRequestForm />
          </div>
        </div>
        
        {/* Hỗ trợ trực tuyến */}
        <div className="bg-gradient-to-r from-primary to-accent text-white rounded-xl p-8 shadow-lg transform hover:scale-[1.01] transition-transform duration-300">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Bạn có câu hỏi cần hỗ trợ?</h2>
              <p className="text-white/90 mb-2">Hãy liên hệ với chúng tôi qua Zalo / Instagram / Messenger!</p>
              <p className="text-white/90">Chúng tôi sẵn sàng hỗ trợ bạn 24/7</p>
            </div>
            <div className="mt-6 md:mt-0 flex gap-4">
              <Button 
                size="sm" 
                className="bg-white text-primary hover:bg-white/90 hover:text-primary/90 rounded-full shadow-md"
              >
                <Phone className="mr-2 h-4 w-4" />
                Gọi ngay
              </Button>
              <Button 
                size="sm" 
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white rounded-full shadow-md border border-white/30"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Inbox ngay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
