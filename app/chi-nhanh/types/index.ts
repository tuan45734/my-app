export interface ChiNhanh {
  id: number;
  ten: string;
  diaChi: string;
  tinhThanh: string;
  sdt: string;
  hinhAnh: string;
  
}
export interface FilterState {
  timKiem: string;
  tinhThanhLoc: string;
  trangThaiLoc: string;
}

export interface ProvinceStats {
  ten: string;
  soLuong: number;
  dangHoatDong: number;
}

export interface CuaHang {
  id: number;
  ten: string;
  diaChi: string;
  tinhThanh: string;
  sdt: string;
  hinhAnh: string;
  viTri: {
    lat: number;
    lng: number;
  };
}
export interface StoreFetchOptions {
  tinhThanh?: string;
  limit?: number;
  offset?: number;
}