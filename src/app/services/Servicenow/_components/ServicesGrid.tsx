"use client";

import React from "react";
import ServiceCard from "./ServiceCard";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  { 
    icon: "/icons/demand.png", 
    title: "Demand Management",
    description: "Streamline demand intake, prioritization, and approval processes. Centralize all project requests and align them with strategic objectives for better resource allocation and decision-making."
  },
  { 
    icon: "/icons/ppm.png", 
    title: "Project Portfolio Management (PPM)",
    description: "Comprehensive project oversight with real-time dashboards, milestone tracking, and portfolio optimization. Manage multiple projects simultaneously while ensuring strategic alignment and delivery excellence."
  },
  { 
    icon: "/icons/resource.png", 
    title: "Resource Management",
    description: "Optimize resource allocation across projects and teams. Track capacity, skills, and availability to ensure the right resources are assigned to the right projects at the right time."
  },
  { 
    icon: "/icons/extra1.png", 
    title: "Application Portfolio Management (APM)",
    description: "Manage your entire application landscape with lifecycle tracking, dependency mapping, and optimization recommendations. Reduce technical debt and improve application performance."
  },
  { 
    icon: "/icons/extra2.png", 
    title: "Financial Management",
    description: "Track project budgets, costs, and ROI in real-time. Integrate financial planning with project execution for better cost control and financial transparency across your portfolio."
  },
  { 
    icon: "/icons/extra1.png", 
    title: "Scenario Planning",
    description: "Create and compare multiple portfolio scenarios to optimize resource allocation and strategic outcomes. Make data-driven decisions with what-if analysis and impact assessment."
  },
  { 
    icon: "/icons/extra1.png", 
    title: "Agile Development",
    description: "Support agile methodologies with sprint planning, backlog management, and team collaboration tools. Integrate agile practices seamlessly with traditional project management approaches."
  },
  { 
    icon: "/icons/extra1.png", 
    title: "Performance Analytics",
    description: "Advanced reporting and analytics to measure portfolio performance, track KPIs, and identify improvement opportunities. Gain insights into project health, resource utilization, and strategic alignment."
  },
];

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-10 px-4 bg-gray-50">
      <h2 className="text-center text-2xl font-semibold mb-10">
        ServiceNow SPM Key capabilities include
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            icon={service.icon} 
            title={service.title} 
            description={service.description}
          />
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
