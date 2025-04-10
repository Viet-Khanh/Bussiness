import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Metadata } from 'next';
import Link from 'next/link'; // Import Link
import { Button } from '@/components/ui/button'; // Import Button

// Helper function to generate slugs (simple version) - Should match the one in blog/page.tsx
const generateSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/ /g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, ''); // Remove non-word characters except hyphens
};

// Placeholder data - Replace with actual data fetching later
// IMPORTANT: Ensure slugs here match those generated in blog/page.tsx
const blogPostsData = [
  {
    id: 1,
    slug: generateSlug("Tổng quan về các mô hình ngôn ngữ lớn (LLM) năm 2023"),
    title: "Tổng quan về các mô hình ngôn ngữ lớn (LLM) năm 2023",
    author: "Nguyễn Văn A",
    avatar: "https://github.com/shadcn.png",
    date: "15 tháng 10, 2023",
    category: "AI Research",
    // --- START: Updated Content ---
    content: `
      <p class="mb-4">Năm 2023 chứng kiến sự bùng nổ và phát triển vượt bậc của các Mô hình Ngôn ngữ Lớn (Large Language Models - LLM). Những mô hình này không chỉ cải thiện đáng kể khả năng hiểu và tạo ra ngôn ngữ tự nhiên mà còn mở ra vô số ứng dụng mới trong nhiều lĩnh vực.</p>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">LLM là gì?</h2>
      <p class="mb-4">LLM là một loại mô hình trí tuệ nhân tạo được huấn luyện trên một lượng lớn dữ liệu văn bản để hiểu và tạo ra ngôn ngữ giống con người. Chúng dựa trên kiến trúc Transformer, cho phép xử lý các chuỗi dữ liệu dài và nắm bắt các mối quan hệ ngữ nghĩa phức tạp.</p>
      
      <img src="https://placehold.co/600x400/e2e8f0/1e293b?text=LLM+Architecture" alt="LLM Architecture" class="my-6 rounded-lg shadow-md mx-auto block" /> 
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">Các LLM nổi bật năm 2023</h2>
      <p class="mb-4">Một số LLM đã gây được tiếng vang lớn trong năm qua:</p>
      <ul class="list-disc list-inside mb-4 space-y-2 pl-4">
        <li><strong>GPT-4 (OpenAI):</strong> Kế thừa thành công của GPT-3.5, GPT-4 thể hiện khả năng suy luận, giải quyết vấn đề và sáng tạo vượt trội. Nó cũng có khả năng xử lý đầu vào đa phương thức (văn bản và hình ảnh).</li>
        <li><strong>PaLM 2 (Google):</strong> Mô hình này tập trung vào khả năng suy luận logic, toán học và lập trình. Google đã tích hợp PaLM 2 vào nhiều sản phẩm của mình, bao gồm cả Bard.</li>
        <li><strong>LLaMA 2 (Meta):</strong> Meta phát hành LLaMA 2 dưới dạng mã nguồn mở, thúc đẩy nghiên cứu và phát triển LLM trong cộng đồng. Mô hình này có nhiều kích thước khác nhau, phù hợp với nhiều nhu cầu sử dụng.</li>
        <li><strong>Claude 2 (Anthropic):</strong> Nổi bật với khả năng xử lý ngữ cảnh dài (lên đến 100k token) và tập trung vào việc tạo ra các phản hồi an toàn và có đạo đức.</li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">Ứng dụng của LLM</h2>
      <p class="mb-4">LLM đang được ứng dụng rộng rãi:</p>
      <ul class="list-disc list-inside mb-4 space-y-2 pl-4">
        <li><strong>Trợ lý ảo và Chatbot:</strong> Cung cấp các cuộc trò chuyện tự nhiên và hữu ích hơn.</li>
        <li><strong>Sáng tạo nội dung:</strong> Hỗ trợ viết bài, email, kịch bản, mã nguồn,...</li>
        <li><strong>Dịch thuật:</strong> Cải thiện chất lượng dịch máy giữa nhiều ngôn ngữ.</li>
        <li><strong>Phân tích dữ liệu:</strong> Tóm tắt văn bản, trích xuất thông tin, phân tích cảm xúc.</li>
        <li><strong>Giáo dục:</strong> Tạo ra các công cụ học tập cá nhân hóa.</li>
      </ul>
      
      <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
        "Sự phát triển của LLM đang định hình lại cách chúng ta tương tác với công nghệ và thông tin. Đây là một lĩnh vực đầy hứa hẹn nhưng cũng đặt ra những thách thức về đạo đức và an toàn."
      </blockquote>
      
      <h2 class="text-2xl font-semibold mt-6 mb-3">Thách thức và Tương lai</h2>
      <p class="mb-4">Mặc dù có nhiều tiến bộ, LLM vẫn đối mặt với các thách thức như "ảo giác" (tạo ra thông tin sai lệch), thiên kiến dữ liệu, và chi phí tính toán cao. Tương lai của LLM hứa hẹn các mô hình hiệu quả hơn, đa phương thức hơn và có khả năng suy luận sâu sắc hơn, đồng thời cần có các giải pháp để đảm bảo việc sử dụng chúng một cách có trách nhiệm.</p>
    `,
    // --- END: Updated Content ---
  },
  {
    id: 2,
    slug: generateSlug("Hướng dẫn tích hợp ChatGPT API vào ứng dụng web của bạn"),
    title: "Hướng dẫn tích hợp ChatGPT API vào ứng dụng web của bạn",
    author: "Trần Thị B",
    avatar: "https://github.com/shadcn.png",
    date: "28 tháng 9, 2023",
    category: "Tutorial",
    content: `<p>Nội dung chi tiết về tích hợp ChatGPT API...</p>`,
  },
  {
    id: 3,
    slug: generateSlug("Computer Vision: Từ cơ bản đến ứng dụng thực tế"),
    title: "Computer Vision: Từ cơ bản đến ứng dụng thực tế",
    author: "Lê Văn C",
    avatar: "https://github.com/shadcn.png",
    date: "10 tháng 9, 2023",
    category: "Computer Vision",
    content: `<p>Nội dung chi tiết về Computer Vision...</p>`,
  },
  // Add other posts similarly...
  {
    slug: "huong-dan-su-dung-ai", // Keep the original example for now
    title: "Hướng dẫn sử dụng AI để tối ưu hóa quy trình làm việc",
    author: "Kadix Team",
    avatar: "https://github.com/shadcn.png", // Placeholder avatar
    date: "15 tháng 7, 2024",
    category: "Trí tuệ nhân tạo",
    content: `
      <p class="mb-4">Trí tuệ nhân tạo (AI) đang cách mạng hóa cách chúng ta làm việc. Từ tự động hóa các tác vụ lặp đi lặp lại đến cung cấp thông tin chi tiết sâu sắc từ dữ liệu, AI mang lại vô số cơ hội để tăng năng suất và hiệu quả.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">1. Tự động hóa tác vụ</h2>
      <p class="mb-4">Một trong những ứng dụng phổ biến nhất của AI là tự động hóa. Các công cụ AI có thể xử lý email, lên lịch cuộc họp, nhập dữ liệu và nhiều hơn nữa, giải phóng thời gian của bạn để tập trung vào các công việc chiến lược hơn.</p>
      <img src="/placeholder-image.jpg" alt="AI Automation" class="my-4 rounded-lg shadow-md" /> 
      <h2 class="text-2xl font-semibold mt-6 mb-3">2. Phân tích dữ liệu</h2>
      <p class="mb-4">AI có khả năng phân tích lượng lớn dữ liệu một cách nhanh chóng và chính xác, giúp bạn đưa ra quyết định sáng suốt hơn. Các công cụ phân tích dựa trên AI có thể xác định xu hướng, dự đoán kết quả và khám phá các cơ hội tiềm ẩn.</p>
      <h2 class="text-2xl font-semibold mt-6 mb-3">3. Hỗ trợ sáng tạo</h2>
      <p class="mb-4">AI không chỉ dành cho các tác vụ logic. Các công cụ AI tạo sinh (Generative AI) như mô hình ngôn ngữ lớn (LLM) có thể hỗ trợ viết nội dung, tạo ý tưởng, thiết kế hình ảnh và thậm chí viết mã. Điều này giúp đẩy nhanh quá trình sáng tạo và đổi mới.</p>
      <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-muted-foreground">
        "AI sẽ không thay thế con người, nhưng con người sử dụng AI sẽ thay thế những người không sử dụng."
      </blockquote>
      <p>Bằng cách tích hợp AI vào quy trình làm việc hàng ngày, bạn có thể nâng cao đáng kể hiệu suất cá nhân và đội nhóm, đồng thời đạt được lợi thế cạnh tranh trong môi trường kinh doanh hiện đại.</p>
    `,
  }
];

