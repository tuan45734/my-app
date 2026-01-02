"use client";

import { useState } from 'react';

export default function CertificationsSection() {
  const [activeCert, setActiveCert] = useState<string | null>(null);

  const chungNhan = [
    {
      id: 1,
      ten: "Chứng nhận VSATTP",
      moTa: "Đạt tiêu chuẩn vệ sinh an toàn thực phẩm",
      hinhAnh: "https://res.cloudinary.com/dvg7ourbo/image/upload/v1763796137/%C4%90C_3._C%E1%BB%A4M_CN_%C4%90AN_PH%C6%AF%E1%BB%A2NG_page-0001_zenhnm.jpg"
    },
    {
      id: 2,
      ten: "Chứng nhận ISO 22000",
      moTa: "Hệ thống quản lý an toàn thực phẩm",
      hinhAnh: "https://res.cloudinary.com/dvg7ourbo/image/upload/v1763796137/%C4%90C_3._C%E1%BB%A4M_CN_%C4%90AN_PH%C6%AF%E1%BB%A2NG_page-0001_zenhnm.jpg" // Thay bằng link thực tế
    },
    {
      id: 3,
      ten: "Giải thưởng chất lượng",
      moTa: "Sản phẩm được người tiêu dùng bình chọn",
      hinhAnh: "https://res.cloudinary.com/dvg7ourbo/image/upload/v1763796137/%C4%90C_3._C%E1%BB%A4M_CN_%C4%90AN_PH%C6%AF%E1%BB%A2NG_page-0001_zenhnm.jpg" // Thay bằng link thực tế
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">
          Chứng Nhận Chất Lượng
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chungNhan.map((cert) => (
            <div 
              key={cert.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setActiveCert(activeCert === cert.hinhAnh ? null : cert.hinhAnh)}
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img 
                  src={cert.hinhAnh} 
                  alt={cert.ten}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-orange-600">{cert.ten}</h3>
                <p className="text-orange-600">{cert.moTa}</p>
              </div>
            </div>
          ))}
        </div>
        {activeCert && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setActiveCert(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img 
                src={activeCert} 
                alt="Chứng nhận"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}