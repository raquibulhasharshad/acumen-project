import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Zap } from 'lucide-react';
import { MAIN_NAV_LINKS, NavItem } from '../config/navigation';

/**
 * Universal Footer Component for The Acumen Arc.
 */
const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-4 col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Zap className="w-6 h-6 text-gray-900" />
              <span className="text-xl font-bold tracking-tight text-gray-900">The Acumen Arc</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Where creative strategy and technical expertise converge to deliver digital excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {MAIN_NAV_LINKS.map((item: NavItem) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Expertise */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Core Services</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Marketing PR</li>
              <li>App Development</li>
              <li>Video Production</li>
              <li>Advanced SEO</li>
              <li>Email Marketing</li>
              <li>Social Media</li>
              <li>24/7 Sales&Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Connect</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                <a href="mailto:info@acumenarc.com" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  info@acumenarc.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                <span className="text-gray-600 text-sm">
                  Global HQ, Digital Tower, Suite 101
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} The Acumen Arc. All rights reserved.
            </p>
            <div className="flex space-x-5">
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-gray-700 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-gray-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;