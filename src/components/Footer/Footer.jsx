import React from 'react';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Youtube, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Section with Logo and Description */}
        {/* <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            Chops <span className="text-red-700">CUT</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Your premium destination for high-quality raw meat. We pride ourselves on delivering fresh, 
            carefully selected cuts to your table with uncompromising quality and service.
          </p>
        </div> */}

        {/* Main Two-Column Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Contact Information */}
          <div className="space-y-8 border-r border-gray-800 pr-8">
            <h3 className="text-2xl font-semibold mb-8 text-red-700">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group hover:bg-gray-800/30 p-3 rounded-lg transition-all duration-300">
                <MapPin className="h-6 w-6 text-red-700 group-hover:text-red-500 transition-colors" />
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  123 Meat Street, Butcher's Block, Akola
                </p>
              </div>
              <div className="flex items-center space-x-4 group hover:bg-gray-800/30 p-3 rounded-lg transition-all duration-300">
                <Phone className="h-6 w-6 text-red-700 group-hover:text-red-500 transition-colors" />
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  +91 (123) 456-7890
                </p>
              </div>
              <div className="flex items-center space-x-4 group hover:bg-gray-800/30 p-3 rounded-lg transition-all duration-300">
                <Mail className="h-6 w-6 text-red-700 group-hover:text-red-500 transition-colors" />
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  contact@chopscut.com
                </p>
              </div>
              <div className="flex items-center space-x-4 group hover:bg-gray-800/30 p-3 rounded-lg transition-all duration-300">
                <Clock className="h-6 w-6 text-red-700 group-hover:text-red-500 transition-colors" />
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  Mon - Sat: 7:00 AM - 9:00 PM
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="text-lg font-medium text-gray-300 mb-4">Follow Us</h4>
              <div className="flex space-x-5">
                {[Instagram, Facebook, Youtube, Twitter, Linkedin].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-red-700 transform hover:scale-110 transition-all duration-300"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Newsletter */}
          <div className="space-y-8 pl-0 md:pl-8">
            <h3 className="text-2xl font-semibold mb-8 text-red-700">Stay Updated</h3>
            <div className="bg-gray-800/30 p-6 rounded-xl space-y-6">
              <div>
                <h4 className="text-xl font-medium text-white mb-2">Subscribe to Our Newsletter</h4>
                <p className="text-gray-300">
                  Get exclusive offers, new product announcements, and expert butchery tips directly in your inbox.
                </p>
              </div>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-red-700 transition-colors"
                />
                <button className="w-full bg-red-700 hover:bg-red-600 text-white py-3 rounded-lg transition-colors duration-300 font-medium">
                  Subscribe Now
                </button>
              </div>
              <p className="text-gray-400 text-sm">
                By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-gray-400 text-center md:text-left text-sm">
              © {currentYear} Chops Cut Raw Meat Shop. All Rights Reserved.
            </p>
            <div className="text-gray-400 text-center md:text-right">
              <p>Developed with ❤️ by <span className="text-red-700 font-medium">WebReich Technologies</span></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;