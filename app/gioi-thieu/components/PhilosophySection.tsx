"use client";

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Leaf, Shield, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PhilosophySection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const philosophies = [
    {
      id: 1,
      icon: <Leaf className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Nguyên Liệu Thuần Khiết",
      description: "Cam kết nguồn gốc rõ ràng, ưu tiên nguyên liệu sạch và tự nhiên từ các nhà cung cấp uy tín",
     
    },
   
    {
      id: 3,
      icon: <Shield className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Không Chất Bảo Quản",
      description: "Cam kết không sử dụng hóa chất độc hại, đảm bảo an toàn tuyệt đối cho sức khỏe",
     
    },
    {
      id: 4,
      icon: <Heart className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Tâm Huyết Trong Từng Sản Phẩm",
      description: "Mỗi sản phẩm là một tác phẩm nghệ thuật, được tạo ra với tất cả tình yêu và đam mê",
      
    }
  ];
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % philosophies.length);
    }, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handlePrev = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveIndex((prev) => (prev === 0 ? philosophies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveIndex((prev) => (prev + 1) % philosophies.length);
  };

  const handleDotClick = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActiveIndex(index);
  };

  return (
    <section className="py-12 md:py-20 bg-weight from-white ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-3 md:mb-4"
          >
            <span className="px-3 py-1.5 md:px-4 md:py-2 bg-gradient-to-r from-orange-500 to-orange-300 text-white text-xs md:text-sm font-semibold rounded-full shadow-md">
              TRIẾT LÝ CỦA CHÚNG TÔI
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-gray-800"
          >
    
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-orange-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
          >
            Những giá trị cốt lõi tạo nên sự khác biệt và chất lượng trong từng sản phẩm
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between gap-4 md:gap-8 mb-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0"
              aria-label="Giá trị trước"
            >
              <ChevronLeft className="w-5 h-5 text-gray-700" />
            </button>

            <div className="flex-1">
              <AnimatePresence mode="wait">
                {philosophies.map((philo, index) =>
                  index === activeIndex && (
                    <motion.div
                      key={philo.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white rounded-2xl shadow-xl overflow-hidden"
                    >
                      <div className={`bg-orange-50 p-6 md:p-8`}>
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
                          <div className="flex items-center gap-4">
                            <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl bg-orange-50 border-2 border-orange-200 flex items-center justify-center`}>
                              <div className={`text-orange-600`}>
                                {philo.icon}
                              </div>
                            </div>
                            <div>
                              <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold text-orange-600 mb-2`}>
                                {philo.title}
                              </h3>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-gray-500">
                              {index + 1} / {philosophies.length}
                            </div>
                            <div className="flex items-center gap-1">
                              {philosophies.map((_, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => handleDotClick(idx)}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIndex
                                    ? `bg-gradient-to-r from-orange-500 to-orange-300 w-8`
                                    : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-6 md:p-8">
                        <p className="text-orange-600 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                          {philo.description}
                        </p>

                        
                      </div>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0"
              aria-label="Giá trị tiếp theo"
            >
              <ChevronRight className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}