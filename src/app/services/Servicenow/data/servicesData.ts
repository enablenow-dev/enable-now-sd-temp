export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const spmServices: Service[] = [
  { 
    icon: "/icons/demand.png", 
    title: "Demand Management",
    description: "Streamline demand intake, prioritization, and approval processes. Centralize all project requests and align them with strategic objectives for better resource allocation and decision-making."
  },
  { 
    icon: "/icons/ppm.png", 
    title: "Project Portfolio Management (PPM)",
    description: "Comprehensive project oversight with real-time dashboards, milestone tracking, and portfolio optimization. Manage multiple projects simultaneously while ensuring strategic alignment and delivery excellence."
  },
  { 
    icon: "/icons/resource.png", 
    title: "Resource Management",
    description: "Optimize resource allocation across projects and teams. Track capacity, skills, and availability to ensure the right resources are assigned to the right projects at the right time."
  },
  { 
    icon: "/icons/extra1.png", 
    title: "Application Portfolio Management (APM)",
    description: "Manage your entire application landscape with lifecycle tracking, dependency mapping, and optimization recommendations. Reduce technical debt and improve application performance."
  },
  { 
    icon: "/icons/extra2.png", 
    title: "Financial Management",
    description: "Track project budgets, costs, and ROI in real-time. Integrate financial planning with project execution for better cost control and financial transparency across your portfolio."
  },
  { 
    icon: "/icons/extra1.png", 
    title: "Scenario Planning",
    description: "Create and compare multiple portfolio scenarios to optimize resource allocation and strategic outcomes. Make data-driven decisions with what-if analysis and impact assessment."
  },
  { 
    icon: "/icons/extra1.png", 
    title: "Agile Development",
    description: "Support agile methodologies with sprint planning, backlog management, and team collaboration tools. Integrate agile practices seamlessly with traditional project management approaches."
  },
  { 
    icon: "/icons/extra1.png", 
    title: "Performance Analytics",
    description: "Advanced reporting and analytics to measure portfolio performance, track KPIs, and identify improvement opportunities. Gain insights into project health, resource utilization, and strategic alignment."
  },
];

export const itsmServices: Service[] = [
  {
    icon: "/icons/extra1.png",
    title: "Incident Management",
    description:
      "Restore normal service operation as quickly as possible and minimize the adverse impact on business operations with streamlined workflows and SLAs.",
  },
  {
    icon: "/icons/extra2.png",
    title: "Problem Management",
    description:
      "Identify root causes, prevent incidents, and reduce the impact of recurring issues using trend analysis and knowledge-driven resolutions.",
  },
  {
    icon: "/icons/resource.png",
    title: "Change Enablement",
    description:
      "Plan, assess, and implement changes with minimal risk using CAB approvals, risk scoring, and standardized workflows.",
  },
  {
    icon: "/icons/ppm.png",
    title: "Request Management",
    description:
      "Deliver common services through a user-friendly portal and catalog with automated fulfillment and clear status updates.",
  },
  {
    icon: "/icons/demand.png",
    title: "Knowledge Management",
    description:
      "Capture and share knowledge articles to speed up resolutions and empower self-service across the organization.",
  },
  {
    icon: "/icons/extra1.png",
    title: "Service Level Management",
    description:
      "Define, track, and meet SLAs/OLAs with real-time visibility, proactive notifications, and performance analytics.",
  },
  {
    icon: "/icons/extra1.png",
    title: "Service Catalog",
    description:
      "A centralized platform automates IT service requests for more efficiency.",
  },
  {
    icon: "/icons/extra1.png",
    title: "Configuration Management Database (CMDB)",
    description:
      "Maintain a single source of truth for your enterprise IT infrastructure and services.",
  },
   {
    icon: "/icons/extra1.png",
    title: "Asset Management Core",
    description:
      "Make informed decisions with real-time visibility into assets across the enterprise.",
  },
];
export const itamServices: Service[] = [
  {
    icon: "/icons/extra1.png",
    title: "Incident Management",
    description:
      "Restore normal service operation as quickly as possible and minimize the adverse impact on business operations with streamlined workflows and SLAs.",
  },
  {
    icon: "/icons/extra2.png",
    title: "Problem Management",
    description:
      "Identify root causes, prevent incidents, and reduce the impact of recurring issues using trend analysis and knowledge-driven resolutions.",
  },
  {
    icon: "/icons/resource.png",
    title: "Change Enablement",
    description:
      "Plan, assess, and implement changes with minimal risk using CAB approvals, risk scoring, and standardized workflows.",
  },
  {
    icon: "/icons/ppm.png",
    title: "Request Management",
    description:
      "Deliver common services through a user-friendly portal and catalog with automated fulfillment and clear status updates.",
  },
  {
    icon: "/icons/demand.png",
    title: "Knowledge Management",
    description:
      "Capture and share knowledge articles to speed up resolutions and empower self-service across the organization.",
  },
  {
    icon: "/icons/extra1.png",
    title: "Service Level Management",
    description:
      "Define, track, and meet SLAs/OLAs with real-time visibility, proactive notifications, and performance analytics.",
  },
  {
    icon: "/icons/extra1.png",
    title: "Service Catalog",
    description:
      "A centralized platform automates IT service requests for more efficiency.",
  },
  {
    icon: "/icons/extra1.png",
    title: "Configuration Management Database (CMDB)",
    description:
      "Maintain a single source of truth for your enterprise IT infrastructure and services.",
  },
   {
    icon: "/icons/extra1.png",
    title: "Asset Management Core",
    description:
      "Make informed decisions with real-time visibility into assets across the enterprise.",
  },
];




