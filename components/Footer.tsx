import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-12 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="font-bold text-xl flex items-center gap-2 mb-4">
              <span className="text-primary">Kadix</span>
              <span className="text-accent-foreground">Solutions</span>
            </div>
            <p className="text-muted-foreground">
              Cung cấp giải pháp source code chất lượng cao và chia sẻ kiến thức về AI cho cộng đồng Việt Nam.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-accent-foreground">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                  Cửa hàng
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-accent-foreground">Danh mục sản phẩm</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop?category=web-template" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                  Website Templates
                </Link>
              </li>
              <li>
                <Link href="/shop?category=ai-tools" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                  Công cụ AI
                </Link>
              </li>
              <li>
                <Link href="/shop?category=mobile-app" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                  Ứng dụng di động
                </Link>
              </li>
              <li>
                <Link href="/shop?category=plugins" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                  Plugins & Extensions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-accent-foreground">Liên hệ</h3>
            <address className="not-italic space-y-3">
              <p className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@kadixsolutions.com</span> {/* Updated email */}
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+84 123 456 789</span>
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Hà Nội, Việt Nam</span>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-primary/10 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kadix Solutions. Tất cả các quyền được bảo lưu.</p>
          <p className="text-sm mt-2">Thiết kế với 💚 tại Việt Nam</p>
        </div>
      </div>
    </footer>
  )
}
