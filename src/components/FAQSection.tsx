import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Can I recover deleted files from desktop with this software?",
    answer: "Yes, our software provides comprehensive file recovery solutions for desktop systems. It can recover various types of deleted files including documents, photos, and videos with high success rates."
  },
  {
    question: "How long does the recovery process typically take?",
    answer: "The recovery time depends on the volume of data and drive size. Quick scans take 10-15 minutes, while deep scans might take 1-2 hours. Our software provides real-time progress updates throughout the process."
  },
  {
    question: "Is it safe to use this recovery software?",
    answer: "Absolutely! Our software is read-only and doesn't modify your original data. It's designed with multiple safety checks to ensure your files remain intact during the recovery process."
  },
  {
    question: "What file types can be recovered?",
    answer: "Our software supports recovery of all common file types including documents (DOC, PDF, TXT), media files (JPG, PNG, MP4), archives (ZIP, RAR), and many more specialized formats."
  },
  {
    question: "Do you offer technical support?",
    answer: "Yes, we provide 24/7 technical support through email and live chat. Our expert team is always ready to assist you with any questions or issues you might encounter during the recovery process."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-12 md:py-16">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-orange-600 font-semibold mb-2 md:mb-4">FAQ</h2>
        <h3 className="text-2xl md:text-4xl font-bold text-gray-900">Frequent Ask Questions</h3>
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-3 md:mb-4">
            <button
              className="w-full text-left p-4 md:p-5  bg-gray-300 hover:bg-gray-100 rounded-lg transition-all duration-200 ease-in-out"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center gap-4">
                <span className="font-medium text-lg md:text-base text-gray-900 flex-1">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                )}
              </div>
              <div className={`overflow-hidden transition-all duration-200 ease-in-out ${
                openIndex === index ? 'max-h-96 mt-4' : 'max-h-0'
              }`}>
                <p className="text-sm md:text-base text-gray-600">
                  {faq.answer}
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base">
          Show more
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default FAQSection;