// Function to find post by slug (using placeholder data)
const getPostBySlug = (slug: string) => {
  return blogPostsData.find(post => post.slug === slug);
}

// --- START: Updated generateStaticParams ---
// This function tells Next.js which slugs to pre-render at build time.
// Replace this with actual data fetching from your CMS or database.
export async function generateStaticParams() {
  // Fetch all slugs from your data source (CMS, database, etc.)
  // For now, use the slugs from the placeholder data
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}
// --- END: Updated generateStaticParams ---

// Generate metadata dynamically based on the post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Bài viết không tồn tại | Kadix Blog",
      description: "Bài viết bạn tìm kiếm không tồn tại.",
    }
  }

  return {
    title: `${post.title} | Kadix Blog`,
    description: `Đọc bài viết chi tiết về ${post.title} trên blog của Kadix Solutions.`,
    // other metadata
  };
}


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Fetch the blog post data based on params.slug
  const blogPost = getPostBySlug(params.slug);

  // Handle post not found
  if (!blogPost) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12 text-center">
        <h1 className="text-2xl font-bold">Bài viết không tìm thấy</h1>
        <p className="text-muted-foreground mt-2">Xin lỗi, chúng tôi không thể tìm thấy bài viết bạn yêu cầu.</p>
        <Button asChild variant="link" className="mt-4">
          <Link href="/blog">Quay lại trang Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
      <article className="prose dark:prose-invert lg:prose-xl max-w-none">
        {/* Category Badge */}
        <Badge variant="secondary" className="mb-2">{blogPost.category}</Badge>

        {/* Title */}
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl gradient-heading">
          {blogPost.title}
        </h1>

        {/* Author and Date */}
        <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-6">
          <Avatar className="h-8 w-8">
            <AvatarImage src={blogPost.avatar} alt={blogPost.author} />
            <AvatarFallback>{blogPost.author.substring(0, 1)}</AvatarFallback>
          </Avatar>
          <span>Bởi <span className="font-medium text-foreground">{blogPost.author}</span></span>
          <span className="text-xs">•</span>
          <span>{blogPost.date}</span>
        </div>

        <Separator className="my-8" />

        {/* Content */}
        {/* Using dangerouslySetInnerHTML for example HTML content. 
            In a real app, use a Markdown renderer (like react-markdown) 
            or fetch sanitized HTML from your CMS/backend. */}
        <div
          className="prose-p:leading-relaxed prose-headings:font-semibold prose-headings:mt-8 prose-headings:mb-4 prose-a:text-primary hover:prose-a:underline prose-ul:list-disc prose-ul:list-inside prose-ul:pl-4 prose-li:mb-2 prose-blockquote:border-primary prose-img:rounded-lg prose-img:shadow-md prose-img:mx-auto prose-img:block"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

      </article>

      {/* Back to Blog Button */}
      <div className="mt-12 text-center">
         <Button asChild variant="outline">
           <Link href="/blog">← Quay lại trang Blog</Link>
         </Button>
      </div>


      {/* Placeholder for Related Posts or Comments */}
      <Separator className="my-12" />
      <div className="text-center text-muted-foreground">
        {/* Add Related Posts or Comments section here later */}
        <p>(Khu vực bài viết liên quan hoặc bình luận sẽ được thêm vào sau)</p>
      </div>
    </div>
  );
}
