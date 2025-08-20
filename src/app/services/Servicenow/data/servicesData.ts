import {
  BriefcaseBusiness,
  ClipboardList,
  ReceiptText,
  LucideIcon,
  Workflow,
  RefreshCw,
  ShieldAlert,
} from "lucide-react";
export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const spmServices: Service[] = [
  {
    icon: "/icons/demand.png",
    title: "Demand Management",
    description:
      "Streamline demand intake, prioritization, and approval processes. Centralize all project requests and align them with strategic objectives for better resource allocation and decision-making.",
  },
  {
    icon: "/icons/ppm.png",
    title: "Project Portfolio Management (PPM)",
    description:
      "Comprehensive project oversight with real-time dashboards, milestone tracking, and portfolio optimization. Manage multiple projects simultaneously while ensuring strategic alignment and delivery excellence.",
  },
  {
    icon: "/icons/resource.png",
    title: "Resource Management",
    description:
      "Optimize resource allocation across projects and teams. Track capacity, skills, and availability to ensure the right resources are assigned to the right projects at the right time.",
  },
  {
    icon: "/icons/extra1.png",
    title: "Application Portfolio Management (APM)",
    description:
      "Manage your entire application landscape with lifecycle tracking, dependency mapping, and optimization recommendations. Reduce technical debt and improve application performance.",
  },
  {
    icon: "/icons/extra2.png",
    title: "Financial Management",
    description:
      "Track project budgets, costs, and ROI in real-time. Integrate financial planning with project execution for better cost control and financial transparency across your portfolio.",
  },
  {
    icon: "/icons/extra1.png",
    title: "Scenario Planning",
    description:
      "Create and compare multiple portfolio scenarios to optimize resource allocation and strategic outcomes. Make data-driven decisions with what-if analysis and impact assessment.",
  },
  {
    icon: "/icons/extra1.png",
    title: "Agile Development",
    description:
      "Support agile methodologies with sprint planning, backlog management, and team collaboration tools. Integrate agile practices seamlessly with traditional project management approaches.",
  },
  {
    icon: "/icons/extra1.png",
    title: "Performance Analytics",
    description:
      "Advanced reporting and analytics to measure portfolio performance, track KPIs, and identify improvement opportunities. Gain insights into project health, resource utilization, and strategic alignment.",
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
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e7930bfb64f45eab0_group-people-working-team.png",
  },
  {
    title: "Accelerated Service Delivery",
    description:
      "SPM accelerates service delivery and improvements by automating workflows and offering predefined models.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    title: "Improved Decision-Making",
    description:
      "With data-driven insights and dashboards, SPM aids in the strategic planning and prioritization of service investments.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e6d9f2a101e11a252_medium-shot-people-sticking-post-its.png",
  },
  {
    title: "Cost Management and Optimization",
    description:
      "ServiceNow’s SPM improves service costs by managing budgets, forecasting expenses and reducing spending.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e04268b8df2579206_colleagues-work(2).png",
  },
];

export const itsmBenefits: BenefitItem[] = [
  {
    title: "Efficiency that Drives Growth",
    description:
      "Automate routine tasks and enable your IT team to prioritize strategic projects.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e7930bfb64f45eab0_group-people-working-team.png",
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
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e6d9f2a101e11a252_medium-shot-people-sticking-post-its.png",
  },
  {
    title: "Cost Savings through Operational Efficiency",
    description:
      "Reduce manual workload to optimize service delivery with high service quality.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e04268b8df2579206_colleagues-work(2).png",
  },
];

export const itamBenefits: ConsiderationItem[] = [
  {
    title: "Cost Savings through Optimized Asset Usage",
    description:
      "With a comprehensive view of asset utilization, ServiceNow ITAM helps you avoid redundant purchases, reduce maintenance costs, and maximize asset life.",
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
    title: "Enhanced Operational Efficiency",
    description:
      "Automate routine operational tasks, allowing your team to focus on more strategic initiatives while maintaining high-quality service.",
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Faster Problem Resolution",
    description:
      "Due to monitoring, event correlation, and automation, ServiceNow ITOM helps to identify and resolve issues quickly, reducing downtime.",
    imageSrc:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Smarter Resource Allocation",
    description:
      "Provide your team with deeper insights into infrastructure health, enabling better resource management and significantly reducing wastage.",
    imageSrc:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Increased Agility",
    description:
      "Quickly adapt to IT changes through automatic provisioning of cloud resources or rapid response to infrastructure events.",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    title: "Data-Driven Decisions",
    description:
      "Real-time insights from performance metrics, analytics, and dashboards help optimize IT operations and drive continuous improvement.",
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
  },
  {
    title: "Cost Efficiency",
    description:
      "Reduce operational costs by eliminating manual interventions, optimizing resource utilization, and streamlining IT processes.",
    imageSrc:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80",
  },
];

export const hsrdBenefits: BenefitItem[] = [
  {
    title: "Efficiency that Drives Growth",
    description:
      "Automate routine tasks and enable your IT team to prioritize strategic projects.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e7930bfb64f45eab0_group-people-working-team.png",
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
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e6d9f2a101e11a252_medium-shot-people-sticking-post-its.png",
  },
  {
    title: "Cost Savings through Operational Efficiency",
    description:
      "Reduce manual workload to optimize service delivery with high service quality.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e04268b8df2579206_colleagues-work(2).png",
  },
];
export const csmBenefits: BenefitItem[] = [
  {
    title: "Improved Customer Satisfaction",
    description:
      "Enhance customer satisfaction with prompt, intimate, and individualized service experiences.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e7930bfb64f45eab0_group-people-working-team.png",
  },
  {
    title: "Operational Efficiency",
    description:
      "Simplify procedures to enhance service performance and reduce operating costs.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    title: "Proactive Issue Resolution",
    description:
      "Enhance customer experience and reduce issues with proactive issues detection and resolution.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e6d9f2a101e11a252_medium-shot-people-sticking-post-its.png",
  },
  {
    title: "Enhanced Customer Retention",
    description:
      "Foster customer loyalty by consistently surpassing their expectations with quality service.",
    imageSrc:
      "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3c9e04268b8df2579206_colleagues-work(2).png",
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
    id: "portfolio",
    icon: "Settings",
    title: "Portfolio Visibility and Alignment",
    description:
      "Provides a complete view of projects, portfolios, and business objectives.",
  },
  {
    id: "resource",
    icon: "Target",
    title: "Resource Optimization",
    description:
      "Ensures the best use of available resources across various projects.",
  },
  {
    id: "risk",
    icon: "AlertTriangle",
    title: "Risk and Issue Management",
    description:
      "Proactively identifies and addresses risks to ensure project success.",
  },
  {
    id: "value",
    icon: "AlertTriangle",
    title: "Value Realization and Measurement",
    description:
      "Tracks and measures the value delivered by portfolio execution.",
  },
];

export const itsmChallenges: ChallengeItem[] = [
  {
    id: "downtime",
    icon: "AlertTriangle",
    title: "Fragmented Systems and Data Silos",
    description:
      "ServiceNow ITSM consolidates data and workflows in a unified platform, breaking down silos and ensuring seamless operations across departments.",
  },
  {
    id: "efficiency",
    icon: "Settings",
    title: "Manual, Error-Prone Processes",
    description:
      "ServiceNow ITSM automated workflows reduce manual workloads and accelerate service resolution so your team can focus on higher-value initiatives.",
  },
  {
    id: "visibility",
    icon: "Target",
    title: "Risk of Downtime and Service Disruptions",
    description:
      "ServiceNow ITSM provides a structured process for incidents and problems to help quickly address and resolve issues and minimize downtime.",
  },
  {
    id: "compliance",
    icon: "Shield",
    title: "Scaling IT with Business Growth",
    description:
      "ServiceNow ITSM spans everything from foundational IT functions to advanced service management, evolving seamlessly with your business.",
  },
];

export const itamChallenges: ChallengeItem[] = [
  {
    id: "asaw",
    icon: "AlertTriangle",
    title: "Asset Sprawl and Wasted Resources",
    description:
      "As organizations grow, assets can become difficult to track, leading to underutilization and waste. ServiceNow ITAM helps consolidate asset data in one place, providing complete visibility and control over asset utilization.",
  },
  {
    id: "CLM",
    icon: "Settings",
    title: "Compliance and License Management",
    description:
      "Managing software licenses and maintaining compliance with vendor agreements is complex and costly. ITAM’s Software Asset Management (SAM) ensures compliance, reduces audit risks, and prevents overspending on licenses..",
  },
  {
    id: "CALM",
    icon: "Target",
    title: "Costly Asset Lifecycle Management",
    description:
      "Managing assets from procurement to disposal can be labor-intensive without a centralized process. ITAM automates asset tracking and lifecycle management, enabling more efficient procurement, maintenance, and decommissioning.",
  },
  {
    id: "LAVUI",
    icon: "Shield",
    title: "Lack of Asset Visibility and Utilization Insights",
    description:
      "Without a clear view of asset status, location, and condition, organizations face increased costs and limited optimization opportunities. ITAM provides real-time insights into asset usage, condition, and value, enabling better decision-making.",
  },
];

