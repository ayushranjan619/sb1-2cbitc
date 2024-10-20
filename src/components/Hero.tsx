import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-80"></div>
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 800 800">
          <defs>
            <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
              <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
              <feGaussianBlur stdDeviation="161" result="effect1_foregroundBlur"></feGaussianBlur>
            </filter>
          </defs>
          <g filter="url(#blur1)">
            <circle cx="400" cy="400" fill="#4338ca" r="346"></circle>
            <circle cx="400" cy="400" fill="#6366f1" r="283"></circle>
            <circle cx="400" cy="400" fill="#818cf8" r="220"></circle>
          </g>
        </svg>
      </div>
      <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unlock
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            the Power of
          </motion.span>{" "}
          <br />
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
          >
            Data Science & AI
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl mb-12 max-w-2xl"
        >
          CoreInsights AI empowers businesses with cutting-edge machine learning models, advanced analytics, and AI-driven solutions to transform raw data into actionable intelligence.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-full transition-colors hover:bg-gray-100 shadow-lg flex items-center"
        >
          Explore Our Solutions
          <ArrowRight className="ml-2 w-5 h-5" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;