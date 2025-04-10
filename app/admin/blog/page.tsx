"use client"; // Mark as Client Component

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { PlusCircle, Edit, Trash2, Loader2 } from "lucide-react"; // Import Loader2

// --- Dữ liệu mẫu (Tạm thời - Sẽ thay thế bằng API/DB) ---
const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '');
};

const blogPosts = [
  {
    id: 1,
    slug: generateSlug("Tổng quan về các mô hình ngôn ngữ lớn (LLM) năm 2023"),
    title: "Tổng quan về các mô hình ngôn ngữ lớn (LLM) năm 2023",
    excerpt: "Khám phá các mô hình ngôn ngữ lớn mới nhất và cách chúng đang thay đổi ngành công nghiệp AI.",
    date: "2023-10-15",
    author: "Nguyễn Văn A",
    category: "AI Research",
    readTime: "8 phút",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=LLM+Overview",
    featured: true
  },
  {
    id: 2,
    slug: generateSlug("Hướng dẫn tích hợp ChatGPT API vào ứng dụng web của bạn"),
    title: "Hướng dẫn tích hợp ChatGPT API vào ứng dụng web của bạn",
    excerpt: "Bài viết hướng dẫn chi tiết cách tích hợp ChatGPT API vào ứng dụng web sử dụng Next.js và React.",
    date: "2023-09-28",
    author: "Trần Thị B",
    category: "Tutorial",
    readTime: "12 phút",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=ChatGPT+API",
    featured: false
  },
  {
    id: 3,
    slug: generateSlug("Computer Vision: Từ cơ bản đến ứng dụng thực tế"),
    title: "Computer Vision: Từ cơ bản đến ứng dụng thực tế",
    excerpt: "Tìm hiểu về Computer Vision và cách áp dụng các kỹ thuật này vào các dự án thực tế.",
    date: "2023-09-10",
    author: "Lê Văn C",
    category: "Computer Vision",
    readTime: "15 phút",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Computer+Vision",
    featured: true
  },
   {
    id: 4,
    slug: generateSlug("Xây dựng hệ thống gợi ý sản phẩm với Machine Learning"),
    title: "Xây dựng hệ thống gợi ý sản phẩm với Machine Learning",
    excerpt: "Hướng dẫn xây dựng hệ thống gợi ý sản phẩm cho website thương mại điện tử sử dụng các thuật toán ML.",
    date: "2023-08-22",
    author: "Phạm Thị D",
    category: "Machine Learning",
    readTime: "10 phút",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=Recommendation+System",
    featured: false
  },
];

function formatDate(dateString: string) {
  if (!dateString) return '';
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  } catch (error) {
    console.error("Error formatting date:", dateString, error);
    return dateString;
  }
}
// --- Kết thúc dữ liệu mẫu ---

// --- Hàm lấy dữ liệu (Tạm thời) ---
// Note: Since this is now a client component, direct async function for the component is not ideal.
// We'll fetch data within useEffect or pass it as props if needed later. For now, use the static data.
// async function getBlogPosts() { ... } // Removed async fetch for client component simplicity for now

// --- Temporary Password ---
const TEMP_ADMIN_PASSWORD = "kadixadmin"; // WARNING: Insecure, for development only!

export default function AdminBlogPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Start in loading state
  const [posts, setPosts] = useState(blogPosts); // Use state for posts

  useEffect(() => {
    // Check if already authenticated in session storage (simple persistence)
    const authenticated = sessionStorage.getItem("isAdminAuthenticated");
    if (authenticated === "true") {
      setIsAuthenticated(true);
      setIsLoading(false);
      return;
    }

    // Prompt for password
    const enteredPassword = prompt("Vui lòng nhập mật khẩu admin:");

    if (enteredPassword === TEMP_ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem("isAdminAuthenticated", "true"); // Store auth state
    } else {
      alert("Mật khẩu không đúng. Bạn sẽ được chuyển về trang chủ.");
      router.push("/"); // Redirect to home page
    }
    setIsLoading(false); // Stop loading after check
  }, [router]); // Add router to dependency array

  // --- Hàm xử lý hành động (Placeholder) ---
  const handleEdit = (postId: number) => {
    console.log(`Edit post with ID: ${postId}`);
    // Logic điều hướng đến trang sửa bài viết (ví dụ: /admin/blog/edit/${postId})
    alert(`Chức năng sửa bài viết ${postId} chưa được triển khai.`);
  };

  const handleDelete = (postId: number) => {
    if (confirm(`Bạn có chắc chắn muốn xóa bài viết ID ${postId}?`)) {
        console.log(`Delete post with ID: ${postId}`);
        // Logic gọi API để xóa bài viết
        // Tạm thời xóa khỏi state để mô phỏng
        setPosts(currentPosts => currentPosts.filter(post => post.id !== postId));
        alert(`Bài viết ${postId} đã được xóa (tạm thời).`);
        // Sau đó cập nhật lại danh sách (ví dụ: revalidatePath('/admin/blog')) khi có API
    }
  };
  // --- Kết thúc hàm xử lý hành động ---

  // Show loading indicator while checking password
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">Đang kiểm tra quyền truy cập...</span>
      </div>
    );
  }

  // Render page content only if authenticated
  if (!isAuthenticated) {
    // This part might not be reached due to redirection, but good practice
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quản lý Bài viết Blog</h1>
        <Button asChild>
          {/* Link đến trang tạo bài viết mới (sẽ tạo sau) */}
          <Link href="/admin/blog/new">
            <PlusCircle className="mr-2 h-4 w-4" /> Thêm bài viết mới
          </Link>
        </Button>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">ID</TableHead>
              <TableHead>Tiêu đề</TableHead>
              <TableHead>Tác giả</TableHead>
              <TableHead>Danh mục</TableHead>
              <TableHead>Ngày đăng</TableHead>
              <TableHead className="text-right w-[150px]">Hành động</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.length > 0 ? (
              posts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="font-medium">{post.id}</TableCell>
                  <TableCell>
                    <Link href={`/blog/${post.slug}`} target="_blank" className="hover:underline" title="Xem bài viết">
                      {post.title}
                    </Link>
                  </TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{post.category}</Badge>
                  </TableCell>
                  <TableCell>{formatDate(post.date)}</TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(post.id)}
                      title="Sửa bài viết"
                      className="mr-2 hover:text-blue-600"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(post.id)}
                      title="Xóa bài viết"
                      className="hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="h-24 text-center">
                  Chưa có bài viết nào.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
       {/* Có thể thêm phân trang ở đây sau này */}
    </div>
  );
}
