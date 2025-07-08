import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCode, FiSmartphone, FiTrendingUp, FiPalette, FiShield } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiCode,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.'
    },
    {
      icon: FiSmartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.'
    },
    {
      icon: FiTrendingUp,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies including SEO, social media, and content marketing to boost your online presence.'
    },
    {
      icon: FiPalette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that create exceptional user experiences and strengthen brand identity.'
    },
    {
      icon: FiShield,
      title: 'Cybersecurity Consulting',
      description: 'Protect your digital assets with our comprehensive security audits and implementation services.'
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern marketplace.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-accent p-3 rounded-lg inline-block mb-4">
                <SafeIcon icon={service.icon} className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;