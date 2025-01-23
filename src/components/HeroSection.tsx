import { CheckCircle } from 'lucide-react';

const features = [
  'Instant results',
  'User-friendly interface',
  'Personalized customization'
];

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-blue-900 rounded-2xl p-8 my-16">
      <div className="text-center">
        <p className="text-white/80 text-sm mb-4">1% OF THE INDUSTRY</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Welcome to your new digital reality. Now.
        </h2>
        
        <div className="max-w-xl mx-auto mb-8">
          <div className="flex items-center bg-white rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-1 px-4 py-3 outline-none"
            />
            <button className="bg-orange-500 text-white px-6 py-3 font-semibold hover:bg-orange-600 transition-colors">
              Submit
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-white gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;