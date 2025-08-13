"use client";
import React from 'react'
import ServiceSection from "../../_components/ServiceSection";

import ServiceHero from "../../_components/ServiceHero";
import ServicesGrid from '../../_components/ServicesGrid';
import { itsmServices, itsmBenefits, itsmChallenges , itsmfaqs } from '../../data/servicesData';
import BenefitsSection from '../../_components/BenefitsSection';
import { itsmConsiderations } from '../../data/servicesData';
import ConsiderationsSection from '../../_components/ConsiderationsSection';
import FAQ from '../../_components/FAQ';


import Cta from '@/app/_components/Cta';
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
        <BenefitsSection title="ServiceNow ITSM Benefits" benefits={itsmBenefits} />
      
      <ConsiderationsSection 
        title="Considerations when Implementing ServiceNow ITSM" 
        subtitle="If you are ready to start your ServiceNow journey to enhance your operations and ensure business alignment, it is crucial to plan carefully. Keep the following in mind:"
        considerations={itsmConsiderations} 
      />
      
      <FAQ faqs={itsmfaqs} />
      <Cta/>
      
    </>
  )
}

export default page