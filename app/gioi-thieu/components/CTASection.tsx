import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 bg-white text-orange-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Sẵn Sàng Khám Phá?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Trải nghiệm hương vị độc đáo và chất lượng mà chúng tôi mang đến
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/san-pham" 
            className="relative inline-flex items-center gap-3 px-15 py-4 rounded-full font-semibold text-lg text-white  bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-500/30  hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Khám Phá Sản Phẩm
          </Link>
          <Link 
            href="/chi-nhanh" 
            className="relative inline-flex items-center gap-3 px-15 py-4 rounded-full font-semibold text-lg text-white  bg-gradient-to-l from-orange-500 to-amber-500 shadow-lg shadow-orange-500/30  hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Ghé Thăm NPP
          </Link>
        </div>
      </div>
    </section>
  );
}
