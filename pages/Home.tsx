import React from 'react';
import { MapPin, Activity, Github, Linkedin, GraduationCap, Mail, Video, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROFILE, NEWS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 animate-fadeIn pb-12">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-12 pt-8">
        <div className="flex-1 text-center md:text-left space-y-6">
          <div className="space-y-2">
            <h2 className="text-accent font-medium tracking-wide uppercase text-sm">Portfolio</h2>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary leading-tight">
              {PROFILE.name}
            </h1>
            <p className="text-xl text-secondary font-light">
              {PROFILE.title}
            </p>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-2 text-stone-500">
            <MapPin size={18} />
            <span>Beijing, CN</span>
          </div>

          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">
            {PROFILE.bio}
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-4">
             {PROFILE.socials.github && (
              <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-stone-800 transition shadow-lg shadow-stone-200">
                <Github size={18} /> GitHub
              </a>
            )}
            {PROFILE.socials.linkedin && (
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white border border-stone-200 text-blue-700 text-sm font-medium rounded-full hover:bg-blue-50 transition shadow-sm">
                <Linkedin size={18} /> LinkedIn
              </a>
            )}
             {PROFILE.socials.googleScholar && (
              <a href={PROFILE.socials.googleScholar} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white border border-stone-200 text-sky-600 text-sm font-medium rounded-full hover:bg-sky-50 transition shadow-sm">
                <GraduationCap size={18} /> Scholar
              </a>
            )}
            {PROFILE.socials.email && (
              <a href={`mailto:${PROFILE.socials.email}`} className="flex items-center gap-2 px-5 py-2.5 bg-white border border-stone-200 text-stone-600 text-sm font-medium rounded-full hover:bg-stone-50 transition shadow-sm">
                <Mail size={18} /> Email
              </a>
            )}
             {PROFILE.socials.douyin && (
              <a href={PROFILE.socials.douyin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-white border border-stone-200 text-pink-600 text-sm font-medium rounded-full hover:bg-pink-50 transition shadow-sm">
                <Video size={18} /> Douyin
              </a>
            )}
          </div>
        </div>

        <div className="relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
            <img
              src="images/profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if local image doesn't exist yet
                (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Yuhao+Zheng&background=0d9488&color=fff&size=512';
              }}
            />
          </div>
          <div className="absolute top-10 -right-4 w-full h-full rounded-full border border-stone-200 -z-0"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-stone-100 rounded-full -z-0"></div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Research Interests */}
        <div className="md:col-span-7 space-y-8">
          <h3 className="font-serif text-3xl text-primary border-b border-stone-200 pb-4">
            Research Interests
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROFILE.interests.map((interest, idx) => (
              <div key={idx} className="p-4 bg-white border border-stone-100 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <span className="text-stone-700 font-medium">{interest}</span>
              </div>
            ))}
          </div>
          <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
            <p className="italic text-stone-500 font-serif text-lg">
              "Creativity is the key to success."
            </p>
          </div>
        </div>

        {/* Latest News */}
        <div className="md:col-span-5">
          <div className="bg-white rounded-2xl p-8 border border-stone-100 shadow-xl shadow-stone-100/50">
            <div className="flex items-center gap-3 mb-6">
              <Activity size={20} className="text-accent" />
              <h3 className="font-serif text-2xl text-primary">Latest News</h3>
            </div>
            <div className="space-y-8">
              {NEWS.map((item) => (
                <div key={item.id} className="group">
                  <span className="text-xs font-bold text-accent tracking-wider uppercase">{item.date}</span>
                  <h4 className="text-base font-semibold text-primary mt-1 group-hover:text-accent transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-stone-500 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-stone-100">
              <Link to="/academic" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors">
                View Academic Portfolio <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;