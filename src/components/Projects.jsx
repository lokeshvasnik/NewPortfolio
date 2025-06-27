import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web Apps', 'E-commerce', 'Portfolio'];

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A modern e-commerce solution with advanced features including inventory management, payment processing, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      category: "E-commerce",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      category: "Web Apps",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Designer Portfolio",
      description: "Clean and minimalist portfolio website showcasing creative work with smooth animations and responsive design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
      category: "Portfolio",
      technologies: ["Next.js", "Framer Motion", "CSS", "Vercel"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Restaurant Booking",
      description: "Online reservation system for restaurants with table management, customer notifications, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      category: "Web Apps",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Fashion Store",
      description: "Luxury fashion e-commerce platform with advanced filtering, wishlist functionality, and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80",
      category: "E-commerce",
      technologies: ["React", "Redux", "Node.js", "PayPal"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Creative Agency",
      description: "Modern agency website with interactive elements, case studies showcase, and integrated contact forms.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      category: "Portfolio",
      technologies: ["Gatsby", "GraphQL", "Contentful", "Netlify"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-purple-50 px-4 py-2 rounded-full text-odoo-purple font-medium text-sm mb-6">
              <span className="w-2 h-2 bg-odoo-purple rounded-full mr-2"></span>
              All-in-One in one platform
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-inter text-odoo-dark mb-8 font-heading">
              All-in-One in one platform
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-inter">
              A showcase of my recent work, demonstrating various skills and technologies 
              across different industries and project types.
            </p>
          </div>

          {/* Filters */}
          <div className="flex justify-center mb-12 space-x-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-200 font-inter ${
                  activeFilter === filter
                    ? 'bg-odoo-purple text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-odoo-purple hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  <div className={`absolute top-4 left-4 bg-odoo-purple text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {project.category}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold font-inter text-odoo-dark mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed font-inter">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium font-inter hover:bg-odoo-purple hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center space-x-2 bg-odoo-purple text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:bg-opacity-90 transform hover:scale-105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:border-odoo-purple hover:text-odoo-purple"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <p className="text-gray-600 mb-6 font-inter">Interested in working together?</p>
            <button className="bg-odoo-purple hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg font-inter">
              Let's Build Something Amazing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
