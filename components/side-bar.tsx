"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

import { iconBar, menuItems } from "./data/data";

interface SidebarProps {
  onLinkClick?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onLinkClick }) => {
  return (
    <aside className=" w-full  h-full  bg-[#08081e]  text-white p-6 flex flex-col">
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <Image
            src="/profile_pic.jpg"
            alt="Profile"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold">Raj Maharjan</h2>
      </div>

      <div className="flex justify-center gap-3 mb-8">
        {iconBar.map((icon, index) => (
          <Link key={index} href={icon.href} className={icon.className}>
            {icon.icon}
          </Link>
        ))}
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                onClick={onLinkClick}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-800"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
          <li>
            <button className="flex items-center gap-3 px-4 py-2 rounded hover:bg-gray-800 w-full">
              <span>📑</span>
              <span>Dropdown</span>
              <ChevronDown size={16} className="ml-auto" />
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
