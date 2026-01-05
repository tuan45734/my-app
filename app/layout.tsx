import "./globals.css";
import Header from "@/app/trang-chu/Header";
import Footer from "@/app/trang-chu/Footer";


export const metadata = {
  title: "Ăn Cùng Bà Tuyết",
  
  description: "Khám phá thế giới đồ ăn vặt siêu ngon tại Ăn Cùng Bà Tuyết! Giao hàng nhanh, chất lượng đảm bảo.",
  
  keywords: [
    "ăn cùng bà tuyết", "bim bim bà tuyết", "chân gà bà tuyết", 
    "snack bà tuyết", "Bà Tuyết"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="bg-white text-gray-900">
        <Header />
          <main className="w-full  bg-amber-50">{children}</main>
          <Footer />
      </body>
    </html>
  );
}