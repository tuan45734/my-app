interface StatsSectionProps {
  totalBranches: number;
  activeBranches: number;
  upcomingBranches: number;
  totalProvinces: number;
}

export default function StatsSection({
  totalBranches,
  activeBranches,
  upcomingBranches,
  totalProvinces
}: StatsSectionProps) {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-black text-orange-500 mb-2">{totalBranches}</div>
            <div className="text-gray-600 font-semibold">Tổng NPP</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-black text-green-500 mb-2">{activeBranches}</div>
            <div className="text-gray-600 font-semibold">Đang hoạt động</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-black text-blue-500 mb-2">{upcomingBranches}</div>
            <div className="text-gray-600 font-semibold">Sắp hoạt động</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300">
            <div className="text-3xl font-black text-purple-500 mb-2">{totalProvinces}</div>
            <div className="text-gray-600 font-semibold">Tỉnh thành</div>
          </div>
        </div>
      </div>
    </section>
  );
}