import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-odoo-dark text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="text-3xl font-bold font-inter mb-6 font-heading">
                <span className="text-white">Lokesh</span>
                <span className="text-odoo-purple">Vasnik</span>
              </div>
              <p className="text-gray-300 leading-relaxed font-inter mb-8 max-w-md">
                Passionate web developer creating digital experiences that make a difference. 
                Let's build something amazing together and transform your ideas into reality.
              </p>
              <div className="flex space-x-6">
                <a href="https://github.com/lokeshvasnik" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-odoo-purple transition-all duration-200 transform hover:scale-110">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/lokesh-vasnik-1086a5221/" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-odoo-purple transition-all duration-200 transform hover:scale-110">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:lokeshvasnik2003@gmail.com" className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-odoo-purple transition-all duration-200 transform hover:scale-110">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold font-inter mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#about" className="text-gray-300 hover:text-odoo-purple transition-colors duration-200 font-inter">About Me</a></li>
                <li><a href="#skills" className="text-gray-300 hover:text-odoo-purple transition-colors duration-200 font-inter">Skills</a></li>
                <li><a href="#projects" className="text-gray-300 hover:text-odoo-purple transition-colors duration-200 font-inter">Projects</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-odoo-purple transition-colors duration-200 font-inter">Contact</a></li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold font-inter mb-6">Services</h3>
              <ul className="space-y-4">
                <li><span className="text-gray-300 font-inter">Web Development</span></li>
                <li><span className="text-gray-300 font-inter">UI/UX Design</span></li>
                <li><span className="text-gray-300 font-inter">Full-Stack Solutions</span></li>
                <li><span className="text-gray-300 font-inter">Consulting</span></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-300 flex items-center space-x-2 font-inter mb-4 md:mb-0">
                <span>© {new Date().getFullYear()} Lokesh Developer. Made with</span>
                <Heart size={16} className="text-red-400" />
                <span>and lots of coffee</span>
              </p>
              
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-2 bg-odoo-purple hover:bg-opacity-90 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 font-inter"
              >
                <span>Back to Top</span>
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
