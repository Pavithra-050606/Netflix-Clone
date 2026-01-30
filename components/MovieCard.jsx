'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, Plus, Check } from 'lucide-react';
import { useModalStore, useListStore } from '@/lib/store';

export default function MovieCard({ movie }) {
  // Local state to track if the user is hovering for the preview effect
  const [isHovered, setIsHovered] = useState(false);
  const { openModal } = useModalStore();
  const { addToList, removeFromList, isInList } = useListStore();
  
  const inList = isInList(movie.id);

  const handleListToggle = (e) => {
    e.stopPropagation();
    if (inList) {
      removeFromList(movie.id);
    } else {
      addToList(movie);
    }
  };

  return (
    <div 
      className="movie-card-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => openModal(movie)}
    >
        {/* The Poster Image */}
        <Image
          className={`object-cover ${isHovered ? "poster-zoom" : "poster-normal"}`}
          src={movie.posterPath}
          alt={movie.title}
          fill
        />

        {/* Expandable Info Panel (Conditional Rendering) */}
        {isHovered && (
          <div className="info-panel shadow-lg animate-fade-in">
             <h4 className="font-bold text-sm mb-1 text-white line-clamp-1">{movie.title}</h4>
             <div className="flex items-center space-x-2 text-[10px] font-medium mb-2">
                <span className="text-green-500">{movie.rating}% Match</span>
                <span className="text-white opacity-80">{movie.year}</span>
             </div>
             
             <div className="flex items-center justify-between">
               <button 
                  className="play-btn-round"
                  onClick={(e) => { e.stopPropagation(); openModal(movie); }}
               >
                  <Play className="w-3 h-3 fill-black" />
               </button>
               
               <button 
                 onClick={handleListToggle}
                 className="p-1.5 rounded-full border border-gray-400 hover:border-white hover:bg-white/10 text-white transition scale-90"
                 title={inList ? "Remove from List" : "Add to List"}
               >
                 {inList ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
               </button>
             </div>
          </div>
        )}
    </div>
  );
}
