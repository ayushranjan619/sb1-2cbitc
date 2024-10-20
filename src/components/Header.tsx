import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Brain className="w-8 h-8 text-blue-600" />
          <span className={`text-xl font-semibold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>CoreInsights AI</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            {['Home', 'Services', 'Industries', 'About', 'Careers', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`hover:text-blue-600 transition-colors ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;