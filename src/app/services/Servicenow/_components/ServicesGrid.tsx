"use client";

import React from "react";
import ServiceCard from "./ServiceCard";

interface Service {
  icon: string;
  title: string;
}

const services: Service[] = [
  { icon: "/icons/demand.png", title: "Demand Management" },
  { icon: "/icons/ppm.png", title: "Project Portfolio Management (PPM)" },
  { icon: "/icons/resource.png", title: "Resource Management" },
  { icon: "/icons/extra1.png", title: "Application Portfolio Management (APM)" },
  { icon: "/icons/extra2.png", title: "Financial Management" },
  { icon: "/icons/extra1.png", title: "Scenario Planning" },
  { icon: "/icons/extra1.png", title: "Agile Development" },
  { icon: "/icons/extra1.png", title: "Performance Analytics" },
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <h2 className="text-center text-2xl font-semibold mb-10">
        ServiceNow SPM Key capabilities include
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="flex items-center justify-center bg-[#007ba8] hover:bg-[#006ba8] text-gray-50 w-80 font-semibold px-8 py-4 rounded-md transition duration-300"
          onClick={() => console.log("Let Us Talk clicked")}
        >
          LET US TALK
        </button>
      </div>
    </section>
  );
};

export default ServicesGrid;
