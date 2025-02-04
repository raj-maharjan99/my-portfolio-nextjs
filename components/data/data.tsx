import { BsTwitterX } from "react-icons/bs";
import React, { ReactNode } from "react";
import {
  FaBookOpen,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
export const skills = [
  { name: "React", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "TypeScript", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Tailwind CSS", level: 95 },
  { name: "MySql", level: 30 },
  { name: "MongoDB", level: 70 },
  { name: "AWS", level: 30 },
];

export const details = [
  "Based in  Texas, Houston",
  "Bachelor Degree in management  from Balkumari College, Nepal",
  "Good in English and little bit in Spanish",
  "Fluent in Nepali, Hindi, Urdu and Korean",
  "Love for trekking and  photography",
  "Passionate about cooking",
  "Enjoys working with repairing tools",
];

export const aboutMe =
  " Hello! I'm Raj Maharjan, an aspiring web developer passionate about creating engaging and user-friendly digital experiences. As a new comer to the field, I'm excited to apply my fresh perspective and eagerness to learn in developing beautiful and functional websites. I'm constantly exploring new technologies and best practices to growmy skills and deliver innovative solutions.";

// side bar
export const menuItems = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/about", label: "About", icon: "👤" },
  { href: "/resume", label: "Resume", icon: "📄" },
  { href: "/portfolio", label: "Portfolio", icon: "💼" },
  { href: "/services", label: "Services", icon: "🛠" },
];

//
interface Icon {
  href: string;
  icon: ReactNode;
  className: string;
}
export const iconBar: Icon[] = [
  {
    href: "/twiter",
    icon: <BsTwitterX size={20} />,
    className: "hover:text-gray-400",
  },
  {
    href: "/",
    icon: <FaFacebook size={20} />,
    className: "hover:text-gray-400",
  },
  {
    href: "/",
    icon: <FaInstagram size={20} />,
    className: "hover:text-gray-400",
  },
  {
    href: "/",
    icon: <FaBookOpen size={20} />,
    className: "hover:text-gray-400",
  },
  {
    href: "/",
    icon: <FaLinkedin size={20} />,
    className: "hover:text-gray-400",
  },
];
