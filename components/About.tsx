'use client';

import { motion } from 'framer-motion';
import { FiCode, FiUsers, FiTrendingUp, FiAward } from 'react-icons/fi';

const About = () => {
  const features = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: 'Web Development Focus',
      description: 'Build innovative web applications using modern technologies and frameworks.'
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Team Collaboration',
      description: 'Work with talented developers from around the world in teams of 2-4 members.'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Skill Enhancement',
      description: 'Learn new technologies, improve your coding skills, and gain valuable experience.'
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: 'Amazing Prizes',
      description: 'Compete for cash prizes, internship opportunities, and recognition in the tech community.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">WebWave</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            WebWave Hackathon 2025 is the premier web development competition that brings together 
            passionate developers, designers, and innovators to create groundbreaking web applications 
            in just 48 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Why Participate?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">🚀 Innovation</h4>
                <p className="text-blue-100">Push the boundaries of web development and create something amazing.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🤝 Networking</h4>
                <p className="text-blue-100">Connect with like-minded developers and industry professionals.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🏆 Recognition</h4>
                <p className="text-blue-100">Showcase your skills and gain recognition in the developer community.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;