'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Play, Plus, Check } from 'lucide-react';
import { useModalStore, useListStore } from '@/lib/store';

export default function VideoModal() {
  const { isOpen, closeModal, movie } = useModalStore();
  const { addToList, removeFromList, isInList } = useListStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isOpen || !movie) return null;

  const inList = isInList(movie.id);

  const handleListToggle = () => {
    if (inList) {
      removeFromList(movie.id);
    } else {
      addToList(movie);
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#181818] w-full max-w-4xl rounded-md overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 z-10 bg-[#181818] rounded-full p-2 hover:bg-white/20 transition"
        >
          <X className="w-6 h-6 text-white" />
        </button>

        <div className="relative aspect-video">
           <video 
             className="w-full h-full object-cover"
             autoPlay 
             controls
           >
             <source src={movie.videoUrl} type="video/mp4" />
           </video>
           <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#181818] to-transparent" />
        </div>

        <div className="p-8 space-y-4">
           <div className="flex items-center gap-4">
             <h2 className="text-3xl font-bold text-white">{movie.title}</h2>
             <div className="flex gap-2 ml-auto">
               <button className="flex items-center gap-2 px-6 py-2 bg-white text-black font-bold rounded hover:bg-opacity-90">
                 <Play className="w-5 h-5 fill-black" /> Play
               </button>
               <button 
                 onClick={handleListToggle}
                 className="flex items-center gap-2 px-6 py-2 border-2 border-gray-500 text-gray-300 font-bold rounded hover:border-white hover:text-white transition"
               >
                 {inList ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                 My List
               </button>
             </div>
           </div>
           
           <p className="text-gray-300 text-lg leading-relaxed w-3/4">
             {movie.description}
           </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
