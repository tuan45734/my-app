export default function Footer() {


  return (
    <footer id="footer" className="bg-gradient-to-b from-orange-50 to-white text-gray-800 py-12 w-full">
      <div className="w-full px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 mb-8">

            <div className="flex justify-center lg:justify-start">
              <img
                src="https://res.cloudinary.com/dvg7ourbo/image/upload/v1766046808/logo160px_rybasz.png"
                alt="Bà Tuyết Logo"
                className="w-30 h-30 md:w-40 md:h-40 object-contain"
              />
            </div>

            <div className="text-center lg:text-left space-y-4">
              <h3 className="text-lg font-semibold mb-4 text-orange-700">THÔNG TIN LIÊN HỆ</h3>
              <h6 className="text-sm font-semibold mb-4 text-orange-600">TRỤ SỞ CHÍNH</h6>
              <div className="flex items-center justify-center lg:justify-start">
                <svg className="w-5 h-5 mr-3 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>Email: <a href="mailto:ancungbatuyet@gmail.com" className="hover:text-amber-600 transition-colors">ancungbatuyet@gmail.com</a></span>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <svg className="w-5 h-5 mr-3 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Hotline: <a href="tel:+84989852948" className="hover:text-amber-600 transition-colors">0989 852 948</a></span>
              </div>

              <div className="flex items-center justify-center lg:justify-start">
                <svg className="w-5 h-5 mr-3 text-amber-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Giờ làm việc: 8:00 - 17:00 (T2 - T7)</span>
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d658.2631329184804!2d105.74015258886321!3d21.044742435679833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313455002760f899%3A0x6b1dadf983f389be!2zxIJuIEPDuW5nIELDoCBUdXnhur90!5e0!3m2!1svi!2s!4v1764292515048!5m2!1svi!2s"
                  width="100%"
                  height="100"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bản đồ Ăn cùng Bà Tuyết"
                  className="w-full h-64 lg:h-40"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="https://tiktok.com/@batuyethanhvi"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-120 filter grayscale hover:grayscale-0"
            >
              <img
                src="https://img-cache.coccoc.com/image2?i=1&l=67/138198813"
                alt="TikTok"
                className="w-11 h-11 md:w-13 md:h-13 rounded-lg"
              />
            </a>

            <a
              href="https://www.facebook.com/ancungbatuyet"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-120 filter grayscale hover:grayscale-0"
            >
              <img
                src="https://img-cache.coccoc.com/image2?i=1&l=67/129851105"
                alt="Facebook"
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg"
              />
            </a>

            <a
              href="https://shopee.vn/nmtvlog99"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-120 filter grayscale hover:grayscale-0"
            >
              <img
                src="https://img-cache.coccoc.com/image2?i=2&l=28/335289727"
                alt="Shopee"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full"
              />
            </a>

            <a
              href="https://www.lazada.vn/shop/an-cung-ba-tuyet"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-120 filter grayscale hover:grayscale-0"
            >
              <img
                src="https://img-cache.coccoc.com/image2?i=1&l=9/327771525"
                alt="Lazada"
                className="w-10 h-10 md:w-12 md:h-12 rounded-lg"
              />
            </a>
          </div>

          <div className="text-center border-t border-amber-200 pt-6">
            <p className="text-gray-600">Copyright © 2026 Ăn cùng Bà Tuyết.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}