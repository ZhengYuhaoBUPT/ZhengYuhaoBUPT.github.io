import React from 'react';
import { BookOpen, Award, GraduationCap, ExternalLink, Briefcase } from 'lucide-react';
import { PUBLICATIONS, AWARDS, EDUCATION, INTERNSHIPS } from '../constants';

const Academic: React.FC = () => {
  return (
    <div className="space-y-16 animate-fadeIn max-w-5xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary">Academic Portfolio</h1>
        <p className="text-lg text-secondary max-w-2xl mx-auto font-light">
          A selected collection of research, publications, and academic milestones.
        </p>
      </div>

      {/* Publications Section */}
      <section>
        <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-4">
          <BookOpen className="text-accent" size={24} />
          <h2 className="font-serif text-3xl text-primary">Publications</h2>
        </div>
        
        <div className="space-y-6">
          {PUBLICATIONS.map((pub) => (
            <div key={pub.id} className="group bg-white p-6 rounded-xl border border-stone-100 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row justify-between gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                    {pub.title}
                  </h3>
                  <p className="text-secondary text-sm">
                    {pub.authors.map((author, i) => (
                      <span key={i} className={author.includes("Chen") ? "font-bold text-primary underline decoration-accent/50" : ""}>
                        {author}{i < pub.authors.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-700">
                      {pub.journal}
                    </span>
                    <span className="text-sm font-serif text-stone-500 italic">
                      {pub.year}
                    </span>
                  </div>
                </div>
                {pub.link && (
                  <div className="shrink-0">
                    <a 
                      href={pub.link} 
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-stone-50 text-stone-400 group-hover:bg-accent group-hover:text-white transition-all"
                      title="View Paper"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Column: Education & Internships */}
        <div className="space-y-16">
          {/* Education Section */}
          <section>
            <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-4">
              <GraduationCap className="text-accent" size={24} />
              <h2 className="font-serif text-3xl text-primary">Education</h2>
            </div>
            <div className="space-y-8 pl-2">
              {EDUCATION.map((edu) => (
                <div key={edu.id} className="relative pl-8 border-l border-stone-300">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background"></div>
                  <h3 className="text-xl font-bold text-primary">{edu.university}</h3>
                  <div className="text-accent font-medium mt-1">{edu.degree} in {edu.major}</div>
                  <div className="flex justify-between items-center mt-2 text-sm text-stone-500">
                    <span>{edu.yearStart} — {edu.yearEnd}</span>
                  </div>
                  <div className="mt-2 text-sm text-stone-600 bg-stone-50 inline-block px-3 py-1 rounded-md">
                    Advisor: {edu.advisor}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Internship Section */}
          <section>
            <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-4">
              <Briefcase className="text-accent" size={24} />
              <h2 className="font-serif text-3xl text-primary">Internships</h2>
            </div>
            <div className="space-y-8 pl-2">
              {INTERNSHIPS.map((intern) => (
                <div key={intern.id} className="relative pl-8 border-l border-stone-300">
                  <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-stone-400 ring-4 ring-background"></div>
                  <h3 className="text-xl font-bold text-primary">{intern.role}</h3>
                  <div className="text-stone-700 font-medium mt-1">{intern.company}</div>
                  <div className="flex flex-wrap gap-2 items-center mt-2 text-sm text-stone-500">
                     <span>{intern.start} — {intern.end}</span>
                     <span>•</span>
                     <span>{intern.location}</span>
                  </div>
                  <p className="mt-3 text-sm text-stone-600 leading-relaxed font-light">
                    {intern.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Awards */}
        <div>
          <section>
            <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-4">
              <Award className="text-accent" size={24} />
              <h2 className="font-serif text-3xl text-primary">Honors</h2>
            </div>
            <div className="space-y-4">
              {AWARDS.map((award) => (
                <div key={award.id} className="flex items-start gap-4 p-5 bg-white rounded-lg border border-stone-100 hover:border-accent/30 transition-colors">
                  <div className="mt-1 text-accent">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary text-lg">{award.name}</h4>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">{award.level}</span>
                      <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                      <span className="text-sm text-stone-500 font-serif italic">{award.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Academic;