export const itomChallenges: ChallengeItem[] = [
  {
    id: "asaw",
    icon: "AlertTriangle",
    title: "Fragmented IT Environments and Lack of Visibility",
    description:
      "Traditional environments often lack extensive visibility, making it difficult to identify issues or manage resources.",
  },
  {
    id: "CLM",
    icon: "Settings",
    title: "Manual IT Operations",
    description:
      "Repetitive and error-prone tasks drain IT resources and slow down response times to service disruptions or outages.",
  },
  {
    id: "CALM",
    icon: "Target",
    title: "Scaling IT with Business Growth",
    description:
      "As organizations grow, scaling IT infrastructure becomes increasingly complex without centralization.",
  },
  {
    id: "LAVUI",
    icon: "Shield",
    title: "Proactive Problem Identification and Resolution",
    description:
      "Without proper tools, issues often go unnoticed until they cause disruption, leading to costly downtime.",
  },
];
export const irmChallenges: ChallengeItem[] = [
  {
    id: "asaw",
    icon: "AlertTriangle",
    title: "Siloed Risk and Compliance Processes",
    description:
      "Many organizations struggle with fragmented risk and compliance practices, leading to inefficiencies and a lack of visibility. ServiceNow IRM centralizes and standardizes these processes, improving coordination and providing a unified view of enterprise risk..",
  },
  {
    id: "CLM",
    icon: "Settings",
    title: "Manual Risk Management and Compliance",
    description:
      "Traditional methods of managing risk and compliance are often resource-intensive, time-consuming, and prone to errors. IRM automates routine tasks, enabling teams to identify, assess, and mitigate risks more efficiently.",
  },
  {
    id: "CALM",
    icon: "Target",
    title: "Inability to Proactively Manage Risks",
    description:
      "Without real-time insights and proactive monitoring, organizations may only respond to risks after they become issues. ServiceNow IRM provides predictive analytics and monitoring capabilities, allowing teams to address potential risks before they impact operations.",
  },
  {
    id: "LAVUI",
    icon: "Shield",
    title: "Complex Regulatory Compliance Requirements",
    description:
      "With evolving regulations, staying compliant can be challenging and costly. IRM helps organizations streamline compliance tracking, assess regulatory impact, and maintain a continuous state of compliance with minimal effort.",
  },
];
export const csmChallenges: ChallengeItem[] = [
  {
    id: "downtime",
    icon: "AlertTriangle",
    title: "Fragmented Customer Data Silos and Systems",
    description:
      "Enhance service delivery by integrating customer data and workflows into a single platform.",
  },
  {
    id: "efficiency",
    icon: "Settings",
    title: "Slow Resolution Times",
    description:
      "Resolve cases faster with automated workflows so agents can focus on client interactions.",
  },
  {
    id: "visibility",
    icon: "Target",
    title: "Absence of Proactive Service",
    description:
      "Anticipate challenges and proactively address them with built-in AI and predictive analytics.",
  },
  {
    id: "compliance",
    icon: "Shield",
    title: "Scaling Customer Service with Business Growth",
    description:
      "Scale at the speed of light to address your company's growing needs and shifting customer demands.",
  },
];
export const hrsdChallenges: ChallengeItem[] = [
  {
    id: "downtime",
    icon: "AlertTriangle",
    title: "Minimizing Service Downtime",
    description:
      "Reduce unplanned outages and restore services quickly to maintain business continuity.",
  },
  {
    id: "efficiency",
    icon: "Settings",
    title: "Operational Efficiency",
    description:
      "Streamline IT processes and eliminate manual tasks to improve team productivity.",
  },
  {
    id: "visibility",
    icon: "Target",
    title: "Service Visibility and Control",
    description:
      "Gain complete visibility into IT services and infrastructure for better decision making.",
  },
  {
    id: "compliance",
    icon: "Shield",
    title: "Compliance and Governance",
    description:
      "Ensure IT operations meet regulatory requirements and internal governance standards.",
  },
];
export const secOpsChallenges: ChallengeItem[] = [
  {
    id: "siloed",
    icon: "AlertTriangle",
    title: "Siloed Security and IT Teams",
    description:
      "In many organizations, security and IT teams work in isolation, resulting in delayed responses and a lack of coordination. SecOps bridges these silos, enabling seamless collaboration to reduce response times and improve overall security posture",
  },
  {
    id: "manual",
    icon: "Settings",
    title: "Manual Incident Response Processes",
    description:
      "Traditional incident response processes are often time-consuming and involve manual steps, leading to delayed resolutions and increased risk. SecOps automates repetitive tasks, freeing up resources and allowing security teams to focus on critical incidents.",
  },
  {
    id: "overwhelming",
    icon: "Target",
    title: "Overwhelming Volume of Security Alerts",
    description:
      "With the growing number of security tools and alerts, security teams are often overwhelmed, which can lead to alert fatigue. ServiceNow SecOps prioritizes alerts based on threat level, reducing noise and ensuring that high-priority threats are addressed quickly.",
  },
  {
    id: "LAVUI",
    icon: "Shield",
    title: "Difficulty in Threat Intelligence Integration",
    description:
      "Integrating threat intelligence from various sources can be challenging, impacting the accuracy and speed of threat detection. ServiceNow SecOps consolidates threat intelligence within a single platform, allowing for rapid, data-driven responses to emerging threats.",
  },
];
export const fsmChallenges: ChallengeItem[] = [
  {
    id: "asaw",
    icon: "AlertTriangle",
    title: "Asset Sprawl and Wasted Resources",
    description:
      "As organizations grow, assets can become difficult to track, leading to underutilization and waste. ServiceNow ITAM helps consolidate asset data in one place, providing complete visibility and control over asset utilization.",
  },
  {
    id: "CLM",
    icon: "Settings",
    title: "Compliance and License Management",
    description:
      "Managing software licenses and maintaining compliance with vendor agreements is complex and costly. ITAM’s Software Asset Management (SAM) ensures compliance, reduces audit risks, and prevents overspending on licenses..",
  },
  {
    id: "CALM",
    icon: "Target",
    title: "Costly Asset Lifecycle Management",
    description:
      "Managing assets from procurement to disposal can be labor-intensive without a centralized process. ITAM automates asset tracking and lifecycle management, enabling more efficient procurement, maintenance, and decommissioning.",
  },
  {
    id: "LAVUI",
    icon: "Shield",
    title: "Lack of Asset Visibility and Utilization Insights",
    description:
      "Without a clear view of asset status, location, and condition, organizations face increased costs and limited optimization opportunities. ITAM provides real-time insights into asset usage, condition, and value, enabling better decision-making.",
  },
];
export const wsdChallenges: ChallengeItem[] = [
  {
    id: "asaw",
    icon: "AlertTriangle",
    title: "Asset Sprawl and Wasted Resources",
    description:
      "As organizations grow, assets can become difficult to track, leading to underutilization and waste. ServiceNow ITAM helps consolidate asset data in one place, providing complete visibility and control over asset utilization.",
  },
  {
    id: "CLM",
    icon: "Settings",
    title: "Compliance and License Management",
    description:
      "Managing software licenses and maintaining compliance with vendor agreements is complex and costly. ITAM’s Software Asset Management (SAM) ensures compliance, reduces audit risks, and prevents overspending on licenses..",
  },
  {
    id: "CALM",
    icon: "Target",
    title: "Costly Asset Lifecycle Management",
    description:
      "Managing assets from procurement to disposal can be labor-intensive without a centralized process. ITAM automates asset tracking and lifecycle management, enabling more efficient procurement, maintenance, and decommissioning.",
  },
  {
    id: "LAVUI",
    icon: "Shield",
    title: "Lack of Asset Visibility and Utilization Insights",
    description:
      "Without a clear view of asset status, location, and condition, organizations face increased costs and limited optimization opportunities. ITAM provides real-time insights into asset usage, condition, and value, enabling better decision-making.",
  },
];

