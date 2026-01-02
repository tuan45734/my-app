"use client";

interface SearchFiltersProps {
  tinhThanh: string;
  onTinhThanhChange: (value: string) => void;
  danhSachTinhThanh: string[];
}

export default function SearchFilters({
  tinhThanh,
  onTinhThanhChange,
  danhSachTinhThanh
}: SearchFiltersProps) {
  return (
    <section className="py-4 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </svg>
            </div>
            <select
              value={tinhThanh}
              onChange={(e) => onTinhThanhChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-orange-300 text-orange-800
                         focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-500"
            >
              {danhSachTinhThanh.map((tinh) => (
                <option key={tinh} value={tinh}>
                  {tinh}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
