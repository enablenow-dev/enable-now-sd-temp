import React from 'react';
import ServiceCard from './ServiceCard';

const considerations = [
  {
    icon: '/icons/stakeholder.png',
    title: 'Stakeholder Alignment',
    description:
      'Engage executives and key stakeholders early to align expectations, define success criteria, and secure sponsorship for the SPM journey.',
  },
  {
    icon: '/icons/strategy.png',
    title: 'Portfolio Strategy and Governance',
    description:
      'Establish clear prioritization, funding models, and decision frameworks to ensure work delivers measurable strategic value.',
  },
  {
    icon: '/icons/data.png',
    title: 'Data Quality and Integration',
    description:
      'Plan for high‑quality data, taxonomy standards, and integrations with core systems to enable accurate insights and automation.',
  },
  {
    icon: '/icons/data.png',
    title: 'Customization vs. Out-of-the-Box Configuration',
    description:
      'Balance customization and utilizing out-of-the-box options to prevent unnecessary complexity and maintain compatibility for future upgrades.'},
  {
    icon: '/icons/data.png',
    title: 'Resource Management and Capacity Planning',
    description:
      'Utilize resource management tools to monitor availability, assess skills, gauge demand, and facilitate efficient capacity planning..',
  },
  {
    icon: '/icons/data.png',
    title: 'User Training and Adoption',
    description:
      'Train end-users, particularly those in key roles, and supply support materials to facilitate successful adoption of the platform.',
  },
  {
    icon: '/icons/data.png',
    title: 'Continuous Improvement and Feedback Loops',
    description:
      'Regularly evaluate ServiceNow SPM by gathering user feedback, tracking KPIs, and refining processes to meet evolving business needs..',
  },
  {
    icon: '/icons/data.png',
    title: 'Risk and Issue Management',
    description:
      'Define risk tracking, management, and mitigation within the platform to ensure projects stay on course and remain aligned.',
  },
];

function Considerations() {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-outfit text-gray-900">
            Considerations when Implementing ServiceNow SPM
          </h2>
          <p className="text-lg text-gray-600 font-figtree">
            If you are ready to start a ServiceNow SPM journey to enhance your portfolio management and ensure business alignment,
            it is crucial to plan carefully. Keep the following in mind
          </p>
        </div>

        {/* Centered, wrapping layout that keeps last row centered automatically */}
        <div className="flex flex-wrap justify-center gap-8">
          {considerations.map((item, idx) => (
            <div key={idx} className="w-full max-w-[320px]">
              <ServiceCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-12">
          <button
            className="bg-[#007ba8] hover:bg-[#006ba8] text-gray-50 w-80 font-semibold px-8 py-4 rounded-md transition duration-300"
            onClick={() => console.log("Let Us Talk clicked")}
          >
            LET'S TALK
          </button>
        </div>
    </section>
  );
}

export default Considerations;