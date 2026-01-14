import React from 'react';
import { Github, Linkedin, Mail, GraduationCap } from 'lucide-react';
import { PROFILE } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            {PROFILE.socials.github && (
              <a href={PROFILE.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" title="GitHub">
                <Github size={20} />
              </a>
            )}
            {PROFILE.socials.linkedin && (
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700 transition-colors" title="LinkedIn">
                <Linkedin size={20} />
              </a>
            )}
            {PROFILE.socials.googleScholar && (
              <a href={PROFILE.socials.googleScholar} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-600 transition-colors" title="Google Scholar">
                <GraduationCap size={20} />
              </a>
            )}
            {PROFILE.socials.email && (
              <a href={`mailto:${PROFILE.socials.email}`} className="text-gray-400 hover:text-red-500 transition-colors" title="Email">
                <Mail size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;