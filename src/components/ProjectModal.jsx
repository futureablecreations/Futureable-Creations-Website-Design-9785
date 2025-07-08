import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiExternalLink } = FiIcons;

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
            aria-label="Close modal"
          >
            <SafeIcon icon={FiX} className="w-6 h-6" />
          </button>
          
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover rounded-t-lg"
          />
          
          <div className="p-6">
            <h2 className="text-3xl font-bold text-primary mb-4">{project.title}</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">{project.description}</p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-primary mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <a
                href={project.link}
                className="btn-primary flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SafeIcon icon={FiExternalLink} className="w-4 h-4 mr-2" />
                View Project
              </a>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;