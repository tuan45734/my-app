"use client";

import { CuaHang } from '../types';
import StoreCard from './StoreCard';
import { useState, useMemo, useEffect } from 'react';
import { StoreService } from '../services/storeService';

interface StoreSectionProps {

  onNavigate: (cuaHang: CuaHang) => void;
}

export default function StoreSection({ onNavigate }: StoreSectionProps) {
  const [filters, setFilters] = useState({
    tinhThanh: 'Tất cả',
    timKiem: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [stores, setStores] = useState<CuaHang[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const itemsPerPage = 8;
  useEffect(() => {
    loadStores();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters.tinhThanh, filters.timKiem]);

  async function loadStores() {
    setIsLoading(true);
    setError(null);

    try {
      const fetchedStores = await StoreService.getStores();
      setStores(fetchedStores);
    } catch (err) {
      setError('Không thể tải dữ liệu cửa hàng');
      console.error('Error loading stores:', err);
    } finally {
      setIsLoading(false);
    }
  }

  const normalizeString = (str: string): string => {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'd');
  };

  const filteredStores = useMemo(() => {
    if (!stores.length) return [];

    const searchTerm = normalizeString(filters.timKiem);

    return stores.filter(store => {
      const matchProvince = filters.tinhThanh === 'Tất cả' || store.tinhThanh === filters.tinhThanh;

      if (!searchTerm.trim()) {
        return matchProvince;
      }

      const normalizedTen = normalizeString(store.ten);
      const normalizedDiaChi = normalizeString(store.diaChi);

      const matchSearch = normalizedTen.includes(searchTerm) ||
        normalizedDiaChi.includes(searchTerm);

      return matchProvince && matchSearch;
    });
  }, [stores, filters.tinhThanh, filters.timKiem]);

  const { currentStores, totalPages } = useMemo(() => {
    if (!filteredStores.length) {
      return { currentStores: [], totalPages: 0 };
    }

    const totalPages = Math.ceil(filteredStores.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentStores = filteredStores.slice(startIndex, endIndex);

    return { currentStores, totalPages };
  }, [filteredStores, currentPage]);

  const danhSachTinhThanh = useMemo(() => {
    if (!stores.length) return ['Tất cả'];

    const provinces = ['Tất cả', ...new Set(stores.map(store => store.tinhThanh))];
    return provinces;
  }, [stores]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const element = document.getElementById('store-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters(prev => ({
      ...prev,
      timKiem: e.target.value
    }));
  };

  const handleResetFilters = () => {
    setFilters({
      tinhThanh: 'Tất cả',
      timKiem: ''
    });
  };

  const renderPagination = () => {
    const buttons = [];
    const maxVisibleButtons = 5;

    let start = Math.max(1, currentPage - Math.floor(maxVisibleButtons / 2));
    let end = Math.min(totalPages, start + maxVisibleButtons - 1);

    if (end - start + 1 < maxVisibleButtons) {
      start = Math.max(1, end - maxVisibleButtons + 1);
    }
    if (currentPage > 1) {
      buttons.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors"
        >
          ←
        </button>
      );
    }
    if (start > 1) {
      buttons.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors"
        >
          1
        </button>
      );
      if (start > 2) {
        buttons.push(
          <span key="ellipsis1" className="px-3 py-2 text-sm text-gray-500">
            ...
          </span>
        );
      }
    }
    for (let i = start; i <= end; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-2 text-sm font-medium border rounded-lg transition-colors ${i === currentPage
              ? 'bg-orange-500 text-white border-orange-500'
              : 'bg-white text-gray-500 border-gray-300 hover:bg-gray-50 hover:text-gray-700'
            }`}
        >
          {i}
        </button>
      );
    }
    if (end < totalPages) {
      if (end < totalPages - 1) {
        buttons.push(
          <span key="ellipsis2" className="px-3 py-2 text-sm text-gray-500">
            ...
          </span>
        );
      }
      buttons.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors"
        >
          {totalPages}
        </button>
      );
    }
    if (currentPage < totalPages) {
      buttons.push(
        <button
          key="next"
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 transition-colors"
        >
          →
        </button>
      );
    }

    return buttons;
  };

  if (isLoading) {
    return (
      <section id="store-section" className="py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center py-16">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/4 mx-auto mb-4"></div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6 mb-8">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="bg-gray-100 rounded-xl h-64"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="store-section" className="py-8 lg:py-12 bg-white">
        <div className="container mx-auto px-4 text-center py-16">
          <div className="text-red-500 mb-4">{error}</div>
          <button
            onClick={loadStores}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg"
          >
            Thử lại
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="store-section" className="py-8 lg:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          <div>
            <h2 className="text-2xl lg:text-3xl font-black text-orange-600 mb-1">
              Cửa Hàng & Điểm Bán
              <span className="text-orange-400 ml-2 text-xl lg:text-2xl">
                ({filteredStores.length} cửa hàng)
              </span>
            </h2>
            <p className="text-orange-400  text-sm lg:text-xl">Hiện tại chúng tôi đã có hơn 40000 điểm bán và sẽ sớm cập nhật thêm</p>
          </div>
        </div>
        <div className="mb-8 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm theo tên hoặc địa chỉ..."
                value={filters.timKiem}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-3 text-orange-800 rounded-lg border border-orange-300 focus:outline-none focus:border-orange-500 bg-white"
              />
              {filters.timKiem && (
                <button
                  onClick={() => setFilters(prev => ({ ...prev, timKiem: '' }))}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            <div>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                </div>
                <select
                  value={filters.tinhThanh}
                  onChange={(e) => setFilters({ ...filters, tinhThanh: e.target.value })}
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
          </div>
          {(filters.tinhThanh !== 'Tất cả' || filters.timKiem) && (
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleResetFilters}
                className="px-6 py-2 bg-orange-100 hover:bg-orange-200 text-orange-700 rounded-lg font-medium transition-colors whitespace-nowrap"
              >
                Xóa tất cả bộ lọc
              </button>
            </div>
          )}
        </div>
        {currentStores.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-6 mb-8">
              {currentStores.map((cuaHang) => (
                <StoreCard
                  key={cuaHang.id}
                  cuaHang={cuaHang}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
            {totalPages > 1 && (
              <div className="flex justify-center mt-8 lg:mt-12">
                <div className="flex items-center space-x-1 lg:space-x-2">
                  {renderPagination()}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-16 h-16 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-orange-800 mb-4">
                {filters.timKiem ? 'Không tìm thấy cửa hàng phù hợp với từ khóa' : 'Không tìm thấy cửa hàng phù hợp'}
              </h3>
              <p className="text-orange-600 mb-6">
                {filters.timKiem
                  ? `Không có cửa hàng nào khớp với "${filters.timKiem}"`
                  : 'Hãy thử điều chỉnh bộ lọc để tìm kiếm cửa hàng'}
              </p>
              <button
                onClick={handleResetFilters}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                Hiển thị tất cả cửa hàng
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}