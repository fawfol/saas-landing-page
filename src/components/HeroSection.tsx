// src/components/HeroSection.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'; // Ensure React is imported

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content Area (Text and Buttons) */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Unlock Your Brand&apos;s Potential with AI
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto md:mx-0">
            Revolutionize your marketing strategies with cutting-edge AI insights and automation. Grow smarter, not harder.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link href="/get-started" className="bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get Started Free
            </Link>
            <Link href="/learn-more" className="bg-transparent border border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors duration-300">
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Content Area (Image Placeholder) */}
        <div className="flex-1 flex justify-center md:justify-end">
          {/* Replace with your actual product image or illustration */}
          <div className="w-full max-w-md h-64 md:h-80 bg-blue-500 rounded-lg flex items-center justify-center shadow-2xl overflow-hidden">
             <Image
                src="/placeholder-hero-image.svg" // Create this image in your public folder or use a real one
                alt="Product illustration"
                width={500}
                height={300}
                priority // Prioritize loading for LCP
                className="object-cover w-full h-full"
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
