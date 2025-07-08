import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiTarget, FiHeart, FiZap } = FiIcons;

const About = () => {
  const coreValues = [
    {
      icon: FiTarget,
      title: 'Innovation First',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that drive real results.'
    },
    {
      icon: FiHeart,
      title: 'Client-Centric',
      description: 'Your success is our priority, and we build lasting partnerships based on trust and excellence.'
    },
    {
      icon: FiZap,
      title: 'Quality Driven',
      description: 'We maintain the highest standards in everything we do, ensuring exceptional outcomes every time.'
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Our team collaborating"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
              Our Vision
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At Futureable Creations, we envision a world where technology seamlessly integrates 
              with human creativity to solve complex challenges. We are passionate about building 
              digital experiences that not only meet today's needs but anticipate tomorrow's 
              possibilities. Our team combines technical expertise with creative vision to deliver 
              solutions that transform businesses and inspire growth.
            </p>

            <h2 className="text-2xl font-bold text-primary mb-6">Our Core Values</h2>
            <div className="space-y-4">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-accent p-2 rounded-lg">
                    <SafeIcon icon={value.icon} className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-lg">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;