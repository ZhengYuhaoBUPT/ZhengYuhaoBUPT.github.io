import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, Clock } from 'lucide-react';
import { TRAVEL_LOGS } from '../constants';

const TravelDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const log = TRAVEL_LOGS.find((l) => l.id === id);

  if (!log) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl font-serif text-primary">Travel log not found</h2>
        <Link to="/travel" className="text-accent hover:underline">
          Return to Travel Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="animate-fadeIn pb-16">
      <Link 
        to="/travel" 
        className="inline-flex items-center gap-2 text-stone-500 hover:text-accent transition-colors mb-8 group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        Back to Gallery
      </Link>

      <article className="max-w-4xl mx-auto bg-white shadow-sm border border-stone-100 rounded-2xl overflow-hidden">
        {/* Header Image */}
        <div className="relative h-64 md:h-96 w-full bg-stone-200">
           <img 
            src={log.imageUrl} 
            alt={log.destination} 
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://placehold.co/1200x600/e5e5e5/a3a3a3?text=Cover+Image';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3">{log.destination}</h1>
            <div className="flex flex-wrap gap-6 text-sm md:text-base font-light tracking-wide">
              <span className="flex items-center gap-2"><MapPin size={18} /> {log.destination}</span>
              <span className="flex items-center gap-2"><Calendar size={18} /> {log.date}</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-12 space-y-8">
          <div className="prose prose-stone prose-lg max-w-none font-serif text-primary leading-loose whitespace-pre-line first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-[-5px]">
            {log.blogContent}
          </div>

          {/* Gallery Section */}
          {log.galleryImages && log.galleryImages.length > 0 && (
            <div className="pt-12 border-t border-stone-100">
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">Visual Memories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {log.galleryImages.map((img, index) => (
                  <div key={index} className="rounded-lg overflow-hidden h-64 shadow-sm bg-stone-100">
                    <img 
                      src={img} 
                      alt={`${log.destination} memory ${index + 1}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-zoom-in"
                      onError={(e) => {
                         (e.target as HTMLImageElement).src = `https://placehold.co/600x400/e5e5e5/a3a3a3?text=Memory+${index+1}`;
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default TravelDetail;
