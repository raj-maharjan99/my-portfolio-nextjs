import { motion } from "framer-motion";
import { aboutMe, skills } from "./data/data";
import QuickFacts from "./quick-facts";

export default function MySkills() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col gap-8"
    >
      <p className="text-xl  sm:mt-4 mb-6 font-sans  leading-relaxed text-gray-700 dark:text-gray-300">
        {aboutMe}
      </p>

      <div className="flex flex-col gap-5 sm:mt-5">
        <h2 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Skills
        </h2>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ width: 0 }}
              animate={{ width: `${skill.level}%` }}
              transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
              className="h-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full relative overflow-hidden"
            >
              <div className="flex justify-between items-center px-2 text-sm text-white absolute inset-0">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="block sm:hidden">
        <QuickFacts />
      </div>
    </motion.div>
  );
}
