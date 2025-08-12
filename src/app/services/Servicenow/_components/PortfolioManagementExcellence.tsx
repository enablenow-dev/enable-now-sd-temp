import React from "react";
import { MessageCircle } from "lucide-react";

const PortfolioManagementExcellence: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 py-20 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8 pr-0 lg:pr-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                Unlock Portfolio Management
                <br />
                Excellence with ServiceNow SPM
              </h1>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg md:text-xl leading-relaxed font-light">
                With the implementation of ServiceNow SPM, you are not merely adopting a portfolio 
                management tool; you are embracing a comprehensive approach to achieving strategic 
                portfolio excellence. The automation, visibility, and scalability feature of ServiceNow 
                SPM enable organizations to enhance project execution, allocate resources effectively, 
                and make more informed decisions.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed font-light">
                Let us partner with you to unlock the full potential of ServiceNow SPM and elevate your 
                portfolio management to a new standard of excellence.
              </p>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="lg:col-span-1 relative">
            <div className="relative w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e078c58224e6a4018_pregnant-woman-having-business-meeting.png"
                alt="Team collaborating on portfolio management strategies in a modern office setting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="bg-[#1e3a5f] hover:bg-[#2d4f73] text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
          onClick={() => console.log("Open chat")}
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default PortfolioManagementExcellence;