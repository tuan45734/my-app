import { CuaHang } from '../types';

interface StoreCardProps {
  cuaHang: CuaHang;
  onNavigate: (cuaHang: CuaHang) => void;
}

export default function StoreCard({ cuaHang, onNavigate }: StoreCardProps) {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-1 w-full flex flex-col h-full">
      <div className="relative h-40 overflow-hidden flex-shrink-0">
        {cuaHang.hinhAnh ? (
          <img 
            src={cuaHang.hinhAnh} 
            alt={cuaHang.ten}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.currentTarget.src = 'https://via.placeholder.com/400x200/4F46E5/FFFFFF?text=Cửa+Hàng';
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center">
            <svg className="w-12 h-12 text-white opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        )}
        <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
          {cuaHang.tinhThanh}
        </div>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="text-base font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors line-clamp-2 leading-tight">
          {cuaHang.ten}
        </h3>
        <div className="space-y-2 mb-4 flex-1">
          <div className="flex items-start">
            <svg className="w-4 h-4 text-orange-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            <span className="text-sm text-gray-600 leading-relaxed line-clamp-2">{cuaHang.diaChi}</span>
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-sm text-gray-600 font-medium">{cuaHang.sdt}</span>
          </div>
        </div>
        <button
          onClick={() => onNavigate(cuaHang)}
          className="w-full mt-auto flex items-center justify-center gap-2 text-orange-600 hover:text-white hover:bg-orange-500 transition-all duration-300 py-2.5 text-sm font-medium border border-orange-300 rounded-lg group-hover:border-orange-500"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Xem đường đi
        </button>
      </div>
    </div>
  );
}