// components/san-pham/FilterSection.tsx
import { FilterProps } from './types';
import { useState } from 'react';

export default function FilterSection({
  locDanhMuc,
  setLocDanhMuc,
  timKiem,
  setTimKiem,
  danhMucs,
  soLuongSanPham
}: FilterProps) {
  const [showBimBimDropdown, setShowBimBimDropdown] = useState(false);
  const danhMucChinh = ['Tất cả', 'Bim bim', 'Snack ướt', 'Chân gà', 'Nước sốt'];
  const danhMucBimBim = ['Tất cả Bim bim', 'Bim bim gói 5k', 'Bim bim gói 10k', 'Bim bim hũ'];

  const handleBimBimClick = (danhMuc: string) => {
    if (danhMuc === 'Bim bim') {
      setShowBimBimDropdown(!showBimBimDropdown);
      if (locDanhMuc.includes('Bim bim') && locDanhMuc !== 'Bim bim') {
      } else {
        setLocDanhMuc('Bim bim');
      }
    } else {
      setShowBimBimDropdown(false);
      setLocDanhMuc(danhMuc);
    }
  };

  const handleBimBimSubClick = (danhMuc: string) => {
    if (danhMuc === 'Tất cả Bim bim') {
      setLocDanhMuc('Bim bim');
    } else {
      setLocDanhMuc(danhMuc);
    }
    setShowBimBimDropdown(false);
  };
  const isBimBimSubSelected = 
    locDanhMuc.includes('Bim bim') && 
    !['Bim bim', ''].includes(locDanhMuc);

  const getDisplayText = (danhMuc: string) => {
    if (danhMuc === 'Bim bim') {
      if (isBimBimSubSelected) {
        return `Bim bim (${locDanhMuc.replace('Bim bim ', '')})`;
      }
      return 'Bim bim';
    }
    return danhMuc;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
      <div className="mb-6">
        <div className="relative group max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Tìm kiếm món ăn..."
            value={timKiem}
            onChange={(e) => setTimKiem(e.target.value)}
            className="w-full px-6 py-3 border-2 border-gray-200 rounded-2xl 
             focus:outline-none focus:border-orange-500
             focus:ring-4 focus:ring-orange-100
             text-gray-600 text-lg transition-all shadow-sm group-hover:shadow-md"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-orange-500">
            <svg className="w-6 h-6 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {danhMucChinh.map(danhMuc => (
            <button
              key={danhMuc}
              onClick={() => handleBimBimClick(danhMuc)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 border-2 min-w-[100px] relative ${
                (danhMuc === 'Tất cả' && locDanhMuc === 'Tất cả') || 
                (danhMuc === 'Bim bim' && (locDanhMuc === 'Bim bim' || isBimBimSubSelected)) ||
                (danhMuc !== 'Bim bim' && locDanhMuc === danhMuc)
                  ? 'bg-orange-500 text-white border-orange-500 shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 hover:shadow-md'
              }`}
            >
              {getDisplayText(danhMuc)}
              {danhMuc === 'Bim bim' && (
                <span className={`ml-1 inline-block transition-transform ${
                  showBimBimDropdown ? 'rotate-180' : ''
                }`}>^</span>
              )}
            </button>
          ))}
        </div>
        {showBimBimDropdown && (
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl z-11 min-w-[200px] overflow-hidden ">
            {danhMucBimBim.map(subDanhMuc => (
              <button
                key={subDanhMuc}
                onClick={() => handleBimBimSubClick(subDanhMuc)}
                className={`w-full text-left px-4 py-3 hover:bg-orange-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0 ${
                  (subDanhMuc === 'Tất cả Bim bim' && locDanhMuc === 'Bim bim') ||
                  locDanhMuc === subDanhMuc
                    ? 'bg-orange-100 text-orange-600 font-medium'
                    : 'text-gray-700'
                }`}
              >
                {subDanhMuc}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-gray-100">
        <p className="text-gray-600 text-center sm:text-left">
          Tìm thấy <span className="font-bold text-orange-600">{soLuongSanPham}</span> sản phẩm
          {locDanhMuc && locDanhMuc !== 'Tất cả' && (
            <span> trong danh mục <span className="font-bold text-orange-600">
              {isBimBimSubSelected ? locDanhMuc : locDanhMuc}
            </span></span>
          )}
        </p>
        
        {(locDanhMuc || timKiem) && (
          <button
            onClick={() => {
              setLocDanhMuc('Tất cả');
              setTimKiem('');
              setShowBimBimDropdown(false);
            }}
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium whitespace-nowrap"
          >
            Hiển thị tất cả
          </button>
        )}
      </div>
    </div>
  );
}