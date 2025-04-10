import { Suspense } from "react";
import ProductDetail from "./ProductDetail";
import { Product } from "@/lib/types";

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
    detailedDescription: `
      <p>Template E-commerce hoàn chỉnh được xây dựng với Next.js và Tailwind CSS, mang đến trải nghiệm mua sắm trực tuyến mượt mà và hiệu quả.</p>
      
      <h3>Tính năng nổi bật:</h3>
      <ul>
        <li>Thiết kế responsive, tương thích với mọi thiết bị</li>
        <li>Tích hợp sẵn giỏ hàng và thanh toán</li>
        <li>Hệ thống quản lý sản phẩm đơn giản</li>
        <li>Tối ưu SEO</li>
        <li>Hiệu suất cao với Next.js</li>
        <li>Dễ dàng tùy chỉnh với Tailwind CSS</li>
      </ul>
      
      <h3>Phù hợp với:</h3>
      <p>Các doanh nghiệp vừa và nhỏ muốn xây dựng cửa hàng trực tuyến nhanh chóng với chi phí hợp lý.</p>
      
      <h3>Bao gồm:</h3>
      <p>Source code đầy đủ, hướng dẫn cài đặt chi tiết, và hỗ trợ kỹ thuật trong 30 ngày.</p>
    `,
    reviews: [
      { id: 1, user: "Nguyễn Văn A", rating: 5, comment: "Template rất dễ sử dụng và tùy biến. Tôi đã triển khai cho cửa hàng của mình chỉ trong vài ngày." },
      { id: 2, user: "Trần Thị B", rating: 4, comment: "Thiết kế đẹp, code sạch. Chỉ cần thêm một vài tính năng nữa là hoàn hảo." }
    ]
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
    detailedDescription: `
      <p>Bảng điều khiển quản trị hiện đại với đầy đủ tính năng và biểu đồ thống kê, giúp bạn quản lý doanh nghiệp hiệu quả.</p>
      
      <h3>Tính năng nổi bật:</h3>
      <ul>
        <li>Giao diện người dùng trực quan</li>
        <li>Biểu đồ thống kê đa dạng</li>
        <li>Quản lý người dùng và phân quyền</li>
        <li>Báo cáo tự động</li>
        <li>Tương thích với nhiều loại dữ liệu</li>
        <li>Tùy chỉnh dễ dàng</li>
      </ul>
      
      <h3>Phù hợp với:</h3>
      <p>Các doanh nghiệp cần một hệ thống quản lý nội bộ mạnh mẽ và linh hoạt.</p>
      
      <h3>Bao gồm:</h3>
      <p>Source code đầy đủ, hướng dẫn cài đặt chi tiết, và hỗ trợ kỹ thuật trong 30 ngày.</p>
    `,
    reviews: [
      { id: 1, user: "Lê Văn C", rating: 5, comment: "Dashboard này đã giúp tôi tiết kiệm rất nhiều thời gian trong việc quản lý doanh nghiệp." },
      { id: 2, user: "Phạm Thị D", rating: 5, comment: "Giao diện đẹp, dễ sử dụng và có đầy đủ tính năng mà tôi cần." }
    ]
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
    detailedDescription: `
      <p>Workflow n8n tích hợp chatbot AI với các mô hình ngôn ngữ lớn, giúp doanh nghiệp tự động hóa giao tiếp với khách hàng.</p>
      
      <h3>Tính năng nổi bật:</h3>
      <ul>
        <li>Tích hợp với các mô hình ngôn ngữ lớn như GPT</li>
        <li>Xử lý ngôn ngữ tự nhiên</li>
        <li>Tự động hóa trả lời câu hỏi thường gặp</li>
        <li>Tích hợp với nhiều nền tảng chat</li>
        <li>Dễ dàng tùy chỉnh và mở rộng</li>
        <li>Phân tích dữ liệu hội thoại</li>
      </ul>
      
      <h3>Phù hợp với:</h3>
      <p>Các doanh nghiệp muốn tự động hóa dịch vụ khách hàng và tăng hiệu quả giao tiếp.</p>
      
      <h3>Bao gồm:</h3>
      <p>Workflow n8n đầy đủ, hướng dẫn cài đặt chi tiết, và hỗ trợ kỹ thuật đặc biệt.</p>
    `,
    reviews: [
      { id: 1, user: "Hoàng Văn E", rating: 5, comment: "Chatbot này đã giúp chúng tôi tiết kiệm rất nhiều chi phí cho bộ phận CSKH." },
      { id: 2, user: "Ngô Thị F", rating: 4, comment: "Dễ cài đặt và tùy chỉnh. Đội ngũ hỗ trợ rất nhiệt tình." }
    ]
  }
];

// Hàm này chạy ở server-side để tạo các tham số tĩnh
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

// Hàm này chạy ở server-side để lấy dữ liệu sản phẩm
export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = Number(params.id);
  const product = products.find(p => p.id === productId);
  
  // Fallback nếu không tìm thấy sản phẩm
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Không tìm thấy sản phẩm</h1>
          <p className="text-muted-foreground mb-6">Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
        </div>
      </div>
    );
  }
  
  return (
    <Suspense fallback={
      <div className="container mx-auto px-4 py-16 flex justify-center items-center">
        <div className="animate-pulse">
          <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-64 w-full max-w-2xl bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-full max-w-2xl bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-full max-w-xl bg-gray-200 rounded mb-2"></div>
          <div className="h-4 w-full max-w-lg bg-gray-200 rounded"></div>
        </div>
      </div>
    }>
      <ProductDetail product={product} allProducts={products} />
    </Suspense>
  );
}
