import { ProvinceStats } from '../types';

interface ProvinceQuickAccessProps {
  provinces: ProvinceStats[];
  selectedProvince: string;
  onProvinceSelect: (province: string) => void;
}

export default function ProvinceQuickAccess({
  provinces,
  selectedProvince,
  onProvinceSelect
}: ProvinceQuickAccessProps) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl lg:text-3xl font-black text-gray-800 mb-8 text-center">
        Truy Cập Nhanh Theo Tỉnh Thành
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {provinces.map((tinh) => (
          <button
            key={tinh.ten}
            onClick={() => onProvinceSelect(tinh.ten)}
            className={`p-4 rounded-xl border-2 transition-all duration-300 text-center group ${
              selectedProvince === tinh.ten
                ? 'border-orange-500 bg-orange-50 text-orange-600'
                : 'border-gray-200 bg-white hover:border-orange-300 hover:bg-orange-50'
            }`}
          >
            <div className="font-bold text-lg mb-1 group-hover:text-orange-600">{tinh.ten}</div>
            <div className="text-sm text-gray-500 group-hover:text-orange-500">
              {tinh.soLuong} chi nhánh
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}