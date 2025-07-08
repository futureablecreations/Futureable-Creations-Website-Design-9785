import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronLeft, FiChevronRight, FiStar } = FiIcons;

const TestimonialCarousel = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Futureable Creations transformed our outdated website into a modern, user-friendly platform that increased our conversions by 300%. Their attention to detail and innovative approach exceeded all our expectations.",
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      rating: 5
    },
    {
      id: 2,
      quote: "The mobile app they developed for us has been a game-changer. Our customer engagement has skyrocketed, and the feedback has been overwhelmingly positive. Truly exceptional work!",
      name: "Michael Chen",
      position: "Founder, HealthTech Solutions",
      rating: 5
    },
    {
      id: 3,
      quote: "Working with Futureable Creations was a pleasure from start to finish. They understood our vision and delivered a solution that perfectly aligned with our business goals. Highly recommended!",
      name: "Emily Rodriguez",
      position: "Marketing Director, GreenEnergy Corp",
      rating: 5
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center text-white"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="w-6 h-6 text-accent fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl mb-8 italic leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              
              <div>
                <p className="font-semibold text-lg text-accent">
                  {testimonials[currentTestimonial].name}
                </p>
                <p className="text-gray-300">
                  {testimonials[currentTestimonial].position}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <SafeIcon icon={FiChevronLeft} className="w-8 h-8" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-accent transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <SafeIcon icon={FiChevronRight} className="w-8 h-8" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-accent' : 'bg-white bg-opacity-30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;