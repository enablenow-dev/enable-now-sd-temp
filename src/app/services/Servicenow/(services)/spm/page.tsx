// File 2: Page.tsx Component
"use client"
import React from "react";
import ServiceHero from "../../_components/ServiceHero";
import ServiceSection from "../../_components/ServiceSection";
import ServicesGrid from "../../_components/ServicesGrid";
import ServiceNowSPMChallenges from "../../_components/ServiceNowSPMChallenges";
import BenefitsSection from "../../_components/BenefitsSection";
import ConsiderationsSection from "../../_components/ConsiderationsSection";
import BestPractices from "../../_components/BestPractices";
import FAQ from "../../_components/FAQ";
import{ PortfolioManagementExcellence }from "../../_components/PortfolioManagementExcellence";
import Cta from "@/app/_components/Cta";
import { spmServices, spmBenefits, spmChallenges, spmconsiderations , spmfaqs , spmPortfolio} from "../../data/servicesData";
import ChallengesSection from "../../_components/ChallengesSection";

const Page: React.FC = () => {
  return (
    <>
      <ServiceHero 
        title="ServiceNow SPM"
        subtitle="Improve your Portfolio Operations with Integrated Service Management"
        backgroundImage="/images/software1.avif"
      />
      <ServiceSection
        heading="It revolutionizes how enterprises manage services through digital workforce automation, unified platforms, and end-to-end service management."
        paragraph1="ServiceNow changes how businesses manage and deliver their portfolio services."
        paragraph2="ServiceNow Strategic Portfolio Management (SPM) is a robust solution that allows enterprises to streamline processes, enhance service delivery, and deliver an ever-improving user experience. Digital workflow automation on a unified platform simplifies operations and automates intensive processes, solving issues quicker and improving visibility."
        imageSrc="/images/software1.avif"
      />
      <ServicesGrid 
        title="ServiceNow SPM Key capabilities include"
        services={spmServices}
      />
      <ChallengesSection title="Challenges Addressed by ServiceNow SPM" challenges={spmChallenges} />
      <BenefitsSection title="ServiceNow SPM Benefits" benefits={spmBenefits} />
      <ConsiderationsSection 
        title="Considerations when Implementing ServiceNow SPM" 
        considerations={spmconsiderations} 
      />
      <BestPractices />
      <FAQ faqs={spmfaqs} />
      <PortfolioManagementExcellence content={spmPortfolio}/>
      <Cta/>
    </>
  );
};

export default Page;