interface BenefitItem {
  title: string;
  description: string;
  imageSrc: string;
}

export const spmBenefits: BenefitItem[] = [
  {
    title: "Faster Service Lifecycle Management",
    description:
      "SPM streamlines defining, launching, and retiring services for a more agile approach to managing the service lifecycle.",
    imageSrc: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e7930bfb64f45eab0_group-people-working-team.png",
  },
  {
    title: "Improved Portfolio Visibility",
    description:
      "Gain a complete view of initiatives and investments to ensure alignment with business goals and maximize value delivery.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    title: "Smarter Resource Utilization",
    description:
      "Allocate the right people to the right work at the right time with capacity insights and strategic prioritization.",
    imageSrc: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e6d9f2a101e11a252_medium-shot-people-sticking-post-its.png",
  },
  {
    title: "Cost Management and Optimization",
    description:
      "ServiceNow’s SPM improves service costs by managing budgets, forecasting expenses and reducing spending.",
    imageSrc: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e04268b8df2579206_colleagues-work(2).png",
  },
];

export const itsmBenefits: BenefitItem[] = [
  {
    title: "Efficiency that Drives Growth",
    description:
      "Automate routine tasks and enable your IT team to prioritize strategic projects.",
    imageSrc: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e7930bfb64f45eab0_group-people-working-team.png",
  },
  {
    title: "Enhanced End-User Experience",
    description:
      "Transform IT into a proactive, responsive function with quality service.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    title: "Data-Driven Insights for Continuous Improvement",
    description:
      "Real-time reporting and analytics optimize resources and drive improvement.",
    imageSrc: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e6d9f2a101e11a252_medium-shot-people-sticking-post-its.png",
  },
  {
    title: "Cost Savings through Operational Efficiency",
    description:
      "Reduce manual workload to optimize service delivery with high service quality.",
    imageSrc: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e04268b8df2579206_colleagues-work(2).png",
  },
];

export const itamBenefits: ConsiderationItem[] = [
  {
    title: "Cost Savings through Optimized Asset Usage",
    description:
      "With a comprehensive view of asset utilization, ServiceNow ITAM helps you avoid redundant purchases, reduce maintenance costs, and maximize asset life."
,
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e7930bfb64f45eab0_group-people-working-team.png",
  },
  {
    title: "Improved Compliance and Reduced Audit Risk",
    description:
      "ServiceNow ITAM provides visibility into license compliance and usage, reducing the risk of non-compliance, audit penalties, and unexpected costs.",
    icon: "/images/services-details.jpg",
  },
  {
    title: "Enhanced Decision-Making with Real-Time Data",
    description:
      "Accurate, real-time data on asset status and utilization empowers stakeholders to make informed decisions, whether optimizing software usage or planning future hardware acquisitions.",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e6d9f2a101e11a252_medium-shot-people-sticking-post-its.png",
  },
  {
    title: "Streamlined Asset Lifecycle Management",
    description:
      "Automated workflows across the asset lifecycle—from procurement to disposal—ensure efficient, transparent, and cost-effective asset management practices.",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e04268b8df2579206_colleagues-work(2).png",
  },
];


// Challenge data interfaces and arrays
export interface ChallengeItem {
  id: string;
  icon: string; // Using string for icon names to be more flexible
  title: string;
  description: string;
}

