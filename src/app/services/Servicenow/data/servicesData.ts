import { BriefcaseBusiness, ClipboardList, ReceiptText, LucideIcon, Workflow, RefreshCw, ShieldAlert } from 'lucide-react';
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
export const itomBenefits: BenefitItem[] = [
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

export const csmBenefits: BenefitItem[] = [
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
export const hrsdBenefits: BenefitItem[] = [
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
    title: 'Fragmented Systems and Data Silos',
    description: 'ServiceNow ITSM consolidates data and workflows in a unified platform, breaking down silos and ensuring seamless operations across departments.'
  },
  {
    id: 'efficiency',
    icon: 'Settings',
    title: 'Manual, Error-Prone Processes',
    description: 'ServiceNow ITSM automated workflows reduce manual workloads and accelerate service resolution so your team can focus on higher-value initiatives.'
  },
  {
    id: 'visibility',
    icon: 'Target',
    title: 'Risk of Downtime and Service Disruptions',
    description: 'ServiceNow ITSM provides a structured process for incidents and problems to help quickly address and resolve issues and minimize downtime.'
  },
  {
    id: 'compliance',
    icon: 'Shield',
    title: 'Scaling IT with Business Growth',
    description: 'ServiceNow ITSM spans everything from foundational IT functions to advanced service management, evolving seamlessly with your business.'
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

export const itomChallenges: ChallengeItem[] = [
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
export const irmChallenges: ChallengeItem[] = [
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
export const csmChallenges: ChallengeItem[] = [
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
export const hrsdChallenges: ChallengeItem[] = [
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
export const secOpsChallenges: ChallengeItem[] = [
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
export const fsmChallenges: ChallengeItem[] = [
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
export const wsdChallenges: ChallengeItem[] = [
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

export const itsmCapabilities: ChallengeItem[] = [
  {
    id: 'asaw',
    icon: 'AlertTriangle',
    title: 'Incident Management',
    description: 'Efficiently manage and resolve IT issues to restore normal service operations.'
  },
  {
    id: 'CLM',
    icon: 'Settings',
    title: 'Change Management',
    description: 'Ensure controlled and smooth implementation of IT changes with minimal impact.'
  },
  {
    id: 'CALM',
    icon: 'Target',
    title: 'Service Catalog',
    description: 'A centralized platform automates IT service requests for more efficiency.'
  },
  {
    id: 'LAVUI',
    icon: 'Shield',
    title: 'Configuration Management (CMDB)',
    description: 'Maintain a single source of truth for your enterprise IT infrastructure and services.'
  },
  {
    id: 'pbm',
    icon: 'Shield',
    title: 'Problem Management',
    description: 'Identify and handle root causes of repeat incidents to minimize service disruptions.'
  }
  ,
  {
    id: 'rm',
    icon: 'Shield',
    title: 'Request Management',
    description: 'Simplify service requests with standardized workflows and approvals.'
  }
   ,
  {
    id: 'pbm',
    icon: 'Shield',
    title: 'Knowledge Management',
    description: 'Share and reuse knowledge to resolve issues faster and enhance user experience.'
  }
     ,
  {
    id: 'amc',
    icon: 'Shield',
    title: 'Asset Management Core',
    description: 'Make informed decisions with real-time visibility into assets across the enterprise.'
  }
];
export const itomCapabilities: ChallengeItem[] = [
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
export const hrsdCapabilities: ChallengeItem[] = [
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
export const csmCapabilities: ChallengeItem[] = [
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
export const irmCustomerBenefits: ChallengeItem[] = [
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
export const secopsCustomerBenefits: ChallengeItem[] = [
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
export const fsmCustomerBenefits: ChallengeItem[] = [
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

export const wsdCustomerBenefits: ChallengeItem[] = [
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
    title: 'Defining Clear Objectives',
    description: 'What is driving the adoption of ITSM, and what are the expected key results?'
  },
  {
    icon: '/icons/strategy.png',
    title: 'Process Alignment',
    description: 'Are your IT processes aligned with ITIL best practices? What are the gaps?'
  },
  {
    icon: '/icons/data.png',
    title: 'Governance Model',
    description: 'Do you have a governance structure to maintain the platform?'
  },
  {
    icon: '/icons/customization.png',
    title: 'Business Impact Analysis',
    description: 'How will adopting ServiceNow ITSM impact the various departments or business groups?'
  },
  {
    icon: '/icons/resource.png',
    title: 'Data Accuracy',
    description: 'Do you have accurate data to create an efficient and effective CMDB?.'
  },
  {
    icon: '/icons/training.png',
    title: 'Scalability',
    description: 'Do you need to consider scalability to support your organization’s growth?'
  },
  {
    icon: '/icons/improvement.png',
    title: 'Integration Needs',
    description: 'Do you have third-party tools or legacy systems that need integration with ServiceNow?'
  },
  {
    icon: '/icons/risk.png',
    title: 'User Training',
    description: 'Do you need end-users and IT staff training to adopt and effectively use ITSM?'
  }
];
export const hrsdConsiderations: ConsiderationItem[] = [
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
    description: 'Track the financial impact of asset usage and calculate depreciation accurately. ITAM\'s financial management features provide insights into the total cost of ownership and asset value over time.'
  },
  {
    icon: '/icons/risk.png',
    title: 'Asset Disposal Management',
    description: 'Automate end-of-life processes for assets, ensuring secure, compliant disposal. Asset Disposal Management helps mitigate security risks, maintain environmental compliance, and streamline the disposal process.'
  }
];

export const itomOfferings: ConsiderationItem[] = [
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
    description: 'Track the financial impact of asset usage and calculate depreciation accurately. ITAM\'s financial management features provide insights into the total cost of ownership and asset value over time.'
  },
  {
    icon: '/icons/risk.png',
    title: 'Asset Disposal Management',
    description: 'Automate end-of-life processes for assets, ensuring secure, compliant disposal. Asset Disposal Management helps mitigate security risks, maintain environmental compliance, and streamline the disposal process.'
  }
];
export const irmOfferings: ConsiderationItem[] = [
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
    description: 'Track the financial impact of asset usage and calculate depreciation accurately. ITAM\'s financial management features provide insights into the total cost of ownership and asset value over time.'
  },
  {
    icon: '/icons/risk.png',
    title: 'Asset Disposal Management',
    description: 'Automate end-of-life processes for assets, ensuring secure, compliant disposal. Asset Disposal Management helps mitigate security risks, maintain environmental compliance, and streamline the disposal process.'
  }
];

export const fsmOfferings: ConsiderationItem[] = [
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
    description: 'Track the financial impact of asset usage and calculate depreciation accurately. ITAM\'s financial management features provide insights into the total cost of ownership and asset value over time.'
  },
  {
    icon: '/icons/risk.png',
    title: 'Asset Disposal Management',
    description: 'Automate end-of-life processes for assets, ensuring secure, compliant disposal. Asset Disposal Management helps mitigate security risks, maintain environmental compliance, and streamline the disposal process.'
  }
];

export const wsdOfferings: ConsiderationItem[] = [
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
    description: 'Track the financial impact of asset usage and calculate depreciation accurately. ITAM\'s financial management features provide insights into the total cost of ownership and asset value over time.'
  },
  {
    icon: '/icons/risk.png',
    title: 'Asset Disposal Management',
    description: 'Automate end-of-life processes for assets, ensuring secure, compliant disposal. Asset Disposal Management helps mitigate security risks, maintain environmental compliance, and streamline the disposal process.'
  }
];
export const secopsOfferings: ConsiderationItem[] = [
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
    description: 'Track the financial impact of asset usage and calculate depreciation accurately. ITAM\'s financial management features provide insights into the total cost of ownership and asset value over time.'
  },
  {
    icon: '/icons/risk.png',
    title: 'Asset Disposal Management',
    description: 'Automate end-of-life processes for assets, ensuring secure, compliant disposal. Asset Disposal Management helps mitigate security risks, maintain environmental compliance, and streamline the disposal process.'
  }
];
export const csmConsiderations: ConsiderationItem[] = [
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
    description: 'Track the financial impact of asset usage and calculate depreciation accurately. ITAM\'s financial management features provide insights into the total cost of ownership and asset value over time.'
  },
  {
    icon: '/icons/risk.png',
    title: 'Asset Disposal Management',
    description: 'Automate end-of-life processes for assets, ensuring secure, compliant disposal. Asset Disposal Management helps mitigate security risks, maintain environmental compliance, and streamline the disposal process.'
  }
];



// FAQ data interface and arrays
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  imageSrc: string;
}

export const itsmFaqs: FaqItem[] = [
  {
    id: "incident-management",
    question: "Discovery and Tailored Strategy",
    answer:
      "We begin with your current IT environment by understanding key pain points, identifying areas for improvement to develop a tailored strategy, and aligning ServiceNow’s capabilities with your unique requirements.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "service-catalog",
    question: "Solution Design",
    answer:
      "Our experts design a solution blueprint for configuration and integration with your existing systems and workflows. Every element is meticulously planned to ensure seamless adoption and long-term success..",
    imageSrc: "/solutionfaq.jpg",
  },
  {
    id: "Implementation and Testing",
    question: "Implementation and Testing",
    answer:
      "Our team manages all implementation aspects, from configuring modules to setting up the CMDB and integrating necessary applications. We rigorously test each component to ensure reliability and readiness for launch.",
    imageSrc: "/implementation.png",
  },
  {
    id: "knowledge-base",
    question: "User Training and Engagement",
    answer:
      "Our training ensures your team fully understands and benefits from the platform’s features, driving high adoption rates. We also provide role-based training sessions to empower your team.",
    imageSrc: "/testing.jpg",
  },
  {
    id: "sla-management",
    question: "Go-Live Support and Continuous Optimization",
    answer:
      "We support your team as they transition to the new platform with a smooth go-live process. Our post-implementation services include troubleshooting, guidance, and optimization recommendations.",
    imageSrc: "/livesupport.jpg",
  },
  {
    id: "lifecycle-management",
    question: "Long-Term Partnership",
    answer:
      "As business grows, so do IT needs. As a trusted partner, we are committed to help you adjust, scale, and optimize ServiceNow ITSM so it continues to deliver measurable business value.",
    imageSrc: "/ltmpartnersip.jpg",
  },
];

export const itamFaqs: FaqItem[] = [
  {
    id: "asset-discovery",
    question: "How does ServiceNow ITAM discover and track assets?",
    answer:
      "ServiceNow ITAM uses automated discovery tools, agent-based monitoring, and integration with existing systems to maintain real-time visibility of all IT assets across the organization.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "software-compliance",
    question: "How does ITAM help with software license compliance?",
    answer:
      "ServiceNow ITAM tracks software installations, monitors usage patterns, and provides compliance dashboards to ensure organizations stay within license agreements and avoid audit risks.",
    imageSrc: "/images/collaboration_image.jpg",
  },
  {
    id: "cost-optimization",
    question: "What cost optimization benefits does ITAM provide?",
    answer:
      "ITAM identifies underutilized assets, prevents redundant purchases, optimizes license usage, and provides financial insights to reduce total cost of ownership.",
    imageSrc: "/images/success-stories6.jpg",
  },
  {
    id: "lifecycle-management",
    question: "How does ITAM manage the complete asset lifecycle?",
    answer:
      "ServiceNow ITAM manages assets from procurement through disposal, including warranty tracking, maintenance scheduling, and secure disposal processes to maximize asset value.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "cloud-visibility",
    question: "How does ITAM provide visibility into cloud assets?",
    answer:
      "ServiceNow ITAM integrates with cloud providers to track cloud resources, monitor spending, and optimize cloud usage while maintaining governance and compliance.",
    imageSrc: "/images/collaboration_image.jpg",
  },
];

export const spmFaqs: FaqItem[] = [
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

export const irmFaqs: FaqItem[] = [
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

export const hrsdfaqs: FaqItem[] = [
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

export const itomfaqs: FaqItem[] = [
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
export const secopsfaqs: FaqItem[] = [
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

export const csmfaqs: FaqItem[] = [
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
export const fsmfaqs: FaqItem[] = [
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

export const wsdfaqs: FaqItem[] = [
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

// Portfolio Management Excellence data interface and content
export interface PortfolioContentItem {
  title: string;
  paragraph1: string;
  paragraph2: string;
  imageSrc: string;
}

export const spmPortfolio: PortfolioContentItem = {
  title: "Portfolio Management Excellence",
  paragraph1: "ServiceNow Strategic Portfolio Management (SPM) transforms how organizations manage their project portfolios by providing comprehensive visibility, strategic alignment, and data-driven decision making capabilities.",
  paragraph2: "With SPM, you can optimize resource allocation, track portfolio performance in real-time, and ensure every project contributes to your strategic objectives. The platform enables seamless collaboration across teams while maintaining governance and compliance standards.",
  imageSrc: "/images/collaboration_image.jpg"
};
export const hrsdPortfolio: PortfolioContentItem = {
  title: "Portfolio Management Excellence",
  paragraph1: "ServiceNow Strategic Portfolio Management (SPM) transforms how organizations manage their project portfolios by providing comprehensive visibility, strategic alignment, and data-driven decision making capabilities.",
  paragraph2: "With SPM, you can optimize resource allocation, track portfolio performance in real-time, and ensure every project contributes to your strategic objectives. The platform enables seamless collaboration across teams while maintaining governance and compliance standards.",
  imageSrc: "/images/collaboration_image.jpg"
};


export const fsmPortfolio: PortfolioContentItem = {
  title: "Portfolio Management Excellence",
  paragraph1: "ServiceNow Strategic Portfolio Management (SPM) transforms how organizations manage their project portfolios by providing comprehensive visibility, strategic alignment, and data-driven decision making capabilities.",
  paragraph2: "With SPM, you can optimize resource allocation, track portfolio performance in real-time, and ensure every project contributes to your strategic objectives. The platform enables seamless collaboration across teams while maintaining governance and compliance standards.",
  imageSrc: "/images/collaboration_image.jpg"
};
export const itsmPortfolio: PortfolioContentItem = {
  title: "Unlock IT Service Excellence with ServiceNow ITSM",
  paragraph1: "With ServiceNow ITSM implementation, you’re not just adopting a service management tool but embracing a fully integrated approach to IT excellence. ServiceNow ITSM automation, visibility, and scalability capabilities empower organizations to reduce downtime, improve efficiency, and enhance customer satisfaction.",
  paragraph2: "Let us partner with you to unlock the full potential of ServiceNow ITSM and elevate your IT operations to a new standard of service excellence.",
  imageSrc: "/images/collaboration_image.jpg"
};


export const itamPortfolio: PortfolioContentItem = {
  title: "Maximize Asset Value with ServiceNow ITAM",
  paragraph1: "By implementing ServiceNow ITAM, your organization gains the visibility, control, and automation needed to manage assets more efficiently, reduce costs, and maintain compliance. With streamlined asset lifecycle management and real-time insights, ITAM empowers your team to make data-driven decisions, improve resource utilization, and align IT assets with business goals. Let us partner with you to implement and optimize ServiceNow ITAM, transforming your approach to asset management and unlocking lasting value for your organization.",
  paragraph2: "",
  imageSrc: "/images/collaboration_image.jpg"
};


export const itomPortfolio: PortfolioContentItem = {
  title: "Maximize Asset Value with ServiceNow ITAM",
  paragraph1: "By implementing ServiceNow ITAM, your organization gains the visibility, control, and automation needed to manage assets more efficiently, reduce costs, and maintain compliance. With streamlined asset lifecycle management and real-time insights, ITAM empowers your team to make data-driven decisions, improve resource utilization, and align IT assets with business goals. Let us partner with you to implement and optimize ServiceNow ITAM, transforming your approach to asset management and unlocking lasting value for your organization.",
  paragraph2: "",
  imageSrc: "/images/collaboration_image.jpg"
};

export const irmPortfolio: PortfolioContentItem = {
  title: "Maximize Asset Value with ServiceNow ITAM",
  paragraph1: "By implementing ServiceNow ITAM, your organization gains the visibility, control, and automation needed to manage assets more efficiently, reduce costs, and maintain compliance. With streamlined asset lifecycle management and real-time insights, ITAM empowers your team to make data-driven decisions, improve resource utilization, and align IT assets with business goals. Let us partner with you to implement and optimize ServiceNow ITAM, transforming your approach to asset management and unlocking lasting value for your organization.",
  paragraph2: "",
  imageSrc: "/images/collaboration_image.jpg"
};
export const csmPortfolio: PortfolioContentItem = {
  title: "Maximize Asset Value with ServiceNow ITAM",
  paragraph1: "By implementing ServiceNow ITAM, your organization gains the visibility, control, and automation needed to manage assets more efficiently, reduce costs, and maintain compliance. With streamlined asset lifecycle management and real-time insights, ITAM empowers your team to make data-driven decisions, improve resource utilization, and align IT assets with business goals. Let us partner with you to implement and optimize ServiceNow ITAM, transforming your approach to asset management and unlocking lasting value for your organization.",
  paragraph2: "",
  imageSrc: "/images/collaboration_image.jpg"
};
export const wsdPortfolio: PortfolioContentItem = {
  title: "Maximize Asset Value with ServiceNow ITAM",
  paragraph1: "By implementing ServiceNow ITAM, your organization gains the visibility, control, and automation needed to manage assets more efficiently, reduce costs, and maintain compliance. With streamlined asset lifecycle management and real-time insights, ITAM empowers your team to make data-driven decisions, improve resource utilization, and align IT assets with business goals. Let us partner with you to implement and optimize ServiceNow ITAM, transforming your approach to asset management and unlocking lasting value for your organization.",
  paragraph2: "",
  imageSrc: "/images/collaboration_image.jpg"
};


export const secopsPortfolio: PortfolioContentItem = {
  title: "Maximize Asset Value with ServiceNow ITAM",
  paragraph1: "By implementing ServiceNow ITAM, your organization gains the visibility, control, and automation needed to manage assets more efficiently, reduce costs, and maintain compliance. With streamlined asset lifecycle management and real-time insights, ITAM empowers your team to make data-driven decisions, improve resource utilization, and align IT assets with business goals. Let us partner with you to implement and optimize ServiceNow ITAM, transforming your approach to asset management and unlocking lasting value for your organization.",
  paragraph2: "",
  imageSrc: "/images/collaboration_image.jpg"
};
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


export interface Practice {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const itsmPractices: Practice[] = [
  {
    id: 'alignment',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755f4fbd2d7fbbbac3f_Frame%2032%20(38).svg',
    title: 'Start Small, Then Scale',
    description:
      "Begin with core modules before expanding to advanced capabilities.",
  },
  {
    id: 'agile',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755498f6c737cf53327_Frame%2032%20(39).svg',
    title: 'Engage Stakeholders',
    description:
      'Establish regular communication with stakeholders throughout the lifecycle.',
  },
  {
    id: 'ux',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68271705ca166033dc20d63f_Frame%2032%20(2).svg',
    title: 'Focuson User Experience',
    description:
      'Prioritize usability and accessibility for end-users and IT teams for higher adoption.',
  },
  
  {
    id: 'governance',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/682717050e18441750036e61_Frame%2032%20(3).svg',
    title: 'Automate Repetitive Tasks',
    description:
      'Maximize efficiency with automated workflows for routine tasks.',
  },
  {
    id: 'data-quality',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755617322f52fbe6ff6_Frame%2032%20(40).svg',
    title: 'Prioritize Data Quality',
    description:
      'Regularly audit and update data in the CMDB to ensure consistency and data accuracy.',
  },
  {
    id: 'risk',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755c3c225525665f4ac_Frame%2032%20(41).svg',
    title: 'Adopt Agile Methods',
    description:
      'Use iterative agile approaches to develop and deploy for continuous improvements.',
  },
 
  {
    id: 'performance',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755c3c225525665f4ac_Frame%2032%20(41).svg',
    title: 'Emphasize Change Management',
    description:
      'Adopt robust change management for seamless implementation.',
  },
  {
    id: 'collaboration',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg',
    title: 'Monitor and Optimize',
    description:
      'Leverage Performance Analytics to track KPIs andspot areas for improvements.',
  },
];


export const itomPractices: Practice[] = [
  {
    id: 'alignment',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg',
    title: 'Portfolio Alignment with Strategic Goals',
    description:
      "Make sure that every project and program closely aligns with the organization's strategic vision, goals, and objectives to enhance overall business success and value.",
  },
  {
    id: 'agile',
    icon: '',
    title: 'Agile Portfolio Management',
    description:
      'Implement flexible portfolio management processes that adapt to changing priorities, market conditions, and opportunities, ensuring alignment with organizational goals.',
  },
  {
    id: 'financial',
    icon: '',
    title: 'Enhanced Financial Management and Budgeting',
    description:
      'Establish thorough financial oversight procedures that encompass budgeting, forecasting, and cost tracking to manage portfolio finances effectively.',
  },
  
  {
    id: 'governance',
    icon: '',
    title: 'Automation of Governance and Approval Workflows',
    description:
      'Automate approval and governance workflows to simplify decision‑making, reduce administrative burden, and maintain consistent, efficient portfolio management.',
  },
  {
    id: 'change',
    icon: '',
    title: 'Change Management and Adoption Strategy',
    description:
      'Create a change plan that enables smooth transitions, addresses resistance, and promotes platform adoption across the organization.',
  },
  {
    id: 'risk',
    icon: '',
    title: 'Risk Assessment and Mitigation Frameworks',
    description:
      'Establish proactive frameworks to identify, evaluate, and reduce risks at portfolio, program, and project levels to ensure successful outcomes.',
  },
 
  {
    id: 'performance',
    icon: '',
    title: 'Performance Analytics and Reporting',
    description:
      'Create proactive frameworks that actively identify, evaluate, and reduce risks at the portfolio, program, and project levels to ensure successful results.',
  },
  {
    id: 'collaboration',
    icon: '',
    title: 'Cross-Functional Collaboration and Communication',
    description:
      'Foster collaboration among IT, finance, and business units to guarantee smooth portfolio management, effective execution, and alignment with business priorities.',
  },
];
export const csmBestPractices: Practice[] = [
  {
    id: 'alignment',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg',
    title: 'Portfolio Alignment with Strategic Goals',
    description:
      "Make sure that every project and program closely aligns with the organization's strategic vision, goals, and objectives to enhance overall business success and value.",
  },
  {
    id: 'agile',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg',
    title: 'Agile Portfolio Management',
    description:
      'Implement flexible portfolio management processes that adapt to changing priorities, market conditions, and opportunities, ensuring alignment with organizational goals.',
  },
  {
    id: 'financial',
    icon: '',
    title: 'Enhanced Financial Management and Budgeting',
    description:
      'Establish thorough financial oversight procedures that encompass budgeting, forecasting, and cost tracking to manage portfolio finances effectively.',
  },
  
  {
    id: 'governance',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg',
    title: 'Automation of Governance and Approval Workflows',
    description:
      'Automate approval and governance workflows to simplify decision‑making, reduce administrative burden, and maintain consistent, efficient portfolio management.',
  },
  {
    id: 'change',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg',
    title: 'Change Management and Adoption Strategy',
    description:
      'Create a change plan that enables smooth transitions, addresses resistance, and promotes platform adoption across the organization.',
  },
  {
    id: 'risk',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg',
    title: 'Risk Assessment and Mitigation Frameworks',
    description:
      'Establish proactive frameworks to identify, evaluate, and reduce risks at portfolio, program, and project levels to ensure successful outcomes.',
  },
 
  {
    id: 'performance',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg',
    title: 'Performance Analytics and Reporting',
    description:
      'Create proactive frameworks that actively identify, evaluate, and reduce risks at the portfolio, program, and project levels to ensure successful results.',
  },
  {
    id: 'collaboration',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg',
    title: 'Cross-Functional Collaboration and Communication',
    description:
      'Foster collaboration among IT, finance, and business units to guarantee smooth portfolio management, effective execution, and alignment with business priorities.',
  },
];
export const hrsdBestPractices: Practice[] = [
  {
    id: 'alignment',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg',
    title: 'Portfolio Alignment with Strategic Goals',
    description:
      "Make sure that every project and program closely aligns with the organization's strategic vision, goals, and objectives to enhance overall business success and value.",
  },
  {
    id: 'agile',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg',
    title: 'Agile Portfolio Management',
    description:
      'Implement flexible portfolio management processes that adapt to changing priorities, market conditions, and opportunities, ensuring alignment with organizational goals.',
  },
  {
    id: 'financial',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg',
    title: 'Enhanced Financial Management and Budgeting',
    description:
      'Establish thorough financial oversight procedures that encompass budgeting, forecasting, and cost tracking to manage portfolio finances effectively.',
  },
  
  {
    id: 'governance',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg',
    title: 'Automation of Governance and Approval Workflows',
    description:
      'Automate approval and governance workflows to simplify decision‑making, reduce administrative burden, and maintain consistent, efficient portfolio management.',
  },
  {
    id: 'change',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg',
    title: 'Change Management and Adoption Strategy',
    description:
      'Create a change plan that enables smooth transitions, addresses resistance, and promotes platform adoption across the organization.',
  },
  {
    id: 'risk',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg',
    title: 'Risk Assessment and Mitigation Frameworks',
    description:
      'Establish proactive frameworks to identify, evaluate, and reduce risks at portfolio, program, and project levels to ensure successful outcomes.',
  },
 
  {
    id: 'performance',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg',
    title: 'Performance Analytics and Reporting',
    description:
      'Create proactive frameworks that actively identify, evaluate, and reduce risks at the portfolio, program, and project levels to ensure successful results.',
  },
  {
    id: 'collaboration',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg',
    title: 'Cross-Functional Collaboration and Communication',
    description:
      'Foster collaboration among IT, finance, and business units to guarantee smooth portfolio management, effective execution, and alignment with business priorities.',
  },
];


// SPM Best Practices
export const spmPractices: Practice[] = [
  {
    id: 'alignment',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg' ,
    title: 'Portfolio Alignment with Strategic Goals',
    description:
      "Make sure that every project and program closely aligns with the organization's strategic vision, goals, and objectives to enhance overall business success and value.",
  },
  {
    id: 'agile',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg' ,
    title: 'Agile Portfolio Management',
    description:
      'Implement flexible portfolio management processes that adapt to changing priorities, market conditions, and opportunities, ensuring alignment with organizational goals.',
  },
  {
    id: 'financial',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg',
    title: 'Enhanced Financial Management and Budgeting',
    description:
      'Establish thorough financial oversight procedures that encompass budgeting, forecasting, and cost tracking to manage portfolio finances effectively.',
  },
  {
    id: 'governance',
    icon : 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg',
    title: 'Automation of Governance and Approval Workflows',
    description:
      'Automate approval and governance workflows to simplify decision‑making, reduce administrative burden, and maintain consistent, efficient portfolio management.',
  },
  {
    id: 'change',
    icon : 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg' ,
    title: 'Change Management and Adoption Strategy',
    description:
      'Create a change plan that enables smooth transitions, addresses resistance, and promotes platform adoption across the organization.',
  },
  {
    id: 'risk',
    icon: 'https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg' ,
    title: 'Risk Assessment and Mitigation Frameworks',
    description:
      'Establish proactive frameworks to identify, evaluate, and reduce risks at portfolio, program, and project levels to ensure successful outcomes.',
  },
];