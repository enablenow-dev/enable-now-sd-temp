import React from 'react';
import { LucideIcon } from 'lucide-react';
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
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-figtree max-w-4xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Three items per row on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {practices.map(({ id, icon: Icon, title, description }) => (
            <div key={id} className="mx-auto w-full max-w-[360px] min-h-[420px]">
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <Icon className="w-14 h-14 text-[#007BA8]" strokeWidth={1.6} />
                </div>
                <h3 className="text-2xl font-semibold font-outfit text-gray-900 mb-4 leading-snug">
                  {title}
                </h3>
                <p className="text-gray-600 text-lg leading-8 font-figtree">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
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