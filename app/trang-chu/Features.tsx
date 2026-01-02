// my-app/trang-chu/Features.tsx
'use client';

import { useRouter } from 'next/navigation';

const features = [
  {
    
    title: "Chất lượng",
    description: "Đảm bảo vệ sinh an toàn thực phẩm",
    action: "goto_intro" 
  },
  {
 
    title: "Khuyến mãi",
    description: "Ưu đãi hàng tuần, quà tặng khủng",
    action: "scroll_to_promotion" 
  },
  {
    
    title: "Giá",
    description: "Giá cả hợp lý, phù hợp thị trường",
    action: "goto_products" 
  },
  {
   
    title: "Sản phẩm",
    description: "Đa dạng sản phẩm, hương vị đầy đủ",
    action: "goto_products" 
  }
];
console.log('Developed by Hoàng Văn Tuấn PH45734.');
export default function Features() {
  const router = useRouter();

  const handleFeatureClick = (action: string) => {
    
    switch(action) {
      case 'goto_intro':
        router.push('/gioi-thieu');
        break;
      case 'scroll_to_promotion':
        const promotionElement = document.getElementById('promotion-section');
        if (promotionElement) {
          promotionElement.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'goto_products':
        router.push('/san-pham');
        break;
      default:
        break;
    }
  };

  return (
    <section className="py-8 md:py-16 bg-white w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl   font-bold text-center text-orange-600 mb-3 md:mb-4">
          Chào mừng bạn đến với Ăn cùng Bà Tuyết!
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-orange-600  text-center mb-6 md:mb-8 lg:mb-12 px-2 sm:px-0">
          Chúng tôi mang đến những món ăn vặt không chỉ ngon miệng mà còn đảm bảo sạch sẽ và an toàn cho sức khỏe có cơ hội rinh về những phần quà lớn
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 ">
          {features.map((feature, index) => (
            <div 
              key={index}
              onClick={() => handleFeatureClick(feature.action)}
              className="relative rounded-xl transform hover:-translate-y-2 sm:hover:-translate-y-2 md:hover:-translate-y-2 lg:hover:-translate-y-2 transition duration-500 text-center overflow-hidden cursor-pointer group "
            >
              <img 
                src="https://res.cloudinary.com/dvg7ourbo/image/upload/v1763787527/khung-06_fxlhwt.png"
                alt={feature.title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4 pt-8 sm:p-4 md:p-4 lg:p-6 ">
                
                <h3 className="text-sm sm:text-base md:text-lg lg:text-3xl font-bold text-orange-600 mb-1 sm:mb-1">
                  {feature.title}
                </h3>
                <p className="text-[10px] sm:text-sm md:text-base lg:text-xl text-orange-500 px-1 sm:px-1">
                  {feature.description}
                </p>
                <div className="mt-2 text-xs text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  👉 Nhấn để xem chi tiết
                </div>
              </div>
              <div className="absolute inset-0 0 from-transparent via-transparent 0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}