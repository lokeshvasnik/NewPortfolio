import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-purple-50 px-4 py-2 rounded-full text-odoo-purple font-medium text-sm mb-6">
              <span className="w-2 h-2 bg-odoo-purple rounded-full mr-2"></span>
              Get in touch
            </div>
            <h2 className="text-5xl md:text-6xl font-bold font-inter text-odoo-dark mb-8 font-heading">
              Let's build something great together
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-inter">
              Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out!
            </p>
          </div>

          {/* Contact Info and Form */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="flex items-center space-x-6">
                <div className="p-4 bg-odoo-purple rounded-full text-white">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-inter text-odoo-dark mb-1">Email</h3>
                  <p className="text-gray-600 font-inter">lokeshvasnik2003@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="p-4 bg-odoo-orange rounded-full text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-inter text-odoo-dark mb-1">Phone</h3>
                  <p className="text-gray-600 font-inter">+91 (976) 620-2976</p>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="p-4 bg-odoo-green rounded-full text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-inter text-odoo-dark mb-1">Location</h3>
                  <p className="text-gray-600 font-inter">Mumbai, IN</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-3xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm font-inter placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-odoo-purple"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm font-inter placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-odoo-purple"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm font-inter placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-odoo-purple"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows="5"
                className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm font-inter placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-odoo-purple resize-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center space-x-2 bg-odoo-purple hover:bg-opacity-90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg font-inter"
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    <span>Message Sent</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
