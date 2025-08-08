import React from 'react'
import HeroBanner from '@/app/services/_components/HeroBanner'
import Value from './_components/Value'
import OurExpertise from './_components/OurExpertise'
import Approach from './_components/Approach'
import Cta from '@/app/_components/Cta'
import { motion } from 'framer-motion'

function page() {
  return (
    <>
         <HeroBanner
          title="ServiceNow Services"
          subTitle="Transforming Workflows: ServiceNow Solutions for a Smarter Enterprise"
          heroImage="/images/software1.avif"
        />

        <Value />
        <OurExpertise/>
        <Approach />
        <Cta />
    </>
  )
}

export default page