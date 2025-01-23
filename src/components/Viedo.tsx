import { Lightbulb, Rocket } from "lucide-react";

function VideoSection() {
  return (
    <div className="bg-[#163055] text-white shadow-2xl">
      <div className="max-w-7xl mx-auto p-8 md:p-16 min-h-[500px] md:min-h-[700px] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-8 md:space-y-10">
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold mb-4 md:mb-6">
                Our Video Introductions
              </h1>
              <p className="text-gray-300 text-base md:text-lg">
                Velit purus egestas tellus phasellus. Mattis eget sed faucibus
                magna vulputate pellentesque a diam tincidunt apis dui.
              </p>
            </div>

            {/* Feature Items */}
            <div className="space-y-6 md:space-y-8">
              {/* Item 1 */}
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-orange-400 rounded-full p-2 md:p-3">
                    <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                    Explore ideas together
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Engage audience segments and finally create actionable
                    insights. Amplify vertical integration.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="flex-shrink-0">
                  <div className="bg-blue-500 rounded-full p-2 md:p-3">
                    <Rocket className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">
                    Bring those ideas to life
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    Engage audience segments and finally create actionable
                    insights. Amplify vertical integration.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-video overflow-hidden border-2 md:border-3 border-yellow-400 rounded-lg">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMznnPBeBvZ3RTu6M4c5YqOrC9g1BG7e2fg&s"
              alt="Video thumbnail"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
              <button className="bg-red-600 hover:bg-red-700 rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform transform hover:scale-110">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="p-4 sm:p-8">
      <div className="max-w-full mx-auto">
        <VideoSection />
      </div>
    </div>
  );
}

export default App;