import { Shield, CheckCircle, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white-50">
      

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-500 font-medium mb-3 block uppercase tracking-wide">WELCOME TO REGISTERKARO.IN</span>
              <h2 className="text-4xl font-bold mb-6">About <span className="text-orange-500">Register Karo</span></h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We have been using Intelegencia as our DevOps vendor for our field service
                applications over the last couple of years and I'm extremely pleased with
                their performance, ability to execute, and willingness to adapt in our ever changing
                environment. Perry is an outstanding leader who is fanatical about
                customer satisfaction. He has built a solid team which has consistently delivered
                on projects thereby exceeding everyone's expectations.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I would strongly recommend their services to any organization that is looking for
                solid, reliable, and predictable outcomes.
              </p>
              <button className="bg-[#1e3a8a] text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors flex items-center space-x-2 text-lg">
                <span>Learn More</span>
                <span className="ml-2">→</span>
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Team meeting"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="max-w-xl">
              <span className="text-orange-500 font-medium mb-3 block uppercase tracking-wide">WHY REGISTERKARO.IN</span>
              <h2 className="text-4xl font-bold mb-6">Why Choose Register Karo</h2>
              <p className="text-gray-600 text-lg">
                It is with consistent services and results that build trust with the people and that in
                turn help us to serve the business better.
              </p>
            </div>
            <div className="grid gap-12">
              {/* Top Row - 2 cards */}
              <div className="grid md:grid-cols-2 gap-8 justify-end">
                {/* Card 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Confidential & Safe</h3>
                  <p className="text-gray-600">All your private information is safe with us</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="bg-green-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">No Hidden Fee</h3>
                  <p className="text-gray-600">Everything is put before you with no hidden charges or conditions</p>
                </div>
              </div>

              {/* Bottom Row - 3 cards */}
              <div className="grid md:grid-cols-3 gap-8 -ml-40">
                {/* Card 3 */}
                <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-72">
                  <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Expert CA/CS Assistance</h3>
                  <p className="text-gray-600">Prompt support from our in-house expert professionals</p>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-72">
                  <div className="bg-purple-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Guaranteed Satisfaction</h3>
                  <p className="text-gray-600">We ensure that you stay 100% satisfied with our offered services</p>
                </div>

                {/* Card 5 */}
                <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-72">
                  <div className="bg-red-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Confidential & Safe</h3>
                  <p className="text-gray-600">All your private information is safe with us</p>
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