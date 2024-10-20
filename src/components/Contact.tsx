import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
          <p className="text-center text-xl mb-12 text-gray-700">
            Ready to harness the power of AI for your business? Let's discuss how our data science solutions can drive your success.
          </p>
          <form className="space-y-8">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;