export const spmChallenges: ChallengeItem[] = [
  {
    id: 'portfolio',
    icon: 'Settings',
    title: 'Portfolio Visibility and Alignment',
    description: 'Provides a complete view of projects, portfolios, and business objectives.'
  },
  {
    id: 'resource',
    icon: 'Target',
    title: 'Resource Optimization',
    description: 'Ensures the best use of available resources across various projects.'
  },
  {
    id: 'risk',
    icon: 'AlertTriangle',
    title: 'Risk and Issue Management',
    description: 'Proactively identifies and addresses risks to ensure project success.'
  },
  {
    id: 'value',
    icon: 'AlertTriangle',
    title: 'Value Realization and Measurement',
    description: 'Tracks and measures the value delivered by portfolio execution.'
  }
];

export const itsmChallenges: ChallengeItem[] = [
  {
    id: 'downtime',
    icon: 'AlertTriangle',
    title: 'Minimizing Service Downtime',
    description: 'Reduce unplanned outages and restore services quickly to maintain business continuity.'
  },
  {
    id: 'efficiency',
    icon: 'Settings',
    title: 'Operational Efficiency',
    description: 'Streamline IT processes and eliminate manual tasks to improve team productivity.'
  },
  {
    id: 'visibility',
    icon: 'Target',
    title: 'Service Visibility and Control',
    description: 'Gain complete visibility into IT services and infrastructure for better decision making.'
  },
  {
    id: 'compliance',
    icon: 'Shield',
    title: 'Compliance and Governance',
    description: 'Ensure IT operations meet regulatory requirements and internal governance standards.'
  }
];

export const itamChallenges: ChallengeItem[] = [
  {
    id: 'asaw',
    icon: 'AlertTriangle',
    title: 'Asset Sprawl and Wasted Resources',
    description: 'As organizations grow, assets can become difficult to track, leading to underutilization and waste. ServiceNow ITAM helps consolidate asset data in one place, providing complete visibility and control over asset utilization.'
  },
  {
    id: 'CLM',
    icon: 'Settings',
    title: 'Compliance and License Management',
    description: 'Managing software licenses and maintaining compliance with vendor agreements is complex and costly. ITAM’s Software Asset Management (SAM) ensures compliance, reduces audit risks, and prevents overspending on licenses..'
  },
  {
    id: 'CALM',
    icon: 'Target',
    title: 'Costly Asset Lifecycle Management',
    description: 'Managing assets from procurement to disposal can be labor-intensive without a centralized process. ITAM automates asset tracking and lifecycle management, enabling more efficient procurement, maintenance, and decommissioning.'
  },
  {
    id: 'LAVUI',
    icon: 'Shield',
    title: 'Lack of Asset Visibility and Utilization Insights',
    description: 'Without a clear view of asset status, location, and condition, organizations face increased costs and limited optimization opportunities. ITAM provides real-time insights into asset usage, condition, and value, enabling better decision-making.'
  }
];




export interface ConsiderationItem {
  icon: string; // Using string for icon names to be more flexible
  title: string;
  description: string;
}

// Export as 'considerations' to match the import in Considerations component
export const considerations: ConsiderationItem[] = [
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
    icon: '/icons/customization.png',
    title: 'Customization vs. Out-of-the-Box Configuration',
    description:
      'Balance customization and utilizing out-of-the-box options to prevent unnecessary complexity and maintain compatibility for future upgrades.',
  },
  {
    icon: '/icons/resource.png',
    title: 'Resource Management and Capacity Planning',
    description:
      'Utilize resource management tools to monitor availability, assess skills, gauge demand, and facilitate efficient capacity planning.',
  },
  {
    icon: '/icons/training.png',
    title: 'User Training and Adoption',
    description:
      'Train end-users, particularly those in key roles, and supply support materials to facilitate successful adoption of the platform.',
  },
  {
    icon: '/icons/improvement.png',
    title: 'Continuous Improvement and Feedback Loops',
    description:
      'Regularly evaluate ServiceNow SPM by gathering user feedback, tracking KPIs, and refining processes to meet evolving business needs.',
  },
  {
    icon: '/icons/risk.png',
    title: 'Risk and Issue Management',
    description:
      'Define risk tracking, management, and mitigation within the platform to ensure projects stay on course and remain aligned.',
  },
];

// Keep spmconsiderations export if needed elsewhere
export const spmconsiderations = considerations;

