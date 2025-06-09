import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-bold text-white">CardioGlimpse</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Your personalized wellness app for heart health, weight, sleep, fitness, and more.
            </p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Features</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/risk-checker" className="text-gray-400 hover:text-primary-300">Heart Risk Checker</Link></li>
              <li><Link to="/hospital-locator" className="text-gray-400 hover:text-primary-300">Hospital Locator</Link></li>
              <li><Link to="/goals" className="text-gray-400 hover:text-primary-300">Wellness Goals</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-primary-300">Pricing Plans</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-300">Health Tips</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-300">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-300">API Documentation</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-primary-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-300">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-300">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-gray-400 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} CardioGlimpse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;