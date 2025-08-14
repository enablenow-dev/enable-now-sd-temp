"use client"
import React from 'react'
import ServiceHero from "../../_components/ServiceHero";
import ServiceSection from "../../_components/ServiceSection";
import ConsiderationsSection from "../../_components/ConsiderationsSection";
import { itomBenefits, itomCapabilities, itomChallenges, itomfaqs, itomOfferings, itomPortfolio, itomPractices } from '../../data/servicesData';
import BenefitsSection from '../../_components/BenefitsSection';
import BestPractices from '../../_components/BestPractices';
import FAQSection from '../../_components/FAQSection';
import { PortfolioManagementExcellence } from '../../_components/PortfolioManagementExcellence';
import Cta from '@/app/_components/Cta';

function page() {
  return (
    <>
    <ServiceHero 
        title="ServiceNow ITOM" 
        subtitle="Elevate Your IT Operations with Integrated Service Management" 
        backgroundImage="/images/software1.avif"
      />
      <ServiceSection
        heading="ServiceNow IT Operations Management (ITOM) is a powerful suite that transforms how organizations manage, monitor, and optimize their IT infrastructure.."
        paragraph1="By automating operations and providing unified visibility, ServiceNow ITOM helps businesses reduce downtime, ensure service reliability, and enhance the agility of IT operations."
        paragraph2="ServiceNow ITOM redefines how businesses manage their IT environments, enabling proactive monitoring, faster issue resolution, and smarter resource allocation. ITOM integrates with the entire ServiceNow ecosystem, aligning operations with business needs to ensure greater efficiency and continuous improvement."
        imageSrc="/images/software1.avif"
      />
      <ConsiderationsSection 
        title="ServiceNow ITOM Key Capabilities" 
        subtitle=""
        considerations={itomCapabilities} 
      />
        <ConsiderationsSection 
        title="Challenges Addressed by ServiceNow ITOM" 
        subtitle=""
        considerations={itomChallenges} 
      />
    <BenefitsSection title="ServiceNow ITOM Benefits" benefits={itomBenefits} />
    <ConsiderationsSection 
        title="Considerations when Implementing ServiceNow ITOM" 
        subtitle="If you are ready to start your ServiceNow journey to enhance your operations and ensure business alignment, it is crucial to plan carefully. Keep the following in mind:"
        considerations={itomOfferings} 
      />

      <BestPractices 
        title="Best Practices for ITOM Implementation in ServiceNow"
        subtitle="To successfully implement ServiceNow IT Operations Management (ITOM), consider these best practices"
        practices={itomPractices}
      />

      <FAQSection 
        title="Frequently Asked Questions about ServiceNow ITOM"
        subtitle="Get answers to common questions about implementing and using ServiceNow ITOM to streamline your IT operations processes."
        faqs={itomfaqs}
      />

      <PortfolioManagementExcellence content={itomPortfolio}/>
      <Cta/>
    </>
  )
}

export default page