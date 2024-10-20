import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">About CoreInsights AI</h2>
          <p className="text-xl mb-8 leading-relaxed text-gray-700">
            At CoreInsights AI, we're at the forefront of the data science and AI revolution. Our team of expert data scientists, machine learning engineers, and AI specialists is dedicated to solving complex business challenges through innovative technology.
          </p>
          <p className="text-xl mb-8 leading-relaxed text-gray-700">
            We specialize in developing custom AI solutions that transform raw data into actionable insights, enabling businesses to make informed decisions, optimize operations, and drive growth in an increasingly data-driven world.
          </p>
          <p className="text-xl leading-relaxed text-gray-700">
            With a strong commitment to ethical AI practices and cutting-edge research, we ensure that our solutions are not only powerful and effective but also responsible and sustainable. Our goal is to democratize AI and make its benefits accessible to businesses of all sizes across various industries.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;