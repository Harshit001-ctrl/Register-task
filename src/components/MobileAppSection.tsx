import { Apple, Smartphone } from 'lucide-react';

const MobileAppSection = () => {
  return (
    <div className="bg-blue-900 text-white px-9 py-24"> {/* Increased padding for a larger section */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Content Section on Left */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-5xl  font-bold mb-6">
              Manage Your Services by your Mobile Phone
            </h2>
            <p className="text-gray-300 mb-8">
              Download our app to manage and track your services. Our app enables you to stay in touch 
              with our experts and aids you in tracking your progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors"
              >
                <Apple className="w-6 h-6" />
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-400 transition-colors"
              >
                <Smartphone className="w-6 h-6" />
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Image Section on Right */}
          <div className="w-full lg:w-1/2 flex gap-6"> {/* Increased gap between images */}
            <div className="relative w-1/2 p-4"> {/* Increased padding inside the container */}
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1470"
                alt="Mobile App Interface"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="relative w-1/2 p-4"> {/* Increased padding inside the container */}
              <img
                src="https://images.unsplash.com/photo-1601972599720-36938d4ecd31?auto=format&fit=crop&q=80&w=1374"
                alt="Mobile App Interface"
                className="rounded-lg shadow-2xl w-full h-96 object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;
