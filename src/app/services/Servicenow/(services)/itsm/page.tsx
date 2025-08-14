"use client";
import React from 'react'
import ServiceSection from "../../_components/ServiceSection";

import ServiceHero from "../../_components/ServiceHero";
import ServicesGrid from '../../_components/ServicesGrid';
import { itsmServices, itsmBenefits, itsmChallenges, itsmConsiderations, itsmFaqs, itsmPractices } from '../../data/servicesData';
import BenefitsSection from '../../_components/BenefitsSection';
import ConsiderationsSection from '../../_components/ConsiderationsSection';
import FAQSection from '../../_components/FAQSection';

import Cta from '@/app/_components/Cta';
import BestPractices from '../../_components/BestPractices';
import { PortfolioManagementExcellence } from '../../_components/PortfolioManagementExcellence';
import { itsmPortfolio } from '../../data/servicesData'; 

function page() {
  return (
    <>
     <ServiceHero 
        title="ServiceNow ITSM" 
        subtitle="Elevate Your IT Operations with Integrated Service Management" 
        backgroundImage="/images/software1.avif"
      />
      <ServiceSection
        heading="Revolutionizes how your business handles IT service delivery with digital workflow automation, unified interfaces, and end-to-end service management."
        paragraph1="ServiceNow redefines how businesses manage and deliver IT services."
        paragraph2="ServiceNow IT Service Management (ITSM) is a robust solution that enables organizations to streamline processes, optimize service delivery, and enhance user experience. Its digital workflow automation capabilities centralize operations, automate mundane tasks to resolve issues faster and enhance visibility."
        imageSrc="/itsm.png"
      />
      <ServicesGrid 
        title="ServiceNow ITSM Key capabilities include"
        services={itsmServices}
      />
      <ConsiderationsSection 
        title="Challenges Addressed by ServiceNow ITSM" 
        subtitle=""
        considerations={itsmConsiderations} 
      />
        <BenefitsSection title="ServiceNow ITSM Benefits" benefits={itsmBenefits} />
      
      <ConsiderationsSection 
        title="Considerations when Implementing ServiceNow ITSM" 
        subtitle="If you are ready to start your ServiceNow journey to enhance your operations and ensure business alignment, it is crucial to plan carefully. Keep the following in mind:"
        considerations={itsmConsiderations} 
      />
      <BestPractices 
        title="Best Practices for ITSM Implementation in ServiceNow"
        subtitle="To successfully implement ServiceNow IT Service Management (ITSM), consider these best practices"
        practices={itsmPractices}
      />
      <FAQSection 
        title="Frequently Asked Questions about ServiceNow ITSM"
        subtitle="Get answers to common questions about implementing and using ServiceNow ITSM to streamline your IT service management processes."
        faqs={itsmFaqs}
      />
      <PortfolioManagementExcellence content={itsmPortfolio}/>
      <Cta/>
      
    </>
  )
}

export default page