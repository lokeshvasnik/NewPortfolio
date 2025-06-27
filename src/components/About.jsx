
import React from 'react';
import { Code, Rocket, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "50+", label: "Projects Completed", icon: Code },
    { number: "3+", label: "Years Experience", icon: Rocket },
    { number: "30+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "Awards Won", icon: Award }
  ];

  const features = [
    {
      title: "Modern Technologies",
      description: "Working with the latest frameworks and tools to deliver cutting-edge solutions.",
      icon: "🚀"
    },
    {
      title: "Responsive Design",
      description: "Creating applications that work perfectly across all devices and screen sizes.",
      icon: "📱"
    },
    {
      title: "Clean Code",
      description: "Writing maintainable, scalable code following best practices and industry standards.",
      icon: "⚡"
    },
    {
      title: "Fast Delivery",
      description: "Efficient development process ensuring timely delivery without compromising quality.",
      icon: "⏱️"
    }
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-purple-50 px-4 py-2 rounded-full text-odoo-purple font-medium text-sm mb-6">
              <span className="w-2 h-2 bg-odoo-purple rounded-full mr-2"></span>
              Meet me
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-inter text-odoo-dark mb-8 font-heading">
              Crafting digital experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-inter">
              I'm a passionate web developer with over 1 year of experience creating beautiful, functional, 
              and user-friendly applications. I love turning complex problems into simple, elegant solutions.
            </p>
          </div>

          {/* <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-16 h-16 bg-odoo-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-odoo-purple" />
                </div>
                <div className="text-4xl font-bold text-odoo-dark font-inter mb-2">{stat.number}</div>
                <div className="text-gray-600 font-inter">{stat.label}</div>
              </div>
            ))}
          </div> */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:transform hover:-translate-y-1">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-odoo-dark mb-4 font-inter">{feature.title}</h3>
                <p className="text-gray-600 font-inter leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
