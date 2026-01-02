import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 lg:py-20 bg-white text-orange-600">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-black mb-6 leading-tight">
            Mua ONLINE - Nhận ngay ưu đãi KHỦNG
          </h2>
          <p className="text-xxl lg:text-xl mb-8 opacity-90 ">
            Chỉ cần vài cú click, sản phẩm yêu thích sẽ chạy đến tay bạn!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
            <Link 
              href="/san-pham" 
              className="relative inline-flex items-center gap-3 px-9 py-4 rounded-full font-semibold text-lg text-white  bg-gradient-to-r from-orange-500 to-amber-500    shadow-lg shadow-orange-500/30  hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
            Mua hàng online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}