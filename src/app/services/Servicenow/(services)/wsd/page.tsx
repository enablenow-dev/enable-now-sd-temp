"use client"
import React from 'react'
import ServiceHero from '../../_components/ServiceHero'
import ServiceSection from '../../_components/ServiceSection'
import ConsiderationsSection from '../../_components/ConsiderationsSection'
import { wsdChallenges, wsdCustomerBenefits, wsdfaqs, wsdOfferings, wsdPortfolio } from '../../data/servicesData'
import FAQSection from '../../_components/FAQSection'
import { PortfolioManagementExcellence } from '../../_components/PortfolioManagementExcellence'
import Cta from '@/app/_components/Cta'

function page() {
  return (
    <>
    <ServiceHero 
    title="ServiceNow WSD" 
    subtitle="ServiceNow Workplace Service Delivery: Transforming Workplace Operations with Integrated Service Management" 
    backgroundImage="/images/software1.avif"
    />
    <ServiceSection
    heading="WSD centralizes workplace services, automates routine processes, and enhances visibility into workplace assets, empowering organizations to create a productive, engaging work environment for employees."
    paragraph1="ServiceNow Workplace Service Delivery (WSD) is designed to streamline and automate workplace operations, providing employees with an efficient, seamless experience across workplace requests, resource booking, and facilities management.."
    paragraph2=""
    imageSrc="/images/software1.avif"
    />
    <ConsiderationsSection 
    title="Challenges Addressed by ServiceNow WSD" 
    subtitle=""
    considerations={wsdChallenges} 
    />
    <ConsiderationsSection 
    title="Benefits to Customers" 
    subtitle=""
    considerations={wsdCustomerBenefits} 
    />
    <ConsiderationsSection 
    title="ServiceNow WSD Offerings" 
    subtitle=""
    considerations={wsdOfferings} 
    />

    <FAQSection
    title="Frequently Asked Questions"
    subtitle=""
    faqs={wsdfaqs}
    />

    <PortfolioManagementExcellence content={wsdPortfolio}/>
    <Cta/>
    </>
  )
}

export default page