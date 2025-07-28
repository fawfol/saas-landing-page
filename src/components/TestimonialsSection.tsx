// src/components/TestimonialsSection.tsx
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "ADmyBRAND has completely transformed our marketing strategy. The AI insights are incredibly precise, saving us countless hours and significantly boosting our ROI. Truly a game-changer!",
      name: "Sarah Chen",
      title: "Marketing Director at InnovateCorp",
    },
    {
      quote: "I've tried many marketing platforms, but ADmyBRAND stands out with its intuitive design and powerful automation features. Our customer engagement has never been higher. Highly recommend!",
      name: "Mark Johnson",
      title: "CEO of GrowthHub",
    },
    {
      quote: "The real-time analytics provided by ADmyBRAND give us an unparalleled edge. We can make data-driven decisions on the fly, leading to much more effective campaigns. It's indispensable.",
      name: "Priya Sharma",
      title: "Founder of DigitalFlow",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Don't just take our word for it. Hear from businesses thriving with ADmyBRAND.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg text-gray-700 italic mb-6">
                "{testimonial.quote}"
              </p>
              <div className="text-gray-900 font-semibold text-lg">
                {testimonial.name}
              </div>
              <div className="text-sm text-gray-500">
                {testimonial.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
