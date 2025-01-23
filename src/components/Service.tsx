const services = [
  { title: 'Company Formation', description: 'Build web-based solutions that enhance customer experience.', icon: '⚙️' },
  { title: 'Company Secretarial Services', description: 'Make data-driven decisions and utilize technology to reach business goals.', icon: '📋' },
  { title: 'Virtual Office Address', description: 'Foster customer relationships by effectively serving your market.', icon: '⭐' },
  { title: 'Annual Compliance Services', description: 'Turn your ideas into modern products with our design experts.', icon: '📊' },
  { title: 'Payroll Services', description: 'Expand your business across the globe with minimal effort.', icon: '🛒' },
  { title: 'Bookkeeping Services', description: 'Steering user behaviors with creative design, data insights & technology.', icon: '📚' },
];

const ExploreServices = () => {
  return (
    <div className="px-6 sm:px-10 py-16 sm:py-20 bg-gray-50 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-orange-500 font-semibold uppercase text-sm sm:text-base">
          Welcome to RegisterKaro.in
        </h2>
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 mt-4">
          Explore Our Services
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-16 lg:gap-20 mt-12 sm:mt-16">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <span className="text-5xl sm:text-6xl text-orange-500">{service.icon}</span>
              <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-semibold text-gray-800">
                {service.title}
              </h3>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
                {service.description}
              </p>
              <a href="#" className="mt-4 sm:mt-6 text-blue-600 font-semibold inline-block text-base sm:text-lg">
                Learn more →
              </a>
            </div>
          ))}
        </div>

        <button className="mt-12 sm:mt-16 bg-blue-600 hover:bg-blue-700 transition duration-300 text-white px-6 sm:px-8 py-3 rounded-full text-lg sm:text-xl">
          See All Services
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <ExploreServices />
    </>
  );
};

export default App;
