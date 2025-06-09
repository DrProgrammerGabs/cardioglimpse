import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqItems: FAQItem[] = [
    {
      question: 'How does the free plan compare to premium?',
      answer: 'The free plan gives you access to basic features like the simplified heart risk assessment, hospital locator, and basic wellness goals. Premium unlocks advanced features like detailed risk analysis, personalized meal and exercise plans, progress tracking tools, and access to a personal health coach.'
    },
    {
      question: 'Can I cancel my subscription at any time?',
      answer: 'Yes, you can cancel your subscription at any time. Your premium access will continue until the end of your current billing period, after which you\'ll be downgraded to the free plan.'
    },
    {
      question: 'What are the Web3 crypto rewards?',
      answer: 'Our Web3 plan includes cryptocurrency rewards when you achieve your health goals. You\'ll earn tokens for completing activities, reaching milestones, and maintaining healthy habits. These tokens can be exchanged for premium features or real-world wellness products.'
    },
    {
      question: 'Are my health data and personal information secure?',
      answer: 'Yes, we take your privacy and data security very seriously. All your health data is encrypted and stored securely. We never share your personal information with third parties without your explicit consent. Our platform is HIPAA-compliant and follows strict privacy guidelines.'
    },
    {
      question: 'How accurate is the heart risk assessment?',
      answer: 'Our heart risk assessment is based on established medical algorithms and research. While it provides a good indication of your heart health status, it should not replace professional medical advice. We recommend discussing the results with your healthcare provider.'
    },
    {
      question: 'Is CardioGlimpse available in multiple languages?',
      answer: 'Yes, CardioGlimpse supports multiple languages including English, Spanish, French, German, Chinese, Japanese, and Arabic. We\'re constantly adding more language options to make our platform accessible to users worldwide.'
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left p-5 flex justify-between items-center focus:outline-none bg-white hover:bg-gray-50"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-900">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {openIndex === index && (
              <div className="p-5 bg-gray-50 border-t border-gray-200">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;