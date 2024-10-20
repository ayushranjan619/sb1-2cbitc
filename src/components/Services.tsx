import React from 'react';
import { motion } from 'framer-motion';
import { Brain, TrendingUp, Users, Database, Shield, BarChart } from 'lucide-react';

const services = [
  {
    icon: <Brain className="w-12 h-12 text-blue-600" />,
    title: 'Machine Learning Solutions',
    description: 'Develop custom ML models to automate processes, predict outcomes, and gain valuable insights from your data.'
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
    title: 'Predictive Analytics',
    description: 'Leverage advanced algorithms to forecast trends, optimize operations, and make data-driven decisions.'
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: 'AI-Powered Customer Insights',
    description: 'Utilize natural language processing and sentiment analysis to understand customer behavior and preferences.'
  },
  {
    icon: <Database className="w-12 h-12 text-blue-600" />,
    title: 'Big Data Processing',
    description: 'Implement scalable data processing solutions to handle large volumes of structured and unstructured data.'
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-600" />,
    title: 'AI Ethics & Governance',
    description: 'Ensure responsible AI implementation with our comprehensive ethics framework and governance strategies.'
  },
  {
    icon: <BarChart className="w-12 h-12 text-blue-600" />,
    title: 'Data Visualization',
    description: 'Create interactive dashboards and visualizations to communicate complex data insights effectively.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Data Science & AI Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div 
                className="mb-6 flex justify-center"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;