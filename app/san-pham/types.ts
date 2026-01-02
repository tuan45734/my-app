
export interface SanPham {
  id: number;
  ten: string;
  danhMuc: string;
  hinhAnh: string;
  hot: boolean;
}

export interface FilterProps {
  locDanhMuc: string;
  setLocDanhMuc: (danhMuc: string) => void;
  timKiem: string;
  setTimKiem: (timKiem: string) => void;
  danhMucs: string[];
  soLuongSanPham: number;
}