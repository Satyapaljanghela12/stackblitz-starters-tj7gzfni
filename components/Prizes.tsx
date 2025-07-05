'use client';

import { motion } from 'framer-motion';
import { FiTrophy, FiStar, FiGift } from 'react-icons/fi';

const Prizes = () => {
  const prizes = [
    {
      position: '1st Place',
      amount: '$20,000',
      icon: <FiTrophy className="w-12 h-12" />,
      color: 'from-yellow-400 to-orange-500',
      benefits: [
        'Cash Prize: $20,000',
        'Internship Opportunities',
        'Mentorship Program',
        'Tech Conference Tickets',
        'Premium Development Tools'
      ],
      highlight: true
    },
    {
      position: '2nd Place',
      amount: '$15,000',
      icon: <FiStar className="w-10 h-10" />,
      color: 'from-gray-400 to-gray-600',
      benefits: [
        'Cash Prize: $15,000',
        'Job Interview Fast-track',
        'Online Course Subscriptions',
        'Development Hardware',
        'Certificate of Excellence'
      ]
    },
    {
      position: '3rd Place',
      amount: '$10,000',
      icon: <FiGift className="w-10 h-10" />,
      color: 'from-amber-600 to-orange-700',
      benefits: [
        'Cash Prize: $10,000',
        'Startup Incubator Access',
        'Professional Networking',
        'Software Licenses',
        'Recognition Certificate'
      ]
    }
  ];

  const specialPrizes = [
    { title: 'Best UI/UX Design', amount: '$2,000' },
    { title: 'Most Innovative Idea', amount: '$2,000' },
    { title: 'Best Use of AI/ML', amount: '$2,000' },
    { title: 'People\'s Choice Award', amount: '$1,500' },
    { title: 'Best Beginner Project', amount: '$1,500' }
  ];

  return (
    <section id="prizes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Amazing <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Prizes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compete for a total prize pool of $50,000+ and amazing opportunities to kickstart your career.
          </p>
        </motion.div>

        {/* Main Prizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                prize.highlight ? 'transform scale-105 border-4 border-yellow-400' : ''
              }`}
            >
              {prize.highlight && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-2 font-semibold">
                  🏆 GRAND PRIZE
                </div>
              )}
              
              <div className={`p-8 ${prize.highlight ? 'pt-16' : ''}`}>
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${prize.color} text-white mb-6`}>
                  {prize.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{prize.position}</h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                  {prize.amount}
                </div>
                
                <ul className="space-y-3">
                  {prize.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Special Prizes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Special Category Prizes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialPrizes.map((prize, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <h4 className="font-semibold text-gray-900 mb-2">{prize.title}</h4>
                <div className="text-2xl font-bold text-blue-600">{prize.amount}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">All Participants Receive</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-4">
              <div className="text-3xl mb-2">🎓</div>
              <div className="font-semibold">Certificate</div>
              <div className="text-sm text-gray-600">Participation Certificate</div>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🍕</div>
              <div className="font-semibold">Free Meals</div>
              <div className="text-sm text-gray-600">Food & Beverages</div>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">👕</div>
              <div className="font-semibold">Swag Kit</div>
              <div className="text-sm text-gray-600">T-shirts & Stickers</div>
            </div>
            <div className="p-4">
              <div className="text-3xl mb-2">🤝</div>
              <div className="font-semibold">Networking</div>
              <div className="text-sm text-gray-600">Industry Connections</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Prizes;