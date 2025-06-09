import React from 'react';
import Container from '../ui/Container';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ quote, name, role, image }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
        />
        <div className="absolute -bottom-2 -right-2 bg-primary-500 rounded-full p-1 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-700 italic mb-4">"{quote}"</p>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-sm text-gray-600">{role}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "CardioGlimpse helped me lose 20 pounds and lower my blood pressure by 15 points in just 3 months!",
      name: "Sarah Johnson",
      role: "Weight Loss Goal",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
    },
    {
      quote: "The heart risk calculator was a wake-up call. Now I'm on track with better habits and my doctor is impressed.",
      name: "Michael Chen",
      role: "Heart Health Goal",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      quote: "As someone with insomnia for years, the sleep plan has transformed my nights. I'm finally getting quality rest.",
      name: "Emma Rodriguez",
      role: "Sleep Improvement Goal",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Success Stories</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            See how CardioGlimpse has helped people achieve their health goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;