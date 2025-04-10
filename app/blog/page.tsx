import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search, Calendar, Clock, User, ArrowRight } from "lucide-react";

// Helper function to generate slugs (simple version)
const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/ /g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, ''); // Remove non-word characters except hyphens
};


// Dữ liệu mẫu cho bài viết blog - Added 'slug' property
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
  {
    id: 5,
    slug: generateSlug("Tương lai của AI trong phát triển phần mềm"),
    title: "Tương lai của AI trong phát triển phần mềm",
    excerpt: "Phân tích cách AI đang và sẽ thay đổi cách chúng ta phát triển phần mềm trong tương lai.",
    date: "2023-08-05",
    author: "Nguyễn Văn A",
    category: "AI Trends",
    readTime: "7 phút",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=AI+Future",
    featured: true
  },
  {
    id: 6,
    slug: generateSlug("Các công cụ AI giúp tăng năng suất cho lập trình viên"),
    title: "Các công cụ AI giúp tăng năng suất cho lập trình viên",
    excerpt: "Tổng hợp các công cụ AI hàng đầu giúp lập trình viên tăng năng suất và hiệu quả công việc.",
    date: "2023-07-18",
    author: "Trần Văn E",
    category: "Tools",
    readTime: "9 phút",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=AI+Tools",
    featured: false
  },
  {
    id: 7,
    slug: generateSlug("Ứng dụng AI trong y tế: Những tiến bộ mới nhất"),
    title: "Ứng dụng AI trong y tế: Những tiến bộ mới nhất",
    excerpt: "Khám phá cách AI đang cách mạng hóa ngành y tế với các ứng dụng chẩn đoán và điều trị.",
    date: "2023-07-05",
    author: "Lê Thị F",
    category: "Healthcare",
    readTime: "11 phút",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=AI+Healthcare",
    featured: true
  },
  {
    id: 8,
    slug: generateSlug("Bắt đầu với TensorFlow: Hướng dẫn cho người mới"),
    title: "Bắt đầu với TensorFlow: Hướng dẫn cho người mới",
    excerpt: "Hướng dẫn từng bước để bắt đầu với TensorFlow, thư viện machine learning phổ biến.",
    date: "2023-06-20",
    author: "Phạm Văn G",
    category: "Tutorial",
    readTime: "14 phút",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=TensorFlow",
    featured: false
  },
  {
    id: 9,
    slug: generateSlug("Đạo đức AI: Những thách thức và giải pháp"),
    title: "Đạo đức AI: Những thách thức và giải pháp",
    excerpt: "Thảo luận về các vấn đề đạo đức trong phát triển và triển khai AI, cùng các giải pháp tiềm năng.",
    date: "2023-06-10",
    author: "Nguyễn Thị H",
    category: "Ethics",
    readTime: "10 phút",
    image: "https://placehold.co/600x400/e2e8f0/1e293b?text=AI+Ethics",
    featured: true
  }
];

// Format ngày tháng theo định dạng Việt Nam
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('vi-VN', { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric' 
  }).format(date);
}

// Lấy danh sách các danh mục duy nhất
const categories = Array.from(new Set(blogPosts.map(post => post.category)));

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4 gradient-heading">Blog AI</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Khám phá các bài viết mới nhất về trí tuệ nhân tạo, machine learning, và cách ứng dụng 
          công nghệ AI vào các dự án thực tế.
        </p>
      </div>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).slice(0, 1).map((post) => (
        <div key={post.id} className="mb-12 vn-border">
          <Card className="overflow-hidden border-primary/20">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <Badge className="w-fit mb-2">{post.category}</Badge>
                <h2 className="text-2xl font-bold mb-4 hover:text-primary transition-colors">
                  {/* Updated Link href */}
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Button asChild className="w-fit rounded-full">
                  {/* Updated Link href */}
                  <Link href={`/blog/${post.slug}`} className="flex items-center gap-2">
                    <span>Đọc tiếp</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      ))}

      {/* Search and Filter */}
      <div className="mb-8 bg-secondary/30 p-6 rounded-lg">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Tìm kiếm bài viết..." 
              className="pl-10 rounded-full border-primary/20 focus-visible:ring-primary"
            />
          </div>
        </div>
        
        <Tabs defaultValue="all">
          <TabsList className="bg-background/50 p-1">
            <TabsTrigger value="all" className="rounded-full">Tất cả</TabsTrigger>
            <TabsTrigger value="featured" className="rounded-full">Nổi bật</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="rounded-full hidden md:inline-flex">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="featured" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.filter(p => p.featured).map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          </TabsContent>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.filter(p => p.category === category).map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

// Updated BlogPostCardProps interface
interface BlogPostCardProps {
  post: {
    id: number;
    slug: string; // Added slug
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    readTime: string;
    image: string;
    featured: boolean;
  };
}

function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col hover-card border-primary/10">
      <div className="relative">
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        {post.featured && (
          <Badge className="absolute top-2 left-2 bg-primary">Nổi bật</Badge>
        )}
      </div>
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <Badge variant="outline">{post.category}</Badge>
          <span className="text-sm text-muted-foreground flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {post.readTime}
          </span>
        </div>
        <CardTitle className="hover:text-primary transition-colors line-clamp-2">
          {/* Updated Link href */}
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
        <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-3 w-3" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="w-full hover:bg-primary/10 hover:text-primary p-0">
          {/* Updated Link href */}
          <Link 
            href={`/blog/${post.slug}`} 
            className="flex items-center gap-1 font-medium"
          >
            <span>Đọc tiếp</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
