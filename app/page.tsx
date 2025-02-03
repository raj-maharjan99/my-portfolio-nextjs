"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("Full Stack Developer");
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/raj.jpg')`,
        }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white px-4">
        <h1 className="text-6xl font-bold text-center mb-4">Raj Maharjan</h1>
        <p className="text-2xl">
          I&apos;m {text.substring(0, index)}
          <span className="animate-pulse">|</span>
        </p>
      </div>
    </div>
  );
}
