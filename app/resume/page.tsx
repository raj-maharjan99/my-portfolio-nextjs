import type { FC } from "react";
import { Mail, Phone } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Resume: FC = () => {
  return (
    <div className="bg-white   shadow-lg rounded-lg overflow-hidden">
      <header className="bg-gray-800 text-white  p-6">
        <h1 className="text-3xl mt-10  text-center font-bold mb-2">
          RAJ KUMAR MAHARJAN
        </h1>
        <div className="flex flex-wrap gap-4">
          <a href="tel:+12817771295" className="flex items-center gap-1">
            <Phone size={16} />
            +1 (281) 777-1295
          </a>
          <a
            href="mailto:rajmaharjan0220@gmail.com"
            className="flex items-center gap-1"
          >
            <Mail size={16} />
            rajmaharjan0220@gmail.com
          </a>
          <a href="#" className="flex items-center gap-1">
            <FaLinkedin size={16} />
            LinkedIn
          </a>
          <a href="#" className="flex items-center gap-1">
            <FaGithub size={16} />
            GitHub
          </a>
        </div>
      </header>

      <div className="p-4 sm:p-8 ">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">EDUCATION</h2>
          <div>
            <h3 className="font-semibold">Balkumari College</h3>
            <p>B.S in accounting and management</p>
            <p>December 2011</p>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">EXPERIENCE</h2>
          <div>
            <h3 className="font-semibold">Heartsun Technology | Nepal</h3>
            <p className="italic">Web Developer (HTML, CSS, JavaScript)</p>
            <p>August 2018 - October 2021</p>
            <ul className="list-disc pl-5 mt-2">
              <li>Developed responsive and interactive websites</li>
              <li>Optimized website performance, reducing load times by 30%</li>
              <li>Designed intuitive navigation and UI components</li>
              <li>
                Ensured cross-browser compatibility and mobile responsiveness
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">TECHNICAL SKILLS</h2>
          <ul className="list-disc pl-5">
            <li>
              <span className="font-semibold">Frontend:</span> HTML, CSS,
              JavaScript, React.js, Next.js
            </li>
            <li>
              <span className="font-semibold">Backend:</span> Node.js, MongoDB
            </li>
            <li>
              <span className="font-semibold">Tools:</span> Git, GitHub Desktop,
              VS Code, Adobe Photoshop
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">
            CERTIFICATIONS & BOOTCAMPS
          </h2>
          <ul className="list-disc pl-5">
            <li>Broadway MERN Stack Web Development Training Program (2024)</li>
            <li>Takeo Front-End Bootcamp (2023)</li>
            <li>Takeo Full Stack Bootcamp (2024)</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
