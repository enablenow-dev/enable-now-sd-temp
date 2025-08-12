"use client";

import React from "react";
import Image from "next/image";

interface BenefitItem {
  title: string;
  description: string;
  imageSrc: string;
}

const benefits: BenefitItem[] = [
  {
    title: "Faster Service Lifecycle Management",
    description:
      "SPM streamlines defining, launching, and retiring services for a more agile approach to managing the service lifecycle.",
    imageSrc: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e7930bfb64f45eab0_group-people-working-team.png",
  },
  {
    title: "Improved Portfolio Visibility",
    description:
      "Gain a complete view of initiatives and investments to ensure alignment with business goals and maximize value delivery.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    title: "Smarter Resource Utilization",
    description:
      "Allocate the right people to the right work at the right time with capacity insights and strategic prioritization.",
    imageSrc: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e6d9f2a101e11a252_medium-shot-people-sticking-post-its.png",
  },
  {
    title: "Cost Management and Optimization",
    description:
      "ServiceNow’s SPM improves service costs by managing budgets, forecasting expenses and reducing spending.",
    imageSrc: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e04268b8df2579206_colleagues-work(2).png",
  },
];

const ServiceNowSPMBenefits: React.FC = () => {
  return (
    <section className="w-full bg-[#0a2540] text-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-outfit text-center mb-12">ServiceNow SPM Benefits</h2>

        <div className="space-y-12">
          {benefits.map((item, index) => (
            <div
              key={index}
              className={`grid gap-8 md:grid-cols-2 items-center ${index % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div>
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={1000}
                  height={650}
                  className="w-full h-auto rounded-xl shadow-lg object-cover"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-2xl md:text-3xl font-semibold font-outfit mb-4">
                  {item.title}
                </h3>
                <p className="text-base md:text-lg text-gray-100/90 font-figtree leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            className="bg-[#007ba8] hover:bg-[#006ba8] text-gray-50 w-80 font-semibold px-8 py-4 rounded-md transition duration-300"
            onClick={() => console.log("Let Us Talk clicked")}
          >
            LET'S TALK
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceNowSPMBenefits;
