import React from 'react';
import { Logo } from './Logo';
import { Linkedin, Twitter, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          <div className="w-full md:w-1/3">
            <Logo className="mb-6" />
            <p className="text-secondary/70 mb-6">
              Your premium nearshore engineering partner. 
              Bridging the gap between enterprise needs and elite talent.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-heading hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-heading hover:bg-primary hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-2/3">
            <div>
              <h4 className="font-bold text-heading mb-6">Services</h4>
              <ul className="space-y-4 text-sm text-secondary/70">
                <li><a href="#" className="hover:text-primary">Software Engineering</a></li>
                <li><a href="#" className="hover:text-primary">Data & AI</a></li>
                <li><a href="#" className="hover:text-primary">Enterprise Solutions</a></li>
                <li><a href="#" className="hover:text-primary">Cloud Infrastructure</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-heading mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-secondary/70">
                <li><a href="#" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Case Studies</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
                <li><a href="#" className="hover:text-primary">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-heading mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-secondary/70">
                <li className="flex items-center gap-2">
                  <Mail size={16} /> info@maintex.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={16} /> +1 (555) 123-4567
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-secondary/50">
          <p>© 2024 MainteX. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-heading">Privacy Policy</a>
            <a href="#" className="hover:text-heading">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};