"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "/public/images/LOGO (CC) SVG.svg";

const NavbarStyleTwo: React.FC = () => {
  const currentRoute = usePathname();
  const isSolutionsPage = currentRoute?.startsWith("/services/");
  const [isActive, setActive] = useState(false);
  const [isServiceNowOpen, setServiceNowOpen] = useState(false);

  const dropdownRef = useRef<HTMLUListElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ServiceNow items with display names and routes
  const serviceNowItems = [
    {
      name: "IT Service Management",
      route: "/services/Servicenow/itsm" // or whatever your actual route is
    },
    {
      name: "IT Asset Management",
      route: "/services/Servicenow/itam"
    },
    {
      name: "IT Operations Management",
      route: "/services/Servicenow/itom"
    },
    {
      name: "Integrated Risk Management",
      route: "/services/Servicenow/irm"
    },
    {
      name: "Security Operations Management",
      route: "/services/Servicenow/secops"
    },
    {
      name: "Strategic Portfolio Management",
      route: "/services/Servicenow/spm"
    },
    {
      name: "Customer Service Management",
      route: "/services/Servicenow/csm"
    },
    {
      name: "Human Resources Management",
      route: "/services/Servicenow/hrsd"
    },
    {
      name: "Field Service Management",
      route: "/services/Servicenow/fsm"
    },
    {
      name: "Workplace Service Delivery",
      route: "/services/Servicenow/wsd"
    }
  ];

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
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleSearchModal = () => setActive(!isActive);

  const handleServiceNowEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setServiceNowOpen(true);
  };

  const handleServiceNowLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServiceNowOpen(false);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      id="navbar"
      className="navbar-area bg-transparent relative z-[2] py-[20px] lg:py-[25px] xl:py-0"
    >
      <div className="container mx-auto">
        <nav className={`navbar relative flex flex-wrap ${isActive ? "active" : ""}`}>
          {/* Logo */}
          <div className="self-center">
            <div className="w-36 h-20">
              <Link href="/">
                <Image src={logo} className="inline" alt="logo" />
              </Link>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            className="navbar-toggler absolute ml-auto right-0 top-[4px] xl:hidden"
            type="button"
            onClick={handleToggleSearchModal}
          >
            <span className="burger-menu text-black cursor-pointer leading-none text-[30px]">
              <i className="bx bx-menu"></i>
            </span>
          </button>

          <div className="navbar-collapse flex self-center grow basis-auto">
            <ul className="navbar-nav self-center flex-row ml-auto xl:flex">
              {/* Home */}
              <li className="xl:mx-[15px] py-[10px] xl:py-[35px] relative group">
                <Link
                  href="/"
                  className={`text-black uppercase text-[16px] font-medium hover:text-[#007ba8] ${
                    currentRoute === "/" ? "text-[#007ba8]" : ""
                  }`}
                >
                  Home
                </Link>
              </li>

              {/* Solutions */}
              <li className="xl:mx-[15px] py-[10px] xl:py-[35px] relative group">
                <Link
                  href="#"
                  className={`text-black uppercase text-[16px] font-medium hover:text-[#007ba8] ${
                    isSolutionsPage ? "text-[#007ba8]" : ""
                  }`}
                  onClick={(e) => e.preventDefault()}
                >
                  Solutions
                </Link>

                <ul className="absolute bg-white border left-0 w-max top-[100%] shadow-dropdown py-[15px] opacity-0 invisible transition-opacity duration-200 group-hover:opacity-100 group-hover:visible">
                  {/* Menu items */}
                  <li className="py-[7px] px-[22px]">
                    <Link
                      href="/services/software-development-services"
                      className={`block font-medium text-[17px] hover:text-[#007ba8] ${
                        currentRoute === "/services/software-development-services"
                          ? "text-[#007ba8]"
                          : "text-black"
                      }`}
                    >
                      Software Development Services
                    </Link>
                  </li>

                  <li className="py-[7px] px-[22px]">
                    <Link
                      href="/services/strategic-it-and-security-consulting"
                      className={`block font-medium text-[17px] hover:text-[#007ba8] ${
                        currentRoute === "/services/strategic-it-and-security-consulting"
                          ? "text-[#007ba8]"
                          : "text-black"
                      }`}
                    >
                      Strategic IT & Security Consulting
                    </Link>
                  </li>

                  {/* Service Now */}
                  <li
                    className="py-[7px] px-[22px] relative"
                    onMouseEnter={handleServiceNowEnter}
                    onMouseLeave={handleServiceNowLeave}
                    style={{ paddingBottom: "12px" }}
                  >
                    <Link
                      href="/services/Servicenow"
                      className={`block font-medium text-[17px] hover:text-[#007ba8] ${
                        currentRoute === "/services/ServiceNow"
                          ? "text-[#007ba8]"
                          : "text-black"
                      }`}
                     
                    >
                      Service Now
                    </Link>

                    {/* Nested Dropdown - Updated mapping */}
                    <ul
                      ref={dropdownRef}
                      className={`absolute bg-white border shadow-dropdown py-[15px] w-[600px] max-w-[95vw] grid grid-cols-3 gap-x-6 transition-opacity duration-300 ${
                        isServiceNowOpen ? "opacity-100 visible" : "opacity-0 invisible"
                      }`}
                      style={{
                        top: "calc(100% - 5px)",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: 1000,
                      }}
                      onMouseEnter={handleServiceNowEnter}
                      onMouseLeave={handleServiceNowLeave}
                    >
                      {serviceNowItems.map((item, index) => (
                        <li key={index} className="py-[7px] px-[20px]">
                          <Link
                            href={item.route}
                            className={`block text-[16px] hover:text-[#007ba8] ${
                              currentRoute === item.route ? "text-[#007ba8]" : "text-black"
                            }`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </li>

              {/* About */}
              <li className="xl:mx-[15px] py-[10px] xl:py-[35px] relative group">
                <Link
                  href="/about-us/"
                  className={`uppercase text-[16px] font-medium hover:text-[#007ba8] ${
                    currentRoute === "/about-us/" ? "text-[#007ba8]" : "text-black"
                  }`}
                >
                  who we are
                </Link>
              </li>

              {/* Contact */}
              <li className="xl:mx-[15px] py-[10px] xl:py-[35px] relative group">
                <Link
                  href="/contact-us/"
                  className={`uppercase text-[16px] font-medium hover:text-[#007ba8] ${
                    currentRoute === "/contact-us/" ? "text-[#007ba8]" : "text-black"
                  }`}
                >
                  Contact
                </Link>
              </li>

              {/* Resources */}
              <li className="xl:mx-[15px] py-[10px] xl:py-[35px] relative group">
                <Link
                  href="/announcements/"
                  className={`uppercase text-[16px] font-medium hover:text-[#007ba8] ${
                    currentRoute === "/announcements/" ? "text-[#007ba8]" : "text-[#007ba8]"
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
  );
};

export default NavbarStyleTwo;