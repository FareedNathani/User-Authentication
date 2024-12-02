import Image from 'next/image';
import React from 'react';
import quotespic from "../../public/Simple.png";

const Hero = () => {
  return (
    <div>
      <section className="text-white body-font bg-gradient-to-r from-black via-gray-900 to-gray-800">
        <div className="container mx-auto flex px-6 py-24 md:flex-row flex-col items-center">
          {/* Left Content */}
          <div className="lg:flex-grow md:w-1/2 flex flex-col gap-6 md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-xl font-extrabold text-center lg:text-2xl tracking-wide text-gray-100">
              Welcome to the
            </h1>
            <h1 className="text-4xl font-extrabold text-center lg:mb-6 tracking-tight lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-gray-400 to-gray-500">
              Quotes Website
            </h1>
            <p className="mb-8 leading-relaxed text-gray-400 max-w-md">
              Quotes are statements, phrases, or sentences that express wisdom,
              inspiration, or advice taken from a person, book, or other source. They are
              often used to convey a message, express an opinion, or provide insight
              into a particular topic or issue.
            </p>
            <button className="px-6 py-3 rounded-lg text-lg font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 transition-all shadow-lg">
              Explore Quotes
            </button>
          </div>

          {/* Right Image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
              alt="hero"
              src={quotespic}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
