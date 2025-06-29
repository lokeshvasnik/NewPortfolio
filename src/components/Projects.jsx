import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // const filters = ['All', 'Web Apps', 'E-commerce', 'Portfolio'];
  const filters = ['All', 'Web Apps']


  const projects = [
    {
      id: 1,
      title: "Weather With Map",
      description: "A modern e-commerce solution with advanced features including inventory management, payment processing, and analytics dashboard.",
      image: "https://github.com/lokeshvasnik/ImageUrl/blob/main/frame_chrome_mac_dark.png?raw=true",
      // category: "E-commerce",
      category: "Web Apps",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Gym Fitness Website",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and advanced reporting.",
      image: "https://github.com/lokeshvasnik/ImageUrl/blob/main/07.png?raw=true",
      category: "Web Apps",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Random Quotes",
      description: "Clean and minimalist portfolio website showcasing creative work with smooth animations and responsive design.",
      image: "https://github.com/lokeshvasnik/ImageUrl/blob/main/04.png?raw=true",
      // category: "Portfolio",
      category: "Web Apps",
      technologies: ["Next.js", "Framer Motion", "CSS", "Vercel"],
      liveUrl: "https://advisor-wheat.vercel.app/",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Modern Notes",
      description: "Clean and minimalist portfolio website showcasing creative work with smooth animations and responsive design.",
      image: "https://github.com/lokeshvasnik/ImageUrl/blob/main/modern-notes.png?raw=true",
      // category: "Portfolio",
      category: "Web Apps",
      technologies: ["Next.js", "Framer Motion", "CSS", "Vercel"],
      liveUrl: "https://modern-notes.vercel.app/",
      githubUrl: "#"
    },
    // {
    //   id: 5,
    //   title: "Work Connect",
    //   description: "Clean and minimalist portfolio website showcasing creative work with smooth animations and responsive design.",
    //   image: "a://github.com/lokeshvasnik/ImageUrl/blob/main/modern-notes.png?raw=true",
    //   // category: "Portfolio",
    //   category: "Web Apps",
    //   technologies: ["Next.js", "Framer Motion", "CSS", "Vercel"],
    //   liveUrl: "https://workconnectmern.vercel.app",
    //   githubUrl: "#"
    // },
    // {
    //   id: 5,
    //   title: "Personal Portfolio",
    //   description: "Clean and minimalist portfolio website showcasing creative work with smooth animations and responsive design.",
    //   image: "a://github.com/lokeshvasnik/ImageUrl/blob/main/modern-notes.png?raw=true",
    //   category: "Portfolio",
    //   // category: "Web Apps",
    //   technologies: ["Next.js", "Framer Motion", "CSS", "Vercel"],
    //   liveUrl: "https://personal-portfolio-website-theta-nine.vercel.app",
    //   githubUrl: "#"
    // },
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
            <a href='#contact'  className="bg-odoo-purple hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg font-inter">
              Let's Build Something Amazing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
