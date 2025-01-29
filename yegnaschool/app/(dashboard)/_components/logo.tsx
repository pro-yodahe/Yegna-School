"use client"; // Essential for using React hooks

import Image from "next/image";
import { useEffect } from "react";

export const Logo = () => {
  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      const sparkles = document.querySelectorAll('.sparkle');
      sparkles.forEach(sparkle => {
        sparkle.setAttribute('style', `top: ${Math.random() * 80}%; left: ${Math.random() * 80}%;`);
      });
    }
  }, []);

  return (
    <div className="group relative flex items-center space-x-2 cursor-pointer">
      {/* Sparkles with random positioning */}
      {[...Array(3)].map((_, i) => (
        <div 
          key={i}
          className="sparkle absolute w-1 h-1 bg-yellow-400 rounded-full opacity-0 
            group-hover:opacity-100 transition-opacity duration-300 animate-spin"
        />
      ))}

      {/* Animated logo container */}
      <div className="relative transition-transform duration-500 group-hover:rotate-[25deg]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full 
          opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" />
        <Image
          width={40}
          height={40}
          alt="Yegna School logo"
          src="/logo.svg"
          className="drop-shadow-lg hover:drop-shadow-xl transition-all duration-300 z-10 relative"
        />
      </div>

      {/* Gradient text with underline animation */}
      <span className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 
        bg-clip-text text-transparent relative transition-all duration-500 group-hover:translate-x-1">
        Yegna
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-400 
          transition-all duration-500 group-hover:w-full" />
      </span>
    </div>
  );
};