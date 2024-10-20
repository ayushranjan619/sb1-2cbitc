import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Factory, ShoppingCart, Truck } from 'lucide-react';

const industries = [
  {
    icon: <DollarSign className="w-12 h-12 text-blue-600" />,
    title: 'Finance',
    description: 'Analyze financial data, identify risks and opportunities, and optimize investment decisions using predictive models and advanced analytics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    icon: <Factory className="w-12 h-12 text-blue-600" />,
    title: 'Manufacturing',
    description: 'Leverage data for predictive maintenance, quality optimization, supply chain efficiency, and informed decision-making to increase productivity and profitability.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
    title: 'Retail',
    description: 'Analyze customer behavior, optimize inventory management, and identify new market trends to reduce costs and improve customer satisfaction.',
    image: 'https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  },
  {
    icon: <Truck className="w-12 h-12 text-blue-600" />,
    title: 'Logistics',
    description: 'Optimize routes, predict traffic patterns, and improve safety by analyzing traffic data and developing predictive models to enhance efficiency.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 bg-cover bg-center relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                <img src={industry.image} alt={industry.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    className="bg-blue-100 p-3 rounded-full"
                  >
                    {industry.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold ml-4">{industry.title}</h3>
                </div>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;