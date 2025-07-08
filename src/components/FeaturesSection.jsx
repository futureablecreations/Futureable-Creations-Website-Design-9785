import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiZap, FiShield, FiUsers } = FiIcons;

const FeaturesSection = () => {
  const features = [
    {
      icon: FiZap,
      title: 'Lightning Fast',
      description: 'We deliver high-performance solutions that load instantly and provide seamless user experiences.'
    },
    {
      icon: FiShield,
      title: 'Secure & Reliable',
      description: 'Your data and applications are protected with enterprise-grade security and 99.9% uptime guarantee.'
    },
    {
      icon: FiUsers,
      title: 'Expert Team',
      description: 'Our skilled professionals bring years of experience and cutting-edge expertise to every project.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine innovation, expertise, and dedication to deliver exceptional results that exceed expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-accent p-4 rounded-full inline-block mb-6">
                <SafeIcon icon={feature.icon} className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;