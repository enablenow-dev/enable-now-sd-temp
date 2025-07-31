import Image from "next/image";
import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";

const ServicesCard = () => {
  return (
    <>
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="max-w-[800px] mx-auto text-center mb-[30px] md:mb-[60px]">
          <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
            EnableNow's Solutions for a Complex Landscape
          </h2>
        </div>

        {/* Services Cards */}
        <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
          {/* Card 1 */}
          <div
            className="group bg-white rounded-[20px] py-[50px] px-[40px] hover:bg-[#007BA8] hover:text-white transition duration-400 ease-in-out shadow-md border border-[#FAF4F4]"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center mb-[15px]">
              <Image
                src={"/images/home/software-development.svg"}
                alt={"image"}
                width={"48"}
                height={"48"}
                className="inline-block"
              />
            </div>

            <h3 className="text-[20px] md:text-[22px] font-semibold mb-[10px] group-hover:text-white text-black">
              Software Development Services
            </h3>
            <p className="text-black group-hover:text-white">
              Work closely with clients to understand their business goals,
              target audience, and budget. Develop a comprehensive
            </p>

            <Link
              href="/services/software-development-services"
              className="text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-400 ease-in-out text-black group-hover:text-white"
            >
              read more{" "}
              <ArrowRight2
                className="inline-block relative -top-[2px]"
                size={20}
                color="currentColor"
              />
            </Link>
          </div>

          {/* Card 2 */}
          <div
            className="group bg-white rounded-[20px] py-[50px] px-[40px] hover:bg-[#007BA8] hover:text-white transition duration-400 ease-in-out shadow-md border border-[#FAF4F4]"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center mb-[15px]">
              <Image
                src={"/images/home/proposal-development.svg"}
                alt={"image"}
                width={"48"}
                height={"48"}
                className="inline-block"
              />
            </div>

            <h3 className="text-[20px] md:text-[22px] font-semibold mb-[10px] group-hover:text-white text-black">
              Proposal Development & Delivery Services
            </h3>
            <p className="text-black group-hover:text-white">
              Work closely with clients to understand their business goals,
              target audience, and budget. Develop a comprehensive
            </p>

            <Link
              href="/services/proposal-development-and-delivery-services"
              className="text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-400 ease-in-out text-black group-hover:text-white"
            >
              read more{" "}
              <ArrowRight2
                className="inline-block relative -top-[2px]"
                size={20}
                color="currentColor"
              />
            </Link>
          </div>

          {/* Card 3 */}
          <div
            className="group bg-white rounded-[20px] py-[50px] px-[40px] hover:bg-[#007BA8] hover:text-white transition duration-400 ease-in-out shadow-md border border-[#FAF4F4]"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center mb-[15px]">
              <Image
                src={"/images/home/strategic-it-and-security.svg"}
                alt={"image"}
                width={"48"}
                height={"48"}
                className="inline-block"
              />
            </div>

            <h3 className="text-[20px] md:text-[22px] font-semibold mb-[10px] group-hover:text-white text-black">
              Strategic IT & Security Consulting
            </h3>
            <p className="text-black group-hover:text-white">
              Work closely with clients to understand their business goals,
              target audience, and budget. Develop a comprehensive
            </p>

            <Link
              href="/services/strategic-it-and-security-consulting"
              className="text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-400 ease-in-out text-black group-hover:text-white"
            >
              read more{" "}
              <ArrowRight2
                className="inline-block relative -top-[2px]"
                size={20}
                color="currentColor"
              />
            </Link>
          </div>

          {/* Card 4 */}
          <div
            className="group bg-white rounded-[20px] py-[50px] px-[40px] hover:bg-[#007BA8] hover:text-white transition duration-400 ease-in-out shadow-md border border-[#FAF4F4]"
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <div className="bg-[#F2F2F8] w-[70px] h-[70px] leading-[70px] rounded-full text-center mb-[15px]">
              <Image
                src={"/images/home/recruitment-and-staffing.svg"}
                alt={"image"}
                width={"48"}
                height={"48"}
                className="inline-block"
              />
            </div>
            <h3 className="text-[20px] md:text-[22px] xl:text-[21px] 2xl:text-[22px] font-semibold mb-[10px] group-hover:text-white text-black">
              Recruitment & Staffing Solutions
            </h3>
            <p className="text-black group-hover:text-white">
              Work closely with clients to understand their business goals,
              target audience, and budget. Develop a comprehensive
            </p>

            <Link
              href="/services/recruitment-and-staffing-solutions"
              className="text-[14px] mt-[25px] font-medium inline-block uppercase transition duration-400 ease-in-out text-black group-hover:text-white"
            >
              read more{" "}
              <ArrowRight2
                className="inline-block relative -top-[2px]"
                size={20}
                color="currentColor"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
