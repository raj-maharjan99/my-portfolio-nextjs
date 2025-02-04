"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const text = "Full Stack Developer";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % (text.length + 1));
    }, 200);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/bg_pic.jpg')`,
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 via-white to-purple-400 bg-clip-text text-transparent">
              Raj Kumar Maharjan
            </h1>
          </motion.div>

          <h2 className="text-2xl mb-8">Web Developer</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Passionate web developer with experience in creating responsive and
            interactive websites. Skilled in HTML, CSS, JavaScript, React.js,
            and Next.js.
          </p>
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            View My Work
          </Link>
        </section>
      </div>
    </div>
  );
}