export const itsmCapabilities: ChallengeItem[] = [
  {
    id: "asaw",
    icon: "",
    title: "Incident Management",
    description:
      "Efficiently manage and resolve IT issues to restore normal service operations.",
  },
  {
    id: "CLM",
    icon: "Settings",
    title: "Change Management",
    description:
      "Ensure controlled and smooth implementation of IT changes with minimal impact.",
  },
  {
    id: "CALM",
    icon: "Target",
    title: "Service Catalog",
    description:
      "A centralized platform automates IT service requests for more efficiency.",
  },
  {
    id: "LAVUI",
    icon: "Shield",
    title: "Configuration Management (CMDB)",
    description:
      "Maintain a single source of truth for your enterprise IT infrastructure and services.",
  },
  {
    id: "pbm",
    icon: "Shield",
    title: "Problem Management",
    description:
      "Identify and handle root causes of repeat incidents to minimize service disruptions.",
  },
  {
    id: "rm",
    icon: "Shield",
    title: "Request Management",
    description:
      "Simplify service requests with standardized workflows and approvals.",
  },
  {
    id: "pbm",
    icon: "Shield",
    title: "Knowledge Management",
    description:
      "Share and reuse knowledge to resolve issues faster and enhance user experience.",
  },
  {
    id: "amc",
    icon: "Shield",
    title: "Asset Management Core",
    description:
      "Make informed decisions with real-time visibility into assets across the enterprise.",
  },
];
export const itomCapabilities: ChallengeItem[] = [
  {
    id: "event",
    icon: "AlertTriangle",
    title: "Event Management",
    description:
      "Monitor and correlate events from IT infrastructure, identifying issues before they impact service delivery.",
  },
  {
    id: "orchestration",
    icon: "Settings",
    title: "Orchestration",
    description:
      "Automate manual, repetitive tasks to improve the speed and accuracy of incident response and service provisioning.",
  },
  {
    id: "cloud",
    icon: "Target",
    title: "Cloud Management",
    description:
      "Simplify cloud management with visibility and control across public, private, and hybrid environments.",
  },
  {
    id: "discovery",
    icon: "Shield",
    title: "Discovery",
    description:
      "Automatically identify and map all IT assets across your environment, providing a full view of your infrastructure.",
  },
  {
    id: "LAVUI",
    icon: "Shield",
    title: "Service Mapping",
    description:
      "Visualize service dependencies and quickly identify the underlying root cause of disruptions, minimizing downtime.",
  },
  {
    id: "IM",
    icon: "Shield",
    title: "Infrastructure Monitoring",
    description:
      "Continuously monitor infrastructure health, performance, and availability for proactive issue response.",
  },
  {
    id: "CMDB",
    icon: "Shield",
    title: "CMDB (Configuration Management Database)",
    description:
      "Maintain an up-to-date inventory of your IT assets and configurations, providing a single source of truth for all systems and services.",
  },
  {
    id: "CM",
    icon: "Shield",
    title: "Certificate Management",
    description:
      "Certificate management in ITOM includes the handling, tracking, renewal, and monitoring of digital certificates in IT infrastructure.",
  },
  {
    id: "ACC",
    icon: "Shield",
    title: "Agent Client Collector",
    description:
      "The Agent Client Collector (ACC) in ITOM is a lightweight agent installed on endpoints, servers, or devices to facilitate data collection and enable operational workflows.",
  },
  {
    id: "SRM",
    icon: "Shield",
    title: "Service Reliability Management",
    description:
      "Service Reliability Management (SRM) in ITOM focuses on ensuring that IT services meet agreed-upon performance, availability, and reliability standards.",
  },
  {
    id: "MI",
    icon: "Shield",
    title: "Metric Intelligence",
    description:
      "Metric Intelligence in ITOM is the process of collecting, analysing, and using metrics from IT systems for monitoring, troubleshooting, and optimization.",
  },
  {
    id: "CA",
    icon: "Shield",
    title: "Cloud Accelerate",
    description:
      "Cloud Accelerate in ITOM Cloud Accelerate in ITOM signifies a suite of sophisticated tools, capabilities, and frameworks engineered to optimize and streamline cloud operations.",
  },
];
export const hrsdCapabilities: ChallengeItem[] = [
  {
    id: "asaw",
    icon: "AlertTriangle",
    title: "Asset Sprawl and Wasted Resources",
    description:
      "As organizations grow, assets can become difficult to track, leading to underutilization and waste. ServiceNow ITAM helps consolidate asset data in one place, providing complete visibility and control over asset utilization.",
  },
  {
    id: "CLM",
    icon: "Settings",
    title: "Compliance and License Management",
    description:
      "Managing software licenses and maintaining compliance with vendor agreements is complex and costly. ITAM’s Software Asset Management (SAM) ensures compliance, reduces audit risks, and prevents overspending on licenses..",
  },
  {
    id: "CALM",
    icon: "Target",
    title: "Costly Asset Lifecycle Management",
    description:
      "Managing assets from procurement to disposal can be labor-intensive without a centralized process. ITAM automates asset tracking and lifecycle management, enabling more efficient procurement, maintenance, and decommissioning.",
  },
  {
    id: "LAVUI",
    icon: "Shield",
    title: "Lack of Asset Visibility and Utilization Insights",
    description:
      "Without a clear view of asset status, location, and condition, organizations face increased costs and limited optimization opportunities. ITAM provides real-time insights into asset usage, condition, and value, enabling better decision-making.",
  },
];
export const csmCapabilities: ChallengeItem[] = [
  {
    id: "cm",
    icon: "AlertTriangle",
    title: "Case Management",
    description:
      "Refine processes to direct requests quickly and effectively.",
  },
  {
    id: "km",
    icon: "Settings",
    title: "Knowledge Management",
    description:
      "Relevant information for faster analysis and better experience.",
  },
  {
    id: "omni",
    icon: "Target",
    title: "Omnichannel Engagement",
    description:
      "Deliver a consistent experience over the phone and email.",
  },
  {
    id: "pbm",
    icon: "Shield",
    title: "Proactive Operations for Customer Service",
    description:
      "Leverage insights to stop problems before they are reported.",
  },
  {
    id: "pbm",
    icon: "Shield",
    title: "Customer Self-Service",
    description:
      "Empower clients with the knowledge base, virtual agent, and self-service portal..",
  },
   {
    id: "pbm",
    icon: "Shield",
    title: "Field Service Management",
    description:
      "Use intelligent scheduling to manage resources and schedule.",
  },
   {
    id: "pbm",
    icon: "Shield",
    title: "Workforce Optimization",
    description:
      "Increase productivity with real-time resource allocation and skill routing.",
  },
  {
    id: "pbm",
    icon: "Shield",
    title: "Performance Analytics",
    description:
      "Track metrics to drive improvement and customer satisfaction.",
  },
];
export const irmCustomerBenefits: ChallengeItem[] = [
  {
    id: "erv",
    icon: "AlertTriangle",
    title: "Enhanced Risk Visibility and Control",
    description:
      "By centralizing risk and compliance data, ServiceNow IRM provides comprehensive visibility, enabling organizations to better understand and control their risk landscape.",
  },
  {
    id: "iew",
    icon: "Settings",
    title: "Improved Efficiency with Automated Workflows",
    description:
      "IRM automates key risk management processes, freeing up resources and allowing teams to focus on strategic initiatives rather than manual compliance tasks.",
  },
  {
    id: "ddpm",
    icon: "Target",
    title: "Data-Driven, Proactive Decision Makin",
    description:
      "With real-time risk insights and predictive analytics, IRM allows organizations to make informed, proactive decisions that align with their risk tolerance and business objectives.",
  },
  {
    id: "streamlined",
    icon: "Shield",
    title: "Streamlined Compliance Management",
    description:
      "ServiceNow IRM simplifies regulatory compliance with continuous monitoring, automated assessments, and real-time compliance tracking, reducing the risk of non-compliance and associated penalties.",
  },
];
export const secopsCustomerBenefits: ChallengeItem[] = [
  {
    id: "actr",
    icon: "AlertTriangle",
    title: "Accelerated Threat Response",
    description:
      "By automating incident response and prioritizing threats based on risk, SecOps helps security teams respond faster, minimizing the potential impact of attacks.",
  },
  {
    id: "collab",
    icon: "Settings",
    title: "Enhanced Collaboration between Security and IT",
    description:
      "ServiceNow SecOps connects security and IT teams, fostering collaboration to manage and resolve security incidents more effectively.",
  },
  {
    id: "ctv",
    icon: "Target",
    title: "Reduced Alert Fatigue",
    description:
      "With intelligent alert prioritization, SecOps helps teams focus on the most critical threats, reducing noise and improving focus on high-risk incidents.",
  },
  {
    id: "ctv",
    icon: "Target",
    title: "Comprehensive Threat Visibility",
    description:
      "ServiceNow SecOps consolidates threat intelligence and integrates with existing security tools, giving teams a holistic view of security incidents and enabling faster, data-driven decision-making.",
  },
];
export const fsmCustomerBenefits: ChallengeItem[] = [
  {
    id: "asaw",
    icon: "AlertTriangle",
    title: "Asset Sprawl and Wasted Resources",
    description:
      "As organizations grow, assets can become difficult to track, leading to underutilization and waste. ServiceNow ITAM helps consolidate asset data in one place, providing complete visibility and control over asset utilization.",
  },
  {
    id: "CLM",
    icon: "Settings",
    title: "Compliance and License Management",
    description:
      "Managing software licenses and maintaining compliance with vendor agreements is complex and costly. ITAM’s Software Asset Management (SAM) ensures compliance, reduces audit risks, and prevents overspending on licenses..",
  },
  {
    id: "CALM",
    icon: "Target",
    title: "Costly Asset Lifecycle Management",
    description:
      "Managing assets from procurement to disposal can be labor-intensive without a centralized process. ITAM automates asset tracking and lifecycle management, enabling more efficient procurement, maintenance, and decommissioning.",
  },
  {
    id: "LAVUI",
    icon: "Shield",
    title: "Lack of Asset Visibility and Utilization Insights",
    description:
      "Without a clear view of asset status, location, and condition, organizations face increased costs and limited optimization opportunities. ITAM provides real-time insights into asset usage, condition, and value, enabling better decision-making.",
  },
];

