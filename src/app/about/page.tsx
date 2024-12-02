import Image from 'next/image';
import React from 'react';
import fareed from '../../../public/fareed.png';

const Page = () => {
  return (
    <div>
      <section className="bg-gray-100 text-gray-800">
        <div className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center">
          {/* Image Section */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
              alt="Fareed Nathani"
              src={fareed}
            />
          </div>

          {/* Text Section */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-6 leading-snug">
              Welcome to Quotes World
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Discover an inspiring collection of quotes carefully curated to motivate, uplift, and spark creativity.
              This website is designed to offer you words of wisdom from great minds around the world, presented in a
              sleek, user-friendly interface. Let these quotes brighten your day and ignite your passion.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gray-800 text-white hover:bg-gray-700 px-6 py-3 rounded-lg shadow-lg font-medium transition-all duration-300 transform hover:scale-105">
                <a href="https://github.com/FareedNathani" target="_blank" rel="noopener noreferrer">
                  Explore My Work
                </a>
              </button>
              <button className="bg-gray-200 text-gray-800 hover:bg-gray-300 px-6 py-3 rounded-lg shadow-lg font-medium transition-all duration-300 transform hover:scale-105">
                <a href="https://www.linkedin.com/in/fareed-nathani-30180a324/" target="_blank" rel="noopener noreferrer">
                  Contact Me
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
