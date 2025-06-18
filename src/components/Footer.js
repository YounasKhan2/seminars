import React, { useState, useCallback } from "react";
import { MapPin, CheckCircle, Award } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = useCallback((e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    // Optionally, send to API here
  }, []);

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/seminars" className="hover:underline">Seminars</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/register" className="hover:underline">Register</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 text-gray-400 text-sm">📧</span>
              <span className="text-gray-400 text-sm break-all">info@eduseminarspk.netlify.app</span>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Subscribe to Updates</h4>
              <form className="flex flex-col sm:flex-row" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white text-sm rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none border border-gray-700 focus:outline-none focus:border-blue-500"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  disabled={subscribed}
                />
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none hover:bg-blue-700 transition-colors" type="submit" disabled={subscribed}>
                  Subscribe
                </button>
              </form>
              {subscribed && (
                <div className="text-green-400 text-sm mt-2">
                  You have subscribed to receive the latest updates
                </div>
              )}
            </div>
          </div>
          {/* Trust Indicators */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-400 text-sm">Verified Organization</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-400 text-sm">ISO 9001 Certified</span>
            </div>
            <div className="text-gray-500 text-xs">
              Trusted by 2,500+ students across 50+ countries
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 EduSeminarsPK. All rights reserved. Empowering students since 2017.
            </div>
            <div className="flex flex-wrap items-center justify-center space-x-4 md:space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