export const wsdCustomerBenefits: ChallengeItem[] = [
  {
    id: "asaw",
    icon: "AlertTriangle",
    title: "Asset Sprawl and Wasted Resources",
    description:
      "As organizations grow, assets can become difficult to track, leading to underutilization and waste. ServiceNow ITAM helps consolidate asset data in one place, providing complete visibility and control over asset utilization.",
  },
  {
    id: "CLM",
    icon: "Settings",
    title: "Compliance and License Management",
    description:
      "Managing software licenses and maintaining compliance with vendor agreements is complex and costly. ITAM’s Software Asset Management (SAM) ensures compliance, reduces audit risks, and prevents overspending on licenses..",
  },
  {
    id: "CALM",
    icon: "Target",
    title: "Costly Asset Lifecycle Management",
    description:
      "Managing assets from procurement to disposal can be labor-intensive without a centralized process. ITAM automates asset tracking and lifecycle management, enabling more efficient procurement, maintenance, and decommissioning.",
  },
  {
    id: "LAVUI",
    icon: "Shield",
    title: "Lack of Asset Visibility and Utilization Insights",
    description:
      "Without a clear view of asset status, location, and condition, organizations face increased costs and limited optimization opportunities. ITAM provides real-time insights into asset usage, condition, and value, enabling better decision-making.",
  },
];

export interface ConsiderationItem {
  icon: string; // Using string for icon names to be more flexible
  title: string;
  description: string;
}

// Export as 'considerations' to match the import in Considerations component
export const considerations: ConsiderationItem[] = [
  {
    icon: "/icons/stakeholder.png",
    title: "Stakeholder Alignment",
    description:
      "Engage executives and key stakeholders early to align expectations, define success criteria, and secure sponsorship for the SPM journey.",
  },
  {
    icon: "/icons/strategy.png",
    title: "Portfolio Strategy and Governance",
    description:
      "Establish clear prioritization, funding models, and decision frameworks to ensure work delivers measurable strategic value.",
  },
  {
    icon: "/icons/data.png",
    title: "Data Quality and Integration",
    description:
      "Plan for high‑quality data, taxonomy standards, and integrations with core systems to enable accurate insights and automation.",
  },
  {
    icon: "/icons/customization.png",
    title: "Customization vs. Out-of-the-Box Configuration",
    description:
      "Balance customization and utilizing out-of-the-box options to prevent unnecessary complexity and maintain compatibility for future upgrades.",
  },
  {
    icon: "/icons/resource.png",
    title: "Resource Management and Capacity Planning",
    description:
      "Utilize resource management tools to monitor availability, assess skills, gauge demand, and facilitate efficient capacity planning.",
  },
  {
    icon: "/icons/training.png",
    title: "User Training and Adoption",
    description:
      "Train end-users, particularly those in key roles, and supply support materials to facilitate successful adoption of the platform.",
  },
  {
    icon: "/icons/improvement.png",
    title: "Continuous Improvement and Feedback Loops",
    description:
      "Regularly evaluate ServiceNow SPM by gathering user feedback, tracking KPIs, and refining processes to meet evolving business needs.",
  },
  {
    icon: "/icons/risk.png",
    title: "Risk and Issue Management",
    description:
      "Define risk tracking, management, and mitigation within the platform to ensure projects stay on course and remain aligned.",
  },
];

// Keep spmconsiderations export if needed elsewhere
export const spmconsiderations = considerations;

// ITSM-specific considerations
export const itsmConsiderations: ConsiderationItem[] = [
  {
    icon: "/icons/stakeholder.png",
    title: "Defining Clear Objectives",
    description:
      "What is driving the adoption of ITSM, and what are the expected key results?",
  },
  {
    icon: "/icons/strategy.png",
    title: "Process Alignment",
    description:
      "Are your IT processes aligned with ITIL best practices? What are the gaps?",
  },
  {
    icon: "/icons/data.png",
    title: "Governance Model",
    description: "Do you have a governance structure to maintain the platform?",
  },
  {
    icon: "/icons/customization.png",
    title: "Business Impact Analysis",
    description:
      "How will adopting ServiceNow ITSM impact the various departments or business groups?",
  },
  {
    icon: "/icons/resource.png",
    title: "Data Accuracy",
    description:
      "Do you have accurate data to create an efficient and effective CMDB?.",
  },
  {
    icon: "/icons/training.png",
    title: "Scalability",
    description:
      "Do you need to consider scalability to support your organization’s growth?",
  },
  {
    icon: "/icons/improvement.png",
    title: "Integration Needs",
    description:
      "Do you have third-party tools or legacy systems that need integration with ServiceNow?",
  },
  {
    icon: "/icons/risk.png",
    title: "User Training",
    description:
      "Do you need end-users and IT staff training to adopt and effectively use ITSM?",
  },
];
export const hrsdConsiderations: ConsiderationItem[] = [
  {
    icon: "/icons/stakeholder.png",
    title: "Service Strategy Alignment",
    description:
      "Align ITSM implementation with business objectives and ensure IT services support organizational goals and priorities.",
  },
  {
    icon: "/icons/strategy.png",
    title: "Process Standardization",
    description:
      "Establish standardized ITIL-based processes for incident, problem, change, and request management across the organization.",
  },
  {
    icon: "/icons/data.png",
    title: "CMDB Data Quality",
    description:
      "Ensure accurate and up-to-date configuration management database with proper CI relationships and data governance.",
  },
  {
    icon: "/icons/customization.png",
    title: "Workflow Automation Balance",
    description:
      "Balance automation with human oversight to maintain service quality while improving efficiency and response times.",
  },
  {
    icon: "/icons/resource.png",
    title: "Team Skills and Capacity",
    description:
      "Assess current team capabilities and plan for skill development to effectively manage and operate ITSM processes.",
  },
  {
    icon: "/icons/training.png",
    title: "User Adoption and Training",
    description:
      "Provide comprehensive training for IT staff and end-users to ensure successful adoption of new ITSM processes and tools.",
  },
  {
    icon: "/icons/improvement.png",
    title: "Metrics and KPI Framework",
    description:
      "Define clear KPIs and metrics to measure ITSM performance, service quality, and continuous improvement opportunities.",
  },
  {
    icon: "/icons/risk.png",
    title: "Change Management Strategy",
    description:
      "Implement robust change management processes to minimize service disruption and ensure controlled deployment of changes.",
  },
];
export const itamOfferings: ConsiderationItem[] = [
  {
    icon: "/icons/stakeholder.png",
    title: "Hardware Asset Management (HAM)",
    description:
      "Track and manage hardware assets from acquisition through disposal. HAM provides visibility into asset location, usage, condition, and value, ensuring optimal utilization and planning for future asset needs.",
  },
  {
    icon: "/icons/strategy.png",
    title: "Software Asset Management (SAM)",
    description:
      "Manage software licenses, usage, and compliance with ServiceNow’s SAM tools. SAM helps you control software costs, stay compliant with vendor agreements, and reduce the risk of license audits.",
  },
  {
    icon: "/icons/data.png",
    title: "Cloud Insights",
    description:
      "Gain visibility into cloud-based resources and optimize cloud spending. Cloud Insights within ITAM helps you track cloud usage, identify cost-saving opportunities, and prevent over-provisioning..",
  },
  {
    icon: "/icons/customization.png",
    title: "Contract Management",
    description:
      "Maintain and track contracts related to assets, such as maintenance agreements and vendor contracts. Contract Management enables you to monitor renewal dates, compliance terms, and spend against contracts to avoid unnecessary expenses..",
  },
  {
    icon: "/icons/resource.png",
    title: "Asset Request Management",
    description:
      "Simplify and streamline asset requests through a self-service portal. Asset Request Management ensures that users receive the right assets quickly while maintaining oversight of asset allocation.",
  },
  {
    icon: "/icons/training.png",
    title: "Configuration Management Database (CMDB) Integration",
    description:
      "Integrate ITAM with the CMDB to keep an accurate, real-time record of asset dependencies and relationships. CMDB integration ensures that all asset data is up-to-date and linked to relevant services, improving visibility and management..",
  },
  {
    icon: "/icons/improvement.png",
    title: "Depreciation and Financial Management",
    description:
      "Track the financial impact of asset usage and calculate depreciation accurately. ITAM's financial management features provide insights into the total cost of ownership and asset value over time.",
  },
  {
    icon: "/icons/risk.png",
    title: "Asset Disposal Management",
    description:
      "Automate end-of-life processes for assets, ensuring secure, compliant disposal. Asset Disposal Management helps mitigate security risks, maintain environmental compliance, and streamline the disposal process.",
  },
];

