"use client"
import React from 'react'
import ServiceHero from "../../_components/ServiceHero";
import ServiceSection from "../../_components/ServiceSection";
import ConsiderationsSection from '../../_components/ConsiderationsSection';
import { irmChallenges, irmCustomerBenefits, irmFaqs, irmOfferings, irmPortfolio } from '../../data/servicesData';
import FAQSection from '../../_components/FAQSection';
import { PortfolioManagementExcellence } from '../../_components/PortfolioManagementExcellence';
import Cta from '@/app/_components/Cta';
function page() {
  return (
    <>
    <ServiceHero 
        title="ServiceNow IRM" 
        subtitle="ServiceNow Integrated Risk Management: Proactive and Intelligent Risk Management" 
        backgroundImage="/images/software1.avif"
      />
      <ServiceSection
        heading="By automating workflows and consolidating risk data, IRM empowers businesses to make informed, data-driven decisions to protect and enhance their organization’s operational and strategic objectives."
        paragraph1="ServiceNow Integrated Risk Management (IRM) offers a centralized platform to streamline risk, compliance, and audit management, enabling organizations to proactively manage risks, maintain compliance, and strengthen their resilience."
        paragraph2=""
        imageSrc="/images/software1.avif"
      />
      <ConsiderationsSection 
        title="Challenges Addressed by ServiceNow IRM" 
        subtitle=""
        considerations={irmChallenges} 
      />
       <ConsiderationsSection 
        title="Benefits to Customers" 
        subtitle=""
        considerations={irmCustomerBenefits} 
      />

<ConsiderationsSection 
        title="ServiceNow IRM Offerings" 
        subtitle="ServiceNow IRM includes a suite of modules designed to help organizations manage risk, compliance, and audit processes more effectively"
        considerations={irmOfferings} 
      />

      <FAQSection 
        title="Frequently Asked Questions about ServiceNow IRM"
        subtitle="Get answers to common questions about implementing and using ServiceNow IRM to streamline your risk management processes."
        faqs={irmFaqs}
      />
      <PortfolioManagementExcellence content={irmPortfolio}/>
      <Cta/>
    </>
  )
}

export default page