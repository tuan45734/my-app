import { ChiNhanh } from '../types';
import BranchCard from './BranchCard';
import { useState, useMemo, useEffect } from 'react';

interface BranchGridProps {
  branches: ChiNhanh[];
  filters: {
    tinhThanhLoc: string;
    trangThaiLoc: string;
  };
  onNavigate: (chiNhanh: ChiNhanh) => void;
  onResetFilters: () => void;
}

export default function BranchGrid({
  branches,
  filters,
  onNavigate,
  onResetFilters
}: BranchGridProps) {
  const [trangHienTai, setTrangHienTai] = useState(1);
  const [tinhThanhLocLocal, setTinhThanhLocLocal] = useState<string>('Tất cả');
  const soLuongTrenTrang = 8;
  useEffect(() => {
    setTrangHienTai(1);
  }, [filters]);

  const danhSachTinhThanh = useMemo(() => {
    const provinces = ['Tất cả', ...new Set(branches.map(branch => branch.tinhThanh))];
    return provinces;
  }, [branches]);

  const branchesFiltered = useMemo(() => {
    if (tinhThanhLocLocal === 'Tất cả') {
      return branches;
    }
    return branches.filter(branch => branch.tinhThanh === tinhThanhLocLocal);
  }, [branches, tinhThanhLocLocal]);

  const { branchesTrangHienTai, tongSoTrang } = useMemo(() => {
    const tongSoTrang = Math.ceil(branchesFiltered.length / soLuongTrenTrang);
    const batDau = (trangHienTai - 1) * soLuongTrenTrang;
    const ketThuc = batDau + soLuongTrenTrang;
    const branchesTrangHienTai = branchesFiltered.slice(batDau, ketThuc);

    return { branchesTrangHienTai, tongSoTrang };
  }, [branchesFiltered, trangHienTai]);

  useEffect(() => {
    setTinhThanhLocLocal('Tất cả');
  }, [filters]);

  if (branchesFiltered.length === 0) {
    return (
      <div className="text-center py-16 lg:py-24">
        <div className="max-w-md mx-auto">
          <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-16 h-16 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Không tìm thấy chi nhánh phù hợp</h3>
          <p className="text-gray-600 mb-6">Hãy thử điều chỉnh bộ lọc hoặc tìm kiếm với từ khóa khác</p>
          <button
            onClick={() => {
              onResetFilters();
              setTinhThanhLocLocal('Tất cả');
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            Hiển thị tất cả chi nhánh
          </button>
        </div>
      </div>
    );
  }

  const chuyenTrang = (trangMoi: number) => {
    setTrangHienTai(trangMoi);
  };

  const vePhanTrang = () => {
    const nutPhanTrang = [];
    const soNutHienThi = 5;

    let batDau = Math.max(1, trangHienTai - Math.floor(soNutHienThi / 2));
    let ketThuc = Math.min(tongSoTrang, batDau + soNutHienThi - 1);

    if (ketThuc - batDau + 1 < soNutHienThi) {
      batDau = Math.max(1, ketThuc - soNutHienThi + 1);
    }
    if (trangHienTai > 1) {
      nutPhanTrang.push(
        <button
          key="prev"
          onClick={() => chuyenTrang(trangHienTai - 1)}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors"
        >
          ←
        </button>
      );
    }
    if (batDau > 1) {
      nutPhanTrang.push(
        <button
          key={1}
          onClick={() => chuyenTrang(1)}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors"
        >
          1
        </button>
      );
      if (batDau > 2) {
        nutPhanTrang.push(
          <span key="ellipsis1" className="px-3 py-2 text-sm text-gray-500">
            ...
          </span>
        );
      }
    }
    for (let i = batDau; i <= ketThuc; i++) {
      nutPhanTrang.push(
        <button
          key={i}
          onClick={() => chuyenTrang(i)}
          className={`px-3 py-2 text-sm font-medium border rounded-lg transition-colors ${i === trangHienTai
              ? 'bg-orange-500 text-white border-orange-500'
              : 'bg-white text-gray-500 border-gray-300 hover:bg-gray-50 hover:text-gray-700'
            }`}
        >
          {i}
        </button>
      );
    }
    if (ketThuc < tongSoTrang) {
      if (ketThuc < tongSoTrang - 1) {
        nutPhanTrang.push(
          <span key="ellipsis2" className="px-3 py-2 text-sm text-gray-500">
            ...
          </span>
        );
      }
      nutPhanTrang.push(
        <button
          key={tongSoTrang}
          onClick={() => chuyenTrang(tongSoTrang)}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors"
        >
          {tongSoTrang}
        </button>
      );
    }
    if (trangHienTai < tongSoTrang) {
      nutPhanTrang.push(
        <button
          key="next"
          onClick={() => chuyenTrang(trangHienTai + 1)}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors"
        >
          →
        </button>
      );
    }
    return nutPhanTrang;
  };

  const handleTinhThanhChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setTinhThanhLocLocal(value);
    setTrangHienTai(1);
  };

  return (
    <section className="py-8 lg:py-12">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4 px-2">
          <div className="w-full">
            <h2 className="text-2xl lg:text-3xl font-black text-orange-600 mb-2">
              Danh Sách Nhà Phân Phối
              <span className="text-orange-400 ml-2 text-xl lg:text-2xl">
                ({branches.length} NPP)
              </span>
              {(filters.tinhThanhLoc !== 'Tất cả' || filters.trangThaiLoc !== 'Tất cả' || tinhThanhLocLocal !== 'Tất cả') && (
                <span className="text-gray-600 ml-2 text-base lg:text-lg font-normal">
                  ({branchesFiltered.length} kết quả phù hợp)
                </span>
              )}
            </h2>
            <div className="mt-4 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </div>
                    <select
                      value={tinhThanhLocLocal}
                      onChange={handleTinhThanhChange}
                      className="w-full pl-10 pr-4 py-3 text-orange-800 rounded-lg border border-orange-300 focus:outline-none focus:border-orange-500 bg-white"
                    >
                      {danhSachTinhThanh.map(tinhThanh => (
                        <option key={tinhThanh} value={tinhThanh}>
                          {tinhThanh}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {(filters.tinhThanhLoc !== 'Tất cả' || filters.trangThaiLoc !== 'Tất cả' || tinhThanhLocLocal !== 'Tất cả') && (
                  <button
                    onClick={() => {
                      onResetFilters();
                      setTinhThanhLocLocal('Tất cả');
                    }}
                    className="px-6 py-3 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-lg font-medium transition-colors whitespace-nowrap"
                  >
                    Xóa tất cả bộ lọc
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {branchesTrangHienTai.map((chiNhanh) => (
              <BranchCard
                key={chiNhanh.id}
                chiNhanh={chiNhanh}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
        {tongSoTrang > 1 && (
          <div className="flex justify-center mt-8 lg:mt-12">
            <div className="flex items-center space-x-1 lg:space-x-2">
              {vePhanTrang()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}