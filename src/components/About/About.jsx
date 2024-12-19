import React from 'react';
import { Users, Award, MapPin, Phone, Clock, Shield, Truck, ThumbsUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-red-700 text-white py-12 px-4 mt-16">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to Chops Cut</h1>
          <p className="text-lg">Premium Raw Meat Shop Since 2010</p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="px-4 py-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <p className="text-gray-700 mb-4">
            Founded in 2010, Chops Cut has been serving premium quality raw meat to our valued customers for over a decade. What started as a small family butcher shop has grown into one of the most trusted names in premium meat distribution.
          </p>
          <p className="text-gray-700">
            Our commitment to quality, hygiene, and customer satisfaction has made us the preferred choice for households and restaurants alike in our community.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-red-700 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">10K+</div>
            <div className="text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">14+</div>
            <div className="text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-sm">Meat Varieties</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">100%</div>
            <div className="text-sm">Quality Assured</div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-4 py-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose Us</h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="text-center p-4">
            <Shield className="w-8 h-8 text-red-700 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-sm text-gray-600">Certified premium grade meat</p>
          </div>
          <div className="text-center p-4">
            <Truck className="w-8 h-8 text-red-700 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-sm text-gray-600">Same day delivery available</p>
          </div>
          <div className="text-center p-4">
            <ThumbsUp className="w-8 h-8 text-red-700 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Best Prices</h3>
            <p className="text-sm text-gray-600">Competitive market prices</p>
          </div>
          <div className="text-center p-4">
            <Clock className="w-8 h-8 text-red-700 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Always Fresh</h3>
            <p className="text-sm text-gray-600">Daily fresh supplies</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Visit Us</h2>
          <div className="grid gap-6">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6 text-red-700" />
              <p>123 Meat Street, Butcher Square, City - 12345</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-6 h-6 text-red-700" />
              <p>+1 234 567 8900</p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-6 h-6 text-red-700" />
              <p>Mon - Sat: 7:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Certification Section */}
      <div className="px-4 py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Certifications</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            <Award className="w-12 h-12 text-red-700" />
            <Award className="w-12 h-12 text-red-700" />
            <Award className="w-12 h-12 text-red-700" />
          </div>
          <p className="mt-4 text-gray-600">
            Certified by International Food Safety Organization
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-red-700 text-white py-6 px-4 text-center">
        <p className="text-sm">© 2024 Chops Cut. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;