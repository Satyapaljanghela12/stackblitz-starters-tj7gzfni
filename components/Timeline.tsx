'use client';

import { motion } from 'framer-motion';
import { FiCalendar, FiClock, FiFlag, FiTrophy } from 'react-icons/fi';

const Timeline = () => {
  const events = [
    {
      date: 'March 1-14',
      time: 'Registration Period',
      title: 'Registration Opens',
      description: 'Sign up for the hackathon and form your teams.',
      icon: <FiCalendar className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      date: 'March 15',
      time: '9:00 AM',
      title: 'Opening Ceremony',
      description: 'Welcome address, rules explanation, and team formation.',
      icon: <FiFlag className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      date: 'March 15',
      time: '10:00 AM',
      title: 'Hacking Begins',
      description: 'Start building your amazing web applications!',
      icon: <FiClock className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      date: 'March 16',
      time: '2:00 PM',
      title: 'Mid-Point Check',
      description: 'Progress updates and mentor consultations.',
      icon: <FiClock className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      date: 'March 17',
      time: '10:00 AM',
      title: 'Submission Deadline',
      description: 'Final submissions and project presentations.',
      icon: <FiFlag className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      date: 'March 17',
      time: '4:00 PM',
      title: 'Awards Ceremony',
      description: 'Winner announcements and prize distribution.',
      icon: <FiTrophy className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Event <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here's what to expect during the 48-hour hackathon journey.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>

          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 rounded-full bg-gradient-to-r ${event.color} text-white`}>
                        {event.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{event.date}</div>
                        <div className="text-sm text-gray-600">{event.time}</div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="relative z-10">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${event.color} border-4 border-white shadow-lg`}></div>
                </div>

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;