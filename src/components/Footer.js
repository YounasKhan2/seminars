import { MapPin, CheckCircle, Award } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 mt-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
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
          {/* Social & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="space-y-2">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm">University Campus, Main Building</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 text-gray-400 text-sm">📧</span>
              <span className="text-gray-400 text-sm">info@academichub.edu</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-4 h-4 text-gray-400 text-sm">📞</span>
              <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Subscribe to Updates</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white text-sm rounded-l-lg border border-gray-700 focus:outline-none focus:border-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 text-white text-sm rounded-r-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
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
            <div className="text-gray-400 text-sm">
              © 2025 AcademicHub. All rights reserved. Empowering students since 2020.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
