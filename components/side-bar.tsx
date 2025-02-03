import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { FaBookOpen, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const menuItems = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/about", label: "About", icon: "👤" },
  { href: "/resume", label: "Resume", icon: "📄" },
  { href: "/portfolio", label: "Portfolio", icon: "💼" },
  { href: "/services", label: "Services", icon: "🛠" },
];

export default function Sidebar() {
  return (
    <aside className=" w-full  h-full  bg-[#08081e]  text-white p-6 flex flex-col">
      <div className="flex flex-col items-center mb-8">
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <Image
            src="/profile-pic.png"
            alt="Profile"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
        <h2 className="text-xl font-semibold">Raj Maharjan</h2>
      </div>

      <div className="flex justify-center gap-3 mb-8">
        <Link href="#" className="hover:text-gray-400">
          <BsTwitterX size={20} />
        </Link>
        <Link href="#" className="hover:text-gray-400">
          <FaFacebook size={20} />
        </Link>
        <Link href="#" className="hover:text-gray-400">
          <FaInstagram size={20} />
        </Link>
        <Link href="#" className="hover:text-gray-400">
          <FaBookOpen size={20} />
        </Link>
        <Link href="#" className="hover:text-gray-400">
          <FaLinkedin size={20} />
        </Link>
      </div>

      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
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
}
