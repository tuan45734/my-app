"use client";

import { useState, useEffect } from "react";
import { ChiNhanh, CuaHang, FilterState } from "./types";
import { danhSachChiNhanh } from "./data/branches";
import HeroSection from "./components/HeroSection";
import BranchGrid from "./components/BranchGrid";
import StoreSection from "./components/StoreSection";
import CTASection from "./components/CTASection";

export default function ChiNhanhPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState<FilterState>({
    timKiem: "",
    tinhThanhLoc: "Tất cả",
    trangThaiLoc: "Tất cả"
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  const danhSachTinhThanh = [
    "Tất cả",
    ...Array.from(new Set(danhSachChiNhanh.map(cn => cn.tinhThanh)))
  ];
  const chiNhanhLoc = danhSachChiNhanh.filter(cn =>
    filters.tinhThanhLoc === "Tất cả"
      ? true
      : cn.tinhThanh === filters.tinhThanhLoc
  );

  const moGoogleMaps = (location: ChiNhanh | CuaHang) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${location.viTri.lat},${location.viTri.lng}`;
    window.open(url, "_blank");
  };

  if (isLoading) {
    return <div className="min-h-screen bg-white animate-pulse h-96" />;
  }

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <BranchGrid
        branches={chiNhanhLoc}
        filters={filters}
        onNavigate={moGoogleMaps}
        onResetFilters={() =>
          setFilters({
            timKiem: "",
            tinhThanhLoc: "Tất cả",
            trangThaiLoc: "Tất cả"
          })
        }
      />

      <StoreSection
        onNavigate={moGoogleMaps}
      />
      <CTASection />
    </div>
  );
}