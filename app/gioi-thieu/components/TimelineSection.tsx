"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { timelineData } from "../data/timelineData";
import { ArrowUpRight, Minus } from "lucide-react";

export default function TimelineSection() {
  const [centerIndex, setCenterIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;

        requestAnimationFrame(() => {
          const items = document.querySelectorAll("[data-index]");
          const viewportCenter = window.innerHeight / 2;
          let closestIndex: number | null = null;
          let minDistance = Infinity;

          items.forEach((item) => {
            const rect = item.getBoundingClientRect();
            const itemCenter = rect.top + rect.height / 2;
            const distance = Math.abs(itemCenter - viewportCenter);

            if (distance < minDistance && distance < 200) {
              minDistance = distance;
              closestIndex = Number(item.getAttribute("data-index"));
            }
          });

          setCenterIndex(closestIndex);
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-px bg-gray-300" />
            <Minus className="w-5 h-5 text-gray-400 rotate-45" />
            <div className="w-12 h-px bg-gray-300" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-orange-600 mb-4">
            Hành Trình Phát Triển
          </h2>
          <p className="text-orange-600">
            Những cột mốc đáng nhớ trên chặng đường xây dựng thương hiệu
          </p>
        </div>
        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-gray-200 via-gray-400 to-gray-200" />

          <div className="space-y-40">
            {timelineData.map((item, index) => {
              const isCenter = centerIndex === index;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  data-index={index}
                  className="relative flex items-center min-h-[200px]"
                >
                  <div
                    className={`w-1/2 ${
                      isEven ? "pr-16 text-right" : "order-3 pl-16"
                    }`}
                  >
                    <div
                      className={`transition-all duration-300 ${
                        isCenter
                          ? "opacity-100 translate-x-0"
                          : `opacity-30 ${
                              isEven ? "-translate-x-4" : "translate-x-4"
                            }`
                      }`}
                    >
                      <div
                        className={`inline-flex items-center gap-2 mb-3 ${
                          isEven ? "flex-row-reverse" : ""
                        }`}
                      >
                        <span
                          className={`text-lg font-medium ${
                            isCenter ? "text-orange-600" : "text-gray-400"
                          }`}
                        >
                          {item.year}
                        </span>
                        <div
                          className={`w-6 h-px ${
                            isCenter ? "bg-orange-500/50" : "bg-gray-300"
                          }`}
                        />
                      </div>

                      <h3
                        className={`text-3xl font-semibold mb-2 ${
                          isCenter ? "text-orange-600" : "text-gray-400"
                        }`}
                      >
                        {item.title}
                      </h3>

                      <p
                        className={`text-lg leading-relaxed mb-3 ${
                          isCenter ? "text-orange-600" : "text-gray-400"
                        }`}
                      >
                        {item.description}
                      </p>

                      {item.link && isCenter && (
                        <Link
                          href={item.link}
                          className="inline-flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700"
                        >
                          {item.linkText}
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </Link>
                      )}
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-5 h-5 rounded-full border-2 bg-white transition-all duration-300 ${
                        isCenter
                          ? "border-orange-500 scale-125"
                          : "border-gray-300"
                      }`}
                    />
                  </div>
                  <div
                    className={`w-1/2 ${
                      isEven ? "order-3 pl-16" : "pr-16"
                    }`}
                  >
                    <div
                      className={`transition-all duration-300 ${
                        isCenter
                          ? "opacity-100 scale-100"
                          : "opacity-30 scale-95"
                      }`}
                    >
                      <div className="rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                        <div className="aspect-[16/9] relative">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:hidden space-y-12">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-12">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200" />
              <div className="absolute left-0 top-0 w-10 h-10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-gray-900" />
              </div>

              <div className="space-y-3">
                <div className="text-sm font-medium text-orange-600">
                  {item.year}
                </div>
                <h3 className="text-2xl font-semibold text-orange-600">
                  {item.title}
                </h3>
                <p className="text-orange-600 text-sx">
                  {item.description}
                </p>

                <div className="mt-4 rounded-lg overflow-hidden bg-gray-100">
                  <div className="aspect-[16/9] relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {item.link && (
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1 text-sm font-medium text-orange-600 hover:text-orange-700 mt-3"
                  >
                    {item.linkText}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
