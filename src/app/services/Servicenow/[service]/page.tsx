import React from "react";
import ServiceHero from "../_components/ServiceHero";
import ServiceSection from "../_components/ServiceSection";
import ServicesGrid from "../_components/ServicesGrid";


const Page: React.FC = () => {
  return (
    <>
      <ServiceHero 
        title="ServiceNow SPM" 
        subtitle="Improve your Portfolio Operations with Integrated Service Management" 
        backgroundImage="/images/software1.avif"
      />
      <ServiceSection
        heading="It revolutionizes how enterprises have been processed for services since digital workforce automation, one platform, and end-to-end service management."
        paragraph1="ServiceNow changes how businesses manage and deliver their portfolio services."
        paragraph2="ServiceNow Strategic Portfolio Management (SPM) is a robust solution that allows enterprises to streamline processes, enhance service delivery, and add to a ever-fulfilling user experience. Digital workflow automation at the end of one system simplifies operations and automates intensive efforts in solving issues quicker and improving visibility."
        imageSrc="/images/software1.avif"
      />
      <ServicesGrid />
    </>
  );
};

export default Page;
