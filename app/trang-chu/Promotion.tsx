'use client';

export default function Promotion() {
  const platforms = [
    {
      name: 'TikTok',
      url: 'https://tiktok.com/@batuyethanhvi',
    },
    {
      name: 'Shopee',
      url: 'https://shopee.vn/nmtvlog99',
    },
    {
      name: 'Lazada',
      url: 'https://www.lazada.vn/shop/an-cung-ba-tuyet',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/ancungbatuyet',
    }
  ];

  return (
    <section id="promotion-section" className="relative bg-white overflow-hidden">
      {/* Background image */}
      <img 
        src="https://res.cloudinary.com/dvg7ourbo/image/upload/v1767342726/pnkm3_zke6z5.png" 
        alt="Promotion Background"
        className="w-full h-auto"
      />
      
      {/* Buttons positioned absolutely over image */}
      <div className="absolute bottom-[10%] md:bottom-[20%] left-1/2 -translate-x-1/2 w-full px-4">
        <div className="flex justify-center items-center gap-4 md:gap-6 lg:gap-8 flex-wrap max-w-4xl mx-auto">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                group flex items-center justify-center
                 py-2 md:px-6 md:py-4
                rounded-2xl
                bg-gradient-to-br from-orange-300 to-orange-400
                text-white hover:shadow-2xl
                transform hover:-translate-y-1 hover:scale-100
                transition-all duration-300
                backdrop-blur-sm bg-opacity-90
                border border-white/30
                shadow-lg
                min-w-[100px] md:min-w-[120px]
              `}
            >
              <span className="text-[10px] md:text-xs lg:text-xl font-bold">
                {platform.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}