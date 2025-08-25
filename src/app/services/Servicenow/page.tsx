"use client";
import React from "react";
import HeroBanner from "@/app/services/_components/HeroBanner";
import Value from "./_components/Value";
import OurExpertise from "./_components/OurExpertise";
import Approach from "./_components/Approach";
import Cta from "@/app/_components/Cta";
import { motion } from "framer-motion";

function page() {
  // Define container variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // Define item variants for individual section animations
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <HeroBanner
        title="ServiceNow Services"
        subTitle="Transforming Workflows: ServiceNow Solutions for a Smarter Enterprise"
        heroImage="/bannerimage.jpg"
      />

      <Value />

      <OurExpertise />

      <Approach />

      <Cta />
    </motion.div>
  );
}

export default page;
