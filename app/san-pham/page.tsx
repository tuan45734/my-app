// app/san-pham/page.tsx
"use client";

import { useState, useEffect, Suspense } from 'react'; // 👈 Thêm Suspense
import { useSearchParams } from 'next/navigation';
import { SanPham } from './types';
import { sanPhams } from './data';
import HeroSection from './HeroSection';
import FilterSection from './FilterSection';
import ProductGrid from './ProductGrid';

// Tách phần sử dụng useSearchParams ra component con
function SanPhamContent() {
  const [locDanhMuc, setLocDanhMuc] = useState('Tất cả');
  const [timKiem, setTimKiem] = useState('');
  const searchParams = useSearchParams(); // ✅ Now safe

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setLocDanhMuc(category);
    }
  }, [searchParams]);

  const sanPhamLoc: SanPham[] = sanPhams.filter(sanPham => {
    const khopDanhMuc =
      locDanhMuc === 'Tất cả' ||
      (locDanhMuc === 'Bim bim' && sanPham.danhMuc.startsWith('Bim bim')) ||
      sanPham.danhMuc === locDanhMuc;
    const khopTimKiem = sanPham.ten.toLowerCase().includes(timKiem.toLowerCase())

    return khopDanhMuc && khopTimKiem;
  });

  const danhMucs = ['Tất cả', ...new Set(sanPhams.map(sp => sp.danhMuc))];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <div className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <FilterSection
            locDanhMuc={locDanhMuc}
            setLocDanhMuc={setLocDanhMuc}
            timKiem={timKiem}
            setTimKiem={setTimKiem}
            danhMucs={danhMucs}
            soLuongSanPham={sanPhamLoc.length}
          />

          <ProductGrid sanPhams={sanPhamLoc} />
        </div>
      </div>
    </div>
  );
}

// Component chính với Suspense
export default function SanPhamPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Đang tải sản phẩm...</div>}>
      <SanPhamContent />
    </Suspense>
  );
}