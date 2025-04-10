"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import { ShoppingCart, Menu, X, UserCog } from "lucide-react"; // Import UserCog
import { getCart } from "@/lib/actions";
import { CartItem } from "@/lib/types";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCart = async () => {
    try {
      setIsLoading(true);
      const cart = await getCart();
      setCartItems(cart.items);
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();

    // Thêm event listener để cập nhật giỏ hàng khi có thay đổi
    const handleStorageChange = (event: StorageEvent) => {
      // Chỉ cập nhật nếu key là 'cart' (hoặc key bạn dùng để lưu giỏ hàng)
      if (event.key === 'cart') {
        fetchCart();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    // Thêm listener cho custom event nếu bạn dùng cách đó để cập nhật cart
    const handleCartUpdate = () => fetchCart();
    window.addEventListener('cartUpdated', handleCartUpdate);


    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const navLinks = [
    { href: "/", label: "Trang chủ" },
    { href: "/shop", label: "Cửa hàng" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "Giới thiệu" },
    { href: "/contact", label: "Liên hệ" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Wrapper div - full width on mobile, max-width on desktop */}
      <div className="w-full">
        <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4"> {/* container now has max-w-7xl mx-auto */}
          <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Kadix Solutions
              </span>
            </Link>

            <nav className="hidden md:flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-2">
            {/* Cart Button */}
            <Link href="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {!isLoading && totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            {/* Temporary Admin Link */}
            <Link href="/admin/blog">
              <Button variant="ghost" size="icon" title="Admin Area">
                <UserCog className="h-5 w-5" />
              </Button>
            </Link>

            {/* Theme Toggle */}
            <ModeToggle />

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>


      {/* Mobile menu - Keep it full width for overlay effect */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border/40 absolute top-full left-0 right-0 bg-background shadow-md">
           {/* Mobile menu wrapper - full width */}
           <div className="w-full"> {/* Đảm bảo mobile menu wrapper cũng full width */}
             <nav className="flex flex-col p-4"> {/* Use container padding */}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`py-3 text-sm font-medium transition-colors hover:text-primary ${
                      pathname === link.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                 {/* Add Admin link to mobile menu as well */}
                 <Link
                    href="/admin/blog"
                    className="py-3 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                    onClick={() => setIsMenuOpen(false)}
                 >
                    Admin
                 </Link>
              </nav>
           </div>
        </div>
      )}
    </header>
  );
}
