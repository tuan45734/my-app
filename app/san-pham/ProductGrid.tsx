import { SanPham } from './types';
import ProductCard from './ProductCard';

interface ProductGridProps {
  sanPhams: SanPham[];
}

export default function ProductGrid({ sanPhams }: ProductGridProps) {
  if (sanPhams.length === 0) {
    return (
      <div className="text-center py-16 ">
        <div className="w-20 h-20 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
          <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-xl font-bold text-gray-600 mb-2">Không tìm thấy sản phẩm phù hợp</p>
        <p className="text-gray-500 mb-6">Hãy thử điều chỉnh bộ lọc hoặc tìm kiếm với từ khóa khác</p>
      </div>
    );
  }
  const markedSanPhams = sanPhams.map((sanPham, index) => ({
    ...sanPham,
    isHot: sanPham.hot || index < 5
  }));

  return (
    <div className=" w-full lg:w-[70%] mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-6">
        {markedSanPhams.map((sanPham, index) => (
          <ProductCard 
            key={sanPham.id} 
            sanPham={sanPham} 
            isHot={sanPham.isHot}
          />
        ))}
      </div>
    </div>
  );
}