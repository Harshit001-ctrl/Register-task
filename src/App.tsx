import Navbar from './components/Navbar';
import Top from './components/Top';
import Trust from './components/Trust';
import Service from './components/Service';
import Register from './components/Register';
import Viedo from './components/Viedo';
import Client from './components/Client';
import Blog from './components/Blog';
import Testimonial from './components/Testimonial';
import FAQSection from './components/FAQSection';
import MobileAppSection from './components/MobileAppSection';
import StatsSection from './components/StatsSection';
import HeroSection from './components/HeroSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <Navbar/>
        <Top/>
        <Trust/>
        <Service/>
        <Register/>
        <Viedo/>
        <Client/>
        <Blog/>
        <Testimonial/>
        <FAQSection />
        
      <MobileAppSection />
        <div className="text-center mb-12 mt-6">
          <h2 className="text-orange-600 font-semibold mb-4">WHY REGISTER KARO</h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Some Numbers are important</h1>
          <StatsSection />
        </div>

        <HeroSection />
        <PartnersSection />
      </div>
      <Footer />
    </div>
  );
};

export default App;