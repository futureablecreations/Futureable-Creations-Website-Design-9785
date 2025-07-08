import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronLeft, FiChevronRight } = FiIcons;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the future of web development, from AI integration to progressive web apps.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'March 15, 2024',
      author: 'Sarah Johnson'
    },
    {
      id: 2,
      title: 'Building Scalable Mobile Applications: Best Practices',
      excerpt: 'Learn the essential strategies for creating mobile applications that can grow with your business needs.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'March 10, 2024',
      author: 'Michael Chen'
    },
    {
      id: 3,
      title: 'UI/UX Design Principles for Better User Engagement',
      excerpt: 'Discover how thoughtful design can significantly improve user experience and drive business success.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'March 5, 2024',
      author: 'Emma Wilson'
    },
    {
      id: 4,
      title: 'Cybersecurity in the Digital Age: Protecting Your Business',
      excerpt: 'Essential cybersecurity measures every business should implement to protect against modern threats.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'February 28, 2024',
      author: 'David Martinez'
    },
    {
      id: 5,
      title: 'The Impact of AI on Modern Business Operations',
      excerpt: 'How artificial intelligence is transforming business processes and creating new opportunities.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'February 20, 2024',
      author: 'Lisa Anderson'
    },
    {
      id: 6,
      title: 'Cloud Computing: Choosing the Right Solution for Your Business',
      excerpt: 'A comprehensive guide to selecting the best cloud computing solution for your specific business needs.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: 'February 15, 2024',
      author: 'Robert Taylor'
    }
  ];

  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = blogPosts.slice(startIndex, startIndex + postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
            Our Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights, trends, and best practices in technology and digital innovation.
          </p>
        </motion.div>

        <div className="space-y-8">
          {currentPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>By {post.author}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                  <button className="btn-primary">Read More</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-4 mt-12">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center px-4 py-2 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <SafeIcon icon={FiChevronLeft} className="w-4 h-4 mr-1" />
            Previous
          </button>

          <div className="flex space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded-lg ${
                  currentPage === index + 1
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center px-4 py-2 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
            <SafeIcon icon={FiChevronRight} className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;