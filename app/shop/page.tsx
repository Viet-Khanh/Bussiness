"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Heart, Eye, Filter, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/ProductCard";
import { Product } from "@/lib/types";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";

// Dữ liệu mẫu cho sản phẩm - sau này có thể thay thế bằng API call
const products: Product[] = [
  {
    id: 1,
    title: "E-commerce Template",
    description: "Template hoàn chỉnh cho website bán hàng với Next.js và Tailwind CSS",
    price: 599000,
    category: "web-source",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=E-commerce+Template",
    featured: true,
    tags: ["nextjs", "ecommerce", "responsive"]
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description: "Bảng điều khiển quản trị với đầy đủ tính năng và biểu đồ thống kê",
    price: 799000,
    category: "web-source",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Admin+Dashboard",
    featured: true,
    tags: ["dashboard", "analytics", "admin"]
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
    supportInfo: "Bao gồm hỗ trợ cài đặt miễn phí và tùy chỉnh theo yêu cầu"
  },
  {
    id: 4,
    title: "Portfolio Template",
    description: "Template portfolio chuyên nghiệp cho lập trình viên và nhà thiết kế",
    price: 399000,
    category: "web-source",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Portfolio",
    featured: false,
    tags: ["portfolio", "creative", "responsive"]
  },
  {
    id: 5,
    title: "Blog CMS",
    description: "Hệ thống quản lý nội dung blog với editor WYSIWYG và SEO tối ưu",
    price: 699000,
    category: "web-source",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Blog+CMS",
    featured: true,
    tags: ["cms", "blog", "seo"]
  },
  {
    id: 6,
    title: "Image Recognition n8n Workflow",
    description: "Workflow n8n nhận diện hình ảnh với tích hợp API và xử lý dữ liệu",
    price: 899000,
    category: "n8n-code",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Image+Recognition+n8n",
    featured: false,
    tags: ["ai", "image-recognition", "api", "n8n"],
    supportInfo: "Bao gồm hỗ trợ cài đặt miễn phí và tùy chỉnh theo yêu cầu"
  },
  {
    id: 7,
    title: "Restaurant Management System",
    description: "Hệ thống quản lý nhà hàng toàn diện với POS, quản lý đặt bàn và kho",
    price: 1499000,
    category: "web-source",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Restaurant+System",
    featured: true,
    tags: ["restaurant", "pos", "management"]
  },
  {
    id: 8,
    title: "Data Integration n8n Workflow",
    description: "Workflow n8n tích hợp và đồng bộ dữ liệu giữa nhiều nền tảng",
    price: 899000,
    category: "n8n-code",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Data+Integration+n8n",
    featured: false,
    tags: ["integration", "data", "automation", "n8n"],
    supportInfo: "Bao gồm hỗ trợ cài đặt miễn phí và tùy chỉnh theo yêu cầu"
  },
  {
    id: 9,
    title: "Learning Management System",
    description: "Hệ thống quản lý học tập trực tuyến với khóa học, bài kiểm tra và chứng chỉ",
    price: 1299000,
    category: "web-source",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=LMS",
    featured: true,
    tags: ["education", "lms", "courses"]
  },
  {
    id: 10,
    title: "Marketing Automation n8n Workflow",
    description: "Workflow n8n tự động hóa tiếp thị đa kênh và phân tích dữ liệu",
    price: 1099000,
    category: "n8n-code",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Marketing+Automation+n8n",
    featured: true,
    tags: ["marketing", "automation", "analytics", "n8n"],
    supportInfo: "Bao gồm hỗ trợ cài đặt miễn phí và tùy chỉnh theo yêu cầu"
  }
];

// Định nghĩa các danh mục cố định theo yêu cầu
const categories = [
  { id: "all", name: "Tất cả" },
  { id: "n8n-code", name: "n8n Code" },
  { id: "web-source", name: "Source Code Web" }
];

export default function ShopPage() {
  const router = useRouter();

  // Hàm xử lý thêm vào giỏ hàng - sẽ được tích hợp với backend sau
  const handleAddToCart = (productId: number) => {
    console.log(`Thêm sản phẩm ID ${productId} vào giỏ hàng`);
    // Hiển thị thông báo
    toast({
      title: "Đã thêm vào giỏ hàng",
      description: "Sản phẩm đã được thêm vào giỏ hàng của bạn",
      variant: "success",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 gradient-heading">Cửa Hàng Source Code</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Khám phá bộ sưu tập các source code, templates và công cụ phát triển chất lượng cao
          được thiết kế đặc biệt cho thị trường Việt Nam.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 bg-secondary/30 p-6 rounded-lg">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Tìm kiếm sản phẩm..." 
              className="pl-10 rounded-full border-primary/20 focus-visible:ring-primary"
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2 rounded-full">
            <Filter className="h-4 w-4" />
            <span>Lọc sản phẩm</span>
          </Button>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList className="bg-background/50 p-1">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="rounded-full">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {/* Tab cho tất cả sản phẩm */}
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </TabsContent>
          
          {/* Tab cho n8n code */}
          <TabsContent value="n8n-code" className="mt-6">
            <div className="mb-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <h3 className="text-lg font-medium text-primary mb-2">n8n Code với Hỗ trợ Đặc biệt</h3>
              <p className="text-muted-foreground">
                Tất cả sản phẩm n8n code đều bao gồm hỗ trợ cài đặt miễn phí và dịch vụ tùy chỉnh theo yêu cầu.
                Đội ngũ kỹ thuật của chúng tôi sẽ hỗ trợ bạn triển khai workflow một cách hiệu quả.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.filter(p => p.category === "n8n-code").map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </TabsContent>
          
          {/* Tab cho source code web */}
          <TabsContent value="web-source" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.filter(p => p.category === "web-source").map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
