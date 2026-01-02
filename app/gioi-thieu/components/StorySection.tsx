export default function StorySection() {
  return (
    <section className="py-16 bg-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
              Hành Trình Mang Đến Niềm Vui Ăn Vặt
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-orange-600 mb-4 pb-2 border-b border-gray-200">
                  Giới thiệu
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Sản phẩm mang thương hiệu <strong className="text-orange-600">"Ăn Cùng Bà Tuyết"</strong> là các sản phẩm 
                  ăn vặt như latiao, bim bim,chân gà, quẩy... Trong quá trình không ngừng phát triển, 
                  hiện nay sản phẩm của thương hiệu đã có mặt trên toàn quốc từ các kênh thương mại 
                  điện tử đến các kênh tạp hoá, siêu thị!
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-4 rounded-lg border border-red-100">
                    <p className="font-semibold text-gray-800">Top 1 ngành đồ ăn vặt trên Shopee</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-4 rounded-lg border border-blue-100">
                    <p className="font-semibold text-gray-800">Top 1 ngành ăn vặt trên TikTok Shop</p>
                  </div>
                </div>
                <div className="mt-4 bg-gradient-to-r from-orange-100 to-orange-50 p-4 rounded-lg border border-green-100">
                  <p className="font-bold text-gray-800 text-center">
                    Đặc biệt: Nhà bán hàng có lượng đơn bán ra nhiều nhất TikTok Shop với <span className="text-orange-600">6.200.000 đơn!</span>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-600 mb-4 pb-2 border-b border-gray-200">
                  Sứ mệnh
                </h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Thay đổi cái nhìn của mọi người về đồ ăn vặt, khiến các phụ huynh tin tưởng cho con em mình sử dụng</span>
                  </li>
                 
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Người Việt Nam dùng hàng Việt Nam</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Cung cấp các loại đồ ăn vặt tuổi thơ gần gũi với trẻ em Việt Nam</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Đảm bảo chất lượng sản phẩm luôn ở mức cao nhất</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Sức khỏe của khách hàng chính là tôn chỉ của thương hiệu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Vệ sinh an toàn thực phẩm luôn là mối ưu tiên hàng đầu</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-600 mb-4 pb-2 border-b border-gray-200">
                  Mục tiêu
                </h3>
                <div className="bg-gradient-to-r from-orange-100 to-orange-50 p-6 rounded-xl border border-orange-100">
                  <p className="text-gray-800 text-lg font-medium leading-relaxed text-center">
                    Trở thành thương hiệu hàng đầu tại Việt Nam trong lĩnh vực kinh doanh đồ ăn vặt, 
                    nơi mà tất cả mọi người đặt trọn niềm tin vào chất lượng sản phẩm an toàn và uy tín.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-gray-200 text-center">
              <p className="text-gray-600 italic">
                <span className="text-orange-600 font-bold">"Ăn Cùng Bà Tuyết"</span> - Mang niềm vui ăn vặt đến mọi nhà
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}