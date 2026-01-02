"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Home, Package, MapPin, Info, Menu, X, Phone } from "lucide-react";

const navItems = [
  { href: "/", label: "Trang Chủ", icon: Home },
  { href: "/san-pham", label: "Sản Phẩm", icon: Package },
  { href: "/chi-nhanh", label: "Chi Nhánh", icon: MapPin },
  { href: "/gioi-thieu", label: "Giới Thiệu", icon: Info },
];

export default function Header() {
  const autoHideTimer = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const resetAutoHide = () => {
    if (autoHideTimer.current) clearTimeout(autoHideTimer.current);
    autoHideTimer.current = setTimeout(() => {
      setOpen(false);
      setHide(true);
    }, 3000);
  };
  const [hide, setHide] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHide(y > lastY.current && y > 120);
      lastY.current = y;
      resetAutoHide();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    resetAutoHide();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (autoHideTimer.current) clearTimeout(autoHideTimer.current);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-transform duration-300 ${hide ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="backdrop-blur-xl bg-white border-b border-orange-200/40">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 p-[2px]">
              <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dvg7ourbo/image/upload/v1766046738/logo22px_re6vqu.png"
                  alt="Logo"
                  className="w-6 h-6 group-hover:rotate-6 transition"
                />
              </div>
            </div>
            <span className="font-extrabold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent
                 text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-4xl 2xl:text-4xl
                 leading-tight">
              Ăn Cùng Bà Tuyết
            </span>
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-1 text-bold">
            {navItems.map((i) => {
              const Icon = i.icon;
              const active = pathname === i.href;
              return (
                <a
                  key={i.href}
                  href={i.href}
                  className={`px-4 py-2 rounded-xl flex items-center gap-2 font-bold transition  ${active
                      ? "bg-orange-100  text-orange-600 "
                      : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
                    }`}
                >
                  <Icon className="w-4 h-4 text-gray-700 " />
                 <span className="text-base max-[1010px]:text-xs"> {i.label} </span>
                </a>
              );
            })}
            <button
              onClick={() => document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" })}
              className="ml-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-400 to-orange-300 text-white font-semibold hover:scale-105 transition"
            >
              <Phone className="w-4 h-4 inline mr-1" /><span className="text-base max-[1010px]:text-xs"> Liên hệ </span> 
            </button>
          </nav>

          {/* Mobile */}
          <button
            onClick={() => {
              setOpen(!open);
              setHide(false);
              resetAutoHide();
            }}
            className="md:hidden w-10 h-10 rounded-xl border text-black border-orange-200 flex items-center justify-center"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white backdrop-blur-xl border-b border-orange-100">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((i) => {
              const Icon = i.icon;
              return (
                <a
                  key={i.href}
                  href={i.href}
                  onClick={() => {
                    setOpen(false);
                    resetAutoHide();
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-orange-50 transition"
                >
                  <Icon className="w-5 h-5 text-orange-500" />
                  {i.label}
                </a>
              );
            })}
            <button
              onClick={() => {
                setOpen(false);
                document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-orange-300 text-white font-semibold"
            >
              Liên hệ
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
