'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who can participate in WebWave Hackathon?',
      answer: 'The hackathon is open to all developers, designers, and tech enthusiasts regardless of experience level. Whether you\'re a student, professional, or hobbyist, you\'re welcome to participate!'
    },
    {
      question: 'Do I need a team to participate?',
      answer: 'You can participate either as an individual or as part of a team (2-4 members). We also have team formation sessions during the opening ceremony for those looking to join a team.'
    },
    {
      question: 'What should I bring to the hackathon?',
      answer: 'Bring your laptop, chargers, and any development tools you prefer. We\'ll provide food, drinks, and a comfortable workspace. Don\'t forget your creativity and enthusiasm!'
    },
    {
      question: 'Are there any restrictions on the technology stack?',
      answer: 'No specific restrictions! You can use any web technologies, frameworks, or tools you\'re comfortable with. The focus is on building innovative web applications.'
    },
    {
      question: 'How will projects be judged?',
      answer: 'Projects will be evaluated based on innovation, technical implementation, user experience, presentation, and potential impact. Our panel includes industry experts and experienced developers.'
    },
    {
      question: 'Is there any registration fee?',
      answer: 'No, the hackathon is completely free to participate! We believe in making technology accessible to everyone.'
    },
    {
      question: 'Will there be mentors available?',
      answer: 'Yes! We have experienced mentors from top tech companies who will be available throughout the event to help with technical challenges and provide guidance.'
    },
    {
      question: 'Can I work on an existing project?',
      answer: 'No, all projects must be started from scratch during the hackathon. However, you can use existing libraries, frameworks, and APIs.'
    },
    {
      question: 'What if I\'m a beginner?',
      answer: 'Perfect! We have a special "Best Beginner Project" category and mentors specifically assigned to help newcomers. It\'s a great learning opportunity.'
    },
    {
      question: 'How do I submit my project?',
      answer: 'You\'ll submit your project through our online platform with your GitHub repository, demo video, and project description. Detailed instructions will be provided during the event.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Got questions? We've got answers! Here are the most common questions about WebWave Hackathon.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <FiMinus className="w-5 h-5 text-blue-600" />
                  ) : (
                    <FiPlus className="w-5 h-5 text-blue-600" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="mb-6">Feel free to reach out to our team. We're here to help!</p>
            <a
              href="#contact"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;