// ITSM-specific considerations
export const itsmConsiderations: ConsiderationItem[] = [
  {
    icon: '/icons/stakeholder.png',
    title: 'Service Strategy Alignment',
    description: 'Align ITSM implementation with business objectives and ensure IT services support organizational goals and priorities.'
  },
  {
    icon: '/icons/strategy.png',
    title: 'Process Standardization',
    description: 'Establish standardized ITIL-based processes for incident, problem, change, and request management across the organization.'
  },
  {
    icon: '/icons/data.png',
    title: 'CMDB Data Quality',
    description: 'Ensure accurate and up-to-date configuration management database with proper CI relationships and data governance.'
  },
  {
    icon: '/icons/customization.png',
    title: 'Workflow Automation Balance',
    description: 'Balance automation with human oversight to maintain service quality while improving efficiency and response times.'
  },
  {
    icon: '/icons/resource.png',
    title: 'Team Skills and Capacity',
    description: 'Assess current team capabilities and plan for skill development to effectively manage and operate ITSM processes.'
  },
  {
    icon: '/icons/training.png',
    title: 'User Adoption and Training',
    description: 'Provide comprehensive training for IT staff and end-users to ensure successful adoption of new ITSM processes and tools.'
  },
  {
    icon: '/icons/improvement.png',
    title: 'Metrics and KPI Framework',
    description: 'Define clear KPIs and metrics to measure ITSM performance, service quality, and continuous improvement opportunities.'
  },
  {
    icon: '/icons/risk.png',
    title: 'Change Management Strategy',
    description: 'Implement robust change management processes to minimize service disruption and ensure controlled deployment of changes.'
  }
];

export const itamOfferings: ConsiderationItem[] = [
  {
    icon: '/icons/stakeholder.png',
    title: 'Hardware Asset Management (HAM)',
    description: 'Track and manage hardware assets from acquisition through disposal. HAM provides visibility into asset location, usage, condition, and value, ensuring optimal utilization and planning for future asset needs.'
  },
  {
    icon: '/icons/strategy.png',
    title: 'Software Asset Management (SAM)',
    description: 'Manage software licenses, usage, and compliance with ServiceNow’s SAM tools. SAM helps you control software costs, stay compliant with vendor agreements, and reduce the risk of license audits.'
  },
  {
    icon: '/icons/data.png',
    title: 'Cloud Insights',
    description: 'Gain visibility into cloud-based resources and optimize cloud spending. Cloud Insights within ITAM helps you track cloud usage, identify cost-saving opportunities, and prevent over-provisioning..'
  },
  {
    icon: '/icons/customization.png',
    title: 'Contract Management',
    description: 'Maintain and track contracts related to assets, such as maintenance agreements and vendor contracts. Contract Management enables you to monitor renewal dates, compliance terms, and spend against contracts to avoid unnecessary expenses..'
  },
  {
    icon: '/icons/resource.png',
    title: 'Asset Request Management',
    description: 'Simplify and streamline asset requests through a self-service portal. Asset Request Management ensures that users receive the right assets quickly while maintaining oversight of asset allocation.'
  },
  {
    icon: '/icons/training.png',
    title: 'Configuration Management Database (CMDB) Integration',
    description: 'Integrate ITAM with the CMDB to keep an accurate, real-time record of asset dependencies and relationships. CMDB integration ensures that all asset data is up-to-date and linked to relevant services, improving visibility and management..'
  },
  {
    icon: '/icons/improvement.png',
    title: 'Depreciation and Financial Management',
    description: 'Track the financial impact of asset usage and calculate depreciation accurately. ITAM’s financial management features provide insights into the total cost of ownership and asset value over time..'
  },
  {
    icon: '/icons/risk.png',
    title: 'Asset Disposal Management',
    description: 'Automate end-of-life processes for assets, ensuring secure, compliant disposal. Asset Disposal Management helps mitigate security risks, maintain environmental compliance, and streamline the disposal proces.'
  }
];


interface FaqItem {
  id: string;
  question: string;
  answer: string;
  imageSrc: string;
}

export const spmfaqs: FaqItem[] = [
  {
    id: "vision-goals",
    question: "Defining Strategic Portfolio Management Vision and Goals",
    answer:
      "Defining Strategic Portfolio Management goals involves aligning projects with strategy, setting clear objectives, and establishing KPIs to ensure portfolio success and value delivery.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "solution-design",
    question: "ServiceNow SPM Solution Design and Architecture",
    answer:
      "ServiceNow SPM Solution Design creates a scalable, flexible system that aligns with organizational needs, integrates with existing tools, and optimizes platform performance.",
    imageSrc: "/images/collaboration_image.jpg",
  },
  {
    id: "agile-delivery",
    question: "Agile Project Delivery Methodology for SPM Implementation",
    answer:
      "Agile Project Delivery for SPM emphasizes iterative sprints, teamwork, and the ongoing delivery of value. This approach ensures flexibility, quicker adaptation, and alignment with changing business priorities.",
    imageSrc: "/images/success-stories6.jpg",
  },
  {
    id: "integrations",
    question: "Data Governance, Security, and Compliance in SPM",
    answer:
      "Data governance, security, and compliance in SPM play a crucial role in managing data effectively, meeting regulatory requirements, and establishing strong security measures to protect sensitive information throughout the portfolio management process.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "optimization",
    question: "Optimization of Resource and Financial Management in SPM",
    answer:
      "Optimizing resource and economic management in SPM requires effective resource allocation, alignment with organizational goals, and financial forecasting to maintain budget control and enhance portfolio ROI.",
    imageSrc: "/images/collaboration_image.jpg",
  },
 
];



