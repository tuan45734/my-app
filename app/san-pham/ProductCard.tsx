'use client';

import { useState } from 'react';
import { SanPham } from './types';

interface ProductCardProps {
  sanPham: SanPham;
  isHot?: boolean; 
}

export default function ProductCard({ sanPham, isHot }: ProductCardProps) {
  const [showPopup, setShowPopup] = useState(false);

  const platforms = [
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@batuyethanhvi',
    },
    {
      name: 'Shopee',
      url: 'https://shopee.vn/nmtvlog99',
    },
    {
      name: 'Lazada',
      url: 'https://www.lazada.vn/shop/an-cung-ba-tuyet',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/ancungbatuyet',
    }
  ];

  const handlePlatformClick = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const isHotProduct = sanPham.hot || isHot;

  return (
    <>
      <div 
        onClick={() => setShowPopup(true)}
        className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col w-full h-full max-w-[180px] mx-auto cursor-pointer hover:scale-[1.02] relative"
      >
        <div className="relative w-full aspect-square overflow-hidden">
          <img
            src={sanPham.hinhAnh}
            alt={sanPham.ten}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          {isHotProduct && (
            <div className="absolute top-1 left-1 z-10">
              <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-1.5 py-0.5 rounded-full text-[8px] font-bold shadow-md flex items-center gap-0.5">
                <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
                HOT
              </span>
            </div>
          )}
          <div className="absolute top-1 right-1">
            <span className="bg-orange-500 text-white px-1 py-0.5 rounded-full text-[9px] font-bold">
              {sanPham.danhMuc}
            </span>
          </div>
        </div>
        <div className="p-1.5 flex-1 flex flex-col bg-gradient-to-t to-orange-50">
          <h3 className="font-bold text-[17px] text-orange-700 text-center line-clamp-2 leading-tight">
            {sanPham.ten}
          </h3>
        </div>
      </div>

      {showPopup && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] p-4 animate-fade-in"
          onClick={() => setShowPopup(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-md w-full p-6 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPopup(false)}
              className="ml-auto block mb-4 text-gray-400 hover:text-gray-600 float-right"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center mb-6">
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-orange-100">
                <img
                  src={sanPham.hinhAnh}
                  alt={sanPham.ten}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-orange-700 mb-2">{sanPham.ten}</h3>
              <p className="text-sm text-gray-600 mb-1">Danh mục: <span className="font-medium">{sanPham.danhMuc}</span></p>
              {isHotProduct && (
                <p className="text-xs text-red-500 font-medium mb-1">🔥 Sản phẩm bán chạy nhất</p>
              )}
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
              <p className="text-gray-700 text-center">
                <span className="font-bold text-orange-600">Sản phẩm này hiện chưa được bán online</span>
                <br />
                <span className="text-sm">
                  Bạn vui lòng mua trực tiếp tại cửa hàng hoặc đặt hàng qua các nền tảng thương mại điện tử của chúng tôi
                </span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-center text-gray-600 mb-3">Mua hàng qua:</p>
              
              {platforms.map((platform, index) => (
                <button
                  key={index}
                  onClick={(e) => handlePlatformClick(platform.url, e)}
                  className={`w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl text-black font-medium transition-all duration-300 hover:shadow-lg bg-orange-300 hover:bg-orange-400`}
                >
                  <span>{platform.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from { 
            transform: translateY(20px) scale(0.95); 
            opacity: 0; 
          }
          to { 
            transform: translateY(0) scale(1); 
            opacity: 1; 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}