export const itomOfferings: ConsiderationItem[] = [
  {
    icon: "/icons/stakeholder.png",
    title: "Hardware Asset Management (HAM)",
    description:
      "Track and manage hardware assets from acquisition through disposal. HAM provides visibility into asset location, usage, condition, and value, ensuring optimal utilization and planning for future asset needs.",
  },
  {
    icon: "/icons/strategy.png",
    title: "Software Asset Management (SAM)",
    description:
      "Manage software licenses, usage, and compliance with ServiceNow’s SAM tools. SAM helps you control software costs, stay compliant with vendor agreements, and reduce the risk of license audits.",
  },
  {
    icon: "/icons/data.png",
    title: "Cloud Insights",
    description:
      "Gain visibility into cloud-based resources and optimize cloud spending. Cloud Insights within ITAM helps you track cloud usage, identify cost-saving opportunities, and prevent over-provisioning..",
  },
  {
    icon: "/icons/customization.png",
    title: "Contract Management",
    description:
      "Maintain and track contracts related to assets, such as maintenance agreements and vendor contracts. Contract Management enables you to monitor renewal dates, compliance terms, and spend against contracts to avoid unnecessary expenses..",
  },
  {
    icon: "/icons/resource.png",
    title: "Asset Request Management",
    description:
      "Simplify and streamline asset requests through a self-service portal. Asset Request Management ensures that users receive the right assets quickly while maintaining oversight of asset allocation.",
  },
  {
    icon: "/icons/training.png",
    title: "Configuration Management Database (CMDB) Integration",
    description:
      "Integrate ITAM with the CMDB to keep an accurate, real-time record of asset dependencies and relationships. CMDB integration ensures that all asset data is up-to-date and linked to relevant services, improving visibility and management..",
  },
  {
    icon: "/icons/improvement.png",
    title: "Depreciation and Financial Management",
    description:
      "Track the financial impact of asset usage and calculate depreciation accurately. ITAM's financial management features provide insights into the total cost of ownership and asset value over time.",
  },
  {
    icon: "/icons/risk.png",
    title: "Asset Disposal Management",
    description:
      "Automate end-of-life processes for assets, ensuring secure, compliant disposal. Asset Disposal Management helps mitigate security risks, maintain environmental compliance, and streamline the disposal process.",
  },
];
export const irmOfferings: ConsiderationItem[] = [
  {
    icon: "/icons/stakeholder.png",
    title: "Risk Management",
    description:
      "Identify, assess, and monitor risks across your organization with a centralized risk management solution. Risk Management helps prioritize risks based on impact, providing insights into potential threats and enabling effective risk mitigation.",
  },
  {
    icon: "/icons/strategy.png",
    title: "Policy and Compliance Management",
    description:
      "Maintain, update, and enforce policies to ensure regulatory compliance. Policy and Compliance Management enables organizations to automate policy distribution, track compliance, and monitor the effectiveness of controls.",
  },
  {
    icon: "/icons/data.png",
    title: "Audit Management",
    description:
      "Streamline audit processes with a centralized platform for planning, conducting, and reporting audits. Audit Management helps organizations reduce audit preparation time and improve audit accuracy and effectiveness.",
  },
  {
    icon: "/icons/customization.png",
    title: "Vendor Risk Management (VRM)",
    description:
      "Identify and mitigate risks associated with third-party vendors. Vendor Risk Management assesses vendor compliance, tracks performance, and provides a framework for managing vendor-related risks effectively.",
  },
  {
    icon: "/icons/resource.png",
    title: "Business Continuity Management (BCM)",
    description:
      "Ensure operational resilience with a business continuity plan that addresses potential disruptions. BCM provides a structured approach to disaster recovery, helping organizations remain resilient in the face of unexpected events.",
  },
  {
    icon: "/icons/training.png",
    title: "Operational Risk Management",
    description:
      "Manage operational risks within a unified platform. Operational Risk Management allows organizations to assess risk exposure across operations and respond quickly to prevent disruptions.",
  },
  {
    icon: "/icons/improvement.png",
    title: "Continuous Control Monitoring (CCM)",
    description:
      "Automate the testing and monitoring of controls, ensuring they operate effectively. CCM provides real-time data to help teams identify control weaknesses and address them promptly.",
  },
  {
    icon: "/icons/risk.png",
    title: "Regulatory Change Management",
    description:
      "Track and respond to regulatory changes with ease. Regulatory Change Management enables organizations to keep up with evolving regulations and ensure that policies and controls remain aligned.",
  },
];

export const fsmOfferings: ConsiderationItem[] = [
  {
    icon: "/icons/stakeholder.png",
    title: "Hardware Asset Management (HAM)",
    description:
      "Track and manage hardware assets from acquisition through disposal. HAM provides visibility into asset location, usage, condition, and value, ensuring optimal utilization and planning for future asset needs.",
  },
  {
    icon: "/icons/strategy.png",
    title: "Software Asset Management (SAM)",
    description:
      "Manage software licenses, usage, and compliance with ServiceNow’s SAM tools. SAM helps you control software costs, stay compliant with vendor agreements, and reduce the risk of license audits.",
  },
  {
    icon: "/icons/data.png",
    title: "Cloud Insights",
    description:
      "Gain visibility into cloud-based resources and optimize cloud spending. Cloud Insights within ITAM helps you track cloud usage, identify cost-saving opportunities, and prevent over-provisioning..",
  },
  {
    icon: "/icons/customization.png",
    title: "Contract Management",
    description:
      "Maintain and track contracts related to assets, such as maintenance agreements and vendor contracts. Contract Management enables you to monitor renewal dates, compliance terms, and spend against contracts to avoid unnecessary expenses..",
  },
  {
    icon: "/icons/resource.png",
    title: "Asset Request Management",
    description:
      "Simplify and streamline asset requests through a self-service portal. Asset Request Management ensures that users receive the right assets quickly while maintaining oversight of asset allocation.",
  },
  {
    icon: "/icons/training.png",
    title: "Configuration Management Database (CMDB) Integration",
    description:
      "Integrate ITAM with the CMDB to keep an accurate, real-time record of asset dependencies and relationships. CMDB integration ensures that all asset data is up-to-date and linked to relevant services, improving visibility and management..",
  },
  {
    icon: "/icons/improvement.png",
    title: "Depreciation and Financial Management",
    description:
      "Track the financial impact of asset usage and calculate depreciation accurately. ITAM's financial management features provide insights into the total cost of ownership and asset value over time.",
  },
  {
    icon: "/icons/risk.png",
    title: "Asset Disposal Management",
    description:
      "Automate end-of-life processes for assets, ensuring secure, compliant disposal. Asset Disposal Management helps mitigate security risks, maintain environmental compliance, and streamline the disposal process.",
  },
];

