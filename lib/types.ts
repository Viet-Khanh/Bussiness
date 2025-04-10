// Định nghĩa các kiểu dữ liệu dùng chung cho toàn bộ ứng dụng

// Kiểu dữ liệu đánh giá sản phẩm
export interface ProductReview {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date?: string;
}

// Kiểu dữ liệu sản phẩm
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured: boolean;
  tags: string[];
  supportInfo?: string;
  detailedDescription?: string;
  reviews?: ProductReview[];
}

// Kiểu dữ liệu danh mục
export interface Category {
  id: string;
  name: string;
  description?: string;
}

// Kiểu dữ liệu giỏ hàng
export interface CartItem {
  productId: number;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

// Kiểu dữ liệu người dùng
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  socialLink?: string;
}

// Kiểu dữ liệu đơn hàng
export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

// Kiểu dữ liệu yêu cầu báo giá
export interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  socialLink?: string;
  serviceType: string;
  budget?: string;
  message: string;
  status: 'new' | 'contacted' | 'quoted' | 'converted' | 'closed';
  createdAt: Date;
}
