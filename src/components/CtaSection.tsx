// src/components/CtaSection.tsx
import Link from 'next/link';
import React from 'react';

const CtaSection = () => {
  return (
    <section className="bg-blue-700 text-white py-16 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
          Ready to Transform Your Marketing?
        </h2>
        <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto">
          Join thousands of businesses already seeing incredible results with ADmyBRAND&apos;s AI platform.
        </p>
        <Link href="/signup" className="bg-white text-blue-700 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-colors duration-300 shadow-xl inline-block">
          Start Your Free Trial Today!
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
