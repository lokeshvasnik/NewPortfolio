import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Creating beautiful, responsive user interfaces",
      skills: [
        { name: "React", level: 95, color: "bg-[#FCEF91]" },
        { name: "Next.js", level: 85, color: "bg-[#FB9E3A]" },
        { name: "Tailwind CSS", level: 98, color: "bg-[#E6521F]" },
        { name: "JavaScript", level: 95, color: "bg-[#EA2F14]" }
      ]
    },
    {
      title: "Backend Development", 
      description: "Building robust server-side applications",
      skills: [
        { name: "Node.js", level: 88, color: "bg-[#FFF1CA]" },
        { name: "MongoDB", level: 75, color: "bg-[#FFB823]" },
        { name: "REST APIs", level: 90, color: "bg-[#708A58]" },
        { name: "Git", level: 95, color: "bg-[#2D4F2B]" },
      ]
    },
  ];

  return (
<>

    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-purple-50 px-4 py-2 rounded-full text-odoo-purple font-medium text-sm mb-6 ">
              <span className="w-2 h-2 bg-odoo-purple rounded-full mr-2"></span>
              Optimized for productivity
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-inter text-odoo-dark mb-8 font-heading">
              Optimized for productivity
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-inter">
              Constantly learning and adapting to new technologies to deliver cutting-edge solutions 
              that help businesses thrive in the digital landscape.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 transition-all duration-300">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold font-inter text-odoo-dark mb-4">{category.title}</h3>
                  <p className="text-gray-600 font-inter">{category.description}</p>
                </div>
                
                <div className="space-y-8">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-odoo-dark font-inter">{skill.name}</span>
                        <span className="text-sm text-gray-500 font-inter">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-3 shadow-inner">
                        <div
                          className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out shadow-sm`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Category Icon/Badge */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 font-inter">
                      {index === 0 && "UI/UX Focus"}
                      {index === 1 && "Server Architecture"}
                      {index === 2 && "Development Workflow"}
                    </div>
                    <div className="w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center">
                      <div className="w-3 h-3 bg-odoo-purple rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <a href='#projects' className="bg-odoo-purple hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg font-inter">
              See My Work in Action
            </a>
          </div>
        </div>
      </div>
    </section>
    
    <section id="skills" className="pt-24 bg-white">
      <div className="container mx-auto px-0">
        <div>
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-purple-50 px-4 py-2 rounded-full text-odoo-purple font-medium text-sm mb-6 ">
              <span className="w-2 h-2 bg-odoo-purple rounded-full mr-2"></span>
              From Where It Began
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-inter text-odoo-dark mb-8 font-heading">
              From Where It Began
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-inter">
              Constantly learning and adapting to new technologies to deliver cutting-edge solutions 
              that help businesses thrive in the digital landscape.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="">
            <img src="portfolio-bg.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Skills;
