"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import logo from "/public/images/LOGO (CC) SVG.svg";

const NavbarStyleTwo: React.FC = () => {
  const currentRoute = usePathname();

  // Check if current route is a solutions page
  const isSolutionsPage = currentRoute?.startsWith("/services/");

  // Sticky Navbar
  useEffect(() => {
    let elementId = document.getElementById("navbar");
    const handleScroll = () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("isSticky", "shadow-sm");
      } else {
        elementId?.classList.remove("isSticky", "shadow-sm");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle active class
  const [isActive, setActive] = useState<boolean>(false);
  const handleToggleSearchModal = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div
        id="navbar"
        className="navbar-area bg-transparent relative z-[2] py-[20px] lg:py-[25px] xl:py-0"
      >
        <div className="container mx-auto">
          <nav
            className={`navbar relative flex flex-wrap ${isActive ? "active" : ""
              }`}
          >
            <div className="self-center">
              <div className="w-36 h-20">
                <Link href="/">
                  <Image src={logo} className="inline" alt="logo" />
                </Link>
              </div>
            </div>

            {/* Toggle button */}
            <button
              className="navbar-toggler absolute ml-auto right-0 rtl:left-0 rtl:right-auto top-[4px] xl:hidden"
              type="button"
              onClick={handleToggleSearchModal}
            >
              <span className="burger-menu text-black cursor-pointer leading-none text-[30px]">
                <i className="bx bx-menu"></i>
              </span>
            </button>

            <div className="navbar-collapse flex self-center grow basis-auto">
              <ul className="navbar-nav self-center flex-row ml-auto rtl:ml-0 rtl:mr-auto xl:flex">
                <li className="xl:mx-[15px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group">
                  <Link
                    href="/"
                    className={`text-black uppercase text-[16px] font-medium transition-all hover:text-[#007ba8] ${currentRoute === "/" ? "text-[#007ba8]" : ""
                      }`}
                  >
                    Home
                  </Link>
                </li>

                <li className="xl:mx-[15px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group">
                  <Link
                    href="#"
                    className={`text-black uppercase text-[16px] font-medium transition-all hover:text-[#007ba8] dropdown-toggle ${isSolutionsPage ? "text-[#007ba8]" : ""
                      }`}
                    onClick={(e) => e.preventDefault()}
                  >
                    Solutions
                  </Link>

                  <ul className="absolute bg-white border left-0 rtl:right-0 w-max top-[100%] shadow-dropdown py-[15px] opacity-0 invisible transition-all group-hover:opacity-100 group-hover:visible">
                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/services/software-development-services"
                        className={`block font-medium text-[17px] transition-all hover:text-[#007ba8] ${currentRoute === "/services/software-development-services"
                          ? "text-[#007ba8]"
                          : "text-black"
                          }`}
                      >
                        Software Development Services
                      </Link>
                    </li>
                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/services/proposal-development-and-delivery-services"
                        className={`block font-medium text-[17px] transition-all hover:text-[#007ba8] ${currentRoute === "/services/proposal-development-and-delivery-services"
                          ? "text-[#007ba8]"
                          : "text-black"
                          }`}
                      >
                        Proposal Development & Management Services
                      </Link>
                    </li>
                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/services/strategic-it-and-security-consulting"
                        className={`block font-medium text-[17px] transition-all hover:text-[#007ba8] ${currentRoute === "/services/strategic-it-and-security-consulting"
                          ? "text-[#007ba8]"
                          : "text-black"
                          }`}
                      >
                        Strategic IT & Security Consulting
                      </Link>
                    </li>
                    <li className="py-[7px] px-[22px]">
                      <Link
                        href="/services/recruitment-and-staffing-solutions"
                        className={`block font-medium text-[17px] transition-all hover:text-[#007ba8] ${currentRoute === "/services/recruitment-and-staffing-solutions"
                          ? "text-[#007ba8]"
                          : "text-black"
                          }`}
                      >
                        Recruitment & Staffing Solutions
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="xl:mx-[15px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group">
                  <Link
                    href="/about-us/"
                    className={`uppercase text-[16px] font-medium transition-all hover:text-[#007ba8] ${currentRoute === "/about-us/"
                      ? "text-[#007ba8]"
                      : "text-black"
                      }`}
                  >
                    who we are
                  </Link>
                </li>

                <li className="xl:mx-[15px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group">
                  <Link
                    href="/contact-us/"
                    className={`uppercase text-[16px] font-medium transition-all hover:text-[#007ba8] ${currentRoute === "/contact-us/"
                      ? "text-[#007ba8]"
                      : "text-black"
                      }`}
                  >
                    Contact
                  </Link>
                </li>

                <li className="xl:mx-[15px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[35px] 2xl:py-[41.5px] relative group">
                  <Link
                    href="/announcements/"
                    className={`uppercase text-[16px] font-medium transition-all hover:text-[#007ba8] ${currentRoute === "/announcements/"
                      ? "text-[#007ba8]"
                      : "text-black"
                      }`}
                  >
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavbarStyleTwo;
