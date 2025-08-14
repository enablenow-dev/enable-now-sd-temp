
"use client"
import React from 'react'
import ServiceHero from "../../_components/ServiceHero";
import ServiceSection from "../../_components/ServiceSection";
import ConsiderationsSection from '../../_components/ConsiderationsSection';
import { secOpsChallenges, secopsCustomerBenefits, secopsfaqs, secopsOfferings, secopsPortfolio } from '../../data/servicesData';
import FAQSection from '../../_components/FAQSection';
import { PortfolioManagementExcellence } from '../../_components/PortfolioManagementExcellence';
import Cta from '@/app/_components/Cta';
function page() {
  return (
    <>
    <ServiceHero 
        title="ServiceNow SECOPS" 
        subtitle="ServiceNow Security Operations: Proactive Threat Detection and Response" 
        backgroundImage="/images/software1.avif"
      />
      <ServiceSection
        heading="ServiceNow Security Operations (SecOps) transforms security and incident response by providing an integrated platform for identifying, managing, and mitigating threats across your organization."
        paragraph1="With automation, real-time visibility, and intelligent prioritization, ServiceNow SecOps empowers security teams to respond to incidents faster, streamline workflows, and enhance organizational resilience against cyber threats."
        paragraph2=""
        imageSrc="/images/software1.avif"
      />
      <ConsiderationsSection 
        title="Challenges Addressed by ServiceNow Security Operations" 
        subtitle=""
        considerations={secOpsChallenges} 
      />
      <ConsiderationsSection 
        title="Benefits to Customers" 
        subtitle=""
        considerations={secopsCustomerBenefits} 
      />
      <ConsiderationsSection 
        title="ServiceNow SecOPs Offerings" 
        subtitle="ServiceNow SecOps includes a suite of powerful tools designed to manage and automate security incident response, threat intelligence, and vulnerability management"
        considerations={secopsOfferings} 
      />
      <FAQSection 
        title="Our Approach: Comprehensive ServiceNow Security Operations Implementation" 
        subtitle="Our approach to implementing ServiceNow SecOps focuses on aligning security workflows with your organization’s risk managementand compliance goals. Here’s a step-by-step breakdown of our delivery process"
        faqs={secopsfaqs} 
      />
      <PortfolioManagementExcellence content={secopsPortfolio}/>
      <Cta/>
    </>
  )
}

export default page