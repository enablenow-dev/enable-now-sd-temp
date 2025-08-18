import React from 'react';
import Image from 'next/image';
import { Practice } from '../data/servicesData';

interface BestPracticesProps {
  title?: string;
  subtitle?: string;
  practices: Practice[];
}

const BestPractices: React.FC<BestPracticesProps> = ({
  title = "Best Practices for Implementation",
  subtitle = "To successfully implement this solution, consider these best practices",
  practices
}) => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-figtree max-w-4xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Practices Grid */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {practices.map(({ id, icon, title, description }) => (
            <div key={id} className="w-full max-w-[360px] md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)]">
              <div className="flex flex-col h-auto">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <Image
                     src={icon}
                     alt={title}
                     width={48}
                     height={48}
                     className="w-12 h-12 object-contain"
                  />
                </div>
                {/* Title */}
                <h3 className="text-2xl font-semibold font-outfit text-gray-900 mb-4 leading-snug text-center">
                  {title}
                </h3>
                {/* Description */}
                <p className="text-gray-600 text-lg leading-8 font-figtree text-center">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12">
        <button
          className="bg-[#007ba8] hover:bg-[#006ba8] text-gray-50 w-80 font-semibold px-8 py-4 rounded-md transition duration-300"
          onClick={() => console.log("Let Us Talk clicked")}
        >
          LET'S TALK
        </button>
      </div>
    </section>
  );
};

export default BestPractices;