export const itsmfaqs: FaqItem[] = [
  {
    id: "vision-goals",
    question: "Defining Strategic Portfolio Management Vision and Goals",
    answer:
      "Defining Strategic Portfolio Management goals involves aligning projects with strategy, setting clear objectives, and establishing KPIs to ensure portfolio success and value delivery.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "solution-design",
    question: "ServiceNow SPM Solution Design and Architecture",
    answer:
      "ServiceNow SPM Solution Design creates a scalable, flexible system that aligns with organizational needs, integrates with existing tools, and optimizes platform performance.",
    imageSrc: "/images/collaboration_image.jpg",
  },
  {
    id: "agile-delivery",
    question: "Agile Project Delivery Methodology for SPM Implementation",
    answer:
      "Agile Project Delivery for SPM emphasizes iterative sprints, teamwork, and the ongoing delivery of value. This approach ensures flexibility, quicker adaptation, and alignment with changing business priorities.",
    imageSrc: "/images/success-stories6.jpg",
  },
  {
    id: "integrations",
    question: "Data Governance, Security, and Compliance in SPM",
    answer:
      "Data governance, security, and compliance in SPM play a crucial role in managing data effectively, meeting regulatory requirements, and establishing strong security measures to protect sensitive information throughout the portfolio management process.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "optimization",
    question: "Optimization of Resource and Financial Management in SPM",
    answer:
      "Optimizing resource and economic management in SPM requires effective resource allocation, alignment with organizational goals, and financial forecasting to maintain budget control and enhance portfolio ROI.",
    imageSrc: "/images/collaboration_image.jpg",
  },
 
];

export const itamfaqs: FaqItem[] = [
  {
    id: "vision-goals",
    question: "Defining Strategic Portfolio Management Vision and Goals",
    answer:
      "Defining Strategic Portfolio Management goals involves aligning projects with strategy, setting clear objectives, and establishing KPIs to ensure portfolio success and value delivery.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "solution-design",
    question: "ServiceNow SPM Solution Design and Architecture",
    answer:
      "ServiceNow SPM Solution Design creates a scalable, flexible system that aligns with organizational needs, integrates with existing tools, and optimizes platform performance.",
    imageSrc: "/images/collaboration_image.jpg",
  },
  {
    id: "agile-delivery",
    question: "Agile Project Delivery Methodology for SPM Implementation",
    answer:
      "Agile Project Delivery for SPM emphasizes iterative sprints, teamwork, and the ongoing delivery of value. This approach ensures flexibility, quicker adaptation, and alignment with changing business priorities.",
    imageSrc: "/images/success-stories6.jpg",
  },
  {
    id: "integrations",
    question: "Data Governance, Security, and Compliance in SPM",
    answer:
      "Data governance, security, and compliance in SPM play a crucial role in managing data effectively, meeting regulatory requirements, and establishing strong security measures to protect sensitive information throughout the portfolio management process.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "optimization",
    question: "Optimization of Resource and Financial Management in SPM",
    answer:
      "Optimizing resource and economic management in SPM requires effective resource allocation, alignment with organizational goals, and financial forecasting to maintain budget control and enhance portfolio ROI.",
    imageSrc: "/images/collaboration_image.jpg",
  },
 
];

interface ContentItem {
  id: string;
  title: string;
  paragraph1: string;
  paragraph2: string;
  imageSrc: string;
    
}

export const spmPortfolio : ContentItem[] = [
  {
    id: "vision-goals",
    title: "Unlock Portfolio Management Excellence with ServiceNow SPM",
    paragraph1:
      "With the implementation of ServiceNow SPM, you are not merely adopting a portfolio management tool; you are embracing a comprehensive approach to achieving strategic portfolio excellence. The automation, visibility, and scalability feature of ServiceNow SPM enable organizations to enhance project execution, allocate resources effectively, and make more informed decisions.",
      paragraph2 : "Let us partner with you to unlock the full potential of ServiceNow SPM and elevate your portfolio management to a new standard of excellence.",
    imageSrc : "/images/services-details.jpg",
  },
]