// src/components/FeaturesSection.tsx
import React from 'react';

// Simple placeholder for an icon component or actual SVG imports
// In a real project, you might use a library like 'react-icons' or define your own SVGs.
const IconPlaceholder = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-blue-100 text-blue-600 rounded-full p-3 mb-4 inline-flex items-center justify-center">
    {children}
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9.75 16M13.75 17L13.75 16M16 11V9H8v2m1.25 10a8.75 8.75 0 110-17.5 8.75 8.75 0 010 17.5zM12 4.25V3a.75.75 0 00-1.5 0v1.25M6.25 12H5a.75.75 0 000 1.5h1.25M18.75 12H19a.75.75 0 000 1.5h-.25" />
        </svg>
      ),
      title: 'AI-Powered Insights',
      description: 'Leverage advanced artificial intelligence to gain deep insights into your market and customer behavior.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Automated Campaigns',
      description: 'Automate your marketing campaigns with smart scheduling and personalized content delivery.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M18 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-9-9a5.002 5.002 0 000 10l.75-2.25M12 12h.01" />
        </svg>
      ),
      title: 'Real-time Analytics',
      description: 'Monitor your performance with real-time dashboards and comprehensive analytics reports.',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 1.38-.89 2.5-2 2.5s-2-1.12-2-2.5 1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5zm6 0c0 1.38-.89 2.5-2 2.5s-2-1.12-2-2.5 1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5zm-12 0c0 1.38-.89 2.5-2 2.5s-2-1.12-2-2.5 1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5zm15-6a9 9 0 100 18 9 9 0 000-18z" />
        </svg>
      ),
      title: 'Seamless Integration',
      description: 'Easily integrate with your existing tools and platforms for a unified workflow.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
          Powerful Features Designed for You
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Discover how ADmyBRAND's cutting-edge capabilities can transform your marketing efforts and drive unparalleled growth.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <IconPlaceholder>{feature.icon}</IconPlaceholder>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
