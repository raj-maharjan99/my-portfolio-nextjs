"use client";
import { projects } from "@/components/data/data";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <div className="container mx-auto px-6 my-12 ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Projects
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={"/bg_pic.jpg"}
              alt={project.title}
              width={300}
              height={200}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} className="text-blue-600 hover:underline">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
