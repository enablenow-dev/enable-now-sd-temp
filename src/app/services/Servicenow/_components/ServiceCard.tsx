"use client";

import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  icon: string; // image path
  title: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
      <Image src='https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3ea0b80811f58c5bc247_Frame%2032%20(44).svg' alt={title} width={50} height={50} className="mb-4" />
      <h3 className="text-lg font-medium">{title}</h3>
      <button className="mt-4 border border-gray-400 rounded-full p-1 hover:bg-gray-100">
        <span className="text-xl font-bold">+</span>
      </button>
    </div>
  );
};

export default ServiceCard;
