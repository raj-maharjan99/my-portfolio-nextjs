"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { FaHome, FaUser, FaCog, FaEnvelope } from "react-icons/fa";
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

// const CustomNavLink: React.FC<NavLinkProps> = ({ href, children }) => {
//   const pathName = usePathname();
//   const isActive = pathName === href;

//   return (
//     <Link
//       href={href}
//       className={`font-bold transition-colors duration-200 ${
//         isActive ? "text-blue-500" : "text-gray-500 hover:text-blue-500"
//       }`}
//     >
//       {children}
//     </Link>
//   );
// };

// interface SubItem {
//   label: string;
//   href?: string;
// }

interface NavItem {
  label: string;
  href?: string; // Optional for dropdowns
  subItems?: NavItem[]; // Sub-items for dropdowns
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },

  { label: "Projects", href: "/projects" },
  {
    label: "About",
    subItems: [
      { label: "About Me", href: "/contact" },
      { label: "Skills", href: "https://github.com" },
      { label: "Resume", href: "/about/resume" },
    ],
  },
  {
    label: "Contact",
    subItems: [
      { label: "Contact", href: "/contact" },
      { label: "GitHub", href: "https://github.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
    ],
  },
];

export default function Navbar() {
  return (
    <div className="flex justify-center">
      <div className="w-full grid grid-cols-12 mx-auto max-w-[1280px] justify-between px-2 py-4">
        <div className="logo col-span-4 text-2xl font-bold text-blue-500">
          RAJ
        </div>
        <nav className=" hidden sm:flex  justify-end   gap-10 items-center col-span-8  ">
          {navItems.map((item, index) => (
            <NavigationMenu key={index} className=" list-none    ">
              {/* {item.href ? (
                <NavigationMenuLink
                  href={item.href}
                  className="font-bold text-gray-500 hover:text-blue-500 transition-colors duration-200"
                >
                  {item.label}
                </NavigationMenuLink>
              ) : (
                // Dropdown */}

              <NavigationMenuItem>
                {item.href ? (
                  <NavigationMenuLink
                    href={item.href}
                    className="font-bold text-gray-500 hover:text-blue-500 transition-colors duration-200"
                  >
                    {item.label}
                  </NavigationMenuLink>
                ) : (
                  <>
                    {" "}
                    <NavigationMenuTrigger className="font-bold text-gray-500 text-md hover:text-blue-500 transition-colors duration-200">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col bg-gradient-to-b from-gray-600 to-gray-800 text-white shadow-xl rounded-xl p-5 w-72 border border-gray-700 space-y-2">
                      {item?.subItems?.map((subItem, subIndex) => (
                        <NavigationMenuLink
                          key={subIndex}
                          href={subItem.href}
                          className="flex items-center px-5 py-3 w-full rounded-lg hover:bg-gray-700 hover:text-blue-400 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                        >
                          {/* Add an icon based on the subItem type or label */}

                          {subItem.label}
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>{" "}
                  </>
                )}
              </NavigationMenuItem>
              {/* )} */}
            </NavigationMenu>
          ))}
        </nav>
      </div>
    </div>
  );
}
