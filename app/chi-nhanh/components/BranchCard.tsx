import { ChiNhanh } from '../types';

interface BranchCardProps {
    chiNhanh: ChiNhanh;
   
}

export default function BranchCard({ chiNhanh }: BranchCardProps) {
    return (
        <div className="group bg-white rounded-xl lg:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-1 lg:hover:-translate-y-2 w-full flex flex-col h-full">
            <div className="relative h-32 lg:h-36 bg-gradient-to-br from-orange-400 to-pink-500 overflow-hidden flex-shrink-0">
                <div className="w-full h-full">
                    <img
                        src={chiNhanh.hinhAnh}
                        alt={chiNhanh.ten}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute top-2 right-2 bg-orange-800 text-white px-2 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                    {chiNhanh.tinhThanh}
                </div>
            </div>
            <div className="p-3 lg:p-4 flex-1 flex flex-col">
                <h3 className="text-xs lg:text-sm font-bold text-gray-800 mb-2 group-hover:text-orange-500 transition-colors line-clamp-2 leading-tight">
                    {chiNhanh.ten}
                </h3>
                <div className="space-y-2 mb-3 lg:mb-4 flex-1">
                    <div className="flex items-start">
                        <svg className="w-3 h-3 lg:w-4 lg:h-4 text-orange-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        <span className="text-[10px] lg:text-xs text-gray-600 leading-relaxed line-clamp-2">{chiNhanh.diaChi}</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="w-3 h-3 lg:w-4 lg:h-4 text-orange-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-[10px] lg:text-xs text-gray-600">{chiNhanh.sdt || 'Chưa có thông tin'}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}