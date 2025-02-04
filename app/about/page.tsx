"use client";

import Image from "next/image";

import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import QuickFacts from "@/components/quick-facts";
import MySkills from "@/components/my-skills";

export default function AboutPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h1>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative overflow-hidden rounded-lg l transition-shadow duration-300 group"
          whileHover={{ scale: 1.05 }}
        >
          {/* Image with 3D Tilt Effect */}
          <motion.div
            whileHover={{ rotateY: 10, rotateX: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative overflow-hidden rounded-lg"
          >
            <Image
              src="/bg_pic.jpg"
              alt="Raj Maharjan"
              width={1000}
              height={1000}
              className="rounded-lg  "
            />
            {/* quick fact component */}
            <div className="hidden sm:block">
              <QuickFacts />
            </div>
          </motion.div>

          {/* Floating Particles (Client-Side Only) */}
          {isClient && (
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -20, x: Math.random() * 100 - 50 }}
                  animate={{
                    opacity: 1,
                    y: Math.random() * 100 - 50,
                    x: Math.random() * 100 - 50,
                  }}
                  transition={{
                    duration: Math.random() * 2 + 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute w-2 h-2 bg-blue-500 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* my skills component */}
        <MySkills />
      </div>
    </div>
  );
}
