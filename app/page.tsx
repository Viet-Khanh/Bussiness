import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Star, Zap } from "lucide-react";
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-background to-background z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-heading">
              Giải pháp Source Code & Kiến thức AI cho người Việt
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Chúng tôi cung cấp source code chất lượng cao và chia sẻ kiến thức về AI
              được thiết kế đặc biệt cho cộng đồng phát triển Việt Nam
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90">
                <Link href="/shop" className="gap-2">
                  <span>Khám phá sản phẩm</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-primary/20 hover:bg-primary/10">
                <Link href="/blog" className="gap-2">
                  <span>Đọc blog AI</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-8 -right-8 w-48 h-48 bg-accent/20 rounded-full blur-3xl"></div>
      </section>

      {/* Features Section - Updated GIFs */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tại sao chọn Kadix Solutions?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chúng tôi cung cấp các giải pháp được tối ưu hóa cho thị trường Việt Nam với chất lượng quốc tế
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Source Code Chất Lượng Feature */}
            <div className="bg-background rounded-lg p-6 shadow-sm hover-card vn-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 overflow-hidden relative"> {/* Added relative */}
                {/* Placeholder GIF - Recommend downloading locally to /public */}
                <Image
                  src="https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif"
                  alt="Source Code Chất Lượng"
                  layout="fill" /* Changed */
                  objectFit="contain" /* Changed */
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Source Code Chất Lượng</h3>
              <p className="text-muted-foreground">
                Mã nguồn được viết theo tiêu chuẩn cao, dễ tùy biến và tối ưu hóa cho hiệu suất.
              </p>
            </div>

            {/* Xử lí nhanh chóng Feature */}
            <div className="bg-background rounded-lg p-6 shadow-sm hover-card vn-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 overflow-hidden relative"> {/* Added relative */}
                 {/* Placeholder GIF - Recommend downloading locally to /public */}
                <Image
                  src="https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif"
                  alt="Xử lí nhanh chóng"
                  layout="fill" /* Changed */
                  objectFit="contain" /* Changed */
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Xử lí nhanh chóng</h3>
              <p className="text-muted-foreground">
                Sản phẩm sẽ được giao ngay khi đơn hàng xử lý thành công.
              </p>
            </div>

            {/* Hỗ Trợ Tận Tâm Feature */}
            <div className="bg-background rounded-lg p-6 shadow-sm hover-card vn-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 overflow-hidden relative"> {/* Added relative */}
                 {/* Placeholder GIF - Recommend downloading locally to /public */}
                <Image
                  src="https://media.giphy.com/media/JRDHaM2DXtp0Q/giphy.gif"
                  alt="Hỗ Trợ Tận Tâm"
                  layout="fill" /* Changed */
                  objectFit="contain" /* Changed */
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Hỗ Trợ Tận Tâm</h3>
              <p className="text-muted-foreground">
                Đội ngũ hỗ trợ chuyên nghiệp, sẵn sàng giải đáp mọi thắc mắc và hỗ trợ kỹ thuật.
              </p>
            </div>

            {/* Ổn định nhất thị trường Feature */}
            <div className="bg-background rounded-lg p-6 shadow-sm hover-card vn-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 overflow-hidden relative"> {/* Added relative */}
                 {/* Placeholder GIF - Recommend downloading locally to /public */}
                <Image
                  src="https://media.giphy.com/media/3o7TKsHFo2PjXQ7LCE/giphy.gif"
                  alt="Ổn định nhất thị trường"
                  layout="fill" /* Changed */
                  objectFit="contain" /* Changed */
                  unoptimized
                />
              </div>
              <h3 className="text-xl font-bold mb-2">Ổn định nhất thị trường</h3>
              <p className="text-muted-foreground">
                Giá cả cạnh tranh nhất thị trường, phù hợp với mọi đối tượng khách hàng.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Source Code Section */}
            <Card className="overflow-hidden border-primary/20 hover-card highlight-shadow">
              <div className="h-48 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center relative"> {/* Added relative */}
                 {/* Placeholder GIF - Recommend downloading locally to /public */}
                <Image
                  src="https://media.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif"
                  alt="Cửa Hàng Source Code"
                  layout="fill" /* Changed */
                  objectFit="cover" /* Changed */
                  unoptimized
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Cửa Hàng Source Code</CardTitle>
                <CardDescription className="text-base">
                  Các giải pháp mã nguồn chất lượng cao, được tối ưu hóa cho thị trường Việt Nam
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-accent" />
                    <span>Website Templates đa dạng ngành nghề</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-accent" />
                    <span>Ứng dụng AI tích hợp sẵn cho doanh nghiệp</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-accent" />
                    <span>Plugins & Extensions cho các nền tảng phổ biến</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-accent" />
                    <span>Ứng dụng di động đa nền tảng</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full rounded-full bg-primary hover:bg-primary/90">
                  <Link href="/shop" className="gap-2">
                    <span>Xem cửa hàng</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Blog Section */}
            <Card className="overflow-hidden border-primary/20 hover-card highlight-shadow">
              <div className="h-48 bg-gradient-to-r from-accent/20 to-primary/20 flex items-center justify-center relative"> {/* Added relative */}
                 {/* Placeholder GIF - Recommend downloading locally to /public */}
                <Image
                  src="https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif"
                  alt="Blog Về AI"
                  layout="fill" /* Changed */
                  objectFit="cover" /* Changed */
                  unoptimized
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Blog Về AI</CardTitle>
                <CardDescription className="text-base">
                  Chia sẻ kiến thức và kinh nghiệm về AI bằng tiếng Việt, dễ hiểu và thực tế
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-accent" />
                    <span>Cập nhật xu hướng AI mới nhất</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-accent" />
                    <span>Hướng dẫn thực hành chi tiết</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-accent" />
                    <span>Case studies từ doanh nghiệp Việt Nam</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-accent" />
                    <span>Phân tích và đánh giá các công nghệ AI</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full rounded-full bg-primary hover:bg-primary/90">
                  <Link href="/blog" className="gap-2">
                    <span>Đọc blog</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 md:p-12 text-center vn-border">
            <h2 className="text-3xl font-bold mb-4">Bắt đầu dự án của bạn ngay hôm nay</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Khám phá các giải pháp source code chất lượng cao hoặc tìm hiểu thêm về công nghệ AI
              qua các bài viết chuyên sâu của chúng tôi.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90">
                <Link href="/shop">Xem sản phẩm</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-primary/20 hover:bg-primary/10">
                <Link href="/contact">Liên hệ tư vấn</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request Form Section */}
      <section className="py-16 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 gradient-heading">Yêu cầu báo giá</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hãy cho chúng tôi biết về dự án của bạn để nhận được tư vấn và báo giá chi tiết.
              Chúng tôi chuyên cung cấp dịch vụ thiết kế website theo yêu cầu và source code n8m
              với hỗ trợ kỹ thuật chuyên nghiệp.
            </p>
          </div>

          <div className="bg-background rounded-xl p-6 md:p-10 shadow-lg border border-primary/10 vn-border">
            <QuoteRequestForm />
          </div>
        </div>
      </section>
    </main>
  );
}
