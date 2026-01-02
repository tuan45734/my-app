import "./globals.css";
import Header from "@/app/trang-chu/Header";
import Footer from "@/app/trang-chu/Footer";


export const metadata = {
  title: "ĂN CÙNG BÀ TUYẾT",
  description: "Trang đồ ăn vặt siêu ngon!",
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