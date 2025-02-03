import React from "react";
import { motion } from "framer-motion";
import { details } from "./data/data";
import { Badge } from "./ui/badge";

export default function QuickFacts() {
  return (
    <div className="">
      <h2 className="text-3xl font-semibold mt-8 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Quick Facts
      </h2>
      <ul className="list-none space-y-1">
        {details.map((fact, index) => (
          <motion.li
            key={fact}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
            className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <Badge variant="secondary" className="mr-2 bg-blue-600 text-white">
              •
            </Badge>
            <span className="text-gray-700 dark:text-gray-300">{fact}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
