"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const product = {
  id: 1,
  name: "Tăm Cay Vị Tiêu Đen",
  image: "https://res.cloudinary.com/dvg7ourbo/image/upload/v1766038573/tcvtd2_rldqln.png",
};

export default function Products() {
  const router = useRouter();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [shake, setShake] = useState(false);
  // IntersectionObserver (nhẹ hơn scroll)
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.4 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Background subtle */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.08),transparent_60%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* IMAGE */}
        <div
          className={`group relative mx-auto w-72 h-72 md:w-96 md:h-96 transition-all duration-700
          ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-full bg-orange-400/20 blur-3xl group-hover:scale-110 transition-transform duration-700" />
          {/* BADGE NEW */}
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 text-xs font-bold tracking-wide bg-orange-500 text-white rounded-full animate-[pulse_3s_ease-in-out_infinite]">
              MỚI
            </span>
          </div>
          {/* Product */}
          <img
            src={product.image}
            alt={product.name}
            onClick={() => {
              setShake(true);
              setTimeout(() => setShake(false), 500);
            }}
            className={`cursor-pointer relative w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 ease-out  group-hover:rotate-[-2deg] group-hover:scale-105 ${shake ? "animate-shake" : ""} `}
          />
        </div>

        {/* NAME */}
        <h2
          className={`mt-12 text-4xl md:text-6xl font-extrabold tracking-tight  transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            {product.name}
          </span>
        </h2>

        {/* UNDERLINE */}
        <div
          className={`mx-auto mt-6 h-[3px] bg-gradient-to-r from-orange-500 to-amber-500 rounded-full  transition-all duration-700
          ${visible ? "w-56" : "w-0"}`}
        />

        {/* BUTTON */}
        <div
          className={`mt-14 transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <button
            onClick={() => router.push("/san-pham")}
            className="relative inline-flex items-center gap-3 px-9 py-4 rounded-full font-semibold text-lg text-white  bg-gradient-to-r from-orange-500 to-amber-500    shadow-lg shadow-orange-500/30  hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Xem tất cả sản phẩm
            <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
      <style jsx global>{`
  @keyframes shake {
    0% { transform: translateX(0) rotate(0); }
    20% { transform: translateX(-6px) rotate(-2deg); }
    40% { transform: translateX(6px) rotate(2deg); }
    60% { transform: translateX(-4px) rotate(-1deg); }
    80% { transform: translateX(4px) rotate(1deg); }
    100% { transform: translateX(0) rotate(0); }
  }

  .animate-shake {
    animation: shake 0.4s ease-in-out;
  }
`}</style>
    </section>

  );

}
