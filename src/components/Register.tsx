import { Shield, CheckCircle, Users } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* About Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div>
              <span className="text-orange-500 font-medium mb-3 block uppercase tracking-wide text-sm sm:text-base">
                WELCOME TO REGISTERKARO.IN
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                About <span className="text-orange-500">Register Karo</span>
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I'm extremely pleased with their performance.
              </p>
              <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
                I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.
              </p>
              <button className="bg-[#1e3a8a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-900 transition-colors flex items-center space-x-2 text-lg">
                <span>Learn More</span>
                <span className="ml-2">→</span>
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Team meeting"
                className="rounded-2xl shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
            <div className="max-w-xl">
              <span className="text-orange-500 font-medium mb-3 block uppercase tracking-wide text-sm sm:text-base">
                WHY REGISTERKARO.IN
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Why Choose Register Karo
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Consistent services and results build trust with our clients, enabling us to serve businesses better.
              </p>
            </div>

            <div className="grid gap-8 sm:gap-12">
              {/* Top 2 Features */}
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
                  <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Confidential & Safe</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    All your private information is safe with us.
                  </p>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
                  <div className="bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">No Hidden Fee</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Everything is put before you with no hidden charges.
                  </p>
                </div>
              </div>

              {/* Bottom 3 Features */}
              <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 h-full">
                  <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Expert CA/CS Assistance</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Prompt support from our in-house experts.
                  </p>
                </div>

                <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 h-full">
                  <div className="bg-purple-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Guaranteed Satisfaction</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We ensure 100% satisfaction with our services.
                  </p>
                </div>

                <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 h-full">
                  <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Confidential & Safe</h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    All your private information is safe with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
