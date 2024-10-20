import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload } from 'lucide-react';

const Hiring = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    experience: '',
    resume: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', position: '', experience: '', resume: null });
    alert('Application submitted successfully!');
  };

  return (
    <section id="careers" className="py-20 bg-gray-50 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: '100% 100%' }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundSize: 'cover',
          filter: 'blur(5px)',
        }}
      ></motion.div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl"
        >
          <h2 className="text-4xl font-bold text-center mb-8">Join Our Team</h2>
          <p className="text-center text-xl mb-12 text-gray-700">
            We're always looking for talented individuals to join our team of AI and data science experts. If you're passionate about pushing the boundaries of technology, we want to hear from you!
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="position" className="block mb-2 text-sm font-medium text-gray-700">Position Applied For</label>
              <input
                type="text"
                id="position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="experience" className="block mb-2 text-sm font-medium text-gray-700">Years of Experience</label>
              <input
                type="number"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                required
              />
            </div>
            <div>
              <label htmlFor="resume" className="block mb-2 text-sm font-medium text-gray-700">Upload Resume</label>
              <div className="relative">
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  required
                />
                <label
                  htmlFor="resume"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent flex items-center justify-center cursor-pointer"
                >
                  <Upload className="mr-2" />
                  {formData.resume ? formData.resume.name : 'Choose file'}
                </label>
              </div>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors hover:bg-blue-700 shadow-lg"
            >
              Submit Application
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Hiring;