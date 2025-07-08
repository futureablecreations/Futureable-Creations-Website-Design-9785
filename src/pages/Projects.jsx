import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from '../components/ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce solution with advanced features including real-time inventory management, secure payment processing, and personalized user experiences.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      description: 'Comprehensive healthcare management platform enabling seamless patient care coordination, appointment scheduling, and medical records management.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS']
    },
    {
      id: 3,
      title: 'Financial Analytics Dashboard',
      description: 'Advanced financial analytics platform providing real-time insights, predictive modeling, and comprehensive reporting for investment firms.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#',
      technologies: ['Angular', 'Python', 'PostgreSQL', 'D3.js']
    },
    {
      id: 4,
      title: 'Mobile Learning App',
      description: 'Interactive mobile learning platform with gamified content, progress tracking, and personalized learning paths for students.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#',
      technologies: ['React Native', 'Firebase', 'GraphQL', 'Redux']
    },
    {
      id: 5,
      title: 'Smart Home IoT Platform',
      description: 'Integrated IoT platform for smart home automation with voice control, energy monitoring, and security features.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#',
      technologies: ['IoT', 'Python', 'MQTT', 'React']
    },
    {
      id: 6,
      title: 'Social Media Analytics',
      description: 'Comprehensive social media analytics tool providing insights into engagement metrics, audience behavior, and content performance.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '#',
      technologies: ['Next.js', 'Express.js', 'Redis', 'Chart.js']
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
            Our Projects
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                <p className="text-gray-600 line-clamp-3">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Projects;