export const wsdOfferings: ConsiderationItem[] = [
  {
    icon: "/icons/stakeholder.png",
    title: "Hardware Asset Management (HAM)",
    description:
      "Track and manage hardware assets from acquisition through disposal. HAM provides visibility into asset location, usage, condition, and value, ensuring optimal utilization and planning for future asset needs.",
  },
  {
    icon: "/icons/strategy.png",
    title: "Software Asset Management (SAM)",
    description:
      "Manage software licenses, usage, and compliance with ServiceNow’s SAM tools. SAM helps you control software costs, stay compliant with vendor agreements, and reduce the risk of license audits.",
  },
  {
    icon: "/icons/data.png",
    title: "Cloud Insights",
    description:
      "Gain visibility into cloud-based resources and optimize cloud spending. Cloud Insights within ITAM helps you track cloud usage, identify cost-saving opportunities, and prevent over-provisioning..",
  },
  {
    icon: "/icons/customization.png",
    title: "Contract Management",
    description:
      "Maintain and track contracts related to assets, such as maintenance agreements and vendor contracts. Contract Management enables you to monitor renewal dates, compliance terms, and spend against contracts to avoid unnecessary expenses..",
  },
  {
    icon: "/icons/resource.png",
    title: "Asset Request Management",
    description:
      "Simplify and streamline asset requests through a self-service portal. Asset Request Management ensures that users receive the right assets quickly while maintaining oversight of asset allocation.",
  },
  {
    icon: "/icons/training.png",
    title: "Configuration Management Database (CMDB) Integration",
    description:
      "Integrate ITAM with the CMDB to keep an accurate, real-time record of asset dependencies and relationships. CMDB integration ensures that all asset data is up-to-date and linked to relevant services, improving visibility and management..",
  },
  {
    icon: "/icons/improvement.png",
    title: "Depreciation and Financial Management",
    description:
      "Track the financial impact of asset usage and calculate depreciation accurately. ITAM's financial management features provide insights into the total cost of ownership and asset value over time.",
  },
  {
    icon: "/icons/risk.png",
    title: "Asset Disposal Management",
    description:
      "Automate end-of-life processes for assets, ensuring secure, compliant disposal. Asset Disposal Management helps mitigate security risks, maintain environmental compliance, and streamline the disposal process.",
  },
];
export const secopsOfferings: ConsiderationItem[] = [
  {
    icon: "/icons/stakeholder.png",
    title: "Security Incident Response (SIR)",
    description:
      "Streamline and automate the entire security incident lifecycle, from detection to resolution. SIR enables rapid investigation, prioritization, and response to incidents, improving overall efficiency.",
  },
  {
    icon: "/icons/strategy.png",
    title: "Vulnerability Response (VR)",
    description:
      "Identify, prioritize, and remediate vulnerabilities across your environment. Vulnerability Response integrates with IT asset management and threat intelligence sources to enable risk-based prioritization and timely remediation.",
  },
  {
    icon: "/icons/data.png",
    title: "Threat Intelligence",
    description:
      "Aggregate and analyze threat intelligence from multiple sources in one platform. ServiceNow Threat Intelligence enriches security incidents with relevant data, enabling teams to respond faster and more effectively.",
  },
  {
    icon: "/icons/customization.png",
    title: "Security Orchestration, Automation, and Response (SOAR)",
    description:
      "Leverage automation and orchestration capabilities to streamline incident response workflows. SOAR enables your team to automate common tasks, such as data enrichment, containment, and remediation, reducing the need for manual intervention.",
  },
  {
    icon: "/icons/resource.png",
    title: "Risk Management Integration",
    description:
      "Integrate SecOps with ServiceNow Risk Management to assess and manage security risks within a broader risk framework. This integration ensures that security initiatives are aligned with organizational risk management strategies.",
  },
  {
    icon: "/icons/training.png",
    title: "Configuration Management Database (CMDB) Integration",
    description:
      "Link SecOps with the CMDB to understand the relationships between security incidents and assets. CMDB integration provides context on affected assets and services, enabling faster impact analysis and response.",
  },
  {
    icon: "/icons/improvement.png",
    title: "Threat Hunting",
    description:
      "Enable proactive threat detection through custom threat hunting capabilities. ServiceNow’s threat hunting tools help identify potential threats before they evolve into critical incidents.",
  },
  {
    icon: "/icons/risk.png",
    title: "Performance Analytics for Security",
    description:
      "Track and measure the performance of security operations with real-time dashboards and reporting. Performance Analytics provides visibility into incident response times, vulnerability closure rates, and overall security posture.",
  },
];
export const csmConsiderations: ConsiderationItem[] = [
  {
    icon: "/icons/stakeholder.png",
    title: "Defining Objectives",
    description:
      "cTransform customer service and define success metrics with established goals.",
  },
  {
    icon: "/icons/strategy.png",
    title: "Understanding Customer Journeys",
    description:
      "Map customer interactions to find challenges and areas for improvement.",
  },
  {
    icon: "/icons/data.png",
    title: "Integration with Existing Systems",
    description:
      "Ensure seamless ServiceNow CSM integration with your tools.",
  },
  {
    icon: "/icons/customization.png",
    title: "Data Quality and Accuracy",
    description:
      "Assess data quality for efficient, individualized service delivery.",
  },
  {
    icon: "/icons/resource.png",
    title: "Scalability",
    description:
      "Identify future business needs and plan platform development accordingly.",
  },
  {
    icon: "/icons/training.png",
    title: "Employee Training",
    description:
      "Ensure employees are adequately trained to leverage the power of platform in serving customer.",
  },
  {
    icon: "/icons/improvement.png",
    title: "Compliance and Security",
    description:
      "Identify compliance requirements and ensure legal adherence during development.",
  },
  {
    icon: "/icons/risk.png",
    title: "Omnichannel Strategy",
    description:
      "Plan and create communication strategies to leverage the full power of omnichannel.",
  },
];
export const itomConsiderations: ConsiderationItem[] = [
  {
    icon: "/icons/stakeholder.png",
    title: "Alignment with ITIL Best Practices",
    description:
      "Ensure your IT operations align with ITIL (Information Technology Infrastructure Library) standards to achieve maximum benefits.",
  },
  {
    icon: "/icons/strategy.png",
    title: "Cloud Strategy",
    description:
      "Assess your organization’s cloud usage and ensure ServiceNow ITOM integrates effectively with public, private, or hybrid cloud environments.",
  },
  {
    icon: "/icons/data.png",
    title: "Scalability",
    description:
      "As your organization expands, ensure the ITOM solution can effectively scale to handle increased complexity and additional infrastructure components.",
  },
  {
    icon: "/icons/customization.png",
    title: "Integration with Existing Tools",
    description:
      "Identify third-party tools or legacy systems that are required to integrate with ServiceNow ITOM to ensure a seamless flow of data.",
  },
  {
    icon: "/icons/resource.png",
    title: "User Adoption and Training",
    description:
      "Equip your teams with the proper knowledge and training to effectively use ITOM features for faster troubleshooting and better decision-making.",
  },
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
    question: "Discovery and Requirement Assessment",
    answer:
      "We begin by evaluating your organization's current asset management practices, identifying gaps, and understanding your business needs. This assessment helps us design a solution that fully aligns ITAM's capabilities with your objectives.",
    imageSrc:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80", // business analysis
  },
  {
    id: "solution-design",
    question: "Solution Design and Customization",
    answer:
      "Based on our assessment, we design a ServiceNow ITAM solution that meets your specific needs. This includes configuring modules, defining workflows, and setting up integrations with your existing systems for a seamless asset management experience",
    imageSrc:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80", // blueprint / design
  },
  {
    id: "implementation-testing",
    question: "Implementation and Configuration",
    answer:
      "Our team manages the end-to-end deployment, including configuring key ITAM modules such as HAM, SAM, and Contract Management. We ensure the CMDB integration is optimized to maintain accurate asset relationships and dependencies.",
    imageSrc:
      "https://images.unsplash.com/photo-1581090700227-4c4ef6f7f0c2?auto=format&fit=crop&w=800&q=80", // server setup / configuration
  },
  {
    id: "user-training",
    question: "User Training and Adoption Support",
    answer:
      "We provide targeted training sessions to equip your team with the knowledge to manage ITAM effectively. Our training ensures that all stakeholders can leverage ITAM's functionalities, driving high adoption and smooth operations.",
    imageSrc:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80", // team training
  },
  {
    id: "go-live-support",
    question: "Go-Live and Support",
    answer:
      "Our go-live support ensures a smooth transition to ServiceNow ITAM, with continuous guidance as your team begins using the platform. We provide post-implementation support to address any challenges and help optimize performance.",
    imageSrc:
      "https://images.unsplash.com/photo-1581090700227-4c4ef6f7f0c2?auto=format&fit=crop&w=800&q=80", // IT support team
  },
  {
    id: "ongoing-optimization",
    question: "Ongoing Optimization and Partnership",
    answer:
      "As your organization evolves, our partnership extends to continuous improvement, offering support to scale, optimize, and adapt ServiceNow ITAM to meet new requirements, ensuring sustained value from your asset management investment.",
    imageSrc:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80", // business growth / partnership
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
   {
    id: "end-to-end",
    question: "End-to-End Portfolio Lifecycle Management",
    answer:
      "End-to-End Portfolio Lifecycle Management spans from idea generation to execution, focusing on project prioritization, resource optimization, and continuous portfolio reviews to ensure alignment with evolving business objectives and sustained value delivery.",
    imageSrc: "/images/collaboration_image.jpg",
  },
];

