"use client";
import React from "react";
import { motion } from "framer-motion";

interface ApproachItem {
  icon: React.ReactNode;
  title: string;
  paragraphs: string[];
}

interface ApproachSectionProps {
  heading: string;
  description: string;
  items: ApproachItem[];
}

const ApproachSection: React.FC<ApproachSectionProps> = ({
  heading,
  description,
  items,
}) => {
  return (
    <section className="bg-white py-24 px-6 md:px-10 xl:px-24">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-semibold text-black mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {heading}
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-900 leading-relaxed max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        </motion.div>

        {/* Columns */}
        <div className="grid md:grid-cols-3 gap-x-16 gap-y-20">
          {items.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex justify-center md:justify-start mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14">{item.icon}</div>
              </motion.div>
              <motion.h3 
                className="text-xl md:text-2xl font-semibold text-black mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {item.title}
              </motion.h3>
              {item.paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  className="text-base md:text-lg text-gray-900 leading-[1.8] mb-5"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div 
        className="text-center max-w-4xl mx-auto mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.p 
          className="text-gray-900 text-lg md:text-xl leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          EnableNow's ServiceNow's service delivery approach is grounded in
          quality, reliability, consistency, and best practices. By embracing
          these principles and adopting a structured approach to implementation,
          we have effectively designed, deployed, and supported ServiceNow
          solutions, driving business value, innovation, and success.
        </motion.p>

        <motion.button
          className="bg-[#007ba8] hover:bg-[#006ba8] text-gray-50 w-80 font-semibold px-8 py-4 rounded-md transition duration-300"
          onClick={() => console.log("Let Us Talk clicked")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          LET US TALK
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ApproachSection;
