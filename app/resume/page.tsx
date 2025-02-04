import type { FC } from "react";
import { Mail, Phone } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Resume: FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 mt-4 bg-white shadow-lg">
      <header className="mb-8">
        <h1 className="text-xl sm:text-3xl  text-center font-bold mb-2">
          RAJ KUMAR MAHARJAN
        </h1>
        <div className="flex flex-wrap gap-4">
          <a
            href="tel:+12817771295"
            className="flex text-blue-600 items-center gap-1"
          >
            <Phone size={16} />
            +1 (281) 777-1295
          </a>
          <a
            href="mailto:rajmaharjan0220@gmail.com"
            className="flex items-center gap-1 text-blue-600"
          >
            <Mail size={16} />
            rajmaharjan0220@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/raj-k-maharjan"
            className="flex items-center gap-1 text-blue-600"
          >
            <BsLinkedin size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/raj-maharjan99"
            className="flex items-center gap-1 text-blue-600"
          >
            <BsGithub size={16} />
            GitHub
          </a>
          <span>Houston, TX 77081</span>
        </div>
      </header>

      <hr />

      <section className="my-4">
        <h2 className="text-2xl font-semibold mb-4">EDUCATION</h2>
        <div>
          <h3 className="font-semibold">Balkumari College</h3>
          <p>B.S in accounting and management</p>
          <p>December 2011</p>
        </div>
      </section>
      <hr />
      <section className="my-4">
        <h2 className="text-2xl font-semibold mb-4">EXPERIENCE</h2>
        <div className="mb-4">
          <h3 className="font-semibold">Heartsun Technology | Nepal</h3>
          <p className="italic">Web Developer (HTML, CSS, JavaScript)</p>
          <p>August 2011 - October 2013</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Developed responsive and interactive websites, enhancing user
              experience and accessibility across devices
            </li>
            <li>
              Optimized website performance by refining code structure and
              reducing load times by 30%, leading to a smoother browsing
              experience
            </li>
            <li>
              Designed and implemented intuitive navigation and UI components,
              improving user engagement and retention
            </li>
            <li>
              Ensured cross-browser compatibility and mobile responsiveness,
              maintaining a consistent look and feel across different screen
              sizes
            </li>
          </ul>
        </div>
      </section>
      <hr />
      <section className="my-4">
        <h2 className="text-2xl font-semibold mb-4">RESEARCH AND PROJECTS</h2>
        <div className="mb-4">
          <h3 className="font-semibold">
            Full-Stack Web Developer - Banking Application (MERN Stack, MongoDB)
            - GitHub
          </h3>
          <p>February 2023</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Developed a banking portal enabling users to open accounts,
              deposit/withdraw money, manage users, and delete records with a
              secure database integration
            </li>
            <li>
              Implemented user authentication, account management, and
              transaction handling, ensuring seamless and secure financial
              operations
            </li>
            <li>
              Optimized database queries and front-end performance, reducing
              data retrieval time by 30% and improving overall system efficiency
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold">
            Movie Search Application (MERN Stack, External API)
          </h3>
          <p>October 2022 - December 2022</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Built a movie search platform allowing users to seamlessly search
              for any movie and retrieve detailed information, including
              ratings, cast, and release details
            </li>
            <li>
              Integrated an external movie database API to fetch real-time data,
              ensuring accurate and up-to-date movie details
            </li>
            <li>
              Enhanced UI/UX with a dynamic, responsive design, improving user
              engagement and search efficiency by 40%
            </li>
          </ul>
        </div>
      </section>
      <hr />

      <section className="my-4">
        <h2 className="text-2xl font-semibold mb-4">TECHNICAL SKILLS</h2>
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
      <hr />
      <section className="my-4">
        <h2 className="text-2xl font-semibold mb-4">EXTRA SKILLS</h2>
        <ul className="list-disc pl-5">
          <li>
            <span className="font-semibold">Languages:</span> English, Nepali,
            Hindi, Korean, Urdu
          </li>
          <li>
            <span className="font-semibold">Interests:</span> Cooking, Sports,
            Adventure & Outdoor Activities
          </li>
        </ul>
      </section>
      <hr />
      <section className="my-4">
        <h2 className="text-2xl font-semibold mb-4">
          CERTIFICATIONS & BOOTCAMPS
        </h2>
        <ul className="list-disc pl-5">
          <li>Broadway MERN Stack Web Development Training Program (2024)</li>
          <li>Takeo Front-End Bootcamp (2023)</li>
          <li>Takeo Full Stack Bootcamp (2024)</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
