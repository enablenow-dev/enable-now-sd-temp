"use client"
import React from 'react'
import ServiceHero from '@/app/services/Servicenow/_components/ServiceHero'
import ServiceSection from '@/app/services/Servicenow/_components/ServiceSection'
import ConsiderationsSection from '@/app/services/Servicenow/_components/ConsiderationsSection'
import { hrsdBenefits, hrsdBestPractices, hrsdCapabilities, hrsdChallenges, hrsdConsiderations, hrsdfaqs, hrsdPortfolio } from '../../data/servicesData'
import BenefitsSection from '../../_components/BenefitsSection'
import BestPractices from '../../_components/BestPractices'
import FAQSection from '../../_components/FAQSection'
import { PortfolioManagementExcellence } from '../../_components/PortfolioManagementExcellence'
import Cta from '@/app/_components/Cta'
function page() {
  return (
    <>
   <ServiceHero 
        title="ServiceNow HRSD" 
        subtitle="Elevate Your HR Operations with ServiceNow HRSD:  The Ultimate Integrated HR Service Management Solution" 
        backgroundImage="/images/software1.avif"
      />
      <ServiceSection
        heading="Revolutionizes how your business handles HR service delivery with digital workflow automation, unified interfaces, and end-to-end service management."
        paragraph1="Improve productivity by providing employees with a centralized platform to access the help and guidance they need, all in one place. Reduce costs with AI-driven self-service capabilities and streamlined case resolution, ensuring faster and more efficient support. From hire to retire, perfect manual and inefficient processes through employee self-service, digitization, and intelligent automation. Leverage the power of the Now Platform as a single system of action to automate essential processes, enhance efficiency, and deliver a seamless employee experience across the enterprise."
        paragraph2=""
        imageSrc="/images/software1.avif"
      />
      <ConsiderationsSection 
        title="ServiceNow HRSD Key Capabilities Include" 
        subtitle=""
        considerations={hrsdCapabilities} 
      />
      <ConsiderationsSection 
        title="Challenges Addressed by ServiceNow HRSD" 
        subtitle=""
        considerations={hrsdChallenges} 
      />
      <BenefitsSection
        title="ServiceNow HRSD Benefits"
        benefits={hrsdBenefits}
      />
      <ConsiderationsSection 
        title="Considerations When Implementing ServiceNow HRSD" 
        subtitle="If you are ready to embark on a ServiceNow HRSD journey to modernize and digitally transform your HR operations effectively, you must plan carefully and consider the following:"
        considerations={hrsdConsiderations} 
      />
      <BestPractices
        title="Best Practices for Implementing ServiceNow HRSD"
        subtitle="To successfully implement ServiceNow HRSD, consider these best practices"
        practices={hrsdBestPractices}
      />
      <FAQSection 
        title="Frequently Asked Questions"
        subtitle=""
        faqs={hrsdfaqs}
      />
      <PortfolioManagementExcellence content={hrsdPortfolio}/>
      <Cta/>
    </>
  )
}

export default page