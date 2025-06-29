import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-odoo-purple rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-odoo-orange rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Accent text */}
          <div className="inline-flex items-center bg-purple-50 px-4 py-2 rounded-full text-odoo-purple font-medium text-sm mb-8">
            <span className="w-2 h-2 bg-odoo-purple rounded-full mr-2"></span>
            Available for freelance work
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-inter mb-8 leading-tight font-heading relative">
            <span className="text-odoo-dark relative z-10">Lokesh Vasnik</span>
            <img
              className="heading-yellow absolute end-36 top-4 w-96 z-0 sm:hidden md:block"
              src="https://odoocdn.com/openerp_website/static/src/img/highlights/yellow_highlight_bold_05.svg"
              alt=""
            />
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-inter">
            Simple, efficient, yet affordable! I create beautiful, responsive web applications 
            that help businesses grow and succeed in the digital world.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a href="/LokeshVasnikResumeNew.pdf" download>
              <button className="bg-odoo-purple hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg font-inter">
                Download CV
              </button>
            </a>
            <a href="#projects" className="border border-gray-300 hover:border-odoo-purple text-odoo-dark hover:text-odoo-purple px-8 py-4 rounded-lg font-semibold transition-all duration-200 font-inter">
              View My Work
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-16">
            <a href="https://github.com/lokeshvasnik" target="_blank" className="text-gray-400 hover:text-odoo-purple transition-colors duration-200 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/lokesh-vasnik-1086a5221/" target="_blank" className="text-gray-400 hover:text-odoo-purple transition-colors duration-200 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:lokeshvasnik2003@gmail.com" target="_blank" className="text-gray-400 hover:text-odoo-purple transition-colors duration-200 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-gray-400" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