export const irmFaqs: FaqItem[] = [
  {
    id: "vision-goals",
    question: "Initial Assessment and Requirement Analysis",
    answer:
      "We begin by assessing your current risk and compliance landscape, identifying key challenges, and understanding your objectives. This enables us to design an IRM solution tailored to meet your organization’s specific needs.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "solution-design",
    question: "Solution Design and Configuration",
    answer:
      "Based on our analysis, we design a customized IRM solution. This includes configuring core modules like Risk Management, Compliance, and Vendor Risk Management, and defining workflows to streamline your organization’s risk and compliance practices.",
    imageSrc: "/images/collaboration_image.jpg",
  },
  {
    id: "agile-delivery",
    question: "Implementation and Integration",
    answer:
      "Our team oversees the complete implementation, ensuring seamless integration with your existing IT ecosystem. We set up key modules, connect with external regulatory sources, and ensure all risk data flows accurately for optimal performance.",
    imageSrc: "/images/success-stories6.jpg",
  },
  {
    id: "integrations",
    question: "Training and Knowledge Transfer",
    answer:
      "We conduct tailored training sessions to help your team effectively manage risks using ServiceNow IRM. Training covers platform features, best practices, and incident response, ensuring your team is well-prepared to leverage the platform.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "optimization",
    question: "Go-Live and Support",
    answer:
      "We provide full support during the go-live phase, ensuring that all modules function smoothly and users are confident in using the system. Our team remains on standby for troubleshooting and guidance, ensuring a successful transition.",
    imageSrc: "/images/collaboration_image.jpg",
  },
  {
    id: "long-term-partnership",
    question: "Ongoing Optimization and Strategic Partnership",
    answer:
      "As risk management needs evolve, we partner with your organization to optimize and scale ServiceNow IRM. Our continuous support ensures your IRM solution remains agile, effective, and aligned with regulatory changes.",
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
    question: "Discovery and Strategy",
    answer:
      "We begin by understanding your current IT environment, identifying pain points, and aligning ServiceNow ITOM features to your organization’s objectives.",
    imageSrc:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "solution-design",
    question: "Solution Design",
    answer:
      "We work with you to design a solution that integrates with existing systems, aligns with best practices, and prepares your organization for scalable success.",
    imageSrc:
      "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?auto=format&fit=crop&w=1200&q=80", // sticky-notes/UX planning
  },
  {
    id: "implementationtesting",
    question: "Implementation and Testing",
    answer:
      "Our team manages all implementation aspects, from configuring modules to setting up the CMDB and integrating necessary applications. We rigorously test each component to ensure reliability and readiness for launch.",
    imageSrc:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80", // coding/testing on monitors
  },
  {
    id: "ute",
    question: "User Training and Engagement",
    answer:
      "Our training ensures your team fully understands and benefits from the platform’s features, driving high adoption rates. We also provide role-based training sessions to empower your team.",
    imageSrc:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "gls&co",
    question: "Go-Live Support and Continuous Optimization",
    answer:
      "We support your team as they transition to the new platform with a smooth go-live process. Our post-implementation services include troubleshooting, guidance, and optimization recommendations.",
    imageSrc:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "LTP",
    question: "Long-Term Partnership",
    answer:
      "As business grows, so do IT needs. As a trusted partner, we are committed to help you adjust, scale, and optimize ServiceNow ITSM so it continues to deliver measurable business value.",
    imageSrc:
      "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=80",
  },
];

export const secopsfaqs: FaqItem[] = [
  {
    id: "assessment",
    question: "Assessment and Requirements Gathering",
    answer:
      "We begin by conducting a thorough assessment of your current security processes, identifying gaps and understanding your organization’s risk landscape. This assessment forms the foundation for configuring SecOps to meet your unique security needs.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "solution-design",
    question: "Solution Design and Customization",
    answer:
      "Based on our assessment, we design a ServiceNow SecOps solution tailored to your requirements. This includes configuring modules such as Security Incident Response, Vulnerability Response, and Threat Intelligence, and integrating with existing security tools for a cohesive security environment.",
    imageSrc: "/images/collaboration_image.jpg",
  },
  {
    id: "implementationtesting",
    question: "Implementation and Integration",
    answer:
      "Our team oversees the implementation process, including setting up SecOps modules, integrating with threat intelligence feeds, and connecting to the CMDB. We ensure that all components are tested and optimized for seamless performance.",
    imageSrc: "/images/success-stories6.jpg",
  },
  {
    id: "training",
    question: "User Training and Knowledge Transfer",
    answer:
      "To empower your team, we provide in-depth training on ServiceNow SecOps modules, incident response workflows, and best practices. Our training sessions are tailored to different roles, ensuring that security and IT teams are well-prepared to leverage SecOps effectively.",
    imageSrc: "/images/services-details.jpg",
  },
  {
    id: "go-live-support",
    question: "Go-Live and Ongoing Support",
    answer:
      "We support your team through the go-live process, providing guidance on initial SecOps use and troubleshooting. Our post-implementation support ensures a smooth transition and helps optimize your SecOps environment for ongoing success.",
    imageSrc: "/images/collaboration_image.jpg",
  },
  {
    id: "continuous-optimization",
    question: "Continuous Optimization and Partnership",
    answer:
      "As new security challenges emerge, we remain a strategic partner, offering continuous optimization services to adapt SecOps capabilities. Our partnership helps you stay ahead of threats and ensures that SecOps aligns with your evolving security requirements.",
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
  paragraph1:
    "ServiceNow Strategic Portfolio Management (SPM) transforms how organizations manage their project portfolios by providing comprehensive visibility, strategic alignment, and data-driven decision making capabilities.",
  paragraph2:
    "With SPM, you can optimize resource allocation, track portfolio performance in real-time, and ensure every project contributes to your strategic objectives. The platform enables seamless collaboration across teams while maintaining governance and compliance standards.",
  imageSrc:
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80", // strategy / planning meeting
};

export const hrsdPortfolio: PortfolioContentItem = {
  title: "Human Resources Service Delivery (HRSD)",
  paragraph1:
    "ServiceNow HRSD streamlines HR processes and employee experiences by automating workflows, centralizing services, and enabling faster case resolutions.",
  paragraph2:
    "Empower your workforce with self-service, AI-driven HR support, and consistent employee engagement while reducing manual HR workload.",
  imageSrc:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80", // HR / teamwork
};

export const itsmPortfolio: PortfolioContentItem = {
  title: "Unlock IT Service Excellence with ServiceNow ITSM",
  paragraph1:
    "With ServiceNow ITSM implementation, you’re not just adopting a service management tool but embracing a fully integrated approach to IT excellence. ServiceNow ITSM automation, visibility, and scalability capabilities empower organizations to reduce downtime, improve efficiency, and enhance customer satisfaction.",
  paragraph2:
    "Let us partner with you to unlock the full potential of ServiceNow ITSM and elevate your IT operations to a new standard of service excellence.",
  imageSrc:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80", // IT service desk
};

export const itomPortfolio: PortfolioContentItem = {
  title: "Unlock IT Operations Excellence with ServiceNow ITOM ",
  paragraph1:
    "ServiceNow ITOM delivers intelligent automation, real-time insights, and proactive management, enabling your IT operations to stay ahead of issues and deliver top-tier performance. By reducing downtime, increasing operational efficiency, and enhancing service delivery, ServiceNow ITOM helps transform your IT organization into a highly responsive, data-driven function that drives business success. Partner with us to unlock the full potential of ServiceNow ITOM and elevate your IT operations to new heights.",
  paragraph2: "",
  imageSrc:
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80", // servers / IT operations
};

export const wsdPortfolio: PortfolioContentItem = {
  title: "Workplace Service Delivery (WSD)",
  paragraph1:
    "ServiceNow WSD simplifies workplace operations by enabling employees to request workplace services, manage facilities, and improve workplace experiences.",
  paragraph2: "",
  imageSrc:
    "https://images.unsplash.com/photo-1581091870620-e97d7fa71a79?auto=format&fit=crop&w=1200&q=80", // office workplace / smart workplace
};

export const secopsPortfolio: PortfolioContentItem = {
  title: "Strengthen Your Security Posture with ServiceNow Security Operations",
  paragraph1:
    "ServiceNow SecOps empowers your organization with proactive threat detection, automated response, and end-to-end visibility across security and IT operations. By implementing SecOps, you enhance collaboration, improve response times, and reduce the impact of security incidents, protecting your business from potential threats. Let us partner with you to implement and optimize ServiceNow SecOps, transforming your approach to security operations and building a resilient, proactive defense strategy for your organization.",
  paragraph2: "",
  imageSrc:
    "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1200&q=80", // cybersecurity / security operations
};

export const fsmPortfolio: PortfolioContentItem = {
  title: "Field Service Management (FSM)",
  paragraph1:
    "ServiceNow FSM enables organizations to optimize field operations, assign tasks efficiently, and provide real-time visibility into field activities.",
  paragraph2:
    "Deliver exceptional service experiences by empowering field agents with mobile tools, scheduling automation, and predictive insights.",
  imageSrc:
    "https://images.unsplash.com/photo-1581090700227-4c4ef6f7f0c2?auto=format&fit=crop&w=1200&q=80", // field engineer on site
};

export const itamPortfolio: PortfolioContentItem = {
  title: "Maximize Asset Value with ServiceNow ITAM",
  paragraph1:
    "By implementing ServiceNow ITAM, your organization gains the visibility, control, and automation needed to manage assets more efficiently, reduce costs, and maintain compliance. With streamlined asset lifecycle management and real-time insights, ITAM empowers your team to make data-driven decisions, improve resource utilization, and align IT assets with business goals.",
  paragraph2: "",
  imageSrc:
    "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1200&q=80", // IT hardware assets (laptops, equipment)
};

export const irmPortfolio: PortfolioContentItem = {
  title: "Integrated Risk Management (IRM)",
  paragraph1:
    "ServiceNow IRM empowers organizations to identify, assess, and mitigate risks proactively while ensuring compliance with industry regulations.",
  paragraph2: "",
  imageSrc: "/testing.jpg", // risk management / compliance dashboard
};

export const csmPortfolio: PortfolioContentItem = {
  title: "Customer Service Management (CSM)",
  paragraph1:
    "ServiceNow CSM enhances customer satisfaction by delivering connected, proactive, and personalized service experiences across all channels.",
  paragraph2: "",
  imageSrc:
    "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80", // customer support team working
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
    id: "alignment",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755f4fbd2d7fbbbac3f_Frame%2032%20(38).svg",
    title: "Start Small, Then Scale",
    description:
      "Begin with core modules before expanding to advanced capabilities.",
  },
  {
    id: "agile",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755498f6c737cf53327_Frame%2032%20(39).svg",
    title: "Engage Stakeholders",
    description:
      "Establish regular communication with stakeholders throughout the lifecycle.",
  },
  {
    id: "ux",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68271705ca166033dc20d63f_Frame%2032%20(2).svg",
    title: "Focuson User Experience",
    description:
      "Prioritize usability and accessibility for end-users and IT teams for higher adoption.",
  },

  {
    id: "governance",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/682717050e18441750036e61_Frame%2032%20(3).svg",
    title: "Automate Repetitive Tasks",
    description:
      "Maximize efficiency with automated workflows for routine tasks.",
  },
  {
    id: "data-quality",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755617322f52fbe6ff6_Frame%2032%20(40).svg",
    title: "Prioritize Data Quality",
    description:
      "Regularly audit and update data in the CMDB to ensure consistency and data accuracy.",
  },
  {
    id: "risk",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755c3c225525665f4ac_Frame%2032%20(41).svg",
    title: "Adopt Agile Methods",
    description:
      "Use iterative agile approaches to develop and deploy for continuous improvements.",
  },

  {
    id: "performance",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a3755c3c225525665f4ac_Frame%2032%20(41).svg",
    title: "Emphasize Change Management",
    description: "Adopt robust change management for seamless implementation.",
  },
  {
    id: "collaboration",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Monitor and Optimize",
    description:
      "Leverage Performance Analytics to track KPIs andspot areas for improvements.",
  },
];

