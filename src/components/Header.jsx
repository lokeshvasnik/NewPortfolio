
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Contact'];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100' : 'bg-white'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold font-inter">
            <span className="text-odoo-purple">Lokesh</span>
            <span className="text-odoo-dark">Vasnik</span>
          </div>
          
          <ul className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-odoo-dark hover:text-odoo-purple transition-colors duration-200 font-medium font-inter text-sm"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-2 text-odoo-purple border border-odoo-purple rounded-lg hover:bg-odoo-purple hover:text-white transition-all duration-200 font-medium text-sm">
              Download CV
            </button>
          </div>

          <button
            className="md:hidden p-2 text-odoo-dark"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-gray-100 pt-6">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-odoo-dark hover:text-odoo-purple transition-colors duration-200 font-medium block font-inter"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-3 mt-6">
              <button className="px-6 py-2 text-odoo-purple border border-odoo-purple rounded-lg hover:bg-odoo-purple hover:text-white transition-all duration-200 font-medium text-sm">
                Download CV
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
