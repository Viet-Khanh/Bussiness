import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kadix Solutions - Kinh Doanh & Blog AI',
  description: 'Nơi chia sẻ kiến thức về AI và cung cấp các giải pháp source code chất lượng',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            {/* Wrap the main content area */}
            <main className="flex-1 w-full"> {/* Ensure main takes available space */}
              {/* Apply max-width and center the content */}
              <div className="container mx-auto px-4 py-8 max-w-7xl"> {/* Adjust max-w-7xl as needed */}
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
