"use client"
import React from 'react'
import ServiceHero from "../../_components/ServiceHero";
import ServiceSection from "../../_components/ServiceSection";
import ChallengesSection from "../../_components/ChallengesSection";
import { itamChallenges , itamServices , spmconsiderations , itamBenefits, itamOfferings , itamfaqs} from "../../data/servicesData";
import ServicesGrid from "../../_components/ServicesGrid";
import ConsiderationsSection from '../../_components/ConsiderationsSection';
import Cta from '@/app/_components/Cta';
import FAQ from '../../_components/FAQ';
function page() {
  return (
    <>

    <ServiceHero 
        title="ServiceNow ITAM" 
        subtitle="Elevate Your IT Operations with Integrated Service Management" 
        backgroundImage="/images/software1.avif"
      />

<ServiceSection
        heading="ITAM provides a centralized platform for tracking, managing, and optimizing assets across your organization, from procurement through disposal."
        paragraph1="ServiceNow IT Asset Management (ITAM) streamlines the lifecycle management of your organization’s IT assets, ensuring you maximize value from hardware and software investments while reducing risks and costs. With ServiceNow ITAM, you can maintain compliance, prevent asset sprawl, and make data-driven decisions that improve asset utilization and budget efficiency."
        paragraph2=""
        imageSrc="/images/software1.avif"
      />
   <ConsiderationsSection 
        title="Challenges Addressed by ServiceNow ITAM" 
        subtitle=""
        considerations={itamChallenges} 
      />
       <ConsiderationsSection 
        title="Benefits to Customers" 
        subtitle=""
        considerations={itamBenefits} 
      />
      <ConsiderationsSection 
        title="ServiceNow ITAM Offerings" 
        subtitle="ServiceNow ITAM includes a range of modules designed to track, manage, and optimize assets, delivering value across every stage of the asset lifecycle"
        considerations={itamOfferings} 
      />
      <FAQ faqs={itamfaqs}/>
      <Cta/>
    </>
  )
}

export default page