const stats = [
  { number: '1M+', label: 'CUSTOMERS' },
  { number: '12+', label: 'YEARS OF EXCELLENCE' },
  { number: '41+', label: 'R&D ENGINEERS' },
  { number: '78+', label: 'COUNTRIES' },
  { number: '3287+', label: 'PARTNERS' },
  { number: '41+', label: 'AWARDS RECEIVED' },
];

const StatsSection = () => {
  return (
    <div className="p-4 sm:p-8 bg-gray-50">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <h3 className="text-3xl sm:text-4xl font-bold text-[#545187]">
              {stat.number}
            </h3>
            <p className="text-base sm:text-lg font-semibold mt-1 text-gray-600">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
