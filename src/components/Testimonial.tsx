import React, { useState } from "react";

const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      name: "Chris",
      designation: "President and CEO, PrintReach, USA",
      image: "https://www.shutterstock.com/shutterstock/photos/363361772/display_1500/stock-photo-enthusiastic-motivated-attractive-young-woman-giving-a-thumbs-up-gesture-of-approval-and-success-363361772.jpg",
    },
    // Add more testimonials for demonstration
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      name: "Alex",
      designation: "CTO, TechWave, Canada",
      image: "https://www.shutterstock.com/shutterstock/photos/1864510012/display_1500/stock-photo-photo-of-cute-adorable-young-woman-wear-casual-white-outfit-pointing-empty-space-isolated-violet-1864510012.jpg",
    },
    {
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      name: "Sophia",
      designation: "Manager, InnovateCorp, UK",
      image: "https://www.shutterstock.com/shutterstock/photos/1864510012/display_1500/stock-photo-photo-of-cute-adorable-young-woman-wear-casual-white-outfit-pointing-empty-space-isolated-violet-1864510012.jpg",
    },
    
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-blue-900 mt-6 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-8">What peoples says about us</h2>

        {/* Navigation Buttons */}
        <div className="flex justify-end mb-6 space-x-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center bg-white text-blue-900 rounded-full shadow-md"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-full shadow-md"
          >
            &#8594;
          </button>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex space-x-6 overflow-hidden">
            {/* Testimonial Card */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white text-blue-900 rounded-lg p-6 shadow-md w-96 flex-shrink-0 transition-transform duration-500 ease-in-out ${
                  index === currentIndex ? "scale-105" : "scale-95 "
                }`}
              >
                {/* Star Ratings */}
                <div className="flex items-center text-yellow-500 mb-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .587l3.668 7.568L24 9.423l-6 5.882L19.335 24 12 20.128 4.665 24 6 15.305 0 9.423l8.332-1.268z" />
                      </svg>
                    ))}
                </div>

                {/* Quote Icon */}
                <div className="text-4xl text-blue-500 mb-4">&#8220;</div>

                {/* Testimonial Text */}
                <p className="text-sm mb-6">{testimonial.text}</p>

                {/* Profile Section */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt="Profile"
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
