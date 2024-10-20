import React from 'react';
import { Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Brain className="w-8 h-8 text-blue-600 mr-2" />
            <span className="text-xl font-semibold text-gray-900">CoreInsights AI</span>
          </div>
          <nav className="mb-6 md:mb-0">
            <ul className="flex space-x-8">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © 2024 CoreInsights AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;