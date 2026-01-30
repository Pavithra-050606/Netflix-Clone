'use client';

import Image from 'next/image';
import { Play, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Hero({ movie }) {
  return (
    <div className="relative h-[80vh] w-full">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        {movie.videoUrl ? (
           <video 
             className="w-full h-full object-cover brightness-[60%]"
             autoPlay 
             muted 
             loop 
             playsInline
             poster={movie.backdropPath}
           >
             <source src={movie.videoUrl} type="video/mp4" />
           </video>
        ) : (
           <Image
             src={movie.backdropPath} 
             alt={movie.title} 
             fill
             className="object-cover brightness-[60%]"
             priority
           />
        )}
        
        {/* Gradient Overlay (Bottom Fade) */}
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-netflix-black via-netflix-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute top-[30%] left-4 md:left-16 max-w-xl text-white space-y-6">
         <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg leading-tight">
           {movie.title}
         </h1>
         <p className="text-lg md:text-xl font-medium drop-shadow-md text-gray-200 line-clamp-3">
           {movie.description}
         </p>
         
         <div className="flex items-center gap-4 text-white/90 text-sm md:text-base font-semibold mb-6">
            <span className="text-green-400">98% Match</span>
            <span className="text-gray-400">2024</span>
            <span className="border border-white/40 px-1 rounded text-xs">4K</span>
            <span>2h 30m</span>
         </div>
         
         <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded hover:bg-opacity-80 transition font-bold text-lg active:scale-95 duration-200">
                <Play className="w-6 h-6 fill-black" />
                Play
            </button>
            <button className="flex items-center gap-2 px-8 py-3 bg-gray-500/40 text-white rounded hover:bg-gray-500/30 transition font-bold text-lg backdrop-blur-md active:scale-95 duration-200">
                <Info className="w-6 h-6" />
                More Info
            </button>
         </div>
      </div>
    </div>
  );
}
