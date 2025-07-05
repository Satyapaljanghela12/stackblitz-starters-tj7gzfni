'use client';

import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsors = {
    platinum: [
      { name: 'TechCorp', logo: 'https://via.placeholder.com/200x80/3B82F6/FFFFFF?text=TechCorp' },
      { name: 'InnovateLab', logo: 'https://via.placeholder.com/200x80/8B5CF6/FFFFFF?text=InnovateLab' }
    ],
    gold: [
      { name: 'DevTools Inc', logo: 'https://via.placeholder.com/180x70/F59E0B/FFFFFF?text=DevTools' },
      { name: 'CloudBase', logo: 'https://via.placeholder.com/180x70/10B981/FFFFFF?text=CloudBase' },
      { name: 'StartupHub', logo: 'https://via.placeholder.com/180x70/EF4444/FFFFFF?text=StartupHub' }
    ],
    silver: [
      { name: 'CodeAcademy', logo: 'https://via.placeholder.com/160x60/6B7280/FFFFFF?text=CodeAcademy' },
      { name: 'WebHost Pro', logo: 'https://via.placeholder.com/160x60/6B7280/FFFFFF?text=WebHost' },
      { name: 'API Gateway', logo: 'https://via.placeholder.com/160x60/6B7280/FFFFFF?text=API+Gateway' },
      { name: 'DataFlow', logo: 'https://via.placeholder.com/160x60/6B7280/FFFFFF?text=DataFlow' }
    ]
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sponsors</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're grateful to our amazing sponsors who make this hackathon possible and support the developer community.
          </p>
        </motion.div>

        {/* Platinum Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Platinum Sponsors</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {sponsors.platinum.map((sponsor, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-yellow-200"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-20 w-auto mx-auto"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Gold Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold text-center text-gray-900 mb-8">Gold Sponsors</h3>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {sponsors.gold.map((sponsor, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-yellow-300"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-16 w-auto mx-auto"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Silver Sponsors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-lg font-bold text-center text-gray-900 mb-8">Silver Sponsors</h3>
          <div className="flex flex-wrap justify-center items-center gap-4">
            {sponsors.silver.map((sponsor, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-200"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-12 w-auto mx-auto"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Become a Sponsor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Become a Sponsor</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join us in supporting the next generation of developers. Sponsorship opportunities are available 
              at various levels with different benefits and exposure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Sponsor Us
              </a>
              <a
                href="/sponsorship-deck.pdf"
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Download Deck
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;