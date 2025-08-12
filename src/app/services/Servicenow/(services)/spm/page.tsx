"use client"
import React from "react";
import ServiceHero from "../../_components/ServiceHero";
import ServiceSection from "../../_components/ServiceSection";
import ServicesGrid from "../../_components/ServicesGrid";
import ServiceNowSPMChallenges from "../../_components/ServiceNowSPMChallenges";
import ServiceNowSPMBenefits from "../../_components/ServiceNowSPMBenefits";
import Considerations from "../../_components/Considerations";
import BestPractices from "../../_components/BestPractices";
import FAQ from "../../_components/FAQ";
import PortfolioManagementExcellence from "../../_components/PortfolioManagementExcellence";
import Cta from "@/app/_components/Cta";

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
      <ServiceNowSPMChallenges />
      <ServiceNowSPMBenefits />
      <Considerations />
      <BestPractices />
      <FAQ />
      <PortfolioManagementExcellence/>
      <Cta/>
    </>
  );
};

export default Page;
