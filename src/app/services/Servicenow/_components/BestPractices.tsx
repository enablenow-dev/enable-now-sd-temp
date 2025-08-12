import React from 'react';
import { BriefcaseBusiness, ClipboardList, ReceiptText, LucideIcon, Workflow, RefreshCw, ShieldAlert } from 'lucide-react';

interface Practice {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const practices: Practice[] = [
  {
    id: 'alignment',
    icon: BriefcaseBusiness,
    title: 'Portfolio Alignment with Strategic Goals',
    description:
      "Make sure that every project and program closely aligns with the organization's strategic vision, goals, and objectives to enhance overall business success and value.",
  },
  {
    id: 'agile',
    icon: ClipboardList,
    title: 'Agile Portfolio Management',
    description:
      'Implement flexible portfolio management processes that adapt to changing priorities, market conditions, and opportunities, ensuring alignment with organizational goals.',
  },
  {
    id: 'financial',
    icon: ReceiptText,
    title: 'Enhanced Financial Management and Budgeting',
    description:
      'Establish thorough financial oversight procedures that encompass budgeting, forecasting, and cost tracking to manage portfolio finances effectively.',
  },
  
  {
    id: 'governance',
    icon: Workflow,
    title: 'Automation of Governance and Approval Workflows',
    description:
      'Automate approval and governance workflows to simplify decision‑making, reduce administrative burden, and maintain consistent, efficient portfolio management.',
  },
  {
    id: 'change',
    icon: RefreshCw,
    title: 'Change Management and Adoption Strategy',
    description:
      'Create a change plan that enables smooth transitions, addresses resistance, and promotes platform adoption across the organization.',
  },
  {
    id: 'risk',
    icon: ShieldAlert,
    title: 'Risk Assessment and Mitigation Frameworks',
    description:
      'Establish proactive frameworks to identify, evaluate, and reduce risks at portfolio, program, and project levels to ensure successful outcomes.',
  },
 
  {
    id: 'performance',
    icon: ShieldAlert,
    title: 'Performance Analytics and Reporting',
    description:
      'Create proactive frameworks that actively identify, evaluate, and reduce risks at the portfolio, program, and project levels to ensure successful results.',
  },
  {
    id: 'collaboration',
    icon: ShieldAlert,
    title: 'Cross-Functional Collaboration and Communication',
    description:
      'Foster collaboration among IT, finance, and business units to guarantee smooth portfolio management, effective execution, and alignment with business priorities.',
  },
  {
    id: 'governance',
    icon: Workflow,
    title: 'Automation of Governance and Approval Workflows',
    description:
      'Automate approval and governance workflows to simplify decision‑making, reduce administrative burden, and maintain consistent, efficient portfolio management.',
  },
];

const BestPractices: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-gray-900 mb-4">
            Best Practices for SPM Implementation in ServiceNow
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-figtree max-w-4xl mx-auto">
            To successfully implement ServiceNow Strategic Portfolio Management (SPM), consider these best practices
          </p>
        </div>

        {/* Three items per row on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {practices.map(({ id, icon: Icon, title, description }) => (
            <div key={id} className="mx-auto w-full max-w-[360px] min-h-[420px]">
              <div className="h-full flex flex-col">
                <div className="mb-6">
                  <Icon className="w-14 h-14 text-[#007BA8]" strokeWidth={1.6} />
                </div>
                <h3 className="text-2xl font-semibold font-outfit text-gray-900 mb-4 leading-snug">
                  {title}
                </h3>
                <p className="text-gray-600 text-lg leading-8 font-figtree">
                  {description}
                </p>
              </div>
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
};

export default BestPractices;