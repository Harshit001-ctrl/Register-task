import { Search, Star, Users, BarChart3, Building2 } from 'lucide-react';

function App() {
  return (
    <div className=" bg-blue-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-2 lg:px-2 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Content - Takes 7 columns */}
          <div className="lg:col-span-7">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-gray-600">5.0 Rating on Google</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Your Trusted Partner<br />
              For <span >Compliance business needs</span> 
            </h1>
                <br />
            <p className="text-xl text-gray-600 mb-8">
              An online business compliance platform that helps entrepreneurs and other
              individuals with various registrations, tax filings, and other legal matters.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">4.5+</div>
                <div className="text-sm text-gray-600">Customer Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">20,000+</div>
                <div className="text-sm text-gray-600">Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">99.8%</div>
                <div className="text-sm text-gray-600">Financial Quality</div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Talk To An Expert
              </button>
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600 font-bold">See how it works</span>
              </div>
            </div>
            
          </div>

          {/* Right Content - Takes 5 columns with relative positioning for overlap */}
          <div className="lg:col-span-5 relative">
            {/* Main Image */}
            <div className="relative z-10">
              <img 
                src="https://media.istockphoto.com/id/1388913352/photo/lovely-business-man-attending-a-meeting-online-writing-stuff-down.jpg?s=612x612&w=0&k=20&c=xkrlDeFMcPOoelyiWd_FwuFOuGi23Fd-t18CxR15okE="
                alt="Business professional"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover object-center"
              />
            </div>

            {/* Service Cards - Absolute positioned on the right */}
            <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 space-y-4 z-20">
              {[
                {
                  title: "Annual Compliance",
                  icon: BarChart3,
                },
                {
                  title: "Payroll Services",
                  icon: Users,
                },
                {
                  title: "Company Formation",
                  icon: Building2,
                },
                {
                  title: "Tax Advisory",
                  icon: Search,
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="bg-white shadow-lg p-4 rounded-xl transition-all hover:shadow-xl cursor-pointer flex items-center space-x-3 w-64"
                >
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <service.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">{service.title}</h3>
                </div>
              ))}
            </div>

            {/* Background decoration */}
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-orange-100 rounded-full opacity-50 blur-3xl z-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;