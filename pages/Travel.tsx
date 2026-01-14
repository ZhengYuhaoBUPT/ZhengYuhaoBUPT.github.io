import React from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TRAVEL_LOGS } from '../constants';

const Travel: React.FC = () => {
  return (
    <div className="space-y-12 animate-fadeIn pb-12">
      <div className="text-center space-y-4 pt-4">
        <h1 className="font-serif text-5xl font-bold text-primary">Wanderlust</h1>
        <div className="w-24 h-1 bg-accent mx-auto"></div>
        <p className="text-lg text-secondary italic font-serif">
          "The world is a book and those who do not travel read only one page."
        </p>
      </div>

      {/* Travel Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TRAVEL_LOGS.map((log) => (
          <Link 
            to={`/travel/${log.id}`}
            key={log.id} 
            className="group block"
          >
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] shadow-md bg-stone-200">
              <img 
                src={log.imageUrl} 
                alt={log.destination} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/600x800/e5e5e5/a3a3a3?text=Travel+Image';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-stone-300 text-xs font-bold tracking-widest uppercase mb-2 flex items-center gap-2">
                  <Calendar size={12} /> {log.date}
                </div>
                <h3 className="text-white font-serif text-2xl font-bold mb-1">{log.destination}</h3>
                <p className="text-stone-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 mt-2">
                  {log.summary}
                </p>
                <div className="flex items-center gap-2 text-accent text-sm font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                  Read Journal <ArrowRight size={14} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Travel;
