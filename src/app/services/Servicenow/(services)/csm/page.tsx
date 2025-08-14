"use client"
import React from 'react'
import ServiceHero from '../../_components/ServiceHero'
import ServiceSection from '../../_components/ServiceSection'
import ConsiderationsSection from '../../_components/ConsiderationsSection'
import { csmBenefits, csmBestPractices, csmCapabilities, csmChallenges, csmConsiderations, csmfaqs, csmPortfolio } from '../../data/servicesData'
import BenefitsSection from '../../_components/BenefitsSection'
import BestPractices from '../../_components/BestPractices'
import FAQSection from '../../_components/FAQSection'
import { PortfolioManagementExcellence } from '../../_components/PortfolioManagementExcellence'
import Cta from '@/app/_components/Cta'
function page() {
  return (
    <>
    <ServiceHero 
    title="ServiceNow Customer Service Management (CSM)" 
    subtitle="Transform Your Customer Service Through Integrated Digital Interaction" 
    backgroundImage="/images/software1.avif"
    />
    <ServiceSection
    heading="Transform your company's customer service delivery with end-to-end case management, uniform workflows, and proactive involvement."
    paragraph1="ServiceNow transforms how companies oversee customer support operations by offering a centralized, scalable platform."
    paragraph2="ServiceNow Customer Service Management (CSM) workflow automation streamlines processes, shortens turnaround times, and provides comprehensive insight into client problems, enabling businesses to increase customer loyalty, expedite case resolution, and improve customer satisfaction."
    imageSrc="/images/software1.avif"
    />
    <ConsiderationsSection 
    title="ServiceNow CSM Key capabilities include" 
    subtitle=""
    considerations={csmCapabilities} 
    />
    <ConsiderationsSection 
    title="Challenges Addressed by ServiceNow CSM" 
    subtitle=""
    considerations={csmChallenges} 
    />

    <BenefitsSection title="ServiceNow CSM Benefits" benefits={csmBenefits} />
    <ConsiderationsSection 
    title="Considerations When Implementing ServiceNow CSM" 
    subtitle="If you are ready to elevate your customer service experience with ServiceNow CSM, careful planning and consideration are essential"
    considerations={csmConsiderations} 
    />
    
    <BestPractices 
    title="Best Practices for Implementing ServiceNow CSM"
    subtitle="To successfully implement ServiceNow CSM, consider these best practices"
    practices={csmBestPractices}
    />
    <FAQSection 
    title="Frequently Asked Questions"
    subtitle=""
    faqs={csmfaqs}
    />
    <PortfolioManagementExcellence content={csmPortfolio}/>
    <Cta/>
    </>
  )
}

export default page