export const itomPractices: Practice[] = [
  {
    id: "alignment",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Start with Core Modules",
    description:
      "Start with Discovery, Event Management, and CMDB before expanding to Service Mapping and Cloud Management.",
  },
  {
    id: "agile",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ddcfdc7bcd0adc29638_Icon%20(6).svg",
    title: "Involve Stakeholders Early",
    description:
      "Engage with business leaders and key IT stakeholders to align IT operations goals with overall business objectives.",
  },
  {
    id: "financial",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ddc446e96396292bdb4_Frame%203465873%20(4).svg",
    title: "Automate Where Possible",
    description:
      "Leverage orchestration to automate repetitive processes, allowing IT teams to completely focus on higher-value activities.",
  },

  {
    id: "governance",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ddc25dbe443ab1cacf9_Frame%203465874%20(4).svg",
    title: "Monitor and Optimize Continuously",
    description:
      "Leverage ServiceNow’s Performance Analytics and reporting tomonitor IT operations and optimize continuously.",
  },
  {
    id: "eda",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ddca2e535d57f009037_Icon%20(7).svg",
    title: "Ensure Data Accuracy",
    description:
      "Maintain an accurate and up-to-date Configuration Management Database (CMDB) for better decision-making and service mapping.",
  },

  {
    id: "agilemethodology",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/68623ddcf2141a18f02e0491_Icon%20(8).svg",
    title: "Agile Methodology",
    description:
      "Adopt agile practices for ITOM deployments, enabling iterative improvements and rapid adjustments based on real-time feedback.",
  },
];
export const csmBestPractices: Practice[] = [
  {
    id: "alignment",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Portfolio Alignment with Strategic Goals",
    description:
      "Make sure that every project and program closely aligns with the organization's strategic vision, goals, and objectives to enhance overall business success and value.",
  },
  {
    id: "agile",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Agile Portfolio Management",
    description:
      "Implement flexible portfolio management processes that adapt to changing priorities, market conditions, and opportunities, ensuring alignment with organizational goals.",
  },
  {
    id: "financial",
    icon: "",
    title: "Enhanced Financial Management and Budgeting",
    description:
      "Establish thorough financial oversight procedures that encompass budgeting, forecasting, and cost tracking to manage portfolio finances effectively.",
  },

  {
    id: "governance",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Automation of Governance and Approval Workflows",
    description:
      "Automate approval and governance workflows to simplify decision‑making, reduce administrative burden, and maintain consistent, efficient portfolio management.",
  },
  {
    id: "change",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Change Management and Adoption Strategy",
    description:
      "Create a change plan that enables smooth transitions, addresses resistance, and promotes platform adoption across the organization.",
  },
  {
    id: "risk",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Risk Assessment and Mitigation Frameworks",
    description:
      "Establish proactive frameworks to identify, evaluate, and reduce risks at portfolio, program, and project levels to ensure successful outcomes.",
  },

  {
    id: "performance",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Performance Analytics and Reporting",
    description:
      "Create proactive frameworks that actively identify, evaluate, and reduce risks at the portfolio, program, and project levels to ensure successful results.",
  },
  {
    id: "collaboration",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Cross-Functional Collaboration and Communication",
    description:
      "Foster collaboration among IT, finance, and business units to guarantee smooth portfolio management, effective execution, and alignment with business priorities.",
  },
];
export const hrsdBestPractices: Practice[] = [
  {
    id: "alignment",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Portfolio Alignment with Strategic Goals",
    description:
      "Make sure that every project and program closely aligns with the organization's strategic vision, goals, and objectives to enhance overall business success and value.",
  },
  {
    id: "agile",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Agile Portfolio Management",
    description:
      "Implement flexible portfolio management processes that adapt to changing priorities, market conditions, and opportunities, ensuring alignment with organizational goals.",
  },
  {
    id: "financial",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Enhanced Financial Management and Budgeting",
    description:
      "Establish thorough financial oversight procedures that encompass budgeting, forecasting, and cost tracking to manage portfolio finances effectively.",
  },

  {
    id: "governance",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Automation of Governance and Approval Workflows",
    description:
      "Automate approval and governance workflows to simplify decision‑making, reduce administrative burden, and maintain consistent, efficient portfolio management.",
  },
  {
    id: "change",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Change Management and Adoption Strategy",
    description:
      "Create a change plan that enables smooth transitions, addresses resistance, and promotes platform adoption across the organization.",
  },
  {
    id: "risk",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Risk Assessment and Mitigation Frameworks",
    description:
      "Establish proactive frameworks to identify, evaluate, and reduce risks at portfolio, program, and project levels to ensure successful outcomes.",
  },

  {
    id: "performance",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Performance Analytics and Reporting",
    description:
      "Create proactive frameworks that actively identify, evaluate, and reduce risks at the portfolio, program, and project levels to ensure successful results.",
  },
  {
    id: "collaboration",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Cross-Functional Collaboration and Communication",
    description:
      "Foster collaboration among IT, finance, and business units to guarantee smooth portfolio management, effective execution, and alignment with business priorities.",
  },
];

// SPM Best Practices
export const spmPractices: Practice[] = [
  {
    id: "alignment",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Portfolio Alignment with Strategic Goals",
    description:
      "Make sure that every project and program closely aligns with the organization's strategic vision, goals, and objectives to enhance overall business success and value.",
  },
  {
    id: "agile",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Agile Portfolio Management",
    description:
      "Implement flexible portfolio management processes that adapt to changing priorities, market conditions, and opportunities, ensuring alignment with organizational goals.",
  },
  {
    id: "financial",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Enhanced Financial Management and Budgeting",
    description:
      "Establish thorough financial oversight procedures that encompass budgeting, forecasting, and cost tracking to manage portfolio finances effectively.",
  },
  {
    id: "governance",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Automation of Governance and Approval Workflows",
    description:
      "Automate approval and governance workflows to simplify decision‑making, reduce administrative burden, and maintain consistent, efficient portfolio management.",
  },
  {
    id: "change",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Change Management and Adoption Strategy",
    description:
      "Create a change plan that enables smooth transitions, addresses resistance, and promotes platform adoption across the organization.",
  },
  {
    id: "risk",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a375573a97eff846ebdc2_Frame%2032%20(42).svg",
    title: "Risk Assessment and Mitigation Frameworks",
    description:
      "Establish proactive frameworks to identify, evaluate, and reduce risks at portfolio, program, and project levels to ensure successful outcomes.",
  },
  {
    id: "risk",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a4cf18f27ac039c64d84c_Frame%2032%20(49).svg",
    title: "Cross-Functional Collaboration and Communication",
    description:
      "Foster collaboration among IT, finance, and business units to guarantee smooth portfolio management, effective execution, and alignment with business priorities.",
  },{
    id: "risk",
    icon: "https://cdn.prod.website-files.com/66a7227210b1f117f0821fc1/685a4cf1eda85a5c4e515474_Frame%2032%20(50).svg",
    title: "Performance Analytics and Reporting",
    description:
      "Establish proactive frameworks to identify, evaluate, and reduce risks at portfolio, program, and project levels to ensure successful outcomes.",
  },
];
